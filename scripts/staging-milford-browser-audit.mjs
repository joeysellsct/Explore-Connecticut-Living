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
        // Exercise real keyboard tab order, not just static axe markup checks.
        // The bilingual town-guide link must follow the back-to-towns link.
        const backLink = page.locator('main a.town-back').first();
        const languageLink = page.locator('main a.town-back[hreflang]').first();
        assert.equal(await backLink.count(), 1, label + ': missing back-to-towns link');
        assert.equal(await languageLink.count(), 1, label + ': missing bilingual town link');
        await backLink.focus();
        await page.keyboard.press('Tab');
        const languageFocus = await languageLink.evaluate(element => ({
          active: document.activeElement === element,
          visible: element.matches(':focus-visible'),
          outline: getComputedStyle(element).outlineWidth,
          style: getComputedStyle(element).outlineStyle
        }));
        if (!languageFocus.active || !languageFocus.visible ||
            languageFocus.style === 'none' || parseFloat(languageFocus.outline) < 2) {
          failures.push(label + ': bilingual link keyboard focus/order/indicator failed: ' + JSON.stringify(languageFocus));
        }
        // Each photo has two sequentially tabbable attribution links.
        const firstCredit = creditLinks.first();
        const secondCredit = creditLinks.nth(1);
        await firstCredit.focus();
        await page.keyboard.press('Tab');
        const creditFocus = await secondCredit.evaluate(element => ({
          active: document.activeElement === element,
          visible: element.matches(':focus-visible'),
          outline: getComputedStyle(element).outlineWidth,
          style: getComputedStyle(element).outlineStyle
        }));
        if (!creditFocus.active || !creditFocus.visible ||
            creditFocus.style === 'none' || parseFloat(creditFocus.outline) < 2) {
          failures.push(label + ': photo credit keyboard focus/order/indicator failed: ' + JSON.stringify(creditFocus));
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
        // Exercise the actual interactive tax estimator, not only its markup.
        // A current taxable assessment overrides the illustrative 70% home-value rule.
        const taxFields = page.locator('.tax-fields input');
        assert.equal(await taxFields.count(), 3, label + ': expected home value, taxable assessment and mill rate inputs');
        await taxFields.nth(1).fill('240000');
        await page.waitForFunction(() => document.querySelector('.tax-estimate')?.textContent?.includes('$6,881'), null, {timeout: 10000});
        await taxFields.nth(2).fill('29.1905');
        await page.waitForFunction(() => document.querySelector('.tax-estimate')?.textContent?.includes('$7,006'), null, {timeout: 10000});
        const resetRate = page.getByRole('button', {name: locale === 'es'
          ? 'Restaurar tasa municipal base verificada'
          : 'Restore verified municipal base rate'});
        await resetRate.click();
        await page.waitForFunction(() => document.querySelector('.tax-estimate')?.textContent?.includes('$6,881'), null, {timeout: 10000});
        assert.equal(await taxFields.nth(2).inputValue(), '28.67', label + ': reset must restore Milford FY2027 base rate');
        // Activate the visible town-guide language link and confirm the actual
        // destination, instead of assuming a correctly labeled link works.
        await languageLink.click();
        const oppositeLocale = locale === 'en' ? 'es' : 'en';
        await page.waitForURL(origin + '/' + oppositeLocale + '/towns/milford', {timeout: 15000});
        assert.equal(await page.locator('html').getAttribute('lang'), oppositeLocale,
          label + ': language link did not switch the rendered document language');
        assert.equal((await page.locator('main h1').textContent())?.trim(), 'Milford, Connecticut',
          label + ': language link did not preserve the town');
        // The header switcher must also preserve the town and restore the
        // original document language after a full cross-locale navigation.
        const headerSwitcher = page.locator('header a.header-language');
        assert.equal(await headerSwitcher.count(), 1, label + ': missing header language switcher');
        await headerSwitcher.click();
        await page.waitForURL(origin + '/' + locale + '/towns/milford', {timeout: 15000});
        assert.equal(await page.locator('html').getAttribute('lang'), locale,
          label + ': header language switcher left the root document language stale');
        assert.equal((await page.locator('main h1').textContent())?.trim(), 'Milford, Connecticut',
          label + ': header language switcher did not preserve the town');
        console.log('AUDITED ' + label + ': photos=' + count + ', axe violations=' + axe.violations.length + ', overflow=' + (overflow.scroll - overflow.viewport) + 'px');
      } catch (error) {
        failures.push(label + ': browser audit failed: ' + (error?.message || String(error)));
      } finally {
        await context.close();
      }
    }
  }

  // West Haven interactive browser audit: source/HTTP checks cannot establish
  // that district-specific tax estimates, imagery or keyboard navigation work.
  // Keep failures nonfatal to the workflow's other independent jobs, but report
  // them as town-certification blockers rather than marking the town complete.
  for (const locale of ['en', 'es']) {
    for (const device of ['desktop', 'mobile']) {
      const mobile = device === 'mobile';
      const label = 'west-haven/' + locale + '/' + device;
      const context = await browser.newContext({
        viewport: mobile ? {width: 390, height: 844} : {width: 1440, height: 900},
        deviceScaleFactor: 1, isMobile: mobile, hasTouch: mobile
      });
      const page = await context.newPage();
      try {
        const response = await page.goto(origin + '/' + locale + '/towns/west-haven', {
          waitUntil: 'domcontentloaded', timeout: 45000
        });
        assert.equal(response?.status(), 200, label + ': expected HTTP 200');
        assert.equal(await page.locator('html').getAttribute('lang'), locale, label + ': wrong document language');
        assert.equal(await page.locator('main h1').count(), 1, label + ': expected one main heading');

        const gallery = page.locator('section.eh-gallery figure');
        assert.equal(await gallery.count(), 3, label + ': expected all three licensed West Haven photographs');
        for (const [index, figure] of (await gallery.all()).entries()) {
          const photo = figure.locator('img');
          await photo.scrollIntoViewIfNeeded({timeout: 12000});
          const result = await photo.evaluate(async element => {
            if (!element.complete) {
              await Promise.race([
                new Promise(resolve => {
                  element.addEventListener('load', resolve, {once:true});
                  element.addEventListener('error', resolve, {once:true});
                }),
                new Promise(resolve => setTimeout(resolve, 15000))
              ]);
            }
            return {width: element.naturalWidth, alt: element.alt, src: element.currentSrc};
          });
          assert.ok(result.width > 0,
            label + ': image ' + (index + 1) + ' failed to load: ' + result.src);
          assert.ok(result.alt.includes('West Haven'),
            label + ': image ' + (index + 1) + ' lacks town-specific alt text: ' + result.alt);
          assert.equal(await figure.locator('figcaption a').count(), 2,
            label + ': image ' + (index + 1) + ' must link its license and original source');
        }

        // Attribution must remain readable over the gallery overlay and reachable
        // by keyboard, in both languages and viewport sizes.
        const westCreditLinks = page.locator('section.eh-gallery figcaption a');
        assert.equal(await westCreditLinks.count(), 6,
          label + ': three photographs must expose six attribution links');
        for (let i = 0; i < 6; i++) {
          const color = await westCreditLinks.nth(i).evaluate(element =>
            getComputedStyle(element).color);
          assert.equal(color, 'rgb(255, 255, 255)',
            label + ': attribution link ' + (i + 1) + ' is not white on dark overlay');
        }
        await westCreditLinks.first().focus();
        await page.keyboard.press('Tab');
        const creditFocus = await westCreditLinks.nth(1).evaluate(element => ({
          active: document.activeElement === element,
          visible: element.matches(':focus-visible'),
          width: getComputedStyle(element).outlineWidth,
          style: getComputedStyle(element).outlineStyle
        }));
        assert.ok(creditFocus.active && creditFocus.visible &&
          creditFocus.style !== 'none' && parseFloat(creditFocus.width) >= 2,
          label + ': attribution keyboard focus/order/indicator failed: ' +
          JSON.stringify(creditFocus));

        // Confirm the visible bilingual link is reachable in the expected tab order.
        const backLink = page.locator('main a.town-back').first();
        const localeLink = page.locator('main a.town-back[hreflang]').first();
        assert.equal(await backLink.count(), 1, label + ': missing back-to-towns link');
        assert.equal(await localeLink.count(), 1, label + ': missing bilingual town link');
        await backLink.focus();
        await page.keyboard.press('Tab');
        const focus = await localeLink.evaluate(element => ({
          active: document.activeElement === element,
          visible: element.matches(':focus-visible'),
          width: getComputedStyle(element).outlineWidth,
          style: getComputedStyle(element).outlineStyle
        }));
        assert.ok(focus.active && focus.visible && focus.style !== 'none' &&
          parseFloat(focus.width) >= 2,
          label + ': bilingual keyboard tab order/focus indicator failed: ' + JSON.stringify(focus));

        const selector = page.locator('.town-tax-district-select select');
        const fields = page.locator('.tax-fields input');
        const estimate = page.locator('.tax-estimate');
        assert.equal(await selector.count(), 1, label + ': missing fire-district selector');
        assert.equal(await fields.count(), 3, label + ': missing tax calculator inputs');
        assert.equal(await selector.inputValue(), '', label + ': district must initially be unselected');
        assert.equal(await fields.nth(2).inputValue(), '', label + ': base-only rate must not be prefilled');
        assert.equal(await estimate.locator('strong').count(), 0,
          label + ': initial estimate must be blocked until a district is selected');

        // Use a known taxable assessment to avoid the illustrative 70% rule.
        await fields.nth(1).fill('240000');
        for (const [district, rate, dollars] of [
          ['center', '36.48', '8755'],
          ['west-shore', '33.36', '8006'],
          ['allingtown', '34.41', '8258']
        ]) {
          await selector.selectOption(district);
          // A newly hydrated page can replace an early DOM selection before React
          // attaches its change handler. Wait for the controlled input, and retry
          // the user selection once rather than treating hydration timing as a failure.
          try {
            await page.waitForFunction(expected =>
              document.querySelectorAll('.tax-fields input')[2]?.value === expected,
              rate, {timeout: 2500});
          } catch {
            await selector.selectOption('');
            await selector.selectOption(district);
            await page.waitForFunction(expected =>
              document.querySelectorAll('.tax-fields input')[2]?.value === expected,
              rate, {timeout: 10000});
          }
          assert.equal(await fields.nth(2).inputValue(), rate,
            label + ': ' + district + ' must set the combined fire-district rate');
          await expectEstimate(dollars);
        }
        await selector.selectOption('custom');
        assert.equal(await fields.nth(2).inputValue(), '',
          label + ': custom selection must clear the prior district rate');
        assert.equal(await estimate.locator('strong').count(), 0,
          label + ': custom selection must not reuse the prior estimate');
        await fields.nth(2).fill('37');
        await expectEstimate('8880');
        assert.equal(await selector.inputValue(), 'custom',
          label + ': manual rate must keep the custom selection');
        await fields.nth(2).fill('25.58');
        await page.waitForFunction(() => !document.querySelector('.tax-estimate strong'), null, {timeout: 10000});
        assert.ok((await estimate.textContent())?.includes(locale === 'es'
          ? '25,58 mills no incluye' : '25.58-mill municipal base rate excludes'),
          label + ': base-only manual entry must show a localized warning');

        const overflow = await page.evaluate(() => ({
          scroll: document.documentElement.scrollWidth, viewport: window.innerWidth
        }));
        assert.ok(overflow.scroll <= overflow.viewport + 2,
          label + ': horizontal overflow ' + JSON.stringify(overflow));
        const axe = await new AxeBuilder({page})
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
          .analyze();
        for (const issue of axe.violations) {
          for (const node of issue.nodes) {
            failures.push(label + ': accessibility ' + issue.id + ' (' + issue.impact +
              '), target=' + node.target.join(',') + ', detail=' +
              (node.failureSummary || '').replace(/\\n/g, ' ').slice(0, 320));
          }
        }
        await page.screenshot({
          path: 'artifacts/milford-browser/west-haven-' + locale + '-' + device + '.png',
          fullPage: true, animations: 'disabled'
        });
        const languageLink = page.locator('main a.town-back[hreflang]');
        assert.equal(await languageLink.count(), 1, label + ': missing town-specific language link');
        await languageLink.click();
        const other = locale === 'en' ? 'es' : 'en';
        await page.waitForURL(origin + '/' + other + '/towns/west-haven', {timeout: 15000});
        assert.equal(await page.locator('html').getAttribute('lang'), other,
          label + ': language switch failed');
        assert.equal((await page.locator('main h1').textContent())?.trim(),
          'West Haven, Connecticut', label + ': language switch changed town');
        console.log('AUDITED ' + label + ': district calculations, photos, axe=' +
          axe.violations.length + ', overflow=' + (overflow.scroll - overflow.viewport) + 'px');

        async function expectEstimate(dollars) {
          await page.waitForFunction(expected => {
            const value = document.querySelector('.tax-estimate strong')?.textContent || '';
            return value.replace(/[^0-9]/g, '') === expected;
          }, dollars, {timeout: 10000});
        }
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
  console.error('Milford/West Haven browser certification blocked by ' + failures.length + ' finding(s). HTTP-only checks are not sufficient.');
  process.exitCode = 1;
} else {
  console.log('PASS: Milford and West Haven EN/ES desktop/mobile imagery, accessibility, tax interactions and navigation.');
}
