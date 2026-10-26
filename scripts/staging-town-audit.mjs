// Live rendered-page checks run from GitHub Actions, where staging DNS is available.
// These checks are evidence of HTTP-rendered markup, not a full accessibility audit.
import assert from 'node:assert/strict';

const origin = (process.env.STAGING_ORIGIN || 'https://explore-connecticut-living-staging.joeysellsct.workers.dev').replace(/\/$/, '');
const town = process.env.AUDIT_TOWN || 'milford';
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

for (const locale of ['en', 'es']) {
  const path = `/${locale}/towns/${town}`;
  const {html, headers} = await get(path);
  const document = html.match(/<html\b[^>]*>/i);
  assert.ok(document, `${path}: missing html element`);
  assert.equal(attrs(document[0]).lang, locale, `${path}: wrong html lang`);
  const meta = tags(html, 'meta');
  const description = meta.find(m => m.name === 'description')?.content;
  assert.ok(description && description.length >= 50 && description.length <= 170, `${path}: missing/invalid meta description`);
  assert.ok(/<title>[^<]*Milford[^<]*<\/title>/i.test(html), `${path}: missing town-specific title`);
  const noindex = /\bnoindex\b/i.test(headers.get('x-robots-tag') || '') ||
    meta.some(m => m.name === 'robots' && /\bnoindex\b/i.test(m.content || ''));
  assert.ok(noindex, `${path}: staging is missing noindex`);
  requireLink(html, 'canonical', origin + path);
  for (const language of ['en-US', 'es-US']) {
    const route = language === 'en-US' ? 'en' : 'es';
    requireLink(html, 'alternate', `${origin}/${route}/towns/${town}`, {hreflang: language});
  }
  requireLink(html, 'alternate', `${origin}/en/towns/${town}`, {hreflang: 'x-default'});
  assert.ok(/application\/ld\+json/.test(html) && /BreadcrumbList/.test(html) && /WebPage/.test(html),
    `${path}: missing town breadcrumb or WebPage structured data`);
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
  assert.ok(html.includes('school-and-street-assignment') &&
    html.includes('Online-Permitting-Center'), `${path}: recent Milford official resources are not yet deployed`);
  console.log(`PASS ${path}: bilingual metadata, SEO, housing, affiliate, photography and deployed resources`);
}
const sitemap = await get('/sitemap.xml');
for (const locale of ['en', 'es']) {
  assert.ok(sitemap.html.includes(`${origin}/${locale}/towns/${town}`),
    `sitemap.xml: missing ${locale} town page`);
}
console.log('PASS /sitemap.xml: both town routes present');
