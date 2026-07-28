import ProjectMedia from "./ProjectMedia";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
        My <span className="text-blue-400">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-700 hover:border-blue-400/30"
          >
            {/* Media */}
            <div className="h-48 relative">
              <ProjectMedia
                image={project.image}
                videoBase={project.videoBase}
                poster={project.poster}
                alt={`${project.title} screenshot`}
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-gray-900/10" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-100">
                {project.title}
              </h3>
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
