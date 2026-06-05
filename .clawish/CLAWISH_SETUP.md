# Clawish Setup (portfolio profile)

Operational guide for **len-lester-portfolio2**. Reference implementation:
`casino-mobile/.clawish/CLAWISH_SETUP.md`.

## Installed layout

```text
.clawish/
├── CLAWISH.md · CLAWISH_SETUP.md · README.md · index.md
├── AGENTS.md · IDENTITY.md · ARCHITECTURE.md · CONVENTIONS.md · TOOLS.md · LESSONS.md
├── log.md · uninstall.sh
├── features/          content-and-constants, resume, styling, scribblevet, laslow-labs
├── memory/
├── hooks/             session-start.sh, cursor-hooks.json, claude-settings.json
└── skills/            content-update, feature-docs, clawish-knowledge-management

docs/clawish.md
.github/workflows/promote-memory.yml   (optional; needs CURSOR_API_KEY)

Root symlinks:
  AGENTS.md · CLAUDE.md · .cursorrules → .clawish/AGENTS.md
.cursor/hooks.json
.claude/settings.json
```

## Fresh install (already done in this repo)

```bash
mkdir -p .clawish/{features,memory,skills,hooks} .cursor .claude docs .github/workflows
# populate .clawish/ (see casino-mobile reference)
ln -sf .clawish/AGENTS.md AGENTS.md CLAUDE.md .cursorrules
cp .clawish/hooks/cursor-hooks.json .cursor/hooks.json
cp .clawish/hooks/claude-settings.json .claude/settings.json
chmod +x .clawish/hooks/session-start.sh
```

## Verify checklist

```bash
readlink AGENTS.md CLAUDE.md .cursorrules
test -x .clawish/hooks/session-start.sh && echo "hook ok"
bun run build && bun run lint
```

- [ ] Root symlinks resolve to `.clawish/AGENTS.md`
- [ ] `.cursor/hooks.json` references `session-start.sh --cursor`
- [ ] `python3` or `node` on PATH (Cursor hook)

## Portfolio vs casino-mobile

| casino-mobile | This repo |
| --- | --- |
| Multi-app monorepo | Single Vite SPA |
| `apps/<app>/.clawish/` | Not used |
| `product-knowledge/` | Not used |
| Compliance / EAS skills | `content-update` skill |
| 14+ feature docs | 5 content-focused feature docs |

## Uninstall

```bash
.clawish/uninstall.sh
```

## Maintenance

| Task | How |
| --- | --- |
| Session discovery | Write `.clawish/memory/YYYY-MM-DD-<slug>.md` |
| Promote | GitHub Actions → Promote Memory (dry run first) |
| Repeated mistake | Add to `LESSONS.md` |
| Content edit | Load `content-update` skill |

Bootstrapped: 2026-06-05.
