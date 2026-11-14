const http = require('node:http')


const tasks = [{id:1, title: "first task", done: false}]

const server = http.createServer((req,res)=>{
    if(req.method === 'GET' && req.url === '/tasks'){
        res.writeHead(200, {'Content-Type': 'application/json'} )
        res.end(JSON.stringify(tasks))
    return;
    }
        res.writeHead(404, {'Content-Type': 'application/json'} )
        res.end(JSON.stringify({error: 'Not Found'}))
        return;
})
        server.listen(3001, ()=> console.log("Server running at localhost:3001"));
// const http = require('node:http'); // Built-in Node module: no npm package needed.

// // In-memory data lasts only until we stop this Node process.
// const tasks = [
//   { id: 1, title: 'Learn the event loop', done: false },
// ];

// // Node calls this function for each incoming HTTP request.
// const server = http.createServer((req, res) => {
//   // The method (GET) and path (/tasks) together identify our route.
//   if (req.method === 'GET' && req.url === '/tasks') {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(tasks)); // Convert JS array to JSON; finish response.
//     return; // Critical: do not fall through and send another response.
//   }

//   res.writeHead(404, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({ error: 'Not found' }));
// });

// // 3001 is the API port; the frontend will later use port 3000.
// server.listen(3001, () => console.log('API: http://localhost:3001'));