import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Sparkles } from "lucide-react";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet",
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="kontakt" className="relative overflow-hidden bg-accent py-24 md:py-32">
      {/* Decorative blur blobs */}
      <div className="absolute top-[-100px] right-[-60px] w-[350px] h-[350px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-vic-indigo/8 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] rounded-full bg-vic-blue-medium/10 blur-3xl" />

      {/* Floating decorative elements */}
      <div className="absolute top-10 right-20 opacity-20 animate-float">
        <Sparkles className="w-10 h-10 text-primary" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10 animate-float-delayed">
        <div className="w-24 h-24 rounded-full border-2 border-primary/15" />
      </div>

      <div className="vic-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left – Statement */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Bereit, Ihre Prozesse
              <br />
              <span className="text-primary">neu zu denken?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Lassen Sie uns in einem unverbindlichen Gespräch herausfinden, wie wir Ihre Workflows optimieren können.
            </p>
            <div className="mt-10 space-y-3 text-muted-foreground text-sm">
              <p>kontakt@vicpage.de</p>
              <p>+49 30 123 456 78</p>
            </div>
          </div>

          {/* Right – Form card */}
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-3xl p-8 md:p-10 space-y-5 bg-white/95 backdrop-blur-xl border-white/80"
          >
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                Name
              </label>
              <Input
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-xl border-border bg-muted/50 focus-visible:ring-primary h-12"
                placeholder="Ihr Name"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                E-Mail
              </label>
              <Input
                type="email"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="rounded-xl border-border bg-muted/50 focus-visible:ring-primary h-12"
                placeholder="ihre@email.de"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                Nachricht
              </label>
              <Textarea
                required
                maxLength={1000}
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="rounded-xl border-border bg-muted/50 focus-visible:ring-primary resize-none"
                placeholder="Beschreiben Sie kurz Ihr Anliegen..."
              />
            </div>
            <button
              type="submit"
              className="pill-button-primary px-8 py-3.5 text-sm w-full gap-2"
            >
              <Send className="w-4 h-4" />
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
