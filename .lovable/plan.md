
# Karriere-Seite: Stellenbeschreibung und Formular nebeneinander

Die aktuelle Seite hat die Stellenbeschreibung und das Bewerbungsformular als zwei separate Sektionen untereinander. Das wird zu einem einzigen 2-Spalten-Layout zusammengefuehrt.

## Aenderung

**Datei:** `src/pages/Karriere.tsx`

Die bisherige Struktur:
- Sektion 1: Job-Details (3 Spalten) + Sidebar (2 Spalten)
- Sektion 2: Separater Gradient-Bereich mit zentriertem Formular

Wird zu einer einzigen Sektion:
- **Linke Spalte (3/5):** Stellenbeschreibung (Titel, Badges, Aufgaben, Profil, Benefits) -- wie bisher
- **Rechte Spalte (2/5):** Sticky-Container mit der "Auf einen Blick"-Card UND dem Bewerbungsformular direkt darunter

## Konkrete Aenderungen

1. Die separate Formular-Sektion (Zeilen 214-339 mit SVG-Trennern und Gradient-Hintergrund) wird komplett entfernt
2. Das Formular wird in die rechte Sidebar-Spalte verschoben, unterhalb der "Auf einen Blick"-Card
3. Die Sidebar bleibt sticky, sodass das Formular beim Scrollen sichtbar bleibt
4. Der "Jetzt bewerben"-Button entfaellt (Formular ist ja direkt sichtbar)
5. Die `scrollToForm`-Funktion wird entfernt (nicht mehr noetig)
6. Das Formular behaelt sein glass-card Styling, wird aber kompakter (kleinere Paddings, engere Feldabstaende)
7. Auf Mobile stapeln sich die Spalten: erst Stellenbeschreibung, dann Formular
