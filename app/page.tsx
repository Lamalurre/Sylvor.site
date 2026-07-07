import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import ProductShowcase from "@/components/ProductShowcase";
import WhatWeBuild from "@/components/WhatWeBuild";
import Benefits from "@/components/Benefits";
import WhoItsFor from "@/components/WhoItsFor";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import DiveInCta from "@/components/DiveInCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <ProductShowcase />
        <WhatWeBuild />
        <Benefits />
        <WhoItsFor />
        <Pricing />
        <DiveInCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
