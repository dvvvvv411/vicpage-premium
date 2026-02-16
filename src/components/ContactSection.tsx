import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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
    <section id="kontakt" className="py-24 md:py-32">
      <div className="vic-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left – Statement */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
              Kontakt
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Bereit, Ihre Prozesse
              <br />
              neu zu denken?
            </h2>
            <div className="mt-10 space-y-2 text-sm text-muted-foreground">
              <p>kontakt@vicpage.de</p>
              <p>+49 30 123 456 78</p>
            </div>
          </div>

          {/* Right – Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                Name
              </label>
              <Input
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-none border-border bg-transparent focus-visible:ring-primary h-11"
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
                className="rounded-none border-border bg-transparent focus-visible:ring-primary h-11"
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
                className="rounded-none border-border bg-transparent focus-visible:ring-primary resize-none"
              />
            </div>
            <Button
              type="submit"
              className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-10 h-11 text-sm font-semibold tracking-wide w-full md:w-auto"
            >
              Nachricht senden
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
