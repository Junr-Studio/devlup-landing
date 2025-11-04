"use client";

import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      name: "Essai",
      price: "0",
      period: "1 mois",
      description: "Testez sans engagement",
      features: [
        "Accès à toutes les fonctionnalités",
        "Jusqu'à 300 élèves",
        "Carnets de compétences illimités",
        "Espaces parents gratuits",
        "Support par email",
      ],
      cta: "Commencer l'essai",
      popular: false,
      gradient: "aqua",
    },
    {
      name: "Annuel",
      price: "19",
      period: "mois",
      description: "Économisez 120€ par an",
      badge: "Recommandé",
      features: [
        "Tout du plan mensuel",
        "Jusqu'à 300 élèves",
        "Multi-enseignants",
        "Personnalisation complète",
        "Support prioritaire",
        "Statistiques avancées",
      ],
      cta: "Commencer maintenant",
      popular: true,
      gradient: "orange",
    },
    {
      name: "Mensuel",
      price: "29",
      period: "mois",
      description: "Sans engagement",
      features: [
        "Toutes les fonctionnalités",
        "Jusqu'à 300 élèves",
        "Multi-enseignants",
        "Support par email",
        "Mises à jour incluses",
      ],
      cta: "Commencer maintenant",
      popular: false,
      gradient: "rose",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section className="bg-fg-dark relative overflow-hidden" id="tarifs">
      {/* 3D Character - Homme left side (larger, visible on mobile) */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute -left-10 md:-left-5 top-1/4 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 opacity-20 md:opacity-25 pointer-events-none"
      >
        <Image
          src="/assets/3d/Homme 1/Homme(1)_pose(3).png"
          alt="Tennis player"
          width={400}
          height={400}
          className="object-contain"
        />
      </motion.div>

      {/* 3D Character - Femme right side (smaller) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute -right-5 bottom-10 md:bottom-1/4 w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 opacity-15 md:opacity-20 pointer-events-none"
      >
        <Image
          src="/assets/3d/Femme 2/Femme(2)_pose(3).png"
          alt="Tennis player"
          width={350}
          height={350}
          className="object-contain"
        />
      </motion.div>

      <div ref={ref} className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Une tarification{" "}
            <span className="text-gradient-orange">
              simple et transparente
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choisissez la formule qui correspond à vos besoins. Tous les prix sont pour toute l'école de tennis et incluent l'accès gratuit pour les parents et élèves.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`p-8 backdrop-blur-lg border-[3px] overflow-visible ${
                  plan.popular
                    ? "border-orange-solid bg-[#241C46] scale-105 shadow-2xl shadow-orange-solid/50"
                    : "border-white/10 bg-[#241C46] hover:border-white/20"
                } transition-all h-full flex flex-col relative group`}
                style={plan.popular ? {
                  borderColor: '#FF6A00'
                } : undefined}
              >
                {plan.badge && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                    <Badge
                      className="text-white px-8 py-2.5 font-bold text-base shadow-2xl shadow-orange-solid/60"
                      style={{
                        backgroundColor: '#FF6A00'
                      }}
                    >
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-white">
                      {plan.price}€{plan.name !== "Annuel" && "*"}
                    </span>
                    <span className="text-foreground/60">/{plan.period}</span>
                  </div>
                  {plan.name === "Annuel" && (
                    <>
                      <p className="text-sm text-orange-solid mt-2 font-semibold">
                        Facturé 228€ HT/an*
                      </p>
                    </>
                  )}
                  {plan.name === "Mensuel" && (
                    <p className="text-sm text-foreground/40 mt-2">HT</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-foreground/70"
                    >
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="w-full bg-transparent border-2 border-white/20 text-white font-semibold hover:scale-105 transition-all duration-300"
                  onMouseEnter={(e) => {
                    if (plan.popular) {
                      e.currentTarget.style.background = 'linear-gradient(to right, #FF6A00, #FF8834, #FF6A00)';
                      e.currentTarget.style.borderColor = '#FF6A00';
                      e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(255, 106, 0, 0.7)';
                    } else {
                      e.currentTarget.style.backgroundColor = '#E100FF';
                      e.currentTarget.style.borderColor = '#E100FF';
                      e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(225, 0, 255, 0.5)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12 space-y-3"
        >
          <div className="text-foreground/50 text-xs max-w-3xl mx-auto space-y-1">
            <p>*Limité à 300 élèves pour l'essai 1 mois et le plan mensuel</p>
            <p>*+0,95€/an/élève supplémentaire à partir de 300 pour le plan annuel</p>
          </div>
          <p className="text-foreground/60 text-sm pt-3">
            💳 Tous les plans HT • 🔒 Paiement sécurisé • 🔄 Résiliation simple
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
