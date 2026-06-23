import { ChatWidget } from "@/components/ChatWidget";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Benefits } from "@/components/sections/Benefits";
import { Blog } from "@/components/sections/Blog";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Products } from "@/components/sections/Products";
import { Sectors } from "@/components/sections/Sectors";
import { SavingsCalculator } from "@/components/sections/SavingsCalculator";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <SavingsCalculator />
        <Products />
        <Sectors />
        <Process />
        <Testimonials />
        <Blog />
        <CtaFinal />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
