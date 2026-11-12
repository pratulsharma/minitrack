# MiniTrack — Week 1 (Days 1–5)

A **small task tracker** built to learn JavaScript, Node.js, Next.js, React, PostgreSQL and high-value full-stack interview topics. No authentication, CSS framework, Docker or caching in week 1.

![Proposed application mockup](docs/assets/01-task-list.png)

> The mockup depicts the product direction, not the exact Week 1 interface. Week 1 has a minimal list, create/complete/delete, and a client-side filter.

## What you build this week

| Day | What you learn | What you ship |
|---|---|---|
| 1 | JS call stack, microtasks, timers, HTTP, status codes | Node.js `GET /tasks`, in memory |
| 2 | Promises, `async/await`, closures, HTTP request bodies | Node.js `POST /tasks`, in memory |
| 3 | PostgreSQL, SQL, parameterized queries, connection pools | Persistent tasks with `GET` and `POST` |
| 4 | Next.js, Server Components, fetch, response errors | Browser reads tasks from backend |
| 5 | React client state, forms, events, derived state, PATCH/DELETE | Create, complete, delete and filter tasks in browser |

**Time:** ~90 minutes per day. **Rule:** attempt each lesson's exercise before viewing reference code.

## Folder map

```text
minitrack-week1/
├── lessons/                 # Guided sessions and interview questions
├── docs/                    # Architecture decisions, app overview and interview index
├── exercises/               # Small JS interview exercises
├── checkpoints/
│   ├── day1/server.cjs      # Fully runnable intermediate Day 1 server
│   └── day2/server.cjs      # Fully runnable intermediate Day 2 server
├── backend/                 # End-of-week reference Node API
│   ├── src/server.js
│   ├── src/tasks.js
│   └── sql/schema.sql
└── frontend/                # End-of-week reference Next.js frontend
    └── app/
```

## Prerequisites

- Node.js 24 (you already have Node 24) and npm
- PostgreSQL installed locally by Day 3; optional `psql` CLI
- VS Code; two terminal tabs

## Fast start: reference implementation (after trying lessons)

1. Create a local Postgres database. On macOS with Homebrew, one option is:

   ```bash
   brew install postgresql@17
   brew services start postgresql@17
   # If psql isn't on PATH, add Homebrew's postgresql@17/bin to PATH.
   createdb minitrack
   ```

   If PostgreSQL is already installed, skip installation and create a database using your existing user. Set credentials in the next step to match your installation.

2. Initialize the database:

   ```bash
   psql -d minitrack -f backend/sql/schema.sql
   ```

3. Start the backend in terminal A:

   ```bash
   cd backend
   cp .env.example .env
   # Edit DATABASE_URL to match your local Postgres credentials.
   npm install
   npm run dev
   ```

4. Start the frontend in terminal B (from repository root):

   ```bash
   cd frontend
   cp .env.local.example .env.local
   npm install
   npm run dev
   ```

5. Open **http://localhost:3000**. API: **http://localhost:3001/tasks**.

**Database connection examples:**
- PostgreSQL local default user matching your macOS user: `postgresql:///minitrack` can be used in `psql`, but a Node connection URL should generally identify the user and host explicitly (e.g. `postgres://YOUR_MAC_USER@localhost:5432/minitrack`).
- Username/password setup: `postgresql://USERNAME:PASSWORD@localhost:5432/minitrack`.

If using `psql` with a different role, provide `-U USER -h localhost` and the appropriate password. Do not commit `.env` files.

## Basic verification

```bash
curl -i http://localhost:3001/health
curl -i http://localhost:3001/tasks
curl -i -X POST http://localhost:3001/tasks   -H 'Content-Type: application/json'   -d '{"title":"Practice closures"}'
```

Backend has simple, deliberately bounded input checks to avoid distracting from the concepts. Week 1 is a **learning project, not production-ready**: no accounts, authorization, CSRF strategy, rate limits, or deployment hardening.

## GitHub: create and push your own repo

From the extracted `minitrack-week1/` folder:

```bash
git init
git add .
git commit -m "week1: MiniTrack learning project"
git branch -M main
```

Create an **empty** GitHub repository named `minitrack` via github.com/new (don't check “Initialize with README”). Then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/minitrack.git
git push -u origin main
```

Or if the GitHub CLI is installed and authenticated: `gh repo create minitrack --private --source=. --remote=origin --push`.

**Learning workflow:** Read `lessons/day-1.md`, use `checkpoints/day1` for comparison; proceed through day 2 and day 3. `backend/` and `frontend/` are the **finished Week 1 reference**, not code you need to understand immediately.

See [architecture](docs/ARCHITECTURE.md), [interview index](docs/INTERVIEW_INDEX.md), and [app overview](docs/APP_OVERVIEW.md).
