

# Adobe Partner Badge: Glassmorphism-Upgrade

Die Trust-Badge mit den Adobe-Logos soll staerker im Glassmorphism-Stil der restlichen Seite gestaltet werden.

## Aenderung

**Datei:** `src/components/HeroSection.tsx` (Zeile 71)

Aktuell nutzt die Badge bereits `glass-card`, aber die inneren Logo-Kreise haben einen harten weissen Hintergrund (`bg-white`), der nicht zum glasigen Look passt.

Anpassungen:
- **Aeussere Badge**: Erhaelt zusaetzlich `backdrop-blur-xl`, eine leicht transparente Hintergrundfarbe (`bg-white/60`) und einen subtilen `shadow-lg` fuer mehr Tiefe
- **Logo-Kreise**: Statt `bg-white` mit hartem Rand werden sie `bg-white/80 backdrop-blur-sm` mit einem weicheren `border-white/60` erhalten
- **Gesamter Container**: Bekommt einen leichten `border border-white/40` fuer den typischen Glas-Effekt

Das Ergebnis ist ein schwebendes, leicht durchscheinendes Element, das sich nahtlos in den Hero-Hintergrund einfuegt.

