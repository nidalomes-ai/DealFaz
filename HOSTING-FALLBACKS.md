# DEALFAZ – Hosting-Fallbacks

Ziel: keine Abhängigkeit von einem einzelnen kostenlosen Anbieter. Monetarisierung bleibt gesperrt, bis ein kommerziell zulässiges Produktionshosting aktiv und der Business-/Steuer-Release freigegeben ist.

## Plan A – Cloudflare Pages

Bevorzugt. GitHub `main`, statisches HTML, `_headers` ist vorbereitet. Nach erfolgreichem Deployment: Domain, Canonical, OG, Sitemap, Robots, Datenschutz-Hostingtext und alle Supabase-Redirectziele auf die neue Produktionsdomain umstellen; danach vollständiger Live-Health-Test.

## Plan B – Firebase Hosting Spark

Kostenloses Kontingent, ohne Zahlungsdaten startbar. `firebase.json` ist vorbereitet und veröffentlicht nur die Web-Dateien; interne Markdown-Dokumentation, Workflows, Scripts und Monetarisierungs-Lock werden nicht als Website-Inhalte hochgeladen. Sicherheitsheader entsprechen dem aktuellen DEALFAZ-Stand.

Vor Umschaltung: Deployment als Preview/Hosting-URL prüfen, danach Canonical/OG/Sitemap/Robots/Datenschutz-Hostingtext anpassen und Live Health vollständig ausführen.

## Plan C – Netlify Free

Nur als Ausweichlösung, wenn Cloudflare und Firebase nicht verfügbar sind. Standard-Free-Tier prüfen, Repository anbinden, zuerst Preview testen. Wegen Free-Tier-Limits und fehlender SLA nicht erste Wahl.

## Plan D – Render Static Site

Letzte kostenlose Ausweichroute. Nur statisches Frontend; vor Produktivnutzung aktuelle Free-Tier- und Produktionsbedingungen erneut prüfen.

## Kein Fallback

Vercel Hobby bleibt nur als nicht-kommerzielle Übergangs-/Testinstanz. Keine Affiliate-Tags oder Partnervergütung auf dieser Instanz.

## Umschalt-Gate

Kein neuer Host wird öffentlich geschaltet, bevor folgende Punkte geprüft sind:

1. Root + `app.js` + `analytics.js` + `style.css` + Manifest laden mit HTTP 200.
2. Vier SEO-Seiten laden und besitzen korrekte Canonicals.
3. CSP, HSTS, nosniff, Referrer-Policy, Permissions-Policy und Frame-Schutz aktiv.
4. Share-Daten bleiben im URL-Fragment und werden nicht serverseitig als Deal-Daten übertragen.
5. Kein Affiliate-Tag, solange `MONETIZATION_DISABLED` existiert.
6. Datenschutzhinweise nennen den tatsächlich aktiven Hoster.
7. Sitemap/robots/OG/Canonical zeigen ausschließlich auf die Produktionsdomain.
8. Supabase-Redirects zeigen ausschließlich auf die Produktionsdomain.
9. Live Health ist vollständig grün.
