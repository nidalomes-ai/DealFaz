# DINAVO – Mobile QA

Stand: 09.09.2026

## Ziel

Der kostenlose Beta-Kernablauf soll auch auf schmalen Smartphone-Viewports ohne horizontales Scrollen, abgeschnittene Eingaben oder zu kleine zentrale Touch-Ziele nutzbar sein.

## Praktischer Browser-Test

Die responsive Basis wurde am 27.08.2026 in Chromium mit aktivierter Mobile-/Touch-Emulation in folgenden Viewports geprüft:

| Profil | Viewport | Horizontaler Overflow | Eingaben außerhalb Viewport | Ergebnis/Entscheidung außerhalb Viewport | Mobile CTA | kleinste zentrale Touch-Höhe |
|---|---:|---|---|---|---|---:|
| iPhone-SE-Größe | 375 × 667 | nein | nein | nein | sichtbar | 46 px |
| iPhone-13-Pro-Größe | 390 × 844 | nein | nein | nein | sichtbar | 46 px |
| kleines Smartphone | 320 × 568 | nein | nein | nein | sichtbar | 46 px |

## Live-Smoke-Test vom 09.09.2026

Die veröffentlichte Seite wurde vom leeren Rechner bis zur Ergebnis-Historie durchgespielt:

- Beispiel-Deal setzt die konfigurierten Felder und berechnet 25,76 € Gewinn.
- Eigene Werte überschreiben das Beispiel vollständig; das Beispiel lässt sich nicht als echter Deal speichern.
- „Merken & später abgleichen“ legt einen offenen Deal an und zeigt sofort den Backup-Hinweis.
- Das tatsächliche Ergebnis lässt sich mit Verkaufspreis, Kosten, Tagen und Arbeitszeit abschließen.
- Der direkte Ergebnis-Link öffnet den zuvor eingeklappten Ergebnisbereich automatisch.
- DE, AT und CH wechseln Währung und Plattformliste gemeinsam; Gebühren und Versand bleiben leer.
- Im Schweizer Markt wird `de-CH` gesetzt und sichtbares `ß` durch `ss` ersetzt.
- Die vier Wissensseiten und alle drei Rechtsseiten antworten öffentlich mit HTTP 200.
- Die veröffentlichte Anwendung erzeugte im Test keine eigenen Konsolenfehler.

## Geprüfte responsive Eigenschaften

- [x] kein horizontales Scrollen in 320/375/390 px Breite
- [x] zentrale Eingabefelder bleiben vollständig im Viewport
- [x] Hauptentscheidung (`bigVerdict`) bleibt vollständig im Viewport
- [x] zentrale Aktionsbuttons sind im Mobile-Layout einspaltig
- [x] untere Navigation „Prüfen / Meine Deals / Mehr“ ist für schmale Displays vorhanden
- [x] kleinste geprüfte zentrale Touch-Höhe beträgt 46 px und liegt damit über 44 px
- [x] Mehrspaltenbereiche werden im Mobile-Breakpoint auf eine Spalte reduziert
- [x] Länder-, Plattform-, Gebühren-, Ergebnis- und Einstellungsfelder besitzen sichtbare Labels
- [x] neue Rechnerfelder fallen unterhalb 680 px automatisch auf eine Spalte zurück
- [x] die Kostenübersicht nutzt mobil zwei kompakte Spalten und ausschließlich flexible Breiten
- [x] `frontend-regression.mjs` prüft Breakpoint, Formularbeschriftungen und mobile Grid-Regeln bei jedem Quality-Lauf

## Einordnung

Der frühere Emulationstest deckt 320, 375 und 390 Pixel Breite ab. Die Änderungen vom 09.09.2026 sind zusätzlich durch den vollständigen Live-Ablauf und strukturelle DOM-/CSS-Regressionen abgesichert. Alle Zahlenfelder fordern auf der Live-Seite je nach Inhalt die dezimale oder numerische Mobil-Tastatur an. Ein Test auf physischer iPhone-Hardware bleibt eine sinnvolle Zusatzkontrolle, ist aber kein zweiter Launchpunkt.

Bei späteren größeren Layoutänderungen wird dieser Test erneut durchgeführt.
