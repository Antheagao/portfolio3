import { FaJava, FaAws, FaDatabase } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiPostgresql,
  SiSupabase,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFastify,
  SiFastapi,
  SiPrisma,
  SiPytorch,
  SiRust,
  SiJest,
  SiDocker,
  SiLinux,
  SiTailwindcss,
  SiDotnet,
  SiSwagger,
  SiGithubactions,
} from "react-icons/si";

export type Skill = {
  name: string;
  icon?: React.ReactNode;
  /** Span the full row — for chips whose label needs the width. */
  wide?: boolean;
};
export type SkillCategory = { name: string; skills: Skill[] };

export const skillsByCategory: SkillCategory[] = [
  {
    name: "Languages & ML",
    skills: [
      { name: "C#", icon: <TbBrandCSharp className="text-green-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Python", icon: <SiPython className="text-blue-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "Rust", icon: <SiRust className="text-orange-500" /> },
      { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: <SiReact className="text-cyan-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" /> },
      { name: "Jest", icon: <SiJest className="text-red-400" /> },
    ],
  },
  {
    name: "Backend / Database",
    skills: [
      { name: "ASP.NET Core", icon: <SiDotnet className="text-indigo-400" /> },
      { name: "Entity Framework Core" }, // text-only
      { name: "SQL Server", icon: <FaDatabase className="text-red-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Fastify", icon: <SiFastify className="text-teal-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-200" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-teal-500" /> },
      { name: "Prisma", icon: <SiPrisma className="text-indigo-400" /> },
      { name: "Swagger / OpenAPI", icon: <SiSwagger className="text-green-500" /> },
    ],
  },
  {
    name: "Cloud / DevOps",
    skills: [
      {
        name: "AWS (S3 · CloudFront · App Runner · RDS)",
        icon: <FaAws className="text-orange-400" />,
        wide: true,
      },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-blue-500" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
      { name: "Linux", icon: <SiLinux className="text-yellow-500" /> },
    ],
  },
];
