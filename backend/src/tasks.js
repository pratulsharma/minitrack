const { pool } = require('./db');

async function listTasks() {
  const result = await pool.query('SELECT id, title, done, created_at FROM tasks ORDER BY id');
  return result.rows;
}

async function createTask(title) {
  // $1 is a query parameter, NOT string concatenation. It protects against SQL injection.
  const result = await pool.query(
    'INSERT INTO tasks (title) VALUES ($1) RETURNING id, title, done, created_at',
    [title]
  );
  return result.rows[0];
}

async function setDone(id, done) {
  const result = await pool.query(
    'UPDATE tasks SET done = $1 WHERE id = $2 RETURNING id, title, done, created_at',
    [done, id]
  );
  return result.rows[0] ?? null;
}

async function deleteTask(id) {
  const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING id', [id]);
  return result.rowCount > 0;
}

module.exports = { listTasks, createTask, setDone, deleteTask };
