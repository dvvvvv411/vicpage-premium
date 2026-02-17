

# Preise anpassen

## Aenderung

Die monatlichen Verguetungen werden auf die neuen Netto-Betraege aktualisiert – ueberall wo sie erscheinen.

## Technische Aenderung

**Datei:** `src/pages/Karriere.tsx`

Drei Stellen werden angepasst:

1. **`positions`-Array** (oben in der Datei):
   - Vollzeit: "3.400,00 EUR" wird zu "3.050,00 EUR"
   - Teilzeit: "1.600,00 EUR" wird zu "1.650,00 EUR"
   - Minijob: bleibt "603,00 EUR"

2. **Verguetungssektion** (Karten im linken Bereich): Wird automatisch aus dem Array gerendert, daher keine separate Aenderung noetig.

3. **Dropdown-Optionen** (SelectItems im Formular):
   - "Minijob – 603,00 EUR/Monat" bleibt
   - "Teilzeit – 1.600,00 EUR/Monat" wird zu "Teilzeit – 1.650,00 EUR netto/Monat"
   - "Vollzeit – 3.400,00 EUR/Monat" wird zu "Vollzeit – 3.050,00 EUR netto/Monat"

Zusaetzlich wird ueberall "netto" ergaenzt, damit die Angabe eindeutig ist.

