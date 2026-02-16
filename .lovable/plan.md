

# VicPage – Kompletter Redesign im Premium Modern Style

Das aktuelle Design wird komplett ueberarbeitet. Statt schwarz-weiss-minimalistisch wird die Seite visuell reichhaltig, mit farbigen Sektionen, UI-Mockups, Badges, glassmorphism Cards und modernen Hintergrund-Elementen -- alles im hellen Theme mit blauen Akzenten.

## Design-Prinzipien (inspiriert von Attendflow-Level)
- Farbige Hintergrund-Sektionen (sanftes Blau, helles Indigo) statt nur weiss
- Glassmorphism Cards mit Backdrop-Blur und subtilen Borders
- Decorative SVG-Elemente (Sterne, Kreise, Dots) als Hintergrund-Ornamente
- UI-Mockup-Illustrationen (als CSS/SVG gebaut) die das Produkt zeigen
- Badges und Trust-Elemente (z.B. "Trusted by 40+ Unternehmen")
- Sanfte Schatten und Tiefe ueberall
- Gerundete Ecken (keine sharp corners mehr)
- Pill-Buttons statt eckige Buttons

## Sektion 1: Hero -- Gross, Bunt, Impactful
- Hintergrund: Sanfter blauer Gradient (von weiss zu hellblau)
- Zentrierter grosser Headline-Text mit einem hervorgehobenen Wort in einer farbigen Pill/Box
- Subtitel darunter
- Zwei Pill-Buttons: "Gespraech vereinbaren" (filled blau) + "Mehr erfahren" (outlined)
- Ein Trust-Badge darunter: "40+ optimierte Workflows" als kleine Badge-Komponente
- Darunter: Reihe mit fiktiven Kunden-Logos (als SVG-Platzhalter gestylt) mit "Marquee"-Effekt (autoplay scroll)
- Dekorative Elemente: Subtle floating dots/stars SVGs im Hintergrund

## Sektion 2: Features / Leistungen -- Bento Grid
- Hintergrund: Weiss
- Section-Badge oben: "Unsere Leistungen" als kleine Pill
- Grosse Headline zentriert
- Bento-Grid Layout (nicht gleiche Cards!):
  - 1 grosser Feature-Block (2 Spalten breit) mit einem eingebauten UI-Mockup (SVG/CSS Dashboard-Illustration)
  - 2 kleinere Feature-Blocks daneben
  - Darunter: 3 gleich grosse Feature-Blocks
- Jede Card: Glassmorphism-Stil, Icon, Titel, kurze Beschreibung
- Hover: Sanfter Scale + Shadow-Erhoehung

## Sektion 3: Ergebnisse / Social Proof
- Hintergrund: Sanfter blauer Gradient-Bereich (bg-blue-50 bis bg-indigo-50)
- Geschwungene SVG-Trenner oben und unten (wie bei Attendflow)
- 4 grosse Metriken in glassmorphism Cards mit Icons
- Darunter: Testimonial-Bereich mit einem Zitat in einer hervorgehobenen Card
- Trust-Badges und Sterne-Dekorationen

## Sektion 4: Arbeitsweise / Prozess
- Hintergrund: Weiss
- Horizontales Step-Layout statt vertikaler Timeline
- 4 Steps als verbundene Cards mit Nummern-Badges (1-4)
- Verbindungs-Linien zwischen den Steps (horizontal)
- Jeder Step hat ein kleines Icon, Titel und Beschreibung
- Aktiver/Hover Step bekommt blauen Hintergrund

## Sektion 5: CTA / Kontakt
- Grosser CTA-Bereich mit blauem Hintergrund (nicht gradient, sondern solides Blau)
- Weisser Text, grosser Headline
- Kontaktformular in einer weissen Glassmorphism Card die ueber den blauen Hintergrund "schwebt"
- Pill-Button "Nachricht senden"
- Dekorative Elemente (SVG Dots/Stars) im Hintergrund

## Footer
- Dunkler Bereich (dark navy/slate) fuer Kontrast
- Logo, Links, Copyright
- Social-Icons als dezente Icons

## Technische Details

### Dateien die geaendert werden:
1. **src/index.css** -- Neue CSS-Variablen, geschwungene SVG-Hintergruende, Glassmorphism-Utilities, Marquee-Animation
2. **tailwind.config.ts** -- Neue Keyframes (marquee, float), erweiterte Farben, Border-Radius auf groessere Werte
3. **src/components/Navbar.tsx** -- Pill-foermiger CTA, glassmorphism Hintergrund bei Scroll, gerundete Ecken
4. **src/components/HeroSection.tsx** -- Komplett neu: zentriert, farbiger Hintergrund, Logo-Marquee, Badges, 2 CTAs, dekorative SVGs
5. **src/components/ServicesSection.tsx** -- Komplett neu: Bento Grid mit Glassmorphism Cards, UI-Mockup SVG, Section-Badge
6. **src/components/ResultsSection.tsx** -- Komplett neu: Farbiger Hintergrund, Curved SVG Dividers, Metriken in Cards, Testimonial
7. **src/components/ProcessSection.tsx** -- Komplett neu: Horizontale Steps mit Verbindungslinien und Nummer-Badges
8. **src/components/ContactSection.tsx** -- Komplett neu: Blauer Hintergrund, schwebende weisse Form-Card
9. **src/components/Footer.tsx** -- Dark Footer mit mehr Struktur

### Neue Utility-Klassen:
- `.glass-card` -- Glassmorphism Card Styles
- `.section-badge` -- Kleine Pill-Labels fuer Sektions-Ueberschriften
- `.curved-divider` -- Geschwungene SVG Section-Trenner
- `.marquee` -- Endlos-Scroll Animation fuer Logo-Reihe

### Visuelle Elemente (als SVG/CSS gebaut):
- Dashboard-Mockup im Bento Grid (SVG mit blauen Farben)
- Dekorative Sterne/Sparkle Icons
- Floating Dots Pattern
- Kunden-Logo Platzhalter (gestylte Rechtecke mit Text)
