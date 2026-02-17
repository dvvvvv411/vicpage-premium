
# Footer Navigation in 2 Spalten aufteilen

## Uebersicht

Die 5 Navigationslinks im Footer werden aktuell untereinander aufgelistet. Sie werden stattdessen in ein 2-Spalten-Grid aufgeteilt, damit die Spalte kompakter wird.

## Aenderung

Datei: `src/components/Footer.tsx` (Zeile 23)

Das `div` mit `flex flex-col` wird zu einem `grid grid-cols-2 gap-x-8 gap-y-2.5` geaendert. Die 5 Links verteilen sich dann so:

```text
Leistungen    Karriere
Ergebnisse    Kontakt
Arbeitsweise
```

Nur eine Zeile CSS-Klassen aendert sich, keine strukturellen Umbauten noetig.
