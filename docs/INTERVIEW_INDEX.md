# MiniTrack Days 1–15 interview concept index

| Concept | Where to study | Question to explain aloud |
|---|---|---|
| Call stack | `lessons/day-01.md`, `exercises/js-predictions.js` | Why does synchronous code print before callbacks? |
| Event loop / microtasks | `lessons/day-01.md`, `exercises/js-predictions.js` | Why does Promise `.then` beat a timer? |
| Node-specific `nextTick` | `lessons/day-02.md` | What is the Node-specific queue nuance? |
| Promise / async-await | `lessons/day-02.md` | What is the difference between awaiting and blocking? |
| Closures | `lessons/day-02.md`, `exercises/js-predictions.js` | What variables does a returned function retain? |
| HTTP / status codes | `checkpoints/day1/server.cjs`, `frontend/app/api/tasks/route.ts` | Why 200 vs. 201 vs. 404? |
| JSON request body stream | `checkpoints/day2/server.cjs`, `frontend/app/api/tasks/route.ts` | How does a Route Handler parse JSON? |
| Next.js Route Handlers | `frontend/app/api/` | How do HTTP methods map to exported functions? |
| SQL injection / placeholders | `frontend/lib/tasks.ts`, `lessons/day-03.md` | Why `$1` instead of concatenating values? |
| Connection pooling | `frontend/lib/db.ts` | Why reuse connections? What if pool exhausted? |
| Server vs Client Component | `frontend/app/page.tsx`, `frontend/app/TaskBoard.tsx` | Which code runs on server vs browser? |
| Controlled input / state | `frontend/app/TaskBoard.tsx` | Why not mutate `tasks` array directly? |
| `router.refresh()` | `frontend/app/TaskBoard.tsx` | What happens after mutation? |
| Race conditions | `lessons/day-05.md` | Why disable submit while request is pending? |
| HTTP idempotency | `lessons/day-05.md` | Can retrying POST create duplicates? |
| Partial updates | `lessons/day-06.md` | Why use PATCH and `UPDATE ... RETURNING`? |
| Controlled edit state | `lessons/day-07.md` | Which edit values belong in React state? |
| URL-backed state | `lessons/day-08.md` | Why store shareable filters in the URL? |
| SQL wildcard behavior | `lessons/day-08.md` | Does parameterization escape `%` and `_`? |
| Test pyramid / isolation | `lessons/day-09.md` | Which behavior belongs at each test level? |
| Authentication / authorization | `lessons/day-10.md` | Why does a valid session not prove row access? |
| Server-side access control | `lessons/day-10.md` | Why is hiding a button not protection? |
| Ownership-scoped SQL / IDOR | `lessons/day-11.md` | Why include owner ID in every task predicate? |
| Schema migration safety | `lessons/day-11.md` | How do you add a required owner to existing rows? |
| Authorization test matrix | `lessons/day-12.md` | Why test both the response and unchanged data? |
| Semantic HTML / focus | `lessons/day-13.md` | Why prefer native controls and deliberate focus? |
| Responsive accessibility | `lessons/day-13.md` | What must remain usable beyond visual resizing? |
| Deployment configuration | `lessons/day-14.md` | What differs between build-time and runtime config? |
| Migration rollback | `lessons/day-14.md`, `lessons/day-15.md` | Why is app rollback different from schema recovery? |
| End-to-end system trace | `lessons/day-15.md` | Can I explain one PATCH from browser to PostgreSQL and back? |

**Review method:** look at the question, say your answer aloud, then open referenced code. Note what you got wrong in `docs/MY_NOTES.md`.

## Where the executable explanations live

Each [day lesson](../lessons/day-01.md), including the
[Days 6–15 continuation](../lessons/day-06.md), has flow and timing diagrams,
commented source, and scenario-based Q&A. Review the diagrams first, predict
the behavior, and then open the source file.
