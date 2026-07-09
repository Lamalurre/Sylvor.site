import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import CostComparison from "@/components/CostComparison";
import ProductShowcase from "@/components/ProductShowcase";
import ROICalculator from "@/components/ROICalculator";
import Industries from "@/components/Industries";
import WhatWeBuild from "@/components/WhatWeBuild";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import PlanRecommender from "@/components/PlanRecommender";
import Faq from "@/components/Faq";
import DiveInCta from "@/components/DiveInCta";
import OnboardingWizard from "@/components/OnboardingWizard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <CostComparison />
        <ProductShowcase />
        <section className="px-6 py-24">
          <ROICalculator />
        </section>
        <Industries />
        <WhatWeBuild />
        <Benefits />
        <Pricing />
        <section className="px-6 pb-24">
          <PlanRecommender />
        </section>
        <Faq />
        <DiveInCta />
        <OnboardingWizard />
      </main>
      <Footer />
    </>
  );
}
