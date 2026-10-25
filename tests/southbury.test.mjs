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
