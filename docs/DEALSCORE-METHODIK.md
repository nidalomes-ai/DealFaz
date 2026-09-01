# DINAVO DealScore – Methodik

Diese Seite dokumentiert die aktuelle Rechenlogik des DINAVO DealScore transparent. Der DealScore ist eine **Rechen- und Entscheidungshilfe** und keine Gewinn-, Preis- oder Verkaufsgarantie.

## Eingaben

Der aktuelle Check verwendet ausschließlich Werte, die der Nutzer selbst eingibt oder selbst auf Originalquellen geprüft hat:

- Einkaufspreis
- realistischer Verkaufspreis
- weitere Kosten
- verkaufte Vergleichsangebote
- aktive Vergleichsangebote
- Anzahl brauchbarer Preisvergleiche
- Eindeutigkeit von Variante/Zustand (1–5)
- eigene Risikostufe (1–5)
- Ziel-ROI
- eigene geschätzte Verkaufsdauer

DINAVO kopiert keine fremden Angebotsdaten und umgeht keine Logins, Paywalls oder technischen Schutzmaßnahmen.

## Grundkennzahlen

**Gewinn** = Verkaufspreis − Einkaufspreis − weitere Kosten

**ROI** = Gewinn ÷ Einkaufspreis × 100

**Marge** = Gewinn ÷ Verkaufspreis × 100

**ROI pro 30 Tage** = ROI × 30 ÷ geschätzte Verkaufstage

**Sell-through** = verkauft ÷ (verkauft + aktiv) × 100

**Maximaler Einkaufspreis** = (Verkaufspreis − weitere Kosten) ÷ (1 + Ziel-ROI als Dezimalzahl)

## Datenqualität

Die Datenqualität wird separat vom DealScore betrachtet. Berücksichtigt werden:

- Größe der beobachteten Stichprobe
- Anzahl brauchbarer Preisvergleiche
- Eindeutigkeit von Variante/Zustand

Bei zu schwacher Datenqualität kann ein rechnerisch positives Signal auf **DATEN PRÜFEN** begrenzt werden. Damit soll verhindert werden, dass eine sehr kleine Stichprobe als starke Marktaussage missverstanden wird.

## DealScore-Komponenten

Der aktuelle Score verwendet vier Bereiche mit zusammen maximal 100 Punkten:

1. ROI: bis zu 35 Punkte
2. Sell-through aus Nutzereingaben: bis zu 25 Punkte
3. selbst angegebene Risikostufe: bis zu 20 Punkte
4. Gewinnmarge: bis zu 20 Punkte

Bei nicht positivem Gewinn wird der Score begrenzt. Ein negativer Worst Case führt zu einem zusätzlichen Abschlag.

## Rechnerisches Signal

Der Score kann in vier Signale übersetzt werden:

- **KAUFEN**
- **VERHANDELN**
- **LIEGEN LASSEN**
- **DATEN PRÜFEN**

Diese Begriffe sind keine persönliche Kaufberatung und keine Prognose. Sie fassen lediglich die eingegebenen Werte nach der dokumentierten Rechenlogik zusammen.

## Szenarien

DINAVO zeigt zusätzlich drei Rechenszenarien:

- Worst Case
- Realistisch
- Best Case

Die Szenarien verändern die vom Nutzer eingegebenen Verkaufspreise und Kosten nach festen Rechenannahmen. Sie sind **keine Marktprognosen**.

## Warum NICHT kaufen?

DINAVO zeigt bewusst Gegenargumente aus den eigenen Eingaben, zum Beispiel:

- zu schwache Datenbasis
- negativer Worst Case
- Ziel-ROI verfehlt
- hohe selbst angegebene Risikostufe
- niedriger Sell-through aus der eigenen Stichprobe
- Einkaufspreis über der rechnerischen Zielgrenze

So soll ein grüner Score nicht ohne Gegenprüfung betrachtet werden.

## Deal Battle

Beim Deal Battle werden zwei vom Nutzer eingegebene Szenarien verglichen. Die aktuelle Reihenfolge lautet:

1. ROI pro 30 Tage
2. bei engem Abstand: Gewinn
3. bei weiter engem Abstand: selbst angegebene Risikostufe

Der Vergleich verwendet keine automatisch erfundenen Marktdaten.

## Erwartung gegen tatsächliches Ergebnis

Nutzer können eine eigene Erwartung lokal vormerken und später tatsächlichen Verkaufspreis, tatsächliche weitere Kosten und tatsächliche Verkaufstage eintragen. Die Daten werden in der aktuellen Version lokal im Browser gespeichert und nicht zu einer zentralen DINAVO-Nutzerdatenbank hochgeladen.

## Grenzen

DINAVO ersetzt keine individuelle Kauf-, Rechts-, Steuer-, Finanz- oder Unternehmensberatung. Tatsächliche Ergebnisse können erheblich von den eingegebenen Annahmen abweichen.
