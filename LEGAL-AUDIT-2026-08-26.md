# DINAVO – Rechts- und Launch-Prüfung

Stand: 27.08.2026

> Interne Arbeits- und Release-Prüfung. Sie dokumentiert den aktuell geprüften Sachverhalt und reduziert erkennbare Risiken, ersetzt aber keine individuelle Rechts- oder Steuerberatung und ist keine Garantie, dass kein Dritter Ansprüche erhebt.

## Ergebnis in einem Satz

**Technisch ist DINAVO für die kostenlose Beta startbereit. Ein geschäftlicher öffentlicher Launch ist rechtlich jedoch erst dann als freigegeben zu behandeln, wenn der tatsächliche Gewerbebeginn geklärt und eine erforderliche Gewerbeanmeldung spätestens gleichzeitig mit diesem Beginn erfolgt ist.**

Affiliate-Monetarisierung bleibt bis dahin durch `MONETIZATION_DISABLED` gesperrt.

## 1. Gewerberecht – 🟡 KRITISCHES STARTGATE

§ 14 Abs. 1 GewO verlangt die gleichzeitige Anzeige, wenn der selbständige Betrieb eines stehenden Gewerbes anfängt. Für den Gewerbebegriff sind insbesondere Selbständigkeit, Dauerhaftigkeit und Gewinnerzielungsabsicht relevant; ein tatsächlich bereits erzielter Gewinn ist nicht Voraussetzung.

DINAVO ist dauerhaft angelegt und auf spätere Affiliate-Einnahmen ausgerichtet. Deshalb wird nicht mehr mit der Regel gearbeitet, der Gewerbestart beginne erst mit der ersten Provision.

**Freigaberegel:** Vor einem als Geschäft betriebenen öffentlichen Launch tatsächlichen Beginn klären und erforderliche Gewerbeanmeldung spätestens zum Beginn durchführen.

## 2. Impressum / § 5 DDG – 🟢 BASISSTAND

Live vorhanden:

- Name des Diensteanbieters
- ladungsfähige Anschrift
- E-Mail für elektronische Kontaktaufnahme
- keine erfundenen Registerangaben
- keine erfundene USt-IdNr.

§ 5 DDG verlangt für geschäftsmäßige, in der Regel gegen Entgelt angebotene digitale Dienste leicht erkennbare, unmittelbar erreichbare und ständig verfügbare Anbieterinformationen. Vor eigener Bezahlfunktion, Checkout oder Vertragsabschluss wird zusätzlich geprüft, ob für den dann konkreten Dienst ein weiterer schneller und unmittelbarer Kontaktweg bereitzustellen ist.

## 3. Datenschutz / DSGVO – 🟢 FÜR AKTUELLEN DATENFLUSS

Die Live-Datenschutzhinweise wurden am 27.08.2026 erweitert und enthalten nun unter anderem:

- Verantwortlicher und Kontakt
- Zwecke und Rechtsgrundlagen
- berechtigtes Interesse für Hosting/Sicherheit
- Cloudflare als Hosting-/Infrastrukturbezug
- Supabase nur für beschriebene Legacy-Weiterleitungen
- lokale Deal-/Watchlist-/Regeldaten
- Empfänger/Kategorien von Empfängern
- internationale Verarbeitungsrisiken und Schutzmechanismen in allgemeiner Form
- Speicherdauer bzw. Kriterien
- Rechte der Betroffenen
- Widerspruchsrecht bei Art. 6 Abs. 1 lit. f DSGVO
- Beschwerderecht beim ULD Schleswig-Holstein
- Hinweis, dass der DealScore keine Art.-22-Entscheidung mit rechtlicher oder vergleichbar erheblicher Wirkung ist

Die aktuelle Hauptseite lädt nur `app.js` und **kein eigenes Analytics-Skript**. Das im Repository vorhandene `analytics.js` ist derzeit nicht in `index.html` eingebunden.

## 4. Local Storage / § 25 TDDDG – 🟢 AKTUELLER FUNKTIONSSTAND

Die Hauptanwendung verwendet lokalen Browser-Speicher für vom Nutzer aktiv verwendete Funktionen wie:

- Watchlist
- persönliche Regeln
- vorgemerkte Erwartungen
- tatsächliche Ergebnisse

Diese Inhalte werden im aktuellen Code nicht als Nutzerprofil an eine zentrale DINAVO-Datenbank übertragen. § 25 Abs. 2 TDDDG sieht eine Ausnahme von der Einwilligungspflicht vor, wenn ein Endgerätezugriff unbedingt erforderlich ist, um einen vom Nutzer ausdrücklich gewünschten digitalen Dienst bereitzustellen.

**Aktuelle Produktentscheidung:** kein Werbe-/Marketing-Cookie-Banner, solange keine nicht erforderlichen Tracking-/Marketingzugriffe aktiviert werden. Bei jeder späteren Analytics-, Affiliate-, AdTech- oder sonstigen Tracking-Erweiterung erfolgt vor Aktivierung eine neue TDDDG-/DSGVO-Prüfung.

## 5. Hosting / Auftragsverarbeitung – 🟢 DOKUMENTIERT, VERTRAGSSTATUS REGELMÄSSIG PRÜFEN

Aktueller Hauptbetrieb: Cloudflare Workers.

Supabase wird für Legacy-Weiterleitungen und bestehende technische Hilfsfunktionen genutzt; das Projekt hat als primäre Datenregion `eu-west-1` (Irland). Edge-Infrastruktur kann technisch verteilt ausgeführt werden.

Die öffentlichen Datenschutzhinweise verschweigen deshalb mögliche internationale Verarbeitung nicht. Bei Anbieter-, Region-, Logging- oder Trackingwechsel werden Datenschutztext und Vertrags-/DPA-Status erneut kontrolliert.

## 6. Externe Marktplätze / fremde Inhalte – 🟢 AKTUELLER MODUS

DINAVO:

- kopiert keine fremden Angebotsdatenbankbestände als eigene Datenbank
- umgeht keine Logins, Paywalls oder Schutzmaßnahmen
- betreibt im öffentlichen Kernablauf kein unerlaubtes Scraping
- öffnet Amazon, eBay, Kleinanzeigen, idealo und Google nur als externe Originalquellen
- ist nicht Vertragspartner eines Kaufs auf diesen Plattformen

Die Marktplatzlinks enthalten im aktuellen Zustand keine DINAVO-Affiliate- oder EPN-Trackingparameter.

## 7. Affiliate / Werbung / UWG-DDG – 🟢 GESPERRTER SICHERHEITSZUSTAND / ⏸ SPÄTERE AKTIVIERUNG

Aktuell:

- keine provisionsfähigen Links
- keine Affiliate-Tags
- keine EPN-Trackingparameter
- keine Aussage, dass DINAVO bereits bestätigter eBay-Partner sei
- Amazon-Link wird als neutral behandelt

Vor späterer Aktivierung müssen kommerzielle Kommunikation und vergütete Links klar als Werbung/Partnerlink erkennbar sein. Partnerprogramm-spezifische Pflichtformulierungen werden erst eingebaut, wenn die entsprechenden Programme tatsächlich aktiv sind.

## 8. Verbraucherrecht – 🟢 AKTUELLER KOSTENLOSER MODUS

Aktuell gibt es bei DINAVO:

- keinen eigenen Warenverkauf
- keinen Checkout
- keine Nutzerzahlungen
- kein kostenpflichtiges Abo
- keinen eigenen Verbrauchervertrag über eine Ware

Ein konservativer Verbraucherstreitbeilegungs-/Verbraucherschlichtung-Hinweis ist vorhanden. § 36 VSBG wird bei Änderung von Unternehmerstatus, Beschäftigtenzahl oder Vertragsmodell erneut geprüft.

Die frühere EU-Online-Streitbeilegungsplattform ist nicht als Pflichtlink eingebaut; veraltete ODR-Verlinkungen sollen nicht neu eingeführt werden.

Sobald DINAVO selbst kostenpflichtige Leistungen oder Verträge anbietet, müssen insbesondere Preisangaben, Fernabsatzinformationen, Widerruf, Zahlungsbedingungen und Vertragsschluss separat geprüft werden.

## 9. Digital Services Act / Plattformpflichten – 🟢 AKTUELL KEINE UGC-PLATTFORMFUNKTION

Die aktuelle Version stellt einen eigenen Rechner und externe Recherchelinks bereit. Nutzerinhalte werden nicht auf einem DINAVO-Server gespeichert und öffentlich verbreitet; es gibt keine Konten, öffentlichen Inserate, Kommentare oder Marktplatz-Uploads.

Deshalb werden aktuell keine Plattform-Moderationsprozesse behauptet oder künstlich eingebaut. Wenn später Nutzerinhalte gespeichert/öffentlich verbreitet oder Händlerangebote direkt gehostet werden, wird der DSA/DDG-Plattformcheck neu geöffnet.

## 10. BFSG / Barrierefreiheit – 🟢 PRODUKTSEITIG BERÜCKSICHTIGT / ⏸ RECHTLICHE NEUPRÜFUNG BEI E-COMMERCE

Das BFSG erfasst unter anderem Dienstleistungen im elektronischen Geschäftsverkehr, die auf individuelle Anfrage eines Verbrauchers im Hinblick auf den Abschluss eines Verbrauchervertrags erbracht werden.

DINAVO schließt derzeit selbst keinen Verbrauchervertrag und hat keinen Checkout. Es wird daher keine pauschale Aussage „vollständig BFSG-zertifiziert“ gemacht. Mobile Bedienbarkeit, sichtbare Fokuszustände, Labels und große Touch-Ziele werden freiwillig weiter gepflegt.

Vor eigener E-Commerce-/Checkout-Funktion oder enger auf einen Vertragsschluss gerichteten Diensten erfolgt eine neue BFSG-Prüfung.

## 11. Marken-/Namensrecht – 🟢 VORSICHTIGE NUTZUNG / 🟡 KEINE ABSOLUTE FREIGABE

Dokumentiert sind:

- Suchvarianten für DINAVO
- systematische Variantenkontrolle rund um `DINAVO`
- `PETRU`-Zeichen als klanglich nächste Prüfdatensätze
- `PEVRAE` / EUTM 018739912 als weiterer Schreibvarianten-Prüfpunkt
- keine Behauptung „Marke frei“ oder „rechtlich abgesichert“

Eine Web-/Vorabrecherche ersetzt keine vollständige amtliche Ähnlichkeits- und Klassenprüfung. Vor Markenanmeldung, größerem Werbebudget, Merchandising oder schwer umkehrbaren Branding-Ausgaben direkte DPMA/EUIPO/WIPO-Recherche vervollständigen und bei Zweifel fachkundig prüfen lassen.

## 12. Steuer / EU-B2B – 🟢 VORBEREITET / ⏸ ECHTE ANGABEN NACH FESTGELEGTEM START

Vorbereitet:

- steuerlicher Erfassungsweg
- USt-IdNr.-Prüfpunkt
- Reverse Charge für mögliche EU-B2B-Leistungsbeziehungen
- Zusammenfassende Meldung als möglicher Folgepunkt
- keine fiktiven Umsätze/Gewinne

Die konkrete steuerliche Behandlung richtet sich nach dem tatsächlichen Vertragspartner, Leistungsweg und realen Betriebsdaten. Diese Angaben werden nicht aus Projektzielen erfunden.

## 13. Partnerprogramme – ⏸ EXTERNE FREIGABEN

### Amazon

Technisch nur neutrale Links. Partnerstatus, Website-Zuordnung, Steuer-/Zahlungsdaten und Programmregeln werden vor tatsächlicher Monetarisierung nochmals am realen Konto geprüft.

### eBay

Bewerbung ist eingegangen; eine ausdrückliche Acceptance ist noch nicht nachgewiesen. Statusanfrage an offiziellen EPN-Support ist dokumentiert. Keine EPN-Partnerlinks vor tatsächlicher Freigabe.

## 14. Automatische Release-Schutzregeln

CI soll weiterhin verhindern:

- Affiliate-Tags trotz Monetarisierungslock
- veraltete Partnerbehauptungen
- fehlende rechtliche Basisangaben
- Rückfall auf alte Produktionshosts
- unsichere Share-URLs
- CSV-Formelinjektionen
- fehlende Sicherheitsheader

## Aktuelle rechtliche Ampel

- 🟢 Impressum/DDG-Basis
- 🟢 Datenschutztext für aktuellen Datenfluss
- 🟢 Local-Storage-/Cookie-Architektur im aktuellen Stand
- 🟢 neutraler Marktplatzmodus
- 🟢 Affiliate-Monetarisierung sicher gesperrt
- 🟢 Verbraucherbasis für kostenlosen Rechner
- 🟢 DSA: aktuell keine UGC-/Hosting-Plattformfunktion
- 🟢 BFSG: aktuelle Produktarchitektur ohne eigenen Verbrauchervertrag; Neugate bei E-Commerce
- 🟢 Steuer-/Partner-Vorbereitung
- 🟡 **Gewerbebeginn/Gewerbeanmeldung – kritisches Launch-Gate**
- 🟡 **Markenrecht – keine absolute Kollisionsfreigabe; vor irreversibler Markeninvestition finalisieren**
- ⏸ eBay EPN-Acceptance und sonstige Partner-Endfreigaben – nur für spätere Monetarisierung relevant

## Release-Entscheidung 01.09.2026

**Technisches Beta-GO: JA.**

**Vollständiges rechtliches Geschäfts-GO: NOCH NICHT.** Zuerst Gewerbebeginn/Gewerbeanmeldung klären. Die Markenprüfung bleibt als Risikopunkt vor größerer kommerzieller Markeninvestition offen.

**Monetarisierung: NEIN, bis die vorgesehenen Gates erfüllt sind.**
