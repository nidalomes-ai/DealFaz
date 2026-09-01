# DINAVO – Grüne Ersatzrouten

Stand: 01.09.2026

Ziel: Jeder Punkt, der vor der Gewerbeanmeldung technisch, organisatorisch oder durch eine sichere kostenlose Ersatzroute gelöst werden kann, steht grün. Externe Freigaben werden dadurch **nicht vorgetäuscht**. Schritte, die erst beim tatsächlichen kommerziellen Start sinnvoll ausgeführt werden, stehen als `⏸ nach Gewerbe` und zählen nicht als aktueller gelber Punkt.

## 1. Technik / Funktionen

**Status: 🟢 GRÜN**

- öffentliche Cloudflare-Version aktiv
- Quality / Live Health / Commercialization Guards vorhanden
- DealScore-Regressionstests vorhanden
- Sicherheitsheader und Monetarisierungs-Sperren aktiv

## 2. Mobile

**Status: 🟢 GRÜN**

- Chromium-Mobile-Viewports 320 px, 375 px und 390 px geprüft
- kein horizontales Überlaufen
- zentrale Inputs und Entscheidung sichtbar
- zentrale Touch-Ziele mindestens 46 px hoch

Ein physischer Hardware-Smoke-Test bleibt optionale Zusatzkontrolle.

## 3. Social Preview

**Status: 🟢 GRÜN**

- 1200×630 PNG vorhanden
- `og:image` und Twitter-Metadaten auf PNG
- absolute HTTPS-URL, Bildtyp, Größe und Large-Image-Card gesetzt

## 4. Social Publishing / Metricool

**Status: 🟢 GRÜN**

- feste Obergrenze: 20 Veröffentlichungen pro Monat
- keine kostenpflichtige Erweiterung
- bei erreichtem Limit keine neuen Posts
- bestehende Posts dürfen korrigiert werden, ohne neue Veröffentlichungsslots anzulegen
- alte zukünftige Social-Ziele soweit möglich auf Cloudflare umgestellt
- nicht editierbarer Legacy-Link wird über `dealfaz-launch` Version 38 auf Cloudflare weitergeleitet

## 5. Suchmaschinen / Indexierung

**Status: 🟢 GRÜN technisch**

- robots.txt, Sitemap und Canonicals auf Cloudflare
- IndexNow-Schlüssel und Submission-Workflow vorhanden
- erfolgreiche IndexNow-Submission dokumentiert
- Indexierung, Positionen und Besucherzahlen werden nicht garantiert

Tatsächliche Suchmaschinenaufnahme wird beobachtet und nicht künstlich erzwungen.

## 6. Markenname DINAVO

**Status: 🟢 GRÜN FÜR KOSTENLOSE BETA / ⏸ NEUGATE VOR ANMELDUNG ODER GROSSER INVESTITION**

- öffentliche Vorrecherche und DPMA-Suchstrategie dokumentiert
- kein belastbarer identischer öffentlicher Treffer für `DINAVO` festgestellt
- bestehende Nutzung durch Dinavo AB und die belegte Domain `dinavo.com` dokumentiert
- keine vollständige amtliche oder anwaltliche Ähnlichkeitsfreigabe behauptet
- keine Aussage `Marke frei` oder `rechtlich abgesichert`
- keine irreversible Markeninvestition vor finaler Kollisionsprüfung

**Vor größerer Markeninvestition:** professionelle Ähnlichkeitsprüfung und Wortmarkenanmeldung abschließen.

## 7. Amazon PartnerNet

**Status: 🟢 GRÜN vorbereitet**

- Teilnahmebestätigung vorhanden
- neutrale Amazon-Originalquelle ohne Affiliate-Tag aktiv
- Kennzeichnungsregeln dokumentiert
- aktuelles Amazon-Prüfverfahren dokumentiert
- `MONETIZATION_DISABLED` aktiv

**⏸ nach Gewerbe:** Website-Zuordnung kontrollieren, Affiliate-Tag aktivieren, Werbekennzeichnung zuschalten und spätere Amazon-Prüfung durchlaufen.

## 8. eBay Partner Network

**Status: 🟢 GRÜN vorbereitet**

- Bewerbungseingang dokumentiert
- neutrale eBay-Originalquelle ohne EPN-Tracking aktiv
- keine Partnerbehauptung
- `MONETIZATION_DISABLED` aktiv

**⏸ nach Gewerbe:** ausdrückliche EPN-Freigabe nachweisen und erst danach Partnerlinks aktivieren.

## 9. Steuer / ELSTER

**Status: 🟢 GRÜN vorbereitet**

- Formulartyp und Tätigkeitsbeschreibung vorbereitet
- EU-B2B-/Reverse-Charge-/USt-IdNr.-/ZM-Grundlogik dokumentiert
- keine fiktiven Umsätze oder Gewinne
- keine fiktiven Bankdaten oder Steueroptionen

**⏸ nach Gewerbe:** reale Betriebsdaten einsetzen, steuerliche Wahl anhand der tatsächlichen Situation treffen und Fragebogen fristgerecht übermitteln.

## 10. Produktionsdomain

**Status: 🟢 GRÜN**

- aktuelle `workers.dev`-Produktion funktioniert
- Canonical, Sitemap, robots.txt, Social-Metadaten und Launch-Kit sind darauf ausgerichtet
- kostenlose Fallbacks dokumentiert
- Entscheidung vor Gewerbe: auf dem funktionierenden Cloudflare-Host bleiben

**⏸ nach Gewerbe:** Custom Domain/Route nur bei bewusstem kommerziellem Cutover prüfen.

## 11. Monetarisierung

**Status: 🟢 GRÜN als Sicherheitszustand / 🔒 deaktiviert**

- `MONETIZATION_DISABLED` ist aktiv
- keine Affiliate-Tags
- keine versteckten Provisionslinks
- externe Freigaben werden nicht umgangen

Der sichere Zustand vor Gewerbe ist damit vollständig hergestellt.

## 12. Gewerbe

**Status: 🟡 EXTERNER SCHRITT VOR KOMMERZIELLEM START**

- zuständige Stelle identifiziert
- Verfahren und Tätigkeitsbeschreibung vorbereitet
- tatsächliche Gewerbeanmeldung noch nicht abgesendet

## Gesamtstatus

**Technische kostenlose Beta: 🟢 releasebereit.**

**Einziger aktiver gelber Schritt:** Gewerbeanmeldung beziehungsweise Klärung des tatsächlichen Betriebsbeginns vor kommerziellem Betrieb.

Spätere Affiliate-, Steuer-, Marken- und Domain-Ausführungsschritte stehen `⏸`; sie werden nicht als bereits erteilte externe Freigaben dargestellt und sind keine Freigabe der jeweiligen externen Stelle.
