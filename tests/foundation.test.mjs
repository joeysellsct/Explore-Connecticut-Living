import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
test('private lead tables have RLS enabled',()=>{const s=read('supabase/migrations/0001_foundation.sql');for(const t of ['leads','relocation_sessions','consultation_requests','admin_audit_logs'])assert.match(s,new RegExp('alter table public\\.'+t+' enable row level security'));});
test('admin role requires allowlisted profile',()=>{assert.match(read('app/admin/page.tsx'),/admin_profiles/);assert.match(read('app/admin/page.tsx'),/getUser/);});
test('English and Spanish routes exist',()=>{assert.match(read('app/[locale]/layout.tsx'),/'en','es'/);});

test('restaurant directory has unique town keys and five sourced Brookfield listings',()=>{
 const source=read('lib/town-restaurants.ts');
 const slugs=[...source.matchAll(/^\s*'([a-z]+(?:-[a-z]+)*)':\s*\[/gm)].map(m=>m[1]);
 assert.equal(new Set(slugs).size,slugs.length,'Duplicate town key would silently hide restaurants');
 const brookfield=source.match(/'brookfield':\s*\[([\s\S]*?)\],/);
 assert.ok(brookfield,'Brookfield listings are present');
 assert.equal((brookfield[1].match(/checkedOn:/g)||[]).length,5);
 for(const name of ['BarNaan','Hacienda Don Manuel','Housaku Asian Fusion','Portobello Italian Restaurant',"O'Connor's Public House"])assert.ok(brookfield[1].includes(name),name);
});
