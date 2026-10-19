-- Explore Connecticut Living Phase 1. Run once in Supabase SQL editor.
create extension if not exists pgcrypto;

create table public.counties (
  id smallint primary key,
  name text not null unique,
  slug text not null unique
);
create table public.planning_regions (
  id smallint primary key,
  name text not null unique,
  slug text not null unique
);
create table public.towns (
  id bigint generated always as identity primary key,
  name text not null unique,
  slug text not null unique,
  county_id smallint references public.counties(id),
  planning_region_id smallint references public.planning_regions(id),
  census_geoid text unique,
  latitude double precision,
  longitude double precision,
  created_at timestamptz not null default now()
);
create table public.town_translations (
  town_id bigint not null references public.towns(id) on delete cascade,
  locale text not null check (locale in ('en','es')),
  title text not null,
  description text,
  publication_status text not null default 'draft' check (publication_status in ('draft','review','published')),
  approved_by uuid,
  approved_at timestamptz,
  primary key(town_id,locale)
);
create table public.data_sources (
  id bigint generated always as identity primary key,
  name text not null,
  publisher text not null,
  url text not null,
  license_notes text,
  refresh_interval text,
  enabled boolean not null default false
);
create table public.metric_definitions (
  id bigint generated always as identity primary key,
  metric_key text not null unique,
  label text not null,
  unit text,
  methodology text
);
create table public.town_statistics (
  id bigint generated always as identity primary key,
  town_id bigint not null references public.towns(id),
  metric_id bigint not null references public.metric_definitions(id),
  source_id bigint not null references public.data_sources(id),
  numeric_value numeric,
  text_value text,
  reporting_period text not null,
  retrieved_at timestamptz not null,
  source_url text not null,
  status text not null default 'pending' check(status in ('pending','published','flagged','rejected')),
  unique(town_id,metric_id,source_id,reporting_period)
);
create table public.admin_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null check(role in ('owner','admin','editor','analyst')),
  active boolean not null default true,
  created_at timestamptz not null default now()
);
create table public.admin_audit_logs (
  id bigint generated always as identity primary key,
  actor_id uuid references auth.users(id),
  action text not null,
  entity_type text not null,
  entity_id text,
  details jsonb not null default '{}'::jsonb,
  occurred_at timestamptz not null default now()
);
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  marketing_consent boolean not null default false,
  consent_recorded_at timestamptz,
  created_at timestamptz not null default now(),
  deleted_at timestamptz
);
create table public.relocation_sessions (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references public.leads(id) on delete set null,
  answers jsonb not null default '{}'::jsonb,
  algorithm_version text,
  created_at timestamptz not null default now()
);
create table public.consultation_requests (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads(id),
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

-- RLS is deny-by-default. Do not create direct browser access to private lead tables.
alter table public.counties enable row level security;
alter table public.planning_regions enable row level security;
alter table public.towns enable row level security;
alter table public.town_translations enable row level security;
alter table public.data_sources enable row level security;
alter table public.metric_definitions enable row level security;
alter table public.town_statistics enable row level security;
alter table public.admin_profiles enable row level security;
alter table public.admin_audit_logs enable row level security;
alter table public.leads enable row level security;
alter table public.relocation_sessions enable row level security;
alter table public.consultation_requests enable row level security;

-- Public visitors may read only non-sensitive published reference data.
create policy "read counties" on public.counties for select to anon, authenticated using (true);
create policy "read planning regions" on public.planning_regions for select to anon, authenticated using (true);
create policy "read towns" on public.towns for select to anon, authenticated using (true);
create policy "read published descriptions" on public.town_translations for select to anon, authenticated using (publication_status='published');
create policy "read published metrics" on public.town_statistics for select to anon, authenticated using (status='published');
create policy "read metric definitions" on public.metric_definitions for select to anon, authenticated using (true);
create policy "read source citations" on public.data_sources for select to anon, authenticated using (true);

-- Admins can read only their own role row. All admin writes are performed by
-- reviewed server-side workflows, never through direct browser mutations.
create policy "read own admin role" on public.admin_profiles for select to authenticated
  using (user_id = (select auth.uid()));

-- Admin, audit, leads, sessions and consultation tables have NO public
-- insert/update/delete policies. This intentionally blocks client writes.
-- Future backend endpoints must validate identity, permissions, consent and rate limits.

insert into public.counties (id,name,slug) values
(1,'Fairfield','fairfield'),(2,'Hartford','hartford'),(3,'Litchfield','litchfield'),
(4,'Middlesex','middlesex'),(5,'New Haven','new-haven'),(6,'New London','new-london'),
(7,'Tolland','tolland'),(8,'Windham','windham');
insert into public.planning_regions (id,name,slug) values
(1,'Capitol','capitol'),(2,'Greater Bridgeport','greater-bridgeport'),
(3,'Lower Connecticut River Valley','lower-connecticut-river-valley'),
(4,'Naugatuck Valley','naugatuck-valley'),(5,'Northeastern Connecticut','northeastern-connecticut'),
(6,'Northwest Hills','northwest-hills'),(7,'South Central Connecticut','south-central-connecticut'),
(8,'Southeastern Connecticut','southeastern-connecticut'),
(9,'Western Connecticut','western-connecticut');
