# MESIQO – Datenschutz-Architektur

Stand: 27.08.2026

Dieses Dokument beschreibt die technische Datenschutz-Idee hinter MESIQO. Es ersetzt keine gesetzlich erforderliche Datenschutzerklärung.

## Öffentliche Beta

Die aktuelle öffentliche Beta läuft über Cloudflare:

`https://dealfaz.dealfaz-social.workers.dev/`

Für die Kernnutzung ist kein MESIQO-Konto erforderlich.

## Lokale Speicherung

Deal-Daten, Watchlist, persönliche Regeln, Erwartungen und tatsächliche Ergebnisse werden in der aktuellen Version im Browser des Nutzers gespeichert. Dadurch muss MESIQO für diese Funktionen keine zentrale Nutzer-Datenbank mit Artikeln, Einkaufspreisen oder persönlichen Watchlists betreiben.

Lokale Daten können verloren gehen, wenn Browser- oder Website-Daten gelöscht werden.

## Keine Marketing-Cookies durch MESIQO-Kernfunktionen

Die aktuelle Beta setzt selbst keine Werbe- oder Cross-Site-Marketing-Cookies für den Kernablauf. Cloudflare kann unabhängig davon technisch notwendige Verbindungs-, Sicherheits- und Protokolldaten zur Bereitstellung und Absicherung der Website verarbeiten.

## Messung

MESIQO darf aggregierte technische Ereignisse nach Tag, Quelle/Kampagne, Ereignistyp und grober Bot-/Preview-Klassifizierung auswerten, soweit dies dem tatsächlich eingesetzten Messsystem entspricht.

Nicht als zentraler Analytics-Inhalt vorgesehen sind insbesondere:

- Produktnamen oder freie Deal-Texte
- Einkaufs-/Verkaufspreise aus dem Rechner
- Watchlistinhalte
- eine von MESIQO erzeugte dauerhafte persönliche Nutzer-ID nur zum Tracking

Eine technische Klassifizierung wie `non_bot_or_preview_ua` ist **keine Feststellung einer natürlichen Person** und darf nicht als Zahl eindeutiger realer Besucher bezeichnet werden.

## Datenminimierung

MESIQO führt neue serverseitige Datenspeicherung nur ein, wenn sie für eine konkrete Funktion erforderlich und vor Aktivierung technisch/rechtlich geprüft ist. Wo eine Funktion sinnvoll lokal auf dem Gerät funktionieren kann, wird lokale Speicherung bevorzugt.

## Externe Plattformen

Beim Öffnen eines externen Marktplatzes verlässt der Nutzer MESIQO. Dort gelten die Datenschutz-, Cookie- und Nutzungsregeln der jeweiligen Plattform.

Die aktuellen Marktlinks sind neutrale Originalquellen. Affiliate-Monetarisierung bleibt deaktiviert, solange `MONETIZATION_DISABLED` aktiv ist.

## Alte Frontends

Frühere Vercel-, GitHub-Pages- oder Supabase-Frontendlinks sind keine aktuelle öffentliche Hauptquelle mehr. Datenschutz- und Launch-Dokumente sollen ausschließlich den tatsächlichen Live-Host als aktuelle Beta ausweisen.

## Uploads und Fotos

Eine spätere Foto- oder Screenshot-Funktion darf nur Inhalte verarbeiten, die der Nutzer selbst bereitstellt oder deren Verarbeitung anderweitig rechtlich zulässig ist. Zugangsbeschränkungen anderer Dienste dürfen nicht umgangen werden.

## Rechtliche Hinweise

Die tatsächliche Live-Beta enthält eigene Anbieter-, Datenschutz-, Haftungs- und Nutzungshinweise. Dieses Architektur-Dokument erklärt nur die technische Richtung.

[Öffentliche MESIQO-Beta öffnen](https://dealfaz.dealfaz-social.workers.dev/?utm_source=github&utm_medium=referral&utm_campaign=privacy_architecture&utm_content=public_beta)
