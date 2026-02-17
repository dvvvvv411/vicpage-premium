

# Echte Logos aus Simple Icons (CC0-Lizenz)

## Problem

Die aktuellen SVG-Dateien enthalten nur Text-Elemente, die als einfacher Text gerendert werden -- keine echten grafischen Logos.

## Loesung

Die Simple Icons Bibliothek (simpleicons.org) bietet ueber 3.300 echte Markenlogos als SVG unter der CC0-Lizenz (voellig frei nutzbar). Die Logos werden als lokale SVG-Dateien gespeichert.

## Neue Unternehmensauswahl

Nicht alle bisherigen Firmen sind bei Simple Icons verfuegbar (Celonis, Adjust, Sennder, Taxfix, Billie fehlen). Die neue Auswahl besteht aus digitalen Nischen-Unternehmen, die alle echte grafische Logos haben:

1. **Personio** -- HR-Software (behalten)
2. **Contentful** -- Headless CMS (behalten)
3. **Staffbase** -- Mitarbeiter-Kommunikation (behalten)
4. **Notion** -- Produktivitaets-Tool
5. **Asana** -- Projektmanagement
6. **Miro** -- Online-Whiteboard
7. **Linear** -- Issue-Tracking
8. **HubSpot** -- Marketing/CRM

## Technische Umsetzung

1. **8 SVG-Dateien in `public/logos/` ersetzen** mit den echten Vektor-Logos von Simple Icons. Jede Datei enthaelt einen echten grafischen SVG-Pfad (kein Text-Element).

2. **`src/components/HeroSection.tsx` anpassen**:
   - `logos`-Array aktualisieren mit den neuen Firmennamen und Pfaden
   - Nicht mehr benoetigte Dateien (celonis, adjust, sennder, taxfix, billie) werden entfernt bzw. durch die neuen ersetzt

3. **Styling bleibt gleich**: Graustufen-Filter mit Hover-Effekt fuer Farbe.

