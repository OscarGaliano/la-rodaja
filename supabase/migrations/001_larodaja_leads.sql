-- La Rodaja: tabla de leads Horeca
-- Ejecutar en un proyecto Supabase dedicado a La Rodaja

create table if not exists public.larodaja_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  establishment text not null,
  phone text not null,
  email text not null,
  establishment_type text not null check (
    establishment_type in ('hotel', 'beach-club', 'restaurante', 'cocteleria', 'eventos')
  ),
  message text,
  source text not null default 'form' check (source in ('form', 'chat')),
  status text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'closed'))
);

create index if not exists larodaja_leads_created_at_idx on public.larodaja_leads (created_at desc);
create index if not exists larodaja_leads_status_idx on public.larodaja_leads (status);

alter table public.larodaja_leads enable row level security;

-- Solo el service role (server) inserta; lectura restringida
create policy "Service role full access"
  on public.larodaja_leads
  for all
  to service_role
  using (true)
  with check (true);
