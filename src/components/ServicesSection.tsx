const services = [
  {
    num: "01",
    title: "Prozessoptimierung & Automatisierung",
    desc: "Wir analysieren Ihre bestehenden Workflows und eliminieren Reibungsverluste. Durch gezielte Automatisierung werden manuelle Schritte reduziert – messbar und nachhaltig.",
    size: "large" as const,
  },
  {
    num: "02",
    title: "Digitale Strategie & Content",
    desc: "Klare Positionierung statt Content-Flut. Wir entwickeln Strategien, die auf Ihre Geschäftsziele einzahlen – nicht auf Vanity Metrics.",
    size: "medium" as const,
  },
  {
    num: "03",
    title: "Performance & Analytics",
    desc: "Datengetriebene Entscheidungen statt Bauchgefühl. Wir machen Ergebnisse sichtbar und optimieren kontinuierlich.",
    size: "small" as const,
  },
];

export function ServicesSection() {
  return (
    <section id="leistungen" className="py-24 md:py-32">
      <div className="vic-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Fixed label left */}
          <div className="lg:col-span-4">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
              Leistungen
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Was wir tun
            </h2>
          </div>

          {/* Staggered blocks right */}
          <div className="lg:col-span-8 space-y-0">
            {services.map((s) => (
              <div
                key={s.num}
                className={`group border-t border-border py-8 md:py-10 pl-0 hover:pl-4 transition-all duration-300 relative ${
                  s.size === "large" ? "md:py-14" : s.size === "small" ? "md:py-8" : ""
                }`}
              >
                {/* Blue accent bar on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                <div className="flex items-baseline gap-6">
                  <span className="text-sm font-mono text-primary">{s.num}</span>
                  <div>
                    <h3
                      className={`font-display font-semibold tracking-tight text-foreground ${
                        s.size === "large"
                          ? "text-xl md:text-2xl"
                          : s.size === "medium"
                          ? "text-lg md:text-xl"
                          : "text-base md:text-lg"
                      }`}
                    >
                      {s.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed max-w-lg text-sm md:text-base">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {/* Bottom border */}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
