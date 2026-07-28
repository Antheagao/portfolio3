import { site } from "@/data/site";

const navLinks = [
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "GitHub", href: site.links.github },
  { label: "Resume", href: site.links.resume },
  { label: "MyAnimeList", href: site.links.myAnimeList },
];

export default function Header() {
  return (
    <header className="border-b border-gray-800 p-4 md:p-6">
      <nav className="flex justify-end items-center max-w-4xl mx-auto">
        <div className="flex gap-4">
          {navLinks.map((link) => (
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
