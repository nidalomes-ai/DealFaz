# DEALFAZ – Cloudflare Pages Migration

Purpose: move the static DEALFAZ frontend away from a hosting plan that is restricted to non-commercial use before monetization is re-enabled.

## Repository source
- Repository: `nidalomes-ai/DealFaz`
- Production branch: `main`
- Framework preset: None / static site
- Build command: `exit 0`
- Build output directory: repository root (`.`)
- Root directory: repository root / leave blank
- No environment variables are required for the static frontend.

These settings follow Cloudflare Pages' current Static HTML guidance for a site without a framework or build step.

## Files that must be served
- `index.html`
- `app.js`
- `analytics.js`
- `style.css`
- `manifest.webmanifest`
- `icon.svg`
- `robots.txt`
- `sitemap.xml`
- `_headers`
- `reselling-rechner/`
- `maximaler-einkaufspreis/`
- `roi-reselling/`
- `sell-through/`
- IndexNow verification text file

## Security
Cloudflare Pages must honor `_headers`. Verify after deployment:
- Content-Security-Policy
- X-Content-Type-Options: nosniff
- Referrer-Policy
- Permissions-Policy
- X-Frame-Options: DENY
- Strict-Transport-Security

## Before switching canonical URLs
Do not change canonical, OpenGraph URL, robots sitemap URL, sitemap loc entries, social links, IndexNow host, or tracking allow-origin until the new public production hostname is known and verified.

## Before monetization
`MONETIZATION_DISABLED` must remain present until all legal release gates are complete. Affiliate tags must not be added merely because the hosting migration succeeds.

## Cutover verification
1. Root returns HTTP 200.
2. All four SEO pages return HTTP 200.
3. JS/CSS/manifest/icon return HTTP 200.
4. Security headers are present.
5. LocalStorage features still work.
6. Supabase aggregate pixel is either allowed for the new origin or deliberately disabled until updated.
7. Privacy notice names the actual production host/provider.
8. Canonical/OG/sitemap/robots/IndexNow are changed together only after the new production domain is final.
9. Old host stays non-monetized during transition.
