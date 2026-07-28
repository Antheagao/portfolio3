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
      "Dark-themed task manager with secure sign-in, CRUD tasks, due dates/times, urgency, filtering & sorting. Deployed on AWS (S3 + CloudFront, App Runner, RDS).",
    tech: ["C#/.NET", "ASP.NET Core", "EF Core", "SQL Server", "React (Vite)", "Axios", "AWS"],
    github: "https://github.com/Antheagao/to-do-app",
    videoBase: "/todo-demo",
    poster: "/todo-poster.jpg",
  },
  {
    title: "Graph Search Visualizer",
    description:
      "Developed and deployed a full-stack pathfinding visualization platform using React and Python FastAPI, featuring an animated frontend and benchmarked backend (A*, Dijkstra, BFS, DFS, Bidirectional BFS).",
    tech: ["Python", "FastAPI", "JavaScript", "React", "Tailwind"],
    github: "https://github.com/Antheagao/graph-search-visual",
    videoBase: "/graph-demo",
    poster: "/graph-poster.jpg",
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
    videoBase: "/character-demo",
    poster: "/character-poster.jpg",
  },
  {
    title: "Book Review App",
    description:
      "Full-stack book manager with real-time cover API, PostgreSQL queries, and React UI.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/Antheagao/book-notes-app",
    image: "/book-notes-home.png",
  },
];
