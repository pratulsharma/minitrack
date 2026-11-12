# Week 1 acceptance checklist

- [ ] Day 1 `node checkpoints/day1/server.cjs` works (stop before Day 2)
- [ ] Day 2 `node checkpoints/day2/server.cjs` supports POST (stop before Day 3)
- [ ] Day 3 `psql -d minitrack -f backend/sql/schema.sql` succeeds
- [ ] Day 3 `cd backend && npm install && npm run dev` starts after setting DATABASE_URL
- [ ] Day 3 `cd backend && npm test` passes
- [ ] Day 4 `cd frontend && npm install && npm run dev` starts
- [ ] Day 5 create, complete, filter and delete from browser
- [ ] `.env` and `.env.local` are NOT committed
- [ ] `git status` clean after commit

## Known limits

This is a teaching repo. It lacks auth, production-grade request limits, and integration test infrastructure. On local demos, API and frontend ports must be exactly 3001/3000 unless env files are updated.
