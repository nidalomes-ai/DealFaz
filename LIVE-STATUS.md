# DINAVO – aktueller Freigabestatus

Stand: 09.09.2026

## Kurzentscheidung

Die überarbeitete kostenlose, nicht monetarisierte Beta ist veröffentlicht. GitHub `main` und die öffentliche Vercel-Seite enthalten denselben geprüften Stand. Beide verbundenen Vercel-Bereitstellungen meldeten Erfolg; der Live-Ablauf wurde anschließend vollständig durchgespielt.

## Lokal vorbereitet – 🟢

- Rechner, offene Deals, Import/Export, Vergleich, Ergebnis-Historie und persönliche Lernfaktoren
- sichtbarer Ergebnis-Schritt direkt nach der Berechnung
- Backup-Erklärung beim ersten Speichern und Erinnerung nach jeweils fünf weiteren Deals
- DE/AT/CH-Schalter mit gemeinsamer Währungs- und Plattformumschaltung
- Gebühren und Versand bleiben ohne geprüfte Nutzereingabe leer
- Eingabe-Score und Qualität der Angaben klar als Auswertung eigener Eingaben beschriftet
- Datenschutztext passend zu Cloudflare, lokaler Speicherung, Dateien, Zwischenablage, Teilen, Gmail und externen Marktplatzsuchen
- PWA-Icons in 180, 192 und 512 Pixel
- Content Security Policy ohne `unsafe-inline`
- interne Dokumente und Projektdateien durch `.assetsignore` aus dem Cloudflare-Assetpaket ausgeschlossen
- feste Kostenwerte nur noch im ausdrücklich beschrifteten Beispiel-Deal; keine automatische Übernahme in echte Deals
- Affiliate-Monetarisierung weiterhin durch `MONETIZATION_DISABLED` gesperrt
- Cloudflare Web Analytics vollständig deaktiviert; ohne gültigen Token werden weder Controller, Einwilligungsdialog noch Analytics-Datenschutzabschnitt veröffentlicht

## Öffentlicher Release – 🟢

- geprüfter Funktions-Commit: `fa80c1137d973f04c1f19c1179b00c67921b063b`
- verbundene Vercel-Bereitstellungen: erfolgreich
- Analytics, Consent-Oberfläche und Analytics-Datenschutzabschnitt: gemeinsam deaktiviert
- öffentliche App-Icons in 180, 192 und 512 Pixeln enthalten
- Rechner, Beispiel, Speichern, Backup-Hinweis, Ergebnis-Abgleich, Länderwechsel und Wissensseite live geprüft

Für Firebase ist im Repository eine separate Hosting-Konfiguration vorbereitet. Der alte Host wird nicht mehr als DINAVO-Produktionsadresse beworben; seine spätere Stilllegung bleibt eine Aufräummaßnahme außerhalb des aktuellen Beta-Releases.

## Spätere Geschäfts-Gates – 🔒

- Gewerbebeginn und erforderliche Gewerbeanmeldung vor dauerhaftem geschäftlichem Betrieb klären.
- Markenähnlichkeitsprüfung vor Markenanmeldung, größerem Werbebudget oder schwer umkehrbaren Investitionen abschließen.
- Partnerkonten, Steuern, Kennzeichnung und Tracking-Datenschutz vor Aktivierung von Affiliate-Links erneut prüfen.
- Plattformgebühren und Versand werden nicht automatisch vorbelegt; Nutzer müssen die konkrete Kategorie und den tatsächlichen Tarif auf der verlinkten Originalseite kontrollieren.

## Adresse

Die gewünschte Kurzadresse `dinavo.vercel.app` ist nicht verfügbar. Automatisch erzeugte DINAVO-Ersatzprojekte waren zugriffsgeschützt und wurden deshalb nicht als öffentliche Adresse beworben. Bis eine freie öffentliche DINAVO-Adresse oder eigene Domain eingerichtet werden kann, bleibt `https://dealfaz.vercel.app/` die stabile, getestete Hauptadresse. So entstehen keine toten Links.

## Freigabe

- Lokaler technischer Release-Kandidat: 🟢
- Öffentlicher DINAVO-Release: 🟢 GitHub und Vercel erfolgreich
- Alte Firebase-Seite: ⏸ nicht beworbener Legacy-Host; Stilllegung vorbereitet
- Monetarisierung: 🔒 deaktiviert
- Aktuelle kostenlose Beta-Gates: 🟢 ohne gelbe Punkte

Diese interne Prüfung ist keine anwaltliche oder steuerliche Einzelfallberatung.
