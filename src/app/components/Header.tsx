import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="border-b p-4 md:p-6">
      <nav className="flex justify-end items-center max-w-4l mx-auto">
        <div className="flex gap-4">
          <Link href="https://www.linkedin.com/in/antheagao/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </Link>
          
          <Link href="https://github.com/Antheagao/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </Link>
        </div>
      </nav>
    </header>
  );
}
