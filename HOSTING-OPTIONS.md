# DEALFAZ – Hosting-Ausweichplan

Ziel: keine technische Sackgasse und kein kommerzieller Betrieb auf einem Tarif, dessen Bedingungen dafür nicht passen.

## Reihenfolge

1. Cloudflare Pages – bevorzugter Zielhost, sobald Konto-Deployment verfügbar ist.
2. Firebase Hosting Spark – bereits mit `firebase.json` vorbereitet; kostenloses Hosting-Kontingent, keine Zahlungsdaten zum Start erforderlich.
3. Netlify Free – bereits mit `netlify.toml` vorbereitet; als weiterer statischer Git-Host.
4. Render Static Site – bereits mit `render.yaml` vorbereitet; kostenloser statischer Git-Deploy als weitere Ausweichroute.

## Nicht als kommerzieller Zielhost verwenden

- Vercel Hobby: DEALFAZ bleibt dort nur Übergangs-/Altstand, solange der Tarif nicht zur konkreten kommerziellen Nutzung passt.
- GitHub Pages: nicht als kostenloser Host für das kommerzielle Online-Geschäft einsetzen; nur Repository/Projektpräsentation bzw. nicht-kommerzielle technische Vorschau.
- Supabase Edge Functions Shared Domain: nicht als HTML-Frontend-Host verwenden; nur API/Redirect/Backend-Aufgaben.

## Cutover-Regel

Ein neuer Host wird erst zur Hauptdomain, wenn alle Punkte geprüft sind:

- Root und alle vier SEO-Seiten HTTP 200 + HTML
- `app.js`, `style.css`, Manifest, Sitemap, Robots und IndexNow-Key erreichbar
- Sicherheitsheader aktiv
- keine alten Amazon-Partnerhinweise bei deaktivierter Monetarisierung
- Share-Links verwenden Fragment statt Deal-Daten in der Query
- Canonical, `og:url`, Schema, Sitemap und Robots auf neuen Host umgestellt
- Datenschutz nennt den tatsächlichen Host
- Supabase/Social-Redirects zeigen auf den neuen Host
- Quality und neuer Live-Health-Test sind grün

Bis dahin bleibt `MONETIZATION_DISABLED` bestehen.
