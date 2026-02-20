

# Altes Lovable-Favicon entfernen

## Problem

Im `public/`-Ordner liegt noch eine **`favicon.ico`**-Datei (das alte Lovable-Favicon). Viele Browser und auch Google suchen automatisch nach `/favicon.ico`, unabhaengig davon was im HTML steht. Deshalb wird teilweise noch das alte Icon angezeigt.

## Loesung

1. **`public/favicon.ico` loeschen** -- Die alte Datei entfernen, damit kein Browser sie mehr finden kann.
2. Keine weiteren Aenderungen noetig. Die `index.html` verweist bereits korrekt auf `/favicon.png` (dein 47skys-Logo).

Nach dem Loeschen und Veroeffentlichen sollte das Lovable-Favicon endgueltig verschwunden sein. Google braucht danach noch etwas Zeit zum Aktualisieren (Tage bis Wochen).

