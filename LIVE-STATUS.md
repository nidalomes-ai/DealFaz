# DEALFAZ Live-Status

Stand: 27.08.2026

## Öffentliche Beta – 🟢 GRÜN

- Hauptseite: `https://dealfaz.dealfaz-social.workers.dev/`
- kostenloser Beta-/Testbetrieb: aktiv
- Affiliate-Monetarisierung: bewusst deaktiviert; `MONETIZATION_DISABLED` bleibt aktiv
- Canonicals, Sitemap, robots.txt und Launch-Links zeigen auf die Cloudflare-Version
- alte Supabase-Funktionslinks wurden aus den öffentlichen HTML-Seiten entfernt
- Social-Preview wird als 1200×630-PNG ausgeliefert
- alte externe `dealfaz-launch`-Links werden über Supabase Edge Function Version 38 auf die aktuelle Cloudflare-Produktion weitergeleitet
- Mobile-/Touch-Viewport-Prüfung ist für 320 px, 375 px und 390 px dokumentiert
- Metricool-Monatslimit von 20 Veröffentlichungen ist als feste Schutzregel dokumentiert; bei erreichtem Limit werden keine neuen Posts angelegt

## Qualitäts-Gates

Bei jedem relevanten Push laufen:

- `DEALFAZ Quality`
- `DEALFAZ Live Health`
- `DEALFAZ Commercialization Guards`

Live Health prüft unter anderem HTTP/HTTPS, Security-Header, Kerninhalte, statische Assets, SEO-Seiten, Sitemap, Neutralität der Amazon-Links sowie Share-/CSV-Sicherheitsregeln.

## Spätere Monetarisierung – separat offen

Diese Punkte sind **keine Beta-Blocker**, sondern Voraussetzungen vor einem späteren kommerziellen Affiliate-Release:

- finale geschäftskritische Domain/Route entscheiden
- Gewerbe-/Steuerstatus mit echten Angaben und tatsächlichem Start klären
- Amazon-Zusatzfragen/Website-Zuordnung beim Monetarisierungsstart klären
- ausdrückliche eBay-EPN-Freigabe vor EPN-Partnerlinks nachweisen
- vollständige amtliche Marken-/Kollisionsprüfung abschließen

Für jeden offenen externen Punkt ist bereits die sichere Beta-Ersatzroute aktiv: keine Affiliate-Tags, neutrale Originalquellen, keine Partnerschaftsbehauptung und `MONETIZATION_DISABLED`.

## Gesamt

**Kostenlose öffentliche Beta: 🟢 GRÜN.**

**Monetarisierung: 🔒 bewusst deaktiviert, bis externe Voraussetzungen tatsächlich erfüllt sind.**
