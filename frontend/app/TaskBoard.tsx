'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Task } from './types';

const API = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';

// Client Component: form events and React state need browser interactivity.
export default function TaskBoard({ tasks }: { tasks: Task[] }) {
  const [title, setTitle] = useState(''); // Controlled input: React owns the value.
  const [filter, setFilter] = useState<'all' | 'open' | 'done'>('all');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  // Derived state: filtering the props doesn't need another useState or useEffect.
  const visible = tasks.filter(task => filter === 'all' || (filter === 'done' ? task.done : !task.done));

  async function request(path: string, options: RequestInit) {
    setError('');
    setBusy(true);
    try {
      const res = await fetch(`${API}${path}`, options);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      router.refresh(); // Ask Next to re-run the Server Component to get fresh DB data.
      return true;
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Request failed');
      return false;
    } finally {
      setBusy(false); // Runs whether request succeeds or fails.
    }
  }

  async function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent browser's default full-page form submission.
    const normalized = title.trim();
    if (!normalized) return;
    const ok = await request('/tasks', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: normalized }),
    });
    if (ok) setTitle('');
  }

  return <section>
    <form onSubmit={addTask} style={{display: 'flex', gap: 8}}>
      <input aria-label="Task title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Add a task" maxLength={200} disabled={busy} style={{padding: 8, flex: 1}} />
      <button disabled={busy || !title.trim()} type="submit">Add</button>
    </form>
    <p><label>Show: <select value={filter} onChange={e => setFilter(e.target.value as 'all' | 'open' | 'done')}>
      <option value="all">All</option><option value="open">Open</option><option value="done">Done</option>
    </select></label></p>
    {error && <p role="alert" style={{color: 'crimson'}}>Request failed: {error}</p>}
    {visible.length === 0 ? <p>No tasks in this filter.</p> :
      <ul style={{padding: 0, listStyle: 'none'}}>{visible.map(task =>
        <li key={task.id} style={{display:'flex', alignItems:'center', gap:10, borderBottom:'1px solid #ddd', padding:'10px 0'}}>
          <input aria-label={`Complete ${task.title}`} type="checkbox" checked={task.done} disabled={busy}
            onChange={e => { void request(`/tasks/${task.id}`, {method:'PATCH', headers:{'Content-Type':'application/json'}, body:JSON.stringify({done:e.target.checked})}); }} />
          <span style={{flex:1, textDecoration: task.done ? 'line-through':'none'}}>{task.title}</span>
          <button disabled={busy} type="button" onClick={() => { void request(`/tasks/${task.id}`, {method:'DELETE'}); }}>Delete</button>
        </li>
      )}</ul>}
  </section>;
}
