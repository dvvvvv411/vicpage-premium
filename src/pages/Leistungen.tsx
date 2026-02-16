import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { BarChart3, Cpu, LineChart, Megaphone, Settings, Target, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Prozessoptimierung & Automatisierung",
    desc: "Wir analysieren Ihre bestehenden Workflows Schritt für Schritt und identifizieren Engpässe, redundante Aufgaben und manuelle Prozesse. Durch gezielte Automatisierung mit modernen Tools werden Ihre Abläufe schneller, fehlerfreier und skalierbarer.",
    benefits: ["Bis zu 73% schnellere Durchlaufzeiten", "Reduktion manueller Fehler um 90%", "Nahtlose Integration in bestehende Systeme", "Skalierbare Lösungen für wachsende Teams"],
  },
  {
    icon: Target,
    title: "Digitale Strategie",
    desc: "Keine generischen Pläne – wir entwickeln maßgeschneiderte Digitalstrategien, die direkt auf Ihre Geschäftsziele einzahlen. Von der Marktanalyse bis zur Umsetzungsroadmap erhalten Sie einen klaren Fahrplan für nachhaltiges digitales Wachstum.",
    benefits: ["Datenbasierte Markt- und Wettbewerbsanalyse", "Klare Priorisierung nach Impact", "Messbare Meilensteine und KPIs", "Quartalsweise Strategie-Reviews"],
  },
  {
    icon: Megaphone,
    title: "Content & Branding",
    desc: "Markenaufbau mit System statt zufälligem Posting. Wir entwickeln eine konsistente Brand-Identity und Content-Strategie, die Ihre Zielgruppe erreicht und Vertrauen aufbaut – über alle Kanäle hinweg.",
    benefits: ["Einheitliche Brand Guidelines", "Redaktionsplanung mit Themenkalender", "SEO-optimierte Content-Erstellung", "Performance-Tracking aller Inhalte"],
  },
  {
    icon: LineChart,
    title: "Performance Marketing",
    desc: "Datengetriebene Kampagnen, die messbare Ergebnisse liefern. Wir optimieren Ihre Werbeausgaben kontinuierlich und sorgen dafür, dass jeder investierte Euro den maximalen Return erzielt.",
    benefits: ["A/B-Testing aller Kampagnen", "Echtzeit-Budgetoptimierung", "Cross-Channel Attribution", "Monatliches ROI-Reporting"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Transparente Dashboards und Reports, die Ihnen ein vollständiges Bild Ihrer digitalen Performance geben. Keine Vanity Metrics – sondern Kennzahlen, die echte Geschäftsentscheidungen ermöglichen.",
    benefits: ["Custom Dashboards in Echtzeit", "Automatisierte Monatsberichte", "Predictive Analytics für Trends", "Actionable Insights statt Datenmüll"],
  },
  {
    icon: Settings,
    title: "Tech-Integration",
    desc: "Nahtlose Anbindung Ihrer bestehenden Tools und Systeme für einen durchgängigen Datenfluss. Wir verbinden CRM, ERP, Marketing-Tools und mehr zu einem effizienten Tech-Stack.",
    benefits: ["API-Integrationen und Middleware", "Daten-Synchronisation in Echtzeit", "Schulungen für Ihr Team", "Langfristiger technischer Support"],
  },
];

function DashboardMockup() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-accent to-vic-blue-light p-4 border border-primary/10">
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
          <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-primary/60 to-primary/20" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

const Leistungen = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          badge="Unsere Leistungen"
          title={<>Alles was Sie brauchen.<br /><span className="text-primary">Nichts was Sie nicht brauchen.</span></>}
          subtitle="Sechs Kernbereiche, ein Ziel: Ihre digitale Performance auf das nächste Level bringen."
        />

        <section className="py-20 md:py-28 bg-white">
          <div className="vic-container space-y-20 md:space-y-28">
            {services.map((s, i) => (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:direction-reverse" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
                    <s.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-3">
                    {s.benefits.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  {i === 0 ? (
                    <DashboardMockup />
                  ) : (
                    <div className="glass-card-solid rounded-2xl p-8 md:p-10">
                      <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-accent to-vic-blue-light flex items-center justify-center">
                        <s.icon className="w-16 h-16 text-primary/30" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTASection title="Lassen Sie uns Ihre Prozesse optimieren" subtitle="Vereinbaren Sie ein unverbindliches Erstgespräch und erfahren Sie, welche Leistungen für Ihr Unternehmen den größten Impact haben." />
      </main>
      <Footer />
    </div>
  );
};

export default Leistungen;
