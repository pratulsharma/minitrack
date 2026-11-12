const http = require('node:http');

// These variables are captured by the request handler's closure.
const tasks = [{ id: 1, title: 'Learn the event loop', done: false }];
let nextId = 2;

function readJson(req) {
  // HTTP bodies arrive in chunks: read them before parsing JSON.
  return new Promise((resolve, reject) => {
    let raw = '';
    req.setEncoding('utf8');
    req.on('data', chunk => {
      raw += chunk;
      // A small learning-demo limit, not a full production protection scheme.
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

function sendJson(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data)); // One response per request.
}

http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/tasks') {
    sendJson(res, 200, tasks);
    return;
  }

  if (req.method === 'POST' && req.url === '/tasks') {
    try {
      const body = await readJson(req); // Pauses this async handler, not all Node work.
      const title = typeof body?.title === 'string' ? body.title.trim() : '';
      if (!title || title.length > 200) {
        sendJson(res, 400, { error: 'Title must be 1–200 characters' });
        return;
      }
      const task = { id: nextId++, title, done: false };
      tasks.push(task); // Shared in-memory array: gone on restart.
      sendJson(res, 201, task); // 201 = Created.
    } catch (error) {
      // Invalid JSON has status 400; too-large body is status 413.
      if (!res.destroyed) sendJson(res, error.status || 400, { error: error.message });
    }
    return;
  }
  sendJson(res, 404, { error: 'Not found' });
}).listen(3001, () => console.log('API: http://localhost:3001'));
