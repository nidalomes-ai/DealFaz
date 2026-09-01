# DINAVO – Mobile QA

Stand: 01.09.2026

## Ziel

Der kostenlose Beta-Kernablauf soll auch auf schmalen Smartphone-Viewports ohne horizontales Scrollen, abgeschnittene Eingaben oder zu kleine zentrale Touch-Ziele nutzbar sein.

## Praktischer Browser-Test

Die responsive Basis wurde am 27.08.2026 in Chromium mit aktivierter Mobile-/Touch-Emulation in folgenden Viewports geprüft:

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
- [x] neue Plattform-, Gebühren-, Ergebnis- und Einstellungsfelder besitzen sichtbare Labels
- [x] neue Rechnerfelder fallen unterhalb 680 px automatisch auf eine Spalte zurück
- [x] die Kostenübersicht nutzt mobil zwei kompakte Spalten und ausschließlich flexible Breiten
- [x] `frontend-regression.mjs` prüft Breakpoint, Formularbeschriftungen und mobile Grid-Regeln bei jedem Quality-Lauf

## Einordnung

Der Browser-Nachweis deckt die unveränderte responsive Basis ab; die Felderweiterung vom 01.09.2026 ist zusätzlich durch strukturelle DOM-/CSS-Regressionen abgesichert. Das reicht als technisches Mobile-Gate für die kostenlose Beta. Ein erneuter visueller Live-Smoke-Test nach Veröffentlichung und ein Test auf physischer iPhone-Hardware bleiben sinnvolle Zusatzkontrollen, sind aber kein zweiter gelber Launchpunkt.

Bei späteren größeren Layoutänderungen wird dieser Test erneut durchgeführt.
