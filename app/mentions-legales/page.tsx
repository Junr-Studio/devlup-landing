import { Section } from "@/components/layout/Section";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Mentions Légales - Devlup",
  description: "Mentions légales et informations sur Devlup",
};

export default function MentionsLegalesPage() {
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

          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Mentions Légales</h1>
          <p className="text-foreground/60 mb-12">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Éditeur du site</h2>
              <p className="text-foreground/70 mb-2">
                <strong>Raison sociale :</strong> Devlup
              </p>
              <p className="text-foreground/70 mb-2">
                <strong>Forme juridique :</strong> [À compléter]
              </p>
              <p className="text-foreground/70 mb-2">
                <strong>Capital social :</strong> [À compléter]
              </p>
              <p className="text-foreground/70 mb-2">
                <strong>Siège social :</strong> [À compléter]
              </p>
              <p className="text-foreground/70 mb-2">
                <strong>SIRET :</strong> [À compléter]
              </p>
              <p className="text-foreground/70 mb-2">
                <strong>Email :</strong>{" "}
                <a href="mailto:contact@devlup.fr" className="text-orange-solid hover:underline">
                  contact@devlup.fr
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                2. Directeur de la publication
              </h2>
              <p className="text-foreground/70 mb-4">
                <strong>Nom :</strong> [À compléter]
              </p>
              <p className="text-foreground/70 mb-4">
                <strong>Qualité :</strong> [À compléter]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Hébergement</h2>
              <p className="text-foreground/70 mb-2">
                <strong>Hébergeur :</strong> [À compléter - ex: Vercel, AWS, etc.]
              </p>
              <p className="text-foreground/70 mb-2">
                <strong>Adresse :</strong> [À compléter]
              </p>
              <p className="text-foreground/70 mb-2">
                <strong>Téléphone :</strong> [À compléter]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Propriété intellectuelle</h2>
              <p className="text-foreground/70 mb-4">
                L&apos;ensemble de ce site relève de la législation française et internationale sur le
                droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont
                réservés, y compris pour les documents téléchargeables et les représentations
                iconographiques et photographiques.
              </p>
              <p className="text-foreground/70 mb-4">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il
                soit est formellement interdite sauf autorisation expresse du directeur de la
                publication.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Liens hypertextes</h2>
              <p className="text-foreground/70 mb-4">
                Le site peut contenir des liens hypertextes vers d&apos;autres sites. Devlup ne dispose
                d&apos;aucun moyen pour contrôler les contenus de ces sites et décline toute
                responsabilité quant aux contenus de ces sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                6. Données personnelles et cookies
              </h2>
              <p className="text-foreground/70 mb-4">
                Pour en savoir plus sur la gestion de vos données personnelles et l&apos;utilisation des
                cookies, consultez notre{" "}
                <Link href="/confidentialite" className="text-orange-solid hover:underline">
                  Politique de Confidentialité
                </Link>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Crédits</h2>
              <p className="text-foreground/70 mb-4">
                <strong>Conception et réalisation :</strong> Devlup
              </p>
              <p className="text-foreground/70 mb-4">
                <strong>Crédits photos :</strong> [À compléter]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact</h2>
              <p className="text-foreground/70 mb-4">
                Pour toute question ou demande d&apos;information concernant le site, vous pouvez nous
                contacter :
              </p>
              <p className="text-foreground/70 mb-2">
                <strong>Par email :</strong>{" "}
                <a href="mailto:contact@devlup.fr" className="text-orange-solid hover:underline">
                  contact@devlup.fr
                </a>
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
