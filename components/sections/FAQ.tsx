"use client";

import { Section } from "@/components/layout/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "Est-ce facile à mettre en place ?",
      answer:
        "Très facile, les enseignants peuvent commencer en quelques clics. L'intégration des familles se fait avec un simple email.",
    },
    {
      question: "L'application fonctionne-t-elle partout ?",
      answer:
        "Oui, Devlup est accessible sur ordinateur, tablette et smartphone (IOS & Android).",
    },
    {
      question: "Est-ce payant pour les parents et les élèves ?",
      answer:
        "Non, les espaces parents et élèves sont 100% gratuits.",
    },
    {
      question: "Les parents et les enfants doivent-ils télécharger l'application ?",
      answer:
        "L'application est disponible en version mobile et web. Vous pouvez l'utiliser sans la télécharger sur devlup.app",
    },
    {
      question: "Que se passe-t-il après la période d'essai ?",
      answer:
        "Les fonctionnalités sont limitées mais vous gardez toutes vos données jusqu'à ce que vous décidiez de passer à l'abonnement mensuel ou annuel.",
    },
    {
      question: "Les données sont-elles sécurisées ?",
      answer:
        "Totalement, les données sont hébergées en Europe dans le respect des règles RGPD.",
    },
    {
      question: "Puis-je intégrer un nombre d'élèves illimité ?",
      answer:
        "L'abonnement se limite à 300 élèves mais pour les grosses structures vous pouvez ajouter des élèves supplémentaires par tranche de 10 élèves pour un tarif de 9,50 € à l'année (soit 0,80 € / an pour 10 élèves supplémentaires).",
    },
  ];

  return (
    <Section className="bg-bg-dark relative overflow-hidden" id="faq">
      {/* 3D Character - Small accent bottom right (visible on tablet) */}
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={inView ? { opacity: 1, rotate: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-0 right-5 md:right-10 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 opacity-12 md:opacity-15 pointer-events-none hidden md:block"
      >
        <Image
          src="/assets/3d/Homme 1/Homme(1)_pose(1).png"
          alt="Tennis player thinking"
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
            Questions{" "}
            <span className="text-gradient-orange">
              fréquentes
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur Devlup. Vous ne trouvez pas la
            réponse ? Contactez-nous !
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-lg border border-white/10 rounded-xl px-6 hover:border-white/20 transition-all"
              >
                <AccordionTrigger className="text-left text-white hover:text-orange-solid transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </Section>
  );
}
