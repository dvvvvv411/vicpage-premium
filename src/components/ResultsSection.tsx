const metrics = [
  { value: "73%", label: "Durchschnittliche Prozessbeschleunigung" },
  { value: "40+", label: "Optimierte Workflows" },
  { value: "2.1M€", label: "Eingesparte Kosten für Kunden" },
  { value: "12", label: "Monate ∅ Zusammenarbeit" },
];

export function ResultsSection() {
  return (
    <section id="ergebnisse" className="py-24 md:py-32 bg-secondary/50">
      <div className="vic-container">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
          Ergebnisse
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16">
          Zahlen statt Versprechen
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((m) => (
            <div key={m.label} className="space-y-2">
              <span className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                {m.value}
              </span>
              <p className="text-sm text-muted-foreground leading-snug">{m.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-16 text-muted-foreground max-w-2xl text-base leading-relaxed">
          VicPage ist die Medienagentur für Unternehmen, die Effizienz ernst nehmen.
          Wir liefern keine Hochglanz-Decks – wir liefern Resultate.
        </p>
      </div>
    </section>
  );
}
