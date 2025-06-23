import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 px-4 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Text Content */}
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-6">
            About <span className="text-blue-500">Me</span>
          </h2>
          
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              I'm a <span className="font-semibold">Full-Stack Developer</span> with a passion for 
              building efficient, user-centric applications.
            </p>
            
            <p>
              Recently graduated with a <span className="font-semibold">Master of Science in Computer Science</span>, 
              I've developed projects that focus on optimizations and full stack web applications.
            </p>
            
            <p>
              When I'm not coding, you'll find me playing video games, going to the gym, and watching anime.
            </p>
          </div>

          {/* Education */}
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h3 className="font-semibold mb-2">Education</h3>
            <p>M.S. Computer Science - University of California, Riverside (2024)</p>
            
            <br/>
            <p>B.S. Computer Science - University of California, Riverside (2023)</p>
            
            <br />
            <p>A.S. Computer Science - Riverside City College (2021)</p>
            
          </div>

          {/* Certifications - NEW SECTION */}
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="font-semibold mb-3">Certifications</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <div>
                  <p className="font-medium">Full Stack Web Developer</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Udemy (2025)</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <div>
                  <p className="font-medium">CompTIA Security+</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CompTia (2025)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/herta-pic.png"
              alt="Anthony Mendez"
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