# DEALFAZ – Hosting-Fallbacks

Stand: 27.08.2026

Ziel: keine unnötige Abhängigkeit von einem einzelnen kostenlosen Anbieter. Der kostenlose Beta-Betrieb ist bereits aktiv. Monetarisierung bleibt separat gesperrt, bis Business-/Steuer-/Partner-Gates tatsächlich erfüllt sind.

## Aktiver Plan A – Cloudflare Workers

**Status für kostenlose Beta: 🟢 aktiv.**

Aktuelle öffentliche Version:

> `https://dealfaz.dealfaz-social.workers.dev/`

Der frühere Cloudflare-Account-/Deployment-Blocker ist überholt. Der aktuelle Host wird bereits von Quality und Live Health geprüft. Canonical, OpenGraph, Sitemap, robots.txt, Launch-Kit und die öffentlichen SEO-Seiten sind auf diesen Host ausgerichtet.

Für die kostenlose Beta ist **kein Hosting-Fallback erforderlich**.

Vor einem späteren geschäftskritischen/monetarisierten Dauerbetrieb bleibt bewusst separat zu entscheiden, ob eine Custom Domain/Route bzw. finale Produktionsdomain verwendet wird. Dafür wird jetzt nichts gekauft.

## Plan B – Firebase Hosting Spark

**Kostenloser technischer Ersatzweg, falls der aktive Cloudflare-Beta-Host künftig ausfällt.**

`firebase.json` ist vorbereitet und veröffentlicht nur Web-Dateien; interne Markdown-Dokumentation, Workflows, Scripts und der Monetarisierungs-Lock werden nicht als Website-Inhalte hochgeladen.

Vor Umschaltung: Deployment-URL prüfen, danach Canonical/OG/Sitemap/robots.txt/Datenschutz-Hostingtext anpassen und Live Health vollständig ausführen.

## Plan C – Netlify Free

**Weiterer technischer Ersatzkandidat.** `netlify.toml` ist vorbereitet. Vor Nutzung werden die dann aktuellen Free-Tier-Bedingungen nochmals geprüft.

Vor Umschaltung: Repository anbinden, Preview testen, danach vollständigen Cutover ausführen.

## Nicht automatisch als kommerzieller Produktions-Fallback verwenden

Die folgenden Wege gelten **nicht als kommerzieller Produktionsersatz**, solange ihre dann aktuellen Bedingungen und der konkrete Monetarisierungsbetrieb nicht erneut geprüft wurden.

### Render Free

Nur nach erneuter Prüfung der dann geltenden Produktions-/Free-Tier-Bedingungen verwenden.

### Supabase Edge Functions auf Free-Domain

Nicht als Site-Hosting-Ersatz verwenden. Supabase bleibt Backend/Analytics/Legacy-Redirect-Infrastruktur. Die öffentliche Legacy-Funktion `dealfaz-launch` Version 38 leitet alte Social-/Weblinks auf die aktuelle Cloudflare-Produktion weiter.

### GitHub Pages

Nicht als primären kommerziellen Dauerhost einplanen.

### Vercel Hobby

Nicht mehr als öffentliche Hauptquelle behandeln. Alte Vercel-Ziele wurden aus der aktuellen öffentlichen Konfiguration entfernt.

## Umschalt-Gate

Kein neuer Host wird öffentlich als Produktionshost geschaltet, bevor folgende Punkte geprüft sind:

1. Root + `app.js` + `analytics.js` + `style.css` + Manifest laden mit HTTP 200.
2. Vier SEO-Seiten laden und besitzen korrekte Canonicals.
3. CSP, HSTS, nosniff, Referrer-Policy, Permissions-Policy und Frame-Schutz aktiv.
4. Share-Daten bleiben im URL-Fragment und werden nicht serverseitig als Deal-Daten übertragen.
5. Kein Affiliate-Tag, solange `MONETIZATION_DISABLED` existiert.
6. Datenschutzhinweise nennen den tatsächlich aktiven Hoster.
7. Sitemap/robots/OG/Canonical zeigen ausschließlich auf die Produktionsdomain.
8. Supabase-Legacy-Redirects zeigen ausschließlich auf die Produktionsdomain.
9. Live Health ist vollständig grün.

## Automatische Entscheidungsregel

Aktiver Cloudflare-Host funktioniert → dort bleiben. Bei einem echten technischen Ausfall Plan B prüfen. Wenn Plan B nicht funktioniert, Plan C prüfen. Keine kostenpflichtige Lösung automatisch aktivieren.
