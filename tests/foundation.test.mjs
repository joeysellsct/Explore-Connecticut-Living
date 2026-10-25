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
 const localeLayout=read('app/[locale]/layout.tsx');
 assert.match(localeLayout,/ENABLE_PRODUCTION_INDEXING==='true'/);
 assert.match(localeLayout,/host\.endsWith\('\.workers\.dev'\)/);
 assert.match(localeLayout,/host\.endsWith\('\.pages\.dev'\)/);
 assert.match(localeLayout,/!preview&&siteUrl\.startsWith\('https:\/\/'\)/);
 assert.match(localeLayout,/robots:\{index:allowIndexing,follow:allowIndexing\}/);
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


test('Greenwich bilingual guide, restaurant sourcing and municipal resources',()=>{
 const towns=read('lib/connecticut-towns.ts');
 const guides=read('lib/town-highlights.ts');
 const restaurants=read('lib/town-restaurants.ts').split('export const joeyTopPicks')[0];
 const resources=read('lib/town-official-links.ts');
 assert.ok(towns.includes('"slug": "greenwich"'));
 const guide=guides.split('\n').find(line=>line.includes("'greenwich':{"));
 assert.ok(guide,'Greenwich has a dedicated guide');
 for(const field of ['"en":','"es":','"places":'])assert.ok(guide.includes(field),'Missing '+field);
 for(const place of ['Greenwich Point Park','Binney Park','Bruce Museum'])assert.ok(guide.includes(place),place);
 assert.match(guides,/greenwichct\.gov\/2185\/Greenwich-Point-Park/);
 const match=restaurants.match(/'greenwich':\s*\[([\s\S]*?)\],/);
 assert.ok(match,'Greenwich has a restaurant directory');
 for(const field of ['name','cuisine','cuisineEs','website','sourceUrl','checkedOn'])
  assert.equal((match[1].match(new RegExp('"'+field+'":','g'))||[]).length,5,'Five verified '+field+' fields');
 assert.equal((match[1].match(/"rating":/g)||[]).length,0,'No invented ratings');
 for(const name of ['Harvest Wine Bar & Restaurant','Elm Street Oyster House','Townhouse','Miku Sushi','Mediterraneo'])
  assert.ok(match[1].includes(name),name);
 const links=resources.match(/'greenwich':\[([\s\S]*?)\],/);
 assert.ok(links,'Greenwich official resources exist');
 for(const field of ['en','es','url'])
  assert.equal((links[1].match(new RegExp('"'+field+'":','g'))||[]).length,4,'Four bilingual '+field+' fields');
 assert.match(links[1],/greenwichct\.gov\/319\/Town-Clerk/);
});


test('Farmington bilingual guide and official dining sources',()=>{
 const towns=read('lib/connecticut-towns.ts');
 const guides=read('lib/town-highlights.ts');
 const restaurants=read('lib/town-restaurants.ts').split('export const joeyTopPicks')[0];
 const resources=read('lib/town-official-links.ts');
 assert.ok(towns.includes('"slug": "farmington"'));
 const guide=guides.split('\n').find(line=>line.includes("'farmington':{"));
 assert.ok(guide,'Farmington has a dedicated guide');
 for(const field of ['"en":','"es":','"places":'])assert.ok(guide.includes(field),'Missing '+field);
 for(const place of ['Hill-Stead Museum','Farmington River Trail','Farmington Canal Heritage Trail'])assert.ok(guide.includes(place),place);
 assert.match(guides,/farmington-ct\.org\/community\/trail-system\/farmington-valley-greenway/);
 const match=restaurants.match(/'farmington':\s*\[([\s\S]*?)\],/);
 assert.ok(match,'Farmington has a restaurant directory');
 for(const field of ['name','cuisine','cuisineEs','website','sourceUrl','checkedOn'])
  assert.equal((match[1].match(new RegExp('"'+field+'":','g'))||[]).length,5,'Five verified '+field+' fields');
 assert.equal((match[1].match(/"rating":/g)||[]).length,0,'No invented ratings');
 for(const name of ['Fork & Fire','Butchers & Bakers','Piccolo Arancio','Naples Pizza','Bamboo Asian Cuisine'])
  assert.ok(match[1].includes(name),name);
 const links=resources.match(/'farmington':\[([\s\S]*?)\],/);
 assert.ok(links,'Farmington official resources exist');
 for(const field of ['en','es','url'])
  assert.equal((links[1].match(new RegExp('"'+field+'":','g'))||[]).length,4,'Four bilingual '+field+' fields');
 assert.match(links[1],/farmington-ct\.org\/departments\/town-clerk\/land-records/);
});


test('Simsbury bilingual guide and sourced resources',()=>{
 const towns=read('lib/connecticut-towns.ts');
 const guides=read('lib/town-highlights.ts');
 const restaurants=read('lib/town-restaurants.ts').split('export const joeyTopPicks')[0];
 const resources=read('lib/town-official-links.ts');
 assert.ok(towns.includes('"slug": "simsbury"'),'Simsbury is in the statewide directory');
 const guide=guides.split('\n').find(line=>line.includes("'simsbury':{"));
 assert.ok(guide,'Simsbury has a dedicated guide');
 for(const field of ['"en":','"es":','"places":'])assert.ok(guide.includes(field),'Missing '+field);
 for(const place of ['Old Drake Hill Flower Bridge','Talcott Mountain State Park','Simsbury Farms'])assert.ok(guide.includes(place),place);
 const dining=restaurants.match(/'simsbury':\s*\[([\s\S]*?)\],/);
 assert.ok(dining,'Simsbury has a dining guide');
 for(const field of ['name','cuisine','cuisineEs','website','sourceUrl','checkedOn'])
  assert.equal((dining[1].match(new RegExp('"'+field+'":','g'))||[]).length,5,'Five '+field+' fields');
 assert.equal((dining[1].match(/"rating":/g)||[]).length,0,'No invented ratings');
 for(const name of ['Metro Bis',"Abigail's Grille & Wine Bar",'Old Well Tavern','Maple Tree Cafe','Pop Over Eatery'])
  assert.ok(dining[1].includes(name),name);
 const links=resources.match(/'simsbury':\[([\s\S]*?)\],/);
 assert.ok(links,'Simsbury official links exist');
 for(const field of ['en','es','url'])
  assert.equal((links[1].match(new RegExp('"'+field+'":','g'))||[]).length,5,'Five bilingual '+field+' fields');
 assert.match(links[1],/simsbury-ct\.gov\/370\/Town-Clerk/);
});


test('Avon bilingual guide and sourced resources',()=>{
 const towns=read('lib/connecticut-towns.ts');
 const guides=read('lib/town-highlights.ts');
 const restaurants=read('lib/town-restaurants.ts').split('export const joeyTopPicks')[0];
 const resources=read('lib/town-official-links.ts');
 assert.ok(towns.includes('"slug": "avon"'),'Avon is in the statewide directory');
 const guide=guides.split('\n').find(line=>line.includes("'avon':{"));
 assert.ok(guide,'Avon has a dedicated guide');
 for(const field of ['"en":','"es":','"places":'])assert.ok(guide.includes(field),'Missing '+field);
 for(const place of ['Fisher Meadows','Farmington Canal Heritage Trail'])assert.ok(guide.includes(place),place);
 const dining=restaurants.match(/'avon':\s*\[([\s\S]*?)\],/);
 assert.ok(dining,'Avon has a dining guide');
 for(const field of ['name','cuisine','cuisineEs','website','sourceUrl','checkedOn'])
  assert.equal((dining[1].match(new RegExp('"'+field+'":','g'))||[]).length,5,'Five '+field+' fields');
 assert.equal((dining[1].match(/"rating":/g)||[]).length,0,'No invented ratings');
 for(const name of ['The North House','Max A Mia Ristorante','Market Place Kitchen & Bar','Max Burger','Seasons Restaurant & Tap Room'])
  assert.ok(dining[1].includes(name),name);
 const links=resources.match(/'avon':\[([\s\S]*?)\],/);
 assert.ok(links,'Avon official links exist');
 for(const field of ['en','es','url'])
  assert.equal((links[1].match(new RegExp('"'+field+'":','g'))||[]).length,5,'Five bilingual '+field+' fields');
 assert.match(links[1],/avonct\.gov\/departments\/building\/index\.php/);
});


test('Canton has sourced bilingual town, restaurant and municipal guides',()=>{
 const towns=read('lib/connecticut-towns.ts');
 const highlights=read('lib/town-highlights.ts');
 const restaurants=read('lib/town-restaurants.ts').split('export const joeyTopPicks')[0];
 const resources=read('lib/town-official-links.ts');
 assert.ok(towns.includes('"slug": "canton"'),'Canton must be in the statewide directory');
 const guide=highlights.split('\n').find(line=>line.includes("'canton':{"));
 assert.ok(guide,'Canton editorial guide exists');
 for(const field of ['"en":','"es":','"places":'])assert.ok(guide.includes(field),'Missing bilingual guide field '+field);
 for(const place of ['Collinsville','Farmington River Trail','Canton Historical Museum','Roaring Brook Nature Center'])assert.ok(guide.includes(place),'Missing Canton landmark '+place);
 const dining=restaurants.match(/'canton':\s*\[([\s\S]*?)\],/);
 assert.ok(dining,'Canton restaurant guide exists');
 for(const field of ['name','cuisine','cuisineEs','website','sourceUrl','checkedOn'])
  assert.equal((dining[1].match(new RegExp('"'+field+'":','g'))||[]).length,5,'Five sourced restaurant '+field+' fields');
 assert.equal((dining[1].match(/"rating":/g)||[]).length,0,'No invented restaurant ratings');
 for(const name of ['LaSalle Market & Deli','Crown & Hammer Restaurant & Pub','Mercato Italian Kitchen & Bar','American Flatbread','Saybrook Fish House'])assert.ok(dining[1].includes(name),name);
 const links=resources.match(/'canton':\s*\[([\s\S]*?)\],/);
 assert.ok(links,'Canton official resource links exist');
 for(const field of ['en','es','url'])assert.equal((links[1].match(new RegExp('"'+field+'":','g'))||[]).length,6,'Six bilingual official '+field+' fields');
 assert.match(links[1],/townofcantonct\.gov\/756\/Building-Department/);
 const picks=read('lib/town-restaurants.ts').split('export const joeyTopPicks')[1]||'';
 assert.doesNotMatch(picks,/^\s*'canton':/m,'Canton must not appear among Joey personal picks');
});


test('Canton photo gallery has two location-verified Creative Commons attributions',()=>{
 const photos=read('lib/town-photography.ts');
 const match=photos.match(/'canton':\s*\[([\s\S]*?)\],/);
 assert.ok(match,'Canton photo gallery exists');
 for(const field of ['title','file','credit','license','licenseUrl'])
  assert.equal((match[1].match(new RegExp('"'+field+'":','g'))||[]).length,2,'Two '+field+' photo fields');
 for(const file of ['Farmington River Trail bridge over the Farmington River, Collinsville CT.jpg','Canton Historical Museum, Canton CT.jpg'])assert.ok(match[1].includes(file),file);
 assert.equal((match[1].match(/"license":"CC BY-SA 4.0"/g)||[]).length,2,'Both photos need a verified reuse license');
 assert.equal((match[1].match(/"credit":"John Phelan"/g)||[]).length,2,'Both photographers must be credited');
 const page=read('app/[locale]/towns/[slug]/page.tsx');
 assert.match(page,/photo\.licenseUrl/);
 assert.match(page,/photo\.credit/);
});


test('town pages expose localized breadcrumb structured data without fabricated reviews',()=>{
 const page=read('app/[locale]/towns/[slug]/page.tsx');
 assert.match(page,/const townBreadcrumbs=/);
 assert.match(page,/'@type':'BreadcrumbList'/);
 assert.match(page,/itemListElement:/);
 assert.match(page,/position:1/);
 assert.match(page,/position:2/);
 assert.match(page,/position:3/);
 assert.match(page,/\$\{siteUrl\}\/\$\{locale\}\/towns\/\$\{slug\}/);
 assert.match(page,/type="application\/ld\+json"/);
 assert.doesNotMatch(page,/aggregateRating|reviewRating/);
 assert.match(read('lib/seo.ts'),/alternates:\{canonical:current,languages:/);
 assert.match(read('app/sitemap.ts'),/connecticutTowns\.map/);
});


test('Middletown town profile, restaurants and official links are bilingual and source-backed',()=>{
 const highlights=read('lib/town-highlights.ts');
 const editorial=highlights.match(/'middletown':(\{[^\n]+\}),/);
 assert.ok(editorial,'Middletown editorial record exists');
 const record=JSON.parse(editorial[1]);
 assert.ok(record.en.length>700 && record.es.length>700,'Substantial bilingual editorial text');
 for(const place of ['Harbor Park','Kidcity Children\'s Museum','Wesleyan University','Wadsworth Falls State Park'])assert.ok(record.places.includes(place),place);
 assert.match(record.en,/Big Falls/);
 assert.match(record.es,/Big Falls/);
 const source=read('lib/town-restaurants.ts');
 const restaurants=source.match(/'middletown':\s*\[([\s\S]*?)\],/);
 assert.ok(restaurants,'Middletown restaurant directory exists');
 const rows=[...restaurants[1].matchAll(/\{[^\n]+\}/g)].map(m=>JSON.parse(m[0]));
 assert.equal(rows.length,5,'Five restaurants are researched, not fabricated');
 assert.equal(new Set(rows.map(r=>r.name)).size,5,'No duplicate restaurants');
 for(const r of rows){
  assert.ok(r.cuisine && r.cuisineEs && r.website && r.sourceUrl,'Bilingual descriptions and provenance');
  assert.equal(r.checkedOn,'2026-10-23');
  assert.equal(r.rating,undefined,'Do not fabricate ratings');
 }
 const links=read('lib/town-official-links.ts').match(/'middletown':\s*\[([\s\S]*?)\],/);
 assert.ok(links,'Middletown official resource directory exists');
 const resources=[...links[1].matchAll(/\{[^\n]+\}/g)].map(m=>JSON.parse(m[0]));
 assert.equal(resources.length,6);
 for(const r of resources)assert.ok(r.en && r.es && r.url.startsWith('https://'));
 const picks=source.split('export const joeyTopPicks')[1]||'';
 assert.doesNotMatch(picks,/^\s*'middletown':/m,'Do not add Middletown as a Joey personal pick');
});


test('Middletown photo gallery uses location-verified and attributed CC licenses',()=>{
 const photos=read('lib/town-photography.ts');
 const match=photos.match(/'middletown':\s*\[([\s\S]*?)\],/);
 assert.ok(match,'Middletown photography is configured');
 const records=[...match[1].matchAll(/\{[^\n]+\}/g)].map(m=>JSON.parse(m[0]));
 assert.equal(records.length,2);
 assert.deepEqual(records.map(p=>p.file).sort(),['Downtown Middletown, CT.jpg','Wesleyan University Middletown CT.jpg']);
 assert.deepEqual(records.map(p=>p.credit).sort(),['Daniel Case','Steadyjohn']);
 for(const p of records){
  assert.equal(p.license,'CC BY-SA 3.0');
  assert.equal(p.licenseUrl,'https://creativecommons.org/licenses/by-sa/3.0/');
 }
 const page=read('app/[locale]/towns/[slug]/page.tsx');
 assert.match(page,/photo\.credit/);
 assert.match(page,/photo\.licenseUrl/);
});


test('town moving resources disclose Amazon commissions in English and Spanish',()=>{
 const panel=read('app/[locale]/towns/[slug]/TownMovingResources.tsx');
 const partners=read('lib/moving-resources.ts');
 assert.match(panel,/As an Amazon Associate I earn from qualifying purchases\./);
 assert.match(panel,/Como Asociado de Amazon, obtengo ingresos por las compras que cumplen los requisitos\./);
 assert.match(panel,/es\?'Como Asociado de Amazon/);
 assert.match(panel,/Paid referral: I may earn a commission/);
 assert.match(panel,/Enlace remunerado: puedo ganar una comisión/);
 assert.match(partners,/frontier\.com\/ftr-buy\?user_id=/);
 assert.match(partners,/amazon\.com\/shop\/influencer-/);
});

test('Oxford restaurant directory contains five sourced bilingual local listings without invented ratings',()=>{
 const source=read('lib/town-restaurants.ts');
 const start=source.indexOf(" 'oxford': [");
 assert.ok(start>=0,'Oxford dining section exists');
 const end=source.indexOf('\n ],',start);
 assert.ok(end>start);
 const records=source.slice(start,end).split('\n').map(s=>s.trim()).filter(s=>s.startsWith('{')).map(s=>JSON.parse(s.replace(/,$/,'')));
 assert.equal(records.length,5);
 assert.equal(new Set(records.map(x=>x.name)).size,5);
 for(const entry of records){
  assert.ok(entry.cuisine.length>=55&&entry.cuisineEs.length>=55,entry.name);
  assert.equal(new URL(entry.website).protocol,'https:');
  assert.equal(new URL(entry.sourceUrl).protocol,'https:');
  assert.equal(entry.checkedOn,'2026-10-25');
  assert.equal(entry.rating,undefined);
  assert.equal(entry.reviewCount,undefined);
 }
 const picks=source.split('export const joeyTopPicks')[1]||'';
 assert.ok(!picks.includes("'oxford': ["),'Oxford must not become a personal Top Pick');
});
