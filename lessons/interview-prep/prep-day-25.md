# Prep Day 25 — Consolidate, verify, and stop on time

**Date:** Wednesday, December 23, 2026  
**Time:** 7 study hours plus breaks  
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.  
**Goal:** Consolidate, verify, and stop on time.

[Prep Day 24](prep-day-24.md) · [Preparation plan](../../docs/FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](README.md)

**Everything to read today is below.** The original
[acceptance checklist](../../CHECKLIST.md),
[interview index](../../docs/INTERVIEW_INDEX.md), [App Day 15](../day-15.md),
and [DSA Day 25](../../dsa-python/lessons/dsa-day-25.md) remain available for
comparison. This is the **final** prep day: no new features and no new topics.
You solve Coin Change, run the existing verification commands and one
critical demo, and write four one-page recall sheets. The slice rebuild was
Prep Day 23 and the full mock was Prep Day 24. Fix only a blocker that would
break the demo, then stop on time.

## Learning objectives

- retrieve core frontend concepts calmly from short prompts;
- verify the MiniTrack demo path and its failure boundary without touching secrets;
- produce one-page FE, BE, DSA, and system-design recall sheets;
- solve DSA Day 25 using the unbounded knapsack dynamic programming pattern;
- record the result in your rough notebook and explain it without reading.

## 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **unbounded knapsack dynamic programming** pattern?

Use this format:

```md
## Wednesday, December 23, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

## 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Retrieving core concepts calmly:** Use short prompts to recall rendering, state, effects, Context, accessibility, and performance. Correct one gap, then move on instead of opening a new topic.

**Backend focus — Verifying the demo path:** Run the important checks and one critical user journey. Confirm configuration instructions without exposing or changing secrets.

**Today's connection:** The final day protects reliable recall, a working demo, and enough rest to use what you learned.

### Today's time box

| Block | Time | Stop rule |
|---|---|---|
| Notebook recall | 45 min | Stop at the timer even if incomplete |
| Coin Change | 1 h 45 min | Reveal the solution at 25 min if blocked |
| Frontend recall prompts | 1 h 30 min | One correction per gap, then move on |
| Verification and demo | 1 h 30 min | Fix only demo-breaking blockers |
| Recall sheets | 1 h | One page each; no new topics |
| Finish | — | Commit, close the laptop, rest |

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 25: unbounded knapsack dynamic programming"]
  DSA --> FE["Frontend: Retrieving core concepts calmly"]
  FE --> BE["Backend: Verifying the demo path"]
  BE --> App["MiniTrack: Consolidate, verify, and stop on time"]
  App --> Explain["Explain, test, and record gaps"]
```

## 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-25.py`](../../dsa-python/practice/day-25.py)  
**Pattern:** unbounded knapsack dynamic programming

### Problem: Coin Change

Given coin values `coins` and a target `amount`, return the **fewest** coins
that add up to exactly `amount`. You may use each coin value as many times as
you like. Return `-1` if the amount cannot be made.

Assumptions: `amount` is a whole number `>= 0`; coin values are whole numbers;
any coin that is `0` or negative is ignored.

```python
solve([1, 2, 5], 11)  # 3   (5 + 5 + 1)
solve([2], 3)         # -1  (odd amount from only 2s)
solve([1], 0)         # 0   (no coins needed)
```

Do **not** simply take the largest coin first. With coins `[1, 3, 4]` and
amount `6`, “largest first” picks `4 + 1 + 1` (3 coins), but `3 + 3` uses only
2.

### Start coding

In the practice file, replace the `raise NotImplementedError` line with your
own implementation. This is the starting shape:

```python
def solve(coins, amount):
    # Return the fewest coins that make amount, or -1 if impossible.
    raise NotImplementedError
```

Python helpers you will use:

- `[0] + [7] * 6` builds a list: `[0, 7, 7, 7, 7, 7, 7]`. Multiplying a list
  repeats it; `+` joins two lists.
- `dp[total]` will mean “fewest coins to make `total`”. `dp[0]` is `0`.
- An **impossible marker** is a value larger than any real answer. With
  positive whole-number coins, a real answer never uses more than `amount`
  coins, so `amount + 1` works as “not reachable yet”.
- `min(a, b)` returns the smaller value.

```mermaid
flowchart TD
  Start["dp = [0] + [amount + 1] * amount"] --> Total{Next total from 1 to amount?}
  Total -- Yes --> Coin{Next coin?}
  Coin -- "coin > 0 and coin <= total" --> Try["dp[total] = min(dp[total], dp[total - coin] + 1)"]
  Try --> Coin
  Coin -- "skip or no more coins" --> Total
  Total -- No --> Answer{"dp[amount] still amount + 1?"}
  Answer -- Yes --> Neg["Return -1"]
  Answer -- No --> Ret["Return dp[amount]"]
```

### Invariant to say aloud

Build the minimum coins for every smaller amount and allow each positive coin to be reused.

Concretely: when the loop reaches `total`, every `dp[t]` with `t < total` is
already the true minimum (or the impossible marker), so
`dp[total - coin] + 1` is the best plan whose **last** coin is `coin`.

### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 25
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** the day-specific checker accepts your implementation
for `([1, 2, 5], 11) → 3`, `([2], 3) → -1`, and `([1], 0) → 0`, and the
completed reference suite still passes. Those examples do not include the
greedy trap, so add the checks below.

You can also temporarily add these checks below your `solve` function in the
practice file, then run `python3 dsa-python/practice/day-25.py`:

```python
if __name__ == '__main__':
    assert solve([1, 2, 5], 11) == 3
    assert solve([2], 3) == -1
    assert solve([1], 0) == 0
    assert solve([1, 3, 4], 6) == 2   # greedy would give 3
    assert solve([2, 5], 3) == -1
    assert solve([5], 5) == 1
    assert solve([0, 2], 4) == 2      # the 0 coin is ignored
    assert solve([], 0) == 0
    assert solve([], 3) == -1
    print('All checks passed')
```

### Brute-force code — reveal after attempting

<details>
<summary>Show the simple recursive solution</summary>

```python
def solve(coins, amount):
    # fewest(remaining) tries every coin as the next coin.
    def fewest(remaining):
        if remaining == 0:
            return 0
        best = None
        for coin in coins:
            if coin > 0 and coin <= remaining:
                sub = fewest(remaining - coin)
                if sub != -1 and (best is None or sub + 1 < best):
                    best = sub + 1
        return -1 if best is None else best

    return fewest(amount)
```

</details>

`None` means “no plan found yet”. This explores every sequence of coins, so
with `k` coin values and amount `A` it can make about `k^A` calls —
exponential. The recursion stack can be `A` deep. It recomputes the same
`remaining` values over and over, which is exactly what the dp list removes.

### Optimized code — reveal after attempting

<details>
<summary>Show the Coin Change solution</summary>

```python
def solve(coins, amount):
    impossible = amount + 1  # Larger than any real answer.
    dp = [0] + [impossible] * amount  # dp[t] = fewest coins to make t
    for total in range(1, amount + 1):
        for coin in coins:
            # Ignore non-positive coins and coins larger than this total.
            if coin > 0 and coin <= total:
                # Use this coin last, on top of the best plan for total - coin.
                dp[total] = min(dp[total], dp[total - coin] + 1)
    return -1 if dp[amount] == impossible else dp[amount]
```

</details>

Each `dp[total]` is filled once from smaller totals, so the same coin can be
reused any number of times (that is what “unbounded” means). Time is
O(amount × number of coins); extra space is O(amount).

Trace for `coins = [1, 3, 4]`, `amount = 6` (`impossible = 7`):

| `total` | Try coin 1 | Try coin 3 | Try coin 4 | `dp[total]` |
|---:|---|---|---|---:|
| 0 | — | — | — | 0 |
| 1 | `dp[0] + 1 = 1` | too big | too big | 1 |
| 2 | `dp[1] + 1 = 2` | too big | too big | 2 |
| 3 | `dp[2] + 1 = 3` | `dp[0] + 1 = 1` | too big | 1 |
| 4 | `dp[3] + 1 = 2` | `dp[1] + 1 = 2` | `dp[0] + 1 = 1` | 1 |
| 5 | `dp[4] + 1 = 2` | `dp[2] + 1 = 3` | `dp[1] + 1 = 2` | 2 |
| 6 | `dp[5] + 1 = 3` | `dp[3] + 1 = 2` | `dp[2] + 1 = 3` | **2** |

### DSA interview questions and answers

#### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “I recursively try every coin as the next coin,
solve the smaller remaining amount, and keep the smallest result plus one. If
no coin leads to zero, the answer is −1. It is correct but exponential,
because the same remaining amounts are solved many times.”

**Example:** For `[1, 2, 5]` and `11`, the remaining amount `6` is reached by
`5 + …`, `2 + 2 + 1 + …`, `1 + 2 + 2 + …`, and many other paths.

**Follow-up:** Memoizing `fewest(remaining)` gives O(amount × coins) time
top-down, but the recursion can still be `amount` deep and hit Python's
recursion limit; the bottom-up list avoids that.

#### DSA Q2. What is the core idea of the dp solution?

**Interview-ready answer:** “dp[t] is the fewest coins to make t. Any optimal
plan for t ends with some coin c, and the rest is an optimal plan for t − c.
So dp[t] = 1 + the minimum of dp[t − c] over all usable coins. I fill dp from
0 up to amount.”

**Example:** `dp[6] = 1 + min(dp[5], dp[3], dp[2]) = 1 + min(2, 1, 2) = 2`
for coins `[1, 3, 4]`.

**Follow-up:** Because each total looks back at **any** smaller total, the
same coin can appear many times. In 0/1 knapsack, where each item can be used
once, the loop order changes so an item cannot be reused.

#### DSA Q3. Why is greedy (largest coin first) unsafe?

**Interview-ready answer:** “Greedy only works for special coin systems like
1, 5, 10, 25. For arbitrary coins, taking the largest coin can block a better
combination. Dynamic programming checks every possible last coin, so it never
commits early.”

**Example:** Coins `[1, 3, 4]`, amount `6`: greedy takes `4`, then `1`, `1`
→ 3 coins. dp finds `3 + 3` → 2 coins. With `[2, 5]` and `6`, greedy takes
`5` and gets stuck at `1`, although `2 + 2 + 2` works.

**Follow-up:** Proving greedy correct needs a property of the specific coin
system (an exchange argument). In an interview, give a counterexample rather
than claiming greedy is “usually fine”.

#### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “O(amount × number of coins) time, because for
each total I try every coin, and O(amount) space for the dp list.”

**Example:** `amount = 10,000` with 3 coins is about 30,000 checks.

**Follow-up:** This is **pseudo-polynomial**: it depends on the numeric value
of `amount`, not the number of digits used to write it. An amount of
10⁹ would need a billion-entry list, which is too much memory.

#### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “Amount 0 returns 0; an unreachable amount
returns −1; an empty coin list; a coin larger than the amount; a zero coin;
and a greedy-trap case like [1, 3, 4] with 6.”

**Example:** `solve([], 0) == 0`, `solve([], 3) == -1`,
`solve([0, 2], 4) == 2`.

**Follow-up:** Ask whether a negative amount is possible; this solution
assumes `amount >= 0` and does not validate it. Duplicate coin values only
repeat work and do not change the answer.

#### DSA Q6. What if you must count the number of ways instead?

**Interview-ready answer:** “That is Coin Change II. ways[0] is 1, and I loop
over **coins first**, then totals, adding ways[total − coin]. Putting coins in
the outer loop counts combinations, so 1 + 2 and 2 + 1 are counted once.”

**Example:**

```python
def count_ways(coins, amount):
    ways = [1] + [0] * amount
    for coin in coins:
        for total in range(coin, amount + 1):
            ways[total] += ways[total - coin]
    return ways[amount]

count_ways([1, 2, 5], 5)  # 4: 5, 2+2+1, 2+1+1+1, 1+1+1+1+1
```

**Follow-up:** Swapping the loops (totals outer, coins inner) counts ordered
sequences instead, which is a different question. Clarify which one the
interviewer wants. (This sketch assumes positive coins.)

## 4. Frontend guided study (1 hour 30 minutes)

### What

Use short prompts to recall rendering, state, effects, Context, accessibility, and performance. Correct one gap, then move on instead of opening a new topic.

### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.
Calm recall of these six ideas covers most frontend interview questions about
MiniTrack.

### How — answer aloud, then reveal

For each prompt: say the answer in under 60 seconds, then open the model
answer. Mark ✅ or ❌ in your notebook. For each ❌, write one corrected
sentence and move on.

<details>
<summary>1. Rendering — Which MiniTrack code runs on the server, and which in the browser?</summary>

`frontend/app/page.tsx` is a **Server Component**: it calls `listTasks()`
(later owner-scoped) directly through `pg`, so the database credentials never
reach the browser and there is no HTTP request back to its own app.
`frontend/app/TaskBoard.tsx` starts with `'use client'`, so it can use state
and event handlers. With Cache Components, the database read sits in a
request-time subtree:

```tsx
async function TaskContent() {
  await io(); // Exclude the database work from the static shell.
  // ... listTasks(), then <TaskBoard tasks={tasks} />
}

<Suspense fallback={<p>Loading tasks...</p>}>
  <TaskContent />
</Suspense>
```

Do not use the older `dynamic = 'force-dynamic'` setting.

</details>

<details>
<summary>2. State — What does a state setter do, and why is the input “controlled”?</summary>

A setter requests a **future** render; inside the current handler the
variable keeps this render's snapshot. A controlled input gets its value from
state and updates it on change:

```tsx
<input value={title} onChange={event => setTitle(event.target.value)} />
```

When the next value depends on the previous one, use the functional form:
`setCount(current => current + 1)`.

</details>

<details>
<summary>3. Derived data — Why is the filtered list not stored in state?</summary>

`visibleTasks` is calculated from `tasks` and `filter` during render. Storing
it separately would create two sources of truth that must be kept in sync.

```tsx
let visibleTasks = tasks;
if (filter === 'open') visibleTasks = tasks.filter(task => !task.done);
if (filter === 'done') visibleTasks = tasks.filter(task => task.done);
```

</details>

<details>
<summary>4. Effects — Why is focusing the edit input an effect, but filtering is not?</summary>

Focus is an operation on the browser DOM, outside React, so it belongs in an
effect that runs after the input is committed:

```ts
useEffect(() => {
  if (editingId) {
    editInputRef.current?.focus();
    editInputRef.current?.select();
  }
}, [editingId]);
```

`useRef` holds the input element without causing a rerender. Filtering is a
pure calculation, so it runs during render instead.

</details>

<details>
<summary>5. Context — What does <code>SessionProvider</code> give you, and what can it not do?</summary>

It shares the server-verified session with Client Components (for example
`useSession()` to show “Signed in as …”) without passing props through every
level. It is **not** an authorization boundary: hiding a button does not stop
a direct HTTP request. Every task Route Handler still calls `auth()` and
returns `401` without a session, and SQL still includes `owner_id`.

</details>

<details>
<summary>6. Accessibility — Which MiniTrack details make it usable without a mouse or screen?</summary>

Native controls (`<form>`, `<button>`, `<input type="checkbox">`, `<select>`)
give keyboard support for free. Every control has a name
(``aria-label={`Complete ${task.title}`}`` or a `<label>`). Errors use
`role="alert"` so screen readers announce them. Focus moves deliberately to
the edit input. Layout stacks on narrow screens (`flex-col sm:flex-row`).
Automated tools find some issues, but keyboard and screen-reader checks are
still needed.

</details>

<details>
<summary>7. Performance — How do <code>useMemo</code>, <code>useCallback</code>, and <code>React.memo</code> differ?</summary>

`useMemo` caches a computed **value**, `useCallback` caches a **function
reference**, and `React.memo` skips re-rendering a component when its props
are shallowly equal. Use them only when the React Profiler shows a real cost:

```tsx
const counts = useMemo(() => ({
  open: tasks.filter(task => !task.done).length,
  done: tasks.filter(task => task.done).length,
}), [tasks]);
```

A refreshed server result creates new task objects, so memoization cannot
prevent every row render.

</details>

<details>
<summary>8. Keys — Why <code>key={task.id}</code> and not the array index?</summary>

Keys let React match items between renders. The database ID follows the same
task through add, delete, filter, and reorder; an index only describes the
current position, so local state or focus could jump to the wrong row after a
deletion.

</details>

## 5. Backend guided study (1 hour 30 minutes)

### What

Run the important checks and one critical user journey. Confirm configuration instructions without exposing or changing secrets.

### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

### Confirm configuration by name only

Open `frontend/.env.local` **only** to confirm that these names exist. Do not
print, copy, or change their values:

| Name | Purpose |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string (server only) |
| `AUTH_SECRET` | Signs the session cookie |
| `AUTH_GITHUB_ID` | GitHub OAuth app ID |
| `AUTH_GITHUB_SECRET` | GitHub OAuth secret |

The shape (placeholders only — never commit real values):

```bash
DATABASE_URL=postgres://YOUR_DB_USER:YOUR_DB_PASSWORD@localhost:5432/minitrack
AUTH_SECRET=YOUR_AUTH_SECRET
AUTH_GITHUB_ID=YOUR_GITHUB_CLIENT_ID
AUTH_GITHUB_SECRET=YOUR_GITHUB_CLIENT_SECRET
```

Check that the files are ignored and not staged:

```bash
git check-ignore frontend/.env.local && echo "ignored"
git status --short
```

### Migration order to recite

```bash
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f backend/sql/schema.sql
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f backend/sql/migrations/002-auth-users.sql
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f backend/sql/migrations/003-task-owners.sql
```

Do **not** rerun these today against a database you care about; `003` deletes
unowned sample tasks. Reciting the order is enough.

### API summary to verify

| Route | Authentication | Authorization |
|---|---|---|
| `GET /api/tasks` | Required | Owner-scoped list |
| `POST /api/tasks` | Required | Owner from session |
| `PATCH /api/tasks/:id` | Required | ID and owner predicate |
| `DELETE /api/tasks/:id` | Required | ID and owner predicate |

## 6. MiniTrack implementation (1 hour)

**Milestone source:** Light review, final verification, and travel-ready notes

### Step 1: Coin Change and the greedy explanation

Finish section 3, then explain aloud in one minute why greedy fails for
`[1, 3, 4]` and amount `6` (see DSA Q3).

### Step 2: Run the release gate

From `frontend/` (these are the scripts App Day 9 added and App Day 15 uses):

```bash
npm ci
npm run test:unit
npm run test:integration
npm run test:e2e
npx tsc --noEmit
npm run build
git status --short
```

**Expected observation:** every command passes and `git status --short` shows
no `.env` file, test secret, or generated build output.

If your workspace has not reached Day 9 yet, run the subset that exists:
`npx tsc --noEmit`, `npm run lint`, and `npm run build`. Do not start building
missing tests today.

**Failure checks:**

- A test fails because PostgreSQL is not running → start PostgreSQL; do not
  change code.
- `test:integration` refuses to run against the development database → that
  is the Day 9 safety check working; point `.env.test.local` at the test
  database.
- A real code failure that breaks the demo → fix only that, rerun the gate.
  Anything else goes in your notebook for after the interview.

### Step 3: Walk the critical demo journey

Run `npm run dev` and use two browser profiles (or one normal and one private
window).

As **User A**:

1. Sign in.
2. Create a task.
3. Rename and complete it.
4. Search and filter; copy the URL, reload it, and confirm the same view.
5. Reload and confirm persistence.

As **User B**:

1. Sign in separately.
2. Confirm User A's tasks are absent.
3. In the browser console, try User A's task ID and confirm no data leaks:

```js
await fetch('/api/tasks/USER_A_TASK_ID', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ done: false }),
}).then(r => r.status); // 404
```

Finally, sign out and check that the API is protected:

```bash
curl -i http://localhost:3000/api/tasks   # expect 401
```

**Expected observation:** User A's journey persists, User B gets `404` and
User A's task is unchanged, and the anonymous request gets `401`.

### Step 4: Write four one-page recall sheets

Write each sheet by hand from memory first, then compare with the model and
add only what you missed.

<details>
<summary>Model FE sheet</summary>

- **Server vs Client:** `page.tsx` reads PostgreSQL on the server inside
  `<Suspense>` after `io()`; `TaskBoard.tsx` (`'use client'`) owns events and
  temporary state.
- **State:** controlled input; setters schedule a new render; functional
  updates for previous-state math.
- **Derived data:** `visibleTasks` from `tasks` + `filter`, not extra state.
- **Mutations:** `fetch` → check `response.ok` → `router.refresh()`;
  `busy` disables controls; `error` shows in `role="alert"`.
- **Effects:** only for outside-React work such as focus (`useRef` +
  `useEffect`).
- **Context:** `SessionProvider` shares the session; it is not security.
- **URL state:** search `q` and `status` live in `searchParams`, so they
  survive reload and can be shared.
- **Accessibility:** native controls, labels, `role="alert"`, deliberate
  focus, responsive `sm:` layout.
- **Performance:** measure with the Profiler before `useMemo`,
  `useCallback`, `React.memo`.

</details>

<details>
<summary>Model BE sheet</summary>

- **Route Handlers:** exported `GET`/`POST` in `app/api/tasks/route.ts`,
  `PATCH`/`DELETE` in `app/api/tasks/[id]/route.ts`; `await params`.
- **Order:** `auth()` → validate ID → parse JSON as `unknown` → validate body
  → owner-scoped query → map result to status.
- **Statuses:** `200` read/update, `201` create, `400` bad input, `401` no
  session, `404` missing **or** not yours, `500` generic body + server log.
- **SQL:** `$1` placeholders; `WHERE id = $2 AND owner_id = $3`;
  `RETURNING` avoids a second query; `ILIKE ... ESCAPE '\\'` with escaped
  `%` and `_` for search.
- **Pool:** one shared `pg` pool reuses connections; pool exhaustion queues
  requests.
- **Auth:** Auth.js + GitHub OAuth; owner ID from `session.user.id`, never
  from the request.
- **Migrations:** staged nullable → backfill → verify → `NOT NULL` for real
  data.
- **Tests:** unit, isolated PostgreSQL integration, Playwright; negative
  cross-user tests check the row is unchanged.

</details>

<details>
<summary>Model DSA sheet (patterns from Prep Days 01–25)</summary>

| Day | Problem | Pattern | Key invariant |
|---:|---|---|---|
| 01 | Two Sum | hash map | Check the complement before inserting the current value. |
| 02 | Valid Anagram | frequency counting | Every final count must balance. |
| 03 | Contains Duplicate | set membership | Stop when a value is already in the set. |
| 04 | Best Time to Buy and Sell Stock | one-pass invariant | Track the lowest earlier price and best profit. |
| 05 | Valid Palindrome | two pointers | Move inward, skip ignored characters, compare normalized values. |
| 06 | Two Sum II (Sorted) | two pointers on sorted data | Small sum → move left; large sum → move right. |
| 07 | Longest Substring Without Repeating Characters | sliding window | Move the left edge past a repeat; track the best window. |
| 08 | Minimum Size Subarray Sum | variable sliding window | Expand until valid, then shrink while still valid. |
| 09 | Valid Parentheses | stack | A closer must match the most recent unmatched opener. |
| 10 | Daily Temperatures | monotonic stack | Keep a decreasing stack; a warmer day resolves the top. |
| 11 | Binary Search | binary search | The interval always contains the target if it exists. |
| 12 | Search in Rotated Sorted Array | rotated binary search | One half is sorted; use its bounds to choose. |
| 13 | Reverse Linked List | pointer reversal | Save `next` before reversing the pointer. |
| 14 | Linked List Cycle | fast and slow pointers | In a cycle, fast eventually meets slow. |
| 15 | Merge Two Sorted Lists | dummy-node merge | Append the smaller node; advance only that list. |
| 16 | Maximum Depth of Binary Tree | recursive DFS | Depth = 1 + max(left, right); empty = 0. |
| 17 | Level Order Traversal | BFS | Measure the queue length before each level. |
| 18 | Validate BST | DFS with bounds | Every node is strictly inside inherited bounds. |
| 19 | Kth Largest Element | heap selection | A size-k min-heap keeps the k largest. |
| 20 | Top K Frequent Elements | counting + heap | Count first, then select k by frequency. |
| 21 | Number of Islands | grid DFS | Mark each land cell seen once; explore neighbours. |
| 22 | Course Schedule | topological sort | Processing every node proves there is no cycle. |
| 23 | Climbing Stairs | 1D dynamic programming | ways(i) = ways(i−1) + ways(i−2); ways(0) = 1. |
| 24 | House Robber | dp state compression | max(skip, take + best two back). |
| 25 | Coin Change | unbounded knapsack dp | dp[t] = 1 + min dp[t − coin]; −1 if unreachable. |

Interview routine: restate → constraints → brute force + cost → invariant →
code → test edge cases → complexity with caveats.

</details>

<details>
<summary>Model system-design sheet</summary>

- **Shape:** one stateless Next.js app (UI + Route Handlers) → `pg` pool →
  PostgreSQL; Auth.js with GitHub OAuth.
- **Data model:** `tasks (id, owner_id → users.id, title, done, created_at)`,
  index `(owner_id, id)`.
- **Scale reads:** measure with `EXPLAIN ANALYZE`; keyset pagination; trigram
  index for `ILIKE` search if measured; horizontal app instances; pool sizing
  or PgBouncer; read replicas later (lag).
- **Correctness:** owner predicate in every query; idempotency key for
  retried POST; `version` column for lost updates (`409`).
- **Caching:** private per-user data; never cache session output as shared;
  invalidate on mutation; only after measurement.
- **Operations:** secrets in the host's secret manager; reviewed migrations
  with a backup; app rollback differs from database recovery; privacy-safe
  logs with request IDs; smoke test after deploy.
- **Known limits:** no sharing/teams, no pagination, no version column, basic
  rate limiting and monitoring, one OAuth provider.

</details>

### Acceptance checklist to tick (from `CHECKLIST.md`)

Tick only what you verified today or earlier. An unticked box is an honest
answer, not a reason to start a new build today.

- [ ] Day 5 create, complete, filter and delete from browser
- [ ] Day 6 task-title PATCH validation and persistence work
- [ ] Day 7 edit, save, cancel, focus, and failure states work in the browser
- [ ] Day 8 search and status filters survive reload through the URL
- [ ] Day 9 unit, isolated integration, and browser tests pass
- [ ] Day 10 GitHub sign-in/sign-out and client session Context work; anonymous task API calls return `401`
- [ ] Day 11 every task query and mutation is scoped by the session owner
- [ ] Day 12 automated tests prove anonymous and cross-user access is blocked
- [ ] Day 13 accessibility checks pass and I can explain measured React memoization
- [ ] Day 14 production HTTPS, OAuth callback, PostgreSQL, and smoke tests work
- [ ] Day 15 release checks, documentation, recovery plan, and system explanation are complete
- [ ] `.env` and `.env.local` are NOT committed
- [ ] Auth and database test secrets are NOT committed
- [ ] `git status` clean after commit

## 7. Trace the event or request

```mermaid
sequenceDiagram
  participant A as User A browser
  participant B as User B browser
  participant N as Next.js Route Handlers
  participant S as Auth.js auth()
  participant P as PostgreSQL
  A->>N: POST /api/tasks {"title":"Demo task"}
  N->>S: auth()
  S-->>N: owner "7"
  N->>P: INSERT INTO tasks (owner_id, title) VALUES ($1, $2)
  P-->>N: id 42
  N-->>A: 201 task JSON, then router.refresh()
  B->>N: PATCH /api/tasks/42 {"done":false}
  N->>S: auth()
  S-->>N: owner "9"
  N->>P: UPDATE ... WHERE id=42 AND owner_id=9
  P-->>N: 0 rows
  N-->>B: 404 Task not found (task 42 unchanged)
  Note over A,N: After sign-out
  A->>N: GET /api/tasks (no session)
  N-->>A: 401 Unauthorized
```

Trace one concrete input: task `42` created by owner `7`, attacked by owner
`9`. Name every boundary, value, and possible failure.

## 8. Deliberate debugging exercise (25 minutes)

**Break it:** Start a large new framework or infrastructure topic.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** The final day becomes fragmented and weakens recall and rest.

**Root cause:** Novelty was prioritized over consolidation.

**Restore and verify:** Return to existing evidence, fix only a critical blocker, and finish travel preparation.

**Try it as a thought experiment, not in code:** write down the new topic you
are tempted to start (for example, “add Redis caching”). Next to it, write the
recall-sheet line it would replace and the demo step it would put at risk.
Then cross it out and add it to an “after the interview” list.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

## 9. Interview questions and answers (30 minutes)

### Q1. How do you retrieve core frontend concepts calmly?

**Interview-ready answer:** “I anchor each concept to one place in my own
code. Rendering is `page.tsx` on the server and `TaskBoard.tsx` in the
browser; state is the controlled title input; derived data is `visibleTasks`;
effects are only for focus; Context shares the session but does not secure
anything; accessibility is native controls and `role="alert"`; performance
optimizations come after measurement.”

**Example:** Asked “When would you use `useEffect`?”, I answer: “To sync with
something outside React — in MiniTrack, focusing the edit input after
`editingId` changes. Filtering is not an effect; it is calculated during
render.”

**Senior follow-up:** If a concept is shaky, I say what I know precisely and
what I would check, rather than guessing. For example: “`React.memo` compares
props shallowly; I would confirm with the Profiler whether it helps here.”

### Q2. How do you verify the demo path?

**Interview-ready answer:** “I run the release gate — unit, integration, and
end-to-end tests, type checking, and a production build — then walk one
critical journey as two users and once signed out. I check configuration by
variable name only and confirm no secret is staged.”

**Example:** User A creates task `42`; User B's `PATCH /api/tasks/42` returns
`404` and the row is unchanged; signed out, `curl -i
http://localhost:3000/api/tasks` returns `401`.

**Senior follow-up:** If PostgreSQL is down during the demo, the API returns a
generic `500` and the page shows `Could not load tasks` — the server log has
the detail, but never `DATABASE_URL` or task contents. `npm run build` proves
compilation, not that secrets, OAuth callbacks, or the database work, so the
journey is still required.

### Q3. What invariant makes the unbounded knapsack dynamic programming solution correct?

**Interview-ready answer:** Build the minimum coins for every smaller amount and allow each positive coin to be reused. When computing `dp[total]`, every smaller `dp` is already optimal, so `dp[total - coin] + 1` is the best plan ending with that coin, and the minimum over coins is the answer.

**Example:** For `[1, 3, 4]` and `6`, `dp` becomes `[0, 1, 2, 1, 1, 2, 2]`,
so the answer is `2` (`3 + 3`), while greedy gives `3`.

**Senior follow-up:** O(amount × coins) time and O(amount) space are
pseudo-polynomial; a huge amount makes the list impractical. Counting ways is a
different recurrence where loop order decides combinations versus
permutations.

### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** “The last day protects what makes the system
explainable: a passing release gate, a demo that proves persistence and
isolation, and recall sheets that let me answer calmly. I deliberately do not
add features the day before an interview.”

**Example:** My demo starts with User A adding a task and ends with User B
getting `404` on that task's ID and a signed-out `401` — the same story as the
Day 15 acceptance journey.

**Senior follow-up:** The first signal I would watch in production is the
rate of `5xx` responses and `pg` pool wait time; the first security risk to
re-test after any change is the owner predicate, which is why the cross-user
integration test exists.

## 10. Complexity and operational cost

- **DSA:** O(amount * number of coins) time and O(amount) space.
- **Application:** The last day's scarce resource is attention. Consolidation has higher expected interview value than low-retention new coverage.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

## Exit checklist

- [ ] I completed DSA Day 25 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 25: consolidate, verify, and stop on time`
