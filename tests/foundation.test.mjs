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
 for(const field of ['en:','es:','Ballard Park','Martin Park Beach'])assert.ok(guide[1].includes(field),field);
 assert.ok(highlights.includes('ridgefieldct.gov'),'Municipal source is documented');
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


test('Darien guide and restaurants are bilingual and source-backed',()=>{
 const highlights=read('lib/town-highlights.ts');
 const guide=highlights.match(/'darien':\s*\{([\s\S]*?)\n \},/);
 assert.ok(guide,'Darien has a dedicated town guide');
 for(const term of ['en:','es:','Weed Beach','Pear Tree Point Beach Park','Tilley Pond Park','Darien Library'])assert.ok(guide[1].includes(term),term);
 assert.ok(highlights.includes('darienct.gov/234/Parks-Beaches'),'Municipal source is documented');
 const directory=read('lib/town-restaurants.ts');
 const listings=directory.match(/'darien':\s*\[([\s\S]*?)\],/);
 assert.ok(listings,'Darien restaurant directory exists');
 assert.equal((listings[1].match(/checkedOn:/g)||[]).length,5);
 assert.equal((listings[1].match(/cuisineEs:/g)||[]).length,5);
 for(const name of ['The Goose','Bodega Taco Bar','Ten Twenty Post','Post Corner Pizza',"Rory's Restaurant"])assert.ok(listings[1].includes(name),name);
});

test('Bethel Newtown and Monroe restaurant descriptions have Spanish cuisine labels',()=>{
 const source=read('lib/town-restaurants.ts');
 for(const slug of ['bethel','newtown','monroe']){
  const key="'"+slug+"': [";
  const start=source.indexOf(key);
  assert.ok(start>=0,slug+' restaurant directory exists');
  const end=source.indexOf('  ],',start);
  assert.ok(end>start,slug+' restaurant directory terminates');
  const listings=source.slice(start,end);
  assert.equal((listings.match(/cuisineEs:/g)||[]).length,5,slug+' has five Spanish labels');
 }
});


test('New Canaan bilingual guide and five restaurant listings are sourced',()=>{
 const guide=read('lib/town-highlights.ts');
 const profile=guide.match(/'new-canaan':\s*\{([\s\S]*?)\n \},/);
 assert.ok(profile,'New Canaan has a dedicated guide');
 for(const term of ['en:','es:','Waveny Park','Irwin Park','New Canaan Library'])assert.ok(profile[1].includes(term),term);
 assert.ok(guide.includes('newcanaanct.myrec.com/info/facilities'),'Town recreation source is documented');
 const source=read('lib/town-restaurants.ts');
 const listings=source.match(/'new-canaan':\s*\[([\s\S]*?)\],/);
 assert.ok(listings,'New Canaan restaurant directory exists');
 assert.equal((listings[1].match(/checkedOn:/g)||[]).length,5);
 assert.equal((listings[1].match(/cuisineEs:/g)||[]).length,5);
 for(const name of ['Elm Restaurant','Gates Restaurant & Bar','Solé Restaurant',"Farmer's Table",'Chef Luis Restaurant'])assert.ok(listings[1].includes(name),name);
});


test('Wilton and Redding guides and restaurant lists have verified bilingual coverage',()=>{
 const guides=read('lib/town-highlights.ts');
 const restaurants=read('lib/town-restaurants.ts');
 for(const slug of ['wilton','redding']){
  const guideLine=guides.split('\n').find(line=>line.includes("'"+slug+"':{"));
  assert.ok(guideLine,slug+' has a town-specific guide');
  for(const field of ['"en":','"es":','"places":'])assert.ok(guideLine.includes(field),slug+' missing '+field);
  const match=restaurants.match(new RegExp("'"+slug+"':\\s*\\[([\\s\\S]*?)\\],"));
  assert.ok(match,slug+' restaurant listings exist');
  const entries=match[1];
  assert.equal((entries.match(/"?checkedOn"?:/g)||[]).length,5,slug+' has five sourced listings');
  assert.equal((entries.match(/"?cuisineEs"?:/g)||[]).length,5,slug+' has five Spanish cuisine descriptions');
  assert.equal((entries.match(/"?sourceUrl"?:/g)||[]).length,5,slug+' has five source URLs');
 }
 assert.match(guides,/merwin-meadows-pond-and-beach-closed-2025-season/);
 assert.match(guides,/ctparks\.com\/parks\/putnam-memorial-state-park/);
});

test('Fairfield and Westport bilingual guides and sourced dining coverage',()=>{
 const towns=read('lib/connecticut-towns.ts');
 const guides=read('lib/town-highlights.ts');
 const restaurants=read('lib/town-restaurants.ts').split('export const joeyTopPicks')[0];
 for(const slug of ['fairfield','westport']){
  assert.ok(towns.includes('"slug": "'+slug+'"'),slug+' appears in the 169-town directory');
  const line=guides.split('\n').find(row=>row.includes("'"+slug+"':{"));
  assert.ok(line,slug+' has a town-specific guide');
  for(const field of ['"en":','"es":','"places":'])assert.ok(line.includes(field),slug+' missing '+field);
  const match=restaurants.match(new RegExp("'"+slug+"':\\s*\\[([\\s\\S]*?)\\],"));
  assert.ok(match,slug+' has a dining guide');
  const entries=match[1];
  for(const field of ['name','cuisine','cuisineEs','website','sourceUrl','checkedOn']){
   assert.equal((entries.match(new RegExp('"'+field+'":','g'))||[]).length,5,slug+' needs five '+field+' values');
  }
  assert.equal((entries.match(/"rating":/g)||[]).length,0,'Do not invent ratings');
 }
 assert.match(guides,/www\.westportct\.gov\/how-do-i\/access-property-information\/town-gis-map-system/);
 assert.match(guides,/ffldcommunity\.com\/lake_mohegan\.php/);
 assert.match(restaurants,/barcelonawinebar\.com\/location\/fairfield/);
 assert.match(restaurants,/kawaniwestport\.com\/about/);
});

test('Fairfield and Westport expose official bilingual municipal resources',()=>{
 const resources=read('lib/town-official-links.ts');
 const townPage=read('app/[locale]/towns/[slug]/page.tsx');
 for(const slug of ['fairfield','westport']){
  const match=resources.match(new RegExp("'"+slug+"':\\[([\\s\\S]*?)\\],"));
  assert.ok(match,slug+' has official resource links');
  for(const field of ['en','es','url'])assert.equal((match[1].match(new RegExp(field+':','g'))||[]).length,3,slug+' has three bilingual '+field+' values');
 }
 assert.match(resources,/gis\.vgsi\.com\/fairfieldct/);
 assert.match(resources,/westportct\.gov\/how-do-i\/access-property-information/);
 assert.match(townPage,/townOfficialLinks\[slug\]\.map/);
 assert.match(townPage,/Official resources for planning your move/);
});
