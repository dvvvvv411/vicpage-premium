

# Personio, Contentful und Staffbase SVGs neu schreiben

## Problem

Die drei Logos fuer Personio, Contentful und Staffbase werden moeglicherweise noch als Text angezeigt, obwohl die aktuellen Dateien bereits echte SVG-Pfade enthalten. Dies kann an einem Cache-Problem liegen oder daran, dass die Dateien nicht korrekt ueberschrieben wurden.

## Loesung

Die drei SVG-Dateien werden nochmal explizit neu geschrieben, um sicherzustellen, dass die echten Simple Icons Grafiken korrekt gespeichert sind. Die Pfade sind bereits korrekt (verifiziert durch Dateipruefung), es geht nur darum, das Speichern zu erzwingen.

## Betroffene Dateien

1. **`public/logos/personio.svg`** - Neu schreiben mit dem echten Personio-Icon (Schwalben-/Wellenform)
2. **`public/logos/contentful.svg`** - Neu schreiben mit dem echten Contentful-Icon (Blob mit Punkten)
3. **`public/logos/staffbase.svg`** - Neu schreiben mit dem echten Staffbase-Icon (Smiley-Kreis)

Keine Aenderungen an `HeroSection.tsx` noetig - die Pfade im `logos`-Array sind bereits korrekt.

## Ergebnis

Alle 8 Logos im Marquee werden als echte grafische Icons dargestellt, keine Text-Elemente mehr.

