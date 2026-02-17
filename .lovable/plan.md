

# Logos lokal speichern statt externe URLs

## Problem

Die Clearbit-URLs (`https://logo.clearbit.com/...`) werden blockiert oder laden nicht. Externe Logo-Dienste sind unzuverlaessig.

## Loesung

Fuer jedes der 8 Unternehmen wird ein einfaches, wiedererkennbares SVG-Logo als lokale Datei im `public/logos/`-Ordner erstellt. SVGs sind ideal, da sie:
- Klein und schnell sind
- Perfekt skalieren
- Keine externen Abhaengigkeiten haben

## Ausgewaehlte Unternehmen und Logos

Da echte Markenlogos urheberrechtlich geschuetzt sind und nicht einfach kopiert werden koennen, werden die Firmennamen als schlichte, typografische Wortmarken in SVG-Form erstellt – aehnlich wie die Unternehmen ihre Logos tatsaechlich verwenden (z.B. Personio, Celonis etc. nutzen primaer Wortmarken).

## Technische Umsetzung

1. **8 SVG-Dateien erstellen** in `public/logos/`:
   - `personio.svg`
   - `celonis.svg`
   - `adjust.svg`
   - `contentful.svg`
   - `staffbase.svg`
   - `sennder.svg`
   - `taxfix.svg`
   - `billie.svg`

   Jede Datei enthaelt eine saubere SVG-Wortmarke mit dem Firmennamen in einer modernen Sans-Serif-Schrift.

2. **`src/components/HeroSection.tsx` anpassen**:
   - Die `logoUrl`-Werte im `logos`-Array werden auf die lokalen Pfade umgestellt (z.B. `/logos/personio.svg`)
   - Keine weiteren Aenderungen am Rendering noetig, da die `<img>`-Tags bereits korrekt eingebunden sind

## Ergebnis

Logos laden zuverlaessig ohne externe Abhaengigkeiten, sehen professionell aus und passen zum Graustufen-Design der Seite.

