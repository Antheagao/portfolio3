import { site } from "@/data/site";

const pageLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

const externalLinks = [
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "GitHub", href: site.links.github },
  { label: "Resume", href: site.links.resume },
  { label: "MyAnimeList", href: site.links.myAnimeList },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur p-4 md:px-6">
      <nav className="flex justify-between items-center gap-4 max-w-4xl mx-auto">
        <a href="#top" className="font-semibold text-gray-100 hover:text-white whitespace-nowrap">
          {site.name}
        </a>

        <div className="flex flex-wrap justify-end gap-x-4 gap-y-1 text-sm">
          {pageLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-white hover:underline"
            >
              {link.label}
            </a>
          ))}

          <span className="hidden sm:inline text-gray-700" aria-hidden>
            |
          </span>

          {externalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
