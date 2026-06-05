# System Architecture

## Overview

Static SPA built with Vite 8, React 19, and Tailwind 4. No backend. Content is
data-driven from TypeScript constants and a markdown resume file.

## Layout

```
src/
  constants.tsx      Experience, projects, info — primary content source
  App.tsx            Page sections (nav, about, experience, projects, contact)
  components/        Accordion, ProjectCard, SocialLinks, Link
  index.css          Tailwind import + Monokai utility classes
  main.tsx           React root + Vercel analytics inject

content/
  lenlester_resume.md   Resume source of truth (markdown)

public/
  *.png                Project and employer images
  resume/              PDF served at /resume/lenlester_resume.pdf
  portfolio_icon.svg   Favicon

dist/                  Production build output (gitignored)
```

## Data flow

```
constants.tsx  →  App / ExperienceAccordion / ProjectCard  →  rendered site
resume.md      →  (manual export)  →  public/resume/*.pdf  →  nav link
```

## External services

- **Vercel** — hosting and analytics (`@vercel/analytics` in `main.tsx`)
- **react-scroll** — in-page nav to experience/projects sections

## Key decisions

**Single content file for site copy:** `constants.tsx` keeps the portfolio easy to
update without touching layout components. Do not scatter copy in JSX unless
unavoidable.

**Experience vs Projects serve different readers:** Experience describes employment;
Projects describe products (especially ScribbleVet as an AI scribe, Laslow Labs apps
as individual products).

**Resume is separate from site constants:** Resume markdown targets recruiters;
site constants target visitors browsing skills.
