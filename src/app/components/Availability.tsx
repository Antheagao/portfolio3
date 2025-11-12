"use client";

export default function Availability() {
  // Keeping state/imports minimal since we removed actions
  return (
    <section
      id="availability"
      className="relative py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-950 border-t border-gray-800"
    >
      {/* subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/40 to-gray-950/80 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <div className="flex flex-col items-center text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-600/40 bg-emerald-500/10 px-3 py-1 text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to Opportunities
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Availability
          </h2>

          <p className="text-gray-300 max-w-2xl">
            Based in <span className="font-medium text-white"> Riverside, CA (PT) </span>.{" "}
            Typical response within <span className="font-medium text-white">24 hours</span>.{" "}
            Preferred contact hours: <span className="font-medium text-white">Mon–Sat, 8am–8pm PT</span>.
          </p>

          {/* quick facts */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-md bg-gray-800/70 text-gray-200 px-3 py-1 border border-gray-700">
              New-grad / Entry-level SWE roles
            </span>
            <span className="rounded-md bg-gray-800/70 text-gray-200 px-3 py-1 border border-gray-700">
              Full-time • Hybrid/On-site • Open to relocate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
