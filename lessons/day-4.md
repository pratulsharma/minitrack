# Day 4 — Next.js + React + server rendering

**90 min:** 20 concepts / 40 frontend / 15 debugging / 15 interview.

## Outcome
Open `localhost:3000` and see PostgreSQL-backed tasks. The first fetch happens in a Next.js Server Component.

## What / Why / How

- **Next.js** is a React framework with routing and server rendering.
- A **Server Component** executes on the server, can safely access server-only environment variables, and doesn't need client-side effect to fetch the initial list.
- A **Client Component** allows browser events, local interactive state, and hooks like `useState`.
- This project uses separate Node HTTP API deliberately, instead of using Next route handlers for all backend code.

## Build

Keep the Node API running from Day 3 in terminal A.

In terminal B:

```bash
cd frontend
cp .env.local.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000`. Read `app/page.tsx`:

```tsx
const response = await fetch(`${api}/tasks`, { cache: 'no-store' });
if (!response.ok) throw new Error(`API returned ${response.status}`);
const tasks = await response.json();
```

Notice `fetch` does not throw just because the HTTP status is 404 or 500; `.ok` must be checked. `cache: 'no-store'` avoids a stale-cache teaching distraction in Week 1.

**Your task:** Change the page heading, add a paragraph with the task count, and test what happens if backend is stopped. Restore backend to continue.

## Why do we fetch on server?

- Initial task data can be fetched before the browser displays the page.
- Server-only env vars don't have to be exposed to client bundles.
- Alternative: Client Component `useEffect` fetches after hydration, which can be appropriate for browser-only interactions but has other trade-offs.

## Interview drill

1. **Server Component vs Client Component?** Server Components run on the server; Client Components opt into browser interactivity and carry JS to browser.
2. **Does `'use client'` mean the component can never render on server?** No. Client Components may be prerendered to HTML on the server for initial page load; the boundary identifies code that can use client hooks/events.
3. **SSR vs CSR?** HTML produced on server vs browser-side initial rendering, with different trade-offs.
4. **What is hydration?** React attaches behavior/events to server-rendered HTML in the browser.
5. **Why is directly importing DB code into Client Component wrong?** It could expose server-only dependencies/secrets or fail to compile; keep DB access on the server.
6. **`fetch` and 500 status?** The Promise usually resolves with Response; `.ok` false; check it explicitly.
7. **What is an N+1 query?** One list query followed by one per item; no N+1 here because one SELECT returns all tasks.

## Exit checklist

- [ ] You see a task list in browser.
- [ ] DB change appears after page refresh.
- [ ] You can trace Browser → Next → Node → Postgres and back.
- [ ] You can explain Server vs Client Component.

**Commit:** `git add . && git commit -m "day4: render tasks with Next.js"`
