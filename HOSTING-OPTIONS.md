# DEALFAZ – Hosting-Status und Ausweichplan

Stand: 27.08.2026

Ziel: kostenloser technischer Betrieb ohne Sackgasse und keine vorschnelle Monetarisierung auf einem ungeprüften Produktions-Setup.

## Aktueller Hauptbetrieb

1. **Cloudflare Workers – aktiv**
   - aktuelle öffentliche Beta: `https://dealfaz.dealfaz-social.workers.dev/`
   - Quality und Live Health prüfen diesen Host
   - Canonical, Sitemap, robots.txt und Social-Metadaten zeigen auf diesen Host
   - öffentliche HTML-Seiten hängen nicht mehr von alten Supabase-Funktionslinks ab

2. **Späterer kommerzieller Dauerbetrieb – noch gelb**
   - vor Monetarisierung wird entschieden, ob eine Custom Domain/Route bzw. andere finale Produktionsdomain eingesetzt wird
   - kein kostenpflichtiger Domain-/Hostingkauf erfolgt automatisch
   - ein Domainwechsel wird nur als gemeinsamer Cutover durchgeführt

## Kostenlose Ausweichrouten

Diese Konfigurationen bleiben als technische Fallbacks im Repository, werden aber nicht parallel als öffentliche Hauptquelle beworben:

1. Cloudflare Pages – statischer Fallback, falls ein Pages-Deployment später sinnvoll wird.
2. Firebase Hosting Spark – mit `firebase.json` vorbereitet.
3. Netlify Free – mit `netlify.toml` vorbereitet.
4. Render Static Site – mit `render.yaml` vorbereitet.

Die jeweils aktuellen Tarif-/Nutzungsbedingungen müssen vor einer späteren kommerziellen Nutzung erneut geprüft werden. Ein vorhandener Fallback ist keine automatische Freigabe für Monetarisierung.

## Nicht wieder als primäre öffentliche Quelle verwenden

- alte Vercel-Frontendstände
- alte GitHub-Pages-Frontendstände
- alte Supabase-Edge-Function-Frontendlinks

Diese alten Frontends werden nicht erneut in Launch-, SEO-, Canonical- oder Social-Links eingebaut.

## Cutover-Regel für eine spätere finale Domain

Ein neuer Host bzw. eine Custom Domain/Route wird erst zur Hauptquelle, wenn gleichzeitig geprüft ist:

- Root und alle vier SEO-Seiten liefern HTTP 200 + HTML
- `app.js`, `analytics.js`, `style.css`, Manifest, Social-Card, Sitemap, Robots und IndexNow-Key sind erreichbar
- Sicherheitsheader sind aktiv
- keine Affiliate-Tags bei aktivem `MONETIZATION_DISABLED`
- Share-Links verwenden Fragment statt Deal-Daten im Server-Querystring
- Canonical, `og:url`, Schema, Sitemap, robots.txt und Social-Card-URL werden gemeinsam umgestellt
- Datenschutzhinweise nennen den tatsächlichen Host/Provider
- PartnerNet-Webseite wird erst beim tatsächlichen kommerziellen Cutover aktualisiert
- Quality, Live Health und Commercialization Guards sind danach grün

Bis dahin bleibt die kostenlose Cloudflare-Beta aktiv und `MONETIZATION_DISABLED` bestehen.
