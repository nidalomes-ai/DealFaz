# DEALFAZ Live-Status

Stand: 27.08.2026

## Öffentlich

- Hauptseite: `https://dealfaz.dealfaz-social.workers.dev/`
- Kostenloser Beta-/Testbetrieb: aktiv.
- Affiliate-Monetarisierung: deaktiviert; `MONETIZATION_DISABLED` bleibt aktiv.
- Öffentliche Canonicals, Sitemap, robots.txt und Launch-Links zeigen auf die Cloudflare-Version.
- Alte Supabase-Funktionslinks wurden aus den öffentlichen HTML-Seiten entfernt.
- Social-Preview wird als lokale statische Datei ausgeliefert.

## Qualitäts-Gates

Bei jedem Push laufen:

- `DEALFAZ Quality`
- `DEALFAZ Live Health`
- `DEALFAZ Commercialization Guards`

Live Health prüft unter anderem HTTP/HTTPS, Security-Header, Kerninhalte, statische Assets, SEO-Seiten, Sitemap, Neutralität der Amazon-Links sowie Share-/CSV-Sicherheitsregeln.

## Noch gelb

- `workers.dev` bleibt für den jetzigen kostenlosen Testbetrieb aktiv; vor einem geschäftskritischen/monetarisierten Dauerbetrieb wird eine Custom Domain/Route bzw. finale Produktionsdomain entschieden.
- Gewerbe-/Steuerfreigabe steht noch aus.
- Marken-Kollisionsprüfung steht noch aus.
- Externe Antworten von Finanzamt/Ordnungsamt/Amazon-Zusatzanfrage sind noch nicht vollständig eingegangen.

Kein gelber externer Punkt blockiert die technische Weiterentwicklung; er blockiert nur die Monetarisierungsfreigabe.
