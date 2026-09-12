# DINAVO – anonyme Seitenaufrufzählung

Stand: 12.09.2026
Status: aktiviert, ohne Einwilligungsabfrage

DINAVO zählt beim Laden der Produktions-Startseite einen Seitenaufruf. Der Browser sendet dafür einen leeren POST an `/analytics-count` auf derselben DINAVO-Adresse. Es werden keine Cookies oder sonstigen Analytics-Werte im Browser gespeichert und keine dort gespeicherten Informationen ausgelesen.

## Technischer Datenfluss

1. `analytics.js` sendet einen leeren Same-Origin-Aufruf ohne Body, Referrer oder Zugangsdaten.
2. Der Cloudflare Worker akzeptiert nur POST-Aufrufe vom eigenen Origin.
3. Der Worker leitet weder Besucher-IP noch Request-Header an PostHog weiter.
4. Der Worker erzeugt eine neue Einmal-Kennung und sendet nur `$pageview`, den festen Startseitenpfad, `$process_person_profile: false` und `$geoip_disable: true` an PostHog EU.

Dadurch sind weder eindeutige Besucher noch Sitzungen oder wiederkehrende Personen messbar. Die Zahl beschreibt ausschließlich Seitenaufrufe; ein Neuladen zählt erneut.

## Datenminimierung

- keine Einwilligungsabfrage und keine Analytics-Auswahl im Browser
- keine Deal-Bezeichnungen, Preise, Watchlists, Rechenergebnisse, URL-Parameter oder Fragmente
- keine Besucher-IP, Browserangaben oder Referrer bei PostHog
- keine Personenprofile, Cookies, dauerhaften Kennungen, Autocapture, Klickereignisse, Heatmaps oder Sitzungswiedergaben
- kein Google Analytics, Supabase-Pixel oder Affiliate-Tracking
- Browser-CSP erlaubt nur Same-Origin-Verbindungen; nur der Server kontaktiert PostHog EU

## Dokumentierte Interessenabwägung

Zweck ist ausschließlich die grundlegende Beurteilung, ob die kostenlose Beta tatsächlich aufgerufen wird. Dafür ist die reine Gesamtzahl der Seitenaufrufe geeignet. Eine weniger eingriffsintensive, gleich wirksame Messung ist nicht ersichtlich. Gegenläufige Interessen werden durch den leeren First-Party-Aufruf, die fehlende Wiedererkennung und die serverseitige Entfernung sämtlicher Besuchermerkmale stark begrenzt. Eine Erweiterung um Besucher-, Geräte-, Herkunfts- oder Verhaltensanalysen ist von dieser Bewertung nicht umfasst und erfordert eine neue technische und rechtliche Prüfung.

## Prüfung

- `node scripts/analytics-regression.mjs`
- `node scripts/analytics-worker-regression.mjs`
- `node scripts/analytics-release-gate.mjs`

Die Tests sperren Releases mit Dialogresten, Browserzugriffen auf PostHog, gespeicherten Analytics-Kennungen, weitergeleiteten Besuchermerkmalen oder widersprüchlichen Datenschutzhinweisen.
