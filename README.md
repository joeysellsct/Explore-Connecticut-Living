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
