# Code Conventions

Critical rules for **all** changes. For long procedural docs, use `.clawish/skills/`.

## Always follow

- **Package manager:** Bun only (`bun install`, `bun run`, `bunx`). Do not add npm/yarn lockfiles.
- **TypeScript strict:** Keep `tsc` clean; run `bun run build` before commit.
- **Lint:** ESLint 10 flat config (`eslint.config.js`); `bun run lint` must pass with zero warnings.
- **Tailwind 4:** Use `@import 'tailwindcss'` in `src/index.css`; plugin via `@tailwindcss/vite` in `vite.config.ts`. Monokai colors use custom utilities in `@layer utilities` — do not hardcode hex in components when a utility exists.
- **Content edits:** Update `src/constants.tsx` for site copy; update `content/lenlester_resume.md` for resume. Load **`content-update`** skill for ScribbleVet / Laslow Labs copy rules.
- **Images:** Project cards use square `aspect-square` + `object-contain` in `ProjectCard.tsx`. Assets live in `public/`.
- **Planning source of truth:** `.clawish/` (start with `index.md` and `AGENTS.md`).

## React

- Functional components; interfaces in `constants.tsx` for content shapes.
- Put `key` on list wrapper elements (`<li>`, not inner components).
- `react-scroll` `Link` for in-page anchors; plain `<a>` for external URLs.

## Git

- Commit to `main` when user requests; concise commit messages focused on why.
- Do not commit secrets or `.env` files.

## Skills (load on demand)

| Task | Skill |
| --- | --- |
| Portfolio or resume copy | `content-update` |
| New feature doc or promotion | `feature-docs` |
| Where to put new knowledge | `clawish-knowledge-management` |
