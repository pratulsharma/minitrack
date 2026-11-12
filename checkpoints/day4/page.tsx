// Server Component: the initial data fetch happens on the Next.js server.
// It can read API_BASE_URL without exposing a secret to the browser bundle.
import type { Task } from './types';

export default async function Home() {
  const api = process.env.API_BASE_URL || 'http://localhost:3001';
  let tasks: Task[] = [];
  let error = '';

  try {
    // For teaching, always fetch current rows instead of caching the response.
    const response = await fetch(`${api}/tasks`, { cache: 'no-store' });
    // fetch does not reject on 404/500; check the HTTP status explicitly.
    if (!response.ok) throw new Error(`API returned HTTP ${response.status}`);
    tasks = (await response.json()) as Task[];
  } catch (err) {
    error = err instanceof Error ? err.message : 'Unknown error';
  }

  return (
    <main>
      <h1>MiniTrack</h1>
      <p>{tasks.length} tasks</p>
      {error ? <p role="alert">Could not load tasks: {error}</p> :
        <ul>{tasks.map(task => (
          // Stable keys let React preserve item identity between renders.
          <li key={task.id}>{task.done ? '✅' : '⬜'} {task.title}</li>
        ))}</ul>}
    </main>
  );
}
