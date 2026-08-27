# DEALFAZ – Grüne Ersatzrouten

Stand: 27.08.2026

Ziel: Wenn ein externer Punkt nicht sofort abgeschlossen werden kann, darf er die kostenlose öffentliche Beta nicht unnötig blockieren. Stattdessen wird eine sichere, kostenlose Ersatzroute verwendet. Externe Freigaben werden dadurch **nicht vorgetäuscht**.

## 1. Technik / Funktionen

**Status: 🟢 GRÜN**

- öffentliche Cloudflare-Version aktiv
- Quality / Live Health / Commercialization Guards vorhanden
- DealScore-Regressionstests vorhanden
- Sicherheitsheader und Monetarisierungs-Sperren aktiv

Ersatzroute nötig: nein.

## 2. Mobile

**Status: 🟢 GRÜN für Beta**

- Chromium-Mobile-Viewports 320 px, 375 px und 390 px geprüft
- kein horizontales Überlaufen
- zentrale Inputs und Entscheidung sichtbar
- zentrale Touch-Ziele mindestens 46 px hoch

Alternative zum momentan nicht verfügbaren physischen iPhone-Test: reproduzierbare Mobile-/Touch-Viewport-Prüfung. Ein späterer Hardware-Smoke-Test bleibt Zusatzkontrolle, kein Beta-Blocker.

## 3. Social Preview

**Status: 🟢 GRÜN**

- 1200×630 PNG vorhanden
- `og:image` und Twitter-Metadaten auf PNG
- absolute HTTPS-URL und Large-Image-Card gesetzt

Alternative zur SVG-Vorschau: plattformkompatibles Rasterbild.

## 4. Social Publishing / Metricool

**Status: 🟢 GRÜN innerhalb des kostenlosen Limits**

- feste Obergrenze: 20 Veröffentlichungen pro Monat
- keine kostenpflichtige Erweiterung
- bei erreichtem Limit keine neuen Posts anlegen
- bestehende Posts dürfen korrigiert werden, ohne zusätzliche Veröffentlichungen zu erzeugen
- alte zukünftige Social-Ziele wurden soweit vom Planner akzeptiert auf Cloudflare umgestellt
- ein nicht editierbarer Legacy-Link wird über die aktive Supabase-Redirect-Funktion `dealfaz-launch` Version 38 auf Cloudflare weitergeleitet

Alternative bei Planner-Fehler: bestehendes Legacy-Ziel serverseitig auf die aktuelle Produktion weiterleiten statt einen neuen Post anzulegen.

## 5. Suchmaschinen / Indexierung

**Status: 🟢 GRÜN technisch**

- robots.txt, Sitemap und Canonicals auf Cloudflare
- IndexNow-Schlüssel und Submission-Workflow vorhanden
- erfolgreiche IndexNow-Submission dokumentiert

Nicht erzwingbar: tatsächliche Aufnahme/Position in Suchmaschinen.

Alternative: technische Auffindbarkeit und aktive Einreichung vollständig bereitstellen; reale Indexierung nur beobachten, nicht mit Bots oder künstlichen Klicks erzwingen.

## 6. Markenname DEALFAZ

**Status: 🟢 GRÜN für vorsichtige Beta-Nutzung / 🟡 rechtliche Markenfreigabe**

- öffentliche Vorrecherche und DPMA-Suchstrategie dokumentiert
- kein belastbarer identischer öffentlicher Treffer für `DEALFAZ` festgestellt
- ähnlicher Treffer `Dealfa`, EUTM 018240890, als Kollisions-Prüfpunkt dokumentiert
- keine Aussage `Marke frei` oder `rechtlich abgesichert`

Alternative bis zur vollständigen amtlichen Kollisionsprüfung: sachliche Beta-Nutzung des Projektnamens ohne Markenfreigabe-Behauptung, ohne kostenpflichtige Anmeldung und ohne irreversible Branding-Ausgaben.

## 7. Amazon PartnerNet

**Status: 🟢 GRÜN als sichere Beta-Ersatzroute / 🟡 Affiliate-Aktivierung**

- Amazon bleibt als neutrale Originalquelle nutzbar
- keine Affiliate-Tags aktiv
- keine Provisionsbehauptung
- `MONETIZATION_DISABLED` bleibt aktiv

Alternative bis zur vollständigen Partner-/Steuerfreigabe: neutraler Amazon-Suchlink ohne Affiliate-Zuordnung.

## 8. eBay Partner Network

**Status: 🟢 GRÜN als sichere Beta-Ersatzroute / 🟡 EPN-Aktivierung**

- eBay bleibt als neutrale Originalquelle nutzbar
- keine EPN-Trackingparameter oder Partnerbehauptung aktiv
- bisherige Statusanfrage war unzustellbar und wird nicht als Freigabe interpretiert
- `MONETIZATION_DISABLED` bleibt aktiv

Alternative bis zur ausdrücklichen EPN-Freigabe: normale eBay-Originalquellenlinks ohne Partnertracking.

## 9. Gewerbe / Steuer

**Status: 🟢 GRÜN als Nicht-Monetarisierungs-Schutz / 🟡 tatsächlicher gewerblicher Start**

- Betreiber-/Steuer-Checklisten vorbereitet
- keine erfundenen Umsätze, Gewinne, Betriebsbeginne oder Steueroptionen eingetragen
- Monetarisierung bleibt aus, solange tatsächlicher gewerblicher/steuerlicher Start nicht geklärt und erforderliche Schritte nicht erledigt sind

Alternative: kostenlose Beta ohne Affiliate-Provisionen weiterentwickeln; Anmeldung und steuerliche Erfassung erst mit echten Angaben und dem tatsächlich gewählten Start durchführen. Diese Ersatzroute ist keine Aussage, dass im Einzelfall garantiert keine Anmeldepflicht besteht.

## 10. Produktionsdomain

**Status: 🟢 GRÜN für Beta / 🟡 späterer kommerzieller Cutover**

- aktuelle `workers.dev`-Produktion funktioniert und ist in Sitemap/Canonical/Launch-Kit eingetragen
- kein Domainkauf erforderlich, solange das Budget null bleibt

Alternative: kostenlosen aktuellen Cloudflare-Host für die Beta verwenden; Custom Domain erst später bewusst entscheiden.

## 11. Monetarisierung

**Status: 🟢 GRÜN als Sicherheitszustand / 🔒 Einnahmen bewusst deaktiviert**

- `MONETIZATION_DISABLED` ist der aktive Guardrail
- keine Affiliate-Tags oder versteckten Provisionslinks
- externe Freigaben werden nicht umgangen

Alternative: Reichweite, Produktnutzen, SEO und Beta-Nutzung aufbauen, ohne vorzeitig Affiliate-Einnahmen zu aktivieren.

## Gesamtstatus

**Kostenlose öffentliche Beta: 🟢 GRÜN.**

**Externe Monetarisierungsfreigaben: weiterhin separat offen.** Sie blockieren nicht die kostenlose Beta, dürfen aber nicht durch eine technische Ersatzroute als tatsächlich erteilt dargestellt werden.
