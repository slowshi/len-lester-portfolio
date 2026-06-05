# Tools and Environment

## Stack

| Tool | Version / notes |
| --- | --- |
| **Bun** | Package manager and runtime (`bun install`) |
| **Vite** | 8.x — dev server and production build |
| **React** | 19.x |
| **TypeScript** | 6.x |
| **Tailwind CSS** | 4.x via `@tailwindcss/vite` |
| **ESLint** | 10 flat config + typescript-eslint 8 |
| **Prettier** | 3.x — `.prettierrc` at repo root |

## Scripts

```bash
bun run dev        # Vite + tsc watch (concurrently)
bun run build      # tsc && vite build
bun run lint       # eslint src
bun run ts         # tsc --noEmit watch-friendly
bun run preview    # preview production build
```

## External services

| Service | Usage |
| --- | --- |
| **Vercel** | Deploy from `main`; analytics via `@vercel/analytics` |
| **GitHub** | slowshi/len-lester-portfolio |

## Content files

| File | Role |
| --- | --- |
| `src/constants.tsx` | Site experience, projects, hero info |
| `content/lenlester_resume.md` | Resume markdown source |
| `public/resume/lenlester_resume.pdf` | Downloadable resume (export from markdown) |

## Agent hooks

- **Cursor:** `.cursor/hooks.json` → `.clawish/hooks/session-start.sh --cursor`
- **Claude Code:** `.claude/settings.json` → same script (plain text)

Requires `python3` or `node` on PATH for Cursor JSON hook output.
