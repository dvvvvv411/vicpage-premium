import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 p-4 md:p-6 transition-all duration-500 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="vic-container">
        <div className="glass-card rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten.
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/datenschutz"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Mehr erfahren
            </Link>
            <button
              onClick={accept}
              className="pill-button-primary px-5 py-2 text-sm"
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
