
# CTA-Sektionen Redesign -- Premium Light Style

Beide CTA-Sektionen verwenden aktuell einen simplen blauen Gradient-Hintergrund (`bg-gradient-to-br from-primary via-primary to-vic-indigo`). Das passt nicht zum hellen, modernen Glassmorphism-Design der restlichen Seite.

## Neues Design-Konzept

Statt des soliden blauen Gradients bekommen die CTA-Sektionen einen hellen, layered Hintergrund mit dekorativen Elementen:

- **Hintergrund**: Helles Blau (`bg-accent` / `bg-vic-blue-light`) mit subtilen radialen Gradient-Kreisen als CSS-Dekorationen
- **Glassmorphism-Card** in der Mitte: Der eigentliche CTA-Inhalt sitzt in einer zentrierten `glass-card` mit Backdrop-Blur
- **Dekorative Elemente**: Grosse, unscharfe farbige Kreise (blau/indigo) im Hintergrund als "Blobs", floating Sparkles/Dots
- **Text**: Dunkler Text (`foreground`) statt weiss, mit `text-primary` Akzenten
- **Button**: Blauer Pill-Button (`pill-button-primary`) statt invertierter weisser Button

## Dateien die geaendert werden

### 1. `src/components/CTASection.tsx`
- Hintergrund von solidem Blau zu hellem `bg-accent`/`bg-muted` mit dekorativen Blur-Blobs
- Text auf dunkle Farben umstellen
- Dekorative Gradient-Kreise (absolute positioniert, blur, opacity) als Hintergrund-Elemente
- Button zurueck auf Standard `pill-button-primary`

### 2. `src/components/ContactSection.tsx`
- Gleiche Behandlung: heller Hintergrund mit Blur-Blobs statt solidem Blau
- Formular-Card bleibt weiss, aber der aeussere Container wird hell
- Linke Text-Seite: dunkler Text mit blauen Akzenten statt weiss
- Kontaktinfos in `muted-foreground` statt `white/70`

## Visuelles Ergebnis
- Konsistenter heller Premium-Look auf der ganzen Seite
- Tiefe durch ueberlagerte Blur-Kreise statt flachem Gradient
- Moderner "Next Level"-Stil passend zum Rest der Seite
