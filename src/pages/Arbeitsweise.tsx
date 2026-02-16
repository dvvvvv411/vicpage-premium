import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Search, Lightbulb, Rocket, BarChart3, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    num: 1,
    icon: Search,
    title: "Analyse & Audit",
    desc: "Im ersten Schritt nehmen wir Ihre bestehenden Prozesse, Tools und Datenflüsse unter die Lupe. Wir führen Interviews mit Ihrem Team, analysieren vorhandene Daten und identifizieren die größten Hebel für Verbesserungen.",
    checklist: [
      "Stakeholder-Interviews und Prozess-Mapping",
      "Technisches Audit bestehender Systeme",
      "Datenanalyse und Benchmark-Vergleich",
      "Identifikation von Quick Wins und strategischen Hebeln",
      "Dokumentation aller Findings in einem Analyse-Report",
    ],
    result: "Sie erhalten einen detaillierten Analyse-Report mit priorisierten Handlungsempfehlungen.",
  },
  {
    num: 2,
    icon: Lightbulb,
    title: "Strategie & Planung",
    desc: "Basierend auf der Analyse entwickeln wir einen konkreten Maßnahmenplan. Jede Maßnahme wird nach Impact und Machbarkeit priorisiert, mit klaren Verantwortlichkeiten, Timelines und messbaren Zielen versehen.",
    checklist: [
      "Priorisierung nach Impact-/Effort-Matrix",
      "Definition von KPIs und Erfolgskriterien",
      "Erstellung einer detaillierten Roadmap",
      "Ressourcenplanung und Budgetierung",
      "Abstimmung und Sign-off mit allen Stakeholdern",
    ],
    result: "Eine klar strukturierte Roadmap mit Meilensteinen und KPIs für die nächsten 3-12 Monate.",
  },
  {
    num: 3,
    icon: Rocket,
    title: "Umsetzung in Sprints",
    desc: "Die Umsetzung erfolgt in agilen Sprints – typischerweise in 2-Wochen-Zyklen. So sehen Sie schnell erste Ergebnisse und können frühzeitig Feedback geben. Keine monatelange Konzeptphase, sondern pragmatische Implementierung.",
    checklist: [
      "Sprint-Planning mit klaren Deliverables",
      "Wöchentliche Status-Updates und Demo-Sessions",
      "Kontinuierliche Integration und Testing",
      "Dokumentation und Wissenstransfer",
      "Schulung Ihrer Mitarbeiter in neuen Prozessen",
    ],
    result: "Funktionierende Lösungen nach jedem Sprint – messbar und sofort einsetzbar.",
  },
  {
    num: 4,
    icon: BarChart3,
    title: "Messung & Optimierung",
    desc: "Nach der Implementierung ist vor der Optimierung. Wir monitoren die definierten KPIs kontinuierlich, identifizieren weiteres Verbesserungspotenzial und passen Prozesse iterativ an – für nachhaltigen, langfristigen Erfolg.",
    checklist: [
      "Echtzeit-Monitoring aller relevanten KPIs",
      "Monatliche Performance-Reviews",
      "A/B-Testing von Prozessvarianten",
      "Quarterly Business Reviews mit Ihrem Team",
      "Laufende Anpassung an neue Anforderungen",
    ],
    result: "Kontinuierliche Verbesserung mit transparenten Reports und datenbasierten Entscheidungen.",
  },
];

const faqs = [
  { q: "Wie lange dauert ein typisches Projekt?", a: "Je nach Umfang zwischen 4 Wochen (Quick Wins) und 6 Monaten (umfassende Transformation). Die meisten Projekte starten mit einem 3-Monats-Sprint, in dem bereits erste messbare Ergebnisse erzielt werden." },
  { q: "Wie läuft die Zusammenarbeit im Alltag ab?", a: "Wir arbeiten in 2-Wochen-Sprints mit wöchentlichen Status-Calls. Sie erhalten einen dedizierten Ansprechpartner und Zugang zu unserem Projekt-Dashboard mit Echtzeit-Einblick in den Fortschritt." },
  { q: "Was passiert nach Projektabschluss?", a: "Wir bieten flexible Support-Pakete für die laufende Betreuung. Zusätzlich erhalten Sie eine vollständige Dokumentation und Schulung, damit Ihr Team die Lösungen eigenständig weiterentwickeln kann." },
  { q: "Für welche Unternehmensgrößen arbeiten Sie?", a: "Von Scale-ups ab 20 Mitarbeitern bis hin zu Mittelständlern mit 500+ Mitarbeitern. Entscheidend ist nicht die Größe, sondern der Wille zur digitalen Optimierung." },
];

const Arbeitsweise = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          badge="Arbeitsweise"
          title={<>Wie wir <span className="text-gradient-blue">arbeiten</span></>}
          subtitle="Vier klare Phasen, ein Ziel: messbare Ergebnisse in kürzester Zeit."
        />

        {/* Timeline */}
        <section className="py-20 md:py-28 bg-white">
          <div className="vic-container">
            <div className="relative space-y-16">
              {/* Vertical connecting line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden lg:block" />

              {steps.map((step) => (
                <div key={step.num} className="relative lg:pl-24">
                  {/* Number badge */}
                  <div className="hidden lg:flex absolute left-0 top-0 w-16 h-16 rounded-2xl bg-white border-2 border-primary/20 items-center justify-center shadow-lg shadow-primary/5 z-10">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  <div className="glass-card-solid rounded-2xl p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-4 lg:hidden">
                      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                        <step.icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <span className="text-xs font-mono font-bold text-primary">0{step.num}</span>
                    </div>
                    <div className="hidden lg:block">
                      <span className="text-xs font-mono font-bold text-primary">PHASE 0{step.num}</span>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{step.desc}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-6">
                      {step.checklist.map((item, j) => (
                        <div key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="rounded-xl bg-accent/50 border border-primary/10 px-5 py-4">
                      <p className="text-sm font-medium text-foreground">
                        <span className="text-primary font-semibold">Ergebnis:</span> {step.result}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative">
          <div className="w-full"><svg viewBox="0 0 1440 60" fill="none" className="w-full block"><path d="M0 0L1440 0L1440 20C1440 20 1080 60 720 60C360 60 0 20 0 20L0 0Z" fill="white" /></svg></div>
          <div className="bg-gradient-to-br from-accent via-vic-blue-light/60 to-vic-indigo-light py-20 md:py-28">
            <div className="vic-container">
              <div className="text-center mb-12">
                <div className="section-badge mb-4">FAQ</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  Häufige <span className="text-gradient-blue">Fragen</span>
                </h2>
              </div>
              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="glass-card rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-display font-semibold text-foreground pr-4">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-6">
                        <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full"><svg viewBox="0 0 1440 60" fill="none" className="w-full block"><path d="M0 60L1440 60L1440 40C1440 40 1080 0 720 0C360 0 0 40 0 40L0 60Z" fill="white" /></svg></div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Arbeitsweise;
