import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({
  title = "Bereit, Ihre Prozesse zu optimieren?",
  subtitle = "Lassen Sie uns in einem unverbindlichen Gespräch herausfinden, wie wir Ihnen helfen können.",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-accent py-20 md:py-28">
      {/* Decorative blur blobs */}
      <div className="absolute top-[-80px] left-[-60px] w-[300px] h-[300px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-[-100px] right-[-80px] w-[400px] h-[400px] rounded-full bg-vic-indigo/8 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-vic-blue-medium/10 blur-3xl" />

      {/* Floating decorative elements */}
      <div className="absolute top-10 right-20 opacity-20 animate-float">
        <Sparkles className="w-10 h-10 text-primary" />
      </div>
      <div className="absolute bottom-16 left-14 opacity-10 animate-float-delayed">
        <div className="w-20 h-20 rounded-full border-2 border-primary/20" />
      </div>
      <div className="absolute top-20 left-1/4 opacity-10 animate-float-slow">
        <div className="w-3 h-3 rounded-full bg-primary/40" />
      </div>

      <div className="relative vic-container">
        <div className="glass-card rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
            {title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            {subtitle}
          </p>
          <div className="mt-10">
            <Link
              to="/kontakt"
              className="pill-button-primary px-8 py-3.5 text-sm gap-2"
            >
              Gespräch vereinbaren
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
