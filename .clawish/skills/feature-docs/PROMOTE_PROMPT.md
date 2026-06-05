You are running the memory promotion workflow for **len-lester-portfolio2**
(Vite + React portfolio site; content in `src/constants.tsx` and
`content/lenlester_resume.md`).

Environment: `SOURCE_BRANCH`, `DRY_RUN`.

## Task

Promote `.clawish/memory/*.md` into durable docs:

- Target `features/*.md`, `CONVENTIONS.md`, `LESSONS.md`, or skills — not user-facing copy in `constants.tsx` unless the task explicitly includes content promotion.

## Steps

1. List `.clawish/memory/*.md` (exclude `.gitkeep`). If empty, stop.
2. Read `.clawish/skills/feature-docs/SKILL.md` and list `.clawish/features/`.
3. Classify each memory file → target doc and section.
4. If `DRY_RUN=true`, print plan only.
5. Else apply edits, delete promoted memory files, open PR.

Do not edit `src/constants.tsx` or resume markdown unless memory explicitly documents a content rule that belongs in `features/*-copy.md`.
