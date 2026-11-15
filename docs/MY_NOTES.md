# My learning and interview notes

For each concept, capture **WHAT / WHY / HOW / CODE / TRICK**, using file/line references. Keep answers short and revisit without looking at code first.

## Day 1
- understood the app at a high level
- got familiarity with the postgres db 
- understood how to create pool - how to decide pool size 
- postgres DB - create table insert dummy data 
- 
## Day 2

Goal for Day 2
 - write a server -> what are the components and and how they work 
 - Run and verify the server using curl 
 - Interview questions - 
 Q1. What goes on the call stack? Function calls that run synchronously, including the HTTP request handler when invoked.

Q2. What is queued vs immediately executed? Timer callbacks wait until their scheduling phase; resolved Promise handlers are microtasks; direct console.log runs now.

Q3. Is Node multithreaded? The main JS execution thread runs callbacks serially, while Node/libuv and the OS enable concurrent I/O; additional worker threads are possible.

Q4. Why does res.end() matter? It tells Node that the HTTP response is complete.

Q5. What does status 404 mean? The requested route/resource isn't found; not a syntax error in JavaScript.

- Promises/async await, closures 
- Write enhanced version of the server 

Interview Questions:

Does await block Node? It suspends that async function; other callbacks can run while waiting for I/O.
Can you await outside an async function? Top-level await is permitted in ES modules, but not ordinary CommonJS files; inside a function, declare it async.
What happens if a Promise rejects? The awaited expression throws in the async function; handle with try/catch or pass rejection to caller.
Is Promise.all sequential? No. It subscribes to multiple already-started async operations and settles when all fulfill or one rejects; it doesn't spawn threads.
What is a closure? A function retaining access to its lexical environment.
Why not treat HTTP body as a single string? It is delivered as a stream over time.

- Understand how to create a POSTGRES table
- how to seed the table 
- Write a database driver - how to pool the connection to DB and why 
- Add task type 
- Database related functions 
    - listTask
    - createTask
- Add Validation (payload)
- Route Handlers GET and POST for create and listTasks

Interview Questions:
-- Select only open tasks; PostgreSQL performs filtering.
SELECT id, title FROM tasks WHERE done = FALSE ORDER BY id;
-- SQL returns the changed row without needing a second SELECT.
UPDATE tasks SET done = TRUE WHERE id = 1 RETURNING *;
-- An aggregate: count rows still open.
SELECT COUNT(*) FROM tasks WHERE done = FALSE;
Why $1 instead of template strings? Bound parameters keep values separate from SQL syntax and prevent SQL injection in values.
Why RETURNING? Return generated ID and defaults without a second query.
Is the database ID guaranteed gap-free? No. Uniqueness and consecutive numbering are different requirements.
What if the pool is full? Additional requests wait for a free connection; configure limits/timeouts for real systems.
Why use await pool.query? The Route Handler pauses while PostgreSQL works, without blocking the JavaScript event loop from handling other requests.
What if Postgres goes down? Query rejects, handler catches it and returns a server error; production systems need logging, timeouts and recovery plans.

## Day 3

## Day 4

## Day 5

## Day 6 — API title editing

- What:
- Why:
- How:
- Code:
- Trick:

## Day 7 — Browser editing state

- What:
- Why:
- How:
- Code:
- Trick:

## Day 8 — URL search and PostgreSQL filters

- What:
- Why:
- How:
- Code:
- Trick:

## Day 9 — Test pyramid and isolation

- What:
- Why:
- How:
- Code:
- Trick:

## Day 10 — Auth.js and GitHub OAuth

- What:
- Why:
- How:
- Code:
- Trick:

## Day 11 — Task ownership and authorization

- What:
- Why:
- How:
- Code:
- Trick:

## Day 12 — Authentication and isolation tests

- What:
- Why:
- How:
- Code:
- Trick:

## Day 13 — Accessibility and responsive design

- What:
- Why:
- How:
- Code:
- Trick:

## Day 14 — Production deployment

- What:
- Why:
- How:
- Code:
- Trick:

## Day 15 — Release verification and launch

- What:
- Why:
- How:
- Code:
- Trick:
