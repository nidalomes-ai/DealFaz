# DINAVO – Release-Gate

Stand: 01.09.2026

Diese Checkliste trennt **technische Beta-Bereitschaft**, **rechtlichen Geschäftsstart** und **spätere Monetarisierung**. `[x]` bedeutet technisch oder anhand des aktuellen Datenflusses geprüft; es ist keine pauschale anwaltliche Rechtsfreigabe.

## 1. Funktion – 🟢

- [x] DealScore-Regressionstests erfolgreich
- [x] Verlustfall kann nicht als `KAUFEN` enden
- [x] schwache Evidenz begrenzt positive Signale
- [x] Maximaler Einkaufspreis bleibt im getesteten gültigen Fall nicht negativ
- [x] Watchlist und persönliche Regeln lokal ohne Nutzerkonto
- [x] Gebührenprofile, Kostenaufschlüsselung und unveränderliche Schätz-Snapshots
- [x] tatsächliche Ergebnisse mit Zeitaufwand, Lernfaktoren, Stundenlohn und Jahresgewinn
- [x] vollständiger lokaler Import/Export einschließlich Regeln und Einstellungen
- [x] Migration alter DealFaz-/DINAVO-Daten in den stabilen `dealfaz:v1:*`-Schlüsseln
- [x] zentrale Konfiguration einschließlich reserviertem Lizenz-Key ohne aktive Pro-Sperre
- [x] Demo-Deal erscheint nur bei leerem Speicher, leert sich beim ersten Tippen und ist nicht speicherbar
- [x] Gewinn/ROI als Hauptkennzahlen; Lernartikel direkt an den Kennzahlen verlinkt
- [x] Teilen legt Dealwerte im URL-Fragment statt Server-Querystring ab

## 2. Daten & Marktquellen – 🟢

- [x] Nutzereingaben statt erfundener Live-Marktwerte
- [x] kein unerlaubtes Scraping/Login-/Paywall-Umgehen im öffentlichen Kernablauf
- [x] externe Plattformen als Originalquellen
- [x] keine falsche Partnerschaft/Zertifizierung

## 3. Rechtlicher Basisstand – 🟢 FÜR AKTUELLE PRODUKTARCHITEKTUR

- [x] Impressum mit Name, ladungsfähiger Anschrift und E-Mail
- [x] DSGVO-Hinweise um Zwecke, Rechtsgrundlagen, Empfänger, Speicherkriterien, Rechte und Beschwerdestelle ergänzt
- [x] Cloudflare-Hosting beschrieben
- [x] Supabase-Legacy-Weiterleitungen beschrieben
- [x] lokale Browser-Speicherung transparent erklärt
- [x] aktuelle Hauptseite lädt kein eigenes Analytics-Skript
- [x] keine Werbe-/Marketing-Cookies der aktuellen Hauptseite
- [x] keine Gewinn-, Verkaufs-, Preis- oder Nachfragegarantie
- [x] Verbraucherstreitbeilegungs-Hinweis vorhanden
- [x] Impressum, Datenschutz und Nutzungsbedingungen haben eigene öffentliche Routen; die Startseite zeigt nur den kompakten Rechts-Fußbereich
- [x] aktueller Dienst verkauft selbst keine Waren und hat keinen Checkout
- [x] keine Art.-22-Entscheidung mit rechtlicher oder vergleichbar erheblicher Wirkung behauptet

**Separates Rechtsgate:** Gewerbebeginn/Gewerbeanmeldung siehe Abschnitt 13. Markenrecht siehe Abschnitt 11.

## 4. Technik & Sicherheit – 🟢

- [x] Hauptseite HTTP 200 / HTML
- [x] HTTPS aktiv
- [x] Secret-Muster-Prüfung
- [x] `X-Content-Type-Options: nosniff`
- [x] Referrer-Policy
- [x] Kamera-/Mikrofon-/Standortrechte eingeschränkt
- [x] Clickjacking-Schutz
- [x] HSTS/CSP vorhanden
- [x] Live Health vorhanden

## 5. SEO & Teilen – 🟢

- [x] Canonical und `og:url` auf Cloudflare
- [x] 1200×630 Social-PNG
- [x] Sitemap/robots korrekt ausgerichtet
- [x] vier Wissensseiten und drei rechtliche Seiten in der Sitemap
- [x] IndexNow technisch vorbereitet/ausgeführt

Tatsächliche Indexierung und Social-Caches bleiben externe Beobachtungen.

## 6. Mobile & einfache Bedienung – 🟢

- [x] 320/375/390 px geprüft
- [x] kein horizontales Scrollen im Kernlayout
- [x] zentrale Touch-Ziele mindestens 46 px in dokumentiertem Test
- [x] große Felder/Buttons
- [x] einfache Farbpalette und einfache Designregeln dokumentiert

## 7. Social / Launch-Technik – 🟢

- [x] öffentlicher Hauptlink funktioniert
- [x] organisches, unbezahltes Beta-Kampagnenpaket mit sieben Posts und Antwortvorlagen
- [x] Feed- und Story-Motiv in veröffentlichbaren PNG-Abmessungen
- [x] generischer Teilen-Button ohne Dealwerte, UTM- oder Affiliate-Parameter
- [x] Profiltext und klare Gratis-/Datenschutzbotschaft vorbereitet
- [x] keine Bots, Massen-DMs, Gewinnversprechen oder automatischen Veröffentlichungen
- [x] erster DINAVO-Beitrag auf den konkret verbundenen Facebook- und LinkedIn-Konten veröffentlicht
- [x] weitere aktive Beiträge auf DINAVO und die saubere Cloudflare-Hauptadresse umgestellt
- [x] Launch-Ziele auf Cloudflare
- [x] Metricool-Regel: maximal 20 Veröffentlichungen pro Monat
- [x] keine zusätzlichen Posts bei erreichtem Limit
- [x] Legacy-Link-Weiterleitung vorhanden
- [x] Bots/Testaufrufe werden nicht als echte Reichweite dargestellt

## 8. Amazon – 🟢 VORBEREITET / 🔒 NICHT MONETARISIERT

- [x] neutrale Amazon-Links ohne Affiliate-Tag
- [x] spätere Kennzeichnungsregeln dokumentiert
- [x] `MONETIZATION_DISABLED` aktiv

`⏸ später`: Website-Zuordnung/Partnerstatus prüfen und erst nach Gewerbe-/Steuergate Affiliate aktivieren.

## 9. eBay – 🟢 VORBEREITET / ⏸ ACCEPTANCE AUSSTEHEND

- [x] EPN-Bewerbungseingang dokumentiert
- [x] offizielle Statusanfrage dokumentiert
- [x] neutrale eBay-Links ohne EPN-Tracking
- [x] keine bestätigte Partnerschaft behauptet

Keine EPN-Partnerlinks vor tatsächlicher Freigabe.

## 10. Steuer / ELSTER – 🟢 VORBEREITET

- [x] Formulartyp/Tätigkeitsbeschreibung vorbereitet
- [x] EU-B2B, Reverse Charge, USt-IdNr. und Zusammenfassende Meldung als Prüfpunkte dokumentiert
- [x] keine fiktiven Umsätze oder Gewinne

`⏸ nach festgelegtem Betriebsbeginn`: echte Angaben fristgerecht übermitteln.

## 11. Marke / Name – 🟢 FÜR KOSTENLOSE BETA / ⏸ NEUGATE VOR MARKENINVESTITION

- [x] Suchstrategie/Varianten dokumentiert
- [x] exakter amtlicher Registercheck für `DINAVO` ohne Treffer dokumentiert
- [x] `PETRU`-Zeichen als klangliche Ähnlichkeits-Prüfdatensätze dokumentiert
- [x] `PEVRAE` / EUTM 018739912 als Schreibvarianten-Prüfdatensatz dokumentiert
- [x] keine Behauptung `Marke frei` oder `rechtlich abgesichert`
- [x] keine große irreversible Markeninvestition vor finaler Prüfung
- [x] professionelle Ähnlichkeitsprüfung als verpflichtendes Neu-Gate vor Anmeldung oder größerem Branding-/Werbebudget dokumentiert
- [x] DINAVO als Arbeitsname für die öffentliche Beta bestätigt

Für einen technischen Beta-Test ist die vorsichtige Nutzung dokumentiert; eine absolute Markenfreigabe wird nicht behauptet.

## 12. BFSG / DSA – 🟢 AKTUELLE ARCHITEKTUR / ⏸ NEUGATE BEI FUNKTIONSERWEITERUNG

- [x] aktuell kein eigener Verbrauchervertrag/Checkout
- [x] aktuell keine Nutzerkonten, öffentlichen Inserate oder serverseitig veröffentlichten Nutzerinhalte
- [x] keine Behauptung vollständiger BFSG-Zertifizierung

Bei Checkout, kostenpflichtigen Leistungen oder gehosteten Nutzerinhalten erfolgt vor Aktivierung eine neue BFSG-/DSA-/Verbraucherrechtsprüfung.

## 13. Gewerbe – 🟡 KRITISCHES GESCHÄFTS-LAUNCH-GATE

- [x] zuständige Stelle/Verfahren vorbereitet
- [x] Tätigkeitsbeschreibung vorbereitet
- [ ] tatsächlichen Betriebsbeginn rechtlich/sachlich festlegen
- [ ] erforderliche Gewerbeanmeldung spätestens gleichzeitig mit Beginn absenden

**Wichtig:** Erster Umsatz/erste Provision ist nicht automatisch der Beginn. Gewinnerzielungsabsicht und Dauerhaftigkeit können bereits vorher zu einem Gewerbe führen.

## 14. Monetarisierung – 🔒 GESPERRT

Vor Entfernung von `MONETIZATION_DISABLED` müssen Gewerbe-/Steuergate, tatsächliche Partnerfreigaben, Affiliate-Kennzeichnung, Datenschutz für den echten Tracking-Datenfluss und die Marken-Risikoprüfung erneut kontrolliert werden. Anschließend müssen Quality, Live Health und Commercialization Guards erneut grün sein.

## Aktueller Freigabestatus

**Technische kostenlose Beta: 🟢 startbereit.**

**Vollständiges rechtliches Geschäfts-GO: 🟡 noch nicht – Gewerbebeginn/Gewerbeanmeldung zuerst klären.**

**Markenname: 🟢 für die vorsichtige kostenlose Beta; ⏸ Neuprüfung vor Anmeldung oder größerer irreversibler Markeninvestition.**

**Monetarisierung: 🔒 deaktiviert.**
