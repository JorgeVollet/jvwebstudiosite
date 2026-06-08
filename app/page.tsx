import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WelcomePopup from "@/components/WelcomePopup";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Differentials from "@/components/sections/Differentials";
import HorizontalProcess from "@/components/sections/HorizontalProcess";
import Marquee from "@/components/sections/Marquee";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import ArchivesGallery from "@/components/sections/ArchivesGallery";
import Coverage from "@/components/sections/Coverage";
import Testimonials from "@/components/sections/Testimonials";
import Pacotes from "@/components/sections/Pacotes";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <HorizontalProcess />
        <Marquee />
        <PortfolioGallery />
        <ArchivesGallery />
        <Coverage />
        <Testimonials />
        <Marquee
          reverse
          words={[
            "PERFORMANCE REAL", "CÓDIGO PRÓPRIO", "ENTREGA NO PRAZO",
            "DESIGN PREMIUM", "SUPORTE CONTÍNUO", "ESCALA DE VERDADE",
          ]}
        />
        <Pacotes />
        <Contact />
      </main>
      <Footer />
      <WelcomePopup />
    </>
  );
}
