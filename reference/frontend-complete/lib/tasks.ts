import type { Task } from '../app/types';
import { getPool } from './db';

type TaskRow = Omit<Task, 'created_at'> & { created_at: Date };

function toTask(row: TaskRow): Task {
  return { ...row, created_at: row.created_at.toISOString() };
}

export async function listTasks(): Promise<Task[]> {
  const result = await getPool().query<TaskRow>(
    'SELECT id, title, done, created_at FROM tasks ORDER BY id'
  );
  return result.rows.map(toTask);
}

export async function createTask(title: string): Promise<Task> {
  const result = await getPool().query<TaskRow>(
    'INSERT INTO tasks (title) VALUES ($1) RETURNING id, title, done, created_at',
    [title]
  );
  const row = result.rows[0];
  if (!row) throw new Error('Inserted task was not returned by PostgreSQL');
  return toTask(row);
}

export async function renameTask(id: string, title: string): Promise<Task | null> {
  const result = await getPool().query<TaskRow>(
    'UPDATE tasks SET title = $1 WHERE id = $2 RETURNING id, title, done, created_at',
    [title, id]
  );
  const row = result.rows[0];
  return row ? toTask(row) : null;
}

export async function setDone(id: string, done: boolean): Promise<Task | null> {
  const result = await getPool().query<TaskRow>(
    'UPDATE tasks SET done = $1 WHERE id = $2 RETURNING id, title, done, created_at',
    [done, id]
  );
  const row = result.rows[0];
  return row ? toTask(row) : null;
}

export async function deleteTask(id: string): Promise<boolean> {
  const result = await getPool().query('DELETE FROM tasks WHERE id = $1 RETURNING id', [id]);
  return result.rowCount !== null && result.rowCount > 0;
}
