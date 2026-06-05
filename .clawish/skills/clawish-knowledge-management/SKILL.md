---
name: clawish-knowledge-management
description: Decide where new knowledge belongs inside `.clawish/` and keep always-loaded files lightweight. Use when adding docs, promoting memory, or deciding feature vs skill placement.
---

# Clawish Knowledge Management (portfolio profile)

Single-layer `.clawish/` — no `apps/<app>/` trees or product-knowledge layer.

## Placement

| Question | Write to |
| --- | --- |
| Startup routing or load order | `AGENTS.md` |
| Stable repo fact | `IDENTITY.md` or `ARCHITECTURE.md` |
| Durable coding/content rule | `CONVENTIONS.md` |
| Repeated agent mistake | `LESSONS.md` |
| Content strategy or UI gotcha | `features/*.md` |
| How to perform a task | `skills/*/SKILL.md` |
| Fresh session discovery | `memory/YYYY-MM-DD-<slug>.md` |
| Maintenance chronology | `log.md` |

## Weight rules

Always-loaded files stay short. Heavy detail → `features/` or `skills/`.

## Promote memory

GitHub Actions **Promote Memory to Docs** → root `features/` or base docs. See `feature-docs` skill.
