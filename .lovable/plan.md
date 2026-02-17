

# Erfolgs-Popup im modernen Seitenstil aufwerten

## Uebersicht

Das aktuelle Erfolgs-Popup nutzt das Standard-Dialog-Styling mit minimaler Gestaltung. Es wird an den Glassmorphism-Stil der restlichen Seite angepasst -- mit dezenten Hintergrund-Effekten, groesserem Abstand und einem wertigeren Look.

## Aenderungen

Nur eine Datei: `src/pages/Karriere.tsx` (Zeilen 450-468)

## Was sich aendert

### DialogContent

- Glassmorphism-Background: `bg-white/80 backdrop-blur-xl border border-white/60 shadow-2xl`
- Mehr Padding: `p-10`
- Groessere Rundung: `rounded-3xl`
- Max-Breite bleibt `max-w-md`

### Icon-Bereich

- Groesserer Kreis (w-20 h-20) mit sanftem Gradient-Hintergrund in Blau-Toenen statt dem schlichten `bg-accent`
- Groesseres Haekchen-Icon (w-10 h-10) in Weiss auf dem Gradient-Kreis
- Dezenter Ring/Glow-Effekt um den Kreis (`shadow-lg shadow-primary/20`)

### Typografie

- Titel wird groesser: `text-2xl font-bold font-display` (Space Grotesk)
- Beschreibungstext: `text-base text-muted-foreground mt-2` mit etwas mehr Abstand
- Zusaetzlicher kleiner Hinweis unter dem Text: "Du erhaeltst eine Bestaetigungsmail an deine E-Mail-Adresse." in `text-xs`

### Button

- Bleibt `pill-button-primary` aber wird groesser: `px-10 py-3.5 text-sm`
- Mehr Abstand nach oben: `mt-6`

### Dezentes Konfetti/Sparkle-Detail

- Kleines Sparkles-Icon (aus lucide) ueber dem Haekchen-Kreis in `text-primary/30` als dezentes visuelles Element

