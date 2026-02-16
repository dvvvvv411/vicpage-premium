import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center pt-24 pb-20">
      <div className="vic-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text – left-aligned, asymmetric */}
          <div className="lg:col-span-7 lg:pr-8">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-6">
              Digitale Medienagentur
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-foreground">
              Wir machen Ihre Prozesse schneller.
              <br />
              <span className="text-muted-foreground">Nicht Ihre Website bunter.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Prozessoptimierung durch präzise Digitalstrategien. Messbar, skalierbar,
              ohne Buzzword-Bingo.
            </p>
            <Button
              size="lg"
              onClick={() =>
                document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-10 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-10 h-12 text-sm font-semibold tracking-wide"
            >
              Gespräch vereinbaren
            </Button>
          </div>

          {/* Abstract line diagram – right side */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
            <svg
              viewBox="0 0 400 400"
              className="w-full max-w-[360px] text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              {/* Abstract process flow lines */}
              <path
                d="M 40 200 L 120 200 L 160 120 L 240 120 L 280 200 L 360 200"
                className="animate-line-draw"
                strokeDasharray="1000"
                opacity="0.6"
              />
              <path
                d="M 40 240 L 140 240 L 180 300 L 260 300 L 300 240 L 360 240"
                className="animate-line-draw"
                strokeDasharray="1000"
                opacity="0.3"
                style={{ animationDelay: "0.5s" }}
              />
              <path
                d="M 80 160 L 160 160 L 200 80 L 320 80"
                className="animate-line-draw"
                strokeDasharray="1000"
                opacity="0.15"
                style={{ animationDelay: "1s" }}
              />
              {/* Node dots */}
              {[
                [120, 200], [160, 120], [240, 120], [280, 200],
                [140, 240], [180, 300], [260, 300], [300, 240],
                [160, 160], [200, 80],
              ].map(([cx, cy], i) => (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r="3"
                  fill="currentColor"
                  opacity={0.4 - i * 0.03}
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
