# DEALFAZ – Release-Gate

Diese Checkliste ist die Mindestanforderung für eine neue öffentliche DEALFAZ-Hauptversion. Ein Release gilt nicht als vollständig bereit, solange ein Pflichtpunkt offen ist.

## 1. Funktion

- [ ] DealScore-Regressionstests erfolgreich
- [ ] Verlustfall kann nicht als `KAUFEN` enden
- [ ] schwache Evidenz kann ein starkes Rechenergebnis zu `DATEN PRÜFEN` begrenzen
- [ ] Maximaler Einkaufspreis bleibt bei gültigen Eingaben nicht negativ
- [ ] Watchlist und persönliche Regeln funktionieren lokal ohne Nutzerkonto
- [ ] Teilen/Kopieren erzeugt keine geheimen oder personenbezogenen Daten im Link

## 2. Daten & Marktquellen

- [ ] keine erfundenen Preise, Verkaufszahlen oder Nachfragewerte
- [ ] keine unerlaubten Scrapes
- [ ] keine Umgehung von Logins, Zugangsbeschränkungen oder technischen Schutzmaßnahmen
- [ ] aktive Angebote und Verkaufsbelege werden fachlich getrennt behandelt
- [ ] externe Plattformen werden als Originalquellen bezeichnet
- [ ] keine Partnerschaft/Zertifizierung wird behauptet, wenn sie nicht tatsächlich besteht

## 3. Recht & Datenschutz

- [ ] tatsächliches Impressum/Anbieterkennzeichnung auf der Live-Seite vorhanden
- [ ] vollständige Datenschutzhinweise für die tatsächlich eingesetzten Dienste vorhanden
- [ ] keine Gewinn-, Verkaufs-, Preis- oder Marktentwicklungsgarantie
- [ ] Affiliate-/Partnerlinks erst nach tatsächlicher Freigabe und klar gekennzeichnet
- [ ] keine unnötige zentrale Speicherung von Deal-/Nutzerdaten
- [ ] lokale Speicherung transparent erklärt
- [ ] Drittplattformen und deren eigene Regeln transparent erwähnt

## 4. Technik & Sicherheit

- [ ] öffentliche Hauptseite liefert HTTP 200
- [ ] öffentliche Hauptseite liefert `text/html`
- [ ] HTTPS aktiv
- [ ] keine offensichtlichen Secrets im öffentlichen Repository
- [ ] `X-Content-Type-Options: nosniff`
- [ ] sichere Referrer-Policy
- [ ] unnötige Kamera-/Mikrofon-/Standortrechte deaktiviert
- [ ] Clickjacking-Schutz gesetzt
- [ ] keine bekannten Runtime-Fehler

## 5. SEO & Teilen

- [ ] Canonical zeigt auf die echte öffentliche Hauptdomain
- [ ] `og:url` zeigt auf die echte öffentliche Hauptdomain
- [ ] Social-Preview-Bild vorhanden
- [ ] `robots.txt` verweist auf die richtige Sitemap
- [ ] Sitemap enthält nur tatsächlich öffentliche HTML-Seiten
- [ ] Manifest startet auf der echten Root-URL
- [ ] keine veralteten GitHub-Pages-/Supabase-Frontend-URLs in öffentlichen Dokumenten

## 6. Mobile & UX

- [ ] Kernablauf auf iPhone ohne horizontales Scrollen nutzbar
- [ ] wichtigste Entscheidung auf kleinem Bildschirm sofort verständlich
- [ ] Buttons ausreichend groß und eindeutig
- [ ] Formulare haben sinnvolle Grenzwerte
- [ ] externe Links öffnen kontrolliert und mit `noopener`
- [ ] Nutzer erkennt klar, welche Werte eigene Eingaben/Annahmen sind

## 7. Launch

- [ ] öffentlicher Hauptlink funktioniert vor Veröffentlichung
- [ ] Social-Posts führen auf eine rendernde HTML-Seite
- [ ] technische Selbsttests werden nicht als echte Nutzer gezählt
- [ ] Reichweitenzahlen werden nicht als Unique Visitors ausgegeben, wenn sie nur Events sind
- [ ] keine Bots/Testaufrufe als Erfolg kommunizieren

## Aktueller Grundsatz

**Rechtlich vertretbar → technisch stabil → transparent → messbar nützlich → erst dann öffentlich bewerben.**
