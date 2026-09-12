# DINAVO – datensparsame Besucherzählung

Stand: 12.09.2026
Status: aktiviert

DINAVO zählt nach ausdrücklicher Zustimmung genau einen Seitenaufruf über das verbundene PostHog-Projekt in der EU-Cloud. Ohne Zustimmung und nach Ablehnung verlässt kein Analytics-Ereignis den Browser. Geteilte Deal-Links mit `#deal=` sind vollständig ausgeschlossen.

## Technische Begrenzung

- direkter POST ausschließlich an `https://eu.i.posthog.com/i/v0/e/`; kein externes Analytics-Skript
- nur `$pageview`, bereinigter Origin/Seitenpfad und eine pro Aufruf neu erzeugte Kennung
- `$process_person_profile: false`; keine dauerhafte Besucherkennung und keine Personenprofile
- keine Deal-Bezeichnungen, Preise, Watchlists, Rechenergebnisse, Klicks oder Formulardaten
- keine Sitzungswiedergabe, Heatmaps, Performance-, Werbe- oder Affiliate-Ereignisse
- `credentials: omit` und `referrerPolicy: no-referrer`
- kein Google Analytics, Supabase-Pixel oder Affiliate-Tracking

Die Consent-Auswahl wird lokal unter `dealfaz:v1:analytics-consent` gespeichert. „Datenschutz-Einstellungen“ öffnet die Auswahl erneut. Ablehnen oder ein späterer Widerruf lässt alle Rechnerfunktionen verfügbar. Aus Seitenaufrufen dürfen keine eindeutigen Menschen oder garantierten Besucherzahlen abgeleitet werden.

## Prüfung

`node scripts/analytics-regression.mjs` prüft Zustimmung, Ablehnung, Widerruf, Datenminimierung und den Ausschluss geteilter Deals. `node scripts/analytics-release-gate.mjs` blockiert Releases ohne passende Datenschutzhinweise, Consent-Oberfläche oder EU-CSP.
