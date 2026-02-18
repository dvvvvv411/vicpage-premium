import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin, ChevronDown } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "E-Mail", value: "info@47-skys.de" },
  { icon: Phone, label: "Telefon", value: "06131-6365858" },
  { icon: MapPin, label: "Standort", value: "Mainz, Deutschland" },
];

const faqs = [
  { q: "Wie schnell antworten Sie?", a: "Wir antworten in der Regel innerhalb von 24 Stunden auf Ihre Anfrage. Bei dringenden Anliegen erreichen Sie uns auch telefonisch." },
  { q: "Ist das Erstgespräch kostenlos?", a: "Ja, das erste Beratungsgespräch ist für Sie komplett kostenlos und unverbindlich. Wir nehmen uns 30-45 Minuten Zeit, um Ihre Situation zu verstehen." },
  { q: "In welchen Regionen sind Sie tätig?", a: "Wir arbeiten deutschlandweit und im DACH-Raum. Durch Remote-Arbeit und regelmäßige Vor-Ort-Termine sind wir flexibel aufgestellt." },
];

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useEffect(() => { document.title = "Kontakt – 47skys"; }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Nachricht gesendet", description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen." });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          badge="Kontakt"
          title={<>Lassen Sie uns <span className="text-gradient-blue">sprechen</span></>}
          subtitle="Erzählen Sie uns von Ihrem Projekt – wir finden gemeinsam die beste Lösung."
        />

        <section className="py-20 md:py-28 bg-white">
          <div className="vic-container">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Form */}
              <form onSubmit={handleSubmit} className="lg:col-span-3 glass-card-solid rounded-2xl p-8 md:p-10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Name *</label>
                    <Input required maxLength={100} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="rounded-xl border-border bg-muted/50 focus-visible:ring-primary h-12" placeholder="Ihr Name" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">E-Mail *</label>
                    <Input type="email" required maxLength={255} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="rounded-xl border-border bg-muted/50 focus-visible:ring-primary h-12" placeholder="ihre@email.de" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Telefon</label>
                    <Input type="tel" maxLength={30} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="rounded-xl border-border bg-muted/50 focus-visible:ring-primary h-12" placeholder="+49 ..." />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Unternehmen</label>
                    <Input maxLength={100} value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="rounded-xl border-border bg-muted/50 focus-visible:ring-primary h-12" placeholder="Ihr Unternehmen" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Nachricht *</label>
                  <Textarea required maxLength={1000} rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="rounded-xl border-border bg-muted/50 focus-visible:ring-primary resize-none" placeholder="Beschreiben Sie kurz Ihr Anliegen..." />
                </div>
                <button type="submit" className="pill-button-primary px-8 py-3.5 text-sm w-full gap-2">
                  <Send className="w-4 h-4" />
                  Nachricht senden
                </button>
              </form>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-6">Kontaktdaten</h3>
                  <div className="space-y-5">
                    {contactInfo.map((c) => (
                      <div key={c.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                          <c.icon className="w-5 h-5 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{c.label}</p>
                          <p className="text-sm font-medium text-foreground mt-0.5">{c.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="rounded-2xl bg-gradient-to-br from-accent to-vic-blue-light border border-primary/10 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-primary/30 mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Mainz, Deutschland</p>
                  </div>
                </div>
              </div>
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
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                      <span className="font-display font-semibold text-foreground pr-4">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-6"><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full"><svg viewBox="0 0 1440 60" fill="none" className="w-full block"><path d="M0 60L1440 60L1440 40C1440 40 1080 0 720 0C360 0 0 40 0 40L0 60Z" fill="white" /></svg></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
