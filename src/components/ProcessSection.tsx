const steps = [
  {
    num: "01",
    title: "Analyse",
    desc: "Wir verstehen Ihre bestehenden Prozesse, identifizieren Engpässe und definieren klare Zielgrößen.",
    side: "left" as const,
  },
  {
    num: "02",
    title: "Strategie",
    desc: "Auf Basis der Analyse entwickeln wir einen konkreten Maßnahmenplan – priorisiert nach Impact.",
    side: "right" as const,
  },
  {
    num: "03",
    title: "Umsetzung",
    desc: "Pragmatische Implementierung in Sprints. Keine monatelange Konzeptphase, sondern schnelle Ergebnisse.",
    side: "left" as const,
  },
  {
    num: "04",
    title: "Messung",
    desc: "Kontinuierliches Monitoring und Optimierung. Jede Maßnahme wird an den definierten KPIs gemessen.",
    side: "right" as const,
  },
];

export function ProcessSection() {
  return (
    <section id="arbeitsweise" className="py-24 md:py-32">
      <div className="vic-container">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
          Arbeitsweise
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-20">
          Wie wir arbeiten
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-16 md:space-y-20">
            {steps.map((step) => (
              <div
                key={step.num}
                className={`relative md:grid md:grid-cols-2 md:gap-16 ${
                  step.side === "right" ? "" : ""
                }`}
              >
                {/* Dot on the line */}
                <div className="absolute left-1/2 top-1 w-2 h-2 rounded-full bg-primary -translate-x-1/2 hidden md:block" />

                {step.side === "left" ? (
                  <>
                    <div className="md:text-right md:pr-8">
                      <span className="text-xs font-mono text-primary tracking-wider">
                        {step.num}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-foreground mt-1">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <div className="md:pl-8">
                      <span className="text-xs font-mono text-primary tracking-wider">
                        {step.num}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-foreground mt-1">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
