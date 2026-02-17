

# Erfolgs-Popup Feinschliff

## Uebersicht

Drei kleine Anpassungen am Erfolgs-Dialog in `src/pages/Karriere.tsx`.

## Aenderungen

### 1. Weisser Hintergrund statt grau/transparent

`bg-white/80` wird zu `bg-white` geaendert, damit der Hintergrund rein weiss ist.

### 2. Titel zentrieren

`DialogTitle` bekommt `text-center w-full` damit der Text mittig steht statt linksbuendig.

### 3. Beschreibungstext auf 2 Zeilen

Der Text wird aufgeteilt in zwei Zeilen:
- Zeile 1: "Vielen Dank fuer deine Bewerbung."
- Zeile 2: "Wir werden uns in Kuerze bei dir melden."

Umgesetzt mit einem `<br />` Tag innerhalb der DialogDescription.

## Technische Details

Alle Aenderungen betreffen nur den Dialog-Block in `src/pages/Karriere.tsx` (ca. Zeilen 450-470).

