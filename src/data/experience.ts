export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "AI Engineer",
    company: "GreenGrowth CPAs",
    location: "Irvine, CA",
    period: "May 2026 – Present",
    bullets: [
      "Own design and development of an AI-powered financial and tax processing system in Rust and Python on AWS — implementing AI for payments workflows, building REST APIs and data pipelines, and shipping production backend services end to end.",
      "Build automation workflows and third-party integrations, collaborating directly with leadership in a fast-moving environment.",
    ],
  },
  {
    role: "Teaching Assistant (Software Development)",
    company: "University of California, Riverside",
    location: "Riverside, CA",
    period: "Mar 2023 – Dec 2023",
    bullets: [
      "Directed discussions and labs for 200+ students on software development in C++, Java, and Python — covering OOP, design patterns, data structures, algorithms, and the full SDLC.",
      "Led instruction on Agile/Scrum, Git workflows, debugging, and unit testing; mentored teaching assistants and reinforced production-quality code standards in code reviews.",
    ],
  },
];
