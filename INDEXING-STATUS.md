# DEALFAZ – Suchmaschinen-Indexierung

Stand: 31.08.2026

## Aktueller Status: 🟢 technisch startbereit

Öffentliche Hauptquelle:

> `https://dealfaz.dealfaz-social.workers.dev/`

Frühere Vercel-/Supabase-Frontendpfade sind nicht mehr die öffentliche Hauptquelle. Suchmaschinen entscheiden selbst über Crawl, Indexierung und Ranking; eine verzögerte Aufnahme ist kein technischer DEALFAZ-Fehler.

## Technisch erledigt

- [x] `robots.txt` vorhanden und verweist auf die aktuelle Sitemap
- [x] `sitemap.xml` enthält die aktuelle Hauptseite und die vier Wissensseiten
- [x] Canonical-Tags zeigen auf die Cloudflare-Produktion
- [x] Search-Engine-Verifikationsdatei vorhanden
- [x] IndexNow-Schlüssel auf dem Produktionshost erreichbar
- [x] IndexNow-Submission-Workflow aktiv
- [x] IndexNow am 31.08.2026 erfolgreich mit **HTTP 200** bestätigt
- [x] interne SEO-Seiten verlinken Impressum/Recht und den lokalen Datenschutzbereich
- [x] alte Supabase-Funktionslinks aus öffentlichen HTML-Seiten entfernt
- [x] Quality schützt gegen Rückfall auf alte Vercel-/GitHub-Pages-/Supabase-Public-Links
- [x] Live Health prüft Hauptseite, Assets, Sicherheits-Header, IndexNow-Key, SEO-Seiten und Sitemap gegen die Cloudflare-Produktion

## Externe Nachlaufkontrollen

- reale Indexierung der aktuellen Cloudflare-URLs in Suchmaschinen beobachten
- bei einem späteren Custom-Domain-Cutover Canonicals, Sitemap, OpenGraph, IndexNow und Webmaster-Tools gemeinsam umstellen

Diese Punkte sind Beobachtung bzw. spätere Cutover-Arbeit und keine fehlende technische Vorbereitung.

## Regeln

- Sitemap- und IndexNow-Einreichungen sind Hinweise an Suchmaschinen, keine Rankinggarantie.
- Indexierung, Positionen und Besucherzahlen werden nicht garantiert.
- Keine künstlichen Klicks, Bots oder automatisierten Suchanfragen verwenden, um Sichtbarkeit vorzutäuschen.
- Alte Hosts nicht erneut als primäre öffentliche URL bewerben.

## Ergebnis

**SEO-/Indexierungs-Technik: 🟢 grün.**

**IndexNow: 🟢 HTTP 200 bestätigt.**

**Tatsächliche Suchmaschinenaufnahme: externe Beobachtung.**
