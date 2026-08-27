# DEALFAZ – Gewerbe- und Steuer-Startfreigabe

Stand: 27.08.2026

Diese Checkliste ist ein Release-Gate und ersetzt keine individuelle Rechts- oder Steuerberatung.

## Ampel

- 🟢 Technischer, kostenloser und nicht monetarisierter Betrieb: aktiv.
- 🟢 Cloudflare-Produktionsversion, Sitemap, robots.txt und Launch-Links: auf dem aktuellen Host ausgerichtet.
- 🟢 Verbraucherstreitbeilegungs-Hinweis (VSBG-Formulierung): bereits im öffentlichen Rechtstext vorhanden.
- 🟢 Amazon PartnerNet: erste Teilnahmebestätigung eingegangen.
- 🟢 eBay Partner Network: Bewerbungseingang dokumentiert; Aktivierungsregeln vorhanden.
- 🟢 DPMA-Rechercheweg: amtliche Suchstrategie dokumentiert.
- 🟡 Produktionsdomain für späteren geschäftskritischen/monetarisierten Betrieb: noch nicht final. Aktuell läuft die Seite auf `workers.dev`; Cloudflare empfiehlt für echte Produktions-Worker eine Custom Domain bzw. Route. Es wird dafür jetzt nichts gekauft.
- 🟡 Gewerbeanmeldung: bewusst noch nicht abgesendet.
- 🟡 Steuerliche Erfassung / USt-IdNr. / EU-B2B-Behandlung: Vorabklärung läuft.
- 🟡 Amazon-spezifische Steuer-/Disclosure-Rückfrage: Antwort noch ausstehend.
- 🟡 eBay Partner Network: ausdrückliche Freigabe/Acceptance ist noch nicht nachgewiesen; Partnerlinks bleiben aus.
- 🟡 Marken-Kollisionsprüfung: noch nicht abgeschlossen; keine Markenfreigabe behaupten.
- 🟡 Metricool: kostenloses Monatslimit August erreicht; kein kostenpflichtiges Upgrade.
- 🔒 Affiliate-Monetarisierung bleibt durch `MONETIZATION_DISABLED` gesperrt.

## 1. Gewerbeanmeldung

Zuständige Stelle: Stadt Wahlstedt / Ordnungsamt.

Geplante Tätigkeitsbeschreibung:

> Betrieb einer Online-Plattform für Reselling-Rechen- und Entscheidungshilfen sowie Online-Marketing/Affiliate-Marketing; keine erlaubnispflichtigen Tätigkeiten.

### Erledigt

- [x] zuständige Stelle identifiziert
- [x] Online-Verfahren identifiziert
- [x] Tätigkeitsbeschreibung vorbereitet
- [x] Unterlagen-Grundliste vorbereitet
- [x] Ordnungsamt am 27.08.2026 um Bestätigung von Tätigkeit, Verfahren, Gebühr und Unterlagen gebeten

### Erst bei tatsächlichem gewerblichen Start

- [ ] tatsächlichen Betriebsbeginn festlegen
- [ ] Gewerbeanmeldung mit realen Betreiberangaben absenden
- [ ] Identitätsnachweis im vorgesehenen Verfahren verwenden
- [ ] Empfangs-/Anmeldebestätigung archivieren

Bis dahin wird DealFaz technisch weiterentwickelt und nicht monetarisiert.

## 2. Steuerliche Erfassung / ELSTER

Relevanter Weg: Fragebogen zur steuerlichen Erfassung für Einzelunternehmen.

### Erledigt

- [x] richtigen Formulartyp identifiziert
- [x] Amazon-Luxemburg als EU-B2B-Sachverhalt getrennt erfasst
- [x] Finanzamt am 27.08.2026 zu USt-IdNr., Reverse Charge und Zusammenfassender Meldung vorab angefragt
- [x] zusätzlich gefragt, ob die USt-IdNr. direkt mit der steuerlichen Erfassung beantragt werden soll

### Noch offen

- [ ] Behördenantwort auswerten
- [ ] steuerliche Erfassung erst mit tatsächlichen Angaben und realem Betriebsbeginn absenden
- [ ] USt-IdNr./EU-B2B-Prozess anhand der bestätigten Behandlung einrichten

Nicht automatisch raten: Umsatz, Gewinn, Betriebsbeginn, Bankdaten, Kleinunternehmerregelung/Umsatzsteueroption, Beschäftigte oder Betriebsstätten.

## 3. Amazon PartnerNet

Am 24.08.2026 ist die erste PartnerNet-Teilnahmebestätigung eingegangen. Das ist **keine dauerhafte Endfreigabe**: Amazon weist auf eine spätere Prüfung der verknüpften Website/Social-Präsenz nach qualifizierten Verkäufen hin.

### Erledigt

- [x] erste PartnerNet-Teilnahmebestätigung erhalten
- [x] PartnerNet-Steuer-/Zahlungsbereich eingerichtet bzw. geändert
- [x] Aktivierungsregeln in `AMAZON-ACTIVATION.md` dokumentiert
- [x] schriftliche Rückfrage zu Linkkennzeichnung und möglicher USt-IdNr.-Kontopflicht gesendet

### Offen

- [ ] konkrete Antwort auf die Steuer-/Disclosure-Rückfrage auswerten
- [ ] bei Monetarisierungsstart aktuelle Website/Domain im PartnerNet-Konto korrekt hinterlegen
- [ ] spätere Amazon-Prüfung bestehen

Solange diese und die Gewerbe-/Steuer-Gates offen sind, bleiben Amazon-Links neutral und provisionsfrei.

## 4. eBay Partner Network

Am 21.08.2026 wurde der Eingang der EPN-Bewerbung bestätigt. Eine ausdrückliche Freigabe/Acceptance ist im aktuellen Postfachstand nicht nachgewiesen.

### Erledigt

- [x] Bewerbungseingang dokumentiert
- [x] Aktivierungs- und Stop-Regeln in `EBAY-ACTIVATION.md` dokumentiert
- [x] unzustellbare Statusanfrage vom 26.08.2026 als solche erkannt; daraus weder Freigabe noch Ablehnung abgeleitet

### Offen

- [ ] ausdrückliche EPN-Freigabe nachweisen
- [ ] aktuellen EPN-Kontostatus vor Aktivierung prüfen
- [ ] Website/Domain und aktuelle EPN-Regeln beim tatsächlichen Monetarisierungsstart abgleichen

Bis dahin keine EPN-Partnerlinks, keine Trackingparameter und keine Behauptung einer bestätigten eBay-Partnerschaft.

## 5. Hosting

Aktuell öffentlich:

> `https://dealfaz.dealfaz-social.workers.dev/`

### Grün für den jetzigen Testbetrieb

- [x] HTTPS erreichbar
- [x] öffentliche Seiten funktionieren
- [x] Sitemap/robots/canonical auf den aktuellen Host ausgerichtet
- [x] Quality und Live Health laufen gegen die aktuelle Version
- [x] alte Supabase-Funktionslinks aus der Startseite entfernt

### Gelb für spätere Monetarisierung

- [ ] Custom Domain/Route bzw. finalen geschäftskritischen Host festlegen
- [ ] danach Canonical, Sitemap, Social-Metadaten und Partnerprogramm-Webseiten in einem Cutover angleichen

Keine kostenpflichtige Domain oder kein Upgrade wird automatisch gekauft.

## 6. Rechtstext / Verbraucherstreitbeilegung

Die konservative Formulierung ist bereits öffentlich eingebaut:

> DEALFAZ ist nicht freiwillig zur Teilnahme an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle bereit. Soweit im Einzelfall eine gesetzliche Verpflichtung zur Teilnahme besteht, bleibt diese unberührt.

- [x] Formulierung vorbereitet
- [x] im öffentlichen Rechtstext eingebaut

## 7. Markenstatus

- [x] DPMA-Antwort und amtliche Suchstrategie dokumentiert
- [x] öffentliche Web-Vorrecherche und konkrete ähnliche Zeichen dokumentiert
- [ ] DPMAregister-Ähnlichkeitssuche vollständig auswerten
- [ ] EUIPO/WIPO für relevante Treffer und aktuellen Rechtsstand ergänzen
- [ ] bei ernsthaftem Konflikttreffer Namensalternative/fachkundige Prüfung vor irreversiblen Branding-Ausgaben

Bis dahin keine Aussage „Marke frei“ oder „rechtlich abgesichert“.

## 8. Buchhaltung ab Tag 1 der Monetarisierung

Ab dem ersten tatsächlichen kommerziellen Vorgang getrennt dokumentieren:

- Affiliate-Einnahmen nach Programm und Datum
- Auszahlungen
- Gebühren und Betriebsausgaben
- Hosting-/Domainkosten, falls vorhanden
- grenzüberschreitende Affiliate-Leistungen
- Steuern/Abgaben getrennt vom Umsatz

## 9. Monetarisierungsfreigabe

`MONETIZATION_DISABLED` darf erst in einem bewussten Release entfernt werden, wenn mindestens:

- [ ] Gewerbeanmeldung zum tatsächlichen Start erledigt
- [ ] steuerliche Erfassung fristgerecht erledigt/eingeleitet
- [ ] USt-IdNr./Reverse-Charge/ZM-Behandlung für Amazon geklärt und eingerichtet
- [ ] finaler Produktionshost für den kommerziellen Betrieb festgelegt
- [ ] Amazon-Partnerstatus und Website-Zuordnung aktuell korrekt
- [ ] eBay-Partnerlinks nur nach nachgewiesener EPN-Freigabe
- [ ] Affiliate-Werbekennzeichnung exakt zur tatsächlichen Linkstruktur passt
- [x] VSBG-Hinweis sichtbar
- [x] Datenschutzhinweise beschreiben den aktuellen Cloudflare-/Local-Storage-Betrieb
- [x] Impressum ist öffentlich vorhanden
- [ ] Marken-/Namensprüfung ausreichend abgeschlossen/dokumentiert
- [ ] Quality, Live Health und Commercialization Guards unmittelbar vor Aktivierung erneut grün

Offene externe Punkte stoppen nicht die technische Weiterentwicklung; sie stoppen nur die Monetarisierungsfreigabe.
