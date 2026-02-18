

# Alle Hosts in Vite erlauben

## Aenderung

Datei: `vite.config.ts`

In der `server`-Konfiguration wird `allowedHosts: true` hinzugefuegt. Das erlaubt alle Hosts (z.B. `47-skys.de`) ohne Einschraenkung.

```text
server: {
  host: "::",
  port: 8080,
  allowedHosts: true,   // <-- neu
  hmr: { overlay: false },
},
```

Nur eine Zeile wird hinzugefuegt, keine weiteren Aenderungen noetig.

