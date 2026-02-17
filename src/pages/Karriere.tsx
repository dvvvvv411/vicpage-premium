import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Input } from "@/components/ui/input";

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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const tasks = [
  "Durchführung und Dokumentation von vorgegebenen Prüf- und Anwendungsvorgängen nach internen Richtlinien",
  "Bearbeitung strukturierter Feedback- und Bewertungsprozesse zu digitalen Produkten und Dienstleistungen",
  "Erfassung, Weiterleitung und Nachverfolgung festgestellter Abweichungen oder Optimierungshinweise",
  "Unterstützung bei der Qualitätssicherung durch sorgfältige Protokollierung von Ergebnissen und Einhaltung vorgegebener Abläufe",
];

const profile = [
  "Keine Vorerfahrung erforderlich – ideal für Berufseinsteiger und Quereinsteiger",
  "Fließende Deutschkenntnisse in Wort und Schrift",
  "Sicherer Umgang mit gängigen Office-Anwendungen (Word, Excel & Co.)",
  "Eigenes Handy oder Laptop vorhanden",
  "Sorgfältige, zuverlässige und selbstständige Arbeitsweise",
  "Interesse an digitalen Produkten und Dienstleistungen",
];

const benefits = [
  "Flexible Arbeitszeiten",
  "100 % Homeoffice / Remote",
  "Weiterbildungsmöglichkeiten",
  "Flache Hierarchien und ein motiviertes Team",
];

const positions = [
  { type: "Minijob", hours: "10 Stunden / Woche", salary: "603,00 €" },
  { type: "Teilzeit", hours: "20 Stunden / Woche", salary: "1.600,00 €" },
  { type: "Vollzeit", hours: "40 Stunden / Woche", salary: "3.400,00 €" },
];

const Karriere = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    zip: "",
    city: "",
    employmentType: "",
    
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bewerbung gesendet",
      description: "Vielen Dank! Wir melden uns innerhalb weniger Tage bei Ihnen.",
    });
    setFormData({ firstName: "", lastName: "", email: "", phone: "", street: "", zip: "", city: "", employmentType: "" });
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

        {/* Job Listing mit Auf einen Blick */}
        <section className="py-20 md:py-28 bg-white">
          <div className="vic-container">
            {/* Auf einen Blick */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="glass-card-solid rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Standort</p>
                  <p className="text-base font-semibold text-foreground">Mainz / Remote (100% Homeoffice)</p>
                </div>
              </div>
              <div className="glass-card-solid rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Startdatum</p>
                  <p className="text-base font-semibold text-foreground">Ab sofort</p>
                </div>
              </div>
              <div className="glass-card-solid rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Team</p>
                  <p className="text-base font-semibold text-foreground">12 Mitarbeitende</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
              {/* Left: Job Details */}
              <div>
                <div className="glass-card-solid rounded-2xl p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center shrink-0">
                      <Briefcase className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                        Auftragsbearbeiter im Bereich Datenerfassung (m/w/d)
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-10">
                    <span className="section-badge text-[10px] py-1 px-3">
                      <MapPin className="w-3 h-3" /> Mainz / Remote
                    </span>
                    <span className="section-badge text-[10px] py-1 px-3">
                      <Clock className="w-3 h-3" /> Minijob / Teilzeit / Vollzeit
                    </span>
                    <span className="section-badge text-[10px] py-1 px-3">
                      <Star className="w-3 h-3" /> Keine Vorerfahrung nötig
                    </span>
                  </div>

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

                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        Verfügbare Modelle & Vergütung
                      </h3>
                      <div className="space-y-3">
                        {positions.map((pos, i) => (
                          <div key={i} className="flex items-center justify-between rounded-xl bg-muted/50 border border-border p-4">
                            <div>
                              <p className="text-sm font-semibold text-foreground">{pos.type}</p>
                              <p className="text-xs text-muted-foreground">{pos.hours}</p>
                            </div>
                            <p className="text-sm font-bold text-primary">{pos.salary} / Monat</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Sticky Form */}
              <div>
                <div className="lg:sticky lg:top-28">
                  <form
                    onSubmit={handleSubmit}
                    className="glass-card-solid rounded-2xl p-6 space-y-4"
                  >
                    <h3 className="font-display text-base font-bold text-foreground">Jetzt bewerben</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">
                          Vorname *
                        </label>
                        <Input
                          required
                          maxLength={50}
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="rounded-xl border-border bg-muted/50 focus-visible:ring-primary h-11"
                          placeholder="Vorname"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">
                          Nachname *
                        </label>
                        <Input
                          required
                          maxLength={50}
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="rounded-xl border-border bg-muted/50 focus-visible:ring-primary h-11"
                          placeholder="Nachname"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">
                        E-Mail *
                      </label>
                      <Input
                        type="email"
                        required
                        maxLength={255}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="rounded-xl border-border bg-muted/50 focus-visible:ring-primary h-11"
                        placeholder="deine@email.de"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">
                        Telefon
                      </label>
                      <Input
                        type="tel"
                        maxLength={30}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="rounded-xl border-border bg-muted/50 focus-visible:ring-primary h-11"
                        placeholder="+49 ..."
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">
                        Straße & Hausnummer *
                      </label>
                      <Input
                        required
                        maxLength={100}
                        value={formData.street}
                        onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                        className="rounded-xl border-border bg-muted/50 focus-visible:ring-primary h-11"
                        placeholder="Musterstraße 1"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-1">
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">
                          PLZ *
                        </label>
                        <Input
                          required
                          maxLength={10}
                          value={formData.zip}
                          onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                          className="rounded-xl border-border bg-muted/50 focus-visible:ring-primary h-11"
                          placeholder="10115"
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">
                          Stadt *
                        </label>
                        <Input
                          required
                          maxLength={100}
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="rounded-xl border-border bg-muted/50 focus-visible:ring-primary h-11"
                          placeholder="Berlin"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">
                        Anstellungsart *
                      </label>
                      <Select
                        value={formData.employmentType}
                        onValueChange={(value) => setFormData({ ...formData, employmentType: value })}
                        required
                      >
                        <SelectTrigger className="rounded-xl border-border bg-muted/50 focus:ring-primary h-11">
                          <SelectValue placeholder="Bitte wählen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="minijob">Minijob – 603,00 EUR/Monat</SelectItem>
                          <SelectItem value="teilzeit">Teilzeit – 1.600,00 EUR/Monat</SelectItem>
                          <SelectItem value="vollzeit">Vollzeit – 3.400,00 EUR/Monat</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="border-2 border-dashed border-border rounded-2xl p-5 text-center hover:border-primary/40 transition-colors cursor-pointer group">
                      <Upload className="w-7 h-7 text-muted-foreground mx-auto mb-2 group-hover:text-primary transition-colors" />
                      <p className="text-sm font-medium text-foreground">Lebenslauf hochladen</p>
                      <p className="text-xs text-muted-foreground mt-1">PDF, DOC oder DOCX · max. 10 MB</p>
                    </div>

                    <button
                      type="submit"
                      className="pill-button-primary px-8 py-3 text-sm w-full gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Bewerbung absenden
                    </button>
                  </form>
                </div>
              </div>
            </div>
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
