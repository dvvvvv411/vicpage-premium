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
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-br from-primary via-primary to-vic-indigo py-20 md:py-28 relative">
        <div className="absolute top-10 right-20 opacity-10 animate-float">
          <Sparkles className="w-16 h-16 text-white" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10 animate-float-delayed">
          <div className="w-32 h-32 rounded-full border-2 border-white/20" />
        </div>

        <div className="relative vic-container text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-3xl mx-auto">
            {title}
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl mx-auto">
            {subtitle}
          </p>
          <div className="mt-10">
            <Link
              to="/kontakt"
              className="pill-button-primary px-8 py-3.5 text-sm gap-2 bg-white text-primary hover:bg-white/90 hover:shadow-xl hover:shadow-white/20"
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
