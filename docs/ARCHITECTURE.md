# Week 1 architecture and decisions

```text
Browser (http://localhost:3000)
  ├── Next.js Server Component: reads tasks from PostgreSQL
  └── React Client Component: POST/PATCH/DELETE to Next.js Route Handlers
                                  |
                         Next.js app (TypeScript)
                                  |
                             pg Pool / SQL
                                  |
                             PostgreSQL
```

## Why this architecture?

1. **One Next.js app for UI and API** — Route Handlers in `frontend/app/api` serve same-origin HTTP endpoints. There is no separate API server or local CORS setup.
2. **Node built-in HTTP in Days 1–2** — the checkpoint servers reveal `req`, `res`, methods, paths, status codes, and streams before the project moves to Route Handlers.
3. **TypeScript for app and API code** — request data is treated as untrusted, database result shapes are explicit, and Route Handler inputs/outputs use web `Request`/`Response` APIs.
4. **PostgreSQL with raw `pg` SQL** — learn `SELECT`, `INSERT`, `UPDATE`, `DELETE`, parameterization, and pooling before introducing an ORM.
5. **Server Component reads initial tasks directly** — avoids making an unnecessary HTTP request from the Next.js server back to itself. `cache: 'no-store'` is not needed for this direct database query.
6. **Client Component performs mutations through Route Handlers** — browser requests remain HTTP-visible, while server-only database credentials and SQL stay out of the client bundle.
7. **Minimal UI** — native HTML and a little inline styling. No Tailwind, animation, UI library, or design system.
8. **Tasks are a single table** — `id` identity primary key, `title` text, `done` boolean, `created_at` timestamp. No login/users yet.
9. **Fail safely on database errors** — API returns a generic 500 response while diagnostic details are logged on the server.

## Data flow: adding a task

1. User types a title; React controls the input with `useState`.
2. Browser sends same-origin `POST /api/tasks` with JSON.
3. The Route Handler validates input, then calls the task function.
4. The task function runs parameterized `INSERT ... RETURNING` through the pool.
5. PostgreSQL persists it and returns its ID.
6. Route Handler returns JSON; `router.refresh()` re-renders the Server Component, which queries PostgreSQL.

## Trade-offs and future extensions

- **No authentication** — multiuser isolation arrives later.
- **No optimistic UI** — first learn correct server-as-source-of-truth refresh; optimize later.
- **No separate API framework** — Fastify/Express can be compared when the app needs an independent API service.
- **No advanced validation** — simple checks only; add schema libraries when useful.
- **No pagination/index optimization yet** — first learn queries; add data volume and `EXPLAIN ANALYZE` later.
- **No automated integration tests yet** — tiny unit tests exercise reusable pure functions; DB tests are a later lesson.
