# DEALFAZ Legal-Safety Release Gate

Diese Datei ist eine interne Freigabe-Checkliste für neue DEALFAZ-Funktionen. Sie ersetzt keine individuelle Rechtsberatung. Eine Funktion soll erst live gehen, wenn die relevanten Punkte geprüft sind.

## 1. Pflichtangaben vor öffentlichem geschäftsmäßigem Betrieb

- [ ] Vollständiges Impressum mit den **tatsächlichen** Angaben des Verantwortlichen veröffentlichen und leicht erreichbar verlinken.
- [ ] Vollständige Datenschutzerklärung mit Verantwortlichem, Zwecken, Rechtsgrundlagen, Empfängern, Speicherdauer, Betroffenenrechten und ggf. Drittlandtransfers veröffentlichen.
- [ ] Keine erfundenen, abgekürzten oder aus privaten Unterlagen automatisch übernommenen Anbieterangaben verwenden.

Rechtsgrundlagen zur Prüfung: § 5 DDG; Art. 13 DSGVO.

## 2. Cookies / Local Storage / Endgerät

- [ ] Keine Werbe- oder Cross-Site-Tracking-Cookies ohne vorherige rechtliche Prüfung/erforderliche Einwilligung.
- [ ] Local Storage nur für ausdrücklich vom Nutzer gewünschte Funktionen einsetzen, z. B. Kaufregeln oder Watchlist.
- [ ] Lokale Speicherung transparent erklären.
- [ ] Bei neuen SDKs/Trackern vor Einbau prüfen, ob auf Endgeräteinformationen zugegriffen oder Informationen gespeichert werden.

Rechtsgrundlage zur Prüfung: § 25 TDDDG.

## 3. Analytics

- [ ] DEALFAZ-eigene Analytics möglichst aggregiert und datensparsam halten.
- [ ] Keine Passwörter, E-Mail-Adressen, IBAN, Steuerdaten, exakte Formulareingaben oder hochgeladene Inhalte in Analytics schreiben.
- [ ] Keine Produkt-Suchbegriffe in die eigene Analytics-Tabelle übernehmen, wenn eine abstrakte Ereignisbezeichnung genügt.
- [ ] Bot-/Preview-/Healthcheck-Aufrufe von menschlicher Nutzung trennen.
- [ ] Hosting-/Infrastrukturverarbeitung in der Datenschutzerklärung berücksichtigen.

## 4. Marktdaten und Plattformen

- [ ] Keine fremden Angebotsdaten unerlaubt scrapen, kopieren oder als eigene Datenbank veröffentlichen.
- [ ] Offizielle APIs, erlaubte Feeds, öffentliche Suchseiten oder vom Nutzer selbst bereitgestellte Daten bevorzugen.
- [ ] Zugangsbeschränkungen, Login-Barrieren, Rate Limits oder technische Schutzmaßnahmen nicht umgehen.
- [ ] Verkaufte/beendete Angebote nur über erlaubte Originalquellen oder zugelassene Schnittstellen verwenden.
- [ ] Quelle und Zeitpunkt von Marktwerten kenntlich machen, wenn DEALFAZ künftig eigene Marktwerte anzeigt.

## 5. Marken / Logos / Zugehörigkeit

- [ ] Markennamen wie eBay, Kleinanzeigen, Amazon, Vinted oder idealo nur beschreibend verwenden, soweit erforderlich.
- [ ] Keine fremden Logos oder Marken-Gestaltung ohne geklärte Nutzungsrechte einbauen.
- [ ] Keine Partnerschaft, Zertifizierung oder offizielle Zugehörigkeit suggerieren, wenn sie nicht besteht.

## 6. Affiliate / Werbung

- [ ] Affiliate-/Partnerlinks erst nach tatsächlicher Freigabe des jeweiligen Programms verwenden.
- [ ] Vergütete/werbliche Links transparent kennzeichnen.
- [ ] Provisionen dürfen DealScore, Ranking oder Kaufsignal nicht heimlich verändern.
- [ ] Keine Aussage wie „offizieller Partner“, solange sie nicht nachweisbar stimmt.

## 7. Claims und Ergebnisse

- [ ] Keine Gewinn-, Verkaufs-, Rendite- oder Preisgarantien.
- [ ] Keine unbelegten Aussagen wie „Marktführer“, „beste Seite überhaupt“, „100 % sicher“ oder vergleichbare Superlative als Tatsachenbehauptung.
- [ ] Worst Case / Best Case klar als Rechenszenarien, nicht als Marktprognosen kennzeichnen.
- [ ] DealScore als Rechen-/Entscheidungshilfe darstellen.
- [ ] Bei schwacher Datengrundlage Unsicherheit sichtbar machen (`DATEN PRÜFEN`).

## 8. Nutzer-Uploads / Foto-Analyse

Vor einer zukünftigen Foto-/Screenshot-Funktion:

- [ ] Nur vom Nutzer selbst bereitgestellte Inhalte analysieren oder rechtmäßig abrufbare Quellen nutzen.
- [ ] Keine Login-Screens, privaten Nachrichten, personenbezogenen Dokumente oder Zugangsdaten automatisch dauerhaft speichern.
- [ ] Upload-Löschkonzept und Speicherdauer definieren.
- [ ] EXIF-/Metadaten und mögliche personenbezogene Inhalte berücksichtigen.
- [ ] Kein automatisches Weiterveröffentlichen fremder Bilder oder Angebotstexte.

## 9. Verbraucher-, Steuer- und Rechtsfragen

- [ ] DEALFAZ nicht als Rechts-, Steuer- oder Finanzberatung darstellen.
- [ ] Gebühren-/Plattformregeln mit aktuellen offiziellen Quellen prüfen, bevor konkrete Beträge veröffentlicht werden.
- [ ] Bei privaten/gewerblichen Verkäufen keine pauschale rechtliche Einordnung des Nutzers behaupten.
- [ ] Steuerliche oder gewerberechtliche Schwellen nicht ohne aktuellen Quellencheck als allgemeingültig darstellen.

## 10. Release-Regel

**ROT = nicht deployen** bei: unklarer Datenquelle, ungeklärtem Scraping, fehlender erforderlicher Einwilligung, ungeklärter Affiliate-Kennzeichnung, falscher Partnerschaftsbehauptung, Garantien oder Verarbeitung sensibler Daten ohne klares Konzept.

**GELB = erst prüfen** bei: neuen Drittanbieter-SDKs, neuen externen Datenquellen, Uploads, Nutzerkonten, E-Mail-Sammlung, Zahlungen, Affiliate, personalisierten Empfehlungen oder neuen Trackingmethoden.

**GRÜN = deploybar** wenn: Datenquelle erlaubt/nutzerbereitgestellt, Datensparsamkeit gewahrt, Claims transparent, keine Garantien, externe Plattformen klar getrennt und relevante Pflichtinformationen berücksichtigt sind.

## Aktueller DEALFAZ-Grundsatz

**Rechtlich vertretbar → kostenlos machbar → technisch stabil → echter Nutzwert → erst dann live.**
