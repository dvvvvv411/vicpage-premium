

# Cookie-Consent-Banner

Ein dezenter, zum hellen Premium-Design passender Cookie-Banner, der beim ersten Besuch unten am Bildschirmrand erscheint und sich nach Zustimmung nicht mehr zeigt.

## Verhalten

- Erscheint beim ersten Seitenbesuch als schmale Leiste am unteren Bildschirmrand
- Speichert die Zustimmung im `localStorage` unter dem Key `cookie-consent`
- Wird bei erneutem Besuch nicht mehr angezeigt
- Zwei Buttons: "Akzeptieren" (primaer, pillenfoermig) und "Mehr erfahren" (Link zur Datenschutz-Seite)
- Sanfte Einblend-Animation von unten (CSS transition)

## Design

- Glassmorphism-Stil (`glass-card` Klasse) passend zum bestehenden Seitendesign
- Heller Hintergrund mit Backdrop-Blur, dezenter Border
- Kompakter Text in einer Zeile auf Desktop, gestapelt auf Mobile
- Pillenfoermige Buttons wie im restlichen Design

## Technische Umsetzung

| Datei | Aenderung |
|-------|-----------|
| `src/components/CookieConsent.tsx` | Neue Komponente erstellen |
| `src/pages/Index.tsx` | Komponente einbinden |

### Neue Datei: `src/components/CookieConsent.tsx`

- `useState` fuer Sichtbarkeit, initialisiert aus `localStorage.getItem("cookie-consent")`
- Bei Klick auf "Akzeptieren": `localStorage.setItem("cookie-consent", "true")` und Banner ausblenden
- "Mehr erfahren"-Link fuehrt zu `/datenschutz`
- Positionierung: `fixed bottom-0` mit `z-40` (unter der Navbar)

### `src/pages/Index.tsx`

- Import und Einbindung von `<CookieConsent />` am Ende des `<main>`-Blocks

