"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Aurora } from "@/components/ui/Aurora";
import { StoreButtons } from "@/components/ui/StoreButtons";
import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Users, Star } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-bg-dark">
      {/* Animated Aurora Background */}
      <div className="absolute inset-0">
        <Aurora
          colorStops={["#FF6A00", "#87CEFA", "#E100FF"]}
          blend={1.0}
          amplitude={1.0}
          speed={3.2}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <Badge className="bg-orange-glass-light border-orange-solid/30 text-white px-4 py-2 text-sm">
                🎾 La meilleure expérience de suivi pédagogique
              </Badge>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Modernisez votre{" "}
              <span className="text-gradient-orange">
                école de tennis
              </span>{" "}
              avec le suivi digital
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Simplifiez votre enseignement, engagez vos élèves et fidélisez
              les parents avec la solution de gestion complète pour écoles de
              tennis.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-6 mb-12"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="relative overflow-hidden bg-gradient-to-r from-orange-solid via-rose-solid to-orange-light hover:scale-110 transition-all duration-300 shadow-2xl shadow-orange-solid/50 text-white font-bold text-lg px-10 py-7 group border-2 border-orange-light/50 hover:border-orange-light hover:shadow-rose-solid/50"
                >
                  <span className="relative z-10 flex items-center text-xl">
                    Essayer gratuitement 1 mois
                    <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
                  </span>
                  {/* Animated glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </Button>
              </div>

              {/* Store Badges */}
              <StoreButtons size="lg" className="justify-center lg:justify-start" />
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Users className="w-5 h-5 text-orange-solid" />
                  <p className="text-2xl font-bold text-white">500+</p>
                </div>
                <p className="text-sm text-foreground/60">Clubs partenaires</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-aqua-solid" />
                  <p className="text-2xl font-bold text-white">10K+</p>
                </div>
                <p className="text-sm text-foreground/60">Élèves actifs</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Star className="w-5 h-5 text-rose-solid" />
                  <p className="text-2xl font-bold text-white">98%</p>
                </div>
                <p className="text-sm text-foreground/60">Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* 3D Character with glassmorphism background */}
              <div className="relative w-full aspect-square">
                <div
                  className="absolute inset-0 rounded-3xl backdrop-blur-xl border border-white/10 flex items-end justify-center overflow-hidden"
                  style={{
                    background: 'linear-gradient(45deg, #1B112C 30%, #1B112C 55%)'
                  }}
                >
                  <Image
                    src="/assets/screenshots/captures-devlup--5--1pw1jn-750.webp"
                    alt="Devlup App"
                    width={600}
                    height={600}
                    className="object-contain scale-110"
                    priority
                  />
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 bg-card/80 backdrop-blur-lg border border-white/10 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-gradient flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60">Progression</p>
                    <p className="text-sm font-semibold text-white">+127%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-6 bg-card/80 backdrop-blur-lg border border-white/10 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-aqua-gradient flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60">
                      Engagement parents
                    </p>
                    <p className="text-sm font-semibold text-white">94%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient separator */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-fg-dark to-transparent" />
    </div>
  );
}
