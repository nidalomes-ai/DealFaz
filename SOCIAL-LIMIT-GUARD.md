# DINAVO – Social-Publishing-Limit

Stand: 08.09.2026

**Aktueller Sicherheitsstatus: 🟢 GRÜN.** Die aktive organische Veröffentlichung nutzt nur nachweislich erreichbare Kanäle. TikTok ist pausiert und kein Launch-Gate.

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

- Metricool zeigte bei der Live-Kontrolle am 07.09.2026 **10 von 20** verbrauchten Veröffentlichungen.
- Der für den 08.09.2026 vorgesehene Beitrag wird unabhängig vom externen Zustellstatus vorsorglich als verbraucht gerechnet. Damit gilt konservativ **11 von 20** und es bleiben höchstens neun freie Plätze.
- Alle weiteren Einträge bis einschließlich 30.09.2026 sind Entwürfe oder bereits abgeschlossene/fehlgeschlagene Altversuche; es besteht keine weitere automatische September-Veröffentlichung.
- Die alten DEALFAZ-Entwürfe mit Supabase-, GitHub- oder Vercel-Zielen bleiben inaktiv. Sie werden nicht gesammelt veröffentlicht.
- Vor Aktivierung weiterer Entwürfe zuerst verbleibendes Monatskontingent prüfen.
- Harte Obergrenze: 20 Veröffentlichungen im Monat.
- Fehlgeschlagene Plattformversuche werden nicht automatisch erneut angelegt. Vor einem einzelnen Wiederholungsversuch sind Restkontingent, Zielkonto, Link, Medienformat und Plattformkennzeichnung zu prüfen.

## Sichtbarkeit und Plattformstatus

- Stichproben aktueller Beiträge waren am 07.09.2026 auf Facebook, Instagram und LinkedIn ohne Anmeldung öffentlich lesbar.
- Das öffentliche TikTok-Profil `@dealfaz` war erreichbar, zeigte aber 0 Beiträge. Die kombinierten Instagram-/TikTok-Versuche wurden nur auf Instagram veröffentlicht; TikTok meldete in Metricool einen Fehler. Sichere Ersatzroute: TikTok bleibt pausiert, wird nicht als aktiver DINAVO-Kanal beworben und erzeugt keine Wiederholungs- oder Zusatzposts. Der organische Beta-Start läuft über Facebook, Instagram und LinkedIn.
- Beim geprüften TikTok-Entwurf war die Metricool-Option `Kommerzielle Inhalte` nicht aktiviert, obwohl DINAVO als eigene Beta beworben wird. Vor einem neuen TikTok-Versuch muss die Offenlegung für die eigene Marke aktiviert werden.
- `Mit Fehlern` in Metricool bezeichnet einen Veröffentlichungsfehler. Daraus folgt kein nachgewiesener Strike oder eine Kontosanktion; ein echter Accountstatus muss direkt in der jeweiligen Plattform geprüft werden.
- Meta Ads, Google Ads und TikTok Ads sind in Metricool nicht verbunden. Es laufen dort keine bezahlten Kampagnen.

Damit sind Veröffentlichungsgrenze, Werbesicherheit und die Auswahl funktionsfähiger Startkanäle grün. Eine spätere TikTok-Aktivierung ist eine optionale Neuprüfung und kein aktueller gelber Punkt.

## Link-Hygiene

- Am 27.08.2026 wurden bestehende zukünftige Posts mit alten Supabase-/GitHub-Zielen soweit vom Planner akzeptiert auf aktuelle Cloudflare-Ziele umgestellt.
- Es wurden dafür keine neuen Posts erstellt und keine zusätzlichen Veröffentlichungsslots verbraucht.
- Ein einzelner Post am 27.08.2026 um 17:00 Uhr konnte wegen eines Planner-Validierungsfehlers nicht direkt geändert werden.
- Sichere Alternative aktiv: die bestehende öffentliche Supabase-Funktion `dealfaz-launch` wurde in Version 38 als Legacy-Redirect auf `https://dealfaz.dealfaz-social.workers.dev/` umgestellt.
- Die Funktion ist im verbundenen Supabase-Projekt als `ACTIVE` bestätigt; bestehende Unterseiten-/UTM-Weiterleitungslogik bleibt erhalten.
- Damit führt auch der nicht direkt editierbare alte Link auf die aktuelle DINAVO-Produktion, ohne einen weiteren Metricool-Post anzulegen.
