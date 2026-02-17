

# Kleinere Nischen-Unternehmen im Logo-Marquee

## Aenderung

Statt grosser Konzerne wie Miele oder Stihl werden kleinere, digitale Nischen-Unternehmen verwendet, die besser zu einer Digitalagentur passen.

## Ausgewaehlte Unternehmen

Acht kleinere deutsche Online-/Digital-Unternehmen:

1. **Personio** – HR-Software fuer KMUs
2. **Celonis** – Process Mining
3. **Adjust** – Mobile-Analytics
4. **Contentful** – Headless CMS
5. **Staffbase** – Mitarbeiter-Kommunikation
6. **Sennder** – Digitale Logistik
7. **Taxfix** – Steuer-App
8. **Billie** – B2B-Zahlungen

## Technische Umsetzung

**Datei:** `src/components/HeroSection.tsx`

1. **`logos`-Array ersetzen**: Statt der bisherigen String-Liste wird ein Array mit `{ name, logoUrl }` Objekten verwendet. Die Logo-URLs stammen von oeffentlich zugaenglichen Quellen (z.B. Wikimedia Commons, offizielle Brand-Assets, oder logo.clearbit.com).

2. **Marquee-Rendering anpassen**: Statt Platzhalter-Buchstaben werden `<img>`-Tags mit den echten Logos gerendert. Darstellung in Graustufen mit reduzierter Opacity, Hover-Effekt bringt Farbe zurueck.

3. **Nur Logos, kein Text**: Wie gewuenscht werden ausschliesslich die Logo-Grafiken ohne begleitende Firmennamen angezeigt.

4. **Styling**: Einheitliche Hoehe (28-32px), `object-contain`, `grayscale` + `opacity-50`, bei Hover `grayscale-0 opacity-100`.

