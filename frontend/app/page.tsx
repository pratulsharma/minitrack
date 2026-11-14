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
    <div className="site-frame">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="MiniTrack home">
          <span className="brand-mark" aria-hidden="true" />
          <span>MiniTrack</span>
        </a>
        <span className="topbar-current" aria-current="page">My tasks</span>
      </nav>
      <main className="app-shell">
        <header className="app-header">
          <p className="eyebrow">Your workspace</p>
          <h1 className="app-title">My tasks</h1>
          <p className="app-subtitle">Keep your learning goals organized, one task at a time.</p>
        </header>
        {error ? (
          <p className="notice notice-error" role="alert">
            Could not load tasks: {error} Check PostgreSQL and DATABASE_URL.
          </p>
        ) : (
          <TaskBoard tasks={tasks} />
        )}
      </main>
    </div>
  );
}
