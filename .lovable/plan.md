
# Deployment-Ready: Meta-Tags und Lovable-Hinweise bereinigen

## Uebersicht

Die Website wird fuer das Deployment vorbereitet: passende Seitentitel und -beschreibungen fuer alle Seiten, Entfernung aller Lovable-Referenzen aus dem oeffentlich sichtbaren Code.

## Aenderungen

### 1. `index.html` -- Meta-Tags aktualisieren

- **TODO-Kommentar entfernen** (Zeile 6)
- **OG-Image**: Platzhalter-URL `https://lovable.dev/opengraph-image-p98pqg.png` entfernen (durch eigene URL ersetzen oder Meta-Tag entfernen)
- **Twitter**: `@Lovable` durch `@47skys` ersetzen (oder entfernen falls kein Twitter-Account vorhanden)
- **Twitter-Image**: Lovable-URL entfernen

### 2. `index.html` -- Seitentitel und Beschreibungen

Titel und Meta-Beschreibung sind bereits gut gesetzt. Keine Aenderung noetig:
- Title: "47skys -- Digitale Medienagentur fuer Prozessoptimierung"
- Description: "47skys ist die Medienagentur fuer Unternehmen, die Effizienz ernst nehmen..."

### 3. Unterseiten -- `document.title` per useEffect setzen

Jede Unterseite bekommt einen passenden Seitentitel:

| Route | Seitentitel |
|---|---|
| `/leistungen` | Leistungen -- 47skys |
| `/ergebnisse` | Ergebnisse -- 47skys |
| `/arbeitsweise` | Arbeitsweise -- 47skys |
| `/karriere` | Karriere -- 47skys |
| `/kontakt` | Kontakt -- 47skys |
| `/impressum` | Impressum -- 47skys |
| `/datenschutz` | Datenschutz -- 47skys |

Umsetzung: `useEffect(() => { document.title = "..."; }, []);` in jeder Seiten-Komponente.

### 4. `src/pages/NotFound.tsx` -- Texte eindeutschen

- "Oops! Page not found" wird zu "Seite nicht gefunden"
- "Return to Home" wird zu "Zurueck zur Startseite"
- `document.title = "Seite nicht gefunden -- 47skys"`

### 5. `vite.config.ts` -- lovable-tagger bleibt

Der `lovable-tagger` laeuft nur im Development-Modus (`mode === "development"`) und ist im Production-Build nicht enthalten. Er kann bleiben, da er keine Auswirkung auf das Deployment hat.

## Dateien die geaendert werden

- `index.html`
- `src/pages/Leistungen.tsx`
- `src/pages/Ergebnisse.tsx`
- `src/pages/Arbeitsweise.tsx`
- `src/pages/Karriere.tsx`
- `src/pages/Kontakt.tsx`
- `src/pages/Impressum.tsx`
- `src/pages/Datenschutz.tsx`
- `src/pages/NotFound.tsx`
