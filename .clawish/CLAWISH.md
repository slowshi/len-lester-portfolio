# Clawish

Proprietary in-repo **agent context system** for this portfolio repository.
Layered Markdown, skills, hooks, and optional GitHub promotion — not a runtime
package.

Adapted from the [casino-mobile](https://github.com/slowshi/casino-mobile) reference
implementation (Laslow Labs / OpenClaw-inspired).

## Layers

```text
Always-loaded (small)     AGENTS · IDENTITY · ARCHITECTURE · CONVENTIONS · LESSONS
        │
        ▼ on demand
features/                 Content strategy, styling, copy boundaries
skills/                   content-update, feature-docs, knowledge-management
        ▲
        │ promote when ready
memory/                   YYYY-MM-DD-<slug>.md
```

## Why this repo uses it

Portfolio content changes often (experience, projects, resume sync). Clawish keeps
**site vs resume rules**, ScribbleVet copy boundaries, and agent corrections in
git-reviewed docs instead of chat-only memory.

See **CLAWISH_SETUP.md** to verify wiring.
