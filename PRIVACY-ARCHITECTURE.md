# DEALFAZ – Datenschutz-Architektur

Dieses Dokument beschreibt die technische Datenschutz-Idee hinter DEALFAZ. Es ersetzt keine gesetzlich erforderliche Datenschutzerklärung.

## Öffentliche Demo

Die aktuelle öffentliche Demo läuft über Vercel. Für die Kernnutzung ist kein DEALFAZ-Konto erforderlich.

## Lokale Speicherung

Deal-Daten der öffentlichen Demo werden im Browser des Nutzers gespeichert. Dadurch muss DEALFAZ für diese Funktion keine zentrale Nutzer-Datenbank mit Produkten, Einkaufspreisen oder persönlichen Watchlists betreiben.

Lokale Daten können verloren gehen, wenn Browser- oder Website-Daten gelöscht werden.

## Keine Marketing-Cookies durch DEALFAZ-Kernfunktionen

Die aktuelle Demo setzt selbst keine Werbe- oder Cross-Site-Marketing-Cookies. Hosting-Anbieter können unabhängig davon technisch notwendige Verbindungs- und Sicherheitsdaten verarbeiten.

## Messung

Für Weiterleitungen zu öffentlichen DEALFAZ-Seiten kann ein eigener aggregierter Ereigniszähler verwendet werden. Dabei sollen nur technische Ereignisse wie Quelle, Kampagne und Seitenpfad erfasst werden – nicht Produktnamen, Formulareingaben oder eine persönliche DEALFAZ-Nutzer-ID.

Bots, Vorschau-Crawler und interne Selbsttests werden soweit möglich getrennt von wahrscheinlichen menschlichen Aufrufen gezählt.

## Datenminimierung

DEALFAZ soll neue serverseitige Datenspeicherung nur dann einführen, wenn sie für eine konkrete Funktion erforderlich ist. Wo eine Funktion sinnvoll lokal auf dem Gerät funktionieren kann, wird lokale Speicherung bevorzugt.

## Externe Plattformen

Beim Öffnen eines externen Marktplatzes verlässt der Nutzer DEALFAZ. Dort gelten die Datenschutz-, Cookie- und Nutzungsregeln der jeweiligen Plattform.

## Uploads und Fotos

Eine spätere Foto- oder Screenshot-Funktion darf nur Inhalte verarbeiten, die der Nutzer selbst bereitstellt oder deren Verarbeitung anderweitig rechtlich zulässig ist. Zugangsbeschränkungen anderer Dienste dürfen nicht umgangen werden.

## Rechtliche Hinweise

Die tatsächliche Live-Demo enthält eigene Anbieter-, Datenschutz-, Haftungs- und Nutzungshinweise. Dieses Architektur-Dokument erklärt nur die technische Richtung.

[Öffentliche DEALFAZ-Demo öffnen](https://iosghttnctdaociwltos.supabase.co/functions/v1/dealfaz-start?utm_source=github&utm_medium=referral&utm_campaign=privacy_architecture&utm_content=public_demo)
