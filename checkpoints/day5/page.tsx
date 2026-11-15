import { Suspense } from 'react';
import { io } from 'next/cache';
import TaskBoard from './TaskBoard';
import { listTasks } from '../lib/tasks';
import type { Task } from './types';

async function TaskContent() {
  await io();

  let tasks: Task[] = [];
  let error: string | null = null;
  try {
    tasks = await listTasks();
  } catch (err) {
    error = err instanceof Error ? err.message : 'Unable to load tasks';
  }

  return error
    ? <p role="alert">Could not load tasks: {error}. Check PostgreSQL and DATABASE_URL.</p>
    : <TaskBoard tasks={tasks} />;
}

export default function Home() {
  return (
    <main>
      <h1>MiniTrack</h1>
      <p>Simple tasks. Serious full-stack concepts.</p>
      <Suspense fallback={<p>Loading tasks...</p>}>
        <TaskContent />
      </Suspense>
    </main>
  );
}
