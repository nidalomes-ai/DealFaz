# DEALFAZ – Amazon PartnerNet Aktivierungs-Gate

Stand: 27.08.2026

Amazon bleibt ein geplanter Monetarisierungskanal. Solange `MONETIZATION_DISABLED` existiert, bleiben die öffentlichen Amazon-Links neutral und provisionsfrei.

## Aktueller Status

- [x] erste Amazon-PartnerNet-Teilnahmebestätigung am 24.08.2026 eingegangen
- [x] Steuer-/Zahlungsinformationen im PartnerNet-Konto wurden eingerichtet bzw. geändert; Bestätigungs-E-Mail liegt vor
- [x] direkte neutrale Amazon-Suche ist technisch vorhanden, ohne Affiliate-Tag
- [x] geplante Affiliate-Kennzeichnung ist dokumentiert
- [x] Amazon wurde am 27.08.2026 zusätzlich zu Disclosure-/Linkstruktur und möglicher USt-IdNr.-Kontopflicht angeschrieben
- [ ] konkrete Antwort auf diese Zusatzfrage auswerten
- [ ] Gewerbe-/Steuer-Gates erfüllen
- [ ] finalen kommerziellen Produktionshost bzw. Custom Domain/Route festlegen
- [ ] tatsächliche Website/Domain zum Aktivierungszeitpunkt im PartnerNet-Konto korrekt hinterlegen
- [ ] spätere Amazon-Prüfung der verknüpften Präsenz erfolgreich durchlaufen

Die erste Teilnahmebestätigung ist deshalb **nicht** gleichbedeutend mit einer dauerhaften endgültigen Freigabe für DealFaz.

## Vor Affiliate-Aktivierung zwingend grün

- [ ] Gewerbeanmeldung zum tatsächlichen gewerblichen Start erledigt
- [ ] steuerliche Erfassung erledigt bzw. fristgerecht eingeleitet
- [ ] USt-IdNr./Reverse-Charge/ZM-Behandlung für Leistungen an Amazon Europe Core S.à r.l. geklärt und eingerichtet
- [ ] finaler Produktionshost für den kommerziellen Betrieb festgelegt
- [ ] öffentliche Produktion entspricht dem freigegebenen Repository-Stand
- [ ] Amazon PartnerNet-Konto ohne relevante Aktivierungsbeschränkung nutzbar
- [ ] tatsächliche Website/Domain im PartnerNet-Konto korrekt hinterlegt
- [x] Impressum und Datenschutzhinweise auf der öffentlichen Seite vorhanden
- [x] VSBG-Hinweis auf der öffentlichen Seite sichtbar
- [ ] Quality und Live Health unmittelbar vor Aktivierung erneut grün

## Linkregeln bei Aktivierung

1. Nur direkte regelkonforme Amazon-Partnerlinks verwenden.
2. Affiliate-Tag muss zum tatsächlich freigegebenen PartnerNet-Konto gehören.
3. Amazon-Ziel nicht durch eigene Shortener oder verschleiernde Redirects verstecken.
4. Werbe-/Affiliate-Charakter unmittelbar und verständlich am provisionsfähigen Inhalt kennzeichnen.
5. Sichtbaren Amazon-Teilnahmehinweis verwenden: `Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.`
6. Keine Aussage, Amazon sponsere, zertifiziere, unterstütze oder empfehle DEALFAZ.
7. Partnerkennzeichnung muss exakt dem echten Linkzustand entsprechen.

## Technische Release-Reihenfolge

1. `MONETIZATION_DISABLED` bleibt bestehen.
2. Gewerbe-/Steuer-/Hosting-Gates kontrollieren.
3. Amazon-Kontostatus und Website-Zuordnung kontrollieren.
4. In einem bewussten Release-Commit:
   - Partnerlink-Erzeugung aktivieren;
   - klare Werbe-/Affiliate-Kennzeichnung ergänzen;
   - Amazon-Teilnahmehinweis ergänzen;
   - Tests auf korrekten `tag` und Zielhost ergänzen;
   - bisherige Neutralitäts-Checks durch Aktivierungs-Checks ersetzen;
   - `MONETIZATION_DISABLED` erst zuletzt entfernen.
5. Quality ausführen.
6. Produktion deployen.
7. Live Health inklusive echter Amazon-Linkprüfung ausführen.
8. Erst danach Traffic auf die monetarisierte Version lenken.

## Externe PartnerNet-Prüfung

Die bekannte PartnerNet-Kommunikation weist darauf hin, dass nach qualifizierten Verkäufen eine spätere Prüfung der verknüpften Website/Social-Präsenzen erfolgen kann. DealFaz muss die Teilnahmebedingungen daher dauerhaft erfüllen; die erste Aufnahme wird nicht als endgültige dauerhafte Abnahme behandelt.
