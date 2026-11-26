# Explore Connecticut Living — Phase 1 starter

A Next.js + Supabase foundation for a Connecticut relocation research platform. **This is not a production-ready deployment.**

## Local development
1. Install Node.js 22 and Python 3.11+.
2. Run `npm install` and commit the generated package-lock.json.
3. Copy `.env.example` to `.env.local` and add Supabase project URL and public anon/publishable key. Never commit secrets.
4. Apply `supabase/migrations/0001_foundation.sql` in Supabase.
5. Run `npm run import:towns` to produce a REVIEW CSV. Verify all 169 municipalities before importing.
6. Run `npm run dev` and visit `http://localhost:3000`.
7. Configure Google OAuth in Supabase and Google Cloud; whitelist appropriate callback URLs.
8. Bootstrap the first owner securely through SQL, not public signup.

## Scope
Basic bilingual homepage and town directory, Google OAuth foundation, database migration, source review importer and basic tests. Lead capture, full town data, analytics, backup guarantees and production deployment are not yet implemented.

## Safety
Do not submit real buyer data until consent, validation, rate limiting, retention and deletion are implemented. Google login does not automatically grant admin access. Free Supabase does not guarantee managed backups. Use a Next.js-compatible Cloudflare Workers adapter for eventual staging deployment.

## Town-data coverage ledger (updated 2026-11-26)

The target is all **169 Connecticut municipalities**. A directory entry or a link to a data portal does **not** establish that town-specific data is complete. No town is certified by this ledger.

| Dataset | Source-code coverage currently evidenced | Outstanding work |
| --- | --- | --- |
| Official research-resource town keys | 169 of 169 municipality keys in `lib/town-official-links.ts` as independently read after commit [`0abb742`](https://github.com/joeysellsct/Explore-Connecticut-Living/commit/0abb74227b2d7f0b1907dbb982b851badb413033) on 2026-11-22. These are bilingual links/guidance, **not** 169 fully populated town profiles. | Verify each resource renders, check links for freshness, and fill actual town-specific datasets rather than treating research portals as populated statistics. |
| FY2027 municipal base mill rates | 50 entries: all 27 New Haven County and 23 Fairfield County towns in `lib/fy2027-mill-rates.ts`, attributed to [CT OPM](https://data.ct.gov/Local-Government/Mill-Rates-for-FY-2014-2027/emyx-j53e) | 119 towns; verify against OPM; distinguish district taxes and actual parcel assessments |
| Demographics | Census research links exist for many New Haven County towns; links are not demographic figures | Dated town-specific figures, geographic definitions and ACS margins of error |
| Schools and crime | Research guidance does not establish numerical coverage | Dated, sourced local facts and reporting caveats |
| Restaurants | `lib/verified-town-restaurants.ts` currently contains **83 source-linked bilingual restaurant records across 15 explicit town keys** (source-code inventory checked 2026-11-22; counts are not an operating-status or source-link audit). Some other restaurant directories may contain additional entries. | Expand coverage across all towns; independently reconfirm operation, address and source links; target roughly five per town where available | 
| Photos | Existing image assets have not been comprehensively audited for town identity or reuse rights | Town-specific images with documented license, creator, source and attribution; do not publish unverified images |
| Spanish and SEO | Existing bilingual content and metadata need per-town checks | Original localized content, canonical/hreflang, internal links, schema and sitemap |
| Bilingual attraction/moving guides | `lib/shoreline-guides.ts` contains 84 distinct source-code keys with English and Spanish text (inventory checked 2026-11-26), including Brooklyn and Plainville. Normalizing hyphens and underscores yields 76 distinct identifiers; this is not a verified municipality or rendered-page count. Some keys are aliases (for example `northbranford` and `north-branford`). | Normalize aliases, audit official-source freshness and check that each guide renders on the intended town page; expand missing towns without duplicate keys |

**Priority:** Milford, West Haven, other New Haven County towns; Fairfield County; remaining counties. Advance multiple towns rather than repeatedly polishing one. Preserve only the three approved personal Top Picks, referral and storefront tracking links and disclosures, Equal Housing Opportunity materials, and staging noindex/robots rules. For each new factual claim record the official source and verification date. Essential automated checks continue during development; final human visual, screen-reader and launch certification remain deferred. This is a source-code inventory, not evidence of a passing build or live deployment.

## Latest automated verification (2026-11-19)

[GitHub Actions run 44550037554](https://github.com/joeysellsct/Explore-Connecticut-Living/actions/runs/44550037554) for commit `4f78d94` finished **failure**. Its `production-build` and `new-haven-browser-audit` jobs succeeded. `content-tests` failed at **Run content regression tests** and `staging-smoke` failed at **Audit rendered Milford bilingual metadata, disclosures and deployment freshness**. These job results do not identify the individual assertions or establish the root cause. Investigate logs and update implementation or tests only after identifying which expectations are wrong. Do not treat successful build as launch readiness. A Cloudflare deployment or live staging `robots.txt` response was not independently verified by this audit.
