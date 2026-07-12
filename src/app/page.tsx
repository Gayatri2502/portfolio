import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpaceScene from "@/components/SpaceScene";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-black text-white">
      <SpaceScene />
      <div className="relative z-10">
        <Navbar />
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          <Hero />
          <About />
          <Services />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}
