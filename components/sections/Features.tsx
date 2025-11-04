"use client";

import { Section } from "@/components/layout/Section";
import SpotlightCard from "@/components/SpotlightCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BookOpen,
  ClipboardCheck,
  Bell,
  Trophy,
  Users,
  Shield,
} from "lucide-react";
import Image from "next/image";

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: BookOpen,
      title: "Carnets de compétences",
      description:
        "Créez des carnets personnalisés adaptés à votre méthode d'enseignement. Suivi détaillé de la progression.",
      gradient: "orange",
    },
    {
      icon: ClipboardCheck,
      title: "Évaluations simplifiées",
      description:
        "Évaluez individuellement ou en groupe en quelques clics. Historique complet disponible.",
      gradient: "aqua",
    },
    {
      icon: Bell,
      title: "Notifications temps réel",
      description:
        "Parents et élèves reçoivent automatiquement les mises à jour de progression et d'évaluation.",
      gradient: "rose",
    },
    {
      icon: Trophy,
      title: "Passage de niveaux",
      description:
        "Gamifiez l'apprentissage avec un système de niveaux motivant pour vos élèves.",
      gradient: "orange",
    },
    {
      icon: Users,
      title: "Espaces dédiés gratuits",
      description:
        "Parents et élèves accèdent gratuitement à leur espace personnel. Aucun coût additionnel.",
      gradient: "aqua",
    },
    {
      icon: Shield,
      title: "Équipe pédagogique",
      description:
        "Gérez plusieurs enseignants dans votre club. Coordination simplifiée de l'équipe.",
      gradient: "rose",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <Section className="bg-bg-dark relative overflow-hidden" id="fonctionnalites">
      {/* 3D Character - Homme positioned top right */}
      <motion.div
        initial={{ opacity: 0, x: 100, y: -50 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute top-10 right-0 w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 opacity-20 pointer-events-none hidden lg:block"
      >
        <Image
          src="/assets/3d/Homme 2/Homme(2)_pose(3).png"
          alt="Tennis coach"
          width={400}
          height={400}
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
            Tout ce dont vous avez besoin,{" "}
            <span className="text-gradient-orange">
              rien de superflu
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Une suite complète d&apos;outils pensés pour simplifier votre quotidien
            et améliorer l&apos;expérience de vos élèves.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <SpotlightCard
                className="h-full backdrop-blur-lg transition-all group hover:scale-105"
                spotlightColor={
                  feature.gradient === "orange"
                    ? "rgba(255, 106, 0, 0.52)"
                    : feature.gradient === "aqua"
                    ? "rgba(135, 206, 250, 0.59)"
                    : "rgba(225, 0, 255, 0.57)"
                }
              >
                <div className="flex flex-col h-full">
                  <div
                    className={`w-12 h-12 rounded-xl bg-${feature.gradient}-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60 text-sm flex-grow">
                    {feature.description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
