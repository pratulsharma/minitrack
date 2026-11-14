# MiniTrack — Week 1 (Days 1–5)

A **small task tracker** built to learn JavaScript, TypeScript, Node.js, Next.js, React, PostgreSQL and high-value full-stack interview topics. No authentication, CSS framework, Docker or caching in week 1.

![Dark task list mockup](docs/assets/01-task-list-dark.svg)

> The mockups are visual references for the dark app theme. The reference app includes add, edit, complete, search, filter, and delete controls, while lessons introduce features step by step.

## What you build this week

| Day | What you learn | What you ship |
|---|---|---|
| 1 | JS call stack, microtasks, timers, HTTP, status codes | Node.js `GET /tasks`, in memory |
| 2 | Promises, `async/await`, closures, HTTP request bodies | Node.js `POST /tasks`, in memory |
| 3 | TypeScript Route Handlers, PostgreSQL, SQL, parameterized queries, connection pools | Persistent tasks with `GET` and `POST` |
| 4 | Next.js Server Components, server-only PostgreSQL access | Browser renders tasks read by Next.js |
| 5 | React client state, forms, events, derived state, PATCH/DELETE | Create, complete, delete and filter tasks in browser |

**Time:** ~90 minutes per day. **Rule:** attempt each lesson's exercise before viewing reference code.

## Start here: lessons contain all the code and diagrams

**Read in order:** [Day 1](lessons/day-01.md) → [Day 2](lessons/day-02.md) → [Day 3](lessons/day-03.md) → [Day 4](lessons/day-04.md) → [Day 5](lessons/day-05.md).

Each day is a **standalone, sequential tutorial**: why, exact filenames, complete commented code, terminal commands, expected output, flowchart, timing/sequence diagram, debugging challenges and interview Q&A. Mermaid diagrams render directly in GitHub Markdown. You do **not** need to browse checkpoint folders to understand the implementation.

For the complete build sequence, per-day progress checkboxes, concepts, interview questions, and final acceptance checklist, see the [MiniTrack app build roadmap](docs/APP_BUILD_ROADMAP.md).

**Progressive path:** Days 1–2 use `checkpoints/day1` and `checkpoints/day2` as JavaScript scratch files to learn Node HTTP. From Day 3 onward the TypeScript API uses Next.js Route Handlers in `frontend/app/api`; there is one Next.js server, not a separate API server. Day 4 reads from PostgreSQL in a Server Component; Day 5 adds browser mutations through Route Handlers.

## Folder map

```text
minitrack-week1/
├── lessons/                 # Guided sessions and interview questions
├── docs/                    # Architecture decisions, app overview and interview index
├── exercises/               # Small JS interview exercises
├── checkpoints/
│   ├── day1/server.cjs      # Fully runnable intermediate Day 1 server
│   ├── day2/server.cjs      # Fully runnable intermediate Day 2 server
│   ├── day3/server.js       # Optional standalone Node API comparison
│   ├── day4/page.tsx        # Read-only Next.js page
│   └── day5/               # Finished server and page
├── backend/sql/             # PostgreSQL schema
└── frontend/                # Next.js app, TypeScript API and UI
    ├── app/api/             # Next.js Route Handlers
    └── lib/                 # Typed database and task functions
```

## Prerequisites

- Node.js 24 (you already have Node 24) and npm
- PostgreSQL installed locally by Day 3; optional `psql` CLI
- VS Code; one terminal for Next.js

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

3. Configure and start Next.js (the API routes run inside this server):

   ```bash
   cd frontend
   cp .env.local.example .env.local
   # Edit DATABASE_URL to match your local Postgres credentials.
   npm install
   npm run dev
   ```

4. Open **http://localhost:3000**. API: **http://localhost:3000/api/tasks**.

**Database connection examples:**
- PostgreSQL local default user matching your macOS user: `postgresql:///minitrack` can be used in `psql`, but the Node `pg` connection URL should generally identify the user and host explicitly (e.g. `postgres://YOUR_MAC_USER@localhost:5432/minitrack`).
- Username/password setup: `postgresql://USERNAME:PASSWORD@localhost:5432/minitrack`.

If using `psql` with a different role, provide `-U USER -h localhost` and the appropriate password. Do not commit `.env` files.

## Basic verification

```bash
curl -i http://localhost:3000/api/health
curl -i http://localhost:3000/api/tasks
curl -i -X POST http://localhost:3000/api/tasks   -H 'Content-Type: application/json'   -d '{"title":"Practice closures"}'
```

The API has simple, deliberately bounded input checks to avoid distracting from the concepts. Week 1 is a **learning project, not production-ready**: no accounts, authorization, CSRF strategy, rate limits, or deployment hardening.

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

**Learning workflow:** Read `lessons/day-01.md`, use `checkpoints/day1` for comparison; proceed through day 2 and day 3. The checkpoint servers intentionally use plain JavaScript to teach Node fundamentals; from Day 3 onward the app's API uses TypeScript Route Handlers. The `frontend/` app is the **finished Week 1 reference**, not code you need to understand immediately.

See [architecture](docs/ARCHITECTURE.md), [interview index](docs/INTERVIEW_INDEX.md), and [app overview](docs/APP_OVERVIEW.md).


## Python DSA interview practice (separate learning track)

The Python DSA lessons live in [`dsa-python/`](dsa-python/DSA_README.md).
They are named `dsa-day-01.md` through `dsa-day-45.md` to avoid overwriting
the full-stack lessons in [`lessons/`](lessons/day-01.md).

For Week 1, use full-stack `lessons/day-01.md` through `day-05.md`;
parallel Python practice starts with `dsa-python/lessons/dsa-day-01.md`.
