
# VicPage -- Unterseiten fuer alle Sektionen

Die bestehenden Sektionen der Landingpage werden zu eigenen Unterseiten ausgebaut. Die Navbar wird von Scroll-Links auf echte React-Router-Links umgebaut. Jede Unterseite behaelt den gleichen visuellen Style (Glassmorphism, blaue Akzente, Section-Badges, Pill-Buttons) und erweitert den Inhalt der jeweiligen Sektion mit deutlich mehr Details.

## Neue Seitenstruktur

```text
/                  --> Landingpage (Hero + gekuerzte Sektions-Previews + CTA)
/leistungen        --> Detaillierte Leistungsseite
/ergebnisse        --> Ergebnisse, Metriken & Case Studies
/arbeitsweise      --> Ausfuehrlicher Prozess-Ablauf
/kontakt           --> Vollstaendige Kontaktseite
```

## Aenderungen an bestehenden Dateien

### 1. Navbar (`src/components/Navbar.tsx`)
- Scroll-Buttons durch React-Router `Link`-Komponenten ersetzen
- Links zeigen auf `/leistungen`, `/ergebnisse`, `/arbeitsweise`
- "Kontakt"-Button verlinkt auf `/kontakt`
- Logo-Klick navigiert zu `/` statt nach oben zu scrollen
- Aktiver Link wird visuell hervorgehoben (z.B. dickerer Text oder blaue Unterstreichung)

### 2. App Router (`src/App.tsx`)
- Neue Routes fuer `/leistungen`, `/ergebnisse`, `/arbeitsweise`, `/kontakt`

### 3. Landingpage (`src/pages/Index.tsx`)
- Sektionen bleiben als Kurzvorschau erhalten
- Jede Sektion bekommt am Ende einen "Mehr erfahren"-Link zur jeweiligen Unterseite

## Neue Unterseiten

### 4. Leistungen-Seite (`src/pages/Leistungen.tsx`)
- Hero-Bereich oben mit Section-Badge und grosser Headline
- Alle 6 Services ausfuehrlich dargestellt -- jeder Service mit eigenem Abschnitt:
  - Grosse Ueberschrift, ausfuehrliche Beschreibung (3-4 Saetze statt 1)
  - Vorteile/Benefits als kleine Liste
  - UI-Mockup oder visuelles Element beim Hauptservice (Prozessoptimierung)
- Abwechselndes Layout: Service-Block links/rechts im Wechsel
- CTA-Bereich am Ende: "Lassen Sie uns Ihre Prozesse optimieren"

### 5. Ergebnisse-Seite (`src/pages/Ergebnisse.tsx`)
- Hero-Bereich mit Metriken prominent dargestellt
- Erweiterte Case Studies (2-3 fiktive Fallstudien):
  - Kundenname, Branche, Herausforderung, Loesung, Ergebnis
  - Jeweils in einer Glassmorphism-Card
- Mehrere Testimonials (3-4 statt nur eines)
- Trust-Logos-Bereich erweitert
- CTA am Ende

### 6. Arbeitsweise-Seite (`src/pages/Arbeitsweise.tsx`)
- Hero-Bereich
- Alle 4 Schritte detailliert erklaert:
  - Jeder Schritt als grosser Abschnitt mit Nummer, Icon, Titel
  - Ausfuehrliche Beschreibung (Was passiert genau? Was sind die Ergebnisse?)
  - Unterpunkte/Checkliste pro Schritt
- Vertikale Timeline mit verbindender Linie
- FAQ-Bereich: 3-4 haeufige Fragen zur Zusammenarbeit
- CTA am Ende

### 7. Kontakt-Seite (`src/pages/Kontakt.tsx`)
- Hero-Bereich mit Statement
- Grosses Kontaktformular (Name, E-Mail, Telefon, Unternehmen, Nachricht)
- Kontaktinformationen daneben (E-Mail, Telefon, Adresse)
- Optional: Karte/Standort-Bereich (als Platzhalter)
- FAQ-Bereich: "Wie schnell antworten Sie?" etc.

## Gemeinsame Elemente auf jeder Unterseite
- Navbar oben (mit aktivem Link-Highlight)
- Footer unten
- Hero-Bereich mit Section-Badge + Headline + Subtitle
- CTA-Bereich am Seitenende der zurueck zu `/kontakt` oder direkt ein Formular zeigt
- ScrollToTop beim Seitenwechsel (damit neue Seiten oben starten)

## Technische Details

### Dateien die erstellt werden:
1. `src/pages/Leistungen.tsx` -- Detaillierte Leistungsseite
2. `src/pages/Ergebnisse.tsx` -- Case Studies & Metriken
3. `src/pages/Arbeitsweise.tsx` -- Prozess-Details & FAQ
4. `src/pages/Kontakt.tsx` -- Vollstaendige Kontaktseite
5. `src/components/PageHero.tsx` -- Wiederverwendbare Hero-Komponente fuer Unterseiten
6. `src/components/CTASection.tsx` -- Wiederverwendbarer CTA-Block fuer Seitenenden
7. `src/components/ScrollToTop.tsx` -- Scrollt zum Seitenanfang bei Route-Wechsel

### Dateien die geaendert werden:
1. `src/App.tsx` -- Neue Routes hinzufuegen
2. `src/components/Navbar.tsx` -- Scroll-Links zu Router-Links umbauen
3. `src/components/Footer.tsx` -- Footer-Links auf Unterseiten verlinken
4. `src/pages/Index.tsx` -- "Mehr erfahren"-Links zu den Unterseiten hinzufuegen
