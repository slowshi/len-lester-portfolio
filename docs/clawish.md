# Clawish — human overview

Agent context system for this portfolio repo. Full docs live under [`.clawish/`](../.clawish/).

## What it is

Structured Markdown + skills so Cursor, Claude Code, and CI agents share the same
rules for:

- **Site copy** (`src/constants.tsx`) — skills and work
- **Resume** (`content/lenlester_resume.md`) — impact and promotion
- **ScribbleVet / Laslow Labs** copy boundaries (no internal repo names)

## Quick links

| Doc | Purpose |
| --- | --- |
| [AGENTS.md](../.clawish/AGENTS.md) | Agent entry (also at repo root via symlink) |
| [index.md](../.clawish/index.md) | Navigation catalog |
| [CLAWISH_SETUP.md](../.clawish/CLAWISH_SETUP.md) | Install and verify |

## Verify

```bash
readlink AGENTS.md
test -x .clawish/hooks/session-start.sh && echo ok
```

Inspired by OpenClaw / Laslow Labs casino-mobile Clawish setup.
