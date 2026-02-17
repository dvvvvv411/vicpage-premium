

# Bewerbungsformular mit Backend verbinden + Erfolgs-Popup

## Uebersicht

Das Formular auf `/karriere` wird an die Supabase Edge Function angebunden. Nach erfolgreichem Absenden erscheint ein Erfolgs-Dialog im Glassmorphism-Stil. Der Lebenslauf-Upload wird auf PDF beschraenkt.

## Aenderungen

Nur eine Datei: `src/pages/Karriere.tsx`

## Was passiert

### 1. Lebenslauf-Upload (nur PDF)

- Verstecktes `<input type="file" accept=".pdf">` hinter dem bestehenden Upload-Bereich
- Klick auf den Dashed-Border-Bereich oeffnet den File-Picker
- Dateiname wird nach Auswahl angezeigt
- Neuer State: `resumeFile: File | null`

### 2. Formular absenden

- Neuer State: `isSubmitting` fuer Ladezustand (Button zeigt Spinner, ist deaktiviert)
- Baut ein `FormData`-Objekt mit allen Feldern:
  - `first_name`, `last_name`, `email`, `phone`, `street`, `zip_code`, `city`, `employment_type`
  - `branding_id` = `"47ef07da-e9ef-4433-9633-549d25e743ce"` (fest eingebaut)
  - `resume` = hochgeladene PDF-Datei
- Sendet POST an `https://luorlnagxpsibarcygjm.supabase.co/functions/v1/submit-application`
- Bei Erfolg (`success: true`): Erfolgs-Dialog oeffnen, Formular zuruecksetzen
- Bei Fehler: Toast mit Fehlermeldung

### 3. Erfolgs-Dialog

- Nutzt die bestehende `Dialog`-Komponente aus `@/components/ui/dialog`
- Gruenes Haekchen-Icon
- Titel: "Bewerbung erfolgreich gesendet!"
- Text: "Vielen Dank fuer deine Bewerbung. Wir werden uns in Kuerze bei dir melden."
- "Schliessen"-Button im Pill-Style
- Styling passend zum Glassmorphism-Design (rounded-2xl)

### 4. Fehlerbehandlung

- Netzwerkfehler: Toast "Verbindungsfehler. Bitte versuche es erneut."
- API-Fehler: Toast mit Fehlermeldung aus der Response
- Try/catch um den gesamten Fetch-Aufruf, `finally` setzt `isSubmitting` zurueck

