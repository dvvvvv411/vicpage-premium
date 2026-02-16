export function Footer() {
  return (
    <footer className="bg-vic-dark text-white/70">
      <div className="vic-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-lg font-bold text-white">
              Vic<span className="text-primary">Page</span>
            </p>
            <p className="text-xs mt-1">Digitale Medienagentur</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-xs hover:text-white transition-colors">
              Impressum
            </a>
            <a href="#" className="text-xs hover:text-white transition-colors">
              Datenschutz
            </a>
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
