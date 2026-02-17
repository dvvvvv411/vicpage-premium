

# Logo Hover-Effekt im Header und Footer

Beim Hover ueber das Logo wird es sanft groesser skaliert -- passend zum bestehenden `hover-scale` Utility im Design-System.

## Aenderungen

| Datei | Aenderung |
|-------|-----------|
| `src/components/Navbar.tsx` | `className="h-12 w-auto"` wird zu `className="h-12 w-auto transition-transform duration-200 hover:scale-110"` |
| `src/components/Footer.tsx` | `className="h-12 w-auto"` wird zu `className="h-12 w-auto transition-transform duration-200 hover:scale-110"` |

Nur CSS-Klassen auf den `<img>`-Tags -- keine strukturellen Aenderungen.

