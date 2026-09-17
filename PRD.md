# Cifon — Product Requirements Document

**Repository:** [github.com/roefyi/cifon](https://github.com/roefyi/cifon)

## Problem

Small trade contractors in Birmingham, AL (landscaping, general construction, and related municipal-service trades) who want to win government contracts have to manually check multiple disconnected sources every day — the City of Birmingham's site, Jefferson County's site, UAB, Birmingham City Schools, Alabama state procurement, plus scattered PDFs and email lists. On top of that, they have to manually figure out whether they even qualify for each opportunity (license, insurance, bonding, certifications), which wastes time and causes missed bids.

National bid-aggregation tools exist, but they're built for large markets and treat Alabama as too small to serve well — postings get listed with no local context (Birmingham's 5% local-preference rule, Jefferson County's pre-qualification requirement, etc.).

## Target user

Owner/operator of a small trade business (roughly 1–20 people) in the Birmingham metro area who bids on municipal government contracts. Skews older (Gen X and up, per national small-business-owner data — treat this as a starting assumption, not a confirmed fact for Birmingham specifically), non-technical, and relies on word-of-mouth referrals rather than searching for tools online.

## Solution (full product vision)

An AI-first "government contractor OS" that:

1. Monitors a fixed set of Birmingham-metro government sources for new bid/RFP postings
2. Reads each posting and extracts requirements (license, insurance, bonding, certifications, deadline, estimated value)
3. Scores each opportunity against a business's stored profile and shows a match percentage
4. Generates a submission checklist per opportunity
5. Tracks deadlines and reminds the owner
6. Watches the owner's own credentials for expiration and warns before they lapse
7. Drafts a first-pass response for the owner to review (never auto-submits — human stays in the loop on anything that creates a legal obligation)

**Note:** the sections above describe the full vision. The MVP scope below is deliberately much smaller.

## MVP scope (this sprint: landing page + waitlist only)

The goal of this phase is not to build the product — it's to validate that real Birmingham contractors want it, and to find out which trade to build first.

**In scope:**

- Public landing page explaining the problem and the solution, in plain language, no jargon
- Waitlist signup form capturing email only — kept deliberately minimal for max conversion; trade, company size, and willingness-to-pay get gathered directly in the day 3-5 conversations instead
- Confirmation state after signup
- Basic analytics (PostHog) tracking page visits and signup conversion
- Signups stored in Supabase

**Explicitly out of scope for this phase:**

- Any actual bid monitoring, extraction, matching, or drafting functionality
- Payments/billing (Stripe) — there is nothing to sell yet
- User accounts / login — the waitlist form itself needs no auth
- Multi-trade differentiated functionality — the landing page can speak broadly to the category, but nothing behind it needs to actually work yet

## Success metrics for the 14-day sprint

- Day 1–2: landing page live, waitlist form functional and tracked in PostHog
- Day 3–5: 5–10 real conversations completed with waitlist signups, covering: current process/pain, willingness to pay, which trade to prioritize
- Day 6–12: a working (even if manual/semi-manual) version of the core loop for one trade, tested against real postings
- Day 13–14: at least 3 real businesses actively using it

## Tech stack

- **Frontend:** Next.js (App Router)
- **UI kit:** Tailwind Shadcn
- **Database/backend:** Supabase (free tier)
- **Analytics:** PostHog (free tier)
- **Payments:** Stripe (free tier) — deferred until there's something to sell
- **Hosting:** Vercel (free tier) — natural fit for Next.js; swap if you have another preference

## Open questions (need your decision, not blocking the landing page build)

- Final product name and domain
- Which single trade to build full functionality for first (decision to come out of the day 3-5 interviews)
- Pricing — not needed for the waitlist, but worth having a rough number in mind before the day 3-5 conversations so you can ask "would you pay $X/month" concretely
