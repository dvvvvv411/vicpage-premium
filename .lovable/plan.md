

# Karriere-Seite: Layout-Umbau

Zwei Aenderungen an `src/pages/Karriere.tsx`:

## 1. "Auf einen Blick" wird eigene Full-Width-Sektion

Die drei Info-Kacheln (Standort, Startdatum, Team) werden aus der Sidebar herausgeloest und als eigene Sektion zwischen PageHero und der Stellenanzeige platziert. Die drei Items werden horizontal nebeneinander in einem 3-Spalten-Grid ueber die volle Breite (`vic-container`) dargestellt -- jeweils in einer eigenen `glass-card-solid`.

## 2. Stellenbeschreibung und Formular 50/50

Das Grid aendert sich von `grid-cols-5` (3+2) zu `grid-cols-1 lg:grid-cols-2` -- also echte 50/50-Aufteilung:

- **Linke Spalte (1/2):** Stellenbeschreibung (Titel, Badges, Aufgaben, Profil, Benefits)
- **Rechte Spalte (1/2):** Sticky Bewerbungsformular

## Technische Aenderungen

**Datei:** `src/pages/Karriere.tsx`

1. Neue Sektion nach `PageHero` einfuegen (vor der Job-Listing-Sektion):
   - `section` mit `py-12 md:py-16 bg-white`
   - `vic-container` mit `grid grid-cols-1 md:grid-cols-3 gap-6`
   - Drei `glass-card-solid rounded-2xl p-6` Cards fuer Standort, Startdatum und Team (dieselben Daten wie bisher, nur als eigenstaendige groessere Karten)

2. In der Job-Listing-Sektion:
   - Grid aendern: `grid-cols-5` wird zu `grid-cols-1 lg:grid-cols-2`
   - `lg:col-span-3` wird zu einfach keinem col-span (automatisch 1/2)
   - `lg:col-span-2` wird ebenfalls entfernt
   - Die "Auf einen Blick"-Card innerhalb der Sidebar wird komplett entfernt (ist jetzt oben)

