# DINAVO – Datenschutz-Architektur

Stand: 12.09.2026

Dieses Dokument beschreibt die technische Datenschutz-Idee hinter DINAVO. Es ersetzt keine gesetzlich erforderliche Datenschutzerklärung.

## Öffentliche Beta

Die aktuelle öffentliche Beta läuft über Cloudflare:

`https://dealfaz.dealfaz-social.workers.dev/`

Für die Kernnutzung ist kein DINAVO-Konto erforderlich.

## Lokale Speicherung

Deal-Daten, Watchlist, persönliche Regeln, Erwartungen und tatsächliche Ergebnisse werden in der aktuellen Version im Browser des Nutzers gespeichert. Dadurch muss DINAVO für diese Funktionen keine zentrale Nutzer-Datenbank mit Artikeln, Einkaufspreisen oder persönlichen Watchlists betreiben.

Lokale Daten können verloren gehen, wenn Browser- oder Website-Daten gelöscht werden.

## Keine Marketing-Cookies durch DINAVO-Kernfunktionen

Die aktuelle Beta setzt selbst keine Werbe- oder Cross-Site-Marketing-Cookies für den Kernablauf. Cloudflare und – bei Aufruf einer dort bereitgestellten Alt-/Alternativadresse – Vercel können technisch notwendige Verbindungs-, Sicherheits- und Protokolldaten zur Bereitstellung und Absicherung der Website verarbeiten.

## Einfache Seitenaufrufzählung

Die Seitenaufrufzählung sendet einen leeren Aufruf ausschließlich an die eigene DINAVO-Adresse. Der Server erzeugt eine neue Einmal-Kennung und übermittelt nur den Zählimpuls an PostHog EU. Besucher-IP, Request-Header, Referrer, URL-Parameter und Fragmente werden nicht weitergeleitet. Eine Einwilligungsabfrage ist deshalb nicht Teil der Oberfläche.

Produktnamen, freie Deal-Texte, Einkaufs-/Verkaufspreise und Watchlistinhalte werden nicht übertragen. Personenprofile, wiedererkennbare Besucher, Klickmessung und Sitzungswiedergaben sind technisch ausgeschlossen.

## Datenminimierung

DINAVO führt neue serverseitige Datenspeicherung nur ein, wenn sie für eine konkrete Funktion erforderlich und vor Aktivierung technisch/rechtlich geprüft ist. Wo eine Funktion sinnvoll lokal auf dem Gerät funktionieren kann, wird lokale Speicherung bevorzugt.

## Externe Plattformen

Beim Öffnen eines externen Marktplatzes verlässt der Nutzer DINAVO. Dort gelten die Datenschutz-, Cookie- und Nutzungsregeln der jeweiligen Plattform.

Die vom Nutzer eingetragene Artikelbezeichnung wird erst beim bewussten Öffnen als Suchbegriff in die Zieladresse der ausgewählten Plattform eingesetzt.

Die aktuellen Marktlinks sind neutrale Originalquellen. Affiliate-Monetarisierung bleibt deaktiviert, solange `MONETIZATION_DISABLED` aktiv ist.

## Teilen, Zwischenablage und Dateien

Geteilte Deal-Werte stehen im URL-Fragment hinter `#`. Sie werden beim normalen Seitenabruf nicht an den DINAVO-Server übertragen, sind aber für Empfänger des vollständigen Links und den ausgewählten Teilen-Dienst sichtbar. Kopieren erfolgt nur nach Nutzeraktion über die Geräte-Zwischenablage.

JSON-Backups und CSV-Exporte werden lokal erzeugt. Importierte JSON-Dateien werden nur im Browser gelesen und nicht an DINAVO hochgeladen.

## Alte Frontends

Frühere Vercel-, Firebase-, GitHub-Pages- oder Supabase-Frontendlinks sind keine aktuelle öffentliche Hauptquelle mehr. Datenschutz- und Launch-Dokumente sollen ausschließlich den tatsächlichen Live-Host als aktuelle Beta ausweisen.

## Uploads und Fotos

Eine spätere Foto- oder Screenshot-Funktion darf nur Inhalte verarbeiten, die der Nutzer selbst bereitstellt oder deren Verarbeitung anderweitig rechtlich zulässig ist. Zugangsbeschränkungen anderer Dienste dürfen nicht umgangen werden.

## Rechtliche Hinweise

Die tatsächliche Live-Beta enthält eigene Anbieter-, Datenschutz-, Haftungs- und Nutzungshinweise. Dieses Architektur-Dokument erklärt nur die technische Richtung.

[Öffentliche DINAVO-Beta öffnen](https://dealfaz.dealfaz-social.workers.dev/)
