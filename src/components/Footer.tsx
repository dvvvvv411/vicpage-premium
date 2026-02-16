import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-vic-dark text-white/70">
      <div className="vic-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link to="/" className="font-display text-lg font-bold text-white">
              Vic<span className="text-primary">Page</span>
            </Link>
            <p className="text-xs mt-1">Digitale Medienagentur</p>
          </div>
          <div className="flex flex-wrap gap-8">
            <Link to="/leistungen" className="text-xs hover:text-white transition-colors">Leistungen</Link>
            <Link to="/ergebnisse" className="text-xs hover:text-white transition-colors">Ergebnisse</Link>
            <Link to="/arbeitsweise" className="text-xs hover:text-white transition-colors">Arbeitsweise</Link>
            <Link to="/kontakt" className="text-xs hover:text-white transition-colors">Kontakt</Link>
          </div>
        </div>
        <div className="h-px bg-white/10 my-8" />
        <p className="text-xs text-center text-white/40">
          © {new Date().getFullYear()} VicPage. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
