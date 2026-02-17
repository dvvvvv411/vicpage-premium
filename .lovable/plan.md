

# 3 Meta Pixel Codes in index.html einfuegen

## Was passiert

Alle 3 Meta Pixel Scripte werden **exakt so wie du sie geschickt hast** in die `index.html` eingefuegt -- kein eigener Code, keine Aenderungen an den Scripts.

## Wo genau

Die 3 Pixel-Codes werden direkt vor dem schliessenden `</head>`-Tag in `index.html` eingefuegt (Zeile 19). Das ist der Standard-Ort fuer Tracking-Scripte.

## Die 3 Pixel-IDs

1. `1702586507767761`
2. `1964178791198665`
3. `1175777237872122`

## Betroffene Datei

- `index.html` -- Die 3 Script-Bloecke und die zugehoerigen `<noscript>`-Tags werden 1:1 eingefuegt

## Wichtiger Hinweis

Da das Meta Pixel SDK (`fbevents.js`) eine `if(f.fbq)return`-Pruefung hat, wird das SDK nur einmal geladen. Alle 3 `fbq('init', ...)` Aufrufe registrieren aber jeweils ihre eigene Pixel-ID, sodass Events an alle 3 Pixel gesendet werden.

