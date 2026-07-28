import Image from "next/image";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="py-16 px-4 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Text Content */}
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-6 text-gray-100">
            About <span className="text-blue-400">Me</span>
          </h2>

          <div className="space-y-4 text-gray-300">
            <p>
              I&rsquo;m a <span className="font-semibold">Software Engineer</span> with a passion for
              building efficient, user-centric applications.
            </p>

            <p>
              I hold a <span className="font-semibold">Master of Science in Computer Science</span> from
              UC Riverside, and since graduating I&rsquo;ve been designing, building, and deploying
              full-stack applications end to end — from AWS-hosted production apps to algorithm
              visualization platforms.
            </p>

            <p>
              When I&rsquo;m not coding, you&rsquo;ll find me playing video games, going to the gym, and watching anime.
            </p>
          </div>

          {/* Education */}
          <div className="mt-8 p-4 bg-blue-900/20 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-100">Education</h3>
            <div className="space-y-3 text-gray-300">
              <p>M.S. Computer Science - University of California, Riverside (2024)</p>
              <p>B.S. Computer Science - University of California, Riverside (2023)</p>
              <p>A.S. Computer Science - Riverside City College (2021)</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-6 p-4 bg-blue-900/20 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-100">Certifications</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <div>
                  <p className="font-medium">Full Stack Web Developer Bootcamp</p>
                  <p className="text-sm text-gray-400">Udemy (Jan 2025)</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <div>
                  <p className="font-medium">CompTIA Security+</p>
                  <p className="text-sm text-gray-400">CompTIA (Aug 2025)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg">
            <Image
              src="/herta-pic.png"
              alt={site.name}
              fill
              className="object-cover"
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
