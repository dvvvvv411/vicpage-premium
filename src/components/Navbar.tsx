import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Leistungen", to: "/leistungen" },
  { label: "Ergebnisse", to: "/ergebnisse" },
  { label: "Arbeitsweise", to: "/arbeitsweise" },
  { label: "Karriere", to: "/karriere" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="vic-container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-xl font-bold tracking-tight text-foreground">
          Vic<span className="text-gradient-blue">Page</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/kontakt" className="pill-button-primary px-6 py-2.5 text-sm">
            Kontakt
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-border/50 px-6 pb-6 pt-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block w-full text-left text-sm font-medium ${
                location.pathname === link.to ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/kontakt" className="pill-button-primary px-6 py-2.5 text-sm w-full text-center block">
            Kontakt
          </Link>
        </div>
      )}
    </nav>
  );
}
