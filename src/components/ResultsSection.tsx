import { TrendingUp, Users, PiggyBank, Clock, Star, Quote } from "lucide-react";

const metrics = [
  { icon: TrendingUp, value: "73%", label: "Durchschnittliche Prozessbeschleunigung" },
  { icon: Users, value: "40+", label: "Optimierte Workflows" },
  { icon: PiggyBank, value: "2.1M€", label: "Eingesparte Kosten für Kunden" },
  { icon: Clock, value: "12 Mo.", label: "∅ Zusammenarbeit" },
];

export function ResultsSection() {
  return (
    <section id="ergebnisse" className="relative">
      {/* Top curve */}
      <div className="w-full">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full block">
          <path d="M0 0L1440 0L1440 20C1440 20 1080 60 720 60C360 60 0 20 0 20L0 0Z" fill="white" />
        </svg>
      </div>

      <div className="bg-gradient-to-br from-accent via-vic-blue-light/60 to-vic-indigo-light py-20 md:py-28 relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-10 right-20 opacity-10 animate-float">
          <Star className="w-12 h-12 text-primary" fill="currentColor" />
        </div>
        <div className="absolute bottom-10 left-16 opacity-10 animate-float-delayed">
          <div className="w-20 h-20 rounded-full border-2 border-primary/30" />
        </div>

        <div className="vic-container relative">
          <div className="text-center mb-16">
            <div className="section-badge mb-4">Ergebnisse</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Zahlen statt <span className="text-gradient-blue">Versprechen</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {metrics.map((m) => (
              <div key={m.label} className="glass-card rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <m.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-display text-3xl md:text-4xl font-bold text-foreground block">
                  {m.value}
                </span>
                <p className="mt-2 text-sm text-muted-foreground leading-snug">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-16 max-w-2xl mx-auto glass-card rounded-2xl p-8 md:p-10 text-center">
            <Quote className="w-8 h-8 text-primary/30 mx-auto mb-4" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
              "47skys hat unsere Vermietungsprozesse komplett digitalisiert. Die Fehlerquote bei Buchungen ist praktisch auf null gesunken."
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <img src="/testimonials/maria.png" alt="Maria Krüger" className="w-10 h-10 rounded-full object-cover" />
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Maria Krüger</p>
                <p className="text-xs text-muted-foreground">COO, CX9 Systems GmbH</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="w-full">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full block">
          <path d="M0 60L1440 60L1440 40C1440 40 1080 0 720 0C360 0 0 40 0 40L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
