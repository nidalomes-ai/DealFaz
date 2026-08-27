# DEALFAZ – Release-Gate

Stand: 27.08.2026

Diese Checkliste trennt den kostenlosen Pre-Gewerbe-/Beta-Release vom späteren Monetarisierungsrelease. `[x]` bedeutet für den aktuellen Beta-Scope nachgewiesen. Schritte, die erst nach der Gewerbeanmeldung mit realen Betriebs-/Partnerdaten möglich sind, stehen als `⏸ nach Gewerbe` und zählen nicht als aktueller gelber Punkt.

## 1. Funktion – 🟢

- [x] DealScore-Regressionstests erfolgreich
- [x] Verlustfall kann nicht als `KAUFEN` enden
- [x] schwache Evidenz kann ein starkes Rechenergebnis zu `DATEN PRÜFEN` begrenzen
- [x] Maximaler Einkaufspreis bleibt im getesteten gültigen Fall nicht negativ
- [x] Watchlist und persönliche Regeln funktionieren lokal ohne Nutzerkonto
- [x] Teilen/Kopieren legt Dealwerte im URL-Fragment statt im Server-Querystring ab

## 2. Daten & Marktquellen – 🟢

- [x] Rechner verwendet Nutzereingaben statt erfundener Live-Marktwerte
- [x] keine unerlaubten Scraper oder Login-/Paywall-Umgehungen im öffentlichen Kernablauf
- [x] aktive Angebote und Verkaufsbelege werden fachlich getrennt behandelt
- [x] externe Plattformen werden als Originalquellen bezeichnet
- [x] keine Partnerschaft/Zertifizierung wird behauptet, wenn sie nicht tatsächlich aktiv ist

## 3. Recht & Datenschutz – 🟢

- [x] Anbieterkennzeichnung/Impressum öffentlich vorhanden
- [x] Datenschutzhinweise beschreiben den aktuellen Cloudflare-/Local-Storage-Betrieb
- [x] keine Gewinn-, Verkaufs-, Preis- oder Marktentwicklungsgarantie
- [x] Affiliate-/Partnerlinks bleiben gesperrt, solange `MONETIZATION_DISABLED` aktiv ist
- [x] Deal-/Watchlist-/Regeldaten werden nicht unnötig zentral gespeichert
- [x] Verbraucherstreitbeilegungs-Hinweis sichtbar

## 4. Technik & Sicherheit – 🟢

- [x] öffentliche Hauptseite liefert HTTP 200 und `text/html`
- [x] HTTPS aktiv
- [x] Secret-Muster-Prüfung im CI
- [x] `X-Content-Type-Options: nosniff`
- [x] sichere Referrer-Policy
- [x] Kamera-/Mikrofon-/Standortrechte in der Header-Konfiguration deaktiviert
- [x] Clickjacking-Schutz gesetzt
- [x] Live Health erfolgreich
- [x] PostHog Error Tracking zuletzt ohne aktive Fehler im 7-Tage-Fenster

## 5. SEO & Teilen – 🟢

- [x] Canonical und `og:url` zeigen auf die aktuelle Cloudflare-Produktion
- [x] Social-Preview als 1200×630 PNG vorhanden
- [x] `og:image`/Twitter-Metadaten auf PNG umgestellt
- [x] absolute HTTPS-URL, Bildtyp, Größe und Large-Image-Twitter-Card gesetzt
- [x] `robots.txt` verweist auf die richtige Sitemap
- [x] Sitemap enthält Hauptseite und vier Wissensseiten
- [x] Manifest startet auf der Root-URL
- [x] keine alten Supabase-Funktionslinks in öffentlichen HTML-Seiten
- [x] Quality schützt gegen Rückfall auf alte Vercel-/GitHub-Pages-/Supabase-Public-Links
- [x] IndexNow technisch vorbereitet und bereits erfolgreich angestoßen

Tatsächliche Suchmaschinenindexierung und Social-Preview-Caches sind externe Nachlaufkontrollen und kein aktueller gelber Beta-Punkt.

## 6. Mobile & UX – 🟢

- [x] 320 px, 375 px und 390 px praktisch geprüft
- [x] kein horizontales Scrollen im Kernlayout
- [x] wichtigste Entscheidung auf kleinem Bildschirm sichtbar
- [x] zentrale Touch-Ziele praktisch geprüft; kleinste gemessene Höhe 46 px
- [x] zentrale Eingabefelder vollständig sichtbar
- [x] Mobile-CTA sichtbar
- [x] Grenzwerte für zentrale Zahlenfelder vorhanden
- [x] externe Marktlinks verwenden `noopener`/`noreferrer`

Ein physischer iPhone-Smoke-Test bleibt optionale Zusatzkontrolle, kein Beta-Blocker.

## 7. Social / Launch – 🟢

- [x] öffentlicher Hauptlink funktioniert
- [x] Launch-Kit zeigt auf die aktuelle Cloudflare-Version
- [x] Social-Post-Ziel-URL und Preview-Metadaten technisch vorbereitet
- [x] Metricool-Schutzregel: maximal 20 Veröffentlichungen pro Monat
- [x] bei erreichtem Limit keine zusätzlichen Posts
- [x] alte Social-Ziele soweit möglich korrigiert
- [x] nicht editierbarer Legacy-Link wird serverseitig auf Cloudflare weitergeleitet
- [x] technische Selbsttests werden nicht als echte Nutzer ausgegeben
- [x] Bots/Testaufrufe werden nicht als echte Reichweite kommuniziert

## 8. Amazon – 🟢 VORBEREITET

- [x] PartnerNet-Teilnahmebestätigung vorhanden
- [x] neutrale Amazon-Links ohne Affiliate-Tag aktiv
- [x] Partner-/Werbekennzeichnung für spätere Aktivierung dokumentiert
- [x] aktuelles Amazon-Prüfverfahren dokumentiert
- [x] `MONETIZATION_DISABLED` verhindert vorzeitige Provisionen

`⏸ nach Gewerbe`: Website-Zuordnung kontrollieren, Affiliate-Tag aktivieren, Werbekennzeichnung zuschalten, spätere Amazon-Prüfung durchlaufen.

## 9. eBay – 🟢 VORBEREITET

- [x] EPN-Bewerbungseingang dokumentiert
- [x] neutrale eBay-Originalquelle ohne Partnertracking aktiv
- [x] keine bestätigte Partnerschaft behauptet
- [x] EPN-Aktivierungsregeln dokumentiert

`⏸ nach Gewerbe`: ausdrückliche EPN-Freigabe nachweisen und erst danach EPN-Partnerlinks aktivieren.

## 10. Steuer / ELSTER – 🟢 VORBEREITET

- [x] Formulartyp identifiziert
- [x] Tätigkeitsbeschreibung vorbereitet
- [x] EU-B2B-/Reverse-Charge-/USt-IdNr.-/ZM-Grundlogik dokumentiert
- [x] keine fiktiven Angaben eingetragen

`⏸ nach Gewerbe`: reale Betriebsdaten einsetzen, steuerliche Wahl bewusst treffen und Fragebogen fristgerecht übermitteln.

## 11. Marke / Name – 🟢 PRE-GEWERBE-RISIKOSTEUERUNG

- [x] DPMA-Suchstrategie dokumentiert
- [x] Varianten und ähnliche Zeichen dokumentiert
- [x] `DEALFA` / EUTM 018240890 als Prüftreffer festgehalten
- [x] `DEALFAST` als weiterer Ähnlichkeitsprüfpunkt festgehalten
- [x] keine Behauptung `Marke frei` / `rechtlich abgesichert`
- [x] keine irreversible Markeninvestition vor finaler Prüfung

`⏸ nach Gewerbe bzw. vor größerer Markeninvestition`: amtliche DPMA/EUIPO/WIPO-Kollisionsprüfung finalisieren.

## 12. Hosting – 🟢

- [x] Cloudflare Workers als aktueller Hauptbetrieb festgelegt
- [x] Canonical/Sitemap/robots/Social-Metadaten darauf ausgerichtet
- [x] kostenlose Fallbacks dokumentiert

`⏸ nach Gewerbe`: Custom Domain/Route nur bei bewusstem kommerziellem Cutover entscheiden.

## 13. Gewerbe – 🟡 EINZIGER AKTUELLER GELBER PUNKT

- [x] zuständige Stelle identifiziert
- [x] Verfahren und Tätigkeitsbeschreibung vorbereitet
- [ ] Gewerbeanmeldung mit tatsächlichem Betriebsbeginn und realen Betreiberangaben absenden

## 14. Monetarisierungsrelease – ⏸ NACH GEWERBE

Bis zum Gewerbe bleibt `MONETIZATION_DISABLED` aktiv. Nach Gewerbe werden Steuer, Amazon/eBay, Kennzeichnung, Datenschutz, Markenfinalisierung und gegebenenfalls Domain-Cutover anhand der dann realen Situation ausgeführt. Anschließend müssen Quality, Live Health und Commercialization Guards erneut grün sein; der Monetarisierungs-Lock wird erst zuletzt bewusst entfernt.

## Aktueller Freigabestatus

**Kostenlose öffentliche Beta / Pre-Gewerbe: 🟢 100 %.**

**Einziger aktueller gelber Punkt: 🟡 Gewerbeanmeldung.**

**Alle übrigen kommerziellen Ausführungsschritte: ⏸ nach Gewerbe, nicht als bereits erteilte externe Freigaben dargestellt.**
