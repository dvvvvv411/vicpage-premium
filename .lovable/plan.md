

# Hero Section: Adobe Partner Badge

Die "40+ Workflows optimiert & skaliert" Trust-Badge mit den Initialen-Avataren wird ersetzt durch eine "Offizieller Adobe Partner" Badge mit echten Adobe-Produktlogos.

## Aenderungen

**Datei:** `src/components/HeroSection.tsx` (Zeilen 64-80)

Der aktuelle Block mit den 4 Initialen-Kreisen ("M", "K", "S", "T") und dem Text "40+ Workflows / optimiert & skaliert" wird ersetzt durch:

- **4 Adobe-Produktlogos** als kleine Bilder in runden Containern, geladen von offiziellen/oeffentlichen CDN-URLs:
  - Adobe Photoshop
  - Adobe Illustrator
  - Adobe Premiere Pro
  - Adobe After Effects
- **Neuer Text:**
  - Zeile 1 (fett): "Offizieller Adobe Partner"
  - Zeile 2 (klein, muted): "Creative Cloud Suite"

Die Logos werden ueber `<img>`-Tags mit oeffentlich verfuegbaren Adobe-Produkticons eingebunden (z.B. von upload.wikimedia.org oder den offiziellen Adobe-Asset-URLs). Der glassmorphism-Card-Style bleibt erhalten.

