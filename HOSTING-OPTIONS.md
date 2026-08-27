# DEALFAZ – Hosting-Status und Ausweichplan

Stand: 27.08.2026

## Aktueller Status: 🟢 GRÜN

Der kostenlose Hauptbetrieb ist entschieden und aktiv:

1. **Cloudflare Workers – aktiver Hauptbetrieb**
   - öffentliche Beta: `https://dealfaz.dealfaz-social.workers.dev/`
   - Quality und Live Health prüfen diesen Host
   - Canonical, Sitemap, robots.txt und Social-Metadaten zeigen auf diesen Host
   - öffentliche HTML-Seiten hängen nicht mehr von alten Supabase-Funktionslinks ab

2. **Pre-Gewerbe-Entscheidung**
   - Cloudflare Workers bleibt Hauptbetrieb
   - es wird jetzt keine kostenpflichtige Domain gekauft
   - eine Custom Domain/Route ist keine Voraussetzung für die kostenlose Beta und kein aktueller gelber Punkt

## Kostenlose Ausweichrouten

Diese Konfigurationen bleiben als technische Fallbacks im Repository:

1. Cloudflare Pages – statischer Fallback.
2. Firebase Hosting Spark – mit `firebase.json` vorbereitet.
3. Netlify Free – mit `netlify.toml` vorbereitet.
4. Render Static Site – nur nach erneuter Prüfung der dann aktuellen Nutzungsbedingungen.

Die jeweils aktuellen Tarif-/Nutzungsbedingungen werden vor einer späteren kommerziellen Nutzung erneut geprüft. Ein technischer Fallback ist keine automatische Monetarisierungsfreigabe.

## Nicht wieder als primäre öffentliche Quelle verwenden

- alte Vercel-Frontendstände
- alte GitHub-Pages-Frontendstände
- alte Supabase-Edge-Function-Frontendlinks

Diese alten Frontends werden nicht erneut in Launch-, SEO-, Canonical- oder Social-Links eingebaut.

## ⏸ Späterer kommerzieller Cutover nach Gewerbe

Wenn später bewusst eine Custom Domain/Route verwendet wird, erfolgt der Wechsel nur gemeinsam für:

- Root und alle vier SEO-Seiten
- `app.js`, `analytics.js`, `style.css`, Manifest, Social-Card, Sitemap, Robots und IndexNow-Key
- Sicherheitsheader
- Canonical, `og:url`, Schema, Sitemap, robots.txt und Social-Card-URL
- Datenschutzhinweise
- Partnerprogramm-Webseiten
- Supabase-Legacy-Redirects

Danach müssen Quality, Live Health und Commercialization Guards erneut grün sein.

## Ergebnis

**Hosting für den aktuellen Pre-Gewerbe-/Beta-Betrieb: 🟢 100 % grün.**

**Custom Domain/kommerzieller Cutover: ⏸ nach Gewerbe, nicht aktueller gelber Punkt.**
