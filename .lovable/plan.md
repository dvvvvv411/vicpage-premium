

# Zwei Anpassungen: Services-Headline + Footer-Redesign

## 1. Services-Headline auf 2 Zeilen aufteilen

Aktuell steht die Headline "Alles was Sie brauchen. Nichts was Sie nicht brauchen." in einer Zeile. Sie wird auf zwei Zeilen aufgeteilt:

- Zeile 1: **Alles was Sie brauchen.**
- Zeile 2: **Nichts was Sie nicht brauchen.**

Ausserdem wird der `text-gradient-blue` Effekt entfernt (laut Design-Richtlinien keine Gradient-Texte), stattdessen bleibt die zweite Zeile als normaler Text oder mit einem dezenten blauen Akzent.

**Datei:** `src/components/ServicesSection.tsx` (Zeile 81-83)

## 2. Footer-Redesign passend zum Seitenstyle

Der aktuelle Footer ist zu simpel und dunkel -- er passt nicht zum hellen, modernen Glassmorphism-Design der restlichen Seite. Neues Design:

- **Heller Hintergrund** (weiss/surface) statt dunkles `vic-dark`
- **Oberer Separator** als duenne blaue Linie statt harter Farbwechsel
- **3-Spalten-Layout**:
  - Links: Logo + kurzer Beschreibungstext
  - Mitte: Navigation-Links als Spalte
  - Rechts: Kontaktinfos (E-Mail, Telefon)
- **Unterer Bereich**: Copyright + Impressum/Datenschutz Links, getrennt durch feine Linie
- Texte in `muted-foreground` statt `white/70`
- Glassmorphism-Card-Style oder einfach cleaner weisser Hintergrund mit Border-Top

**Datei:** `src/components/Footer.tsx` (komplett ueberarbeitet)

