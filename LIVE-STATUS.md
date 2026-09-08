# DINAVO – aktueller Freigabestatus

Stand: 08.09.2026

## Kurzentscheidung

Der lokale Release-Kandidat ist technisch für die kostenlose, nicht monetarisierte Beta vorbereitet. Die öffentliche Cloudflare-Version ist noch nicht auf diesem Stand. Die alte Firebase-Seite muss mit der vorbereiteten 301-Weiterleitung separat stillgelegt werden.

## Lokal vorbereitet – 🟢

- Rechner, Watchlist, Import/Export, Vergleich, Ergebnis-Historie und persönliche Lernfaktoren
- Datenschutztext passend zu Cloudflare, lokaler Speicherung, Dateien, Zwischenablage, Teilen, Gmail und externen Marktplatzsuchen
- PWA-Icons in 180, 192 und 512 Pixel
- Content Security Policy ohne `unsafe-inline`
- interne Dokumente und Projektdateien durch `.assetsignore` aus dem Cloudflare-Assetpaket ausgeschlossen
- eBay-Gewerbe-Richtwert für den Demo-Sneaker auf 12 % plus 0,45 € aktualisiert
- Affiliate-Monetarisierung weiterhin durch `MONETIZATION_DISABLED` gesperrt
- Cloudflare Web Analytics vollständig deaktiviert; ohne gültigen Token werden weder Controller, Einwilligungsdialog noch Analytics-Datenschutzabschnitt veröffentlicht

## Öffentlich noch offen – 🔴 BIS ZUR VERÖFFENTLICHUNG

- Cloudflare liefert noch die frühere Datenschutzfassung aus.
- Die referenzierten PNG-App-Icons sind dort noch nicht vorhanden.
- Die frühere Firebase-/DEALFAZ-Seite ist erreichbar, indexierbar und lädt noch PostHog.

Für Firebase ist im Repository eine separate Hosting-Konfiguration vorbereitet: Sie veröffentlicht nicht erneut die alte Anwendung, sondern leitet sämtliche Aufrufe dauerhaft auf die aktuelle DINAVO-Adresse weiter. Diese Stilllegung erfordert einen eigenen Firebase-Deploy mit Zugriff auf das bisherige Projekt.

## Spätere Geschäfts-Gates – 🔒

- Gewerbebeginn und erforderliche Gewerbeanmeldung vor dauerhaftem geschäftlichem Betrieb klären.
- Markenähnlichkeitsprüfung vor Markenanmeldung, größerem Werbebudget oder schwer umkehrbaren Investitionen abschließen.
- Partnerkonten, Steuern, Kennzeichnung und Tracking-Datenschutz vor Aktivierung von Affiliate-Links erneut prüfen.
- Plattformgebühren bleiben editierbare Richtwerte; Nutzer müssen die konkrete Kategorie und den tatsächlichen Tarif kontrollieren.

## Freigabe

- Lokaler technischer Release-Kandidat: 🟢
- Öffentlicher DINAVO-Stand: 🔴 Update ausstehend
- Alte Firebase-Seite: 🔴 Stilllegung ausstehend
- Monetarisierung: 🔒 deaktiviert
- Aktuelle kostenlose Beta-Gates: 🟢 ohne gelbe Punkte

Diese interne Prüfung ist keine anwaltliche oder steuerliche Einzelfallberatung.
