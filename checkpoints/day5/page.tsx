import TaskBoard from './TaskBoard';
import type { Task } from './types';

// Server Component: executes on the Next.js server, not in the browser.
export default async function Home() {
  const api = process.env.API_BASE_URL || 'http://localhost:3001';
  let tasks: Task[] = [];
  let error: string | null = null;
  try {
    // no-store makes refresh re-fetch from Node, avoiding caching discussion on Day 4.
    const response = await fetch(`${api}/tasks`, { cache: 'no-store' });
    if (!response.ok) throw new Error(`API returned ${response.status}`);
    tasks = (await response.json()) as Task[];
  } catch (err) {
    error = err instanceof Error ? err.message : 'Unable to load tasks';
  }
  return <main><h1>MiniTrack</h1><p>Simple tasks. Serious full-stack concepts.</p>{error ? <p role="alert">Could not load tasks: {error}. Is the backend running?</p> : <TaskBoard tasks={tasks} />}</main>;
}
