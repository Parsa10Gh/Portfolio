"use client"
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import NavMenu from "@/components/navMenu/NavMenu";
import Portfolio from "@/components/portfolio/Portfolio";
import Resume from "@/components/resume/Resume";
import Services from "@/components/services/Services";
import Skills from "@/components/skills/Skills";
import Stats from "@/components/stats/Stats";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <div id="container">
        <NavMenu />
        <div id="contentsContainer" className="xl:pl-[300px] w-full overflow-hidden">
          <Hero />
          <About />
          <Stats />
          <Skills />
          <Resume />
          <Portfolio />
          <Services />
          <Testimonials />
          <Contact/>
        </div>
      </div>
    </>
  );
}
