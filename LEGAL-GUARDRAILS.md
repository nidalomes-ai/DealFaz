# DINAVO – Legal Guardrails

Diese Datei definiert feste Grenzen für neue Funktionen. Ziel ist, Produktentwicklung nur dann live zu schalten, wenn sie technisch nützlich und rechtlich vertretbar ist.

## 1. Fremde Plattformdaten

- Kein Umgehen von Logins, Paywalls, Rate-Limits oder technischen Schutzmaßnahmen.
- Kein unerlaubtes Scraping geschützter oder nicht frei zugänglicher Inhalte.
- Fremde Angebote werden nicht als eigene DINAVO-Marktdatenbank kopiert.
- Bevorzugt werden Originalquellen, offizielle APIs oder Daten, die Nutzer selbst eingeben bzw. bereitstellen.
- Plattform- und Markennamen werden nur beschreibend verwendet. Eine Partnerschaft, Zertifizierung oder Empfehlung wird nicht behauptet, wenn sie nicht tatsächlich besteht.

## 2. Rechen- und Entscheidungshilfen

- DealScore, ROI, Marge, Sell-through, Maximalpreis, Szenarien, Gegenargumente und Deal Battle sind Rechenhilfen.
- Keine Gewinn-, Verkaufs-, Nachfrage- oder Preisgarantien.
- Keine automatische Tatsachenbehauptung über Markt, Zustand, Echtheit oder Verkaufsdauer ohne belastbare Datenquelle.
- Nutzerannahmen werden als Nutzerannahmen bezeichnet.
- Bei schwacher Datengrundlage muss eine Evidenz-/Datenqualitätswarnung ein positives Kaufsignal begrenzen können.

## 3. Personenbezogene Daten & Tracking

- Datensparsamkeit ist Standard.
- Watchlist, Kaufregeln, Notizen und persönliche Auswertungen sollen möglichst lokal im Browser bleiben.
- Kein Nutzerkonto, solange es für die Kernfunktion nicht nötig ist.
- Kein Marketing-/Werbetracking ohne vorherige Prüfung von Rechtsgrundlage, Einwilligungspflicht, Datenschutzhinweisen und eingesetzten Dienstleistern.
- Neue externe Analyse-, Werbe- oder Trackingdienste dürfen nicht ohne vorherige Datenschutzprüfung eingebaut werden.

## 4. Uploads / Fotos / Screenshots

- Nur Inhalte verarbeiten, die Nutzer selbst hochladen oder ausdrücklich bereitstellen.
- Keine automatische Veröffentlichung hochgeladener Inhalte.
- Keine dauerhafte Speicherung, wenn sie für den gewünschten Dienst nicht erforderlich ist.
- Vor serverseitiger Bild-/Dateiverarbeitung müssen Datenschutz, Aufbewahrung, Löschung und Dienstleister geprüft werden.
- Foto-/Screenshot-Funktionen dürfen keine Plattform-Schutzmaßnahmen umgehen.

## 5. Affiliate / Monetarisierung

- Affiliate-Links erst nach tatsächlicher Programmfreigabe verwenden.
- Partnerlinks klar und verständlich kennzeichnen.
- Keine versteckte Provision und keine Behauptung einer Partnerschaft ohne tatsächliche Grundlage.
- Affiliate-Monetarisierung bleibt deaktiviert, solange der verwendete Hosting-Tarif kommerzielle Nutzung nicht ausdrücklich zulässt.
- Vor Aktivierung planmäßiger Einnahmen müssen Gewerbe-/Betreiberstatus und steuerliche Erfassung geklärt sein.
- Partnerprogramm-Regeln gehen vor technischen Abkürzungen: keine Linkverschleierung oder Weiterleitung, wenn das Programm direkte Partnerlinks verlangt.
- Kostenpflichtige Funktionen erst aktivieren, wenn Betreiber-, Vertrags-, Steuer-, Datenschutz- und Zahlungsanforderungen geprüft sind.

Amazon- und eBay-Affiliate-Funktionen sowie der geschäftliche Start bleiben bis zu ihren eigenen Freigaben ausdrücklich gesperrt. Neutrale, nutzerinitiierte Originalquellen sind davon getrennt.

## 6. Betreiber- und Pflichtinformationen

- Impressum/Anbieterinformationen leicht erreichbar halten.
- Datenschutzhinweise an die tatsächlich verwendeten Dienste und Verarbeitungen anpassen.
- Bei Änderungen an Hosting, Tracking, Nutzerkonten, Uploads, E-Mail, Zahlungen oder Drittanbietern muss die Rechts-/Datenschutzseite vor Livegang mitgeprüft werden.
- Keine erfundenen Register-, Umsatzsteuer-, Unternehmens- oder Kontaktangaben eintragen.
- Verbraucher- und Streitbeilegungshinweise nur einbauen, wenn sie für den tatsächlichen Betreiberstatus gelten; keine veralteten Hinweise zur früheren EU-OS-Plattform.

## 7. Marken- und Namensrecht

- DINAVO wird nicht als eingetragene Marke dargestellt, solange keine entsprechende Eintragung vorliegt.
- Vor größerem öffentlichen oder kommerziellem Rollout ist eine Registerrecherche bei DPMA und – bei EU-Ausweitung – EUIPO durchzuführen und zu dokumentieren.
- Ein fehlender Treffer in allgemeinen Suchmaschinen gilt nicht als Markenfreigabe.
- Die vorsichtige kostenlose Beta darf DINAVO ohne „®“ als Arbeitsnamen verwenden. Eine Markenanmeldung, ein größeres Werbebudget oder eine schwer umkehrbare Markeninvestition bleibt bis zur professionellen Identitäts- und Ähnlichkeitsprüfung gesperrt.

## 8. Werbung, Social Media und KI-Medien

- DINAVO-Eigenwerbung wird unmittelbar als „Werbung für die eigene DINAVO-Beta“ kenntlich gemacht.
- Plattformschalter für kommerzielle Inhalte und KI-Inhalte werden verwendet, wenn sie verfügbar und einschlägig sind.
- Authentisch wirkende synthetische Personen werden im Medium und in der Caption klar als KI-generiert und fiktiv gekennzeichnet.
- Keine künstlich erzeugten Personen als echte Kunden, unabhängige Tester oder Zeugen darstellen.
- Keine Stimm- oder Gesichtsimitate realer Personen ohne dokumentierte Einwilligung; keine erfundenen Bewertungen oder Resultate.
- Es gelten zusätzlich alle Regeln in AI-ADVERTISING-GUARD.md.

## 9. Hosting

- Aktuelle Hauptadresse ist die Cloudflare-Workers-Adresse aus den Produktionsmetadaten.
- Vercel Hobby ist nur ein nichtkommerzieller technischer Fallback und keine Freigabe für Affiliate, Anzeigen, Checkout oder sonstige geschäftliche Nutzung.
- Vor einem kommerziellen Start müssen Tarif, Nutzungsbedingungen, Auftragsverarbeitung und Datenschutzhinweise des dann tatsächlich verwendeten Hosts erneut geprüft sein.

## 10. Release Gate für neue Funktionen

Eine neue Funktion darf erst live gehen, wenn alle zutreffenden Punkte mit **JA** beantwortet werden:

1. Kommt sie ohne unerlaubtes Scraping oder Umgehung fremder Schutzmaßnahmen aus?
2. Sind externe Marken/Plattformen nur beschreibend und nicht irreführend dargestellt?
3. Werden Marktbehauptungen entweder belegt oder klar als Nutzereingabe/Annahme gekennzeichnet?
4. Werden keine Gewinn- oder Verkaufsgarantien erzeugt?
5. Ist die Datenspeicherung auf das Notwendige beschränkt?
6. Sind neue Tracking-/Upload-/Account-/Payment-Funktionen datenschutzrechtlich geprüft?
7. Bleiben Impressum, Datenschutz, Haftung und Nutzungsbedingungen zum tatsächlichen Produktstand passend?
8. Erlaubt der Hosting-/Dienstleistervertrag die geplante Nutzung einschließlich Monetarisierung?
9. Sind vor Monetarisierung Gewerbe-/Steuerstatus und Partnerprogrammfreigaben geklärt?
10. Wurde bei Nutzung von DINAVO als Marke die notwendige Registerrecherche dokumentiert?
11. Wurde die Funktion technisch getestet, bevor sie Production erreicht?
12. Ist öffentliche DINAVO-Eigenwerbung eindeutig gekennzeichnet und sind bei KI-Medien die Regeln aus AI-ADVERTISING-GUARD.md erfüllt?

Wenn ein Punkt **NEIN** oder ungeklärt ist, bleibt die Funktion Preview/Entwurf bzw. Monetarisierung deaktiviert.

## 11. Aktuelle Produktlinie

Die aktuelle sichere Kernlinie von DINAVO lautet:

**Eigene Deal-Zahlen + selbst geprüfte Originalquellen + transparente Rechenlogik + lokale persönliche Daten.**

Das ist bewusst risikoärmer als eine eigene kopierte Marktdatenbank oder automatisierte Behauptungen über fremde Angebote.
