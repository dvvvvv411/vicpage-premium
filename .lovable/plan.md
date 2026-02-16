

# Abstand zwischen "Auf einen Blick" und Stellenanzeige reduzieren

## Problem

Die beiden Sektionen ("Auf einen Blick" und "Job Listing") sind jeweils eigene `<section>`-Elemente mit eigenem Padding, was zu doppeltem Abstand fuehrt:
- "Auf einen Blick": `py-12 md:py-16`
- "Job Listing": `py-20 md:py-28`

## Loesung

Beide Bereiche werden in **eine einzige `<section>`** zusammengefasst. Das 3-Spalten-Grid fuer "Auf einen Blick" wird einfach ueber dem 2-Spalten-Grid platziert, mit nur einem moderaten Abstand (`mb-10`) dazwischen. Das Gesamtergebnis sieht exakt gleich aus, nur ohne den grossen Leerraum.

## Technische Aenderung

**Datei:** `src/pages/Karriere.tsx`

- Die separate `<section className="py-12 md:py-16 bg-white">` (Auf einen Blick) wird entfernt
- Das 3-Spalten-Grid wird direkt in die Job-Listing-Sektion verschoben, oberhalb des 2-Spalten-Grids
- Ein `mb-10` trennt die beiden Grids innerhalb derselben Sektion
- Die Job-Listing-Sektion behaelt ihr Padding (`py-20 md:py-28 bg-white`)
