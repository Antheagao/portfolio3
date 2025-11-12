export default function Header() {
  return (
    <header className="border-b p-4 md:p-6">
      <nav className="flex justify-end items-center max-w-4l mx-auto">
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/antheagao/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Antheagao/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>

          <a
            href="https://docs.google.com/document/d/1SiR7LsPhqPuhRQ3I1hN9rIfFHKRibFG0bYfnVbsGnvE/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Resume
          </a>

          <a
            href="https://myanimelist.net/profile/Antheagao"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            MyAnimeList
          </a>
        </div>
      </nav>
    </header>
  );
}
