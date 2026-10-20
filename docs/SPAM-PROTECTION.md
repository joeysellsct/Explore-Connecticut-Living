# Town Match spam protection setup

The Town Match form includes a hidden honeypot, submission timing validation, basic request validation, and optional Cloudflare Turnstile verification.

## Enable Turnstile

1. In Cloudflare, open **Turnstile** and create a widget for the website hostname. Include the current staging hostname while testing, and add the production hostname when launching.
2. Set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` to the public **site key** in the **Cloudflare build environment** for the Next.js build. Rebuild the site so the browser receives the key.
3. Set `TURNSTILE_SECRET_KEY` to the **secret key** as a **Cloudflare Worker runtime secret**. Do not commit it to GitHub or expose it in a public environment variable.
4. Make sure both values are configured before testing. If only the secret is set, the server rejects submissions; if only the site key is set, the widget appears but server verification is not active.
5. Submit a test lead and confirm it arrives in Follow Up Boss. Confirm invalid Turnstile submissions do not create leads.

## Enable edge rate limiting

Rate limiting is configured in the Cloudflare dashboard, not in this repository. If the website hostname is routed through a Cloudflare zone with WAF rate limiting, create a rule matching **POST /api/town-match**, with a modest threshold such as **5 requests per minute per IP**, and use a managed challenge or block for repeated abuse. Adjust for legitimate shared-IP visitors. Confirm the rule actually applies to the hostname; a workers.dev address may not be eligible for the same zone WAF rules. Alternatively use a Cloudflare Worker Rate Limiting binding and implement the limit in the API route once the binding is provisioned.

Do not claim rate limiting is enabled until a dashboard rule or runtime binding has been configured and tested.

## Verification checklist

- Normal English and Spanish submissions succeed and appear in Follow Up Boss.
- Missing/invalid Turnstile tokens fail when the runtime secret is configured.
- Bot-trap submissions fail.
- Very fast submissions fail.
- Excessive traffic triggers the configured rate limit.
