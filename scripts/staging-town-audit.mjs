// Live rendered-page checks run from GitHub Actions, where staging DNS is available.
// These checks are evidence of HTTP-rendered markup, not a full accessibility audit.
import assert from 'node:assert/strict';

const origin = (process.env.STAGING_ORIGIN || 'https://explore-connecticut-living-staging.joeysellsct.workers.dev').replace(/\/$/, '');
const town = process.env.AUDIT_TOWN || 'milford';
// Restrict overrides to known-safe URL slugs; all town-specific checks must follow AUDIT_TOWN.
assert.match(town, /^[a-z]+(?:-[a-z]+)*$/, 'AUDIT_TOWN must be a lowercase town slug');
const townName = town.split('-').map(part => part[0].toUpperCase() + part.slice(1)).join(' ');
const timeout = 25000;
const get = async path => {
  const response = await fetch(origin + path, {signal: AbortSignal.timeout(timeout), redirect: 'follow'});
  assert.equal(response.status, 200, `${path}: expected HTTP 200, got ${response.status}`);
  return {html: await response.text(), headers: response.headers};
};
const attrs = tag => Object.fromEntries(
  [...tag.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map(([,key,value]) => [key.toLowerCase(), value])
);
const tags = (html, name) => [...html.matchAll(new RegExp('<' + name + '\\b[^>]*>', 'gi'))].map(m => attrs(m[0]));
const requireLink = (html, rel, expectedHref, extra = {}) => {
  const found = tags(html, 'link').some(link => link.rel === rel && link.href === expectedHref &&
    Object.entries(extra).every(([key,value]) => link[key] === value));
  assert.ok(found, `Missing <link rel="${rel}" href="${expectedHref}"> ${JSON.stringify(extra)}`);
};

const robots = await get('/robots.txt');
assert.match(robots.html, /^Disallow:\s*\/\s*$/im, 'Staging must disallow all robots');
console.log('PASS /robots.txt: disallow all');

const auditedTownPages = [];
for (const locale of ['en', 'es']) {
  const path = `/${locale}/towns/${town}`;
  const {html, headers} = await get(path);
  auditedTownPages.push({path, html});
  const document = html.match(/<html\b[^>]*>/i);
  assert.ok(document, `${path}: missing html element`);
  assert.equal(attrs(document[0]).lang, locale, `${path}: wrong html lang`);
  const meta = tags(html, 'meta');
  const description = meta.find(m => m.name === 'description')?.content;
  assert.ok(description && description.length >= 50 && description.length <= 170, `${path}: missing/invalid meta description`);
  const pageTitle = html.match(/<title>([^<]*)<\/title>/i)?.[1];
  assert.ok(pageTitle?.toLowerCase().includes(townName.toLowerCase()), `${path}: missing ${townName}-specific title`);
  const noindex = /\bnoindex\b/i.test(headers.get('x-robots-tag') || '') ||
    meta.some(m => m.name === 'robots' && /\bnoindex\b/i.test(m.content || ''));
  assert.ok(noindex, `${path}: staging is missing noindex`);
  requireLink(html, 'canonical', origin + path);
  for (const language of ['en-US', 'es-US']) {
    const route = language === 'en-US' ? 'en' : 'es';
    requireLink(html, 'alternate', `${origin}/${route}/towns/${town}`, {hreflang: language});
  }
  requireLink(html, 'alternate', `${origin}/en/towns/${town}`, {hreflang: 'x-default'});
  // Validate actual JSON-LD semantics, not just strings that might appear in
  // a broken script, an unrelated component or escaped Next.js hydration data.
  const jsonLd = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
    .filter(([, attributes]) => attrs('<script ' + attributes + '>').type === 'application/ld+json')
    .map(([, , body], index) => {
      try { return JSON.parse(body); }
      catch (error) { assert.fail(`${path}: JSON-LD script ${index + 1} is invalid: ${error.message}`); }
    });
  const breadcrumb = jsonLd.find(data => data['@type'] === 'BreadcrumbList');
  assert.ok(breadcrumb, `${path}: missing valid BreadcrumbList JSON-LD`);
  assert.equal(breadcrumb['@context'], 'https://schema.org', `${path}: breadcrumb schema context`);
  const crumbs = breadcrumb.itemListElement;
  assert.ok(Array.isArray(crumbs) && crumbs.length === 3,
    `${path}: breadcrumb must have exactly three levels`);
  for (const [index, expectedUrl] of [
    `${origin}/${locale}`, `${origin}/${locale}/towns`, origin + path
  ].entries()) {
    const crumb = crumbs[index];
    assert.equal(crumb?.['@type'], 'ListItem', `${path}: breadcrumb level ${index + 1} type`);
    assert.equal(crumb.position, index + 1, `${path}: breadcrumb position ${index + 1}`);
    assert.equal(crumb.item, expectedUrl, `${path}: breadcrumb destination ${index + 1}`);
    assert.ok(typeof crumb.name === 'string' && crumb.name.trim(),
      `${path}: breadcrumb level ${index + 1} lacks a label`);
  }
  const graph = jsonLd.flatMap(data => Array.isArray(data['@graph']) ? data['@graph'] : []);
  const place = graph.find(node => node['@type'] === 'AdministrativeArea' &&
    node.name === `${townName}, Connecticut`);
  const webPage = graph.find(node => node['@type'] === 'WebPage' && node.url === origin + path);
  assert.ok(place && webPage, `${path}: missing matching town/place and WebPage graph nodes`);
  assert.equal(place['@id'], `${origin}/towns/${town}#place`, `${path}: place ID mismatch`);
  assert.equal(place.containedInPlace?.name, 'Connecticut', `${path}: place state mismatch`);
  assert.equal(webPage['@id'], origin + path + '#webpage', `${path}: WebPage ID mismatch`);
  assert.equal(webPage.inLanguage, locale === 'es' ? 'es-US' : 'en-US',
    `${path}: WebPage language mismatch`);
  assert.equal(webPage.about?.['@id'], place['@id'],
    `${path}: WebPage must reference this town's place node`);
  assert.ok(html.includes('Joey McVety') && html.includes('mygoodagent'),
    `${path}: missing agent/broker identification`);
  assert.ok(html.includes(locale === 'es' ? 'Igualdad de oportunidades de vivienda' : 'Equal Housing Opportunity'),
    `${path}: missing Equal Housing disclosure`);
  assert.ok(html.includes(locale === 'es' ? 'Como Asociado de Amazon' : 'As an Amazon Associate'),
    `${path}: missing Amazon compensation disclosure`);
  assert.ok(html.includes(locale === 'es' ? 'Enlace remunerado' : 'Paid referral'),
    `${path}: missing paid-referral identification`);
  assert.ok(html.includes('Frontier') && html.includes('Amazon'),
    `${path}: missing moving partner links`);
  const photoChecks = {
    'Wikimedia-hosted town photos': html.includes('commons.wikimedia.org/wiki/Special:Redirect/file/'),
    'Creative Commons license links': html.includes('creativecommons.org'),
    'Wikimedia original-file attribution links': html.includes('commons.wikimedia.org/wiki/File:')
  };
  for (const [check, passed] of Object.entries(photoChecks)) {
    assert.ok(passed, `${path}: missing ${check}; investigate deployment freshness or rendering`);
  }
  // A license string somewhere on the page is not proof that each town photo
  // has its own caption, creator credit and original-file attribution.
  // Check the rendered figure for every independently documented Milford and
  // West Haven photograph in both languages. This verifies markup only; it
  // does not prove that the remote image bytes loaded or the license is valid.
  const auditedPhotos = {
    'milford': [
      {file:'Milford Green.jpg',credit:'Fadein',license:'https://creativecommons.org/publicdomain/zero/1.0/',en:'Milford Green (photographed October 2011)',es:'Milford Green, plaza histórica de Milford (fotografía de octubre de 2011)'},
      {file:'Milford point on housatonic (28829150353).jpg',credit:'Russ (Russ Whitehurst / russimages)',license:'https://creativecommons.org/licenses/by/2.0/',en:'Milford Point on the Housatonic River (photographed September 2016)',es:'Milford Point junto al río Housatonic (fotografía de septiembre de 2016)'},
      {file:'Silver Sands State Park (21029).jpg',credit:'Rhododendrites',license:'https://creativecommons.org/licenses/by-sa/4.0/',en:'Beach at Silver Sands State Park in Milford (photographed April 2017)',es:'Playa del parque estatal Silver Sands en Milford (fotografía de abril de 2017)'}
    ],
    'west-haven': [
      {file:'Savin Rock, West Haven, CT, USA.jpg',credit:'Staib',license:'https://creativecommons.org/licenses/by-sa/4.0/',en:'Savin Rock outcropping and beach in West Haven (photographed 2021)',es:'Rocas y playa de Savin Rock en West Haven (fotografía de 2021)'},
      {file:'WestHavenAerial5.jpg',credit:'PostMan1107',license:'https://creativecommons.org/licenses/by-sa/3.0/',en:'Aerial view of the Bradley Point and Savin Rock shoreline (photographed 2007)',es:'Vista aérea de la costa de Bradley Point y Savin Rock (fotografía de 2007)'},
      {file:'West Haven City Hall 109.JPG',credit:'Pedro Xing',license:'https://creativecommons.org/publicdomain/zero/1.0/',en:'West Haven City Hall on Main Street across from the Green (photographed April 2012)',es:'Ayuntamiento de West Haven en Main Street frente a la plaza Green (fotografía de abril de 2012)'}
    ]
  };
  if (auditedPhotos[town]) {
    const figures = [...html.matchAll(/<figure\b[^>]*>[\s\S]*?<\/figure>/gi)].map(match => match[0]);
    for (const photo of auditedPhotos[town]) {
      const encodedFile = encodeURIComponent(photo.file);
      const figure = figures.find(fragment => fragment.includes('Special:Redirect/file/' + encodedFile));
      assert.ok(figure, `${path}: missing town-specific photo ${photo.file}`);
      const img = tags(figure, 'img').find(tag => tag.src?.includes(encodedFile));
      assert.ok(img && img.alt?.includes(photo[locale]) && img.alt.includes(townName),
        `${path}: missing localized, town-specific alt text for ${photo.file}`);
      assert.ok(figure.includes(photo.credit), `${path}: missing photographer credit for ${photo.file}`);
      assert.ok(figure.includes(photo.license), `${path}: missing per-photo license link for ${photo.file}`);
      assert.ok(figure.includes('commons.wikimedia.org/wiki/File:' + encodedFile),
        `${path}: missing original Wikimedia file attribution for ${photo.file}`);
    }
  }
  // Check the actual rendered staging page, not just source-code presence.
  // These are the newest independently verified Milford property-due-diligence
  // resources; check both locale routes to catch stale Cloudflare deployments.
  const milfordResourcePaths = [
    'school-and-street-assignment',
    'Online-Permitting-Center',
    'Building-Inspection',
    'Engineering-Division',
    '533/Inland-Wetlands'
  ];
  if (town === 'milford') {
    for (const resource of milfordResourcePaths) {
      assert.ok(html.includes(resource), `${path}: verified Milford resource not rendered: ${resource}; check staging deployment freshness`);
    }
  }
  // West Haven's city-published beach-parking rules are an important moving
  // resource. Check both live languages so a successful generic SEO audit does
  // not hide a stale staging deployment missing the latest verified guidance.
  if (town === 'west-haven') {
    const westHavenParking = 'https://www.cityofwesthaven.com/166/Human-Resources-Social-Services';
    assert.ok(html.includes(westHavenParking),
      `${path}: official West Haven parking resource missing; check staging deployment freshness`);
    const expectedParkingDetails = locale === 'en'
      ? ['license-plate-based', 'Dawson Avenue', 'half an hour after sunset', 'guest/event permits']
      : ['matrícula', 'Dawson Avenue', 'media hora después de la puesta del sol', 'invitados y eventos'];
    for (const detail of expectedParkingDetails) {
      assert.ok(html.includes(detail),
        `${path}: West Haven parking guidance missing "${detail}"; check staging deployment freshness`);
    }
    // Catch stale staging deployments after adding West Haven's verified
    // municipal moving resources. These must be visible in BOTH languages.
    const westHavenMovingResources = [
      'rwater.com/customer-care/start-or-stop-service',
      '266/Recycling-Info-Carts',
      '1394/RubbishRecycling-Pickup-Schedule-Weekly',
      '260/Bulk-Trash-Pickup-Other-Services',
      'whschools.org/page/registration'
    ];
    for (const resource of westHavenMovingResources) {
      assert.ok(html.includes(resource),
        `${path}: West Haven moving resource not rendered: ${resource}; check staging deployment freshness`);
    }
    // Verify that the live page exposes the new fire-district selector.
    // This is an SSR/deployment-freshness guard, not a substitute for
    // interacting with the calculator in a real browser.
    const districtSelect = html.match(/<select\b[^>]*>([\s\S]*?)<\/select>/i);
    assert.ok(districtSelect, `${path}: West Haven fire-district selector not rendered`);
    for (const choice of ['center', 'west-shore', 'allingtown', 'custom']) {
      assert.ok(districtSelect[1].includes(`value="${choice}"`),
        `${path}: missing West Haven district choice ${choice}`);
    }
    const selectorLabel = locale === 'en' ? 'Property fire district' : 'Distrito de bomberos de la propiedad';
    const initialPrompt = locale === 'en'
      ? 'Select the fire district or enter a verified custom rate to calculate.'
      : 'Selecciona el distrito de bomberos o ingresa una tasa verificada para calcular.';
    assert.ok(html.includes(selectorLabel), `${path}: missing localized district selector label`);
    assert.ok(html.includes(initialPrompt),
      `${path}: initial calculator must not display a misleading municipal-base-only estimate`);
    for (const rate of (locale === 'en' ? ['36.48', '33.36', '34.41'] : ['36,48', '33,36', '34,41'])) {
      assert.ok(districtSelect[1].includes(rate), `${path}: district option missing combined rate ${rate}`);
    }
    // Confirm the tax and utility caveats are actually rendered, not just
    // present in source files; district-specific rates must not be flattened.
    const dueDiligenceTerms = locale === 'en'
      ? ['25.58 mills', 'fire district', 'sewer bills separately', 'Regional Water Authority']
      : ['25,58 mills', 'distrito de bomberos', 'facturas de alcantarillado por separado', 'Regional Water Authority'];
    for (const detail of dueDiligenceTerms) {
      assert.ok(html.includes(detail),
        `${path}: West Haven property due-diligence detail missing "${detail}"; check staging deployment freshness`);
    }
  }
  console.log(`PASS ${path}: bilingual metadata, SEO, housing, affiliate, photography and deployed resources`);
}
const sitemap = await get('/sitemap.xml');
for (const locale of ['en', 'es']) {
  assert.ok(sitemap.html.includes(`${origin}/${locale}/towns/${town}`),
    `sitemap.xml: missing ${locale} town page`);
}
console.log('PASS /sitemap.xml: both town routes present');

// Crawl first-hop same-origin links from both localized town pages and, for
// Milford's certification, the shared Moving & Home Resources pages. This
// checks navigation destinations, not external operator/municipal URLs or
// in-page fragment targets. Keep the shared-page crawl in the Milford job to
// avoid duplicating the same requests in the West Haven job.
const linkSourcePages = [...auditedTownPages];
if (town === 'milford') {
  for (const locale of ['en', 'es']) {
    const path = `/${locale}/moving-resources`;
    const {html} = await get(path);
    linkSourcePages.push({path, html});
  }
}
const internalPaths = new Set();
for (const {path, html} of linkSourcePages) {
  for (const anchor of tags(html, 'a')) {
    if (!anchor.href || anchor.href.startsWith('#')) continue;
    let target;
    try { target = new URL(anchor.href.replace(/&amp;/g, '&'), origin + path); }
    catch { assert.fail(`${path}: invalid anchor href ${anchor.href}`); }
    if (target.origin !== origin) continue;
    // Ignore fragment and query variations: each destination route only needs
    // one HTTP status check, while in-page anchor behavior is browser QA.
    internalPaths.add(target.pathname + target.search);
  }
}
assert.ok(internalPaths.size >= 4,
  `Expected at least four first-hop internal routes from bilingual ${town} and shared pages`);
const routes = [...internalPaths].sort();
for (let index = 0; index < routes.length; index += 6) {
  await Promise.all(routes.slice(index, index + 6).map(async path => {
    const response = await fetch(origin + path, {
      signal: AbortSignal.timeout(timeout),
      redirect: 'follow'
    });
    assert.equal(response.status, 200,
      `Broken internal link from ${town} page: ${path} returned HTTP ${response.status}`);
    assert.equal(new URL(response.url).origin, origin,
      `Internal link ${path} redirected outside staging origin`);
  }));
}
console.log(`PASS ${town}: ${routes.length} unique first-hop internal links returned HTTP 200 across EN/ES town and shared resource pages (where applicable)`);



// Milford certification also requires checking the SHARED Moving & Home
// Resources destination, not just the affiliate cards embedded on town pages.
// Run once in the Milford job; the West Haven job already checks its own town.
if (town === 'milford') {
  for (const locale of ['en', 'es']) {
    const path = `/${locale}/moving-resources`;
    const {html, headers} = await get(path);
    const document = html.match(/<html\b[^>]*>/i);
    assert.ok(document && attrs(document[0]).lang === locale,
      `${path}: missing or incorrect document language`);
    const meta = tags(html, 'meta');
    const noindex = /\bnoindex\b/i.test(headers.get('x-robots-tag') || '') ||
      meta.some(m => m.name === 'robots' && /\bnoindex\b/i.test(m.content || ''));
    assert.ok(noindex, `${path}: missing staging noindex protection`);
    requireLink(html, 'canonical', origin + path);
    for (const language of ['en-US', 'es-US']) {
      const route = language === 'en-US' ? 'en' : 'es';
      requireLink(html, 'alternate', `${origin}/${route}/moving-resources`, {hreflang: language});
    }
    requireLink(html, 'alternate', origin + '/en/moving-resources', {hreflang: 'x-default'});
    const heading = locale === 'en' ? 'Moving &amp; Home Resources' : 'Recursos para mudarse e instalarse en Connecticut';
    assert.ok(html.includes(heading) || (locale === 'en' && html.includes('Moving & Home Resources')),
      `${path}: missing localized Moving & Home Resources heading`);
    const expectedDisclosure = locale === 'en'
      ? ['Affiliate disclosure:', 'As an Amazon Associate', 'Referral link: I may receive compensation']
      : ['Aviso de afiliados:', 'Como Asociado de Amazon', 'Enlace de referido: puedo recibir compensación'];
    for (const phrase of expectedDisclosure) {
      assert.ok(html.includes(phrase), `${path}: missing disclosure "${phrase}"`);
    }
    assert.ok(html.includes('Equal Housing Opportunity') || html.includes('Igualdad de oportunidades de vivienda'),
      `${path}: missing Equal Housing notice`);
    const links = tags(html, 'a');
    const frontier = links.find(a => a.href?.includes('frontier.com/ftr-buy?user_id=122784') &&
      a.href.includes('affiliateKey=c75de3d7-1f0b-4d0d-8603-02aa8517357f'));
    const amazon = links.find(a => a.href?.includes('amazon.com/shop/influencer-9242d3e9') &&
      a.href.includes('tag=josephf.mcvet-20'));
    for (const [name, link] of [['Frontier referral', frontier], ['Amazon storefront', amazon]]) {
      assert.ok(link, `${path}: ${name} destination/tracking parameters missing`);
      assert.ok(link.rel?.split(/\s+/).includes('sponsored'),
        `${path}: ${name} link missing rel=sponsored`);
    }
    for (const required of ['https://broadbandmap.fcc.gov/', 'https://portal.ct.gov/pura',
      `/${locale}/compare`, `/${locale}/towns`]) {
      assert.ok(links.some(a => a.href === required),
        `${path}: missing moving resource/navigation link ${required}`);
    }
    console.log(`PASS Moving & Home Resources ${path}: bilingual SEO, noindex, disclosures, partner destinations and navigation`);
  }
}
