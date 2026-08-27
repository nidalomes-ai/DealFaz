# DEALFAZ – Analytics-Messlogik

Stand: 27.08.2026

## Zweck

DEALFAZ misst nur aggregierte Requests/Ereignisse zur technischen und inhaltlichen Auswertung. Diese Zahlen sind **keine eindeutigen Besucher**, keine verifizierten Menschen und keine Reichweitengarantie.

## Traffic-Klassen

Für neue Messungen gelten nur diese neutralen Klassen:

- `bot_or_preview`: User-Agent, Kampagnenparameter oder technische Kennzeichen passen zu bekannten Bots, Crawlers, Social-Previews, Automatisierung oder internen Tests.
- `non_bot_or_preview_ua`: In der verwendeten Heuristik wurde kein solcher Bot-/Preview-Hinweis erkannt.

`non_bot_or_preview_ua` bedeutet ausdrücklich **nicht**, dass ein echter Mensch oder ein eindeutiger Besucher verifiziert wurde. User-Agents können fehlen, falsch sein oder manipuliert werden.

## Historische Daten

Die frühere Bezeichnung `likely_human` wurde am 27.08.2026 ohne Änderung der Request-Zahlen in `non_bot_or_preview_ua` umbenannt. Die Zählwerte wurden nicht erhöht, gelöscht oder als Nutzerzahlen umgedeutet.

## Verbindliche Reporting-Regeln

- Nur `Requests`, `Events`, `Aufrufe nach Heuristik` oder vergleichbar präzise Begriffe verwenden.
- Niemals aus diesen Aggregaten `Unique Visitors`, `echte Besucher` oder `Menschen` ableiten.
- Bot-/Preview-Werte getrennt ausweisen, wenn sie für die Aussage relevant sind.
- Interne Tests nicht als Erfolg oder organischen Traffic verkaufen.
- Keine Geräte-Fingerprints oder Cross-Site-Profile zur vermeintlichen Eindeutigkeit ergänzen.

## Datenschutz

Die bestehende Aggregation bleibt auf Tag, Event/Pfad, Traffic-Klasse sowie Quelle/Kampagne/Inhalt beschränkt. Suchbegriffe oder Deal-Inhalte sollen nicht zur Besucherprofilbildung gespeichert werden.
