# DINAVO – Datenschutz-Architektur

Stand: 27.08.2026

Dieses Dokument beschreibt die technische Datenschutz-Idee hinter DINAVO. Es ersetzt keine gesetzlich erforderliche Datenschutzerklärung.

## Öffentliche Beta

Die aktuelle öffentliche Beta läuft über Cloudflare:

`https://dealfaz.dealfaz-social.workers.dev/`

Für die Kernnutzung ist kein DINAVO-Konto erforderlich.

## Lokale Speicherung

Deal-Daten, Watchlist, persönliche Regeln, Erwartungen und tatsächliche Ergebnisse werden in der aktuellen Version im Browser des Nutzers gespeichert. Dadurch muss DINAVO für diese Funktionen keine zentrale Nutzer-Datenbank mit Artikeln, Einkaufspreisen oder persönlichen Watchlists betreiben.

Lokale Daten können verloren gehen, wenn Browser- oder Website-Daten gelöscht werden.

## Keine Marketing-Cookies durch DINAVO-Kernfunktionen

Die aktuelle Beta setzt selbst keine Werbe- oder Cross-Site-Marketing-Cookies für den Kernablauf. Cloudflare kann unabhängig davon technisch notwendige Verbindungs-, Sicherheits- und Protokolldaten zur Bereitstellung und Absicherung der Website verarbeiten.

## Keine eigene Reichweitenmessung

Die aktuelle Beta lädt kein DINAVO-Analytics-, Werbe- oder Marketing-Skript. Es werden daher weder Produktnamen oder freie Deal-Texte noch Einkaufs-/Verkaufspreise, Watchlistinhalte oder dauerhafte Tracking-IDs an ein DINAVO-Messsystem übertragen. Technisch erforderliche Hosting- und Sicherheitsprotokolle von Cloudflare bleiben davon unberührt.

Eine spätere Reichweitenmessung darf erst nach einer neuen technischen und datenschutzrechtlichen Prüfung aktiviert werden. Datenschutzhinweise und Einwilligungslogik müssen dann dem tatsächlich eingesetzten System entsprechen.

## Datenminimierung

DINAVO führt neue serverseitige Datenspeicherung nur ein, wenn sie für eine konkrete Funktion erforderlich und vor Aktivierung technisch/rechtlich geprüft ist. Wo eine Funktion sinnvoll lokal auf dem Gerät funktionieren kann, wird lokale Speicherung bevorzugt.

## Externe Plattformen

Beim Öffnen eines externen Marktplatzes verlässt der Nutzer DINAVO. Dort gelten die Datenschutz-, Cookie- und Nutzungsregeln der jeweiligen Plattform.

Die aktuellen Marktlinks sind neutrale Originalquellen. Affiliate-Monetarisierung bleibt deaktiviert, solange `MONETIZATION_DISABLED` aktiv ist.

## Alte Frontends

Frühere Vercel-, GitHub-Pages- oder Supabase-Frontendlinks sind keine aktuelle öffentliche Hauptquelle mehr. Datenschutz- und Launch-Dokumente sollen ausschließlich den tatsächlichen Live-Host als aktuelle Beta ausweisen.

## Uploads und Fotos

Eine spätere Foto- oder Screenshot-Funktion darf nur Inhalte verarbeiten, die der Nutzer selbst bereitstellt oder deren Verarbeitung anderweitig rechtlich zulässig ist. Zugangsbeschränkungen anderer Dienste dürfen nicht umgangen werden.

## Rechtliche Hinweise

Die tatsächliche Live-Beta enthält eigene Anbieter-, Datenschutz-, Haftungs- und Nutzungshinweise. Dieses Architektur-Dokument erklärt nur die technische Richtung.

[Öffentliche DINAVO-Beta öffnen](https://dealfaz.dealfaz-social.workers.dev/?utm_source=github&utm_medium=referral&utm_campaign=privacy_architecture&utm_content=public_beta)
