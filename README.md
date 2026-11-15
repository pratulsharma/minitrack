# MiniTrack — Full-Stack Course (Days 1–10)

A **small task tracker** built to learn JavaScript, TypeScript, Node.js, Next.js,
React, Tailwind CSS, PostgreSQL, and high-value full-stack interview topics.
Days 1–5 build the Week 1 MVP. Days 6–10 add editing, URL-backed search,
automated tests, and GitHub authentication. Docker and application caching stay
outside this stage.

![Dark task list mockup](docs/assets/01-task-list-dark.svg)

> The mockups are visual references for the dark app theme. The reference app includes add, edit, complete, search, filter, and delete controls, while lessons introduce features step by step.

## What you build in App Days 1–10

| Day | What you learn | What you ship |
|---|---|---|
| 1 | JS call stack, microtasks, timers, HTTP, status codes | Node.js `GET /tasks`, in memory |
| 2 | Promises, `async/await`, closures, HTTP request bodies | Node.js `POST /tasks`, in memory |
| 3 | `create-next-app`, Tailwind basics, App Router files, Route Handlers, PostgreSQL and SQL | A styled scaffold plus persistent `GET` and `POST` |
| 4 | Next.js Server Components, server-only PostgreSQL access, Tailwind layout utilities | Browser renders styled tasks read by Next.js |
| 5 | React state, forms, events, derived state, responsive Tailwind, PATCH/DELETE | Create, complete, delete and filter tasks in browser |
| 6 | Partial update contracts, validation, parameterized `UPDATE ... RETURNING` | Edit task titles through the API |
| 7 | Controlled edit forms, explicit UI state, accessible interactions | Edit, save, and cancel in the browser |
| 8 | URL state, `searchParams`, safe `ILIKE`, server-side filtering | Shareable task search and status filters |
| 9 | Unit, PostgreSQL integration, and Playwright browser tests | Repeatable tests against an isolated database |
| 10 | Auth.js, GitHub OAuth, sessions, server-side access checks | Sign in/out and reject anonymous task requests |

**Time:** Use focused 45-minute sessions. Several app days are split into three
sessions so each server, browser, and verification step can be learned
separately.
**Rule:** attempt each lesson's exercise before viewing reference code.

## Start here: lessons contain all the code and diagrams

**Read in order:** [Day 1](lessons/day-01.md) →
[Day 2](lessons/day-02.md) → [Day 3](lessons/day-03.md) →
[Day 4](lessons/day-04.md) → [Day 5](lessons/day-05.md) →
[Day 6](lessons/day-06.md) → [Day 7](lessons/day-07.md) →
[Day 8](lessons/day-08.md) → [Day 9](lessons/day-09.md) →
[Day 10](lessons/day-10.md).

Each day is a **standalone, sequential tutorial**: why, exact filenames, complete commented code, terminal commands, expected output, flowchart, timing/sequence diagram, debugging challenges and interview Q&A. Mermaid diagrams render directly in GitHub Markdown. You do **not** need to browse checkpoint folders to understand the implementation.

For the complete build sequence, per-day progress checkboxes, concepts, interview questions, and final acceptance checklist, see the [MiniTrack app build roadmap](docs/APP_BUILD_ROADMAP.md).

**Progressive path:** Days 1–2 use `checkpoints/day1` and `checkpoints/day2`
as JavaScript scratch files to learn Node HTTP. Day 3 starts with the untouched
`create-next-app` scaffold in `frontend/`; you add every database and API file
yourself. Day 4 builds the first database-backed page. Day 5 adds the Client
Component and browser mutations. The completed code is isolated under
`reference/frontend-complete/` so future code does not appear in the learner
workspace. Days 6–10 continue with editing, URL-backed search, automated
testing, and GitHub authentication.

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

The Day 5 reference API has deliberately bounded input checks so the early
lessons stay focused. Day 10 adds authentication, but per-user task
authorization begins on Day 11. The course app is **not production-ready**:
it still needs ownership enforcement, a reviewed CSRF strategy, rate limits,
monitoring, and deployment hardening.

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

Use full-stack `lessons/day-01.md` through `day-10.md` in sequence. Parallel
Python practice starts with `dsa-python/lessons/dsa-day-01.md`; its filenames
use the `dsa-day-XX.md` prefix to avoid colliding with the app course.
