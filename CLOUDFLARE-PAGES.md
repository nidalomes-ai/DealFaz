# DINAVO – Cloudflare Hosting

Stand: 12.09.2026

Der Dateiname bleibt aus Kompatibilitätsgründen bestehen. Cloudflare Workers ist wieder die öffentliche Hauptinfrastruktur; damit hängt der aktuelle kostenlose Betrieb nicht von den Einschränkungen des Vercel-Hobby-Tarifs ab.

## Aktueller Repository- und Produktionsstand

- Repository: `nidalomes-ai/DealFaz`
- Produktionsbranch: `main`
- aktuelle öffentliche kostenlose Beta: `https://dealfaz.dealfaz-social.workers.dev/`
- sichtbare Marke seit 28.08.2026: `DINAVO`; Repository- und Hostnamen bleiben bis zum koordinierten technischen Cutover als Legacy-Bezeichnungen bestehen
- statisches Frontend ohne erforderlichen Build-Schritt
- keine geheimen Frontend-Umgebungsvariablen für den Kernbetrieb nötig
- `MONETIZATION_DISABLED` bleibt aktiv

## Öffentlich benötigte Dateien

- `index.html`
- `app.js`
- `analytics.js`
- `worker.js` als nicht öffentliches Laufzeitmodul für `/analytics-count`
- `style.css`
- `manifest.webmanifest`
- `icon.svg`
- `social-card.png` als primäres Social-Preview-Bild
- `social-card.svg` darf als lokales Quell-/Fallbackmotiv bestehen bleiben, wird aber nicht mehr als primäres OG-Bild verwendet
- `robots.txt`
- `sitemap.xml`
- `_headers`
- `reselling-rechner/`
- `maximaler-einkaufspreis/`
- `roi-reselling/`
- `sell-through/`
- `impressum/`
- `datenschutz/`
- `nutzungsbedingungen/`
- IndexNow-Verifikationsdatei

## Security

Live Health prüft auf dem aktiven Cloudflare-Host unter anderem:

- Content-Security-Policy
- X-Content-Type-Options: nosniff
- Referrer-Policy
- X-Frame-Options: DENY
- Strict-Transport-Security
- Kernassets und SEO-Seiten
- Monetarisierungs-/Share-/CSV-Sicherheitsregeln

Die statische `_headers`-Datei bleibt zusätzlich als portable Hosting-Konfiguration für kompatible Fallback-Hosts erhalten.

Der Browser sendet den leeren Seitenaufruf-Zählimpuls nur auf dem Produktionshost an `/analytics-count`. Der Cloudflare Worker verarbeitet diese Route vor statischen Assets, entfernt die Merkmale des ursprünglichen Requests und sendet nur ein anonymes Ereignis mit neuer Einmal-Kennung an PostHog EU. `worker.js` bleibt über `.assetsignore` vom öffentlichen Assetabruf ausgeschlossen.

## Aktueller Cutover ist abgeschlossen

Für den kostenlosen Beta-Betrieb sind gemeinsam auf die Cloudflare-Produktion ausgerichtet:

- Canonical
- OpenGraph-URL
- PNG-Social-Card-URL
- robots.txt / Sitemap
- SEO-Seiten
- Launch-Kit und Release-Dokumentation
- Live-Health-Checks
- Supabase-Legacy-Redirect `dealfaz-launch` Version 38

Alte Supabase-Funktionslinks sind aus den öffentlichen HTML-Seiten entfernt. Alte externe Links, die noch außerhalb des Repositories existieren, werden soweit vorgesehen auf die Cloudflare-Produktion weitergeleitet.

## Spätere finale Domain / Route

Vor einem späteren geschäftskritischen oder monetarisierten Dauerbetrieb bleibt ein weiterer Hosting-Punkt offen: Custom Domain/Route bzw. finale Produktionsdomain festlegen. Dafür gilt wieder ein gemeinsamer Cutover statt einzelner manueller Links.

Vor dem Umschalten:

1. Root, alle vier Wissensseiten und die drei rechtlichen Seiten auf dem Zielhost mit HTTP 200 prüfen.
2. JS/CSS/Manifest/Icon/Social-Card/IndexNow prüfen.
3. Security-Header prüfen.
4. LocalStorage-Funktionen praktisch testen.
5. Datenschutzhinweise an den tatsächlichen Host anpassen.
6. Canonical/OG/Sitemap/robots.txt/IndexNow gemeinsam umstellen.
7. PartnerNet-Webseite nur beim tatsächlichen kommerziellen Start passend aktualisieren.
8. Quality, Live Health und Commercialization Guards erneut grün bekommen.

Eine erfolgreiche Hosting-Migration allein hebt den Monetarisierungs-Lock nicht auf. Amazon, eBay-Partnerlinks und der geschäftliche Start bleiben ihre eigenen gesperrten Gates.
