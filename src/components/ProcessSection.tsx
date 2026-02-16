import { Search, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const steps = [
  { num: 1, icon: Search, title: "Analyse", desc: "Bestehende Prozesse verstehen, Engpässe identifizieren und klare Zielgrößen definieren." },
  { num: 2, icon: Lightbulb, title: "Strategie", desc: "Konkreten Maßnahmenplan entwickeln – priorisiert nach Impact und Machbarkeit." },
  { num: 3, icon: Rocket, title: "Umsetzung", desc: "Pragmatische Implementierung in Sprints. Schnelle Ergebnisse statt monatelanger Konzeptphase." },
  { num: 4, icon: BarChart3, title: "Messung", desc: "Kontinuierliches Monitoring und Optimierung an definierten KPIs." },
];

export function ProcessSection() {
  return (
    <section id="arbeitsweise" className="py-24 md:py-32 bg-white">
      <div className="vic-container">
        <div className="text-center mb-16">
          <div className="section-badge mb-4">Arbeitsweise</div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Wie wir <span className="text-gradient-blue">arbeiten</span>
          </h2>
        </div>

        {/* Desktop: horizontal */}
        <div className="hidden lg:block">
          <div className="relative grid grid-cols-4 gap-6">
            {/* Connecting line */}
            <div className="absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

            {steps.map((step) => (
              <div key={step.num} className="relative group">
                {/* Number badge */}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-white border-2 border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg shadow-primary/5">
                  <step.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="glass-card-solid rounded-2xl p-6 text-center group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                  <span className="text-xs font-mono font-bold text-primary">0{step.num}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-1">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden space-y-6">
          {steps.map((step) => (
            <div key={step.num} className="glass-card-solid rounded-2xl p-6 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <step.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-primary">0{step.num}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-0.5">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
