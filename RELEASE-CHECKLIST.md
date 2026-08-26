# DEALFAZ – Release-Gate

Diese Checkliste ist die Mindestanforderung für eine neue öffentliche DEALFAZ-Hauptversion. Ein öffentlicher kostenloser Release und ein Monetarisierungs-Release sind bewusst getrennt.

## 1. Funktion

- [ ] DealScore-Regressionstests erfolgreich
- [ ] Verlustfall kann nicht als `KAUFEN` enden
- [ ] schwache Evidenz kann ein starkes Rechenergebnis zu `DATEN PRÜFEN` begrenzen
- [ ] Maximaler Einkaufspreis bleibt bei gültigen Eingaben nicht negativ
- [ ] Watchlist und persönliche Regeln funktionieren lokal ohne Nutzerkonto
- [ ] Teilen/Kopieren erzeugt keine geheimen oder unnötigen personenbezogenen Daten im Link

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
- [ ] Affiliate-/Partnerlinks nur dann aktiv, wenn der Monetarisierungs-Release separat freigegeben ist
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

## 7. Kostenloser öffentlicher Launch

- [ ] öffentlicher Hauptlink funktioniert vor Veröffentlichung
- [ ] Social-Posts führen auf eine rendernde HTML-Seite
- [ ] technische Selbsttests werden nicht als echte Nutzer gezählt
- [ ] Reichweitenzahlen werden nicht als Unique Visitors ausgegeben, wenn sie nur Events sind
- [ ] keine Bots/Testaufrufe als Erfolg kommunizieren
- [ ] `MONETIZATION_DISABLED` bleibt vorhanden, solange die Monetarisierungsfreigabe fehlt

## 8. Zusätzlicher Monetarisierungs-Release

Erst wenn **alle** folgenden Punkte erfüllt sind, darf `MONETIZATION_DISABLED` in einem bewussten Release-Commit entfernt werden:

- [ ] Produktionshosting erlaubt die konkrete kommerzielle Nutzung
- [ ] Gewerbe-/Betreiberstatus ist rechtlich sauber geklärt und erforderliche Anmeldung erledigt
- [ ] steuerliche Erfassung ist fristgerecht erledigt bzw. rechtskonform abgeschlossen
- [ ] Amazon-Partnerstatus ist gültig und aktuelle Teilnahmebedingungen sind eingehalten
- [ ] eBay-Partnerlinks erst nach bestätigter EPN-Freigabe
- [ ] Werbe-/Affiliate-Kennzeichnung entspricht exakt den tatsächlich aktiven Links
- [ ] Datenschutzhinweise entsprechen dem dann tatsächlich aktiven Hosting/Tracking/Affiliate-Datenfluss
- [ ] Marken-/Namensprüfung ist ausreichend dokumentiert
- [ ] Affiliate-Tags werden erst nach Entfernen des Monetarisierungs-Locks eingebaut
- [ ] kompletter Quality- und Live-Health-Check ist grün

## Aktueller Grundsatz

**Rechtlich vertretbar → technisch stabil → transparent → messbar nützlich → erst dann öffentlich bewerben. Monetarisierung ist ein eigener, zusätzlicher Release.**
