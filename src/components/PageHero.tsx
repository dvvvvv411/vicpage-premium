import { Sparkles, Star } from "lucide-react";

interface PageHeroProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
}

export function PageHero({ badge, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/40 to-vic-blue-light" />
      <div className="absolute top-32 right-20 animate-float opacity-20">
        <Star className="w-8 h-8 text-primary" fill="currentColor" />
      </div>
      <div className="absolute bottom-10 left-16 animate-float-delayed opacity-15">
        <Sparkles className="w-10 h-10 text-vic-indigo" />
      </div>
      <div className="absolute top-40 left-1/3 opacity-10">
        <div className="w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative vic-container text-center">
        <div className="section-badge mb-6">{badge}</div>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-foreground max-w-4xl mx-auto">
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full block">
          <path d="M0 60L1440 60L1440 30C1440 30 1080 0 720 0C360 0 0 30 0 30L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
