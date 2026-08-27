# DEALFAZ – Suchmaschinen-Indexierung

Stand: 27.08.2026

## Aktueller Stand

Die öffentliche Hauptquelle ist jetzt:

> `https://dealfaz.dealfaz-social.workers.dev/`

Frühere Vercel-/Supabase-Frontendpfade sind nicht mehr die öffentliche Hauptquelle. Eine fehlende oder verzögerte Suchmaschinen-Indexierung ist nicht automatisch ein technischer Fehler; Suchmaschinen entscheiden selbst über Crawl, Indexierung und Ranking.

## Technisch grün

- [x] `robots.txt` vorhanden und verweist auf die aktuelle Sitemap
- [x] `sitemap.xml` enthält die aktuelle Hauptseite und die vier Wissensseiten
- [x] Canonical-Tags zeigen auf die Cloudflare-Produktion
- [x] Search-Engine-Verifikationsdatei vorhanden
- [x] IndexNow-Schlüssel auf dem Produktionshost vorgesehen und durch Live Health geprüft
- [x] interne SEO-Seiten verlinken Impressum/Recht und den lokalen Datenschutzbereich
- [x] alte Supabase-Funktionslinks aus den öffentlichen HTML-Seiten entfernt
- [x] Quality schützt gegen Rückfall auf alte Vercel-/GitHub-Pages-/Supabase-Public-Links

## Noch offen

- [ ] reale Indexierung der aktuellen Cloudflare-URLs in Suchmaschinen beobachten
- [ ] nach Festlegung einer späteren finalen Custom Domain/Route alle Canonicals/Sitemap/OG-Daten in einem einzigen Cutover umstellen
- [ ] anschließend Sitemap und URL-Prüfung in den Webmaster-Tools erneut auf die finale Domain ausrichten

## Regeln

- Sitemap-Einreichung ist nur ein Hinweis an Suchmaschinen.
- Indexierung, Positionen und Besucherzahlen werden nicht garantiert.
- Keine künstlichen Klicks, Bots oder automatisierten Suchanfragen verwenden, um Sichtbarkeit vorzutäuschen.
- Alte Hosts nicht erneut als primäre öffentliche URL bewerben.
