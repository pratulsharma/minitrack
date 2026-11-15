export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_#312e81_0%,_#020617_48%)] px-6">
      {/* This small card proves Tailwind is active before we build the real UI. */}
      <section className="w-full max-w-xl rounded-2xl border border-slate-700 bg-slate-900/80 p-8 shadow-2xl shadow-black/30">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
          MiniTrack course
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Next.js and Tailwind are ready.
        </h1>
        <p className="mt-4 leading-7 text-slate-300">
          The database, API routes, and interactive task board will be added one
          lesson at a time.
        </p>
      </section>
    </main>
  );
}
