# DINAVO – Datenfluss und Datenschutzprinzipien

Diese Dokumentation beschreibt den technischen Datenfluss der aktuellen öffentlichen DINAVO-Version. Sie ist eine technische Transparenzdokumentation und ersetzt keine individuelle Rechtsberatung.

## Grundsatz

DINAVO ist derzeit als browserbasierte Reselling-Rechen- und Entscheidungshilfe ohne Nutzerkonto aufgebaut.

## Lokal gespeicherte Daten

Folgende Funktionen speichern Daten lokal im Browser des Nutzers:

- persönliche Kaufregeln
- Watchlist
- vorgemerkte Erwartungen
- tatsächliche Ergebnis-Historie

Diese Daten werden in der aktuellen Version nicht in eine zentrale DINAVO-Nutzerdatenbank hochgeladen.

Der Nutzer kann lokale Daten über die App-Funktionen oder durch Löschen der Website-/Browserdaten entfernen. Watchlist und Ergebnis-Historie können lokal als JSON bzw. CSV exportiert werden.

## Deal-Eingaben

Deal-Eingaben werden clientseitig im Browser verarbeitet. Die Rechenlogik läuft im ausgelieferten JavaScript der Seite.

## Hosting

Die öffentliche Website wird über Vercel bereitgestellt. Wie bei praktisch jedem Webhosting können dabei technisch notwendige Verbindungs- und Sicherheitsdaten durch den Hosting-Anbieter verarbeitet werden. Für dessen Verarbeitung gelten die jeweiligen Vercel-Datenschutzinformationen und vertraglichen Regelungen.

## Externe Originalquellen

DINAVO verlinkt auf Originalseiten wie Marktplätze oder Preisvergleichsdienste. Diese Seiten werden erst aufgerufen, wenn der Nutzer den entsprechenden Link öffnet. Dort gelten die Datenschutz-, Cookie- und Nutzungsregeln des jeweiligen Anbieters.

DINAVO baut keine kopierte Datenbank dieser fremden Angebote auf.

## Kein unerlaubtes Scraping

Die aktuelle Produktlinie verfolgt den Grundsatz:

- keine Umgehung von Logins
- keine Umgehung von Paywalls
- keine Umgehung technischer Schutzmaßnahmen
- kein unerlaubtes automatisiertes Kopieren fremder Angebotsdaten

## Tracking

Die aktuelle öffentliche DINAVO-Oberfläche setzt selbst keine Werbe- oder Marketing-Cookies ein. Zusätzliche Analytics- oder Tracking-Funktionen werden nicht ohne erneute technische und rechtliche Prüfung aktiviert.

## Teilen

Beim Teilen eines Deal-Checks werden die vom Nutzer gewählten Deal-Parameter als URL-Parameter weitergegeben. Nutzer sollten daher keine vertraulichen oder personenbezogenen Inhalte in das Produktfeld eintragen, wenn sie einen Link teilen möchten.

## Datenminimierung

Neue Funktionen sollen möglichst nach diesen Prioritäten gebaut werden:

1. lokale Verarbeitung
2. lokale Speicherung
3. nur notwendige Daten
4. keine zentrale Profilbildung ohne klaren Bedarf
5. keine Marketing- oder Werbetracker ohne gesonderte Prüfung

## Rechtliche Pflichtangaben

Anbieterinformationen und Datenschutzhinweise müssen auf der öffentlichen Seite leicht erreichbar bleiben. Änderungen an Hosting, Tracking, Nutzerkonten, Upload-Funktionen, Affiliate-Systemen oder zentraler Datenspeicherung lösen vor Veröffentlichung eine neue Rechts-/Datenschutzprüfung aus.
