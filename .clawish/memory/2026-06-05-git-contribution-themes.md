# Git contribution themes (resume research)

Derived from git history on 2026-06-05 to promote impact on the resume. GitHub
user is **slowshi** (email lenster921@gmail.com). Use as **work themes**, never
list repo names in user-facing copy.

## ScribbleVet (Kairo-Care org)

- **scribble-next** — frontend, ~1,116 commits (top contributor, primary owner).
  Next.js clinic app: exam-room recording + recovery, AI SOAP notes/templates,
  Care Cards (AI handouts, charts, dental), practice handout libraries,
  email-to-client. **Billing v2**: subscriptions, enterprise seat management,
  global invoices, sales_flow. **Security is a major theme**: PHI/PII redaction
  from Sentry/PostHog telemetry, stored-XSS fixes across rich-text/Care Card
  rendering, SSO callback validation, mobile signing path hardening,
  practice-scoped audio. SSR root, Apollo websocket auth.
- **scribble** (the "API") — only ~10 slowshi commits (templates, visit types,
  subscription status). Backend/Elixir work mostly flows through cloud-scribble.
- **cloud-scribble** — parent monorepo, ~200+ commits. **Coder ephemeral dev
  workspaces** (Docker templates, build/venv caching, golden-disk warm boot,
  Phoenix API), **AI tooling** (`/fix-conflicts` AI conflict resolution, Notion
  Coder sync, PM intake), Twilio dev webhook proxy, CI prompt-injection hardening,
  nightly submodule pointer automation.

## Laslow Labs

- **casino-mobile** — shared Expo/React Native monorepo (slowshi + Len, created
  ~May 2026 consolidating standalone apps). Apps: blackjack, roulette, craps,
  video poker, **Pai Gow** (newer, active dev — don't claim store-shipped yet).
  Firebase Analytics, AdMob/IAP, SKAdNetwork, EAS build/submit + OTA, "studio"
  cross-promotion catalog. **Standout: an AI "Linear/Sprite agent runner"** that
  takes Linear issues (LAS-###) and runs orchestrated Cursor coding agents to
  produce PRs — autonomous issue-to-PR workflow.
- **writing-prompt-generator** — 25 commits, Sep–Oct 2023, Len Lester. Expo RN
  creative writing app with AdMob mediation + IAP (remove-ads).

## Resume framing applied (2026-06-05)

Standardized every role to: `### Company`, `**Title** · dates`, one-line context
sentence, then flat impact bullets (removed the bold sub-group headers).
De-emphasized Age of Learning to one combined 2010–2022 entry with 3 metric
bullets. Added Coder/AI tooling and the Laslow AI agent runner as the modern
differentiators.

**Per-user framing preferences (do not regress):** metric is "5,000+ paying
users" (not "practices"). Keep billing/jargon generic ("subscription, seat
management, admin billing" — not "billing v2"). Do NOT surface security details
(stored-XSS, PHI/PII telemetry redaction) on the resume — prefer mainline
product features and reliability framing.
