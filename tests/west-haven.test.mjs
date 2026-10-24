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

test('West Haven stays Joey personal pick only and staging protections stay in place', () => {
  const restaurants = read('lib/town-restaurants.ts');
  const picks = restaurants.split('export const joeyTopPicks')[1] || '';
  assert.ok(picks.includes("'west-haven'"), 'West Haven personal pick key exists');
  assert.ok(picks.includes('Zuppardi'), 'Zuppardi personal pick remains');
  const layout = read('app/[locale]/layout.tsx');
  assert.match(layout, /index:false,follow:false/);
  assert.match(read('app/robots.ts'), /disallow:'\/'/);
});
