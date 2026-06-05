#!/usr/bin/env bash
# Remove clawish from this repository (see .clawish/README.md).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
FORCE=false
if [[ "${1:-}" == "--force" ]]; then
  FORCE=true
fi

ask() {
  if $FORCE; then
    return 0
  fi
  read -r -p "$1 [y/N] " reply
  [[ "${reply,,}" == "y" || "${reply,,}" == "yes" ]]
}

is_clawish_agents_link() {
  local p="$1"
  [[ -L "$p" ]] || return 1
  local t
  t="$(readlink "$p" 2>/dev/null || true)"
  [[ "$t" == *".clawish/AGENTS.md" ]] || [[ "$t" == ".clawish/AGENTS.md" ]]
}

echo "This will remove .clawish/ and clawish-related hook and symlink files under:"
echo "  $ROOT"
echo ""

if ! ask "Continue?"; then
  echo "Aborted."
  exit 1
fi

for name in AGENTS.md CLAUDE.md .cursorrules; do
  path="$ROOT/$name"
  if is_clawish_agents_link "$path"; then
    rm "$path"
    echo "Removed symlink $name"
  fi
done

cursor_hooks="$ROOT/.cursor/hooks.json"
if [[ -f "$cursor_hooks" ]]; then
  if grep -q "session-start.sh" "$cursor_hooks" 2>/dev/null; then
    if ask "Remove $cursor_hooks (clawish sessionStart hook)?"; then
      rm "$cursor_hooks"
      echo "Removed .cursor/hooks.json"
    fi
  else
    echo "Leaving .cursor/hooks.json (no clawish session-start reference)."
  fi
fi
if [[ -d "$ROOT/.cursor" ]] && [[ -z "$(ls -A "$ROOT/.cursor" 2>/dev/null)" ]]; then
  rmdir "$ROOT/.cursor" 2>/dev/null && echo "Removed empty .cursor/"
fi

claude_settings="$ROOT/.claude/settings.json"
if [[ -f "$claude_settings" ]]; then
  if grep -q "session-start.sh" "$claude_settings" 2>/dev/null; then
    if ask "Remove $claude_settings (clawish SessionStart hooks)?"; then
      rm "$claude_settings"
      echo "Removed .claude/settings.json"
    fi
  else
    echo "Leaving .claude/settings.json (no clawish session-start reference)."
  fi
fi
if [[ -d "$ROOT/.claude" ]] && [[ -z "$(ls -A "$ROOT/.claude" 2>/dev/null)" ]]; then
  rmdir "$ROOT/.claude" 2>/dev/null && echo "Removed empty .claude/"
fi

docs_clawish="$ROOT/docs/clawish.md"
if [[ -f "$docs_clawish" ]] && grep -q "Human-readable overview of the \*\*clawish\*\*" "$docs_clawish" 2>/dev/null; then
  if ask "Remove $docs_clawish?"; then
    rm "$docs_clawish"
    echo "Removed docs/clawish.md"
  fi
fi

workflow="$ROOT/.github/workflows/promote-memory.yml"
if [[ -f "$workflow" ]] && grep -q "Promote Memory" "$workflow" 2>/dev/null; then
  if ask "Remove $workflow?"; then
    rm "$workflow"
    echo "Removed promote-memory workflow"
  fi
fi

if [[ -d "$ROOT/.github/scripts" ]] && [[ -z "$(ls -A "$ROOT/.github/scripts" 2>/dev/null)" ]]; then
  rmdir "$ROOT/.github/scripts" 2>/dev/null || true
fi

if [[ -d "$ROOT/.clawish" ]]; then
  rm -rf "$ROOT/.clawish"
  echo "Removed .clawish/"
fi

echo "Done."
