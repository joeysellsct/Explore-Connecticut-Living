import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
test('private lead tables have RLS enabled',()=>{const s=read('supabase/migrations/0001_foundation.sql');for(const t of ['leads','relocation_sessions','consultation_requests','admin_audit_logs'])assert.match(s,new RegExp('alter table public\\.'+t+' enable row level security'));});
test('admin role requires allowlisted profile',()=>{assert.match(read('app/admin/page.tsx'),/admin_profiles/);assert.match(read('app/admin/page.tsx'),/getUser/);});
test('English and Spanish routes exist',()=>{assert.match(read('app/[locale]/layout.tsx'),/'en','es'/);});

test('restaurant directory has unique town keys and five sourced Brookfield listings',()=>{
 const source=read('lib/town-restaurants.ts');
 const directory=source.split('export const joeyTopPicks')[0];
 const slugs=[...directory.matchAll(/^\s*'([a-z]+(?:-[a-z]+)*)':\s*\[/gm)].map(m=>m[1]);
 assert.equal(new Set(slugs).size,slugs.length,'Duplicate town key would silently hide restaurants');
 const brookfield=source.match(/'brookfield':\s*\[([\s\S]*?)\],/);
 assert.ok(brookfield,'Brookfield listings are present');
 assert.equal((brookfield[1].match(/checkedOn:/g)||[]).length,5);
 for(const name of ['BarNaan','Hacienda Don Manuel','Housaku Asian Fusion','Portobello Italian Restaurant',"O'Connor's Public House"])assert.ok(brookfield[1].includes(name),name);
});

test('staging remains noindex and affiliate resources appear on both surfaces',()=>{
 assert.match(read('app/[locale]/layout.tsx'),/index:false,follow:false/);
 assert.match(read('app/robots.ts'),/disallow:'\/'/);
 const partners=read('lib/moving-resources.ts');
 assert.match(partners,/frontier\.com\/ftr-buy/);
 assert.match(partners,/amazon\.com\/shop\/influencer-/);
 assert.match(read('app/[locale]/towns/[slug]/TownMovingResources.tsx'),/partnerLinks\.map/);
 assert.match(read('app/[locale]/moving-resources/page.tsx'),/partnerLinks\.map/);
});
test('personal restaurant picks remain limited to the three approved towns',()=>{
 const source=read('lib/town-restaurants.ts');
 const picks=source.split('export const joeyTopPicks')[1]||'';
 const towns=[...picks.matchAll(/^\s*'([a-z]+(?:-[a-z]+)*)':\s*\[/gm)].map(m=>m[1]).sort();
 assert.deepEqual(towns,['branford','cheshire','west-haven']);
});


test('Ridgefield bilingual editorial and restaurant coverage is source-backed',()=>{
 const highlights=read('lib/town-highlights.ts');
 const guide=highlights.match(/'ridgefield':\s*\{([\s\S]*?)\n \},/);
 assert.ok(guide,'Ridgefield has a town-specific guide');
 for(const field of ['en:','es:','Ballard Park','Martin Park Beach','ridgefieldct.gov'])assert.ok(guide[1].includes(field),field);
 const directory=read('lib/town-restaurants.ts');
 const listings=directory.match(/'ridgefield':\s*\[([\s\S]*?)\],/);
 assert.ok(listings,'Ridgefield has a restaurant directory');
 assert.equal((listings[1].match(/checkedOn:/g)||[]).length,5);
 assert.equal((listings[1].match(/cuisineEs:/g)||[]).length,5);
 for(const name of ["Bailey's Backyard",'TerraSole Ristorante','850 Degrees','The Hideaway','Tablao Wine Bar & Restaurant'])assert.ok(listings[1].includes(name),name);
});

test('town search descriptions use concise verified excerpts, not entire profiles',()=>{
 const page=read('app/[locale]/towns/[slug]/page.tsx');
 assert.match(page,/const summary=/);
 assert.match(page,/candidate\.length<=160/);
 assert.match(page,/return localizedSeo\(locale,/);
});
