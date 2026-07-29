import Hero from "./components/Hero";
import Availability from "./components/Availability";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";

export default function Home() {
  return (
    <main id="top" className="min-h-screen">
      <Hero />
      <Availability />
      <Experience />
      <Projects />
      <Skills />
      <About />
    </main>
  );
}
