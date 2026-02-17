import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ResultsSection } from "@/components/ResultsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function SectionLink({ to, label }: { to: string; label: string }) {
  return (
    <div className="text-center mt-10">
      <Link
        to={to}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
      >
        {label}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <div className="relative">
          <ServicesSection />
          <SectionLink to="/leistungen" label="Alle Leistungen entdecken" />
          <div className="h-12" />
        </div>
        <ResultsSection />
        <SectionLink to="/ergebnisse" label="Alle Ergebnisse & Case Studies" />
        <div className="h-12" />
        <ProcessSection />
        <SectionLink to="/arbeitsweise" label="Mehr über unsere Arbeitsweise" />
        <div className="h-12" />
        <ContactSection />
      </main>
      <CookieConsent />
      <Footer />
    </div>
  );
};

export default Index;
