# MiniTrack Days 1–15 acceptance checklist

Use the [app build roadmap](docs/APP_BUILD_ROADMAP.md) for the detailed
step-by-step sequence, day-by-day progress tracking, concepts, and interview
questions. Start at Day 1 unless you have already completed it; keep each box
unchecked until that milestone has been completed and verified.

- [ ] Day 1 `node checkpoints/day1/server.cjs` works (stop before Day 2)
- [ ] Day 2 `node checkpoints/day2/server.cjs` supports POST (stop before Day 3)
- [ ] Day 3 default `create-next-app` page runs before adding MiniTrack code
- [ ] Day 3 I can explain `app/page.tsx`, `app/layout.tsx`, `package.json`, and `tsconfig.json`
- [ ] Day 3 I can explain the Tailwind import, utility classes, and responsive prefixes
- [ ] Day 3 `psql -d minitrack -f backend/sql/schema.sql` succeeds
- [ ] Day 3 Next.js Route Handlers connect to PostgreSQL after setting `frontend/.env.local`
- [ ] Day 4 `cd frontend && npm run dev` renders PostgreSQL tasks
- [ ] Day 5 create, complete, filter and delete from browser
- [ ] Day 5 `cd frontend && npm test && npx tsc --noEmit && npm run build` passes
- [ ] Day 6 task-title PATCH validation and persistence work
- [ ] Day 7 edit, save, cancel, focus, and failure states work in the browser
- [ ] Day 8 search and status filters survive reload through the URL
- [ ] Day 9 unit, isolated integration, and browser tests pass
- [ ] Day 10 GitHub sign-in/sign-out and client session Context work; anonymous task API calls return `401`
- [ ] Day 10 I can explain why task ownership still waits for Day 11
- [ ] Day 11 every task query and mutation is scoped by the session owner
- [ ] Day 12 automated tests prove anonymous and cross-user access is blocked
- [ ] Day 13 accessibility checks pass and I can explain measured React memoization
- [ ] Day 14 production HTTPS, OAuth callback, PostgreSQL, and smoke tests work
- [ ] Day 15 release checks, documentation, recovery plan, and system explanation are complete
- [ ] `.env` and `.env.local` are NOT committed
- [ ] Auth and database test secrets are NOT committed
- [ ] I used `reference/frontend-complete/` only after attempting the lesson
- [ ] `git status` clean after commit

## Known limits

This is a teaching repo. The starting app lacks production-grade request
limits and production hardening beyond the documented course scope. Days
11–15 add owner authorization, security tests, accessibility, deployment, and
release checks. The local UI and API both run on port 3000; PostgreSQL
connection settings live in `frontend/.env.local`.
