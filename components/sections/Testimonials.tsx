"use client";

import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    const intervalId = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [api]);

  const testimonials = [
    {
      name: "Frédéric S.",
      role: "Enseignant",
      club: "",
      avatar: "/assets/testimonials/466339851_10160532353753193_6834438726367224855_n-150.webp",
      content:
        "C'est vraiment top. Les parents sont rassurés. Les élèves sont motivés et ça m'aide beaucoup dans ma programmation",
      rating: 5,
    },
    {
      name: "Lionel T.",
      role: "Directeur sportif",
      club: "",
      avatar: "/assets/testimonials/516646065_10233932923176706_6816134332292056157_n-150.webp",
      content:
        "Depuis que j'utilise Devlup, j'ai l'impression de faire mon travail beaucoup mieux et je gagne énormément de temps",
      rating: 5,
    },
    {
      name: "Eric B.",
      role: "Président",
      club: "Tennis Club de l'Olympique",
      avatar: "/assets/testimonials/461077400_3942392099416943_5177847284747638793_n-150.webp",
      content:
        "Les élèves et les parents sont très satisfaits. Je pense que cela va fortement aider à la fidélisation",
      rating: 5,
    },
    {
      name: "Kevin C.",
      role: "Enseignant",
      club: "TCMD",
      avatar: "/assets/testimonials/541470235_10233981173405735_4628860775388669091_n-150.webp",
      content:
        "Très facile à prendre en main. Devlup va redonner un coup de boost à mon école de tennis",
      rating: 5,
    },
  ];

  return (
    <Section className="bg-bg-dark relative overflow-hidden" id="temoignages">
      {/* 3D Character accent - Small on left */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-10 left-5 w-48 h-48 md:w-64 md:h-64 opacity-15 pointer-events-none hidden lg:block"
      >
        <Image
          src="/assets/3d/Homme 2/Homme(2)_pose(2).png"
          alt="Happy coach"
          width={300}
          height={300}
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
            Ils ont choisi{" "}
            <span className="text-gradient-orange">Devlup</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Des centaines de clubs de tennis nous font confiance pour
            moderniser leur enseignement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="p-8 bg-card/50 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all h-full">
                      <div className="flex flex-col h-full">
                        {/* Quote icon */}
                        <Quote className="w-10 h-10 text-orange-solid mb-4 opacity-50" />

                        {/* Rating */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5"
                              fill={i < testimonial.rating ? "#FF6A00" : "transparent"}
                              stroke={i < testimonial.rating ? "#FF6A00" : "rgba(254, 252, 255, 0.3)"}
                            />
                          ))}
                        </div>

                        {/* Content */}
                        <p className="text-foreground/80 mb-6 flex-grow italic">
                          &ldquo;{testimonial.content}&rdquo;
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-solid/20 to-aqua-solid/20 flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full relative">
                              <div className="absolute inset-0 bg-fg-dark/50" />
                              <Image
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                width={150}
                                height={150}
                                quality={95}
                                className="object-cover scale-150 translate-y-2"
                              />
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold text-white">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-foreground/60">
                              {testimonial.role}
                            </p>
                            <p className="text-sm text-orange-solid">
                              {testimonial.club}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-card/80 border-white/20 hover:bg-orange-solid/20 hover:border-orange-solid/50" />
            <CarouselNext className="hidden md:flex -right-12 bg-card/80 border-white/20 hover:bg-orange-solid/20 hover:border-orange-solid/50" />
          </Carousel>
        </motion.div>

        {/* Partners Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20"
        >
          <p className="text-center text-foreground/60 mb-10 text-sm uppercase tracking-wider">
            Ils nous font confiance
          </p>
          <div className="relative overflow-hidden py-4">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />

            {/* Scrolling content */}
            <div className="flex gap-10 animate-marquee">
              {/* First set */}
              <div className="flex items-center gap-10 shrink-0">
                {[
                  { src: "/assets/partners/tco.webp", alt: "Tennis Club de l'Olympique" },
                  { src: "/assets/partners/koumac.webp", alt: "Tennis Club de Koumac" },
                  { src: "/assets/partners/lnc.webp", alt: "Les Nouvelles Calédoniennes" },
                  { src: "/assets/partners/fsltp.webp", alt: "FSLTP" },
                  { src: "/assets/partners/tcrn.webp", alt: "Tennis Club Riviera Nord" },
                  { src: "/assets/partners/a.webp", alt: "Partenaire" },
                ].map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center px-4 py-4 rounded-xl bg-white border border-white/10 min-w-[240px] h-28 transition-transform hover:scale-105"
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={280}
                      height={120}
                      quality={90}
                      className="object-contain w-[200px] h-[85px] opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-10 shrink-0" aria-hidden="true">
                {[
                  { src: "/assets/partners/tco.webp", alt: "Tennis Club de l'Olympique" },
                  { src: "/assets/partners/koumac.webp", alt: "Tennis Club de Koumac" },
                  { src: "/assets/partners/lnc.webp", alt: "Les Nouvelles Calédoniennes" },
                  { src: "/assets/partners/fsltp.webp", alt: "FSLTP" },
                  { src: "/assets/partners/tcrn.webp", alt: "Tennis Club Riviera Nord" },
                  { src: "/assets/partners/a.webp", alt: "Partenaire" },
                ].map((partner, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="flex items-center justify-center px-4 py-4 rounded-xl bg-white border border-white/10 min-w-[240px] h-28 transition-transform hover:scale-105"
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={280}
                      height={120}
                      quality={90}
                      className="object-contain w-[200px] h-[85px] opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
