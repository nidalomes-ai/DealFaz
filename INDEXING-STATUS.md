# DINAVO – Suchmaschinen-Indexierung

Stand: 10.09.2026

## Aktueller Pre-Gewerbe-Status: 🟢 GRÜN technisch

Öffentliche Hauptquelle:

> `https://dealfaz.dealfaz-social.workers.dev/`

Frühere Vercel-/Supabase-Frontendpfade sind nicht mehr die öffentliche Hauptquelle. Die alte Firebase-/DEALFAZ-Seite kann noch erreichbar und indexierbar sein; ihre permanente Weiterleitung auf Cloudflare ist vorbereitet. Suchmaschinen entscheiden selbst über Crawl, Indexierung und Ranking.

## Technisch erledigt

- [x] `robots.txt` vorhanden und verweist auf die aktuelle Sitemap
- [x] `sitemap.xml` enthält die aktuelle Hauptseite, vier Wissensseiten und drei rechtliche Seiten
- [x] Canonical-Tags zeigen auf die Cloudflare-Produktion
- [x] Search-Engine-Verifikationsdatei vorhanden
- [x] IndexNow-Schlüssel und Submission-Workflow vorhanden
- [x] IndexNow bereits erfolgreich angestoßen
- [x] Start- und Wissensseiten verlinken die eigenen Routen für Impressum, Datenschutz und Nutzungsbedingungen
- [x] alte Supabase-Funktionslinks aus öffentlichen HTML-Seiten entfernt
- [x] Quality schützt gegen Rückfall auf alte Vercel-/GitHub-Pages-/Supabase-Public-Links
- [x] Firebase-Retirement-Konfiguration mit permanenter Weiterleitung vorbereitet

## 🟢 Veröffentlichung

- Cloudflare-Stand ist öffentlich erreichbar
- Canonical, Sitemap, robots.txt und IndexNow sind gemeinsam auf Cloudflare ausgerichtet
- die separate Stilllegung alter Firebase-/DEALFAZ-Routen bleibt eine Legacy-Bereinigung und blockiert die aktuelle DINAVO-Beta nicht

## ⏸ Externe Nachlaufkontrollen – nicht gelb

- reale Indexierung der aktuellen Cloudflare-URLs in Suchmaschinen beobachten
- nach einem späteren bewussten Custom-Domain-/Route-Cutover Canonicals/Sitemap/OG-Daten gemeinsam umstellen
- anschließend Sitemap und URL-Prüfung in Webmaster-Tools auf die neue Domain ausrichten

Diese Punkte sind Beobachtung bzw. spätere Cutover-Arbeit und keine fehlende technische Vorbereitung.

## Regeln

- Sitemap-Einreichung ist nur ein Hinweis an Suchmaschinen.
- Indexierung, Positionen und Besucherzahlen werden nicht garantiert.
- Keine künstlichen Klicks, Bots oder automatisierten Suchanfragen verwenden, um Sichtbarkeit vorzutäuschen.
- Alte Hosts nicht erneut als primäre öffentliche URL bewerben.

## Ergebnis

**Lokale SEO-/Indexierungs-Technik: 🟢 vorbereitet.**

**Öffentliche DINAVO-Beta: 🟢 auf Cloudflare veröffentlicht.**

**Tatsächliche Suchmaschinenaufnahme: externe Beobachtung, kein aktueller gelber Punkt.**
