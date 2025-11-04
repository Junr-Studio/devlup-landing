"use client";

import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, MessageSquareOff, TrendingDown, Sparkles } from "lucide-react";
import Image from "next/image";

export function ProblemSolution() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const problems = [
    {
      icon: Clock,
      title: "Gestion manuelle chronophage",
      description:
        "Des heures perdues à gérer les plannings, suivis et évaluations manuellement.",
    },
    {
      icon: MessageSquareOff,
      title: "Communication difficile",
      description:
        "Difficulté à maintenir un contact régulier avec les parents et partager la progression.",
    },
    {
      icon: TrendingDown,
      title: "Suivi individuel complexe",
      description:
        "Impossible de suivre efficacement la progression de chaque élève dans le temps.",
    },
  ];

  const solutions = [
    {
      title: "Simplifiez le travail de l'enseignant",
      description:
        "Devlup centralise la programmation, le suivi des élèves et automatise la communication. L'enseignant bénéficie d'un outil simple pour organiser, évaluer et partager les progrès de chacun. Une gestion claire, au service de l&apos;apprentissage.",
      gradient: "orange",
      image: "/assets/img/coach.webp",
    },
    {
      title: "Impliquez les familles",
      description:
        "Avec Devlup, les parents suivent la progression de leur(s) enfant(s) en temps réel. Chaque étape devient une fierté partagée pour encore plus de motivation.",
      gradient: "aqua",
      image: "/assets/img/family.webp",
    },
    {
      title: "Développez votre école de tennis",
      description:
        "Proposez  un suivi moderne et faites de la progression un levier de croissance durable. Créez cette expérience unique qui fidélise et renforce l&apos;attractivité de votre club.",
      gradient: "rose",
      image: "/assets/img/team.webp",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section className="bg-fg-dark relative overflow-hidden" id="probleme">
      {/* 3D Character - Femme positioned bottom left (visible on tablet+) */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-0 -left-5 w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 opacity-20 md:opacity-30 pointer-events-none hidden md:block"
      >
        <Image
          src="/assets/3d/Femme 2/Femme(2)_pose(1).png"
          alt="Tennis player"
          width={400}
          height={400}
          className="object-contain"
        />
      </motion.div>

      <div ref={ref} className="relative z-10">
        {/* Problems Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Les défis du{" "}
            <span className="text-accent">tennis moderne</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Vous passez plus de temps à gérer qu&apos;à enseigner ?
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {problems.map((problem, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 bg-card/50 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                    <problem.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    {problem.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Transition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-3 bg-orange-gradient px-8 py-4 rounded-2xl">
            <Sparkles className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-white">
              Devlup change la donne
            </h3>
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
        </motion.div>

        {/* Solutions Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`p-8 bg-card/50 backdrop-blur-lg border border-white/10 hover:border-${solution.gradient}-solid/50 transition-all h-full group hover:scale-105 hover:shadow-xl hover:shadow-${solution.gradient}-solid/20`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 mb-6 group-hover:scale-110 transition-transform overflow-hidden rounded-full">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      width={96}
                      height={96}
                      quality={90}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-foreground/70">{solution.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
