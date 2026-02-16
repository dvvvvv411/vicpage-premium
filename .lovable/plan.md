
# Adobe Partner Badge -- Interaktive Animationen

Das Adobe Partner Badge bekommt mehr Interaktivitaet durch Hover-Animationen und Transitions.

## Aenderungen

**Datei:** `src/components/HeroSection.tsx` (Zeilen 71-91)

- **Badge-Container**: Hover-Effekt mit leichtem Scale-Up (`hover:scale-105`), sanftem Shadow-Wechsel (`hover:shadow-xl`) und smooth Transition
- **Logo-Kreise**: Beim Hover ueber das Badge spreizen sich die Logos auseinander (von `-space-x-1.5` zu normalem Spacing via `group-hover:translate-x` pro Logo). Jedes Logo bekommt zusaetzlich einen eigenen leichten Bounce/Scale-Effekt mit gestaffeltem Delay
- **Einzelne Logos**: Hover ueber ein einzelnes Logo zeigt einen Tooltip-artigen Scale (`hover:scale-125 hover:z-10`) und hebt es visuell hervor
- **Text**: Dezenter Color-Shift beim Hover (z.B. Text wird etwas kraeftiger blau)
- **Cursor**: `cursor-pointer` fuer besseres Feedback

Alle Animationen nutzen Tailwind `transition-all duration-300` und `group`/`group-hover` Klassen -- kein zusaetzliches CSS noetig.
