# Week 1 architecture and decisions

```text
Browser (http://localhost:3000)
  ├── Next.js Server Component: GET tasks at render time
  └── React Client Component: POST/PATCH/DELETE to Node API
                              |
                              v
                    Node.js HTTP server (:3001)
                              |
                         pg Pool / SQL
                              |
                         PostgreSQL
```

## Why this architecture?

1. **Separate Next.js and Node servers** — makes the HTTP boundary and backend request lifecycle explicit. In a production Next app, route handlers/server actions are viable; learning the separate API helps interviews.
2. **Node built-in `http` for Week 1** — reveals `req`, `res`, method, path, status and response body. A framework (Fastify) comes after fundamentals.
3. **PostgreSQL with raw `pg` SQL** — learn `SELECT`, `INSERT`, `UPDATE`, `DELETE`, parameterization, and pooling before introducing an ORM.
4. **Server-render initial task list; Client Component for interactions** — teaches the boundary rather than making everything a Client Component. Initial task list is fetched with `cache: 'no-store'` so the lesson avoids cached stale data.
5. **Minimal UI** — native HTML and a little inline styling. No Tailwind, animation, UI library, or design system.
6. **Tasks are a single table** — `id` identity primary key, `title` text, `done` boolean, `created_at` timestamp. No login/users yet.
7. **Browser calls Node API cross-origin locally** — backend explicitly allows `http://localhost:3000`. In production, authentication, CORS policy, origin checks and deployment topology must be revisited.
8. **Fail loudly on database errors** — server returns 500 without leaking database details; lessons discuss error handling. No retries or queues in Week 1.

## Data flow: adding a task

1. User types a title; React controls the input with `useState`.
2. Browser sends `POST /tasks` with JSON.
3. Node parses and checks the body, runs parameterized `INSERT ... RETURNING` via the pool.
4. PostgreSQL persists it and returns its ID.
5. Browser invokes `router.refresh()` so the server component re-fetches the task list.

## Trade-offs and future extensions

- **No authentication** — multiuser isolation arrives later.
- **No optimistic UI** — first learn correct server-as-source-of-truth refresh; optimize later.
- **No API framework** — later compare Fastify/Express middleware and error handling.
- **No advanced validation** — simple checks only; add schema libraries when useful.
- **No pagination/index optimization yet** — first learn queries; add data volume and `EXPLAIN ANALYZE` later.
- **No automated integration tests yet** — tiny unit tests exercise reusable pure functions; DB tests are a later lesson.
