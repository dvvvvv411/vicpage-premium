
# Bewerbungsformular ueberarbeiten

## Neue Felder und Layout

Das bestehende Formular wird komplett ueberarbeitet. Die alten Felder (Name, E-Mail, Telefon, LinkedIn, Anschreiben/Motivation) werden durch folgende ersetzt:

**Datei:** `src/pages/Karriere.tsx`

### 1. State anpassen (Zeilen 48-54)

Neuer formData-State:
- `firstName`, `lastName`, `email`, `phone`, `street`, `zip`, `city`, `employmentType`
- Die alten Felder (`name`, `linkedin`, `message`) werden entfernt

### 2. Formularfelder ersetzen (Zeilen 196-263)

Neue Feldstruktur im Formular:

| Zeile 1 | Vorname (50%) | Nachname (50%) |
|---------|---------------|----------------|
| Zeile 2 | E-Mail (100%) | |
| Zeile 3 | Telefon (100%) | |
| Zeile 4 | Strasse & Hausnummer (100%) | |
| Zeile 5 | PLZ (1/3) | Stadt (2/3) |
| Zeile 6 | Anstellungsart - Dropdown (100%) |

- Zweispaltige Zeilen verwenden `grid grid-cols-2 gap-3`
- PLZ/Stadt verwenden `grid grid-cols-3 gap-3` wobei PLZ `col-span-1` und Stadt `col-span-2` bekommt
- Fuer die Anstellungsart wird ein Radix Select-Dropdown (bereits installiert) mit den Optionen: Minijob, Teilzeit, Vollzeit verwendet
- Die Textarea (Anschreiben) und der Lebenslauf-Upload bleiben bestehen

### 3. Imports ergaenzen

- `Select, SelectTrigger, SelectValue, SelectContent, SelectItem` aus `@/components/ui/select` importieren

### 4. handleSubmit und Reset anpassen

- Reset-Objekt an die neuen Felder anpassen
