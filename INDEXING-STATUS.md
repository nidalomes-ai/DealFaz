# DINAVO – Suchmaschinen-Indexierung

Stand: 07.09.2026

## Aktueller Pre-Gewerbe-Status: 🟢 GRÜN technisch

Öffentliche Hauptquelle:

> `https://dealfaz.dealfaz-social.workers.dev/`

Frühere Vercel-/Supabase-Frontendpfade sind nicht mehr die öffentliche Hauptquelle. Die alte Firebase-/DEALFAZ-Seite ist jedoch noch erreichbar und indexierbar. Ihre permanente Weiterleitung ist vorbereitet, aber noch nicht veröffentlicht. Suchmaschinen entscheiden anschließend selbst über Crawl, Indexierung und Ranking.

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

## 🔴 Vor Veröffentlichung offen

- aktualisierten Cloudflare-Stand veröffentlichen
- alte Firebase-Seite separat auf die vorbereitete 301-Weiterleitung umstellen
- anschließend prüfen, dass alte DEALFAZ-Routen kein PostHog und keine indexierbaren Inhalte mehr ausliefern

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

**Öffentliche Bereinigung: 🔴 Cloudflare-Update und Firebase-Stilllegung ausstehend.**

**Tatsächliche Suchmaschinenaufnahme: externe Beobachtung, kein aktueller gelber Punkt.**
