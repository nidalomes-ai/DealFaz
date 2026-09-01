# DINAVO – verbindliche Launch- und Cutover-Checkliste

Stand: 29.08.2026

**Status: ⏸ PAUSIERTER CUSTOM-DOMAIN-/MARKEN-CUTOVER.** Die offenen Punkte sind Zukunftsschritte und keine weiteren gelben Gates der kostenlosen Beta. Aktiv gelb bleibt ausschließlich die Klärung von Gewerbebeginn/Gewerbeanmeldung.

## 1. Sofort sichern

- [ ] `dinavo.de` beim Registrar erneut live prüfen und registrieren
- [ ] verfügbare Haupt- und Ausweichdomain beim Registrar live prüfen; `dinavo.com` ist bereits belegt
- [ ] automatische Verlängerung und Zwei-Faktor-Authentifizierung aktivieren
- [ ] Domaininhaber und Rechnungsdaten korrekt hinterlegen
- [ ] `@dinavo` bei tatsächlich verwendeten Netzwerken sichern; sonst `@dinavoapp`

Eine RDAP-Abfrage ohne Datensatz ist keine Reservierung. Erst die erfolgreiche Registrierung zählt.

## 2. Marke anmelden

- [ ] Angaben aus `TRADEMARK-FILING-PACK.md` endkontrollieren
- [ ] DPMA-Suche am Einreichungstag wiederholen
- [ ] DINAVO als Individual-Wortmarke elektronisch einreichen
- [ ] amtliche Gebühr fristgerecht bezahlen
- [ ] Aktenzeichen, PDF-Zusammenfassung und Zahlungsnachweis archivieren
- [ ] `®` erst nach tatsächlicher Eintragung und nur passend zum Schutzgebiet verwenden

## 3. Domain und Hosting umstellen

- [ ] Domains in Cloudflare hinzufügen
- [ ] DNSSEC und SSL/TLS aktivieren
- [ ] Produktionsdomain festlegen, empfohlen `https://dinavo.de`
- [ ] nur tatsächlich gesicherte Ausweichdomains dauerhaft auf die Produktionsdomain weiterleiten
- [ ] bisherige Worker-Adresse dauerhaft auf die Produktionsdomain weiterleiten
- [ ] Canonical-, OpenGraph-, Twitter- und Schema-URLs ersetzen
- [ ] `sitemap.xml`, `robots.txt`, IndexNow und Healthchecks ersetzen
- [ ] Weiterleitungen mit und ohne `www` sowie alle Unterseiten testen

## 4. Rechtliche Angaben

- [ ] Impressum mit endgültiger DINAVO-Kontaktadresse kontrollieren
- [ ] DINAVO-Domain und tatsächlichen Host im Datenschutztext eintragen
- [ ] Gewerbe-/Unternehmensstatus nur mit realen Angaben ergänzen
- [ ] keine Markenregistrierung behaupten, bevor sie besteht
- [ ] keine Gewinn-, Preis-, Nachfrage- oder Verkaufsgarantie formulieren

## 5. Partnerprogramme und Monetarisierung

- [ ] eBay- und Amazon-Konten erst nach Gewerbe-/Steuergate auf DINAVO/Domain aktualisieren
- [ ] Affiliate-Links erst nach tatsächlicher Freigabe und korrekter Website-Zuordnung aktivieren
- [ ] jeden vergüteten Link klar als Werbung/Partnerlink kennzeichnen
- [ ] Datenschutz an reale Tracking- und Partnerdatenflüsse anpassen
- [ ] `MONETIZATION_DISABLED` bis zur vollständigen Freigabe beibehalten

## 6. Technik und Qualität

- [x] bestehende lokale Daten aus älteren Mesiqo-, ZOVYQO-, PEVRU- und DealFaz-Schlüsseln werden in die stabilen `dealfaz:v1:*`-Schlüssel übernommen
- [x] Rechner, Watchlist, Import/Export, Teilen und mobile Navigation strukturell und automatisiert testen
- [ ] PWA-Installation mit DINAVO-Name und D-Icon testen
- [ ] Social-Card auf LinkedIn/Facebook/WhatsApp kontrollieren
- [x] Security Header, CSP, Datenschutz und Monetarisierungs-Sperren prüfen
- [ ] alte URLs mindestens zwölf Monate überwachen

## Go/No-Go

Der öffentliche Domain-Cutover ist erst **Go**, wenn die gewählte Hauptdomain gesichert, DNS/SSL grün, die Rechtstexte auf die reale Domain abgestimmt und sämtliche automatisierten Prüfungen erfolgreich sind. Die kostenlose Beta darf technisch unter DINAVO laufen; Markenanmeldung und Domainregistrierung bleiben davon getrennte rechtsverbindliche Schritte.
