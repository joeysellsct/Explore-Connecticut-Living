import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('Prospect resources are bilingual, sourced and deduplicated', () => {
 const source = read('lib/town-official-links.ts');
 const start = source.indexOf(" 'prospect': [");
 assert.ok(start >= 0);
 const end = source.indexOf('\n ],', start);
 assert.ok(end > start);
 const entries = source.slice(start, end).split('\n').map(s => s.trim()).filter(s => s.startsWith('{')).map(s => JSON.parse(s.replace(/,$/, '')));
 assert.equal(entries.length, 15);
 assert.equal(new Set(entries.map(x => x.url)).size, 15);
 for (const entry of entries) {
  assert.ok(entry.en.length > 50 && entry.es.length > 50, entry.url);
  assert.equal(new URL(entry.url).protocol, 'https:');
 }
 assert.ok(entries.some(x => x.en.includes('28.47 mills') && x.es.includes('28,47 mills')));
 for (const urlPart of ['/assessor/', '/townclerk/', '/sewer-user-fee/', 'waterburyct.gov/services/water']) {
  assert.ok(entries.some(x => x.url.includes(urlPart)), urlPart);
 }
});

test('Prospect guide is bilingual, substantial, four paragraphs and cautious about property facts', () => {
 const source = read('lib/town-highlights.ts');
 const line = source.split('\n').find(x => x.trimStart().startsWith("'prospect': "));
 assert.ok(line);
 const guide = JSON.parse(line.slice(line.indexOf('{')).replace(/,$/, ''));
 assert.ok(guide.en.length >= 2400 && guide.es.length >= 2700);
 assert.equal(guide.en.split('\n\n').length, 4);
 assert.equal(guide.es.split('\n\n').length, 4);
 for (const name of ['Prospect Town Green', 'Hotchkiss Field', 'Kathan Woods', 'College Farm']) {
  assert.ok(guide.places.includes(name), name);
 }
 for (const name of ['Hotchkiss Field', 'Kathan Woods', 'College Farm']) {
  assert.ok(guide.en.includes(name), name);
 }
 assert.ok(guide.en.includes('28.47-mill'));
 assert.ok(guide.es.includes('28,47 mills'));
 assert.ok(guide.en.includes('address-level checking'));
 assert.ok(guide.es.includes('por dirección'));
 assert.ok(guide.en.includes('private-well tests'));
});

test('Prospect content uses shared town template and does not fabricate dining or photo coverage', () => {
 const page = read('app/[locale]/towns/[slug]/page.tsx');
 assert.ok(page.includes('townHighlights[slug]'));
 assert.ok(page.includes('townOfficialLinks[slug]'));
 assert.ok(!read('lib/town-restaurants.ts').includes("'prospect': ["));
 assert.ok(!read('lib/town-photography.ts').includes("'prospect': ["));
});
