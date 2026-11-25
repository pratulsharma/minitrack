import Link from 'next/link';
import { Suspense } from 'react';
import { auth } from '@/auth';
import AuthControls from './AuthControls';
import SearchForm from './SearchForm';
import TaskBoard from './TaskBoard';
import { searchTasks } from '../lib/tasks';
import { normalizeTaskFilters } from '../lib/validation';
import type { Task } from './types';

type PageProps = {
  searchParams: Promise<{
    q?: string;
    status?: string;
  }>;
};

// Request-time subtree: reads the session cookie, the URL, and PostgreSQL.
async function TaskContent({ searchParams }: PageProps) {
  const session = await auth();
  if (!session?.user?.id) {
    return (
      <section
        aria-labelledby="sign-in-heading"
        className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-8"
      >
        <h2 className="text-2xl font-bold" id="sign-in-heading">
          Sign in to open MiniTrack
        </h2>
        <p className="mt-2 text-slate-300">
          Use the Sign in with GitHub button at the top of the page.
        </p>
      </section>
    );
  }

  const params = await searchParams;
  const filters = normalizeTaskFilters(params.q, params.status);

  let tasks: Task[] = [];
  let loadFailed = false;
  try {
    tasks = await searchTasks(session.user.id, filters);
  } catch (error) {
    // Prep Day 14: log details on the server; show a stable, non-secret message.
    console.error('Loading tasks failed:', error);
    loadFailed = true;
  }

  if (loadFailed) {
    return (
      <p
        className="mt-8 rounded-xl border border-rose-400/30 bg-rose-400/10 p-4 text-rose-200"
        role="alert"
      >
        Could not load tasks. Check that PostgreSQL is running, then reload.
      </p>
    );
  }

  return (
    <>
      <SearchForm filters={filters} />
      <TaskBoard tasks={tasks} />
    </>
  );
}

export default function Home({ searchParams }: PageProps) {
  return (
    <>
      {/* Prep Day 14: landmarks let screen-reader users jump between regions. */}
      <header className="border-b border-slate-800">
        <nav
          aria-label="Account"
          className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4"
        >
          <Link
            className="font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
            href="/"
          >
            MiniTrack
          </Link>
          {/* AuthControls calls auth(), which reads cookies, so it needs Suspense too. */}
          <Suspense fallback={<span className="text-sm text-slate-400">Checking session…</span>}>
            <AuthControls />
          </Suspense>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6" id="main-content">
        <h1 className="text-3xl font-bold sm:text-4xl">My tasks</h1>
        <Suspense fallback={<p className="mt-8 text-slate-400" role="status">Loading tasks…</p>}>
          <TaskContent searchParams={searchParams} />
        </Suspense>
      </main>
    </>
  );
}
