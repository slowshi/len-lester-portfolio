---
name: content-update
description: Update portfolio site copy (constants.tsx) and resume markdown with the correct split — skills/work on site, impact on resume. Use when editing ScribbleVet, Laslow Labs, experience, or projects.
---

# Content Update

Procedural guide for editing portfolio content without duplicating or leaking
internal repo names.

## Before editing

1. Read `.clawish/features/content-and-constants.md`
2. Read `.clawish/features/scribblevet-copy.md` and/or `.clawish/features/laslow-labs-copy.md`
3. Read `.clawish/features/resume-markdown.md` if touching `content/lenlester_resume.md`

## Site (`src/constants.tsx`)

| Section | Write about |
| --- | --- |
| **Experience** | What Len did, technologies used, role scope |
| **Projects** | What the product is, user-facing features, stack tags |
| **info.description** | One line — technical focus, not growth stats |

**ScribbleVet Experience:** Next.js + Elixir work, Coder workspaces, AI release tooling, billing.

**ScribbleVet Project:** AI veterinary scribe product description → link scribblevet.com.

**Laslow Labs:** Five separate project cards; Experience covers shared mobile architecture.

**Avoid on site:** Customer counts, acquisition as primary story, repo names, commit statistics.

## Resume (`content/lenlester_resume.md`)

| Section | Write about |
| --- | --- |
| **ScribbleVet** | Impact — 100→5,000+ customers, Instinct acquisition, outcome bullets |
| **Laslow Labs** | Indie shipping velocity, portfolio monetization |
| **AOL** | Keep existing metric bullets unless user asks to trim |

**Avoid on resume:** Long stack dumps, internal repo catalog, duplicating site paragraphs verbatim.

## After editing

```bash
bun run build && bun run lint
```

Remind user PDF export is separate if only markdown changed.

## Git history as research

Use `gh api` / commit themes to inform bullets — output is **impact or work themes**, never a list of repository names.
