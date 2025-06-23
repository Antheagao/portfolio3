import Image from "next/image";

const projects = [
  {
    title: "Book Review App",
    description: "Full-stack book manager with real-time cover API, PostgreSQL queries, and React UI.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/Antheagao/book-notes-app",
    demo: "",
    image: "/book-notes-home.png"
  },
  {
    title: "E-Commerce Store",
    description: "E-commerce platform with React frontend, Spring Boot backend & PostgreSQL. Features JWT auth, rate-limited APIs, and responsive UI.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL"],
    github: "https://github.com/Antheagao/ecommerce-app",
    demo: "",
    image: "/ecommerce-home.png"
  },
  {
    title: "Ai shipping containers",
    description: "A-star algorithm with weight heuristics reduced ship balance time 92%, boosted compliance to 94%, and automated manifests (75% fewer errors) via Pandas optimization.",
    tech: ["Python"],
    github: "https://github.com/Antheagao/Shipping_Container_Project",
    demo: "",
    image: "/ai-ship.png"
  }
];

export default function Projects() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
        My <span className="text-blue-400">Projects</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-700 hover:border-blue-400/30"
          >
            <div className="h-48 relative">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 2}
              />
              {/* Image overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-gray-900/10" />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-800 text-gray-200 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-4 bg-gray-900 hover:bg-gray-700 text-white text-center rounded transition"
                >
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-4 border border-gray-600 hover:bg-gray-700/50 text-gray-300 text-center rounded transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}