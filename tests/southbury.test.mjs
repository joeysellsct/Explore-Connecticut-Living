import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('Southbury has 15 distinct bilingual town and moving resources', () => {
 const source = read('lib/town-official-links.ts');
 const match = source.match(/^ 'southbury': \[(.*?)^ \],/ms);
 assert.ok(match, 'Southbury resource directory missing');
 const entries = match[1].split('\n').map(s => s.trim()).filter(s => s.startsWith('{')).map(s => JSON.parse(s.replace(/,$/, '')));
 assert.equal(entries.length, 15);
 assert.equal(new Set(entries.map(entry => entry.url)).size, 15);
 for (const entry of entries) {
  assert.ok(entry.en.length > 35 && entry.es.length > 35);
  assert.equal(new URL(entry.url).protocol, 'https:');
 }
 assert.ok(entries.every(entry => new URL(entry.url).hostname.endsWith('southbury-ct.org')));
 assert.ok(entries.some(entry => entry.en.includes('25.4 mills') && entry.es.includes('25,4 mills')));
 assert.ok(entries.some(entry => entry.en.includes('no municipal sewage system')));
 assert.ok(entries.some(entry => entry.en.includes('Housatonic Valley Health District')));
 assert.ok(entries.some(entry => entry.en.includes('GIS')));
});

test('Southbury resources render through the shared bilingual town template', () => {
 const page = read('app/[locale]/towns/[slug]/page.tsx');
 assert.match(page, /townOfficialLinks\[slug\]\.map/);
 assert.match(page, /TownMovingResources slug=\{slug\}/);
 const source = read('lib/town-official-links.ts');
 assert.match(source, /'southbury': \[/);
 const picks = read('lib/town-restaurants.ts').split('export const joeyTopPicks:')[1] || '';
 assert.doesNotMatch(picks, /^\s*'southbury':/m);
});

test('Southbury town guide has researched English and Spanish copy with tax and utility cautions', () => {
 const source = read('lib/town-highlights.ts');
 const match = source.match(/^\s*'southbury':(\{[^\n]+\}),?$/m);
 assert.ok(match, 'Southbury bilingual guide missing');
 const guide = JSON.parse(match[1]);
 assert.ok(guide.en.length > 2000 && guide.es.length > 2000);
 assert.ok(guide.en.split('\n\n').length >= 4);
 assert.ok(guide.es.split('\n\n').length >= 4);
 for (const place of ['Southford Falls State Park', 'Kettletown State Park', 'Settlers Park', 'Little York Park']) {
  assert.ok(guide.places.includes(place), place);
  assert.ok(guide.en.includes(place), place);
 }
 assert.match(guide.en, /25\.4-mill/);
 assert.match(guide.es, /25,4 milésimas/);
 assert.match(guide.en, /no municipal sewage system/);
 assert.match(guide.es, /no tiene un sistema de alcantarillado municipal/);
 assert.match(guide.en, /not Joey's personal endorsements/);
 assert.match(guide.es, /no son recomendaciones personales de Joey/);
});

test('Southbury dining has five sourced bilingual listings without invented ratings or endorsements', () => {
 const source = read('lib/town-restaurants.ts');
 const match = source.match(/^ 'southbury': \[(.*?)^ \],/ms);
 assert.ok(match, 'Southbury restaurant directory missing');
 const entries = match[1].split('\n').map(s => s.trim()).filter(s => s.startsWith('{')).map(s => JSON.parse(s.replace(/,$/, '')));
 assert.equal(entries.length, 5);
 assert.equal(new Set(entries.map(entry => entry.name)).size, 5);
 assert.equal(new Set(entries.map(entry => entry.sourceUrl)).size, 5);
 for (const entry of entries) {
  assert.ok(entry.cuisine.length > 30 && entry.cuisineEs.length > 30, entry.name);
  assert.equal(new URL(entry.sourceUrl).protocol, 'https:');
  assert.equal(new URL(entry.website).protocol, 'https:');
  assert.equal(entry.checkedOn, '2026-10-25');
  assert.equal(entry.rating, undefined);
  assert.equal(entry.reviewCount, undefined);
 }
 for (const name of ['Brew Cafe & Bistro', 'Mercato Italian Kitchen & Bar', "Farmer's Tavern", 'Samui Thai Cuisine', "DiPalma's Pizza"]) {
  assert.ok(entries.some(entry => entry.name === name), name);
 }
 const page = read('app/[locale]/towns/[slug]/page.tsx');
 assert.match(page, /townRestaurants\[slug\]\.map/);
 const picks = source.split('export const joeyTopPicks:')[1] || '';
 assert.doesNotMatch(picks, /^\s*'southbury':/m);
});

test('Southbury has three Commons-licensed photographs with bilingual dated captions', () => {
 const source = read('lib/town-photography.ts');
 const match = source.match(/^ 'southbury': \[(.*?)^ \],/ms);
 assert.ok(match, 'Southbury photography data missing');
 const entries = match[1].split('\n').map(s => s.trim()).filter(s => s.startsWith('{')).map(s => JSON.parse(s.replace(/,$/, '')));
 assert.equal(entries.length, 3);
 assert.equal(new Set(entries.map(entry => entry.file)).size, 3);
 for (const entry of entries) {
  assert.ok(entry.title.includes('photograph') && entry.titleEs.includes('fotografía'));
  assert.ok(entry.credit.length > 3);
  assert.match(entry.license, /^CC BY-SA (2\.0|4\.0)$/);
  assert.equal(new URL(entry.licenseUrl).protocol, 'https:');
  assert.ok(entry.file.endsWith('.jpg'));
 }
 assert.ok(entries.some(entry => entry.file.includes('Southford Falls') && entry.credit.includes('Doug')));
 assert.ok(entries.some(entry => entry.file.includes('HurleyRoad') && entry.credit === 'Magicpiano'));
 assert.ok(entries.some(entry => entry.file.includes('RussianVillage') && entry.credit === 'Magicpiano'));
 const page = read('app/[locale]/towns/[slug]/page.tsx');
 assert.match(page, /townPhotography\[slug\]/);
});
