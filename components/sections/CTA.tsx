"use client";

import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { StoreButtons } from "@/components/ui/StoreButtons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

export function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section className="bg-fg-dark relative overflow-hidden">
      {/* 3D Character - Homme positioned right side (larger, visible mobile) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute -right-8 md:-right-10 top-1/2 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 opacity-15 md:opacity-20 pointer-events-none"
      >
        <Image
          src="/assets/3d/Homme 2/Homme(2)_pose(1).png"
          alt="Tennis enthusiast"
          width={400}
          height={400}
          className="object-contain"
        />
      </motion.div>

      {/* 3D Character - Femme positioned left side (smaller) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute -left-10 top-1/2 -translate-y-1/2 w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 opacity-20 pointer-events-none hidden md:block"
      >
        <Image
          src="/assets/3d/Femme 2/Femme(2)_pose(2).png"
          alt="Tennis player"
          width={350}
          height={350}
          className="object-contain"
        />
      </motion.div>

      <div ref={ref} className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-solid/20 via-rose-solid/20 to-aqua-solid/20 backdrop-blur-xl border border-white/10 p-12 md:p-16 text-center"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-solid/5 to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-solid/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-aqua-solid/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Prêt à moderniser votre{" "}
              <span className="text-gradient-orange">
                école de tennis ?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto"
            >
              Rejoignez les centaines de clubs qui ont déjà transformé leur
              gestion avec Devlup. Installation en 5 minutes, résultats
              immédiats.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col gap-6 items-center mb-8"
            >
              <Button
                size="lg"
                className="bg-orange-gradient hover:scale-105 transition-all shadow-xl shadow-orange-solid/30 text-white font-semibold text-lg px-8 group cursor-pointer"
              >
                Commencer l&apos;essai gratuit
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Store Badges */}
              <StoreButtons size="lg" className="justify-center" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/70"
            >
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Sans carte de crédit</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Installation en 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Support inclus</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
