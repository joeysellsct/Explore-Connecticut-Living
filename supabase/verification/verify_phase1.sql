-- Explore Connecticut Living: read-only Phase 1 verification
-- Paste into Supabase SQL Editor and run after 0001_foundation.sql.
-- This script makes NO changes and returns NO lead/customer data.
with expected(name) as (
  values ('counties'),('planning_regions'),('towns'),('town_translations'),
         ('data_sources'),('metric_definitions'),('town_statistics'),
         ('admin_profiles'),('admin_audit_logs'),('leads'),
         ('relocation_sessions'),('consultation_requests')
)
select e.name as table_name,
       (c.oid is not null) as exists_in_public,
       coalesce(c.relrowsecurity,false) as rls_enabled,
       case when c.oid is null then 'MISSING'
            when not c.relrowsecurity then 'RLS OFF'
            else 'OK' end as status
from expected e
left join pg_namespace n on n.nspname='public'
left join pg_class c on c.relnamespace=n.oid and c.relname=e.name and c.relkind in ('r','p')
order by e.name;

-- Confirm private tables have no anon/authenticated policies allowing direct access.
select tablename, policyname, roles, cmd
from pg_policies
where schemaname='public'
  and tablename in ('leads','relocation_sessions','consultation_requests','admin_audit_logs')
order by tablename,policyname;

-- Count static reference rows. 169 towns are NOT expected until import.
select 'counties' as dataset, count(*) as rows from public.counties
union all select 'planning_regions', count(*) from public.planning_regions
union all select 'towns', count(*) from public.towns;
