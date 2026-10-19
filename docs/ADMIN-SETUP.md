# Admin authentication setup

1. Create a Supabase project under the project owner's account.
2. Run the SQL migration in the SQL editor.
3. Configure Google OAuth in Google Cloud and Supabase Auth.
4. Add the correct Supabase OAuth callback URI in Google Cloud; configure allowed site redirects for staging and local development.
5. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in local/staging environment variables (not in GitHub).
6. Sign in once with the intended owner Google account. Login alone **does not** grant admin access.
7. In the Supabase dashboard, identify the owner's `auth.users.id` and run the following SQL manually, replacing the placeholder with the verified UUID:

```sql
insert into public.admin_profiles (user_id, role, active)
values ('REPLACE_WITH_VERIFIED_OWNER_AUTH_UUID', 'owner', true);
```

Never accept a user-provided email address alone as proof of ownership. Never add an automatic admin-on-first-login trigger. Do not place Supabase service-role keys in NEXT_PUBLIC variables or commit them. Restrict Supabase Auth signups to invited accounts if supported by the chosen OAuth configuration; the RLS allowlist is the actual admin access gate. Enable Google account MFA and consider a second independent administrative access factor before handling real leads.

This is an auth foundation, not a complete production authorization or session-refresh implementation. The OAuth flow must be tested in staging.
