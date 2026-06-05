# Styling and theme
> Monokai-themed Tailwind utilities and square project images.

## Key Decisions

**Tailwind 4:** `@import 'tailwindcss'` in `src/index.css` with `@theme { --font-sans: Menlo, sans-serif; }`. Vite plugin `@tailwindcss/vite` — no separate PostCSS config.

**Monokai palette:** Custom classes like `monokai-green`, `monokai-bg-black-2`, etc. defined in `@layer utilities`. Prefer these over inline hex in components.

**ProjectCard images:** Square container, `object-contain`, dark background `#1e201b`, padding — prevents non-square asset bleed.

## Known Gotchas

- `App.css` only holds `.name-header` margin; most layout is Tailwind in JSX.
