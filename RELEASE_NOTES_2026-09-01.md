# DEALFAZ Launch Candidate – 01.09.2026

Stand: 27.08.2026

DEALFAZ ist eine kostenlose browserbasierte Reselling-Rechen- und Entscheidungshilfe für Deutschland, Österreich und die Schweiz. Der Launch-Kern ist auf einen einfachen Ablauf konzentriert: Artikel → Einkauf → möglicher Verkauf → klare Rechnung. Zusätzliche Markt- und Risikodetails bleiben optional.

## Haupt-Einstieg

**DEALFAZ Hauptseite / Schnellcheck:**

`https://dealfaz.dealfaz-social.workers.dev/`

**Wissens- und SEO-Einstieg:**

`https://dealfaz.dealfaz-social.workers.dev/reselling-rechner/`

Alte Supabase-/Vercel-Frontendlinks sind keine Launch-Einstiege mehr und sollen nicht weiter beworben werden.

## Launch-Kern

- Schnellcheck mit Artikel, Einkauf und möglichem Verkaufspreis
- optionale Extra-Kosten
- Sell-through aus vom Nutzer eingetragenen verkauften und aktiven Vergleichen
- Datenqualitätsbewertung aus Stichprobengröße, Preisvergleichen und Ähnlichkeit
- Evidenz-Sperre: Ein starkes rechnerisches Signal kann bei schwacher Datenbasis zu `DATEN PRÜFEN` begrenzt werden
- DealScore 0–100
- vorsichtiges / normales / sehr gutes Rechenszenario
- Gegenargument-Modus
- maximaler Einkaufspreis
- ROI und Marge
- lokales Merken/Watchlist ohne Nutzerkonto
- Deal-Vergleich
- tatsächliches späteres Verkaufsergebnis lokal erfassbar
- Teilen mit Dealwerten im URL-Fragment statt im Server-Querystring
- externe Marktplätze als Originalquellen zur eigenen Recherche

## Funnel

1. Artikel eintragen
2. Einkauf und möglichen Verkauf eintragen
3. Ergebnis sofort sehen
4. bei Bedarf genauere Markt-/Risikodaten ergänzen
5. Originalquellen selbst prüfen
6. Deal lokal merken, vergleichen oder teilen

## Sicherheit und Transparenz

- keine erfundenen Live-Markt- oder Verkaufsdaten
- Nutzerwerte und beobachtete Vergleichswerte bleiben als Eingaben/Annahmen erkennbar
- Szenarien sind Rechenhilfen und keine Prognosen
- keine Gewinn-, Preis-, Nachfrage- oder Verkaufsgarantie
- keine Login-/Paywall-Umgehung und kein unerlaubtes Scraping
- technische bzw. Bot-/Preview-Zugriffe werden nicht als eindeutige reale Besucher ausgegeben
- Partner-/Affiliate-Monetarisierung bleibt durch `MONETIZATION_DISABLED` deaktiviert
- Amazon-Links sind derzeit neutrale Originalquellen ohne Affiliate-Tag

## Technischer Status am 27.08.2026

- Cloudflare-Produktion erreichbar
- `DEALFAZ Quality`: grün
- `DEALFAZ Live Health`: grün
- `DEALFAZ Commercialization Guards`: grün
- PostHog Error Tracking: keine aktiven Fehler im geprüften 7-Tage-Fenster
- öffentliche HTML-Seiten enthalten keine alten Supabase-Funktionslinks mehr
- Canonical, Sitemap, robots.txt und Launch-Kit zeigen auf die aktuelle Cloudflare-Version

## Vor dem 01.09. noch offen

- praktische Mobile-/iPhone-Sichtprüfung
- praktische Social-Preview-Prüfung auf den tatsächlich genutzten Plattformen
- echte organische Nutzung und Reichweite beobachten; keine Bots/Testaufrufe als Erfolg zählen

## Separat von der kostenlosen Beta gesperrt

Die folgenden Punkte sind **keine Voraussetzung für die kostenlose technische Beta**, bleiben aber zwingende Gates vor Monetarisierung:

- Gewerbe-/Betreiberstart
- steuerliche Erfassung und EU-B2B/USt-IdNr.-Behandlung
- finale Amazon-Aktivierungsprüfung
- finaler geschäftskritischer Produktionshost bzw. Custom Domain/Route
- Marken-/Namens-Kollisionsprüfung

Bis diese Punkte erfüllt sind, wird keine Affiliate-Monetarisierung aktiviert.
