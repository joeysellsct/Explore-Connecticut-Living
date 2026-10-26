// Real-browser Milford certification checks. This intentionally runs only on GitHub-hosted CI.
// HTTP markup checks alone cannot establish whether images render or pages are accessible.
import assert from 'node:assert/strict';
import {mkdir} from 'node:fs/promises';
import {chromium} from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const origin = (process.env.STAGING_ORIGIN || 'https://explore-connecticut-living-staging.joeysellsct.workers.dev').replace(/\/$/, '');
const failures = [];
const browser = await chromium.launch({headless: true});
await mkdir('artifacts/milford-browser', {recursive: true});

try {
  for (const locale of ['en', 'es']) {
    for (const device of ['desktop', 'mobile']) {
      const mobile = device === 'mobile';
      const context = await browser.newContext({
        viewport: mobile ? {width: 390, height: 844} : {width: 1440, height: 900},
        deviceScaleFactor: 1,
        isMobile: mobile,
        hasTouch: mobile
      });
      const page = await context.newPage();
      const label = locale + '/' + device;
      try {
        const response = await page.goto(origin + '/' + locale + '/towns/milford', {
          waitUntil: 'domcontentloaded',
          timeout: 45000
        });
        assert.equal(response?.status(), 200, label + ': expected HTTP 200');
        assert.equal(await page.locator('html').getAttribute('lang'), locale, label + ': wrong language');
        assert.equal(await page.locator('main h1').count(), 1, label + ': expected one main heading');
        const gallery = page.locator('section.eh-gallery img');
        const count = await gallery.count();
        assert.ok(count >= 3, label + ': expected at least three town photographs');
        for (let i = 0; i < count; i++) {
          const img = gallery.nth(i);
          await img.scrollIntoViewIfNeeded({timeout: 12000});
          const result = await img.evaluate(async element => {
            if (!element.complete) {
              await Promise.race([
                new Promise(resolve => {element.addEventListener('load', resolve, {once:true}); element.addEventListener('error', resolve, {once:true});}),
                new Promise(resolve => setTimeout(resolve, 15000))
              ]);
            }
            return {src: element.currentSrc || element.src, width: element.naturalWidth, alt: element.alt};
          });
          if (!result.width || !result.alt.trim()) {
            failures.push(label + ': photograph ' + (i + 1) + ' did not load or lacks alt text: ' + JSON.stringify(result));
          }
        }
        // Axe cannot reliably assess text contrast against photographic backgrounds.
        // Verify the actual rendered gallery attribution links are white on the dark overlay.
        const creditLinks = page.locator('section.eh-gallery figcaption a');
        const creditCount = await creditLinks.count();
        assert.ok(creditCount >= count * 2, label + ': expected license and source links for each photograph');
        for (let i = 0; i < creditCount; i++) {
          const color = await creditLinks.nth(i).evaluate(element => getComputedStyle(element).color);
          if (color !== 'rgb(255, 255, 255)') {
            failures.push(label + ': photo attribution link ' + (i + 1) + ' lacks white-on-dark contrast: ' + color);
          }
        }
        const overflow = await page.evaluate(() => ({
          scroll: document.documentElement.scrollWidth,
          viewport: window.innerWidth
        }));
        if (overflow.scroll > overflow.viewport + 2) {
          failures.push(label + ': horizontal overflow ' + JSON.stringify(overflow));
        }
        const axe = await new AxeBuilder({page})
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
          .analyze();
        for (const issue of axe.violations) {
          for (const node of issue.nodes) {
            failures.push(label + ': accessibility ' + issue.id + ' (' + issue.impact + '), target=' + node.target.join(',') + ', detail=' + (node.failureSummary || '').replace(/\n/g, ' ').slice(0, 320));
          }
        }
        await page.screenshot({path: 'artifacts/milford-browser/' + locale + '-' + device + '.png', fullPage: true, animations: 'disabled'});
        console.log('AUDITED ' + label + ': photos=' + count + ', axe violations=' + axe.violations.length + ', overflow=' + (overflow.scroll - overflow.viewport) + 'px');
      } catch (error) {
        failures.push(label + ': browser audit failed: ' + (error?.message || String(error)));
      } finally {
        await context.close();
      }
    }
  }
} finally {
  await browser.close();
}
if (failures.length) {
  for (const failure of failures) console.error('::error::' + failure.replace(/\n/g, ' '));
  console.error('Milford browser certification blocked by ' + failures.length + ' finding(s). HTTP-only checks are not sufficient.');
  process.exitCode = 1;
} else {
  console.log('PASS: Milford EN/ES desktop/mobile image loading, alt text, WCAG 2.0/2.1/2.2 AA axe checks and horizontal overflow.');
}
