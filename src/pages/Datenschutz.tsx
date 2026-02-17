import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHero
          badge="Rechtliches"
          title="Datenschutzerklärung"
          subtitle="Informationen zum Umgang mit Ihren personenbezogenen Daten"
        />

        <section className="py-20 md:py-28 bg-white">
          <div className="vic-container max-w-3xl">
            <div className="prose prose-sm max-w-none text-muted-foreground space-y-8">
              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">1. Verantwortlicher</h2>
                <p>
                  47skys GmbH<br />
                  Am Klostergarten 6<br />
                  55131 Mainz<br />
                  E-Mail: info@47-skys.de<br />
                  Telefon: 06131-6365858
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">2. Erhebung und Speicherung personenbezogener Daten</h2>
                <p>
                  Beim Besuch unserer Website werden automatisch Informationen durch den Browser übermittelt und in sogenannten Server-Log-Dateien gespeichert. Dies umfasst Browsertyp und -version, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und die IP-Adresse. Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit anderen Datenquellen zusammengeführt.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">3. Kontaktformular</h2>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">4. Bewerbungsformular</h2>
                <p>
                  Wenn Sie sich über unser Bewerbungsformular auf eine Stelle bewerben, werden Ihre personenbezogenen Daten (Name, Kontaktdaten, Adresse, Anstellungsart) zum Zweck der Bearbeitung Ihrer Bewerbung verarbeitet. Die Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b DSGVO i.V.m. § 26 BDSG. Ihre Bewerbungsdaten werden nach Abschluss des Bewerbungsverfahrens gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">5. Cookies</h2>
                <p>
                  Unsere Website verwendet teilweise sogenannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Die meisten der von uns verwendeten Cookies sind so genannte Session-Cookies, die nach Ende Ihres Besuchs automatisch gelöscht werden.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">6. Hosting</h2>
                <p>
                  Unsere Website wird bei einem externen Dienstleister gehostet. Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten und sonstige Daten handeln, die über eine Website generiert werden.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">7. Ihre Rechte</h2>
                <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                  <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                  <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                  <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
                </ul>
                <p className="mt-3">
                  Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">8. Aktualität und Änderung dieser Datenschutzerklärung</h2>
                <p>
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Februar 2026. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
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

export default Datenschutz;
