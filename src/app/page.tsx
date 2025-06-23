import Image from "next/image";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Optional background (gradient/texture) */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-gray-100/10 -z-10" />
        
        {/* Content */}
        <div className="max-w-3xl mx-auto">
          {/* Avatar/Logo */}
          <div className="mx-auto mb-8 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
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
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400 mb-4">
            Anthony Mendez
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full-Stack Developer | Software Engineer
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              View My Work
            </a>
            <a
              href="mailto:anthonymendez.dev@gmail.com"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div> 


        {/* Scroll Down Arrow */}
        <a 
          href="#projects" 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll to projects"
        >
          <svg 
            className="w-6 h-6 text-gray-400 hover:text-blue-500 transition-colors" 
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


      {/* Projects Section */}
      <Projects/>


      {/* Skills Section */}
      <Skills />

      {/* About Section */}
      <About />

    </main>
  );
}
