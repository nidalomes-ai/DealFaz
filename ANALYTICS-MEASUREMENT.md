# DINAVO – Cloudflare Web Analytics

Stand: 07.09.2026

## Status

Cloudflare Web Analytics ist technisch und datenschutzseitig vorbereitet, aber ohne gültigen Beacon-Token automatisch deaktiviert. In `analytics.js` ist `CLOUDFLARE_TOKEN` deshalb zunächst leer. Solange das so bleibt, wird kein externes Analyseskript geladen, keine Einwilligungsabfrage angezeigt und keine Reichweitenmessung durchgeführt.

## Sichere Aktivierung

1. In Cloudflare unter Web Analytics die aktuelle DINAVO-Site öffnen oder anlegen.
2. Unter „Manage Site“ zwingend **Enable with JS Snippet installation** wählen. Die automatische Einrichtung beziehungsweise One-Click-Injektion darf nicht aktiv sein, weil sie den Beacon vor der lokalen Einwilligungsprüfung einfügen könnte.
3. Den öffentlichen Token aus „Manage Site“ kopieren.
4. Ausschließlich den leeren Wert von `CLOUDFLARE_TOKEN` in `analytics.js` ersetzen. Den von Cloudflare angezeigten kompletten `<script>`-Block nicht zusätzlich in HTML einfügen.
5. Tests ausführen und den Stand bewusst veröffentlichen.
6. Im Browser kontrollieren: vor Einwilligung keine Anfrage an `static.cloudflareinsights.com`; nach Ablehnung ebenfalls keine Anfrage; erst nach Einwilligung Beacon und Messanfrage.

Die Seite lädt immer nur den lokalen Consent-Controller. Der externe Cloudflare-Beacon wird dynamisch und ausschließlich nach der gespeicherten Auswahl `granted` geladen. Ablehnen lässt den Rechner vollständig nutzbar. Ein späterer Widerruf setzt die Auswahl auf `denied` und lädt die Seite neu, falls der Beacon bereits aktiv war.

Die Hosting-Antwort setzt zusätzlich `Cache-Control: public, max-age=0, must-revalidate, no-transform`. `no-transform` verhindert bei Cloudflare-proxied HTML die automatische Beacon-Injektion als zweite technische Schutzschicht. Die Dashboard-Einstellung muss trotzdem im manuellen Modus bleiben und wird nach jedem Hostingwechsel erneut kontrolliert.

## Datenminimierung

- keine Deal-Bezeichnungen, Preise, Watchlists oder Rechenergebnisse als eigene Analytics-Ereignisse
- keine E-Mail-Adressen, Bank-, Steuer- oder Formulardaten
- kein PostHog, Google Analytics, Supabase-Pixel oder Affiliate-Tracking
- keine direkte Beacon-Einbindung im HTML
- Content Security Policy erlaubt nur den offiziellen Cloudflare-Skript- und Messendpunkt

Cloudflare beschreibt Web Analytics als cookielos und datensparsam. DINAVO stützt sich trotzdem nicht allein auf diese Anbieterbeschreibung, sondern lädt die optionale Messung erst nach ausdrücklicher Einwilligung. Die Datenschutzerklärung beschreibt Zweck, Anbieter, technische Endpunkte, Rechtsgrundlage und Widerruf bereits passend zur vorbereiteten Integration.

Aus Seitenaufrufen oder aggregierten Messwerten dürfen keine eindeutigen Menschen oder garantierten Besucherzahlen abgeleitet werden.
