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

## Town-data coverage ledger (2026-11-06)

The target is all **169 Connecticut municipalities**. A directory entry or a link to a data portal does **not** establish that town-specific data is complete. No town is certified by this ledger.

| Dataset | Source-code coverage currently evidenced | Outstanding work |
| --- | --- | --- |
| FY2027 municipal base mill rates | 50 entries: all 27 New Haven County and 23 Fairfield County towns in `lib/fy2027-mill-rates.ts`, attributed to [CT OPM](https://data.ct.gov/Local-Government/Mill-Rates-for-FY-2014-2027/emyx-j53e) | 119 towns; verify against OPM; distinguish district taxes and actual parcel assessments |
| Demographics | Census research links exist for many New Haven County towns; links are not demographic figures | Dated town-specific figures, geographic definitions and ACS margins of error |
| Schools and crime | Research guidance does not establish numerical coverage | Dated, sourced local facts and reporting caveats |
| Restaurants and photos | Existing directories and image assets need per-town audits | Approximately five verified operating restaurants where available; photo license, source and attribution |
| Spanish and SEO | Existing bilingual content and metadata need per-town checks | Original localized content, canonical/hreflang, internal links, schema and sitemap |

**Priority:** Milford, West Haven, other New Haven County towns; Fairfield County; remaining counties. Advance multiple towns rather than repeatedly polishing one. Preserve only the three approved personal Top Picks, referral and storefront tracking links and disclosures, Equal Housing Opportunity materials, and staging noindex/robots rules. For each new factual claim record the official source and verification date. Essential automated checks continue during development; final human visual, screen-reader and launch certification remain deferred. This is a source-code inventory, not evidence of a passing build or live deployment.
