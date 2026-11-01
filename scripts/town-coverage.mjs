// Development-only inventory. Counts data records, not source verification or launch readiness.
// Run: node scripts/town-coverage.mjs
import { readFileSync } from 'node:fs';
const read = name => readFileSync(new URL('../lib/' + name, import.meta.url), 'utf8');
const towns = [...read('connecticut-towns.ts').matchAll(/"name":\s*"([^"]+)",\s*"county":\s*"([^"]+)",\s*"fips":\s*"[^"]+",\s*"slug":\s*"([^"]+)"/g)]
  .map(([, name, county, slug]) => ({ name, county, slug }));
if (towns.length !== 169) throw new Error('Expected 169 Connecticut towns, found ' + towns.length);
function sections(file, start, end) {
  const raw = read(file);
  const region = raw.slice(raw.indexOf(start), end ? raw.indexOf(end) : undefined);
  const result = new Map();
  const keys = [...region.matchAll(/^\s*'([^']+)':\s*(\[|\{)/gm)];
  for (let i = 0; i < keys.length; i++) {
    const from = keys[i].index + keys[i][0].length;
    const to = i + 1 < keys.length ? keys[i + 1].index : region.length;
    result.set(keys[i][1], region.slice(from, to));
  }
  return result;
}
const resources = sections('town-official-links.ts', 'export const townOfficialLinks');
const restaurants = sections('town-restaurants.ts', 'export const townRestaurants', '// Personal recommendations');
const photos = sections('town-photography.ts', 'export const townPhotography');
const highlights = sections('town-highlights.ts', 'export const townHighlights');
const rates = new Set([...read('fy2027-mill-rates.ts').matchAll(/'([^']+)':\s*\d/g)].map(m => m[1]));
const count = (map, slug, token) => (map.get(slug)?.match(token) ?? []).length;
const rows = towns.map(t => ({
  ...t,
  bilingualGuide: /(?:en:|"en":)/.test(highlights.get(t.slug) ?? '') && /(?:es:|"es":)/.test(highlights.get(t.slug) ?? ''),
  municipalLinks: count(resources, t.slug, /"url":/g),
  restaurants: count(restaurants, t.slug, /(?:sourceUrl|"sourceUrl")\s*:/g),
  photos: count(photos, t.slug, /"licenseUrl":/g),
  fy2027BaseRate: rates.has(t.slug)
}));
const countyOrder = ['New Haven', 'Fairfield', 'Hartford', 'Litchfield', 'Middlesex', 'New London', 'Tolland', 'Windham'];
rows.sort((a,b) => countyOrder.indexOf(a.county)-countyOrder.indexOf(b.county) || a.name.localeCompare(b.name));
const total = (fn) => rows.filter(fn).length;
console.log('Inventory only; presence does not establish accuracy, licensing, accessibility, or certification.');
console.log(JSON.stringify({
  towns: rows.length, bilingualGuides: total(r=>r.bilingualGuide),
  municipalDirectories: total(r=>r.municipalLinks>0),
  restaurantDirectories: total(r=>r.restaurants>0),
  restaurantDirectoriesWithFive: total(r=>r.restaurants>=5),
  photographyCollections: total(r=>r.photos>0),
  fy2027BaseRates: total(r=>r.fy2027BaseRate)
}, null, 2));
console.log('county,town,guide,municipal_links,restaurants,photos,fy2027_base_rate');
for (const r of rows) console.log([r.county,r.name,+r.bilingualGuide,r.municipalLinks,r.restaurants,r.photos,+r.fy2027BaseRate].join(','));
