import { skillsByCategory } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
        My <span className="text-blue-400">Skills</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsByCategory.map((category) => (
          <div
            key={category.name}
            className={`${category.color} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow`}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-100">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              {category.name}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-gray-800 p-3 rounded-lg border border-gray-700
                             flex items-center gap-2 hover:scale-[1.02] transition-transform"
                >
                  {skill.icon && <span className="text-xl shrink-0">{skill.icon}</span>}
                  <span className="text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis text-gray-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
