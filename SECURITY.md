# DINAVO Security Policy

DINAVO soll sicher, datensparsam und transparent betrieben werden.

## Sicherheitsproblem melden

Bitte veröffentliche ausnutzbare Sicherheitsdetails, persönliche Daten, Tokens, Zugangsdaten oder andere sensible Informationen **nicht** in einem öffentlichen GitHub-Issue.

Nutze stattdessen die Kontaktmöglichkeit, die auf der jeweils aktuellen öffentlichen DINAVO-Seite im Impressum bzw. in den Datenschutzhinweisen angegeben ist.

Bitte beschreibe möglichst:

- betroffene DINAVO-Version oder URL
- beobachtetes Verhalten
- erwartetes Verhalten
- reproduzierbare Schritte ohne Zugriff auf fremde Daten
- mögliche Auswirkung

## Geltungsbereich

Relevant sind insbesondere:

- unerwartete Offenlegung lokal gespeicherter Deal-Daten
- Cross-Site-Scripting oder Script-Injection
- Umgehung vorgesehener Eingabegrenzen
- versehentlich veröffentlichte Secrets oder Tokens
- unsichere Weiterleitungen
- ungewollte Übermittlung von Produkt-/Formulardaten
- Manipulation der DealScore-Berechnung durch nicht vorgesehene Eingaben

## Nicht erwünscht

- Zugriff auf Daten anderer Personen
- Social Engineering
- Denial-of-Service-/Lasttests gegen Produktionsdienste
- automatisierte Massenscans, die den Dienst belasten
- Umgehung von Sicherheitsmechanismen externer Plattformen
- Veröffentlichung sensibler Daten als Beweis

## Umgang mit Meldungen

Sicherheitsmeldungen werden nach technischer Auswirkung und tatsächlicher Ausnutzbarkeit priorisiert. Eine Meldung bedeutet nicht automatisch, dass eine Schwachstelle bestätigt ist.

## Automatische Kontrollen

Das öffentliche Repository enthält automatisierte Qualitätskontrollen unter anderem für:

- DealScore-Regressionsfälle
- veraltete Frontend-URLs
- zentrale Rechts-/Transparenzhinweise
- offensichtliche Secret-Muster
- vorbereitete Sicherheitsheader

**Keine Sicherheitsgarantie:** Auch mit diesen Kontrollen können Fehler vorkommen. DINAVO wird deshalb schrittweise und mit möglichst geringer Datenspeicherung aufgebaut.
