import TaskBoard from './TaskBoard';
import { listTasks } from '../lib/tasks';
import type { Task } from './types';

export const dynamic = 'force-dynamic';

// Server Component: reads from PostgreSQL directly on the Next.js server.
export default async function Home() {
  let tasks: Task[] = [];
  let error: string | null = null;
  try {
    tasks = await listTasks();
  } catch (err) {
    error = err instanceof Error ? err.message : 'Unable to load tasks';
  }
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_50%_-18%,_rgb(91_75_180_/_22%),_transparent_48%)]">
      <nav
        className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950/80 px-5 sm:px-8 lg:px-[max(2rem,calc((100vw-75rem)/2))]"
        aria-label="Main navigation"
      >
        <a
          className="inline-flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-100"
          href="/"
          aria-label="MiniTrack home"
        >
          <span
            className="inline-flex size-5 items-center justify-center rounded-md border border-violet-400 bg-violet-400/10 text-xs text-violet-300"
            aria-hidden="true"
          >
            ✓
          </span>
          <span>MiniTrack</span>
        </a>
        <span className="text-sm font-semibold text-slate-300" aria-current="page">
          My tasks
        </span>
      </nav>
      <main className="mx-auto w-[min(calc(100%-2rem),70rem)] py-10 sm:w-[min(calc(100%-4.5rem),70rem)] sm:py-12">
        <header className="mb-7">
          <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-violet-300">
            <span className="size-1.5 rounded-full bg-violet-400 shadow-[0_0_14px_rgb(155_140_255_/_75%)]" />
            Your workspace
          </p>
          <h1 className="text-4xl font-bold tracking-[-0.055em] sm:text-5xl">My tasks</h1>
          <p className="mt-2 text-slate-400">
            Keep your learning goals organized, one task at a time.
          </p>
        </header>
        {error ? (
          <p
            className="rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-rose-200"
            role="alert"
          >
            Could not load tasks: {error} Check PostgreSQL and DATABASE_URL.
          </p>
        ) : (
          <TaskBoard tasks={tasks} />
        )}
      </main>
    </div>
  );
}
