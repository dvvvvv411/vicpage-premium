

# Adobe Partner Badge: Komplettes Redesign

Die aktuelle Badge ist zu subtil und wirkt statisch. Sie wird komplett neu gestaltet mit mehr visueller Praesenz, Interaktivitaet und dem gleichen modernen Stil wie der Rest der Seite.

## Aenderungen

### 1. Neues Badge-Layout (`src/components/HeroSection.tsx`, Zeilen 70-91)

Der gesamte Trust-Badge-Block wird ersetzt durch ein deutlich aufgewertetes Design:

- **Groesserer Container**: Statt `rounded-full` wird `rounded-2xl` verwendet fuer mehr Praesenz, mit mehr Padding (`px-6 py-4`)
- **Hover-Interaktion**: `hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300` -- genau wie die Bento-Cards in der ServicesSection
- **Cursor pointer**: Signalisiert Interaktivitaet
- **Glassmorphism**: Nutzt die bestehende `glass-card` Klasse korrekt (die bereits `backdrop-blur-xl` und den Gradient-Hintergrund enthaelt), plus `border border-white/40`

### 2. Logo-Icons statt Kreise

- Die Logos werden nicht mehr in runden Containern mit Overlap (`-space-x-1.5`) dargestellt
- Stattdessen: **quadratische `rounded-xl` Container** mit etwas Abstand (`gap-2`), jeweils `w-10 h-10`, mit `bg-white/60 backdrop-blur-sm` und `hover:bg-white/90 hover:scale-110 transition-all duration-200`
- Jedes Logo bekommt einen individuellen **Tooltip** (ueber das bestehende Tooltip-UI-Component) mit dem Produktnamen
- Logo-Groesse erhoehen auf `w-6 h-6`

### 3. Text-Bereich

- "Offizieller Adobe Partner" bleibt fett
- "Creative Cloud Suite" wird ersetzt durch einen kleinen blauen Akzent-Punkt und "Zertifizierter Partner" in `text-primary` fuer mehr Farbe
- Ein dezenter Trenner (`border-l border-white/40`) zwischen Logos und Text

### 4. Technische Details

**Datei:** `src/components/HeroSection.tsx`

- Import von `Tooltip, TooltipTrigger, TooltipContent, TooltipProvider` aus `@/components/ui/tooltip`
- Ersetzen des Badge-Blocks (Zeilen 70-91) mit dem neuen Design
- Jedes Logo-Icon wird in ein `Tooltip`-Wrapper gepackt

**Keine weiteren Dateien betroffen** -- alle benoetigten Styles (`glass-card`, Transitions) und Components (Tooltip) existieren bereits.

