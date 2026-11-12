const http = require('node:http');
// Day 1: in-memory data first. No database or dependencies yet.
const tasks = [{ id: 1, title: 'Learn event loop', done: true }];
http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/tasks') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(tasks)); return;
  }
  res.writeHead(404); res.end('Not found');
}).listen(3001, () => console.log('Day 1 API on http://localhost:3001'));
