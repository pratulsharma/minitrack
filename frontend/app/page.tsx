
import { Suspense } from 'react';

import type {Task} from "./lib/types.ts"
import  {listTasks, createTask} from "./lib/tasks.ts"

async function TaskList() {

  let task:Task[]  = [];

  task = await listTasks();
   
  return (<div>
 
 {task.map((r) =>  ( <li key={r.id} className="flex items-center gap-3 border-b px-5 py-4 last:border-b-0">
   <span>{r.id}</span>
    <span aria-hidden="true">{r.done ? '✅' : '⬜'}</span>
    <span className={r.done ? "text-slate-300 textline-through" : "" }>{r.title}</span>
    
    </li> 

 ))}

  </div>)

}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      {/* This small card proves Tailwind is active before we build the real UI. */}
      <section className="w-full max-w-xl rounded-2xl border border-slate-700 bg-slate-900/80 p-8 shadow-2xl shadow-black/30">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
          MiniTrack course
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          My Daily Tasks list
        </h1>
        <p className="mt-4 leading-7 text-slate-300">
          The database, API routes, and interactive task board will be added one
          lesson at a time.
        </p>
        <Suspense fallback={<p>Loading tasks...</p>}>
        <TaskList />
        </Suspense>
      </section>
    </main>
  );
}
