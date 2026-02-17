

# Stellenanzeige auf /karriere aktualisieren

## Inhaltliche Aenderungen

Alle Texte und Daten der Stellenanzeige werden an die neuen Vorgaben angepasst.

### 1. "Auf einen Blick" Kacheln (Zeilen 95-123)

- **Standort:** "Berlin / Remote" wird zu "Mainz / Remote (100% Homeoffice)"
- **Startdatum:** bleibt "Ab sofort"
- **Team:** bleibt "12 Mitarbeitende"

### 2. Stellentitel und Badges (Zeilen 133-149)

- Titel: "Digital Marketing Manager (m/w/d)" wird zu "Qualitaetspruefer / Produkttester (m/w/d)" (oder aehnlich passend)
- Badges aktualisieren:
  - "Berlin" wird zu "Mainz / Remote"
  - "Vollzeit" wird zu "Minijob / Teilzeit / Vollzeit"
  - "3+ Jahre Erfahrung" wird zu "Keine Vorerfahrung noetig"

### 3. Aufgaben-Array (Zeilen 29-35)

Neue Aufgaben:
- Durchfuehrung und Dokumentation von vorgegebenen Pruef- und Anwendungsvorgaengen nach internen Richtlinien
- Bearbeitung strukturierter Feedback- und Bewertungsprozesse zu digitalen Produkten und Dienstleistungen
- Erfassung, Weiterleitung und Nachverfolgung festgestellter Abweichungen oder Optimierungshinweise
- Unterstuetzung bei der Qualitaetssicherung durch sorgfaeltige Protokollierung von Ergebnissen und Einhaltung vorgegebener Ablaeufe

### 4. Profil-Array (Zeilen 37-43)

Neue Anforderungen (einsteigerfreundlich):
- Keine Vorerfahrung erforderlich -- ideal fuer Berufseinsteiger und Quereinsteiger
- Fliessende Deutschkenntnisse in Wort und Schrift
- Sicherer Umgang mit gaengigen Office-Anwendungen (Word, Excel & Co.)
- Eigenes Handy oder Laptop vorhanden
- Sorgfaeltige, zuverlaessige und selbststaendige Arbeitsweise
- Interesse an digitalen Produkten und Dienstleistungen

### 5. Benefits-Array (Zeilen 45-51)

Neue Benefits:
- Flexible Arbeitszeiten
- 100% Homeoffice / Remote
- Weiterbildungsmoeglichkeiten
- Flache Hierarchien und ein motiviertes Team

### 6. Neue Sektion: Verfuegbare Stellen und Verguetung

Nach den Benefits wird eine neue Sektion "Verfuegbare Modelle" (oder "Stellen & Verguetung") eingefuegt mit einer uebersichtlichen Darstellung:
- Minijob: 10 Stunden/Woche -- 603,00 EUR/Monat
- Teilzeit: 20 Stunden/Woche -- 1.600,00 EUR/Monat
- Vollzeit: 40 Stunden/Woche -- 3.400,00 EUR/Monat

Dies wird als zusaetzlicher Block im `space-y-10` Container der linken Spalte eingefuegt, mit einem passenden Icon (z.B. `Clock` oder `Briefcase`).

## Technische Aenderung

**Datei:** `src/pages/Karriere.tsx`

- Arrays `tasks`, `profile`, `benefits` mit neuen Inhalten ueberschreiben
- Neues Array `positions` fuer die drei Stellenmodelle anlegen
- Standort-Kachel Text aendern
- Stellentitel und Badges aktualisieren
- Neue Verguetungs-Sektion nach Benefits einfuegen (gleicher Stil wie die anderen Sektionen mit CheckCircle2-Icons oder einer kleinen Tabelle)

