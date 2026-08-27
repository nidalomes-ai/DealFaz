# DEALFAZ – Hosting-Fallbacks

Stand: 27.08.2026

Ziel: keine Abhängigkeit von einem einzelnen kostenlosen Anbieter. Monetarisierung bleibt gesperrt, bis ein kommerziell zulässiges Produktionshosting aktiv und der Business-/Steuer-Release freigegeben ist.

## Plan A – Cloudflare Pages

**Bevorzugter Dauerhost.** DEALFAZ ist eine statische Site. Cloudflare dokumentiert für Pages, dass statische Asset-Requests sowohl im Free- als auch im Paid-Plan kostenlos und unbegrenzt sind. GitHub `main`, statisches HTML und `_headers` sind vorbereitet.

Aktueller Blocker ist ausschließlich der fehlende ausführbare Cloudflare-Accountzugriff in dieser Chat-Sitzung. Kein Code-Blocker.

Nach erfolgreichem Deployment: Domain, Canonical, OG, Sitemap, Robots, Datenschutz-Hostingtext und alle Supabase-Redirectziele auf die neue Produktionsdomain umstellen; danach vollständiger Live-Health-Test.

## Plan B – Firebase Hosting Spark

**Aktiver kostenloser Ersatzweg.** Firebase dokumentiert, dass der Spark-Tarif ohne Zahlungsdaten startet, Hosting ein kostenloses Nutzungskontingent enthält und Firebase-Produkte ausdrücklich auch in Produktions-Apps eingesetzt werden können. `firebase.json` ist vorbereitet und veröffentlicht nur Web-Dateien; interne Markdown-Dokumentation, Workflows, Scripts und der Monetarisierungs-Lock werden nicht als Website-Inhalte hochgeladen.

Vor Umschaltung: Deployment-URL prüfen, danach Canonical/OG/Sitemap/Robots/Datenschutz-Hostingtext anpassen und Live Health vollständig ausführen.

## Plan C – Netlify Free

**Zulässiger technischer Ersatzkandidat, aber weniger robust.** `netlify.toml` ist vorbereitet. Der aktuelle Free-Tier erlaubt Git/API-Deploys, Custom Domains und SSL. Gleichzeitig behält Netlify sich im Free Usage Tier vor, Projekte ohne SLA zu deaktivieren oder zu entfernen. Deshalb nur Plan C und nicht primärer Dauerhost.

Vor Umschaltung: Free-Tier-Bedingungen nochmals prüfen, Repository anbinden, Preview testen, danach vollständigen Cutover ausführen.

## Nicht als kommerzieller Produktions-Fallback verwenden

### Render Free

Render dokumentiert selbst, dass Free-Instanzen nicht für Produktionsanwendungen verwendet werden sollen. Static Sites sind zwar kostenlos verfügbar, DEALFAZ behandelt Render Free deshalb nur als Test-/Preview-Weg und nicht als kommerziellen Produktionshost.

### Supabase Edge Functions auf Free-Domain

Nicht als Site-Hosting-Ersatz verwenden. Supabase dokumentiert aktuell, dass HTML-Ausgaben von Edge Functions ohne Custom Domain auf `text/plain` umgeschrieben werden. Eine Custom Domain ist kein 0-Euro-Weg. Supabase bleibt Backend/Analytics/Redirect-Infrastruktur.

### GitHub Pages

Nicht als kommerziellen Shop-/Affiliate-Dauerhost einplanen.

### Vercel Hobby

Bleibt nur nicht-kommerzielle Übergangs-/Testinstanz. Keine Affiliate-Tags oder Partnervergütung auf dieser Instanz.

## Umschalt-Gate

Kein neuer Host wird öffentlich als Produktionshost geschaltet, bevor folgende Punkte geprüft sind:

1. Root + `app.js` + `analytics.js` + `style.css` + Manifest laden mit HTTP 200.
2. Vier SEO-Seiten laden und besitzen korrekte Canonicals.
3. CSP, HSTS, nosniff, Referrer-Policy, Permissions-Policy und Frame-Schutz aktiv.
4. Share-Daten bleiben im URL-Fragment und werden nicht serverseitig als Deal-Daten übertragen.
5. Kein Affiliate-Tag, solange `MONETIZATION_DISABLED` existiert.
6. Datenschutzhinweise nennen den tatsächlich aktiven Hoster.
7. Sitemap/robots/OG/Canonical zeigen ausschließlich auf die Produktionsdomain.
8. Supabase-Redirects zeigen ausschließlich auf die Produktionsdomain.
9. Live Health ist vollständig grün.

## Automatische Entscheidungsregel

Wenn Plan A technisch/accountseitig blockiert ist, sofort Plan B versuchen. Wenn Plan B blockiert ist, sofort Plan C versuchen. Keine Wartephase zwischen den Wegen. Render/Supabase/GitHub Pages/Vercel Hobby werden nicht als kommerzieller Produktionsersatz verwendet.
