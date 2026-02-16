
# Neue Unterseite: /karriere

Die wichtigste Seite der Website -- eine moderne, visuell ansprechende Karriereseite mit einer einzelnen Stellenanzeige und integriertem Bewerbungsformular.

## Neue Dateien

### 1. `src/pages/Karriere.tsx`

Vollstaendige neue Seite mit folgendem Aufbau:

**a) PageHero** (wie alle anderen Unterseiten)
- Badge: "Karriere"
- Titel: "Werde Teil unseres Teams" (mit Gradient-Akzent)
- Subtitle: Platzhaltertext ueber Teamkultur

**b) Stellenanzeige-Sektion** (weisser Hintergrund)
- Linke Seite (3/5 Breite): Die Stellenanzeige in einem glass-card-solid Container
  - Stellentitel (z.B. "Digital Marketing Manager (m/w/d)")
  - Meta-Infos als kleine Badges/Pills: Standort, Vertragsart, Erfahrungslevel
  - Abschnitte mit Icons: "Deine Aufgaben", "Dein Profil", "Was wir bieten" -- jeweils als Aufzaehlungsliste mit CheckCircle2-Icons (wie auf der Leistungen-Seite)
- Rechte Seite (2/5 Breite): Sticky-Sidebar mit:
  - Kurzinfo-Card (Standort, Startdatum, Team-Groesse)
  - "Jetzt bewerben"-Button der zum Formular scrollt

**c) Bewerbungsformular-Sektion** (geschwungener SVG-Trenner, Gradient-Hintergrund wie FAQ auf Kontaktseite)
- Zentriertes Formular in glass-card (max-w-3xl)
- Felder: Name, E-Mail, Telefon, LinkedIn-Profil (optional), Textarea fuer Anschreiben/Motivation
- Datei-Upload-Bereich (visuell gestaltet, noch ohne Funktion -- nur UI)
- Submit-Button im pill-button-primary Stil
- Toast-Feedback bei Absenden

**d) CTASection** am Ende (bestehende Komponente, angepasster Text)

### 2. Aenderungen an bestehenden Dateien

**`src/App.tsx`**
- Import der neuen Karriere-Seite
- Neue Route: `<Route path="/karriere" element={<Karriere />} />`

**`src/components/Navbar.tsx`**
- "Karriere" als neuen Link in `navLinks` hinzufuegen (zwischen "Arbeitsweise" und Kontakt-Button)

**`src/components/Footer.tsx`**
- "Karriere"-Link in der Footer-Navigation ergaenzen

## Design-Details

- Gleiche Typografie (Space Grotesk Headings, Inter Body)
- Gleiche Farbpalette und Glassmorphism-Effekte
- Pillenfoermige Buttons, section-badges, rounded-2xl Cards
- Geschwungene SVG-Sektions-Trenner
- Dezente Hintergrund-Ornamente (Sparkles, Kreise) wie auf den anderen Seiten
- Responsive: Mobile-First, Sidebar wird auf Mobile zum normalen Flow
- Platzhaltertexte ueberall -- koennen spaeter einfach angepasst werden

## Technische Details

- Formular mit useState wie auf der Kontaktseite
- Smooth-Scroll zum Bewerbungsformular via `document.getElementById().scrollIntoView()`
- Lucide Icons: `Briefcase`, `MapPin`, `Clock`, `Users`, `CheckCircle2`, `Upload`, `Send`, `Sparkles`
- Keine neuen Dependencies noetig
