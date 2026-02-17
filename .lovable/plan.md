
# Rebranding VicPage zu 47skys + Rechtstexte

## 1. Branding-Aenderungen (VicPage -> 47skys)

Alle Vorkommen von "VicPage" werden durch "47skys" ersetzt. Betroffen sind:

| Datei | Aenderung |
|-------|-----------|
| `index.html` | Title, Meta-Tags, Author |
| `src/App.css` | Kommentar |
| `src/components/Navbar.tsx` | Logo-Text: `47<span>skys</span>` |
| `src/components/Footer.tsx` | Logo-Text, E-Mail (`info@47-skys.de`), Telefon (`06131-6365858`), Copyright, Impressum/Datenschutz-Links auf `/impressum` und `/datenschutz` |
| `src/components/ContactSection.tsx` | E-Mail und Telefon |
| `src/components/ResultsSection.tsx` | Testimonial-Text |
| `src/pages/Ergebnisse.tsx` | 4 Testimonial-Zitate |
| `src/pages/Kontakt.tsx` | Kontaktdaten (E-Mail, Telefon, Standort: Mainz), Map-Platzhalter |
| `src/pages/Karriere.tsx` | Subtitle-Text, Platzhalter "Berlin" -> "Mainz" |
| `src/components/Footer.tsx` | Beschreibungstext anpassen |

## 2. Kontaktdaten-Aktualisierung

- **E-Mail**: `info@47-skys.de`
- **Telefon**: `06131-6365858`
- **Standort**: Mainz, Deutschland
- **Domain**: 47-skys.de

## 3. Neue Rechtstexte-Seiten

### Impressum (`src/pages/Impressum.tsx`)

Vollstaendiges Impressum nach deutschem Recht mit:
- 47skys GmbH, Am Klostergarten 6, 55131 Mainz
- Geschaeftsfuehrer: Florian Braun
- Amtsgericht Mainz, HRB 54159
- USt-IdNr.: DE258920497
- Kontaktdaten
- Haftungsausschluss, Urheberrecht, Streitbeilegung

### Datenschutz (`src/pages/Datenschutz.tsx`)

Datenschutzerklaerung mit:
- Verantwortlicher (47skys GmbH)
- Datenerhebung auf der Website
- Kontaktformular-Daten
- Hosting, Cookies, Analyse
- Rechte der Betroffenen

Beide Seiten verwenden das bestehende Layout (Navbar, PageHero, Footer).

## 4. Routing und Navigation

### `src/App.tsx`
- Neue Routen: `/impressum` und `/datenschutz`

### `src/components/Footer.tsx`
- Impressum-Link: `to="/impressum"`
- Datenschutz-Link: `to="/datenschutz"`

## Technische Details

- Insgesamt ca. 12 Dateien betroffen (10 bearbeiten, 2 neu erstellen)
- CSS-Klasse `vic-container` bleibt unveraendert (rein technischer Klassenname)
- Tailwind-Farben `vic-blue-light`, `vic-indigo` etc. bleiben ebenfalls (interne Variablen)
