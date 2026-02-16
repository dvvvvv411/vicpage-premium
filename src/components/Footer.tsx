export function Footer() {
  return (
    <footer>
      <div className="vic-container">
        <div className="h-px bg-primary/20" />
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} VicPage. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Impressum
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
