import TaskBoard from './TaskBoard';
import { listTasks } from '../lib/tasks';
import type { Task } from './types';

export const dynamic = 'force-dynamic';

// Server Component: reads PostgreSQL directly on the Next.js server.
export default async function Home() {
  let tasks: Task[] = [];
  let error: string | null = null;
  try {
    tasks = await listTasks();
  } catch (err) {
    error = err instanceof Error ? err.message : 'Unable to load tasks';
  }
  return <main><h1>MiniTrack</h1><p>Simple tasks. Serious full-stack concepts.</p>{error ? <p role="alert">Could not load tasks: {error}. Check PostgreSQL and DATABASE_URL.</p> : <TaskBoard tasks={tasks} />}</main>;
}
