-- Apply only if you already created waitlist_signups with trade / company_size columns.

alter table public.waitlist_signups
  drop column if exists trade,
  drop column if exists trade_other,
  drop column if exists company_size;
