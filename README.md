# Cifon

Marketing landing page and email waitlist for Cifon — helping small trade contractors find and qualify for government bids.

See [PRD.md](./PRD.md) for product scope and sprint goals.

## Setup

```bash
npm install
cp .env.example .env.local
```

Add Supabase and PostHog keys to `.env.local`, then run the SQL in `supabase/migrations/` on your Supabase project.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

Next.js (App Router), Tailwind, shadcn/ui, Supabase, PostHog.
