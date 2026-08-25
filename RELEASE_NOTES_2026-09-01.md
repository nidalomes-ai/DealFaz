# DEALFAZ Launch Candidate – 01.09.2026

DEALFAZ ist eine kostenlose Reselling-Prüfung für Deutschland, Österreich und die Schweiz. Der Launch-Kern wurde vor dem 01.09.2026 auf einen durchgängigen Ablauf konzentriert: Produkt prüfen → Marktdaten einordnen → Kosten erfassen → Datenqualität bewerten → DealScore → Report / Teilen / Watchlist.

## Haupt-Einstieg

**60-Sekunden-Check:**
https://iosghttnctdaociwltos.supabase.co/functions/v1/dealfaz-check/

**Kurzer Einstieg / Redirect zum Komplettcheck:**
https://iosghttnctdaociwltos.supabase.co/functions/v1/dealfaz-start

**DEALFAZ Hauptseite:**
https://iosghttnctdaociwltos.supabase.co/functions/v1/dealfaz-launch/

## Launch-Kern

- Produktsuche über mehrere öffentliche Marktplätze
- 60-Sekunden-Komplettcheck mit Produkt, Einkauf, Verkauf und Kosten
- Sell-through aus verkauften und aktiven Vergleichsangeboten
- Datenqualitätsbewertung aus Stichprobengröße, Preisvergleichen und Zustandsklarheit
- Evidenz-Sperre: Ein rechnerisches KAUFEN-Signal wird bei zu schwacher Datenbasis im Komplettcheck zu DATEN PRÜFEN
- DealScore 0–100
- Worst Case / realistisch / Best Case
- Sicherheitsabstand zum Break-even
- Gegenargument-Modus
- Maximaler Einkaufspreis
- Margen- und Break-even-Rechner
- Kapitalbindungs-Vergleich
- Deal-Report mit teilbaren reproduzierbaren Werten
- lokale Watchlist ohne Konto

## Aktueller Funnel

1. Produkt suchen
2. Marktquellen öffnen
3. 60-Sekunden-Check
4. Datenqualität und Sell-through prüfen
5. DealScore / Entscheidung
6. Report teilen oder Deal lokal speichern
7. Empfänger eines Reports kann seinen eigenen Deal direkt im Komplettcheck starten

## Sicherheit und Transparenz

- Keine erfundenen Markt- oder Verkaufsdaten
- Nutzerwerte und beobachtete Marktwerte bleiben als Annahmen erkennbar
- Szenarien sind Rechenhilfen und keine Prognosen
- Keine Gewinn- oder Verkaufsgarantie
- Bot-/Selftest-Aufrufe werden in der internen Launch-Messung von likely_human getrennt
- Partnerlinks werden erst nach tatsächlicher Freigabe aktiviert und gekennzeichnet

## Launch-Status

Die zentralen öffentlichen DEALFAZ-Funktionen sind aktiv. Kernpfade und neue Übergänge wurden mit bot-markierten Healthchecks auf erfolgreiche HTTP-Antworten geprüft. Die große offene Aufgabe bleibt echte Reichweite und die Nutzung des kompletten Funnels durch reale Besucher.
