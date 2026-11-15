'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Task } from './types';

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
    <section className="task-panel" aria-label="Task list">
      <form className="task-form" onSubmit={addTask}>
        <input
          className="task-input"
          aria-label="Task title"
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="e.g. Review JavaScript closures"
          maxLength={200}
          disabled={busy}
        />
        <button className="primary-button" disabled={busy || !title.trim()} type="submit">
          {busy ? 'Saving…' : '+ Add task'}
        </button>
      </form>

      <div className="task-toolbar">
        <div className="filter-tabs" role="group" aria-label="Filter tasks">
          <button
            className={`filter-tab${filter === 'all' ? ' filter-tab-active' : ''}`}
            aria-pressed={filter === 'all'}
            onClick={() => setFilter('all')}
            type="button"
          >
            All <span>{tasks.length}</span>
          </button>
          <button
            className={`filter-tab${filter === 'open' ? ' filter-tab-active' : ''}`}
            aria-pressed={filter === 'open'}
            onClick={() => setFilter('open')}
            type="button"
          >
            Open <span>{openCount}</span>
          </button>
          <button
            className={`filter-tab${filter === 'done' ? ' filter-tab-active' : ''}`}
            aria-pressed={filter === 'done'}
            onClick={() => setFilter('done')}
            type="button"
          >
            Completed <span>{completedCount}</span>
          </button>
        </div>
        <label className="search-field">
          <span className="search-icon" aria-hidden="true" />
          <input
            className="search-input"
            aria-label="Search tasks"
            type="search"
            placeholder="Search tasks..."
            value={search}
            onChange={event => setSearch(event.target.value)}
          />
        </label>
      </div>

      {error && <p className="notice notice-error" role="alert">Request failed: {error}</p>}

      {visible.length === 0 ? (
        <div className="empty-state">
          <strong>{tasks.length === 0 ? 'A fresh start' : 'Nothing here yet'}</strong>
          {tasks.length === 0 ? 'Add your first task above.' : 'Try another filter or add a new task.'}
        </div>
      ) : (
        <ul className="task-list">
          {visible.map(task => (
            <li className="task-row" key={task.id}>
              <input
                className="task-checkbox"
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
                <form className="edit-form" onSubmit={saveTask}>
                  <input
                    className="edit-input"
                    aria-label={`Edit ${task.title}`}
                    value={editTitle}
                    onChange={event => setEditTitle(event.target.value)}
                    maxLength={200}
                    autoFocus
                    disabled={busy}
                  />
                  <button className="row-action row-action-save" type="submit" disabled={busy}>
                    Save
                  </button>
                  <button
                    className="row-action"
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
                <div className="task-copy">
                  <span className={`task-title${task.done ? ' task-title-done' : ''}`}>
                    {task.title}
                  </span>
                  <span className="task-meta">
                    {task.done ? 'Completed' : createdLabel(task.created_at)}
                  </span>
                </div>
              )}
              {editingId !== task.id && (
                <div className="task-actions">
                  <button
                    className="row-action"
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
                    className="row-action row-action-delete"
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

      <p className="task-summary" aria-live="polite">
        {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} · {openCount} remaining
      </p>
    </section>
  );
}
