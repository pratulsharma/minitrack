# MiniTrack architecture through Day 15

The architecture evolves by lesson. The isolated completed reference represents
the Day 5 MVP; Days 6–15 teach the additions shown below.

```text
Browser (http://localhost:3000)
  ├── Next.js Server Components: session, URL filters, PostgreSQL reads
  └── React Client Components: POST/PATCH/DELETE to Route Handlers
                                  |
                    Next.js app (TypeScript)
                      ├── Auth.js session checks ─── GitHub OAuth
                      └── pg Pool / parameterized SQL
                                      |
                                  PostgreSQL
```

## Why this architecture?

1. **One Next.js app for UI and API** — Route Handlers in `frontend/app/api` serve same-origin HTTP endpoints. There is no separate API server or local CORS setup.
2. **Node built-in HTTP in Days 1–2** — the checkpoint servers reveal `req`, `res`, methods, paths, status codes, and streams before the project moves to Route Handlers.
3. **TypeScript for app and API code** — request data is treated as untrusted, database result shapes are explicit, and Route Handler inputs/outputs use web `Request`/`Response` APIs.
4. **PostgreSQL with raw `pg` SQL** — learn `SELECT`, `INSERT`, `UPDATE`, `DELETE`, parameterization, and pooling before introducing an ORM.
5. **Server Component reads initial tasks directly** — avoids making an
   unnecessary HTTP request from the Next.js server back to itself. With Cache
   Components enabled, the static page shell wraps request-time database work
   in `<Suspense>` and uses `io()` rather than the older route-wide
   `dynamic = 'force-dynamic'` setting.
6. **Client Component performs mutations through Route Handlers** — browser requests remain HTTP-visible, while server-only database credentials and SQL stay out of the client bundle.
7. **Tailwind for focused styling** — utility classes make the dark responsive
   interface visible in the component while the lessons explain the underlying
   layout, spacing, color, breakpoint, and interaction-state concepts. No
   additional component library or design system is required.
8. **URL-backed search is server-side** — Day 8 validates `q` and `status`,
   then PostgreSQL filters with bound values. The URL remains bookmarkable and
   reload-safe.
9. **Fail safely on database errors** — API returns a generic 500 response while diagnostic details are logged on the server.
10. **Tests use an isolated database** — Day 9 separates pure unit tests,
    PostgreSQL integration tests, and a small Playwright journey. Destructive
    setup refuses the development database.
11. **Auth.js handles identity** — Day 10 uses GitHub OAuth and checks
    `auth()` in private Server Components and every task Route Handler. Secrets
    remain server-only.
12. **Ownership is enforced in SQL** — Day 11 adds Auth.js database users and
    `tasks.owner_id`; every operation derives the owner from the session and
    includes it in the query predicate.
13. **Security needs negative tests** — Day 12 proves anonymous and cross-user
    operations fail without changing another user's data.
14. **Accessibility is functional behavior** — Day 13 verifies semantics,
    keyboard/focus behavior, status announcements, zoom, and responsive layout.
15. **Deployment includes recovery** — Days 14–15 separate environment
    credentials, apply migrations deliberately, smoke-test production, and
    document app rollback and database recovery.

## Data flow: adding a task

1. User types a title; React controls the input with `useState`.
2. Browser sends same-origin `POST /api/tasks` with JSON.
3. The Route Handler validates input, then calls the task function.
4. The task function runs parameterized `INSERT ... RETURNING` through the pool.
5. PostgreSQL persists it and returns its ID.
6. Route Handler returns JSON; `router.refresh()` re-renders the Server Component, which queries PostgreSQL.

## Data flow: searching

1. The browser submits a GET form with `q` and `status`.
2. The Server Component validates and normalizes `searchParams`.
3. The task function escapes literal wildcard characters and binds SQL values.
4. PostgreSQL applies title and completion filters.
5. Next.js streams the request-time result inside the static shell.

## Data flow: authentication

1. The user chooses GitHub sign-in.
2. Auth.js redirects to GitHub and validates the callback.
3. Auth.js creates a signed session cookie.
4. Server Components and Route Handlers call `auth()`.
5. Anonymous task requests return `401`; authenticated requests continue.

## Current trade-offs and next extensions

- **No task sharing or teams** — every task has one owner; collaboration is a
  separate product and authorization model.
- **No optimistic UI** — first learn correct server-as-source-of-truth refresh; optimize later.
- **No separate API framework** — Fastify/Express can be compared when the app needs an independent API service.
- **No advanced validation** — simple checks only; add schema libraries when useful.
- **No pagination/index optimization yet** — first learn queries; add data volume and `EXPLAIN ANALYZE` later.
- **A deliberately small test suite** — Day 9 covers representative unit,
  integration, and browser behavior rather than every possible combination.
