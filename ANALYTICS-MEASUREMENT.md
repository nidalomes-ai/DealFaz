# DEALFAZ – Analytics-Messlogik

Stand: 31.08.2026

## Aktueller Launch-Status

Die öffentliche DEALFAZ-Hauptseite sendet derzeit **keine DEALFAZ-eigenen Pageview- oder Marktplatz-Klick-Trackingrequests** an Supabase oder einen anderen externen Analytics-Endpunkt. Das frühere Messmodul ist für den Launch pausiert; die Datei `analytics.js` übernimmt aktuell nur UI-/Sicherheits-Hilfslogik und erzeugt keine Reichweitenmessung.

Damit gilt für den aktuellen Launch: Aus DEALFAZ selbst werden derzeit keine neuen Reichweitenzahlen erzeugt. Hosting-/Sicherheitslogs der Infrastrukturbetreiber bleiben hiervon unberührt.

## Historische Messlogik

Frühere aggregierte Requests/Ereignisse waren **keine eindeutigen Besucher**, keine verifizierten Menschen und keine Reichweitengarantie.

Für historische Messungen galten nur diese neutralen Klassen:

- `bot_or_preview`: User-Agent, Kampagnenparameter oder technische Kennzeichen passten zu bekannten Bots, Crawlers, Social-Previews, Automatisierung oder internen Tests.
- `non_bot_or_preview_ua`: In der verwendeten Heuristik wurde kein solcher Bot-/Preview-Hinweis erkannt.

`non_bot_or_preview_ua` bedeutet ausdrücklich **nicht**, dass ein echter Mensch oder ein eindeutiger Besucher verifiziert wurde. User-Agents können fehlen, falsch sein oder manipuliert werden.

Die frühere Bezeichnung `likely_human` wurde am 27.08.2026 ohne Änderung der Request-Zahlen in `non_bot_or_preview_ua` umbenannt. Die Zählwerte wurden nicht erhöht, gelöscht oder als Nutzerzahlen umgedeutet.

## Verbindliche Reporting-Regeln

- Nur tatsächlich vorhandene Messwerte verwenden.
- **Niemals aus diesen Aggregaten** `Unique Visitors`, `echte Besucher` oder `Menschen` ableiten.
- Niemals nicht gemessene Reichweite schätzen oder als echte Zahl ausgeben.
- Bot-/Preview-Werte getrennt ausweisen, wenn sie für die Aussage relevant sind.
- Interne Tests nicht als Erfolg oder organischen Traffic darstellen.
- Keine Geräte-Fingerprints oder Cross-Site-Profile zur vermeintlichen Eindeutigkeit ergänzen.

## Datenschutz

Neue DEALFAZ-eigene Reichweitenmessung bleibt deaktiviert, bis der tatsächliche Datenfluss, die Rechtsgrundlage, Datenschutzhinweise und gegebenenfalls erforderliche Einwilligungsmechanismen vor Aktivierung erneut geprüft wurden.
