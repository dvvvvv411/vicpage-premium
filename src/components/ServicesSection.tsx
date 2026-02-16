import { BarChart3, Cpu, LineChart, Megaphone, Settings, Target } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Prozessoptimierung & Automatisierung",
    desc: "Wir analysieren Ihre bestehenden Workflows und eliminieren Reibungsverluste. Durch gezielte Automatisierung werden manuelle Schritte reduziert.",
    span: "lg:col-span-2 lg:row-span-2",
    showMockup: true,
  },
  {
    icon: Target,
    title: "Digitale Strategie",
    desc: "Klare Positionierung statt Content-Flut. Strategien, die auf Ihre Geschäftsziele einzahlen.",
    span: "lg:col-span-1",
  },
  {
    icon: Megaphone,
    title: "Content & Branding",
    desc: "Markenaufbau mit System. Kein Vanity-Content, sondern relevante Inhalte mit Wirkung.",
    span: "lg:col-span-1",
  },
  {
    icon: LineChart,
    title: "Performance Marketing",
    desc: "Datengetriebene Kampagnen mit messbarem ROI – kein Budgetverschwendung.",
    span: "lg:col-span-1",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Transparente Dashboards und Reports, die echte Entscheidungen ermöglichen.",
    span: "lg:col-span-1",
  },
  {
    icon: Settings,
    title: "Tech-Integration",
    desc: "Nahtlose Anbindung Ihrer Tools und Systeme für einen durchgängigen Datenfluss.",
    span: "lg:col-span-1",
  },
];

function DashboardMockup() {
  return (
    <div className="mt-6 rounded-2xl bg-gradient-to-br from-accent to-vic-blue-light p-4 border border-primary/10">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
        <div className="flex-1" />
        <div className="h-2 w-20 rounded-full bg-primary/10" />
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {["+73%", "2.1M€", "40+"].map((v, i) => (
          <div key={i} className="rounded-xl bg-white/80 p-3 text-center">
            <p className="text-sm font-bold text-primary">{v}</p>
            <div className="h-1.5 w-12 mx-auto mt-1 rounded-full bg-primary/15" />
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1.5 h-16 px-2">
        {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md bg-gradient-to-t from-primary/60 to-primary/20"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="leistungen" className="py-24 md:py-32 bg-white relative">
      <div className="vic-container">
        <div className="text-center mb-16">
          <div className="section-badge mb-4">Unsere Leistungen</div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Alles was Sie brauchen.{" "}
            <span className="text-gradient-blue">Nichts was Sie nicht brauchen.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group glass-card-solid rounded-2xl p-6 md:p-8 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 ${f.span}`}
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <f.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
              {f.showMockup && <DashboardMockup />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
