import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import NavMenu from "@/components/navMenu/NavMenu";
import Skills from "@/components/skills/Skills";
import Stats from "@/components/stats/Stats";

export default function Home() {
  return (
    <>
      <div id="container">
        <NavMenu />
        <div id="contentsContainer" className="xl:pl-[300px] w-full">
          <Hero />
          <About />
          <Stats />
          <Skills />
        </div>
      </div>
    </>
  );
}
