// Development-only inventory. Counts data records, not source verification or launch readiness.
// Run: node scripts/town-coverage.mjs
import { readFileSync } from 'node:fs';
const read = name => readFileSync(new URL('../lib/' + name, import.meta.url), 'utf8');
const towns = [...read('connecticut-towns.ts').matchAll(/"name":\s*"([^"]+)",\s*"county":\s*"([^"]+)",\s*"fips":\s*"[^"]+",\s*"slug":\s*"([^"]+)"/g)]
  .map(([, name, county, slug]) => ({ name, county, slug }));
if (towns.length !== 169) throw new Error('Expected 169 Connecticut towns, found ' + towns.length);
function sections(file, start, end) {
  const raw = read(file);
  const startAt = raw.indexOf(start);
  if (startAt < 0) throw new Error('Missing section marker ' + start + ' in ' + file);
  const endAt = end ? raw.indexOf(end, startAt + start.length) : -1;
  if (end && endAt < 0) throw new Error('Missing end marker ' + end + ' in ' + file);
  const region = raw.slice(startAt, endAt < 0 ? undefined : endAt);
  const result = new Map();
  // Top-level town keys can be single-quoted, double-quoted or bare.
  const keys = [...region.matchAll(/^ ['"]?([a-z][a-z0-9-]*)['"]?:\s*(\[|\{)/gm)];
  for (let i = 0; i < keys.length; i++) {
    const slug = keys[i][1];
    if (result.has(slug)) throw new Error('Duplicate town key ' + slug + ' in ' + file);
    const from = keys[i].index + keys[i][0].length;
    const to = i + 1 < keys.length ? keys[i + 1].index : region.length;
    result.set(slug, region.slice(from, to));
  }
  return result;
}
const resources = sections('town-official-links.ts', 'export const townOfficialLinks');
const restaurants = sections('town-restaurants.ts', 'export const townRestaurants', '// Personal recommendations');
const photos = sections('town-photography.ts', 'export const townPhotography');
const highlights = sections('town-highlights.ts', 'export const townHighlights');
const rates = new Set([...read('fy2027-mill-rates.ts').matchAll(/'([^']+)':\s*\d/g)].map(m => m[1]));
const count = (map, slug, token) => (map.get(slug)?.match(token) ?? []).length;
// Both quoted JSON-style and unquoted TypeScript object keys occur in the curated data.
const rows = towns.map(t => ({
  ...t,
  bilingualGuide: /(?:\ben\s*:|"en"\s*:)/.test(highlights.get(t.slug) ?? '') && /(?:\bes\s*:|"es"\s*:)/.test(highlights.get(t.slug) ?? ''),
  municipalLinks: count(resources, t.slug, /(?:\burl\s*:|"url"\s*:)/g),
  restaurants: count(restaurants, t.slug, /(?:\bsourceUrl\s*:|"sourceUrl"\s*:)/g),
  photos: count(photos, t.slug, /(?:\blicenseUrl\s*:|"licenseUrl"\s*:)/g),
  fy2027BaseRate: rates.has(t.slug)
}));
const countyOrder = ['New Haven', 'Fairfield', 'Hartford', 'Litchfield', 'Middlesex', 'New London', 'Tolland', 'Windham'];
const priority = slug => slug === 'milford' ? 0 : slug === 'west-haven' ? 1 : 2;
rows.sort((a,b) => countyOrder.indexOf(a.county)-countyOrder.indexOf(b.county) || priority(a.slug)-priority(b.slug) || a.name.localeCompare(b.name));
const total = (fn) => rows.filter(fn).length;
if (!process.argv.includes('--json')) console.log('Inventory only; presence does not establish accuracy, licensing, accessibility, or certification.');
if (!process.argv.includes('--json')) console.log(JSON.stringify({
  towns: rows.length, bilingualGuides: total(r=>r.bilingualGuide),
  municipalDirectories: total(r=>r.municipalLinks>0),
  restaurantDirectories: total(r=>r.restaurants>0),
  restaurantDirectoriesWithFive: total(r=>r.restaurants>=5),
  photographyCollections: total(r=>r.photos>0),
  fy2027BaseRates: total(r=>r.fy2027BaseRate)
}, null, 2));
// Optional machine-readable inventory for repeatable hourly progress comparisons.
// Counts indicate record presence only, never source validation or launch certification.
if (process.argv.includes('--json')) {
  const summary = {
    towns: rows.length,
    bilingualGuides: total(r=>r.bilingualGuide),
    municipalDirectories: total(r=>r.municipalLinks>0),
    restaurantDirectories: total(r=>r.restaurants>0),
    restaurantDirectoriesWithFive: total(r=>r.restaurants>=5),
    photographyCollections: total(r=>r.photos>0),
    fy2027BaseRates: total(r=>r.fy2027BaseRate)
  };
  const gaps = rows.map(r => ({
    county:r.county, town:r.name, slug:r.slug,
    missing:[
      ...(!r.bilingualGuide?['bilingual-guide']:[]),
      ...(r.municipalLinks===0?['municipal-resources']:[]),
      ...(r.restaurants<5?['restaurants-to-five']:[]),
      ...(r.photos===0?['licensed-photography']:[]),
      ...(!r.fy2027BaseRate?['verified-fy2027-base-rate']:[])
    ],
    restaurants:r.restaurants, municipalLinks:r.municipalLinks, photos:r.photos
  }));
  process.stdout.write(JSON.stringify({notice:'Inventory only. Missing means no counted record, not proof the source does not exist. Tax-rate gaps must not be filled by estimates.',summary,gaps},null,2)+'\n');
  process.exit(0);
}
console.log('county,town,guide,municipal_links,restaurants,photos,fy2027_base_rate');
for (const r of rows) console.log([r.county,r.name,+r.bilingualGuide,r.municipalLinks,r.restaurants,r.photos,+r.fy2027BaseRate].join(','));
