# DEALFAZ – Rechts- und Release-Prüfung

Stand: 27.08.2026

> Arbeits- und Release-Checkliste. Keine individuelle anwaltliche oder steuerliche Beratung. Rechtsquellen und Programmregeln müssen vor einem tatsächlichen kommerziellen Start erneut anhand des konkreten Sachverhalts geprüft werden.

## Aktueller sicherer Betriebsmodus

- DEALFAZ bleibt derzeit kostenlos und ohne Nutzerkonto.
- Affiliate-Monetarisierung ist durch `MONETIZATION_DISABLED` gesperrt.
- Amazon wird derzeit nur als neutrale externe Originalquelle verlinkt; kein Affiliate-Tag ist live.
- eBay-Affiliate wird erst nach bestätigter EPN-Freigabe aktiviert.
- Watchlist, Regeln, Erwartungen und Ergebnis-Historie bleiben lokal im Browser.
- Reichweiten-/Analytics-Aussagen werden nicht als eindeutige natürliche Besucher ausgegeben, wenn die Messung das nicht belegt.
- Fremde Angebote werden nicht als eigene Datenbank kopiert; Originalplattformen werden nur zur eigenen Recherche verlinkt.
- Keine Gewinn-, Verkaufs-, Nachfrage- oder Preisgarantien.

## Hostingstatus

Der frühere Vercel-/Supabase-Frontendstand ist überholt.

Aktuelle kostenlose Beta:

`https://dealfaz.dealfaz-social.workers.dev/`

- Cloudflare liefert die öffentliche Seite aus.
- Canonical, Sitemap, robots.txt und Social-Metadaten sind auf den aktuellen Cloudflare-Host ausgerichtet.
- alte Supabase-Funktionslinks wurden aus den öffentlichen HTML-Seiten entfernt.
- Quality und Live Health prüfen den aktuellen Host.
- vor einem späteren geschäftskritischen/monetarisierten Dauerbetrieb bleibt die Entscheidung über Custom Domain/Route bzw. finale Produktionsdomain offen.

## Vor Monetarisierung zwingend prüfen/erledigen

1. **Gewerbestart:** § 14 Abs. 1 GewO verlangt bei Beginn des selbständigen Betriebs eines stehenden Gewerbes die gleichzeitige Anzeige bei der zuständigen Behörde. Der tatsächliche kommerzielle Betriebsbeginn von DEALFAZ wird deshalb nicht im Repository geraten, sondern mit der realen Aufnahme der gewerblichen Tätigkeit abgestimmt.
2. **Steuerliche Erfassung:** tatsächliche Betreiber-, Beginn-, Umsatz- und Steuerangaben erst mit dem realen Sachverhalt über ELSTER übermitteln; die bereits laufende Vorabklärung mit dem Finanzamt ersetzt keine spätere erforderliche Erklärung.
3. **EU-B2B/Amazon:** USt-IdNr., Reverse-Charge- und gegebenenfalls Zusammenfassende-Meldung-Behandlung für den konkreten Leistungsweg klären, bevor Affiliate-Umsätze aktiviert werden.
4. **Amazon:** nur programmgerechte direkte Partnerlinks verwenden; keine verschleiernden Weiterleitungen; Werbe-/Affiliate-Charakter und erforderlichen Amazon-Teilnahmehinweis passend zum tatsächlichen Linkzustand anzeigen.
5. **eBay:** keine EPN-Partnerlinks oder Partnerschaftsbehauptung vor bestätigter Freigabe.
6. **Datenschutz:** Hinweise vor jeder Änderung an Hosting, Tracking, Affiliate, Accounts, Uploads oder Zahlungen an den tatsächlichen Datenfluss anpassen.
7. **Werbekennzeichnung:** kommerzielle Kommunikation und provisionsfähige Links müssen beim späteren Einsatz klar als solche erkennbar sein; die konkrete Kennzeichnung wird am realen Linkzustand geprüft.
8. **Markenrecht:** vor irreversiblen Marken-/Branding-Ausgaben die Ähnlichkeitsrecherche in DPMAregister sowie EUIPO/WIPO für `DEALFAZ` und relevante ähnliche Zeichen abschließen.

## Datenschutzstatus

- Cloudflare verarbeitet beim Hosting technisch notwendige Verbindungs-, Sicherheits- und Protokolldaten.
- Dealwerte, Watchlist, Regeln, Erwartungen und tatsächliche Ergebnisse werden in der aktuellen Version lokal im Browser gespeichert.
- die Live-Datenschutzhinweise behaupten keine eindeutige Besucheridentifikation.
- externe Plattformen werden erst durch Auswahl eines externen Links aufgerufen.
- öffentliche HTML-Seiten enthalten keine alten Supabase-Frontend-/Datenschutz-Funktionslinks mehr.
- jede spätere neue zentrale Speicherung oder neues Tracking erfordert eine neue Datenschutzprüfung vor Aktivierung.

## Verbraucherstreitbeilegung

Die Live-Seite enthält vorsorglich einen Verbraucherstreitbeilegungs-Hinweis.

Aktueller gesetzlicher Kontrollpunkt: § 36 VSBG verlangt bei Unternehmer-Webseiten grundsätzlich Informationen zur Bereitschaft/Verpflichtung zur Teilnahme; § 36 Abs. 3 nimmt Unternehmer von der Informationspflicht nach Abs. 1 Nr. 1 aus, wenn am 31.12. des Vorjahres zehn oder weniger Personen beschäftigt waren. Bei geänderten tatsächlichen Verhältnissen erneut prüfen.

Keine kostenpflichtigen Verträge, Abos oder Checkout-Funktionen live schalten, bevor die dafür zusätzlich nötigen Verbraucherinformationen, Preise, Widerrufs- und Zahlungsbedingungen separat geprüft wurden.

## Steuerliche Kontrollwerte

Nach aktuellem § 19 Abs. 1 UStG gilt die Kleinunternehmer-Steuerbefreiung bei Vorliegen aller Voraussetzungen, wenn der Gesamtumsatz im vorangegangenen Kalenderjahr 25.000 EUR nicht überschritten hat und im laufenden Kalenderjahr 100.000 EUR nicht überschreitet.

Diese Werte entscheiden **nicht** darüber, ob ein Gewerbe anzumelden ist, und sie ersetzen keine Einkommensteuer-, Aufzeichnungs- oder sonstigen Pflichten. Die konkrete Wahl/Anwendung wird nicht automatisch im Code festgelegt.

## Quellenkontrolle vom 27.08.2026

Für die gesetzlichen Kontrollpunkte wurden die aktuellen Fassungen bei `gesetze-im-internet.de` geprüft:

- § 14 GewO – Anzeigepflicht
- § 36 VSBG – Allgemeine Informationspflicht
- § 19 UStG – Besteuerung der Kleinunternehmer

Für Cloudflare-/Amazon-/Markenfragen gelten zusätzlich die jeweils aktuellen Anbieter- bzw. Registerinformationen; diese sind eigene Release-Gates und keine pauschale Rechtsfreigabe.

## Release Gate: Monetarisierung

Affiliate darf erst **GRÜN** werden, wenn gleichzeitig:

- [ ] tatsächlicher Gewerbe-/Betreiberstart geklärt und erforderliche Anzeige erledigt
- [ ] steuerlicher Start und EU-B2B-Behandlung geklärt
- [ ] finaler kommerzieller Produktionshost/Domainzustand festgelegt
- [ ] jeweiliges Partnerprogramm für den realen Einsatz korrekt eingerichtet/freigegeben
- [ ] direkte programmgerechte Links umgesetzt
- [ ] Werbe-/Affiliate-Kennzeichnung sichtbar und korrekt
- [ ] Datenschutz an den dann tatsächlichen Datenfluss angepasst
- [ ] Impressum zum Betreiberstatus passend
- [ ] Marken-/Namensprüfung ausreichend abgeschlossen
- [ ] Quality, Live Health und Commercialization Guards unmittelbar vor Aktivierung grün

Bis dahin bleibt Affiliate deaktiviert.
