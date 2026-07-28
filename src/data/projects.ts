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

export const projects: Project[] = [
  {
    title: "To-Do App",
    description:
      "Production task manager deployed end to end on AWS (S3 + CloudFront, App Runner, RDS) — secure sign-in, CRUD tasks with due dates, urgency, filtering, and sorting in a dark-themed React UI.",
    tech: ["C#/.NET", "ASP.NET Core", "EF Core", "SQL Server", "React (Vite)", "Axios", "AWS"],
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
  {
    title: "Anime Rater",
    description:
      "Social rating app powered by an ETL pipeline ingesting anime, manga, and character data from the Jikan API — sign-in, like/dislike, comments, and top-favorites ranking in a responsive UI.",
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
    videoBase: "/character-demo",
    poster: "/character-poster.jpg",
  },
  {
    title: "Book Review App",
    description:
      "Book manager pairing a React UI with PostgreSQL-backed search and a real-time cover-art API.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/Antheagao/book-notes-app",
    image: "/book-notes-home.png",
  },
];
