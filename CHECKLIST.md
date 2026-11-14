# Week 1 acceptance checklist

Use the [app build roadmap](docs/APP_BUILD_ROADMAP.md) for the detailed
step-by-step sequence, day-by-day progress tracking, concepts, and interview
questions. Start at Day 1 unless you have already completed it; keep each box
unchecked until that milestone has been completed and verified.

- [ ] Day 1 `node checkpoints/day1/server.cjs` works (stop before Day 2)
- [ ] Day 2 `node checkpoints/day2/server.cjs` supports POST (stop before Day 3)
- [ ] Day 3 `psql -d minitrack -f backend/sql/schema.sql` succeeds
- [ ] Day 3 Next.js Route Handlers connect to PostgreSQL after setting `frontend/.env.local`
- [ ] `cd frontend && npm test && npx tsc --noEmit` passes
- [ ] Day 4 `cd frontend && npm install && npm run dev` starts
- [ ] Day 5 create, complete, filter and delete from browser
- [ ] `.env` and `.env.local` are NOT committed
- [ ] `git status` clean after commit

## Known limits

This is a teaching repo. It lacks auth, production-grade request limits, and integration test infrastructure. The UI and API both run on port 3000; PostgreSQL connection settings live in `frontend/.env.local`.
