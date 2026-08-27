# DEALFAZ – Release-Gate

Stand: 27.08.2026

Diese Checkliste ist die Mindestanforderung für eine neue öffentliche DEALFAZ-Hauptversion. Ein öffentlicher kostenloser Release und ein Monetarisierungs-Release sind bewusst getrennt.

Legende: `[x]` ist durch Repository-, CI-, Live- oder reproduzierbare Browser-Prüfung nachgewiesen. Externe Vorgänge, die erst nach Veröffentlichung oder nach einem späteren Monetarisierungsstart entstehen können, stehen bewusst außerhalb des kostenlosen Beta-Gates.

## 1. Funktion

- [x] DealScore-Regressionstests erfolgreich
- [x] Verlustfall kann nicht als `KAUFEN` enden
- [x] schwache Evidenz kann ein starkes Rechenergebnis zu `DATEN PRÜFEN` begrenzen
- [x] Maximaler Einkaufspreis bleibt im getesteten gültigen Fall nicht negativ
- [x] Watchlist und persönliche Regeln sind ohne Nutzerkonto als lokale Browser-Funktionen umgesetzt
- [x] Teilen/Kopieren legt die Dealwerte im URL-Fragment statt im Server-Querystring ab

## 2. Daten & Marktquellen

- [x] Rechner verwendet Nutzereingaben statt erfundener Live-Marktwerte
- [x] keine unerlaubten Scraper oder Login-/Paywall-Umgehungen im öffentlichen Kernablauf
- [x] keine Umgehung von Logins, Zugangsbeschränkungen oder technischen Schutzmaßnahmen wird angeboten
- [x] aktive Angebote und Verkaufsbelege werden fachlich getrennt behandelt
- [x] externe Plattformen werden als Originalquellen bezeichnet
- [x] keine Partnerschaft/Zertifizierung wird auf der Live-Seite behauptet, wenn sie nicht tatsächlich aktiv ist

## 3. Recht & Datenschutz

- [x] tatsächliche Anbieterkennzeichnung/Impressum auf der Live-Seite vorhanden
- [x] Datenschutzhinweise beschreiben den aktuellen Cloudflare-/Local-Storage-Betrieb
- [x] keine Gewinn-, Verkaufs-, Preis- oder Marktentwicklungsgarantie
- [x] Affiliate-/Partnerlinks bleiben gesperrt, solange der Monetarisierungs-Release nicht freigegeben ist
- [x] Deal-/Watchlist-/Regeldaten werden in dieser Version nicht unnötig zentral gespeichert
- [x] lokale Speicherung transparent erklärt
- [x] externe Plattformen werden als eigenständige Originalquellen behandelt
- [x] Verbraucherstreitbeilegungs-Hinweis sichtbar

## 4. Technik & Sicherheit

- [x] öffentliche Hauptseite liefert HTTP 200
- [x] öffentliche Hauptseite liefert `text/html`
- [x] HTTPS aktiv
- [x] CI-Prüfung findet keine offensichtlichen Secret-Muster im öffentlichen Repository
- [x] `X-Content-Type-Options: nosniff`
- [x] sichere Referrer-Policy
- [x] unnötige Kamera-/Mikrofon-/Standortrechte in der Header-Konfiguration deaktiviert
- [x] Clickjacking-Schutz gesetzt
- [x] Live Health erfolgreich
- [x] PostHog Error Tracking zeigt aktuell keine aktiven Fehler im 7-Tage-Fenster

## 5. SEO & Teilen

- [x] Canonical zeigt auf die aktuelle öffentliche Cloudflare-Hauptdomain
- [x] `og:url` zeigt auf die aktuelle öffentliche Cloudflare-Hauptdomain
- [x] lokales Social-Preview-Motiv vorhanden und auf Produktion erreichbar
- [x] Social-Preview als breit kompatibles PNG (1200×630) im Repository vorhanden und `og:image`/Twitter-Metadaten auf PNG umgestellt
- [x] Pre-Launch-Preview-Gate: verbreitet kompatibles Rasterformat, absolute HTTPS-URL, Bildtyp, Größe und Large-Image-Twitter-Card gesetzt
- [x] `robots.txt` verweist auf die richtige Sitemap
- [x] Sitemap enthält die aktuelle Hauptseite und die vier öffentlichen Wissensseiten
- [x] Manifest startet auf der Root-URL
- [x] keine alten Supabase-Funktionslinks in den öffentlichen HTML-Seiten
- [x] Quality schützt gegen Rückfall auf alte Vercel-/GitHub-Pages-/Supabase-Public-Links

Hinweis: Die tatsächliche Darstellung in einzelnen Social-Netzwerken wird nach dem ersten realen Post beobachtet. Das ist eine Post-Launch-Kontrolle und kein technischer Pre-Launch-Blocker, weil externe Plattformen ihre Preview-Caches selbst steuern.

## 6. Mobile & UX

- [x] Kernlayout in Chromium-Mobile-/Touch-Viewports 320 px, 375 px und 390 px ohne horizontales Scrollen praktisch geprüft
- [x] wichtigste Entscheidung auf kleinem Bildschirm vollständig im Viewport geprüft
- [x] zentrale Button-/Touch-Ziele praktisch geprüft; kleinste gemessene Höhe 46 px
- [x] zentrale Eingabefelder bleiben in allen drei geprüften Viewports vollständig sichtbar
- [x] Mobile-CTA ist in allen drei geprüften Viewports sichtbar
- [x] Formulare haben technische Grenzwerte für die zentralen Zahlenfelder
- [x] externe Marktlinks verwenden `noopener`/`noreferrer`
- [x] Texte machen deutlich, dass Marktwerte und Verkaufsaussichten auf Nutzereingaben/Annahmen beruhen

Details: `MOBILE-QA.md`. Ein zusätzlicher physischer iPhone-Smoke-Test ist sinnvoll, aber kein technischer Blocker für die kostenlose Beta.

## 7. Kostenloser öffentlicher Launch

- [x] öffentlicher Hauptlink funktioniert
- [x] Launch-Kit zeigt auf die aktuelle Cloudflare-Version
- [x] Social-Post-Ziel-URL und Preview-Metadaten sind vor Veröffentlichung technisch vorbereitet
- [x] technische Selbsttests werden nicht als echte Nutzer ausgegeben
- [x] Reichweiten-/Eventzahlen werden nicht als eindeutige Besucher behauptet
- [x] Bots/Testaufrufe dürfen nicht als echte Reichweite kommuniziert werden
- [x] `MONETIZATION_DISABLED` bleibt vorhanden, solange die Monetarisierungsfreigabe fehlt
- [x] kostenlose Beta bleibt ohne aktive Affiliate-Tags und ohne Partnerprovisionsbehauptungen

Post-Launch-Kontrollen wie der tatsächliche Social-Preview-Cache oder die Suchmaschinen-Indexierung werden beobachtet, aber nicht als vorab erzwingbare Release-Anforderung ausgegeben.

## 8. Zusätzlicher Monetarisierungs-Release

Dieser Abschnitt ist **nicht Teil des kostenlosen Beta-Gates**. Erst wenn später tatsächlich monetarisiert werden soll und **alle** folgenden Punkte erfüllt sind, darf `MONETIZATION_DISABLED` in einem bewussten Release-Commit entfernt werden:

- [ ] finaler geschäftskritischer Produktionshost bzw. Custom Domain/Route festgelegt
- [ ] Gewerbe-/Betreiberstatus ist rechtlich sauber geklärt und erforderliche Anmeldung erledigt
- [ ] steuerliche Erfassung ist fristgerecht erledigt bzw. rechtskonform eingeleitet/abgeschlossen
- [ ] USt-IdNr./EU-B2B-/Reverse-Charge-/ZM-Behandlung für den tatsächlichen Amazon-Sachverhalt geklärt
- [ ] Amazon-Partnerstatus und aktuelle Website-Zuordnung sind für den Monetarisierungsstart korrekt
- [ ] eBay-Partnerlinks erst nach bestätigter EPN-Freigabe
- [ ] Werbe-/Affiliate-Kennzeichnung entspricht exakt den tatsächlich aktiven Links
- [ ] Datenschutzhinweise entsprechen dem dann tatsächlich aktiven Hosting/Tracking/Affiliate-Datenfluss
- [ ] Marken-/Namens-Kollisionsprüfung ausreichend abgeschlossen und dokumentiert
- [ ] Affiliate-Tags werden erst nach bewusstem Entfernen des Monetarisierungs-Locks eingebaut
- [ ] kompletter Quality-, Live-Health- und Commercialization-Guard-Check unmittelbar vor Aktivierung erneut grün

Solange diese Punkte offen sind, ist die sichere Alternative bereits aktiv: kostenlose Nutzung, neutrale Originalquellen-Links und `MONETIZATION_DISABLED`.

## Aktueller Freigabestatus

**Kostenlose öffentliche Beta: GRÜN, sobald der aktuelle Commit erneut alle Quality-, Live-Health- und Commercialization-Guards besteht.**

**Monetarisierung: bewusst gesperrt / nicht Teil dieses Beta-Releases.** Externe Gewerbe-, Steuer-, Amazon-, eBay-, Hosting- und Marken-Gates werden nicht übersprungen.

**Grundsatz:** Rechtlich vertretbar → technisch stabil → transparent → messbar nützlich → erst dann monetarisieren.
