# DINAVO – Hosting-Fallbacks

Stand: 10.09.2026

Ziel: keine unnötige Abhängigkeit von einem einzelnen kostenlosen Anbieter. Der kostenlose Beta-Betrieb ist bereits aktiv. Monetarisierung bleibt separat gesperrt, bis Business-/Steuer-/Partner-Gates tatsächlich erfüllt sind.

## Aktiver Plan A – Cloudflare Workers

**Status für kostenlose Beta: 🟢 aktiv.**

Aktuelle öffentliche Version:

> `https://dealfaz.dealfaz-social.workers.dev/`

Der aktuelle Host wird von Quality und Live Health geprüft. Canonical, OpenGraph, Sitemap, robots.txt, Launch-Kit und die öffentlichen SEO-Seiten sind auf diesen Host ausgerichtet.

Für die kostenlose Beta ist **kein Hosting-Fallback erforderlich**.

Vor einem späteren geschäftskritischen/monetarisierten Dauerbetrieb bleibt bewusst separat zu entscheiden, ob eine Custom Domain/Route bzw. finale Produktionsdomain verwendet wird. Dafür wird jetzt nichts gekauft.

Cloudflare ist für die statische Hauptseite der aktive Null-Euro-Host. Die Nutzungsbedingungen werden vor jeder wesentlichen Geschäfts- oder Funktionsänderung erneut geprüft. Zahlungsdaten werden auf dieser Website nicht verarbeitet.

Vertragsquellen, zuletzt kontrolliert am 10.09.2026:

- Cloudflare Self-Serve Subscription Agreement: <https://www.cloudflare.com/terms/>
- Vercel Fair Use Guidelines für Hobby: <https://vercel.com/docs/limits/fair-use-guidelines>

## Plan A2 – Vercel

Vercel bleibt als technisch geprüfter Fallback erhalten. Der Hobby-Tarif wird ausschließlich für nichtkommerzielle Zwecke verwendet. Affiliate, Anzeigen, Checkout, sonstige Einnahmen oder ein geschäftlicher Produktionsbetrieb dürfen dort nicht ohne erneute Tarif-/Vertragsprüfung aktiviert werden.

## Alte Firebase-Instanz – nur Stilllegung

**Kein Hosting-Fallback mehr.**

Die frühere DEALFAZ-Seite auf Firebase kann noch öffentlich sein und PostHog laden. `firebase.json` veröffentlicht deshalb ausschließlich eine minimale Retirement-Oberfläche und leitet alle Routen permanent auf DINAVO bei Cloudflare weiter. Ein Firebase-Deploy darf nur für diese Stilllegung verwendet werden.

Nach dem separaten Deploy müssen Root, alte Sprachrouten, Header und das Ende der PostHog-Auslieferung geprüft werden.

## Plan B – Netlify Free

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

Nicht für den kommerziellen Produktionsbetrieb verwenden. Vor einem kommerziellen Einsatz auf einen dafür geeigneten Tarif wechseln oder bei Cloudflare bleiben und die dann aktuellen Bedingungen prüfen.

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

Aktiver Cloudflare-Host funktioniert → dort bleiben. Bei einem echten technischen Ausfall zuerst den nichtkommerziellen Vercel-Fallback prüfen. Wenn er für den vorgesehenen Zweck nicht zulässig oder verfügbar ist, Cloudflare Pages und danach Netlify prüfen. Die alte Firebase-Instanz dient nur noch als Weiterleitung. Keine kostenpflichtige Lösung automatisch aktivieren.
