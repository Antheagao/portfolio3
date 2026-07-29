export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  /** Static screenshot, used when no video is available. */
  image?: string;
  /** Base path of a video pair (`<base>.webm` / `<base>.mp4`). */
  videoBase?: string;
  /** Poster frame shown while the video loads. */
  poster?: string;
};

// Ordered by impressiveness — strongest card first.
export const projects: Project[] = [
  {
    title: "Anime Rater",
    description:
      "Production social rating app whose ETL pipelines process 100k+ records with idempotent upserts — Next.js frontend, Fastify REST API, index-optimized PostgreSQL, RBAC auth, and Claude API-powered automation, deployed with Docker and GitHub Actions CI/CD.",
    tech: [
      "Next.js",
      "TypeScript",
      "Fastify",
      "PostgreSQL",
      "Prisma",
      "Claude API",
      "Docker",
    ],
    github: "https://github.com/Antheagao/character-rater",
    videoBase: "/character-demo",
    poster: "/character-poster.jpg",
  },
  {
    title: "To-Do App",
    description:
      "Production task manager deployed end to end on AWS (S3 + CloudFront, App Runner, RDS) — secure sign-in, CRUD tasks with due dates, urgency, filtering, and sorting in a dark-themed React UI.",
    tech: ["C#/.NET", "ASP.NET Core", "EF Core", "SQL Server", "React", "AWS"],
    github: "https://github.com/Antheagao/to-do-app",
    videoBase: "/todo-demo",
    poster: "/todo-poster.jpg",
  },
  {
    title: "Graph Search Visualizer",
    description:
      "Interactive platform that animates and benchmarks five pathfinding algorithms (A*, Dijkstra, BFS, DFS, Bidirectional BFS), pairing an animated React frontend with a Python FastAPI backend.",
    tech: ["Python", "FastAPI", "JavaScript", "React", "Tailwind"],
    github: "https://github.com/Antheagao/graph-search-visual",
    videoBase: "/graph-demo",
    poster: "/graph-poster.jpg",
  },
];
