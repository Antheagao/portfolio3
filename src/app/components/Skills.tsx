// src/app/components/Skills.tsx
import { FaJava, FaServer, FaAws, FaDatabase } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import {
  SiTypescript, SiJavascript, SiPython, SiCplusplus,
  SiPostgresql, SiSupabase, SiHtml5, SiCss3, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiFastify, SiFastapi, SiPrisma,
  SiPytorch, SiJest, SiGit, SiDocker, SiLinux, SiTailwindcss,
  SiDotnet, SiSwagger, SiVite, SiGithubactions
} from 'react-icons/si';

type Skill = { name: string; icon: React.ReactNode };
type Category = { name: string; color: string; skills: Skill[] };

function SkillChip({ icon, name }: Skill) {
  return (
    <div
      className="
        bg-white dark:bg-gray-800 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700
        flex items-center gap-2 min-h-[46px] min-w-0
      "
    >
      <span className="text-lg shrink-0">{icon}</span>
      <span className="text-[13px] leading-tight break-words whitespace-normal">{name}</span>
    </div>
  );
}

const skillsByCategory: Category[] = [
  {
    name: 'Languages',
    color: 'bg-blue-50 dark:bg-blue-900/20',
    skills: [
      { name: 'C#', icon: <TbBrandCSharp className="text-green-500" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
      { name: 'Java', icon: <FaJava className="text-red-500" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'Python', icon: <SiPython className="text-blue-400" /> },
      { name: 'C++', icon: <SiCplusplus className="text-blue-700" /> },
    ],
  },
  {
    name: 'Frontend',
    color: 'bg-purple-50 dark:bg-purple-900/20',
    skills: [
      { name: 'React', icon: <SiReact className="text-cyan-500" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: 'Vite', icon: <SiVite className="text-purple-500" /> },
      { name: 'Axios', icon: <span className="text-sm font-semibold">Axios</span> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-500" /> },
      { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
    ],
  },
  {
    name: 'Backend / Database',
    color: 'bg-green-50 dark:bg-green-900/20',
    skills: [
      { name: 'ASP.NET Core', icon: <SiDotnet className="text-indigo-500" /> },
      { name: 'EF Core', icon: <span className="text-sm font-semibold">EF&nbsp;Core</span> },
      { name: 'Identity (JWT)', icon: <span className="text-sm font-semibold">Identity/JWT</span> },
      { name: 'SQL Server', icon: <FaDatabase className="text-red-600" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-800" /> },
      { name: 'Supabase', icon: <SiSupabase className="text-green-500" /> },
      { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
      { name: 'Fastify', icon: <SiFastify className="text-teal-600" /> },
      { name: 'Express', icon: <SiExpress className="text-gray-800 dark:text-gray-200" /> },
      { name: 'FastAPI', icon: <SiFastapi className="text-teal-500" /> },
      { name: 'Prisma', icon: <SiPrisma className="text-indigo-600" /> },
      { name: 'Swagger / OpenAPI', icon: <SiSwagger className="text-green-600" /> },
    ],
  },
  {
    name: 'Cloud / DevOps',
    color: 'bg-orange-50 dark:bg-orange-900/20',
    skills: [
      { name: 'AWS', icon: <FaAws className="text-orange-400" /> },
      { name: 'S3 · CloudFront', icon: <span className="text-sm font-semibold">S3·CloudFront</span> },
      { name: 'App Runner / ECR', icon: <span className="text-sm font-semibold">AppRunner/ECR</span> },
      { name: 'RDS (SQL Server)', icon: <span className="text-sm font-semibold">RDS</span> },
      { name: 'VPC / SG', icon: <span className="text-sm font-semibold">VPC/SG</span> },
      { name: 'CloudWatch', icon: <span className="text-sm font-semibold">CloudWatch</span> },
      { name: 'GitHub Actions', icon: <SiGithubactions className="text-blue-500" /> },
      { name: 'Docker', icon: <SiDocker className="text-blue-500" /> },
      { name: 'Git', icon: <SiGit className="text-orange-600" /> },
      { name: 'Linux', icon: <SiLinux className="text-yellow-600" /> },
      { name: 'CI/CD', icon: <FaServer className="text-gray-600" /> },
    ],
  },
  {
    name: 'Testing / AI',
    color: 'bg-red-50 dark:bg-red-900/20',
    skills: [
      { name: 'Jest', icon: <SiJest className="text-red-800" /> },
      { name: 'PyTorch', icon: <SiPytorch className="text-red-500" /> },
    ],
  },
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

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 [grid-auto-rows:minmax(46px,auto)]">
              {category.skills.map((skill) => (
                <SkillChip key={skill.name} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
