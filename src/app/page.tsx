import Image from "next/image";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import DiscordButton from "./components/DiscordButton";
import Availability from "./components/Availability";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Dark Gradient */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950">
        {/* Optional subtle texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/50 to-gray-950/90 -z-10" />
        
        {/* Content */}
        <div className="max-w-3xl mx-auto">
          {/* Avatar/Logo */}
          <div className="mx-auto mb-8 w-32 h-32 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg">
            <Image
              src="/herta-pic.png"
              alt="Anthony Mendez"
              width={128}
              height={128}
              className="object-cover"
              priority
            />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-bold leading-snug bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-3">
            Anthony Mendez
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full-Stack Developer | Software Engineer
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-md">
              View My Work
            </a>
            <a href="mailto:anthonymendez.dev@gmail.com" className="px-6 py-3 border border-gray-700 hover:bg-gray-800/50 text-gray-300 rounded-lg transition-colors">
              Contact Me
            </a>
              <DiscordButton />
          </div> 
        </div>

        {/* Scroll Down Arrow */}
        <a 
          href="#projects" 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll to projects"
        >
          <svg 
            className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </section>

      {/* Availability */}
      <Availability />

      {/* Rest of sections */}
      <Projects />
      <Skills />
      <About />
    </main>
  );
}
