const http = require('node:http');
// Day 2: a closure over in-memory data retains tasks between requests.
const tasks = [{ id: 1, title: 'Learn event loop', done: true }];
let nextId = 2;

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', part => raw += part);
    req.on('end', () => {
      try { resolve(JSON.parse(raw)); } catch { reject(new Error('Invalid JSON')); }
    });
    req.on('error', reject);
  });
}

http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.method === 'GET' && req.url === '/tasks') {
    res.end(JSON.stringify(tasks)); return;
  }
  if (req.method === 'POST' && req.url === '/tasks') {
    try {
      const body = await readBody(req); // Yield while request stream delivers data.
      if (typeof body?.title !== 'string' || !body.title.trim()) {
        res.writeHead(400); res.end(JSON.stringify({error:'Title required'})); return;
      }
      const task = {id: nextId++, title: body.title.trim(), done: false};
      tasks.push(task); // Will be lost when Node process restarts.
      res.writeHead(201); res.end(JSON.stringify(task)); return;
    } catch {
      res.writeHead(400); res.end(JSON.stringify({error:'Invalid JSON'})); return;
    }
  }
  res.writeHead(404); res.end(JSON.stringify({error:'Not found'}));
}).listen(3001, () => console.log('Day 2 API on http://localhost:3001'));
