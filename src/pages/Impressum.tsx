import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const Impressum = () => {
  useEffect(() => { document.title = "Impressum – 47skys"; }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          badge="Rechtliches"
          title="Impressum"
          subtitle="Angaben gemäß § 5 TMG"
        />

        <section className="py-20 md:py-28 bg-white">
          <div className="vic-container max-w-3xl">
            <div className="prose prose-sm max-w-none text-muted-foreground space-y-8">
              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">Angaben gemäß § 5 TMG</h2>
                <p>
                  47skys GmbH<br />
                  Am Klostergarten 6<br />
                  55131 Mainz
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">Vertreten durch</h2>
                <p>Geschäftsführer: Florian Braun</p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">Kontakt</h2>
                <p>
                  Telefon: 06131-6365858<br />
                  E-Mail: info@47-skys.de
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">Registereintrag</h2>
                <p>
                  Eintragung im Handelsregister.<br />
                  Registergericht: Amtsgericht Mainz<br />
                  Registernummer: HRB 54159
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">Umsatzsteuer-ID</h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  DE258920497
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">Haftung für Inhalte</h2>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">Haftung für Links</h2>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">Urheberrecht</h2>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">Streitschlichtung</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
