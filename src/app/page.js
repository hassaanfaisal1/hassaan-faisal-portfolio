import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import AITools from "@/components/AITools";
import FeaturedWork from "@/components/FeaturedWork";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Services />
      <AITools />
      <FeaturedWork />
      <Contact />
    </>
  );
}
