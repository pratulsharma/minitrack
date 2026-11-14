import { listTasks } from '../lib/tasks';
import type { Task } from './types';

export const dynamic = 'force-dynamic';

export default async function Home() {
  let tasks: Task[] = [];
  let error = '';

  try {
    tasks = await listTasks();
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
