import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Devlup",
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "19",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "19",
        priceCurrency: "EUR",
        billingDuration: "P1M",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "500",
    },
    description:
      "Simplifiez votre enseignement, engagez vos élèves et fidélisez les parents avec la solution de gestion complète pour écoles de tennis.",
    featureList: [
      "Carnets de compétences personnalisables",
      "Évaluations individuelles et collectives",
      "Notifications temps réel",
      "Passage de niveaux gamifié",
      "Espaces dédiés parents et élèves",
      "Gestion multi-enseignants",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-bg-dark">
        <Header />
        <main>
          <Hero />
          <ProblemSolution />
          <Features />
          <Pricing />
          <Testimonials />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
