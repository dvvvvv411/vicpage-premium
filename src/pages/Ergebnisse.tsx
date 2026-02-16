import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { TrendingUp, Users, PiggyBank, Clock, Quote, Star, Building2, ShoppingCart, Briefcase } from "lucide-react";

const metrics = [
  { icon: TrendingUp, value: "73%", label: "Durchschnittliche Prozessbeschleunigung" },
  { icon: Users, value: "40+", label: "Optimierte Workflows" },
  { icon: PiggyBank, value: "2.1M€", label: "Eingesparte Kosten für Kunden" },
  { icon: Clock, value: "12 Mo.", label: "∅ Zusammenarbeit" },
];

const caseStudies = [
  {
    icon: Building2,
    client: "TechCorp GmbH",
    industry: "SaaS / B2B Software",
    challenge: "Manuelle Onboarding-Prozesse führten zu langen Wartezeiten und hoher Kundenabwanderung in den ersten 30 Tagen.",
    solution: "Automatisiertes Onboarding-System mit personalisierten Workflows, automatischen E-Mail-Sequenzen und Self-Service-Portal.",
    result: "Onboarding-Zeit von 14 auf 3 Tage reduziert. Kundenbindung in den ersten 90 Tagen um 45% gestiegen.",
    metric: "-78% Onboarding-Zeit",
  },
  {
    icon: ShoppingCart,
    client: "MediaPro AG",
    industry: "E-Commerce / Retail",
    challenge: "Fragmentierte Marketing-Kanäle ohne einheitliches Tracking. Werbebudget wurde ineffizient über 6 Plattformen verteilt.",
    solution: "Zentrales Marketing-Dashboard mit Cross-Channel-Attribution, automatisierter Budgetallokation und Echtzeit-Reporting.",
    result: "ROAS von 2.1x auf 4.7x gesteigert. Monatliche Reportingzeit von 40h auf 2h reduziert.",
    metric: "+124% ROAS",
  },
  {
    icon: Briefcase,
    client: "CloudSync Solutions",
    industry: "Cloud Infrastructure",
    challenge: "Support-Team bearbeitete 80% der Tickets manuell. Antwortzeiten lagen bei durchschnittlich 8 Stunden.",
    solution: "KI-gestütztes Ticket-Routing, automatisierte Erstantworten und Self-Service Knowledge Base mit intelligenter Suche.",
    result: "60% der Tickets werden automatisch gelöst. Durchschnittliche Antwortzeit auf unter 15 Minuten gesenkt.",
    metric: "-94% Antwortzeit",
  },
];

const testimonials = [
  { quote: "VicPage hat unsere internen Prozesse komplett transformiert. Innerhalb von 3 Monaten haben wir 40% unserer manuellen Workflows automatisiert.", name: "Maria Krüger", role: "COO, TechCorp GmbH", initials: "MK" },
  { quote: "Die Zusammenarbeit mit VicPage war von Anfang an auf Augenhöhe. Kein Buzzword-Bingo, sondern pragmatische Lösungen mit messbarem Impact.", name: "Stefan Weber", role: "CMO, MediaPro AG", initials: "SW" },
  { quote: "Endlich ein Partner, der nicht nur berät, sondern auch liefert. Die Ergebnisse sprechen für sich – unsere Support-Kosten sind um 60% gesunken.", name: "Anna Fischer", role: "Head of Ops, CloudSync", initials: "AF" },
  { quote: "Die Analytics-Dashboards von VicPage haben uns zum ersten Mal ein vollständiges Bild unserer Customer Journey gegeben.", name: "Thomas Hartmann", role: "CEO, DataFlow GmbH", initials: "TH" },
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
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-vic-indigo flex items-center justify-center text-white font-bold text-sm">
                      {t.initials}
                    </div>
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
