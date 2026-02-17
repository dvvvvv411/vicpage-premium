import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { TrendingUp, Users, PiggyBank, Clock, Quote, Star, Car, ShoppingCart, Home } from "lucide-react";

const metrics = [
  { icon: TrendingUp, value: "73%", label: "Durchschnittliche Prozessbeschleunigung" },
  { icon: Users, value: "40+", label: "Optimierte Workflows" },
  { icon: PiggyBank, value: "2.1M€", label: "Eingesparte Kosten für Kunden" },
  { icon: Clock, value: "12 Mo.", label: "∅ Zusammenarbeit" },
];

const caseStudies = [
  {
    icon: Car,
    client: "CX9 Systems GmbH",
    industry: "Automotive Software",
    challenge: "Veraltete Dispositions- und Buchungsprozesse in der Autovermietungsbranche führten zu doppelten Buchungen und manuellem Schadensmanagement.",
    solution: "Digitalisierung des gesamten Vermietungsprozesses: automatisierte Disposition, Online-Buchungsstrecke, integriertes Schadensmanagement und Echtzeit-Flottenüberblick.",
    result: "Buchungsfehler um 85% reduziert, Dispositionszeit halbiert, Kundenzufriedenheit um 35% gestiegen.",
    metric: "-85% Buchungsfehler",
  },
  {
    icon: ShoppingCart,
    client: "Carwow GmbH",
    industry: "Automotive / Marketplace",
    challenge: "Unübersichtliche Lead-Verwaltung über mehrere Händlerpartner. Conversion-Tracking war fragmentiert und Werbebudgets wurden ohne klare Attribution verteilt.",
    solution: "Zentrales Lead-Management-Dashboard mit automatisierter Händler-Zuordnung, Cross-Channel-Attribution und Performance-Reporting in Echtzeit.",
    result: "Lead-to-Sale Conversion um 67% gesteigert, Reporting-Aufwand von 30h auf 3h pro Monat reduziert.",
    metric: "+67% Conversion",
  },
  {
    icon: Home,
    client: "HomeToGo GmbH",
    industry: "Travel / Marketplace",
    challenge: "Millionen von Inseraten auf der Plattform, aber die Content-Produktion für Landingpages und Marketingmaterialien war zeitintensiv und inkonsistent.",
    solution: "Automatisierte Content-Pipeline mit Template-System, Bild-Optimierung und Multi-Channel-Distribution für Marketingkampagnen.",
    result: "Content-Produktionszeit um 70% reduziert, organischer Traffic um 45% gestiegen innerhalb von 6 Monaten.",
    metric: "+45% org. Traffic",
  },
];

const testimonials = [
  { quote: "47skys hat unsere Vermietungsprozesse komplett digitalisiert. Die Fehlerquote bei Buchungen ist praktisch auf null gesunken.", name: "Maria Krüger", role: "COO, CX9 Systems GmbH", image: "/testimonials/maria.png" },
  { quote: "Pragmatisch, datengetrieben und immer auf Augenhöhe. 47skys hat unser Lead-Management auf ein völlig neues Level gehoben.", name: "Stefan Weber", role: "CMO, Carwow GmbH", image: "/testimonials/stefan.png" },
  { quote: "Dank 47skys produzieren wir heute in einem Tag, wofür wir früher eine Woche gebraucht haben. Die Ergebnisse beim organischen Traffic sprechen für sich.", name: "Anna Fischer", role: "Head of Content, HomeToGo GmbH", image: "/testimonials/anna.png" },
  { quote: "Die Dashboards von 47skys haben uns erstmals einen vollständigen Überblick über unsere gesamte Flotte in Echtzeit gegeben.", name: "Sebastian Scholz", role: "CEO, CX9 Systems GmbH", image: "/testimonials/thomas.png" },
];

const Ergebnisse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          badge="Ergebnisse"
          title={<>Zahlen statt <span className="text-gradient-blue">Versprechen</span></>}
          subtitle="Transparente Ergebnisse, echte Case Studies und Feedback von Kunden, die uns vertrauen."
        />

        {/* Metrics */}
        <section className="py-20 md:py-28 bg-white">
          <div className="vic-container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {metrics.map((m) => (
                <div key={m.label} className="glass-card-solid rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <m.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-display text-3xl md:text-4xl font-bold text-foreground block">{m.value}</span>
                  <p className="mt-2 text-sm text-muted-foreground leading-snug">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="relative">
          <div className="w-full"><svg viewBox="0 0 1440 60" fill="none" className="w-full block"><path d="M0 0L1440 0L1440 20C1440 20 1080 60 720 60C360 60 0 20 0 20L0 0Z" fill="white" /></svg></div>
          <div className="bg-gradient-to-br from-accent via-vic-blue-light/60 to-vic-indigo-light py-20 md:py-28 relative overflow-hidden">
            <div className="absolute top-10 right-20 opacity-10 animate-float">
              <Star className="w-12 h-12 text-primary" fill="currentColor" />
            </div>
            <div className="vic-container relative">
              <div className="text-center mb-16">
                <div className="section-badge mb-4">Case Studies</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  So sieht <span className="text-gradient-blue">Erfolg</span> aus
                </h2>
              </div>
              <div className="space-y-8">
                {caseStudies.map((cs, i) => (
                  <div key={i} className="glass-card rounded-2xl p-8 md:p-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:w-1/3">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <cs.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-display font-semibold text-foreground">{cs.client}</p>
                            <p className="text-xs text-muted-foreground">{cs.industry}</p>
                          </div>
                        </div>
                        <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-display font-bold text-lg">
                          {cs.metric}
                        </div>
                      </div>
                      <div className="lg:w-2/3 space-y-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Herausforderung</p>
                          <p className="text-sm text-foreground leading-relaxed">{cs.challenge}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Lösung</p>
                          <p className="text-sm text-foreground leading-relaxed">{cs.solution}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Ergebnis</p>
                          <p className="text-sm text-foreground leading-relaxed">{cs.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full"><svg viewBox="0 0 1440 60" fill="none" className="w-full block"><path d="M0 60L1440 60L1440 40C1440 40 1080 0 720 0C360 0 0 40 0 40L0 60Z" fill="white" /></svg></div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28 bg-white">
          <div className="vic-container">
            <div className="text-center mb-16">
              <div className="section-badge mb-4">Kundenstimmen</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Was unsere <span className="text-gradient-blue">Kunden</span> sagen
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="glass-card-solid rounded-2xl p-8">
                   <Quote className="w-6 h-6 text-primary/30 mb-4" />
                   <p className="text-foreground leading-relaxed italic mb-6">"{t.quote}"</p>
                   <div className="flex items-center gap-3">
                     <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                     <div>
                       <p className="text-sm font-semibold text-foreground">{t.name}</p>
                       <p className="text-xs text-muted-foreground">{t.role}</p>
                     </div>
                   </div>
                 </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Ergebnisse;
