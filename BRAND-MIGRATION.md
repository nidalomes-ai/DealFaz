# MESIQO – Umstellung von DealFaz

Stand: 28.08.2026

## Festgelegt

- Neuer Marken- und Seitenname: **MESIQO**
- Schreibweise: immer in Großbuchstaben im Logo, normal als `MESIQO` im Text
- Kurzbeschreibung: **Deal einfach prüfen**
- Kernbotschaft: **Drei Angaben. Eine klare Rechnung.**
- Farben: Dunkelblau `#09111f`, Weiß und Akzentgrün `#86efac`

## Technisch umgesetzt

- sichtbarer Name, Seitentitel, Metadaten und strukturierte Daten
- Hauptseite und vier Wissensseiten
- Impressum-, Datenschutz-, Nutzungs- und Haftungstexte
- App-Manifest, App-Icon, Social-Card und Teilen-Texte
- Exportdateien mit `mesiqo-`-Präfix
- neue LocalStorage-Schlüssel mit automatischer Übernahme vorhandener DealFaz-Daten
- Dokumentation, Launch-Unterlagen und automatische Qualitätsprüfungen
- alter Produktionslink bleibt während der Übergangsphase erreichbar

## Externe Sicherungen

Diese Schritte benötigen jeweils den betreffenden Anbieter-Account oder eine kostenpflichtige Registrierung und werden nicht durch eine reine Codeänderung abgeschlossen:

1. `mesiqo.de` und `mesiqo.com` registrieren.
2. Zielnamen `@mesiqo` bei TikTok, Instagram, Facebook und weiteren genutzten Kanälen sichern; falls belegt, eine verfügbare kurze Variante wie `@mesiqoapp` prüfen.
3. Profile, Profilbilder, Biografien und Link-in-Bio von DealFaz auf MESIQO ändern.
4. Partnerprogramme über die Namensänderung informieren und Website-Zuordnungen erst nach dem Domain-Cutover ändern.
5. Wortmarkenanmeldung für die tatsächlich benötigten Waren und Dienstleistungen vorbereiten; voraussichtlich Klassen 9, 35 und 42 prüfen.

## Offenes Namens-Gate

Die technische Umstellung ist vollständig vorbereitet, aber noch nicht live. Vor der Veröffentlichung muss bewusst entschieden werden, ob das Ähnlichkeitsrisiko zu `MEDIQO` akzeptiert wird. Dokumentiert sind eine aktive Unionsmarke `MEDIQO LINE`, eine aktive Schweizer MEDIQO-Gesellschaft, ein australischer Gesundheitssoftware-Anbieter und ein noch nicht abschließend verifizierter US-Geschäftshinweis `Mesiqo Control LLC`.

Ohne diese Entscheidung wird der Prüfzweig nicht in den öffentlichen Hauptzweig übernommen.

## Geplanter Domain-Cutover

Nach erfolgreicher Domainregistrierung werden in einem gemeinsamen Schritt aktualisiert:

- Cloudflare-Domain/Route und Redirect vom alten Host
- Canonical-, OpenGraph- und Schema-URLs
- Sitemap, robots.txt und IndexNow
- Social-Profile und bereits kontrollierbare Profil-Links
- Partnerprogramm-Webseiten
- Datenschutzhinweise zum tatsächlichen Host
- Live-Health- und Qualitätsprüfungen

Der alte DealFaz-Link soll anschließend dauerhaft auf MESIQO weiterleiten, damit vorhandene Posts und gespeicherte Links nicht verloren gehen.
