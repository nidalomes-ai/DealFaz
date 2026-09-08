# DINAVO – Cloudflare Web Analytics

Stand: 08.09.2026

## Status

Cloudflare Web Analytics und Datenschutz-Ziffer 5 sind als gemeinsames optionales Release vorbereitet. In `analytics.js` ist `CLOUDFLARE_TOKEN` bis zur Übergabe der echten öffentlichen Site-Kennung leer. Solange das so bleibt, veröffentlicht die Beta weder den Analytics-Controller noch eine Einwilligungsabfrage oder einen Analytics-Abschnitt in den Datenschutzhinweisen. Der Release-Check `node scripts/analytics-release-gate.mjs` erlaubt nur zwei widerspruchsfreie Zustände: vollständig deaktiviert oder mit gültigem Token vollständig consent-first aktiviert.

## Sichere Aktivierung

1. In Cloudflare unter Web Analytics die aktuelle DINAVO-Site öffnen oder anlegen.
2. Unter „Manage Site“ zwingend **Enable with JS Snippet installation** wählen. Die automatische Einrichtung beziehungsweise One-Click-Injektion darf nicht aktiv sein, weil sie den Beacon vor der lokalen Einwilligungsprüfung einfügen könnte.
3. Den öffentlichen Token aus „Manage Site“ kopieren.
4. Ausschließlich den leeren Wert von `CLOUDFLARE_TOKEN` in `analytics.js` ersetzen. Den von Cloudflare angezeigten kompletten `<script>`-Block nicht zusätzlich in HTML einfügen.
5. Consent-Oberfläche und `/analytics.js` auf der Startseite sowie den vorbereiteten Analytics-Abschnitt als Datenschutz-Ziffer 5 im selben Commit aktivieren.
6. `node scripts/analytics-release-gate.mjs` ausführen. Erst veröffentlichen, wenn dieser Check Datenschutz-Ziffer 5 und den gültigen Token gemeinsam bestätigt.
7. Im Browser kontrollieren: vor Einwilligung keine Anfrage an `static.cloudflareinsights.com`; nach Ablehnung ebenfalls keine Anfrage; erst nach Einwilligung Beacon und Messanfrage.

Im aktuell veröffentlichbaren Zustand wird weder der lokale Consent-Controller noch der externe Cloudflare-Beacon geladen. Nach der späteren gemeinsamen Aktivierung wird der externe Beacon dynamisch und ausschließlich nach der gespeicherten Auswahl `granted` geladen. Ablehnen lässt den Rechner vollständig nutzbar. Ein späterer Widerruf setzt die Auswahl auf `denied` und lädt die Seite neu, falls der Beacon bereits aktiv war.

Geteilte Deal-Links mit `#deal=` bleiben für ihren gesamten Dokumentaufruf von der Reichweitenmessung ausgeschlossen. So kann die vom RUM-Beacon verarbeitete Seitenaufruf-URL keine Artikelbezeichnung, Preise oder sonstigen Deal-Werte aus dem Fragment übertragen.

Die Hosting-Antwort setzt zusätzlich `Cache-Control: public, max-age=0, must-revalidate, no-transform`. `no-transform` verhindert bei Cloudflare-proxied HTML die automatische Beacon-Injektion als zweite technische Schutzschicht. Die Dashboard-Einstellung muss trotzdem im manuellen Modus bleiben und wird nach jedem Hostingwechsel erneut kontrolliert.

## Datenminimierung

- keine Deal-Bezeichnungen, Preise, Watchlists oder Rechenergebnisse als eigene Analytics-Ereignisse
- keine E-Mail-Adressen, Bank-, Steuer- oder Formulardaten
- kein PostHog, Google Analytics, Supabase-Pixel oder Affiliate-Tracking
- keine direkte Beacon-Einbindung im HTML
- Content Security Policy erlaubt nur den offiziellen Cloudflare-Skript- und Messendpunkt

Cloudflare beschreibt Web Analytics als cookielos und datensparsam. Bei einer späteren Aktivierung stützt sich DINAVO trotzdem nicht allein auf diese Anbieterbeschreibung, sondern lädt die optionale Messung erst nach ausdrücklicher Einwilligung. Der vorbereitete Datenschutzabschnitt beschreibt dann Zweck, Anbieter, technische Endpunkte, Rechtsgrundlage und Widerruf passend zur Integration.

Aus Seitenaufrufen oder aggregierten Messwerten dürfen keine eindeutigen Menschen oder garantierten Besucherzahlen abgeleitet werden.
