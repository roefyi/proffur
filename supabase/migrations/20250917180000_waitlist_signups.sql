-- Run in Supabase SQL editor or via CLI after linking the project.

create table if not exists public.waitlist_signups (
  id bigint generated always as identity primary key,
  email text not null,
  created_at timestamptz not null default now()
);

create unique index if not exists waitlist_signups_email_key on public.waitlist_signups (lower(email));

alter table public.waitlist_signups enable row level security;

create policy "Allow anonymous waitlist inserts"
  on public.waitlist_signups
  for insert
  to anon, authenticated
  with check (true);
