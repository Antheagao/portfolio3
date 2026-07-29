import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
        My <span className="text-blue-400">Experience</span>
      </h2>

      <div className="space-y-6">
        {experience.map((job) => (
          <div
            key={`${job.role}-${job.company}`}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className="text-xl font-semibold text-gray-100">{job.role}</h3>
              <span className="text-sm text-gray-400 shrink-0">{job.period}</span>
            </div>

            <p className="text-blue-400 font-medium mb-4">
              {job.company} <span className="text-gray-500">· {job.location}</span>
            </p>

            <ul className="space-y-2">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start text-gray-300">
                  <span className="mr-2 mt-1 text-blue-400">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
