'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Task } from './types';

// Shared utility groups keep repeated controls consistent without a CSS module.
const fieldClass =
  'min-w-0 rounded-xl border border-slate-700 bg-slate-950/70 px-4 text-slate-100 outline-none transition placeholder:text-slate-500 hover:border-slate-600 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 disabled:cursor-not-allowed disabled:opacity-50';
const rowActionClass =
  'min-h-9 rounded-lg px-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-700/70 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 disabled:cursor-not-allowed disabled:opacity-50';

function filterButtonClass(active: boolean): string {
  const base =
    'min-h-10 rounded-lg border px-3 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400';
  return active
    ? `${base} border-violet-400 bg-violet-400/15 text-violet-200`
    : `${base} border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-500 hover:text-white`;
}

// Client Component: form events and React state need browser interactivity.
export default function TaskBoard({ tasks }: { tasks: Task[] }) {
  const [title, setTitle] = useState(''); // Controlled input: React owns the value.
  const [filter, setFilter] = useState<'all' | 'open' | 'done'>('all');
  const [search, setSearch] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  // Counts and visible tasks are derived values, so they do not need more state.
  const completedCount = tasks.filter(task => task.done).length;
  const openCount = tasks.length - completedCount;
  const query = search.trim().toLocaleLowerCase();
  const visible = tasks.filter(task => {
    const matchesFilter = filter === 'all' || (filter === 'done' ? task.done : !task.done);
    const matchesSearch = !query || task.title.toLocaleLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });

  function createdLabel(createdAt: string): string {
    const taskDate = new Date(createdAt);
    if (Number.isNaN(taskDate.getTime())) return 'Created recently';
    const today = new Date();
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
    const startOfTaskDay = new Date(
      taskDate.getFullYear(),
      taskDate.getMonth(),
      taskDate.getDate()
    ).getTime();
    const daysAgo = Math.round((startOfToday - startOfTaskDay) / 86_400_000);
    if (daysAgo <= 0) return 'Created today';
    if (daysAgo === 1) return 'Created yesterday';
    return `Created ${taskDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}`;
  }

  async function request(path: string, options: RequestInit) {
    setError('');
    setBusy(true);
    try {
      const res = await fetch(path, options);
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
    const ok = await request('/api/tasks', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: normalized }),
    });
    if (ok) setTitle('');
  }

  async function saveTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!editingId) return;
    const normalized = editTitle.trim();
    if (!normalized) {
      setError('Task title cannot be empty.');
      return;
    }

    const ok = await request(`/api/tasks/${editingId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: normalized }),
    });
    if (ok) {
      setEditingId(null);
      setEditTitle('');
    }
  }

  return (
    <section
      className="rounded-2xl border border-slate-700 bg-slate-900/90 p-4 shadow-2xl shadow-black/25 sm:p-6 lg:px-8"
      aria-label="Task list"
    >
      {/* Mobile stacks the controls; sm: changes them to a row on wider screens. */}
      <form className="flex flex-col gap-3 sm:flex-row" onSubmit={addTask}>
        <input
          className={`${fieldClass} min-h-13 flex-1`}
          aria-label="Task title"
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="e.g. Review JavaScript closures"
          maxLength={200}
          disabled={busy}
        />
        <button
          className="min-h-13 rounded-xl bg-violet-500 px-5 font-bold text-white transition hover:bg-violet-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={busy || !title.trim()}
          type="submit"
        >
          {busy ? 'Saving…' : '+ Add task'}
        </button>
      </form>

      <div className="my-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter tasks">
          <button
            className={filterButtonClass(filter === 'all')}
            aria-pressed={filter === 'all'}
            onClick={() => setFilter('all')}
            type="button"
          >
            All <span>{tasks.length}</span>
          </button>
          <button
            className={filterButtonClass(filter === 'open')}
            aria-pressed={filter === 'open'}
            onClick={() => setFilter('open')}
            type="button"
          >
            Open <span>{openCount}</span>
          </button>
          <button
            className={filterButtonClass(filter === 'done')}
            aria-pressed={filter === 'done'}
            onClick={() => setFilter('done')}
            type="button"
          >
            Completed <span>{completedCount}</span>
          </button>
        </div>
        <label className="flex min-h-10 w-full items-center gap-2 rounded-lg border border-slate-700 bg-slate-950/70 px-3 focus-within:border-violet-400 md:max-w-64">
          <svg
            className="size-4 shrink-0 text-slate-400"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>
          <input
            className="min-w-0 flex-1 bg-transparent py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500"
            aria-label="Search tasks"
            type="search"
            placeholder="Search tasks..."
            value={search}
            onChange={event => setSearch(event.target.value)}
          />
        </label>
      </div>

      {error && (
        <p
          className="mb-4 rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-200"
          role="alert"
        >
          Request failed: {error}
        </p>
      )}

      {visible.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-700 bg-white/[0.02] px-4 py-10 text-center text-slate-400">
          <strong className="mb-1 block text-slate-100">
            {tasks.length === 0 ? 'A fresh start' : 'Nothing here yet'}
          </strong>
          {tasks.length === 0
            ? 'Add your first task above.'
            : 'Try another filter or add a new task.'}
        </div>
      ) : (
        <ul className="border-t border-slate-700">
          {visible.map(task => (
            <li
              className="grid min-h-20 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-slate-700 px-1 py-3 transition hover:bg-white/[0.02] sm:gap-4 sm:px-2"
              key={task.id}
            >
              <input
                className="size-5 cursor-pointer accent-emerald-400 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label={`Complete ${task.title}`}
                type="checkbox"
                checked={task.done}
                disabled={busy}
                onChange={event => {
                  void request(`/api/tasks/${task.id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ done: event.target.checked }),
                  });
                }}
              />
              {editingId === task.id ? (
                <form className="col-span-2 flex min-w-0 items-center gap-1" onSubmit={saveTask}>
                  <input
                    className={`${fieldClass} min-h-10 flex-1`}
                    aria-label={`Edit ${task.title}`}
                    value={editTitle}
                    onChange={event => setEditTitle(event.target.value)}
                    maxLength={200}
                    autoFocus
                    disabled={busy}
                  />
                  <button
                    className={`${rowActionClass} text-violet-300`}
                    type="submit"
                    disabled={busy}
                  >
                    Save
                  </button>
                  <button
                    className={rowActionClass}
                    type="button"
                    disabled={busy}
                    onClick={() => {
                      setEditingId(null);
                      setEditTitle('');
                      setError('');
                    }}
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                <div className="grid min-w-0 flex-1 gap-0.5">
                  <span
                    className={`break-words text-[0.97rem] font-semibold ${
                      task.done ? 'text-slate-400 line-through decoration-slate-500' : 'text-slate-100'
                    }`}
                  >
                    {task.title}
                  </span>
                  <span className="text-xs text-slate-400">
                    {task.done ? 'Completed' : createdLabel(task.created_at)}
                  </span>
                </div>
              )}
              {editingId !== task.id && (
                <div className="flex items-center">
                  <button
                    className={rowActionClass}
                    disabled={busy}
                    type="button"
                    onClick={() => {
                      setEditingId(task.id);
                      setEditTitle(task.title);
                      setError('');
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className={`${rowActionClass} hover:bg-rose-400/10 hover:text-rose-300`}
                    disabled={busy}
                    type="button"
                    onClick={() => {
                      void request(`/api/tasks/${task.id}`, { method: 'DELETE' });
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      <p className="mt-4 text-sm text-slate-400" aria-live="polite">
        {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} · {openCount} remaining
      </p>
    </section>
  );
}
