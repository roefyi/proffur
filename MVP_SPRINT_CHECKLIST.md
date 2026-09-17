# 14-Day MVP Sprint Checklist

Each **bolded line** is one Linear issue title. Bullets are the issue description / sub-tasks. Grouped by day ranges for one cycle or separate milestones.

**Linear project:** [Cifon](https://linear.app/freespace/project/cifon-1f10cd05f0a8) (issues FRE-41–FRE-60, labels Day 1-2 / Day 3-5 / Day 6-12 / Day 13-14)

> **As-built (Day 1–2):** Landing page, email-only waitlist, Supabase (`waitlist_signups`: `email`, `created_at`), PostHog (`waitlist_signup` without trade/would-pay), Opaline/shadcn UI, `(marketing)` route group, `SaasProvider` (PostHog). Repo pushed to [github.com/roefyi/cifon](https://github.com/roefyi/cifon). Trade/size/would-pay deferred to Day 3–5 interviews per PRD.

---

## Day 1-2: Landing page + waitlist

**Set up Next.js project and repo**

- [x] Initialize Next.js (App Router, TypeScript)
- [x] Push to GitHub
- [ ] Connect to Vercel (free tier) for auto-deploy

**Install and configure Tailwind + shadcn**

- [x] Tailwind + shadcn/ui (matches PRD; not Saas UI)
- [x] `SaasProvider` in root layout (PostHog client)
- [x] Marketing route group `(marketing)/`

**Set up Supabase project (free tier)**

- [x] Create project (org: Cifon)
- [x] `waitlist_signups`: `email`, `created_at` (email-only waitlist)
- [ ] Add Supabase env vars to Vercel

**Set up PostHog project (free tier)**

- [ ] Create project, get API key
- [ ] Add PostHog env vars to Vercel (local `.env.local` template ready)

**Build the landing page**

- [x] Hero (headline + solution subhead)
- [x] Problem section (4 bullets; source detail under “Too many websites”)
- [x] Waitlist form (email only)
- [x] Confirmation state on submit
- [x] Footer
- [x] Opaline palette, Grok-style layout, scroll animations

**Wire up waitlist form to Supabase**

- [x] Insert on submit
- [x] Graceful errors (duplicate email, missing env)

**Wire up PostHog tracking**

- [x] Page views on load
- [x] `waitlist_signup` on successful submit

**Point domain and go live**

- [ ] Point domain at Vercel (or use `*.vercel.app` subdomain)
- [ ] Full click-through test before sharing link

---

## Day 3-5: Talk to waitlist signups

**Export and segment waitlist signups**

- Pull signups from Supabase (Table Editor or SQL)
- Segment in conversations: trade, company size, willingness to pay (not collected on form)

**Reach out to signups for real conversations**

- Aim for 5–10 conversations (call or in-person, not email-only)
- Prioritize engaged signups and Birmingham-local trades first

**Run structured interview questions**

- How do you currently find and track government bids?
- Have you ever missed a bid you’d have won, or wasted time on one you didn’t qualify for?
- Would you pay for a tool that solved this? How much?
- Which trade should get built first?

**Synthesize findings and decide the build target**

- Pick one trade for Day 6–12
- Pick first sources (likely City of Birmingham + Jefferson County)
- Write findings in Notion/Linear before Day 6

---

## Day 6-12: Build the smallest working version

**Manually map domain rules for the chosen trade + sources**

- Document requirement patterns from real postings (license, insurance, bonding, submission format)
- Use as answer key for extraction QA

**Stand up a minimal ingestion approach**

- Start manual/semi-manual (check 1–2 sources daily)
- Log postings in a Supabase table

**Build a minimal AI extraction step**

- LLM extracts deadline, requirements, checklist from a posting
- Validate against domain-rule answer key

**Build a minimal profile + matching view**

- Pilot business enters license/insurance/certs + expirations
- Compare profile to extracted requirements

**Build the simplest possible delivery mechanism**

- Table view or emailed summary is fine for 3 pilots
- Correct match > polished UI

---

## Day 13-14: Get 3 people using it

**Onboard 3 real businesses from your interview pool**

- Prioritize strong would-pay signal + chosen trade
- Walk through personally (not self-serve)

**Collect feedback and log issues**

- Where match/checklist felt wrong or untrustworthy?
- What was missing?

**Decide next steps**

- Fix before a 4th user
- Confirm trade choice or pivot from interview data
