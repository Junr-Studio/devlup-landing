import { Section } from "@/components/layout/Section";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Politique de Confidentialité - Devlup",
  description: "Politique de confidentialité et protection des données de Devlup",
};

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-bg-dark">
      <Header />
      <div className="pt-20">
        <Section className="bg-fg-dark">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Button
              variant="outline"
              className="mb-8 text-foreground/60 hover:text-background hover:bg-secondary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l&apos;accueil
            </Button>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-foreground/60 mb-12">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-foreground/70 mb-4">
                Devlup accorde une grande importance à la protection de vos données personnelles.
                Cette politique de confidentialité explique comment nous collectons, utilisons et
                protégeons vos informations conformément au Règlement Général sur la Protection des
                Données (RGPD).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                2. Responsable du traitement
              </h2>
              <p className="text-foreground/70 mb-4">
                Le responsable du traitement des données est Devlup, dont les coordonnées complètes
                sont disponibles dans les{" "}
                <Link href="/mentions-legales" className="text-orange-solid hover:underline">
                  Mentions Légales
                </Link>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Données collectées</h2>
              <p className="text-foreground/70 mb-4">Nous collectons les données suivantes :</p>
              <ul className="list-disc list-inside text-foreground/70 mb-4 space-y-2">
                <li>
                  <strong>Données d&apos;identification :</strong> nom, prénom, adresse email
                </li>
                <li>
                  <strong>Données de connexion :</strong> identifiants, mots de passe (chiffrés)
                </li>
                <li>
                  <strong>Données d&apos;utilisation :</strong> logs de connexion, actions effectuées
                </li>
                <li>
                  <strong>Données pédagogiques :</strong> informations sur les élèves et leur
                  progression
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                4. Finalités du traitement
              </h2>
              <p className="text-foreground/70 mb-4">
                Vos données sont collectées pour les finalités suivantes :
              </p>
              <ul className="list-disc list-inside text-foreground/70 mb-4 space-y-2">
                <li>Gestion de votre compte utilisateur</li>
                <li>Fourniture des services de la plateforme</li>
                <li>Communication avec vous concernant le service</li>
                <li>Amélioration de nos services</li>
                <li>Respect de nos obligations légales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Base légale</h2>
              <p className="text-foreground/70 mb-4">
                Le traitement de vos données repose sur :
              </p>
              <ul className="list-disc list-inside text-foreground/70 mb-4 space-y-2">
                <li>L&apos;exécution du contrat vous liant à Devlup</li>
                <li>Votre consentement pour certains traitements spécifiques</li>
                <li>Notre intérêt légitime pour l&apos;amélioration de nos services</li>
                <li>Nos obligations légales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Conservation des données</h2>
              <p className="text-foreground/70 mb-4">
                Vos données sont conservées pendant la durée nécessaire aux finalités pour
                lesquelles elles sont collectées, et conformément aux obligations légales de
                conservation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Sécurité des données</h2>
              <p className="text-foreground/70 mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
                garantir la sécurité de vos données :
              </p>
              <ul className="list-disc list-inside text-foreground/70 mb-4 space-y-2">
                <li>Chiffrement des données sensibles</li>
                <li>Hébergement sécurisé en Europe</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Sauvegardes régulières</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Vos droits</h2>
              <p className="text-foreground/70 mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-foreground/70 mb-4 space-y-2">
                <li>Droit d&apos;accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d&apos;opposition</li>
                <li>Droit de retirer votre consentement</li>
              </ul>
              <p className="text-foreground/70 mb-4">
                Pour exercer ces droits, contactez-nous à : contact@devlup.fr
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Cookies</h2>
              <p className="text-foreground/70 mb-4">
                Notre site utilise des cookies nécessaires au fonctionnement de la plateforme. Vous
                pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter
                certaines fonctionnalités.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Contact</h2>
              <p className="text-foreground/70 mb-4">
                Pour toute question relative à cette politique de confidentialité, vous pouvez nous
                contacter à : contact@devlup.fr
              </p>
            </section>
          </div>
        </div>
        </Section>
      </div>
      <Footer />
    </div>
  );
}
