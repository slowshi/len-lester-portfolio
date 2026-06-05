#!/usr/bin/env bash
# .clawish/hooks/session-start.sh
# Runs at session start for both Cursor and Claude Code.
# Injects memory filenames as context. Agent reads relevant files on demand.
#
# Cursor: configure hooks with: .clawish/hooks/session-start.sh --cursor
# Claude Code: use the same script path without --cursor (plain-text context on stdout).

CURSOR_JSON_OUTPUT=false
if [ "${1:-}" = "--cursor" ]; then
  CURSOR_JSON_OUTPUT=true
fi

PROJECT_DIR="${CURSOR_PROJECT_DIR:-$CLAUDE_PROJECT_DIR}"

# Fallback to script directory if hook env vars are missing
if [ -z "$PROJECT_DIR" ]; then
  SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
  PROJECT_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
fi

# --- List memory filenames ---

ROOT_MEMORY_DIR="$PROJECT_DIR/.clawish/memory"
MEMORY_ENTRIES=""
if [ -d "$ROOT_MEMORY_DIR" ]; then
  for MEMORY_FILE in "$ROOT_MEMORY_DIR"/*.md; do
    [ -e "$MEMORY_FILE" ] || continue
    BASENAME="$(basename "$MEMORY_FILE")"
    [ "$BASENAME" = ".gitkeep" ] && continue
    MEMORY_ENTRIES="${MEMORY_ENTRIES}.clawish/memory/$BASENAME
"
  done
fi

APPS_DIR="$PROJECT_DIR/apps"
if [ -d "$APPS_DIR" ]; then
  for APP_MEMORY_DIR in "$APPS_DIR"/*/.clawish/memory; do
    [ -d "$APP_MEMORY_DIR" ] || continue
    APP_NAME="$(basename "$(dirname "$(dirname "$APP_MEMORY_DIR")")")"
    for MEMORY_FILE in "$APP_MEMORY_DIR"/*.md; do
      [ -e "$MEMORY_FILE" ] || continue
      BASENAME="$(basename "$MEMORY_FILE")"
      [ "$BASENAME" = ".gitkeep" ] && continue
      MEMORY_ENTRIES="${MEMORY_ENTRIES}apps/$APP_NAME/.clawish/memory/$BASENAME
"
    done
  done
fi

MEMORY_LIST=""
if [ -n "$MEMORY_ENTRIES" ]; then
  MEMORY_LIST="$(printf "%s" "$MEMORY_ENTRIES" | sort -r | sed '/^$/d')"
fi

# --- Read LESSONS.md content ---

LESSONS_FILE="$PROJECT_DIR/.clawish/LESSONS.md"
LESSONS_CONTENT=""
if [ -f "$LESSONS_FILE" ]; then
  # Check if file has content beyond the header (more than 3 lines)
  LINE_COUNT=$(wc -l < "$LESSONS_FILE")
  if [ "$LINE_COUNT" -gt 3 ]; then
    LESSONS_CONTENT=$(cat "$LESSONS_FILE")
  fi
fi

# Always remind agents to perform the memory check. Relying only on AGENTS.md
# proved too easy to skip during long implementation sessions.
CONTEXT="--- CLAWISH MEMORY CHECK ---
Before your final response on any non-trivial task, ask whether the work produced a significant decision, non-obvious bug fix, pattern change, platform discovery, or user correction.
If yes, write memory in the same turn: use .clawish/memory/YYYY-MM-DD-<slug>.md for studio-wide discoveries, or apps/<app>/.clawish/memory/YYYY-MM-DD-<slug>.md for one-app discoveries. Do not ask first. Skip routine edits and facts already captured elsewhere."

if [ -n "$LESSONS_CONTENT" ]; then
  CONTEXT="$CONTEXT

--- LESSONS (from .clawish/LESSONS.md) ---
$LESSONS_CONTENT"
fi

if [ -n "$MEMORY_LIST" ]; then
  if [ -n "$CONTEXT" ]; then
    CONTEXT="$CONTEXT

"
  fi
  CONTEXT="${CONTEXT}--- MEMORY (from root/app .clawish/memory/) ---
Available:
$MEMORY_LIST
Read root or app memory files relevant to your current task."
fi

# Output in platform-appropriate format
if [ "$CURSOR_JSON_OUTPUT" = true ]; then
  # Cursor: JSON with additional_context (see Cursor agent hooks docs).
  # Prefer ubiquitous runtimes over a jq dependency so session context still
  # injects on fresh machines.
  if command -v python3 &>/dev/null; then
    CONTEXT="$CONTEXT" python3 - <<'PY'
import json
import os

print(json.dumps({"additional_context": os.environ["CONTEXT"]}))
PY
  elif command -v node &>/dev/null; then
    CONTEXT="$CONTEXT" node -e 'console.log(JSON.stringify({ additional_context: process.env.CONTEXT || "" }))'
  else
    echo "ERROR: Cursor hook JSON output requires python3 or node in PATH." >&2
    exit 1
  fi
else
  # Claude Code: plain stdout is added as context for SessionStart
  echo "$CONTEXT"
fi
