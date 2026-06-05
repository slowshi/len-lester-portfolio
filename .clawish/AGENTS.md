# Agent Instructions (len-lester-portfolio)

You are working in **len-lester-portfolio2** — Len Lester's personal portfolio site
(Vite, React 19, Tailwind 4). Almost all user-visible copy lives in
`src/constants.tsx`; the resume markdown lives in `content/lenlester_resume.md`.

**Use `.clawish/` as the source of truth for repo context, content strategy, and
conventions. Start with `.clawish/index.md` for navigation.**

## Context load order

1. **`.clawish/index.md`** — Navigation catalog. Use first for non-trivial work.
2. **`.clawish/IDENTITY.md`** — Project identity and voice.
3. **`.clawish/ARCHITECTURE.md`** — Repo layout and deploy targets.
4. **`.clawish/CONVENTIONS.md`** — Rules that must hold for every change.
5. **`.clawish/TOOLS.md`** — Stack, scripts, external services.
6. **`.clawish/LESSONS.md`** — Prior agent corrections (also injected via hooks).
7. **`.clawish/features/*.md`** — On demand: content strategy, UI patterns, resume sync.
8. **`.clawish/skills/*/`** — On demand: procedural playbooks.

Session hooks prepend **LESSONS**, the standing memory check, and a list of
**memory** filenames. Read only the memory files relevant to the current task.

## Proactive memory

Before your final response on any non-trivial task, do a quick **memory check**.
If the task produced durable knowledge, write `.clawish/memory/YYYY-MM-DD-<slug>.md`
in the same turn (see format in casino-mobile AGENTS.md). Skip routine edits and
facts already in `features/`.

Repeated corrections → **`.clawish/LESSONS.md`**.

Use **`.clawish/skills/clawish-knowledge-management/SKILL.md`** when unsure where
new knowledge belongs.

## Content strategy (critical)

| Surface | Purpose |
| --- | --- |
| **`src/constants.tsx`** | Skills and work — what was built, stacks used |
| **`content/lenlester_resume.md`** | Impact and promotion — growth, acquisition, outcomes |
| **Experience vs Projects (ScribbleVet)** | Experience = Len's role and work; Projects = what the product is |

Do not duplicate the same paragraph across Experience and Projects. Do not name
internal git repos in user-facing copy.

Load **`content-update`** skill before editing portfolio or resume copy.

## Quality bar

- **Package manager:** Bun (`bun install`, `bun run dev`, `bun run build`, `bun run lint`).
- **Content changes:** Prefer editing `constants.tsx` / resume markdown over hardcoding in components.
- **Styling:** Tailwind 4 via `@tailwindcss/vite`; custom Monokai utilities in `src/index.css`.
- **Verify:** Run `bun run build` and `bun run lint` before committing content or code changes.
- Keep changes **scoped** to the request; capture stray ideas in `memory/` instead of expanding scope.

## Symlinks

Root **`AGENTS.md`**, **`.cursorrules`**, and **`CLAUDE.md`** symlink here. Edit
this file (or other `.clawish/` docs), not the symlinks.
