# Cloudflare staging checklist

The repository is a Next.js 15 scaffold. It has NOT been deployed, compiled in Cloudflare, or verified against Workers.

## Before connecting a build
1. Decide whether to migrate to Cloudflare's current recommended vinext runtime or retain Next.js with OpenNext. Do not select a plain static-site or Cloudflare Pages preset for server-side authentication.
2. Ensure dependencies install and the production build passes. Add a lockfile.
3. Confirm RLS and OAuth settings in Supabase.
4. Use a separate staging Worker named `explore-connecticut-living-staging`. Do not attach the production domain.
5. Configure public Supabase environment variables for both build and runtime:
   - `NEXT_PUBLIC_SUPABASE_URL=https://rhjihnpplgeccowimqxj.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` from Supabase Project Settings → API Keys
   The publishable key is designed for browser use; never use the secret/service-role key.
6. Configure Supabase Authentication → URL Configuration with the final staging origin and an exact callback URL:
   `https://YOUR-STAGING-SUBDOMAIN.workers.dev/auth/callback`
   Configure the same origin in the Google OAuth consent and Supabase provider flow as required.
7. Keep the staging URL unadvertised. A hidden URL is NOT an access control. Implement a staging gate before entering real lead information.
8. Run `supabase/verification/verify_phase1.sql` and confirm all expected tables have RLS enabled.

## Important
The Google OAuth provider callback at Google Cloud is `https://rhjihnpplgeccowimqxj.supabase.co/auth/v1/callback`. The app callback above is a separate URL.

The current app includes placeholders and must not be treated as production-ready. No live lead intake, analytics, automated town import, backup guarantee, or deployed admin dashboard has been verified.
