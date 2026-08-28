# MESIQO – Mobile QA

Stand: 27.08.2026

## Ziel

Der kostenlose Beta-Kernablauf soll auch auf schmalen Smartphone-Viewports ohne horizontales Scrollen, abgeschnittene Eingaben oder zu kleine zentrale Touch-Ziele nutzbar sein.

## Praktischer Browser-Test

Die aktuelle responsive CSS-Logik wurde in Chromium mit aktivierter Mobile-/Touch-Emulation in folgenden Viewports geprüft:

| Profil | Viewport | Horizontaler Overflow | Eingaben außerhalb Viewport | Ergebnis/Entscheidung außerhalb Viewport | Mobile CTA | kleinste zentrale Touch-Höhe |
|---|---:|---|---|---|---|---:|
| iPhone-SE-Größe | 375 × 667 | nein | nein | nein | sichtbar | 46 px |
| iPhone-13-Pro-Größe | 390 × 844 | nein | nein | nein | sichtbar | 46 px |
| kleines Smartphone | 320 × 568 | nein | nein | nein | sichtbar | 46 px |

## Geprüfte responsive Eigenschaften

- [x] kein horizontales Scrollen in 320/375/390 px Breite
- [x] zentrale Eingabefelder bleiben vollständig im Viewport
- [x] Hauptentscheidung (`bigVerdict`) bleibt vollständig im Viewport
- [x] zentrale Aktionsbuttons sind im Mobile-Layout einspaltig
- [x] Mobile-CTA ist sichtbar
- [x] kleinste geprüfte zentrale Touch-Höhe beträgt 46 px und liegt damit über 44 px
- [x] Mehrspaltenbereiche werden im Mobile-Breakpoint auf eine Spalte reduziert

## Einordnung

Dieser Nachweis ist ein praktischer Browser-/Viewport-Test der aktuellen Responsive-Regeln und reicht als technischer Mobile-Gate für die kostenlose Beta. Ein zusätzlicher Smoke-Test auf physischer iPhone-Hardware bleibt sinnvoll, ist aber kein Grund, die nicht monetarisierte Beta technisch zu sperren.

Bei späteren größeren Layoutänderungen wird dieser Test erneut durchgeführt.
