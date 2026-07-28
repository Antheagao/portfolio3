import { FaJava, FaServer, FaAws, FaDatabase } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiPostgresql,
  SiSupabase,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFastify,
  SiFastapi,
  SiPrisma,
  SiPytorch,
  SiJest,
  SiGit,
  SiDocker,
  SiLinux,
  SiTailwindcss,
  SiDotnet,
  SiSwagger,
  SiVite,
  SiGithubactions,
  SiAxios,
} from "react-icons/si";

export type Skill = { name: string; icon?: React.ReactNode };
export type SkillCategory = { name: string; color: string; skills: Skill[] };

export const skillsByCategory: SkillCategory[] = [
  {
    name: "Languages",
    color: "bg-blue-900/20",
    skills: [
      { name: "C#", icon: <TbBrandCSharp className="text-green-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Python", icon: <SiPython className="text-blue-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
    ],
  },
  {
    name: "Frontend",
    color: "bg-purple-900/20",
    skills: [
      { name: "React", icon: <SiReact className="text-cyan-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      { name: "Axios", icon: <SiAxios className="text-sky-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
    ],
  },
  {
    name: "Backend / Database",
    color: "bg-green-900/20",
    skills: [
      { name: "ASP.NET Core", icon: <SiDotnet className="text-indigo-400" /> },
      { name: "Entity Framework Core" }, // text-only
      { name: "ASP.NET Identity (JWT)" }, // text-only
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
    color: "bg-orange-900/20",
    skills: [
      { name: "AWS", icon: <FaAws className="text-orange-400" /> },
      { name: "S3" },         // text-only
      { name: "CloudFront" }, // text-only
      { name: "App Runner" }, // text-only
      { name: "ECR" },        // text-only
      { name: "RDS" },        // text-only
      { name: "VPC" },        // text-only
      { name: "CloudWatch" }, // text-only
      { name: "GitHub Actions", icon: <SiGithubactions className="text-blue-500" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "Linux", icon: <SiLinux className="text-yellow-500" /> },
      { name: "CI/CD", icon: <FaServer className="text-gray-400" /> },
    ],
  },
  {
    name: "Testing / AI",
    color: "bg-red-900/20",
    skills: [
      { name: "Jest", icon: <SiJest className="text-red-400" /> },
      { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
    ],
  },
];
