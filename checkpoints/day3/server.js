const http = require('node:http');
require('dotenv').config(); // Reads DATABASE_URL and PORT from backend/.env.
const { pool } = require('./db'); // A reusable PostgreSQL connection pool.

const PORT = Number(process.env.PORT || 3001);

function sendJson(res, status, value) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(value));
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.setEncoding('utf8');
    req.on('data', chunk => {
      raw += chunk;
      if (raw.length > 10_000) {
        reject(Object.assign(new Error('Body too large'), { status: 413 }));
        req.destroy();
      }
    });
    req.on('end', () => {
      try { resolve(JSON.parse(raw)); }
      catch { reject(Object.assign(new Error('Invalid JSON'), { status: 400 })); }
    });
    req.on('error', reject);
  });
}

http.createServer(async (req, res) => {
  try {
    if (req.method === 'GET' && req.url === '/tasks') {
      // Await relinquishes the JS thread while PostgreSQL works.
      const result = await pool.query('SELECT id, title, done, created_at FROM tasks ORDER BY id');
      sendJson(res, 200, result.rows);
      return;
    }
    if (req.method === 'POST' && req.url === '/tasks') {
      const body = await readJson(req);
      const title = typeof body?.title === 'string' ? body.title.trim() : '';
      if (!title || title.length > 200) {
        sendJson(res, 400, { error: 'Title must be 1–200 characters' });
        return;
      }
      // $1 is a bound parameter: do not splice user input into SQL text.
      const result = await pool.query(
        'INSERT INTO tasks (title) VALUES ($1) RETURNING id, title, done, created_at',
        [title]
      );
      sendJson(res, 201, result.rows[0]);
      return;
    }
    sendJson(res, 404, { error: 'Not found' });
  } catch (error) {
    console.error(error); // Log diagnostic details on server, not to the client.
    if (!res.headersSent && !res.destroyed) {
      sendJson(res, error.status || 500, {
        error: error.status ? error.message : 'Internal server error'
      });
    }
  }
}).listen(PORT, () => console.log(`API: http://localhost:${PORT}`));
