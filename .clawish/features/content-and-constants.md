# Content and constants
> Site copy lives in `src/constants.tsx`; components only render data.

## Key Decisions

**Experience vs Projects:** Experience accordion = employment narrative (what Len did at a company). Projects section = product showcase (what the app/product is). ScribbleVet must not repeat the same paragraph in both — Experience emphasizes role + stack work; Projects explains the AI veterinary scribe product.

**No internal repo names:** User-facing copy must not reference cloud-scribble, qa-party, or other internal repository names. Git history informs bullet themes only.

**Info block:** `info` object holds hero name, title, location, one-line description, social links, resume PDF path.

## Implicit Rules

- Project `github` may be empty string when repo is private — hide GitHub button in `ProjectCard`.
- ScribbleVet Experience links to Instinct acquisition news; ScribbleVet Project links to scribblevet.com.
- Laslow Labs project cards link to laslowlabs.com product pages.

## Known Gotchas

- React list keys belong on `<li>` in `App.tsx`, not on `ProjectCard`.
- `ProjectCard` images use square aspect + `object-contain` to avoid bleed on wide assets (e.g. roulette icon).
