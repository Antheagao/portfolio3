import { FaJava, FaServer, FaAws, FaDatabase } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import {
  SiTypescript, SiJavascript, SiPython, SiCplusplus,
  SiPostgresql, SiSupabase, SiHtml5, SiCss3, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiFastify, SiFastapi, SiPrisma,
  SiPytorch, SiJest, SiGit, SiDocker, SiLinux, SiTailwindcss,
  SiDotnet, SiSwagger, SiVite, SiGithubactions
} from 'react-icons/si';

const skillsByCategory = [
  {
    name: "Languages",
    skills: [
      { name: "C#", icon: <TbBrandCSharp className="text-green-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Python", icon: <SiPython className="text-blue-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-700" /> }
    ],
    color: "bg-blue-50 dark:bg-blue-900/20"
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: <SiReact className="text-cyan-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      { name: "Axios", icon: <span className="text-sm font-semibold">Axios</span> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> }
    ],
    color: "bg-purple-50 dark:bg-purple-900/20"
  },
  {
    name: "Backend / Database",
    skills: [
      { name: "ASP.NET Core", icon: <SiDotnet className="text-indigo-500" /> },
      { name: "Entity Framework Core", icon: <span className="text-sm font-semibold">EF Core</span> },
      { name: "ASP.NET Identity (JWT)", icon: <span className="text-sm font-semibold">Identity/JWT</span> },
      { name: "SQL Server", icon: <FaDatabase className="text-red-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { name: "Fastify", icon: <SiFastify className="text-teal-600" /> },
      { name: "Express", icon: <SiExpress className="text-gray-800 dark:text-gray-200" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-teal-500" /> },
      { name: "Prisma", icon: <SiPrisma className="text-indigo-600" /> },
      { name: "Swagger / OpenAPI", icon: <SiSwagger className="text-green-600" /> }
    ],
    color: "bg-green-50 dark:bg-green-900/20"
  },
  {
    name: "Cloud / DevOps",
    skills: [
      { name: "AWS", icon: <FaAws className="text-orange-400" /> },
      { name: "S3, CloudFront", icon: <span className="text-sm font-semibold">S3/CloudFront</span> },
      { name: "App Runner, ECR", icon: <span className="text-sm font-semibold">App Runner/ECR</span> },
      { name: "RDS (SQL Server)", icon: <span className="text-sm font-semibold">RDS</span> },
      { name: "VPC / Security Groups", icon: <span className="text-sm font-semibold">VPC/SG</span> },
      { name: "CloudWatch", icon: <span className="text-sm font-semibold">CloudWatch</span> },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-blue-500" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "Linux", icon: <SiLinux className="text-yellow-600" /> },
      { name: "CI/CD", icon: <FaServer className="text-gray-600" /> }
    ],
    color: "bg-orange-50 dark:bg-orange-900/20"
  },
  {
    name: "Testing / AI",
    skills: [
      { name: "Jest", icon: <SiJest className="text-red-800" /> },
      { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> }
    ],
    color: "bg-red-50 dark:bg-red-900/20"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        My <span className="text-blue-500">Skills</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsByCategory.map((category) => (
          <div
            key={category.name}
            className={`${category.color} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow`}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              {category.name}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700
                             flex items-center gap-2 hover:scale-[1.02] transition-transform"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
