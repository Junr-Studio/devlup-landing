import { Section } from "@/components/layout/Section";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "CGU / CGV - Devlup",
  description: "Conditions générales d'utilisation et de vente de la plateforme Devlup",
};

export default function CGUPage() {
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
              Retour à l'accueil
            </Button>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Conditions Générales d'Utilisation et de Vente
          </h1>
          <p className="text-foreground/60 mb-12">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Objet</h2>
              <p className="text-foreground/70 mb-4">
                Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») ont pour objet
                de définir les modalités et conditions d'utilisation de la plateforme Devlup ainsi
                que les droits et obligations des parties dans ce cadre.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Acceptation des CGU</h2>
              <p className="text-foreground/70 mb-4">
                L'accès et l'utilisation de la plateforme Devlup impliquent l'acceptation pleine et
                entière des présentes CGU. En cas de désaccord avec tout ou partie des CGU,
                l'utilisateur est invité à ne pas utiliser les services proposés.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Services proposés</h2>
              <p className="text-foreground/70 mb-4">
                Devlup propose une plateforme de gestion et de suivi pédagogique pour les écoles de
                tennis, permettant notamment :
              </p>
              <ul className="list-disc list-inside text-foreground/70 mb-4 space-y-2">
                <li>La gestion des élèves et des groupes</li>
                <li>Le suivi de la progression pédagogique</li>
                <li>La communication avec les parents</li>
                <li>La création et le suivi de carnets de compétences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Inscription</h2>
              <p className="text-foreground/70 mb-4">
                L'utilisation de la plateforme nécessite la création d'un compte. L'utilisateur
                s'engage à fournir des informations exactes et à les maintenir à jour. Il est
                responsable de la confidentialité de ses identifiants de connexion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Propriété intellectuelle</h2>
              <p className="text-foreground/70 mb-4">
                L'ensemble des éléments de la plateforme Devlup (structure, textes, graphismes,
                logos, etc.) sont protégés par le droit d'auteur, le droit des marques et/ou le
                droit des brevets. Toute reproduction, représentation, modification, publication ou
                adaptation est strictement interdite sans autorisation préalable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                6. Responsabilité et garanties
              </h2>
              <p className="text-foreground/70 mb-4">
                Devlup s'efforce d'assurer la disponibilité et la sécurité de la plateforme, mais
                ne peut garantir une disponibilité absolue. L'utilisateur reconnaît utiliser la
                plateforme à ses propres risques.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Données personnelles</h2>
              <p className="text-foreground/70 mb-4">
                Le traitement des données personnelles est régi par notre Politique de
                Confidentialité, accessible{" "}
                <Link href="/confidentialite" className="text-orange-solid hover:underline">
                  ici
                </Link>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Modification des CGU</h2>
              <p className="text-foreground/70 mb-4">
                Devlup se réserve le droit de modifier les présentes CGU à tout moment.
                L'utilisateur sera informé de toute modification substantielle.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Droit applicable</h2>
              <p className="text-foreground/70 mb-4">
                Les présentes CGU sont régies par le droit français. Tout litige sera soumis aux
                tribunaux compétents.
              </p>
            </section>

            <hr className="my-12 border-white/10" />

            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 mt-12">
              Conditions Générales de Vente
            </h1>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Objet des CGV</h2>
              <p className="text-foreground/70 mb-4">
                Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent les
                relations contractuelles entre Devlup et ses clients dans le cadre de la vente
                d'abonnements à la plateforme.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Offres et tarifs</h2>
              <p className="text-foreground/70 mb-4">
                Les offres d'abonnement sont celles en vigueur sur le site au moment de la
                commande. Les tarifs sont exprimés en euros hors taxes. La TVA applicable est celle
                en vigueur au jour de la commande.
              </p>
              <ul className="list-disc list-inside text-foreground/70 mb-4 space-y-2">
                <li>Essai gratuit : 1 mois sans engagement</li>
                <li>Abonnement mensuel : 29€ HT/mois</li>
                <li>Abonnement annuel : 19€ HT/mois (facturé 228€ HT/an)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Commande et paiement</h2>
              <p className="text-foreground/70 mb-4">
                La commande est finalisée lors de la validation du paiement. Les moyens de paiement
                acceptés sont :
              </p>
              <ul className="list-disc list-inside text-foreground/70 mb-4 space-y-2">
                <li>Carte bancaire</li>
                <li>Prélèvement SEPA</li>
              </ul>
              <p className="text-foreground/70 mb-4">
                Le paiement est sécurisé et effectué via notre prestataire de paiement certifié.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Durée et renouvellement</h2>
              <p className="text-foreground/70 mb-4">
                L'abonnement est souscrit pour la durée choisie (mensuelle ou annuelle) et se
                renouvelle automatiquement pour la même durée, sauf résiliation effectuée avant la
                date d'échéance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Résiliation</h2>
              <p className="text-foreground/70 mb-4">
                Le client peut résilier son abonnement à tout moment depuis son espace client. La
                résiliation prend effet à la fin de la période en cours. Aucun remboursement n'est
                effectué pour la période en cours.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Droit de rétractation</h2>
              <p className="text-foreground/70 mb-4">
                Conformément à l'article L221-28 du Code de la consommation, le droit de
                rétractation ne peut être exercé pour les contrats de fourniture d'un contenu
                numérique non fourni sur un support matériel dont l'exécution a commencé après
                accord préalable exprès du consommateur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Facturation</h2>
              <p className="text-foreground/70 mb-4">
                Une facture est automatiquement générée et envoyée par email à chaque paiement. Les
                factures sont également accessibles depuis l'espace client.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Service client</h2>
              <p className="text-foreground/70 mb-4">
                Pour toute question relative à votre commande ou abonnement, notre service client
                est disponible par email à : contact@devlup.fr
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
