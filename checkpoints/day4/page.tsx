import { Suspense } from 'react';
import { io } from 'next/cache';
import { listTasks } from '../lib/tasks';
import type { Task } from './types';

async function TaskList() {
  await io();

  let tasks: Task[] = [];
  let error = '';

  try {
    tasks = await listTasks();
  } catch (err) {
    error = err instanceof Error ? err.message : 'Unknown error';
  }

  if (error) return <p role="alert">Could not load tasks: {error}</p>;

  return (
    <>
      <p>{tasks.length} tasks</p>
      <ul>{tasks.map(task => (
        // Stable keys let React preserve item identity between renders.
        <li key={task.id}>{task.done ? '✅' : '⬜'} {task.title}</li>
      ))}</ul>
    </>
  );
}

export default function Home() {
  return (
    <main>
      <h1>MiniTrack</h1>
      <Suspense fallback={<p>Loading tasks...</p>}>
        <TaskList />
      </Suspense>
    </main>
  );
}


// the JS has 3 main components - call stack, task queue and microtask queue, event loop synchronizes what runs next 
// all the syncronous calls go to call stack an druns first, then microtask que then tasks