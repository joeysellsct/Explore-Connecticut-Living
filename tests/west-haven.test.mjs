import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('West Haven guide has original English and Spanish local guidance', () => {
  const guides = read('lib/town-highlights.ts');
  const section = guides.match(/'west-haven':\s*\{en:'([\s\S]*?)',es:'([\s\S]*?)',places:\[([\s\S]*?)\]\}/);
  assert.ok(section, 'West Haven bilingual guide must exist');
  for (const phrase of ['Sandy Point Beach & Bird Sanctuary', 'Metro-North', 'sewer bills', 'flood']) {
    assert.ok(section[1].includes(phrase), 'English guide missing ' + phrase);
  }
  for (const phrase of ['Sandy Point Beach & Bird Sanctuary', 'Metro-North', 'alcantarillado', 'inundación']) {
    assert.ok(section[2].includes(phrase), 'Spanish guide missing ' + phrase);
  }
  assert.ok(section[1].length > 900 && section[2].length > 900, 'Guides should provide useful depth');
});

test('West Haven municipal links cover property due diligence and local life in both languages', () => {
  const source = read('lib/town-official-links.ts');
  const section = source.match(/'west-haven':\s*\[([\s\S]*?)\],/);
  assert.ok(section, 'West Haven official links must exist');
  assert.equal((section[1].match(/"en":/g) || []).length, 12);
  assert.equal((section[1].match(/"es":/g) || []).length, 12);
  assert.equal((section[1].match(/"url":/g) || []).length, 12);
  for (const link of ['152/Assessors-Office', '156/City-Clerks-Office', '180/Tax-Collector', '154/Building', '172/Parks-and-Recreation']) {
    assert.ok(section[1].includes(link), 'Missing municipal resource ' + link);
  }
});

test('West Haven photos have Commons file identities, creators and reusable licenses', () => {
  const photos = read('lib/town-photography.ts');
  const section = photos.match(/'west-haven':\s*\[([\s\S]*?)\],/);
  assert.ok(section, 'West Haven photo gallery must exist');
  for (const name of ['Savin Rock, West Haven, CT, USA.jpg', 'WestHavenAerial5.jpg']) {
    assert.ok(section[1].includes(name), 'Missing photo ' + name);
  }
  assert.equal((section[1].match(/"titleEs":/g) || []).length, 2);
  assert.equal((section[1].match(/"credit":/g) || []).length, 2);
  assert.equal((section[1].match(/"licenseUrl":/g) || []).length, 2);
});

test('West Haven stays Joey personal pick only and staging protections stay in place', () => {
  const restaurants = read('lib/town-restaurants.ts');
  const picks = restaurants.split('export const joeyTopPicks')[1] || '';
  assert.ok(picks.includes("'west-haven'"), 'West Haven personal pick key exists');
  assert.ok(picks.includes('Zuppardi'), 'Zuppardi personal pick remains');
  const layout = read('app/[locale]/layout.tsx');
  assert.match(layout, /robots:\{index:allowIndexing,follow:allowIndexing\}/);
  assert.match(read('app/robots.ts'), /disallow:'\/'/);
});


test('West Haven beach parking guidance distinguishes lot plate checks from street guest passes', () => {
  const source = read('lib/town-official-links.ts');
  const section = source.match(/'west-haven':\s*\[([\s\S]*?)\],/);
  assert.ok(section, 'West Haven municipal links missing');
  const entries = [...section[1].matchAll(/\{[^{}]+\}/g)].map(match => JSON.parse(match[0]));
  const parking = entries.find(entry => entry.url === 'https://www.cityofwesthaven.com/166/Human-Resources-Social-Services');
  assert.ok(parking, 'Retain the official city beach and restricted-street parking guidance');
  for (const term of ['license-plate-based', 'nonresident payment', 'guest/event permits', 'check current rules']) {
    assert.ok(parking.en.includes(term), 'English parking guidance missing: ' + term);
  }
  for (const term of ['matrícula', 'no residentes', 'invitados y eventos', 'tarifas vigentes']) {
    assert.ok(parking.es.includes(term), 'Spanish parking guidance missing: ' + term);
  }
  assert.equal(entries.filter(entry => entry.url === parking.url).length, 1, 'Do not duplicate the official parking link');
});
