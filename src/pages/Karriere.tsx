import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  CheckCircle2,
  Upload,
  Send,
  Sparkles,
  Calendar,
  Star,
} from "lucide-react";

const tasks = [
  "Entwicklung und Umsetzung kanalübergreifender Marketingstrategien",
  "Analyse und Optimierung laufender Kampagnen anhand von KPIs",
  "Erstellung von Content für Social Media, Newsletter und Landingpages",
  "Zusammenarbeit mit Design- und Entwicklungsteams",
  "Markt- und Wettbewerbsanalysen zur Identifikation neuer Chancen",
];

const profile = [
  "Abgeschlossenes Studium im Bereich Marketing, Kommunikation oder vergleichbar",
  "Mindestens 3 Jahre Erfahrung im digitalen Marketing",
  "Erfahrung mit Analytics-Tools (Google Analytics, HubSpot o.ä.)",
  "Kreativität und ein gutes Gespür für Trends",
  "Fließende Deutsch- und Englischkenntnisse",
];

const benefits = [
  "Flexible Arbeitszeiten und Remote-Optionen",
  "Modernes Büro im Herzen von Berlin",
  "30 Tage Urlaub und Workation-Möglichkeiten",
  "Weiterbildungsbudget und regelmäßige Workshops",
  "Flache Hierarchien und ein motiviertes Team",
];

const Karriere = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bewerbung gesendet",
      description: "Vielen Dank! Wir melden uns innerhalb weniger Tage bei Ihnen.",
    });
    setFormData({ name: "", email: "", phone: "", linkedin: "", message: "" });
  };

  const scrollToForm = () => {
    document.getElementById("bewerbungsformular")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          badge="Karriere"
          title={
            <>
              Werde Teil unseres{" "}
              <span className="text-gradient-blue">Teams</span>
            </>
          }
          subtitle="Wir suchen Menschen, die mit Leidenschaft und Kreativität die digitale Zukunft gestalten wollen. Entdecke deine Möglichkeiten bei VicPage."
        />

        {/* Job Listing */}
        <section className="py-20 md:py-28 bg-white">
          <div className="vic-container">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
              {/* Left: Job Details */}
              <div className="lg:col-span-3">
                <div className="glass-card-solid rounded-2xl p-8 md:p-10">
                  {/* Title & Meta */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center shrink-0">
                      <Briefcase className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                        Digital Marketing Manager (m/w/d)
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-10">
                    <span className="section-badge text-[10px] py-1 px-3">
                      <MapPin className="w-3 h-3" /> Berlin
                    </span>
                    <span className="section-badge text-[10px] py-1 px-3">
                      <Clock className="w-3 h-3" /> Vollzeit
                    </span>
                    <span className="section-badge text-[10px] py-1 px-3">
                      <Star className="w-3 h-3" /> 3+ Jahre Erfahrung
                    </span>
                  </div>

                  {/* Sections */}
                  <div className="space-y-10">
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        Deine Aufgaben
                      </h3>
                      <ul className="space-y-3">
                        {tasks.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Dein Profil
                      </h3>
                      <ul className="space-y-3">
                        {profile.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-primary" />
                        Was wir bieten
                      </h3>
                      <ul className="space-y-3">
                        {benefits.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Sticky Sidebar */}
              <div className="lg:col-span-2">
                <div className="lg:sticky lg:top-28 space-y-6">
                  <div className="glass-card-solid rounded-2xl p-6 space-y-5">
                    <h3 className="font-display text-base font-bold text-foreground">Auf einen Blick</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center">
                          <MapPin className="w-4 h-4 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">Standort</p>
                          <p className="text-sm font-medium text-foreground">Berlin / Remote</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center">
                          <Calendar className="w-4 h-4 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">Startdatum</p>
                          <p className="text-sm font-medium text-foreground">Ab sofort</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center">
                          <Users className="w-4 h-4 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">Team</p>
                          <p className="text-sm font-medium text-foreground">12 Mitarbeitende</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={scrollToForm}
                    className="pill-button-primary px-8 py-3.5 text-sm w-full gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Jetzt bewerben
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="relative" id="bewerbungsformular">
          <div className="w-full">
            <svg viewBox="0 0 1440 60" fill="none" className="w-full block">
              <path d="M0 0L1440 0L1440 20C1440 20 1080 60 720 60C360 60 0 20 0 20L0 0Z" fill="white" />
            </svg>
          </div>
          <div className="bg-gradient-to-br from-accent via-vic-blue-light/60 to-vic-indigo-light py-20 md:py-28">
            <div className="absolute top-20 right-16 opacity-10 animate-float">
              <Sparkles className="w-12 h-12 text-primary" />
            </div>

            <div className="vic-container">
              <div className="text-center mb-12">
                <div className="section-badge mb-4">Bewerbung</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  Wir freuen uns auf <span className="text-gradient-blue">dich</span>
                </h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                  Fülle das Formular aus und erzähle uns, warum du zu VicPage passt.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto glass-card rounded-2xl p-8 md:p-10 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                      Name *
                    </label>
                    <Input
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-xl border-border bg-muted/50 focus-visible:ring-primary h-12"
                      placeholder="Dein Name"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                      E-Mail *
                    </label>
                    <Input
                      type="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-xl border-border bg-muted/50 focus-visible:ring-primary h-12"
                      placeholder="deine@email.de"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                      Telefon
                    </label>
                    <Input
                      type="tel"
                      maxLength={30}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-xl border-border bg-muted/50 focus-visible:ring-primary h-12"
                      placeholder="+49 ..."
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                      LinkedIn (optional)
                    </label>
                    <Input
                      type="url"
                      maxLength={255}
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      className="rounded-xl border-border bg-muted/50 focus-visible:ring-primary h-12"
                      placeholder="linkedin.com/in/..."
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                    Anschreiben / Motivation *
                  </label>
                  <Textarea
                    required
                    maxLength={2000}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-xl border-border bg-muted/50 focus-visible:ring-primary resize-none"
                    placeholder="Erzähl uns, warum du bei VicPage arbeiten möchtest..."
                  />
                </div>

                {/* File Upload Area (UI only) */}
                <div className="border-2 border-dashed border-border rounded-2xl p-6 text-center hover:border-primary/40 transition-colors cursor-pointer group">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-3 group-hover:text-primary transition-colors" />
                  <p className="text-sm font-medium text-foreground">
                    Lebenslauf hochladen
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PDF, DOC oder DOCX · max. 10 MB
                  </p>
                </div>

                <button
                  type="submit"
                  className="pill-button-primary px-8 py-3.5 text-sm w-full gap-2"
                >
                  <Send className="w-4 h-4" />
                  Bewerbung absenden
                </button>
              </form>
            </div>
          </div>
          <div className="w-full">
            <svg viewBox="0 0 1440 60" fill="none" className="w-full block">
              <path d="M0 60L1440 60L1440 40C1440 40 1080 0 720 0C360 0 0 40 0 40L0 60Z" fill="white" />
            </svg>
          </div>
        </section>

        <CTASection
          title="Keine passende Stelle dabei?"
          subtitle="Schick uns eine Initiativbewerbung – wir sind immer auf der Suche nach Talenten."
        />
      </main>
      <Footer />
    </div>
  );
};

export default Karriere;
