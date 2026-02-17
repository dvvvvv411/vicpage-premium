import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/47skys-logo.png";

export function Footer() {
  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="vic-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="font-display text-xl font-bold text-foreground">
              <img src={logo} alt="47skys" className="h-12 w-auto transition-transform duration-200 hover:scale-110" />
            </Link>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Digitale Medienagentur für Prozessoptimierung, Performance Marketing und datengetriebenes Wachstum.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
              <Link to="/leistungen" className="text-sm text-muted-foreground hover:text-primary transition-colors">Leistungen</Link>
              <Link to="/ergebnisse" className="text-sm text-muted-foreground hover:text-primary transition-colors">Ergebnisse</Link>
              <Link to="/arbeitsweise" className="text-sm text-muted-foreground hover:text-primary transition-colors">Arbeitsweise</Link>
              <Link to="/karriere" className="text-sm text-muted-foreground hover:text-primary transition-colors">Karriere</Link>
              <Link to="/kontakt" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kontakt</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Kontakt</h4>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:info@47-skys.de" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" /> info@47-skys.de
              </a>
              <a href="tel:+4961316365858" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" /> 06131-6365858
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-border my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} 47skys. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link to="/impressum" className="text-xs text-muted-foreground hover:text-primary transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-xs text-muted-foreground hover:text-primary transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
