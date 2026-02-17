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
    <section id="kontakt" className="relative overflow-hidden">
      <div className="bg-gradient-to-br from-primary via-primary to-vic-indigo py-24 md:py-32 relative">
        {/* Decorative */}
        <div className="absolute top-10 right-20 opacity-10 animate-float">
          <Sparkles className="w-16 h-16 text-white" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10 animate-float-delayed">
          <div className="w-32 h-32 rounded-full border-2 border-white/20" />
        </div>

        <div className="vic-container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left – Statement */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Bereit, Ihre Prozesse
                <br />
                neu zu denken?
              </h2>
              <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-lg">
                Lassen Sie uns in einem unverbindlichen Gespräch herausfinden, wie wir Ihre Workflows optimieren können.
              </p>
              <div className="mt-10 space-y-3 text-white/60 text-sm">
                <p>info@47-skys.de</p>
                <p>06131-6365858</p>
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
      </div>
    </section>
  );
}
