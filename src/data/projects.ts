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
    title: "doc-pilot — AI Document Intelligence",
    description:
      "AI document-processing platform where a Claude vision model extracts structured data from messy receipts and invoices — per-field confidence routes uncertain values to a human review queue, corrections flow back into a field-level eval harness (99.4% accuracy, ~$0.01/doc, cost and latency tracked per document), all backed by a Postgres SKIP LOCKED job queue, 212 tests, CI, and a one-command Docker Compose stack.",
    tech: [
      "Python",
      "FastAPI",
      "Claude API",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
    ],
    github: "https://github.com/Antheagao/doc-pilot",
    videoBase: "/doc-pilot-demo",
    poster: "/doc-pilot-poster.jpg",
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
