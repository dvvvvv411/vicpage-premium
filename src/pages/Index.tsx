import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ResultsSection } from "@/components/ResultsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ResultsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
