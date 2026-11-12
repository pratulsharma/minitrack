# Day 3 — PostgreSQL, parameterized SQL and connection pools

**90 min:** 20 SQL/setup / 35 backend / 20 queries / 15 interview.

## Outcome
Tasks survive a Node restart. You can explain why `pg.Pool` and `$1` parameters matter.

## Why a database?

Day 2's array disappears when the process ends. PostgreSQL stores rows durably and allows multiple requests to query the same dataset. We deliberately avoid an ORM so you can see the SQL.

## Install and initialize PostgreSQL

On a Mac with Homebrew, one option (skip if already installed):

```bash
brew install postgresql@17
brew services start postgresql@17
createdb minitrack
psql -d minitrack -f backend/sql/schema.sql
```

If `createdb` or `psql` is not found, add the installed PostgreSQL `bin` directory to your PATH. If your role requires credentials, use `-U` and `-h` or a connection URL. On any Postgres install, the goal is just database `minitrack` and table `tasks`.

Verify:

```sql
SELECT id, title, done FROM tasks ORDER BY id;
SELECT COUNT(*) FROM tasks;
```

## Study the SQL

```sql
CREATE TABLE tasks (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  done BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
-- Our actual schema also has a short title length constraint.
```

**Why identity / boolean / timestamp?** PostgreSQL owns unique numeric IDs; boolean represents completion; timestamptz captures a real instant with timezone-aware semantics.

## Run backend reference

```bash
cd backend
cp .env.example .env
# Edit DATABASE_URL to match your Postgres account.
npm install
npm run dev
```

Read `src/db.js`, `src/tasks.js` and `src/server.js`. Trace: request → parse → SQL → result → JSON.

```bash
curl http://localhost:3001/tasks
curl -i -X POST http://localhost:3001/tasks   -H 'Content-Type: application/json' -d '{"title":"Practice SELECT and INSERT"}'
```

Restart Node and repeat GET. The task persists. **Do not rerun the schema to reset data**; it intentionally doesn't delete rows.

## SQL exercises

Try in `psql`:

```sql
SELECT * FROM tasks WHERE done = FALSE ORDER BY id;
UPDATE tasks SET done = TRUE WHERE id = 1 RETURNING *;
SELECT COUNT(*) FROM tasks WHERE done = FALSE;
```

**Do not concatenate user input into SQL.** `pool.query('... WHERE id = $1', [id])` is parameterized; string interpolation can enable SQL injection.

## Tricky interview drill

1. **Why PostgreSQL instead of an array?** Durable shared storage, transactions, SQL querying, indexes, and concurrency controls.
2. **Why a connection pool?** Reuse costly DB connections and bound concurrency; requests may wait when pool is full.
3. **Why `RETURNING`?** Get inserted/updated row from same statement, eliminating a separate lookup.
4. **Why use placeholders?** Separate SQL code from user data and prevent injection.
5. **Does PRIMARY KEY guarantee distinct values?** Yes within table, enforced by DB uniqueness; sequences used for identity can have gaps.
6. **What if DB is down?** `pool.query` rejects; backend catches and returns 500; a real system adds observability/recovery.
7. **BIGINT vs JS Number?** JavaScript integers lose precision above `Number.MAX_SAFE_INTEGER`; `pg` normally returns BIGINT as strings.

## Exit checklist

- [ ] Table exists.
- [ ] POST creates a DB row.
- [ ] GET after restarting Node still shows created row.
- [ ] I can explain `$1` and `pool`.

**Commit:** `git add . && git commit -m "day3: persist tasks in PostgreSQL"`
