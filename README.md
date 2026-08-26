# DEALFAZ Reselling

**DEALFAZ** ist eine kostenlose browserbasierte Reselling-Prüfung für Deutschland, Österreich und die Schweiz. Der Fokus liegt auf einer schnellen, nachvollziehbaren Entscheidung vor dem Einkauf – ohne Gewinnversprechen und ohne fremde Marktplatzdaten zu kopieren.

## Öffentliche Hauptseite

**https://dealfaz.vercel.app/**

Die öffentliche Version läuft über HTTPS und benötigt kein Nutzerkonto.

## Aktueller Funktionsumfang

- 60-Sekunden-Check für einen konkreten Deal
- DealScore 0–100
- rechnerisches Signal `KAUFEN`, `VERHANDELN`, `LIEGEN LASSEN` oder `DATEN PRÜFEN`
- Gewinn, ROI, Marge und ROI pro 30 Tage
- maximaler Einkaufspreis anhand des Ziel-ROI
- Worst Case / realistisch / Best Case
- Sell-through aus selbst beobachteten Verkaufs-/Angebotszahlen
- separate Datenqualitätsprüfung mit Evidenz-Sperre
- **„Warum NICHT kaufen?“**: bis zu drei Gegenargumente aus den eigenen Eingaben
- **Deal Battle**: transparenter Vergleich zweier eigener Szenarien; zuerst ROI pro 30 Tage, dann Gewinn und anschließend die selbst angegebene Risikostufe als Tie-Breaker
- **Erwartung vs. tatsächliches Ergebnis**: vor dem Kauf eine Erwartung lokal vormerken und nach dem Verkauf echten Verkaufspreis, echte weitere Kosten und tatsächliche Verkaufstage gegenüberstellen
- lokale Ergebnis-Historie mit Abweichung bei Gewinn und Verkaufstagen
- CSV-Export der eigenen Ergebnis-Historie
- Risikostufe 1–5
- persönliche Kaufregeln lokal im Browser
- lokale Watchlist mit bis zu 50 Deals
- JSON-Backup, Wiederherstellung und CSV-Export
- reproduzierbare Share-Links mit den eingegebenen Deal-Werten
- Originalquellen für eBay verkauft/aktiv, Kleinanzeigen, idealo, Google Shopping und Amazon
- Impressum, Datenschutz, Nutzungsbedingungen und Haftungshinweise direkt in der Oberfläche
- installierbare Web-App-Struktur über Manifest und App-Icon
- Security-Header für Content-Type, Framing, Referrer, Berechtigungen und Content Security Policy

## Wissensseiten

- [Reselling-Rechner: Gewinn, ROI & Marge](https://dealfaz.vercel.app/reselling-rechner/)
- [Maximalen Einkaufspreis berechnen](https://dealfaz.vercel.app/maximaler-einkaufspreis/)
- [ROI beim Reselling verstehen](https://dealfaz.vercel.app/roi-reselling/)
- [Sell-through verstehen](https://dealfaz.vercel.app/sell-through/)

## Transparenz & Methodik

- [`docs/DEALSCORE-METHODIK.md`](docs/DEALSCORE-METHODIK.md) – aktuelle Rechenlogik, Grenzen und Gegenproben
- [`docs/DATENFLUSS-UND-DATENSCHUTZ.md`](docs/DATENFLUSS-UND-DATENSCHUTZ.md) – lokaler Datenfluss und Datenschutzprinzipien
- [`LEGAL-GUARDRAILS.md`](LEGAL-GUARDRAILS.md) – feste Release-Grenzen für neue Funktionen

## Rechts- und Datenprinzipien

- **Keine Gewinn- oder Verkaufsgarantie.** Ergebnisse sind Rechen- und Entscheidungshilfen.
- **Keine automatische Marktbehauptung.** Verkaufsdauer, Risiko, Preisannahmen und Vergleichswerte werden vom Nutzer eingegeben.
- **Keine unerlaubten Scrapes.** DEALFAZ umgeht keine Logins, Paywalls, Zugangsbeschränkungen oder technischen Schutzmaßnahmen.
- **Originalquellen statt kopierter Fremdangebote.** Plattform- und Markennamen werden nur beschreibend verwendet und bedeuten keine Partnerschaft oder Zertifizierung.
- **Datensparsamkeit.** Kaufregeln, Watchlist, Erwartungen und tatsächliche Verkaufsergebnisse bleiben in der aktuellen Version lokal im Browser.
- **Partnerlinks nur nach tatsächlicher Freigabe und transparent gekennzeichnet.**
- **Kostenlose Kernnutzung.** Kein Checkout und kein Abonnement in der aktuellen Version.

Für neue Funktionen gelten zusätzlich die festen Release-Grenzen in [`LEGAL-GUARDRAILS.md`](LEGAL-GUARDRAILS.md). Funktionen mit ungeklärtem Scraping-, Tracking-, Upload-, Account-, Payment- oder Datenschutzrisiko bleiben Entwurf/Preview und gehen nicht in Production.

## Öffentlicher Nutzerweg

1. Produkt und Deal-Zahlen eingeben.
2. Verkaufte und aktive Vergleichswerte auf Originalquellen prüfen.
3. Evidenz, Datenqualität, Risiko und eine eigene erwartete Verkaufsdauer eintragen.
4. DealScore, Szenarien, Marge, ROI pro 30 Tage und maximalen Einkaufspreis prüfen.
5. Die Gegenprobe **„Warum NICHT kaufen?“** ansehen.
6. Optional einen zweiten Deal im **Deal Battle** vergleichen.
7. Persönliche Kaufregeln dagegenhalten.
8. Erwartung lokal vormerken und nach einem echten Verkauf mit dem tatsächlichen Ergebnis vergleichen.
9. Ergebnis teilen oder lokal in der Watchlist speichern.
10. Watchlist und Ergebnis-Historie bei Bedarf lokal exportieren.

**DEALFAZ Reselling – erst prüfen, dann entscheiden.**
