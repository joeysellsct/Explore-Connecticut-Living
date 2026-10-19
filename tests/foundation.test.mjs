import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
test('private lead tables have RLS enabled',()=>{const s=read('supabase/migrations/0001_foundation.sql');for(const t of ['leads','relocation_sessions','consultation_requests','admin_audit_logs'])assert.match(s,new RegExp('alter table public\\.'+t+' enable row level security'));});
test('admin role requires allowlisted profile',()=>{assert.match(read('app/admin/page.tsx'),/admin_profiles/);assert.match(read('app/admin/page.tsx'),/getUser/);});
test('English and Spanish routes exist',()=>{assert.match(read('app/[locale]/layout.tsx'),/'en','es'/);});
