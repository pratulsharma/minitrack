# MiniTrack — Week 1 (Days 1–5)

A **small task tracker** built to learn JavaScript, TypeScript, Node.js, Next.js,
React, Tailwind CSS, PostgreSQL, and high-value full-stack interview topics.
Week 1 intentionally omits authentication, Docker, and caching.

![Dark task list mockup](docs/assets/01-task-list-dark.svg)

> The mockups are visual references for the dark app theme. The reference app includes add, edit, complete, search, filter, and delete controls, while lessons introduce features step by step.

## What you build this week

| Day | What you learn | What you ship |
|---|---|---|
| 1 | JS call stack, microtasks, timers, HTTP, status codes | Node.js `GET /tasks`, in memory |
| 2 | Promises, `async/await`, closures, HTTP request bodies | Node.js `POST /tasks`, in memory |
| 3 | `create-next-app`, Tailwind basics, App Router files, Route Handlers, PostgreSQL and SQL | A styled scaffold plus persistent `GET` and `POST` |
| 4 | Next.js Server Components, server-only PostgreSQL access, Tailwind layout utilities | Browser renders styled tasks read by Next.js |
| 5 | React state, forms, events, derived state, responsive Tailwind, PATCH/DELETE | Create, complete, delete and filter tasks in browser |

**Time:** Use focused 45-minute sessions. Day 3 is intentionally split into
three sessions so scaffolding, persistence, and the API are learned separately.
**Rule:** attempt each lesson's exercise before viewing reference code.

## Start here: lessons contain all the code and diagrams

**Read in order:** [Day 1](lessons/day-01.md) → [Day 2](lessons/day-02.md) → [Day 3](lessons/day-03.md) → [Day 4](lessons/day-04.md) → [Day 5](lessons/day-05.md).

Each day is a **standalone, sequential tutorial**: why, exact filenames, complete commented code, terminal commands, expected output, flowchart, timing/sequence diagram, debugging challenges and interview Q&A. Mermaid diagrams render directly in GitHub Markdown. You do **not** need to browse checkpoint folders to understand the implementation.

For the complete build sequence, per-day progress checkboxes, concepts, interview questions, and final acceptance checklist, see the [MiniTrack app build roadmap](docs/APP_BUILD_ROADMAP.md).

**Progressive path:** Days 1–2 use `checkpoints/day1` and `checkpoints/day2`
as JavaScript scratch files to learn Node HTTP. Day 3 starts with the untouched
`create-next-app` scaffold in `frontend/`; you add every database and API file
yourself. Day 4 builds the first database-backed page. Day 5 adds the Client
Component and browser mutations. The completed code is isolated under
`reference/frontend-complete/` so future code does not appear in the learner
workspace.

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
├── frontend/                # Active learner workspace: Next.js + Tailwind scaffold
└── reference/
    └── frontend-complete/   # Finished app; compare only after attempting lessons
```

## Prerequisites

- Node.js 24 (you already have Node 24) and npm
- PostgreSQL installed locally by Day 3; optional `psql` CLI
- VS Code; one terminal for Next.js

## Run the completed reference (only after trying the lessons)

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

3. Configure and start the isolated completed application:

   ```bash
   cd reference/frontend-complete
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

## Completed-reference verification

```bash
# Run these only after starting reference/frontend-complete.
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

**Learning workflow:** Read `lessons/day-01.md`, use `checkpoints/day1` for
comparison, and continue in order. The checkpoint servers intentionally use
plain JavaScript to teach Node fundamentals. On Day 3, begin in the generated
`frontend/` scaffold and create only the files named by the current step. Do
not use `reference/frontend-complete/` until you have attempted the lesson.

See [architecture](docs/ARCHITECTURE.md), [interview index](docs/INTERVIEW_INDEX.md), and [app overview](docs/APP_OVERVIEW.md).


## Python DSA interview practice (separate learning track)

The Python DSA lessons live in [`dsa-python/`](dsa-python/DSA_README.md).
They are named `dsa-day-01.md` through `dsa-day-45.md` to avoid overwriting
the full-stack lessons in [`lessons/`](lessons/day-01.md).

For Week 1, use full-stack `lessons/day-01.md` through `day-05.md`;
parallel Python practice starts with `dsa-python/lessons/dsa-day-01.md`.
