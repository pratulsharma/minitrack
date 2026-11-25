'use client';

import { memo, useCallback, useEffect, useRef, useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import type { Task } from './types';

// Prep Day 14: one shared style so every control shows keyboard focus.
const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400';
const actionClass = `min-h-11 rounded-lg px-3 text-sm text-slate-200 hover:bg-slate-800 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 ${focusRing}`;
const errorClass = 'rounded-lg border border-rose-400/30 bg-rose-400/10 p-3 text-sm text-rose-200';

// Prep Day 14: turn the server's JSON body, such as { "error": "Task not found" },
// into text a person can read. Fall back to the status code if there is no message.
async function readErrorMessage(response: Response): Promise<string> {
  try {
    const body: unknown = await response.json();
    if (
      typeof body === 'object' &&
      body !== null &&
      'error' in body &&
      typeof body.error === 'string'
    ) {
      return body.error;
    }
  } catch {
    // The body was not JSON.
  }
  return `Request failed (${response.status})`;
}

type TaskRowProps = {
  task: Task;
  busy: boolean;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => Promise<void>;
  registerEditButton: (taskId: string, node: HTMLButtonElement | null) => void;
};

// Prep Day 15 EXPERIMENT: memo skips this row when every prop is === to last time.
const TaskRow = memo(function TaskRow({
  task,
  busy,
  onEdit,
  onDelete,
  registerEditButton,
}: TaskRowProps) {
  return (
    <>
      <span className={`min-w-0 break-words ${task.done ? 'text-slate-400 line-through' : ''}`}>
        {task.title}
        <span className="sr-only">{task.done ? ' (completed)' : ' (open)'}</span>
      </span>
      <div className="col-start-2 flex flex-wrap gap-2 sm:col-start-3">
        <button
          aria-disabled={busy}
          aria-label={`Edit ${task.title}`}
          className={actionClass}
          onClick={() => onEdit(task)}
          ref={node => registerEditButton(task.id, node)}
          type="button"
        >
          Edit
        </button>
        <button
          aria-disabled={busy}
          aria-label={`Delete ${task.title}`}
          className={actionClass}
          onClick={() => {
            void onDelete(task.id);
          }}
          type="button"
        >
          Delete
        </button>
      </div>
    </>
  );
});

export default function TaskBoard({ tasks }: { tasks: Task[] }) {
  const [title, setTitle] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [busy, setBusy] = useState(false);
  // Prep Day 14: each error appears next to the control it describes.
  const [titleError, setTitleError] = useState('');
  const [editError, setEditError] = useState('');
  const [listError, setListError] = useState('');
  const router = useRouter();

  const titleInputRef = useRef<HTMLInputElement>(null);
  const editInputRef = useRef<HTMLInputElement>(null);
  const listHeadingRef = useRef<HTMLHeadingElement>(null);
  // Prep Day 14: remember every Edit button so focus can return to the right one.
  const editButtons = useRef(new Map<string, HTMLButtonElement>());
  const returnFocusTo = useRef<string | null>(null);

  const openCount = tasks.filter(task => !task.done).length;

  useEffect(() => {
    if (editingId) {
      editInputRef.current?.focus();
      editInputRef.current?.select();
    } else if (returnFocusTo.current) {
      // Prep Day 14: after Save, Cancel, or Escape, focus returns to that row's Edit button.
      editButtons.current.get(returnFocusTo.current)?.focus();
      returnFocusTo.current = null;
    }
  }, [editingId]);


  const request = useCallback(
    async (path: string, options: RequestInit, showError: (message: string) => void) => {
      setTitleError('');
      setEditError('');
      setListError('');
      setBusy(true);
      try {
        const response = await fetch(path, options);
        if (!response.ok) {
          showError(await readErrorMessage(response));
          return false;
        }
        router.refresh();
        return true;
      } catch {
        showError('Could not connect to the server.');
        return false;
      } finally {
        setBusy(false);
      }
    },
    [router], // State setters are already stable, so only router is listed.
  );

  const removeTask = useCallback(
    async (taskId: string) => {
      if (busy) return;
      const ok = await request(`/api/tasks/${taskId}`, { method: 'DELETE' }, setListError);
      if (ok) listHeadingRef.current?.focus();
    },
    [busy, request], // New function only when busy flips, not on every keystroke.
  );

  const startEditing = useCallback(
    (task: Task) => {
      if (busy) return;
      setEditingId(task.id);
      setEditTitle(task.title);
      setEditError('');
    },
    [busy],
  );

  const registerEditButton = useCallback((taskId: string, node: HTMLButtonElement | null) => {
    if (node) editButtons.current.set(taskId, node);
    else editButtons.current.delete(taskId);
  }, []);

  async function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return; // Prep Day 14: ignore repeats instead of disabling (keeps focus).
    const cleanTitle = title.trim();
    if (!cleanTitle) {
      setTitleError('Enter a task title.');
      titleInputRef.current?.focus();
      return;
    }
    const ok = await request(
      '/api/tasks',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: cleanTitle }),
      },
      setTitleError,
    );
    if (ok) setTitle('');
    titleInputRef.current?.focus();
  }

  async function toggleTask(taskId: string, done: boolean) {
    if (busy) return;
    await request(
      `/api/tasks/${taskId}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ done }),
      },
      setListError,
    );
  }



  function stopEditing() {
    returnFocusTo.current = editingId; // Prep Day 14: remember where to send focus.
    setEditingId(null);
    setEditTitle('');
    setEditError('');
  }

  async function saveTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!editingId || busy) return;
    const cleanTitle = editTitle.trim();
    if (!cleanTitle) {
      setEditError('Task title cannot be empty.');
      editInputRef.current?.focus();
      return;
    }
    const ok = await request(
      `/api/tasks/${editingId}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: cleanTitle }),
      },
      setEditError,
    );
    if (ok) {
      stopEditing();
    } else {
      editInputRef.current?.focus(); // Keep the user in the field they must fix.
    }
  }

  return (
    <section aria-labelledby="add-task-heading" className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-5">
      <h2 className="text-lg font-semibold" id="add-task-heading">
        Add a task
      </h2>
      <form className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-start" noValidate onSubmit={addTask}>
        <div className="flex flex-1 flex-col gap-2">
          {/* Prep Day 14: a visible label names the input for everyone. */}
          <label className="text-sm font-medium" htmlFor="task-title">
            Task title
          </label>
          <input
            aria-describedby={titleError ? 'task-title-error' : undefined}
            aria-invalid={Boolean(titleError)}
            className={`min-h-11 rounded-lg border border-slate-600 bg-slate-950 px-3 ${focusRing}`}
            id="task-title"
            maxLength={200}
            name="title"
            onChange={event => setTitle(event.target.value)}
            readOnly={busy}
            ref={titleInputRef}
            value={title}
          />
          {titleError ? (
            <p className={errorClass} id="task-title-error" role="alert">
              {titleError}
            </p>
          ) : null}
        </div>
        <button
          aria-disabled={busy}
          className={`min-h-11 rounded-lg bg-violet-500 px-5 font-bold text-white sm:mt-7 aria-disabled:opacity-50 ${focusRing}`}
          type="submit"
        >
          Add task
        </button>
      </form>

      {/* tabIndex={-1} lets code focus this heading without adding it to the Tab order. */}
      <h2 className="mt-8 text-lg font-semibold" id="task-list-heading" ref={listHeadingRef} tabIndex={-1}>
        Tasks
      </h2>

      {listError ? (
        <p className={`mt-3 ${errorClass}`} role="alert">
          {listError}
        </p>
      ) : null}

      {tasks.length === 0 ? (
        <p className="mt-3 text-slate-400">No tasks match this view.</p>
      ) : (
        <ul aria-labelledby="task-list-heading" className="mt-3 border-t border-slate-700">
          {/* Prep Day 15: two columns on phones; a third "actions" column from sm (40rem) up. */}
          {tasks.map(task => (
            <li
              className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-3 gap-y-2 border-b border-slate-700 py-3 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center"
              key={task.id}
            >
              <input
                aria-disabled={busy}
                aria-label={`Complete ${task.title}`}
                checked={task.done}
                className={`mt-0.5 size-5 accent-violet-400 sm:mt-0 ${focusRing}`}
                onChange={event => {
                  void toggleTask(task.id, event.target.checked);
                }}
                type="checkbox"
              />

              {editingId === task.id ? (
                // Prep Day 15: on sm+ the edit form spans the title and actions columns.
                <form
                  className="flex min-w-0 flex-wrap items-center gap-2 sm:col-span-2"
                  noValidate
                  onKeyDown={event => {
                    if (event.key === 'Escape' && !busy) stopEditing();
                  }}
                  onSubmit={saveTask}
                >
                  <label className="sr-only" htmlFor={`edit-${task.id}`}>
                    Edit {task.title}
                  </label>
                  <input
                    aria-describedby={editError ? `edit-${task.id}-error` : undefined}
                    aria-invalid={Boolean(editError)}
                    className={`min-h-11 w-full min-w-0 rounded-lg border border-violet-400 bg-slate-950 px-3 sm:w-auto sm:flex-1 ${focusRing}`}
                    id={`edit-${task.id}`}
                    maxLength={200}
                    onChange={event => setEditTitle(event.target.value)}
                    readOnly={busy}
                    ref={editInputRef}
                    value={editTitle}
                  />
                  <button aria-disabled={busy} className={actionClass} type="submit">
                    Save
                  </button>
                  <button
                    aria-disabled={busy}
                    className={actionClass}
                    onClick={() => {
                      if (!busy) stopEditing();
                    }}
                    type="button"
                  >
                    Cancel
                  </button>
                  {editError ? (
                    <p className={`w-full ${errorClass}`} id={`edit-${task.id}-error`} role="alert">
                      {editError}
                    </p>
                  ) : null}
                </form>
              ) : (
                <TaskRow
                  busy={busy}
                  onDelete={removeTask}
                  onEdit={startEditing}
                  registerEditButton={registerEditButton}
                  task={task}
                />
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Prep Day 14: a polite status region announces progress and the new count. */}
      <p className="mt-4 text-sm text-slate-400" role="status">
        {busy ? 'Saving…' : `${tasks.length} ${tasks.length === 1 ? 'task' : 'tasks'} · ${openCount} open`}
      </p>
    </section>
  );
}
