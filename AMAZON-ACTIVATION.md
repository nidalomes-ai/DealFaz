# DEALFAZ – Amazon PartnerNet Aktivierungs-Gate

Stand: 27.08.2026

Amazon bleibt ein geplanter zentraler Monetarisierungskanal. Diese Datei beschreibt ausschließlich die kontrollierte Aktivierung. Solange `MONETIZATION_DISABLED` existiert, bleiben die öffentlichen Amazon-Links neutral und provisionsfrei.

## Vor Aktivierung zwingend grün

- [ ] kommerziell zulässiger Produktionshost aktiv
- [ ] öffentliche Produktion entspricht dem freigegebenen Repository-Stand
- [ ] Gewerbeanmeldung mit realen Angaben erledigt
- [ ] steuerliche Erfassung erledigt bzw. fristgerecht rechtskonform eingeleitet
- [ ] USt-IdNr./Reverse-Charge/ZM-Behandlung für Leistungen an Amazon Europe Core S.à r.l. geklärt und eingerichtet
- [ ] Amazon PartnerNet-Konto ohne relevante Einschränkung aktiv
- [ ] tatsächliche Website/Domain im PartnerNet-Konto korrekt hinterlegt, soweit nach aktuellem PartnerNet-Prozess erforderlich
- [ ] Datenschutzhinweise und Impressum passen zum tatsächlichen Produktionsbetrieb
- [ ] VSBG-Hinweis ist auf der öffentlichen Seite sichtbar
- [ ] Quality und Live Health grün

## Linkregeln bei Aktivierung

1. Nur direkte, regelkonforme Amazon-Partnerlinks verwenden.
2. Der Affiliate-Tag muss zum freigegebenen PartnerNet-Konto gehören.
3. Amazon-Ziel nicht durch eigene Shortener/Redirects verschleiern.
4. Werbe-/Affiliate-Charakter unmittelbar und verständlich am provisionsfähigen Inhalt kennzeichnen.
5. Auf der Website sichtbar halten: `Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.`
6. Keine Aussage, Amazon sponsere, zertifiziere, unterstütze oder empfehle DEALFAZ.
7. Partnerkennzeichnung muss dem tatsächlichen Linkzustand entsprechen: kein Partnerhinweis für neutrale Links und kein unmarkierter provisionsfähiger Link.

## Technische Release-Reihenfolge

1. `MONETIZATION_DISABLED` bleibt zunächst bestehen.
2. Produktionshost und Rechtstexte vollständig verifizieren.
3. Amazon-PartnerNet-/Steuer-Gates kontrollieren.
4. In einem bewussten Release-Commit:
   - Partnerlink-Erzeugung aktivieren;
   - klare Kennzeichnung ergänzen;
   - Amazon-Teilnahmehinweis ergänzen;
   - Tests auf korrekten `tag` und Zielhost ergänzen;
   - bisherige Neutralitäts-Checks durch Aktivierungs-Checks ersetzen;
   - `MONETIZATION_DISABLED` erst zuletzt entfernen.
5. Quality ausführen.
6. Preview prüfen.
7. Produktion deployen.
8. Live Health inklusive echter Amazon-Linkprüfung ausführen.
9. Erst nach erfolgreichem Live-Test organischen Traffic auf die monetarisierte Version lenken.

## Externe PartnerNet-Prüfung

Die bekannte PartnerNet-Kommunikation weist darauf hin, dass nach qualifizierten Verkäufen eine spätere Prüfung der verknüpften Website/Social-Präsenzen erfolgen kann. Deshalb wird die Aktivierung nicht als dauerhafte endgültige Freigabe missverstanden; DEALFAZ muss die PartnerNet-Regeln dauerhaft erfüllen.

Am 27.08.2026 wurde Amazon PartnerNet zusätzlich schriftlich um Bestätigung der geplanten Disclosure-/Linkstruktur und möglicher USt-IdNr.-Kontopflichten gebeten.
