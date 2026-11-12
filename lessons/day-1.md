# Day 1 — JavaScript execution + Node HTTP GET

**90 min:** 20 concepts / 15 prediction / 35 coding / 10 debugging / 10 interview.

## Outcome
Run a bare Node.js HTTP server that responds with an in-memory task array. Understand the stack, timer vs Promise, HTTP method/path and response lifecycle.

## What / Why / How

- **What:** Call stack executes functions. Promise callbacks are microtasks. Timers are scheduled callbacks processed when eligible.
- **Why:** It helps you predict code output and understand why CPU-heavy synchronous JS can block an API.
- **How:** Run synchronous statements first; a fulfilled Promise's `.then` is scheduled as a microtask; timers do not interrupt active execution.

Predict **before** running:

```js
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');
```

Expected `A D C B`. `0` delay is not synchronous. For this snippet, the promise callback runs before the timer. In Node.js there are additional details involving `process.nextTick` and event-loop phases.

## Build

From repository root:

```bash
node checkpoints/day1/server.cjs
# second terminal:
curl -i http://localhost:3001/tasks
curl -i http://localhost:3001/missing
```

Read the code. Rewrite it yourself in a separate scratch file, without copying. Explain:

1. Why `http.createServer(callback)` receives a callback rather than an immediate response.
2. What are `req.method`, `req.url`, `res.writeHead`, `res.end`?
3. Why must we `return` after sending the response?
4. What changes when you request a URL that does not exist?

## Break it

- Remove `res.end(...)` for the successful path. Does `curl` finish? Restore it.
- Change `/tasks` to `/task`, try `curl /tasks`, predict the result.
- Add a synchronous `for` loop before `res.end()` and observe the delay; don't write an infinite loop.

## Interview drill

1. **Call stack vs callback queue?** Call stack holds executing function frames; callbacks wait to be scheduled to run.
2. **Why does Promise callback run before `setTimeout(..., 0)` here?** Microtasks drain after sync code before a subsequent eligible timer callback.
3. **Can Node handle multiple requests with one JS main thread?** Yes when I/O is asynchronous; CPU-bound JS blocks that thread.
4. **Why does `res.end` matter?** It completes response body delivery.
5. **GET vs POST?** GET retrieves a resource; POST submits a representation for processing.
6. **Is `setTimeout(0)` guaranteed to fire exactly at 0 ms?** No. It's an earliest scheduling delay, not exact timing.

## Exit checklist

- [ ] `curl /tasks` returns JSON and status 200.
- [ ] `/missing` returns 404.
- [ ] I can draw the call stack and explain `A D C B` without notes.
- [ ] I wrote 3 sentences in `docs/MY_NOTES.md`.

**Suggested commit:** `git add . && git commit -m "day1: HTTP GET and JS execution"`
