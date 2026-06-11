import AboutPreview from "@/components/sections/AboutPreview";
import Clients from "@/components/sections/Clients";
import CtaBanner from "@/components/sections/CtaBanner";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Stats />
      <ServicesGrid />
      <AboutPreview />
      <Process />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
