import { ArrowRight, Sparkles, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

const logos = [
  "TechCorp", "DataFlow", "CloudSync", "MediaPro", "NetScale",
  "SmartOps", "InnoLab", "StreamX",
];

export function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/40 to-vic-blue-light" />

      {/* Decorative elements */}
      <div className="absolute top-32 right-20 animate-float opacity-20">
        <Star className="w-8 h-8 text-primary" fill="currentColor" />
      </div>
      <div className="absolute top-60 left-16 animate-float-delayed opacity-15">
        <Sparkles className="w-10 h-10 text-vic-indigo" />
      </div>
      <div className="absolute bottom-40 right-40 animate-float-slow opacity-10">
        <div className="w-32 h-32 rounded-full border-2 border-primary/20" />
      </div>
      <div className="absolute top-40 left-1/3 opacity-10">
        <div className="w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="absolute bottom-20 right-1/4 opacity-10">
        <div className="w-48 h-48 rounded-full bg-vic-indigo/10 blur-3xl" />
      </div>

      <div className="relative vic-container text-center py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 section-badge mb-8">
          <Zap className="w-3.5 h-3.5" />
          Digitale Medienagentur
        </div>

        {/* Main headline */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-foreground max-w-4xl mx-auto">
          Wir machen Ihre{" "}
          <span className="relative inline-block">
            <span className="text-gradient-blue">Prozesse</span>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
              <path d="M2 6C50 2 150 2 198 6" stroke="hsl(217 91% 60%)" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
            </svg>
          </span>{" "}
          schneller.
          <br />
          <span className="text-muted-foreground">Nicht Ihre Website bunter.</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Prozessoptimierung durch präzise Digitalstrategien. Messbar, skalierbar,
          ohne Buzzword-Bingo.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/kontakt" className="pill-button-primary px-8 py-3.5 text-sm gap-2">
            Gespräch vereinbaren
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/leistungen" className="pill-button-outline px-8 py-3.5 text-sm">
            Mehr erfahren
          </Link>
        </div>

        {/* Trust badge */}
        <TooltipProvider delayDuration={200}>
          <div className="mt-12 inline-flex items-center gap-4 glass-card rounded-2xl px-6 py-4 border border-white/40 shadow-lg hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2">
              {[
                { src: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg", alt: "Photoshop" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg", alt: "Illustrator" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg", alt: "Premiere Pro" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg", alt: "After Effects" },
              ].map((logo, i) => (
                <Tooltip key={i}>
                  <TooltipTrigger asChild>
                    <div className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 flex items-center justify-center hover:bg-white/90 hover:scale-110 transition-all duration-200">
                      <img src={logo.src} alt={logo.alt} className="w-6 h-6 object-contain" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>{logo.alt}</TooltipContent>
                </Tooltip>
              ))}
            </div>
            <div className="border-l border-white/40 h-8" />
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">Offizieller Adobe Partner</p>
              <p className="text-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-primary font-medium">Zertifizierter Partner</span>
              </p>
            </div>
          </div>
        </TooltipProvider>

        {/* Logo marquee */}
        <div className="mt-20 relative overflow-hidden">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 font-medium">
            Vertraut von führenden Unternehmen
          </p>
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee flex items-center gap-12 min-w-max">
              {[...logos, ...logos].map((name, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                    <span className="text-xs font-bold text-muted-foreground/50">
                      {name[0]}
                    </span>
                  </div>
                  <span className="text-sm font-semibold whitespace-nowrap">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path d="M0 80L1440 80L1440 40C1440 40 1080 0 720 0C360 0 0 40 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
