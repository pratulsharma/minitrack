# Day 2 — Promises, async/await, closures and HTTP POST

**90 min:** 20 concepts / 40 coding / 15 debugging / 15 interview.

## Outcome
Send JSON to `POST /tasks` and add a task in memory. Notice why state disappears when server restarts.

## What / Why / How

**Promise** represents the eventual result of an asynchronous operation. **`await`** pauses the current *async function*, not the entire Node.js event loop. A **closure** allows a function to retain variables from its surrounding lexical scope (`tasks`, `nextId`). An incoming HTTP request body arrives as a stream of chunks: you cannot assume it has arrived all at once.

**Prediction:**

```js
console.log('one');
async function work() {
  console.log('two');
  await Promise.resolve();
  console.log('four');
}
work();
console.log('three');
```

Expected: `one`, `two`, `three`, `four` — the `async` function executes synchronously until it reaches its first `await`; continuation is deferred to a microtask.

## Build

Stop Day 1 server with Ctrl+C; then:

```bash
node checkpoints/day2/server.cjs
# second terminal
curl -i http://localhost:3001/tasks
curl -i -X POST http://localhost:3001/tasks   -H 'Content-Type: application/json'   -d '{"title":"Learn promises"}'
curl http://localhost:3001/tasks
```

Inspect `readBody(req)`: data arrives in chunks; `end` resolves the Promise; invalid JSON rejects it. Examine `await readBody(req)` and `try/catch`.

**Your coding task:** Without seeing reference code, add `GET /count` returning `{ "count": tasks.length }`. Then compare your answer.

## Break it

- Send `{not json}` and observe 400 rather than an unhandled rejection.
- Send an empty title and observe 400.
- Restart Node and verify the newly created task is gone. Why? Data was in process memory, not persistent storage.

## Tricky interview drill

1. **Does async always mean multithreading?** No; many async operations are nonblocking I/O coordinated by the event loop.
2. **Where does execution continue after `await`?** In a scheduled Promise continuation (microtask).
3. **What is a closure?** A function with access to variables in its lexical environment even after an outer invocation returns.
4. **What if `await` rejects outside a `try/catch`?** The async function rejects; if unhandled, the rejection can surface as a process error depending on runtime configuration.
5. **What does `Promise.all` do?** Awaits all input fulfillment, rejects if one rejects; it does not itself create extra threads.
6. **`process.nextTick` vs Promise callbacks in Node?** `nextTick` has Node-specific scheduling priority, but ordering depends on context (e.g., CommonJS vs ESM top-level); do not memorize a universal one-line rule.
7. **Why isn't an HTTP body immediately available?** Data arrives over a stream as packets/chunks.

**Interview task:** Implement `makeCounter()` using a closure. Run `node exercises/js-predictions.js` only after predicting its output.

## Exit checklist

- [ ] `POST /tasks` returns 201.
- [ ] GET returns the newly created task.
- [ ] Malformed JSON returns 400.
- [ ] I can explain an async function's synchronous prefix.

**Commit:** `git commit -am "day2: async JS and HTTP POST"` (stage new files if any).
