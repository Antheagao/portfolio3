// components/Projects.tsx
import ProjectMedia from "./ProjectMedia";

const projects = [
  {
    title: "To-Do App",
    description:
      "Dark-themed task manager with secure sign-in, CRUD tasks, due dates/times, urgency, filtering & sorting. Deployed on AWS (S3 + CloudFront, App Runner, RDS).",
    tech: ["C#/.NET", "ASP.NET Core", "EF Core", "SQL Server", "React (Vite)", "Axios", "AWS"],
    github: "https://github.com/Antheagao/to-do-app",
    demo: "https://d1p7pk2h9bas4v.cloudfront.net",
    image: "/todo-demo.gif",
    videoBase: "/todo-demo",
  },
  {
    title: "Graph Search Visualizer",
    description:
      "Developed and deployed a full-stack pathfinding visualization platform using React and Python FastAPI, featuring an animated frontend and benchmarked backend (A*, Dijkstra, BFS, DFS, Bidirectional BFS).",
    tech: ["Python", "FastAPI", "JavaScript", "React", "Tailwind"],
    github: "https://github.com/Antheagao/graph-search-visual",
    demo: "https://graph-search-visual.vercel.app",
    image: "/graph-demo.gif",
    videoBase: "/graph-demo",
  },
  {
    title: "Anime Rater",
    description:
      "Full-stack web application where users can sign in, like/dislike, and comment on anime, manga, and characters. Features an ETL pipeline from the Jikan API, responsive UI, and top favorites ranking.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Fastify",
      "Node.js",
      "Prisma",
      "PostgreSQL (Supabase)",
    ],
    github: "https://github.com/Antheagao/character-rater",
    demo: "https://character-rater.vercel.app",
    image: "/character-demo.gif",
    videoBase: "/character-demo",
  },
  {
    title: "Book Review App",
    description:
      "Full-stack book manager with real-time cover API, PostgreSQL queries, and React UI.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/Antheagao/book-notes-app",
    demo: "",
    image: "/book-notes-home.png",
  },
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
            key={project.title}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-700 hover:border-blue-400/30"
          >
            {/* Media */}
            <div className="h-48 relative">
              <ProjectMedia
                image={project.image}
                videoBase={project.videoBase}
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
