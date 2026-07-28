import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <p className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-4">
        404
      </p>
      <h1 className="text-2xl font-semibold text-gray-100 mb-2">Page not found</h1>
      <p className="text-gray-400 mb-8">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors shadow-md"
      >
        Back to home
      </Link>
    </main>
  );
}
