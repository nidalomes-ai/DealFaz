# DEALFAZ – Social-Publishing-Limit

Stand: 27.08.2026

## Feste Regel

- Metricool Free: maximal 20 Veröffentlichungen pro Monat.
- Keine kostenpflichtige Erweiterung.
- Keine neuen Posts anlegen, wenn das Monatslimit erreicht ist.
- Bestehende geplante Posts dürfen korrigiert werden, sofern dadurch keine zusätzliche Veröffentlichung entsteht.
- Entwürfe zählen nicht als freigegebene Veröffentlichung und werden nicht automatisch aktiviert.
- Fehlgeschlagene Veröffentlichungen wegen Kontolimit werden nicht durch zusätzliche Ersatzposts umgangen.

## August 2026

- Monatslimit ist erreicht.
- Ein Instagram/TikTok-Versuch zeigt bereits `You have reached your Metricool account limit.`
- Deshalb: keine zusätzlichen August-Veröffentlichungen mehr anlegen.

## September 2026

- Bestehende September-Planung beibehalten.
- Vor Aktivierung weiterer Entwürfe zuerst verbleibendes Monatskontingent prüfen.
- Harte Obergrenze: 20 Veröffentlichungen im Monat.

## Link-Hygiene

- Am 27.08.2026 wurden bestehende zukünftige Posts mit alten Supabase-/GitHub-Zielen soweit vom Planner akzeptiert auf aktuelle Cloudflare-Ziele umgestellt.
- Es wurden dafür keine neuen Posts erstellt und keine zusätzlichen Veröffentlichungsslots verbraucht.
- Ein einzelner Post am 27.08.2026 um 17:00 Uhr konnte wegen eines Planner-Validierungsfehlers nicht direkt geändert werden.
- Sichere Alternative aktiv: die bestehende öffentliche Supabase-Funktion `dealfaz-launch` wurde in Version 38 als Legacy-Redirect auf `https://dealfaz.dealfaz-social.workers.dev/` umgestellt.
- Die Funktion ist im verbundenen Supabase-Projekt als `ACTIVE` bestätigt; bestehende Unterseiten-/UTM-Weiterleitungslogik bleibt erhalten.
- Damit führt auch der nicht direkt editierbare alte Link auf die aktuelle DEALFAZ-Produktion, ohne einen weiteren Metricool-Post anzulegen.
