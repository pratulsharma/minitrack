const http = require('node:http');
const { URL } = require('node:url');
require('dotenv').config();
const { pool } = require('./db');
const { listTasks, createTask, setDone, deleteTask } = require('./tasks');
const { normalizeTitle, isValidId } = require('./validation');

const PORT = Number(process.env.PORT || 3001);
const allowedOrigin = process.env.FRONTEND_ORIGIN || 'http://localhost:3000';

function sendJson(res, status, value) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(value)); // Every handled request must end the response.
}

function readJson(req) {
  // Incoming HTTP request bodies are streams, not ready-made JavaScript objects.
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

const server = http.createServer(async (req, res) => {
  // The frontend is on port 3000, and the API on 3001; these are different origins.
  if (req.headers.origin === allowedOrigin) {
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  const path = new URL(req.url, `http://localhost:${PORT}`).pathname;
  try {
    if (req.method === 'GET' && path === '/health') {
      sendJson(res, 200, { ok: true }); return;
    }
    if (req.method === 'GET' && path === '/tasks') {
      sendJson(res, 200, await listTasks()); return;
    }
    if (req.method === 'POST' && path === '/tasks') {
      const data = await readJson(req);
      const title = normalizeTitle(data?.title);
      if (!title) { sendJson(res, 400, { error: 'title must be 1–200 characters' }); return; }
      sendJson(res, 201, await createTask(title)); return;
    }

    const match = path.match(/^\/tasks\/(\d+)$/);
    if (match && isValidId(match[1])) {
      const id = match[1]; // PostgreSQL BIGINT IDs can be passed as decimal strings.
      if (req.method === 'PATCH') {
        const data = await readJson(req);
        if (typeof data?.done !== 'boolean') {
          sendJson(res, 400, { error: 'done must be boolean' }); return;
        }
        const task = await setDone(id, data.done);
        sendJson(res, task ? 200 : 404, task || { error: 'Task not found' }); return;
      }
      if (req.method === 'DELETE') {
        const deleted = await deleteTask(id);
        sendJson(res, deleted ? 200 : 404, deleted ? { deleted: true } : { error: 'Task not found' }); return;
      }
    }
    sendJson(res, 404, { error: 'Route not found' });
  } catch (err) {
    console.error('Request failed:', err);
    if (!res.headersSent && !res.destroyed) {
      sendJson(res, err.status || 500, { error: err.status ? err.message : 'Internal server error' });
    }
  }
});

server.listen(PORT, () => console.log(`MiniTrack API: http://localhost:${PORT}`));

// When this process terminates, release database connections.
process.on('SIGINT', async () => { server.close(); await pool.end(); process.exit(0); });
