# Complete full-stack interview preparation master guide

**Study window:** November 25–December 23, 2026
**Travel date:** December 24, 2026
**Schedule:** 7 hours a day, 6 days a week, with Sundays off
**Starting point:** MiniTrack App Days 1–4 are complete; preparation begins
with the canonical [App Day 5](../lessons/day-05.md).

This is the single-file version of the complete preparation course. It combines
the study system, frontend and backend interview index, Python DSA reference,
and all 25 guided preparation lessons. The smaller individual lessons remain
available under [`lessons/interview-prep/`](../lessons/interview-prep/README.md)
for easier daily navigation.

## How to use this file

1. Work through one preparation day at a time.
2. Write recall notes before reading the lesson.
3. Attempt the DSA problem before opening its solution.
4. Type MiniTrack code in the active learner workspace.
5. Complete the debugging exercise and speak every interview answer aloud.
6. Stop at the exit checklist; do not skip ahead because later lessons assume
   the earlier boundary is understood.

## Table of contents

### Preparation system and references

- [Where to begin](#where-to-begin)
- [What success means](#what-success-means-by-december-23)
- [Daily seven-hour structure](#daily-seven-hour-structure)
- [Notebook method](#notebook-method)
- [DSA method](#dsa-method-for-every-study-day)
- [Full-stack interview concept index](#full-stack-interview-concept-index)
- [Python DSA quick reference](#python-dsa-quick-reference)
- [Slow-day fallback](#slow-day-fallback)
- [Weekly review scorecard](#weekly-review-scorecard)

### Complete daily lessons

1. [Prep Day 01 — Finish add-task from React to PostgreSQL](#prep-day-01)
2. [Prep Day 02 — Complete, delete, and filter tasks](#prep-day-02)
3. [Prep Day 03 — Add safe title editing to the API](#prep-day-03)
4. [Prep Day 04 — Build accessible browser editing](#prep-day-04)
5. [Prep Day 05 — Make search and filters shareable](#prep-day-05)
6. [Prep Day 06 — Implement safe PostgreSQL search](#prep-day-06)
7. [Prep Day 07 — Add focused unit tests](#prep-day-07)
8. [Prep Day 08 — Test database and browser behavior](#prep-day-08)
9. [Prep Day 09 — Add authentication and client session Context](#prep-day-09)
10. [Prep Day 10 — Finish authentication and run the first mock](#prep-day-10)
11. [Prep Day 11 — Migrate from shared tasks to owned tasks](#prep-day-11)
12. [Prep Day 12 — Enforce owner authorization in SQL](#prep-day-12)
13. [Prep Day 13 — Prove authorization with negative tests](#prep-day-13)
14. [Prep Day 14 — Make the complete flow accessible](#prep-day-14)
15. [Prep Day 15 — Measure responsive rendering and memoization](#prep-day-15)
16. [Prep Day 16 — Run the quality gate and a full-stack mock](#prep-day-16)
17. [Prep Day 17 — Deploy with production-safe configuration](#prep-day-17)
18. [Prep Day 18 — Verify release and recovery](#prep-day-18)
19. [Prep Day 19 — Run a frontend interview deep review](#prep-day-19)
20. [Prep Day 20 — Run a backend and PostgreSQL deep review](#prep-day-20)
21. [Prep Day 21 — Design MiniTrack for realistic scale](#prep-day-21)
22. [Prep Day 22 — Complete a four-part mock interview](#prep-day-22)
23. [Prep Day 23 — Rebuild one vertical slice from memory](#prep-day-23)
24. [Prep Day 24 — Run the final mock and project pitch](#prep-day-24)
25. [Prep Day 25 — Consolidate, verify, and stop on time](#prep-day-25)

---

## Where to begin

The rough notes show progress through:

- JavaScript closures, promises, streams, and HTTP basics;
- PostgreSQL schema design, SQL, parameterized queries, and connection pools;
- Next.js Server Components, Suspense, task rendering, and React list keys;
- most of the Day 5 PATCH and DELETE backend work.

Start by finishing the Day 5 Client Component. Do not restart the whole course
unless a short recall exercise shows a real gap.

## What success means by December 23

By the end of this plan, aim to be able to:

- [ ] build and explain MiniTrack from browser event to PostgreSQL and back;
- [ ] explain React state, effects, refs, Context, rendering, and memoization;
- [ ] design and test REST-style APIs with validation and useful status codes;
- [ ] write safe SQL and explain indexes, transactions, pools, and pagination;
- [ ] explain authentication, authorization, accessibility, and deployment;
- [ ] solve 25 representative DSA problems without copying the solution;
- [ ] communicate brute force, optimization, correctness, and complexity aloud;
- [ ] complete two full-stack mocks and several smaller interview drills;
- [ ] draw a practical MiniTrack system design and discuss scaling trade-offs;
- [ ] give a clear 5-minute project walkthrough without relying on notes.

The goal is interview readiness, not perfect completion of every optional
infrastructure topic.

## Daily seven-hour structure

Use the following structure on normal study days. Breaks and meals are outside
the seven study hours.

| Block | Time | Purpose |
|---|---:|---|
| Notebook recall | 45 min | Write what you remember before opening the lesson |
| Python DSA | 1 hr 45 min | Learn one pattern, solve it, test it, explain complexity |
| Frontend | 1 hr 30 min | React, Next.js rendering, browser behavior, accessibility |
| Backend | 1 hr 30 min | API, Node.js, PostgreSQL, auth, testing, deployment |
| MiniTrack integration | 1 hr | Connect the day’s FE and BE ideas in working code |
| Interview explanation | 30 min | Answer questions aloud and record gaps |
| **Total** | **7 hr** | |

Frontend and backend time can be combined into one three-hour project block
when a lesson crosses both layers.

### Use 50/10 focus cycles

For each long block:

1. work for 50 minutes;
2. take a 10-minute break away from the screen;
3. begin the next block by writing the immediate goal in one sentence.

Do not use the break to watch tutorials or browse interview content.

## Notebook method

Use `checkpoints/ROUGH/Notes.md` for rough learning. Do not spend time making it
look polished.

For each concept, write only:

1. **What is it?** One or two simple sentences.
2. **Why do we need it?** The problem it solves.
3. **How does MiniTrack use it?** Point to one real file or request.
4. **What can go wrong?** One bug or failure mode.
5. **Interview answer:** Explain it aloud in 60–90 seconds.

At the end of the day, add:

```md
## YYYY-MM-DD

- Built:
- DSA pattern:
- I can explain:
- Still confusing:
- First task tomorrow:
```

Writing is useful, but avoid copying whole lessons. Close the lesson and
recreate the explanation in your own words.

## DSA method for every study day

Follow one numbered lesson from `dsa-python/lessons/` each study day.

1. **10 min:** Read the problem and state assumptions.
2. **15 min:** Describe the brute-force solution and complexity.
3. **35 min:** Code in `dsa-python/practice/day-NN.py` without the solution.
4. **15 min:** Test empty, smallest, normal, duplicate, and boundary inputs.
5. **15 min:** Compare with the reference and fix the idea, not just the code.
6. **15 min:** Re-code the key part from memory.
7. **15 min:** Explain the invariant and time/space complexity aloud.

If stuck for 25 minutes, take a small hint. Do not spend the entire day blocked
on one problem.

## Full-stack interview concept index


For a calendar-based combination of these app concepts with Python DSA,
debugging, system design, and mock interviews, use the
[25-day guided interview-preparation lessons](../lessons/interview-prep/README.md).

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
| `useRef` / `useEffect` | `lessons/day-07.md` | Why is focus an effect but filtering is not? |
| URL-backed state | `lessons/day-08.md` | Why store shareable filters in the URL? |
| SQL wildcard behavior | `lessons/day-08.md` | Does parameterization escape `%` and `_`? |
| Test pyramid / isolation | `lessons/day-09.md` | Which behavior belongs at each test level? |
| Authentication / authorization | `lessons/day-10.md` | Why does a valid session not prove row access? |
| Context / `SessionProvider` | `lessons/day-10.md` | What can auth Context do, and what can it not secure? |
| Server-side access control | `lessons/day-10.md` | Why is hiding a button not protection? |
| Ownership-scoped SQL / IDOR | `lessons/day-11.md` | Why include owner ID in every task predicate? |
| Schema migration safety | `lessons/day-11.md` | How do you add a required owner to existing rows? |
| Authorization test matrix | `lessons/day-12.md` | Why test both the response and unchanged data? |
| Semantic HTML / focus | `lessons/day-13.md` | Why prefer native controls and deliberate focus? |
| Responsive accessibility | `lessons/day-13.md` | What must remain usable beyond visual resizing? |
| React memoization | `lessons/day-13.md` | How do `useMemo`, `useCallback`, and `React.memo` differ? |
| Deployment configuration | `lessons/day-14.md` | What differs between build-time and runtime config? |
| Migration rollback | `lessons/day-14.md`, `lessons/day-15.md` | Why is app rollback different from schema recovery? |
| End-to-end system trace | `lessons/day-15.md` | Can I explain one PATCH from browser to PostgreSQL and back? |

**Review method:** look at the question, say your answer aloud, then open referenced code. Note what you got wrong in `docs/MY_NOTES.md`.

### Where the executable explanations live

Each [day lesson](../lessons/day-01.md), including the
[Days 6–15 continuation](../lessons/day-06.md), has flow and timing diagrams,
commented source, and scenario-based Q&A. Review the diagrams first, predict
the behavior, and then open the source file.


## Python DSA quick reference


| Pattern | Signal | Key invariant | Common pitfall |
|---|---|---|---|
| Hash map | pairs / frequencies | previously seen keys | duplicate element reuse |
| Two pointers | sorted or palindrome | discard impossible area | off-by-one |
| Sliding window | contiguous segment | valid window | negatives may break monotonicity |
| Monotonic stack | next greater/smaller | unresolved indices | confusing values with indices |
| Binary search | ordered search space | answer remains inside bounds | wrong midpoint boundary |
| Linked list | rearrange nodes | never lose next pointer | node identity vs values |
| Trees | hierarchy | subtree recursion or BFS depth | cross-subtree BST violations |
| Graphs | connectivity / dependency | visited set / indegree | cycles, edge direction |
| DP | optimal substructure | transition from smaller answers | greedy when invalid |
| Backtracking | enumerate choices | restore state after recursion | aliasing shared path |

### Python-specific interview pitfalls

- `list.pop(0)` takes O(n); `collections.deque.popleft()` is O(1).
- `x in list` is O(n); `x in set` is expected O(1).
- A mutable default argument (e.g. `def f(items=[])`) persists across calls.
- `[[0] * cols] * rows` shares nested row objects. Use a comprehension.
- `path.copy()` is needed when storing mutable backtracking paths.
- Slicing (`arr[:]`) and sorting (`sorted`) allocate memory; discuss it.
- Recursive DFS can exceed Python's recursion limit on deep graphs; iterative stacks can be safer.
- `heapq` implements a min-heap; push negatives for a max-heap when appropriate.
- Name the invariant aloud; explain the edge cases before coding.


---

# Complete daily guided lessons

<a id="prep-day-01"></a>

## Prep Day 01 — Finish add-task from React to PostgreSQL

**Date:** Wednesday, November 25, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Finish add-task from React to PostgreSQL.

[Track home](../lessons/interview-prep/README.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Prep Day 02](../lessons/interview-prep/prep-day-02.md)

**Everything to read today is below.** The original [App Day 5](../lessons/day-05.md)
and [DSA Day 01](../dsa-python/lessons/dsa-day-01.md) remain available for
comparison. This prep day covers only adding tasks; completion, deletion, and
filtering belong to Prep Day 02. Write runnable code in the named project and
practice files, not in this Markdown file.

**Transition note:** This day now uses a Client Component and `GET /api/tasks`
to load tasks. Later prep days still use the earlier Server Component and
`router.refresh()` approach and have not yet been converted; their replacement
code is not compatible with this page without further changes.

### Learning objectives

- explain controlled inputs and form submission in beginner-friendly language;
- explain post validation and persistence and its failure boundary;
- implement or verify the listed MiniTrack milestone;
- solve DSA Day 01 using the hash map pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **hash map** pattern?

Use this format:

```md
## Wednesday, November 25, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Controlled inputs and form submission:** React owns a controlled input through its value prop, and onChange updates the state used for the next render. onSubmit handles the form as one user action and preventDefault stops the browser's traditional page navigation.

**Backend focus — POST validation and persistence:** The Route Handler parses untrusted JSON, validates the title, calls the data function, and returns a 201 response. PostgreSQL remains the source of truth; React state holds the temporary input and a displayed copy of the tasks.

**Today's connection:** A browser event becomes validated JSON, a parameterized INSERT, and a 201 response. The browser then requests the updated list through `GET /api/tasks`.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 01: hash map"]
  DSA --> FE["Frontend: Controlled inputs and form submission"]
  FE --> BE["Backend: POST validation and persistence"]
  BE --> App["MiniTrack: Finish add-task from React to PostgreSQL"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-01.py`](../dsa-python/practice/day-01.py)
**Pattern:** hash map

#### Problem: Two Sum

Given a list of numbers and a target, return the indices of two **different**
elements that add up to the target. Return an empty list if no pair exists.
Assume the inputs are integers and any valid pair is acceptable.

```python
solve([2, 7, 11, 15], 9)  # [0, 1]
solve([3, 3], 6)           # [0, 1]
solve([1, 2], 7)           # []
```

The simple approach checks every pair: O(n²) time and O(1) extra space.
For a faster approach, a Python dictionary can remember numbers already seen.
For each number, its **complement** is `target - number`.

#### Start coding

In the practice file, replace the `raise NotImplementedError` line with your
own implementation. This is the starting shape:

```python
def solve(nums, target):
    # Return two different indices, or [] if no pair exists.
    raise NotImplementedError
```

In Python, `enumerate(nums)` gives both the index and value. For example,
`enumerate([2, 7])` produces `(0, 2)` and then `(1, 7)`. A dictionary such as
`{2: 0}` can remember that the value `2` was seen at index `0`.

```mermaid
flowchart TD
  Start[Start with empty dictionary] --> Next[Read index and value]
  Next --> Need[Calculate target minus value]
  Need --> Found{Complement in dictionary?}
  Found -- Yes --> Return[Return earlier index and current index]
  Found -- No --> Save[Save value and current index]
  Save --> More{More values?}
  More -- Yes --> Next
  More -- No --> Empty[Return empty list]
```

#### Invariant to say aloud

Store each visited number by index and check for the needed complement before inserting the current value.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 1
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** the day-specific checker accepts your implementation,
and the completed reference suite still passes. The checker uses exact
expected results for its supplied examples; those examples each have only one
valid pair. Its examples are not a complete test of every possible input.

You can also temporarily add these checks below your `solve` function in the
practice file, then run `python3 dsa-python/practice/day-01.py`:

```python
if __name__ == '__main__':
    assert solve([2, 7, 11, 15], 9) == [0, 1]
    assert solve([3, 3], 6) == [0, 1]
    assert solve([1, 2], 7) == []
    assert solve([], 5) == []
    assert solve([3], 6) == []  # One element cannot be used twice.
    assert solve([-3, 4], 1) == [0, 1]
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple solution</summary>

```python
def solve(nums, target):
    for i in range(len(nums)):
        # Start after i so the two indices are always different.
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []
```

</details>

This compares every possible pair until it finds a match. If there are `n`
numbers, there can be `n × (n - 1) / 2` pairs, so the worst-case time is
O(n²). It uses O(1) extra space.

#### Optimized code — reveal after attempting

<details>
<summary>Show the Two Sum solution</summary>

```python
def solve(nums, target):
    seen = {}  # number -> an earlier index
    for i, value in enumerate(nums):
        complement = target - value
        if complement in seen:
            return [seen[complement], i]  # two different indices
        seen[value] = i
    return []
```

</details>

For `[2, 7]` and target `9`, first store `2: 0`. Next, `9 - 7` is
`2`, which is already in the dictionary, so return `[0, 1]`. Checking before
inserting prevents one element from being used twice. Expected time is O(n)
with average constant-time dictionary operations; extra space is O(n).

| Index | Value | Complement | Dictionary before checking | Action |
|---:|---:|---:|---|---|
| 0 | 2 | 7 | `{}` | Not found; store `{2: 0}` |
| 1 | 7 | 2 | `{2: 0}` | Found; return `[0, 1]` |

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “I compare each number with every number after
it. If their sum equals the target, I return their indices. Otherwise I return
an empty list after checking all pairs. This takes O(n²) time in the worst
case and O(1) extra space.”

**Example:** For `[2, 7, 11]` and target `9`, compare `2 + 7` first and
return `[0, 1]`.

**Follow-up:** Why start the inner loop at `i + 1`? It avoids comparing an
element with itself and checking the same pair twice.

##### DSA Q2. How does a hash map improve the solution?

**Interview-ready answer:** “As I scan the list, I save each number and its
index in a dictionary. For the current number, I calculate the missing number,
or complement, and look it up. If it is already present, I have found a pair.”

**Example:** For target `9` and current value `7`, the complement is `2`.
If the dictionary contains `{2: 0}`, return the earlier index `0` and the
current index `1`.

**Follow-up:** What is the trade-off? The dictionary uses extra memory in
exchange for faster average lookups than checking every pair.

##### DSA Q3. Why check before inserting?

**Interview-ready answer:** “The dictionary contains only values from earlier
indices when I check it. Therefore a match cannot reuse the current element.”

**Example:** With `[3]` and target `6`, checking first finds nothing and
returns `[]`. Inserting `3` first would incorrectly allow index `0` twice.
With `[3, 3]`, the second `3` can correctly match the first.

**Follow-up:** What is an invariant? It is a statement that remains true at a
specific point in each iteration: before checking, `seen` contains only
previously visited values and their indices.

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “The optimized solution takes expected O(n) time
because it scans the list once and dictionary operations are O(1) on average.
It uses O(n) extra space because the dictionary can hold up to n values.”

**Example:** If no pair exists, every number can be added to the dictionary
before the function returns `[]`.

**Follow-up:** Is O(n) time guaranteed in every case? No. Heavy hash
collisions can make individual dictionary operations O(n) in the worst case,
so the overall worst case can be O(n²).

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “I test an empty list, one element, duplicate
values, negative numbers, a pair at the end, and no matching pair. I also
clarify whether there can be multiple valid answers.”

**Example:** `[3, 3]` with target `6` returns `[0, 1]`; `[3]` with target
`6` returns `[]`.

**Follow-up:** What if there are multiple valid pairs? This implementation
returns the first pair it encounters while scanning, not necessarily every
pair or a particular preferred pair. Ask the interviewer which is required.

##### DSA Q6. What changes if the input is sorted?

**Interview-ready answer:** “I can use two pointers, one at each end. If the
sum is too small, I move the left pointer right; if it is too large, I move
the right pointer left. This takes O(n) time and O(1) extra space.”

**Example:** In `[2, 3, 5, 8]` with target `8`, `2 + 8` is too large, so
move the right pointer left. Then `2 + 5` is too small, so move the left
pointer right and find `3 + 5`.

**Follow-up:** Can I sort an unsorted input first? Yes, but sorting costs
O(n log n), and you must preserve original indices if those are required.
Two pointers directly on an already sorted input return indices in that
sorted input.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

React owns a controlled input through its value prop, and onChange updates the state used for the next render. onSubmit handles the form as one user action and preventDefault stops the browser's traditional page navigation.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.

#### How

Before looking at the code in section 6, sketch the component state, user
event, request, success result, and failure result.

Files to open deliberately:

- `frontend/app/page.tsx`
- `frontend/app/api/tasks/route.ts`
- `frontend/lib/tasks.ts`

Answer before coding:

- Which value is persistent, and which value is temporary interaction state?
- What starts this behavior?
- What should the user see while work is pending?
- What should remain unchanged when the operation fails?

### 5. Backend guided study (1 hour 30 minutes)

#### What

The Route Handler parses untrusted JSON, validates the title, calls the data function, and returns a 201 response. PostgreSQL remains the source of truth; React holds the input and a displayed copy of the task list.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

The key existing Day 3 code is shown below for review. Keep any later
functions already present in these files; these excerpts are not replacement
files.

The existing `GET` handler reads tasks on the server and returns JSON:

```ts
export async function GET(): Promise<Response> {
  try {
    return Response.json(await listTasks(), {
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch (error: unknown) {
    console.error('GET /api/tasks failed:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

`listTasks` is imported from `frontend/lib/tasks.ts`. The browser never
connects directly to PostgreSQL; it asks this route for the list.

In `frontend/app/api/tasks/route.ts`, the POST handler validates the request
before saving it:

```ts
export async function POST(request: Request): Promise<Response> {
  let parsingBody = true;
  try {
    const body: unknown = await request.json();
    parsingBody = false;
    const title = normalizeTitle(isRecord(body) ? body.title : undefined);
    if (!title) {
      return Response.json({ error: 'title must be 1–200 characters' }, { status: 400 });
    }
    return Response.json(await createTask(title), { status: 201 });
  } catch (error: unknown) {
    if (parsingBody) {
      return Response.json({ error: 'Invalid JSON' }, { status: 400 });
    }
    console.error('POST /api/tasks failed:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

`parsingBody` starts as `true` and becomes `false` after the JSON is read.
The single `catch` uses it to distinguish invalid JSON (400) from a later
server failure (logged and returned as 500). For example, a database error
still returns 500 even if it is also a `SyntaxError`.

`normalizeTitle` trims a string and accepts 1–200 characters; `isRecord`
checks that the JSON body is an object. Both are imported from
`frontend/lib/validation.ts`. The handler imports `createTask` from
`frontend/lib/tasks.ts`, where the existing function is:

```ts
export async function createTask(title: string): Promise<Task> {
  const result = await getPool().query<TaskRow>(
    'INSERT INTO tasks (title) VALUES ($1) RETURNING id, title, done, created_at',
    [title]
  );
  const row = result.rows[0];
  if (!row) throw new Error('Inserted task was not returned by PostgreSQL');
  return toTask(row);
}
```

`$1` keeps the supplied title separate from SQL syntax. `toTask` converts the
database timestamp to a string for the browser.

### 6. MiniTrack implementation (1 hour)

#### Step 1: Create a client page

First try the steps yourself: load the tasks from `GET /api/tasks`, connect
the input to React state, and send a POST request. Then replace
`frontend/app/page.tsx` with this add-task-only implementation:

```tsx
'use client';

import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react';
import type { Task } from './types';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  const currentLoad = useRef<AbortController | null>(null);

  const loadTasks = useCallback(async () => {
    currentLoad.current?.abort();
    const controller = new AbortController();
    currentLoad.current = controller;
    setLoading(true);
    setLoadError('');

    try {
      const response = await fetch('/api/tasks', {
        cache: 'no-store',
        signal: controller.signal,
      });
      if (controller.signal.aborted) return;
      if (!response.ok) {
        setLoadError(`Could not load tasks (${response.status})`);
        setLoading(false);
        return;
      }

      const data: Task[] = await response.json();
      if (controller.signal.aborted) return;
      setTasks(data);
      setLoading(false);
    } catch {
      if (controller.signal.aborted) return;
      setLoadError('Could not load tasks. Check your connection and try again.');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadTasks();
    return () => currentLoad.current?.abort();
  }, [loadTasks]);

  async function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanTitle = title.trim();
    if (!cleanTitle) {
      setError('Enter a task title.');
      return;
    }

    setBusy(true);
    setError('');
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: cleanTitle }),
      });

      if (!response.ok) {
        setError(`Could not add task (${response.status})`);
        setBusy(false);
        return;
      }

      setTitle('');
      await loadTasks();
      setBusy(false);
    } catch {
      setError('Could not connect to the server');
      setBusy(false);
    }
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-5 py-12">
      <h1 className="text-4xl font-bold">MiniTrack</h1>
      <section className="mt-8">
      <form onSubmit={addTask} className="flex flex-wrap gap-3">
        <label htmlFor="task-title" className="sr-only">Task title</label>
        <input
          id="task-title"
          className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2"
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="What needs doing?"
          maxLength={200}
          disabled={busy || loading}
        />
        <button
          type="submit"
          className="rounded-lg bg-violet-600 px-4 py-2 disabled:opacity-50"
          disabled={busy || loading}
        >
          {busy ? 'Adding...' : 'Add task'}
        </button>
      </form>
      {error && <p role="alert" className="mt-3 text-rose-300">{error}</p>}
      {loading && <p role="status" className="mt-3 text-slate-400">Loading tasks...</p>}
      {loadError && (
        <div role="alert" className="mt-3 text-rose-300">
          <p>{loadError}</p>
          <button type="button" onClick={() => void loadTasks()} disabled={loading}>
            Retry loading tasks
          </button>
        </div>
      )}
      <p className="mt-4 text-slate-400">{tasks.length} tasks</p>
      <ul className="mt-4 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
        {tasks.map(task => (
          <li key={task.id} className="flex gap-3 border-b border-slate-700 px-5 py-4 last:border-b-0">
            <span aria-hidden="true">{task.done ? '✅' : '⬜'}</span>
            <span className={task.done ? 'text-slate-500 line-through' : ''}>
              {task.title}
            </span>
          </li>
        ))}
      </ul>
      </section>
    </main>
  );
}
```

`value` and `onChange` make the input controlled by React. The input remains
available after a failed POST. After success, `loadTasks()` calls GET again
and updates the displayed copy; it does not use `router.refresh()`.

`useEffect` starts the first GET when the page appears. `useCallback` keeps
`loadTasks` stable between renders. An `AbortController` cancels an older GET
when another begins or the page unmounts, preventing an old response from
replacing a newer list. In development, React may run the effect setup and
cleanup an extra time; cancellation makes that safe.

The list has its own loading and error state. If POST succeeds but the
following GET fails, the title is cleared because the task was saved; use
**Retry loading tasks** rather than submitting it again. Disabling controls
reduces duplicate clicks but does not guarantee server-side idempotency.

#### Step 2: Run and verify

With PostgreSQL running and your existing `frontend/.env.local` configured,
run from the repository root:

```bash
cd frontend
npm run lint
npm run dev
```

Open `http://localhost:3000`, add a task, and reload: the task should remain.
Try a blank title and confirm that the page shows an error without adding a
task. Stop PostgreSQL and reload: a loading error and retry button should
appear. Restart PostgreSQL and use the retry button to load the list. In a
separate terminal, check the server's validation:

```bash
curl -i -X POST http://localhost:3000/api/tasks \
  -H 'Content-Type: application/json' -d '{"title":"  "}'
```

Expect HTTP 400. If PostgreSQL is unavailable, the page or request should show
an error instead of pretending the task was saved.

**Expected observation:** the user-visible milestone works, its important
failure path is explicit, and existing behavior remains intact.

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant U as You
  participant B as Client page
  participant A as API route
  participant D as PostgreSQL
  U->>B: Submit a task
  B->>A: POST /api/tasks
  A->>D: INSERT validated title
  D-->>A: Saved task
  A-->>B: 201 Created
  B->>A: GET /api/tasks
  A->>D: Read task list
  D-->>A: Rows
  A-->>B: JSON task list
  B-->>U: Display updated list
```

Trace one concrete input. Name every boundary, value, and possible failure.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Remove event.preventDefault() from the submit handler.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** The browser performs a traditional form navigation and the React flow is interrupted.

**Root cause:** A form submits through the browser by default; React must deliberately take control.

**Restore and verify:** Restore preventDefault(), submit again, and verify the page does not navigate.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

### 9. Interview questions and answers (30 minutes)

#### Q1. What is controlled inputs and form submission?

**Interview-ready answer:** React owns a controlled input through its value prop, and onChange updates the state used for the next render. onSubmit handles the form as one user action and preventDefault stops the browser's traditional page navigation.

**Example:** Use `frontend/app/page.tsx` and point to the state, event, or rendered
behavior involved in today's milestone.

**Senior follow-up:** Explain when this frontend choice would become difficult
to maintain and what measurement or requirement would justify a different
design.

#### Q2. How should the backend handle post validation and persistence?

**Interview-ready answer:** The Route Handler parses untrusted JSON, validates the title, calls the data function, and returns a 201 response. PostgreSQL remains the source of truth; React holds the input and a displayed copy of the task list.

**Example:** Trace the relevant Route Handler or server boundary into the
MiniTrack data function and back to its response.

**Senior follow-up:** Describe the failure mode, logging requirement, and what
must remain private when the dependency is unavailable.

#### Q3. What invariant makes the hash map solution correct?

**Interview-ready answer:** Store each visited number by index and check for the needed complement before inserting the current value.

**Example:** Dry-run the first non-trivial sample from DSA Day 01 and
show the state after each iteration.

**Senior follow-up:** State the assumptions under which the claimed complexity
holds and how changed constraints might require another approach.

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** A browser event becomes validated JSON, a parameterized INSERT, and a 201 response. The client then fetches the latest list from the API.

**Example:** Begin with one user action and finish with the visible result or
verified system state.

**Senior follow-up:** Identify the first bottleneck, security risk, or
operational signal you would measure before adding infrastructure.

### 10. Complexity and operational cost

- **DSA:** O(n) time and O(n) auxiliary space.
- **Application:** Adding a task uses a POST followed by a GET. Rendering the
  returned list takes O(n) work and storing it uses O(n) client space.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 01 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 01: finish add-task from react to postgresql`

<a id="prep-day-02"></a>

## Prep Day 02 — Complete, delete, and filter tasks

**Date:** Thursday, November 26, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Complete, delete, and filter tasks.

[Prep Day 01](../lessons/interview-prep/prep-day-01.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](../lessons/interview-prep/README.md) · [Prep Day 03](../lessons/interview-prep/prep-day-03.md)

**Everything to read today is below.** The original [App Day 5](../lessons/day-05.md)
and [DSA Day 02](../dsa-python/lessons/dsa-day-02.md) remain available for
comparison. This prep day adds completing, deleting, and filtering tasks on top
of Prep Day 01's add-task flow. Renaming a task through the API belongs to Prep
Day 03, and the browser editing UI belongs to Prep Day 04. Write runnable code
in the named project and practice files, not in this Markdown file.

### Learning objectives

- explain event handlers and derived state in beginner-friendly language;
- explain PATCH and DELETE by resource ID and its failure boundary;
- implement or verify the listed MiniTrack milestone;
- solve DSA Day 02 using the frequency counting pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **frequency counting** pattern?

Use this format:

```md
## Thursday, November 26, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Event handlers and derived state:** A checkbox uses onChange, a delete button uses onClick, and visible tasks are derived from task props plus the selected filter. Derived values should not be copied into a second state variable.

**Backend focus — PATCH and DELETE by resource ID:** The dynamic Route Handler validates the path ID, validates the PATCH body, and calls parameterized UPDATE or DELETE functions. Missing tasks return 404 instead of success-shaped data.

**Today's connection:** The task ID travels in the URL, the new value travels in JSON when needed, and router.refresh requests authoritative rows after mutation.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 02: frequency counting"]
  DSA --> FE["Frontend: Event handlers and derived state"]
  FE --> BE["Backend: PATCH and DELETE by resource ID"]
  BE --> App["MiniTrack: Complete, delete, and filter tasks"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-02.py`](../dsa-python/practice/day-02.py)
**Pattern:** frequency counting

#### Problem: Valid Anagram

Given two strings `s` and `t`, return `True` if `t` uses **exactly the same
characters with the same counts** as `s`, in any order. Otherwise return
`False`. Assume the comparison is case-sensitive and every character counts,
including spaces and punctuation.

```python
solve('anagram', 'nagaram')  # True
solve('rat', 'car')          # False
```

Equal length is necessary but not enough: `'aab'` and `'abb'` both have three
letters, but the counts of `a` and `b` differ.

The simple approach removes each character of `s` from a list copy of `t`:
O(n²) time. A faster approach **counts** how many times each character appears
in `s`, then uses up those counts while reading `t`.

#### Start coding

In the practice file, replace the `raise NotImplementedError` line with your
own implementation. This is the starting shape:

```python
def solve(s, t):
    # Return True when t is a rearrangement of s, otherwise False.
    raise NotImplementedError
```

Two Python helpers make counting short:

- A `for ch in s:` loop gives one character at a time: `'abc'` gives `'a'`,
  then `'b'`, then `'c'`.
- `counts.get(ch, 0)` reads the value for key `ch` from the dictionary
  `counts`, or returns `0` if the key is missing. So
  `counts[ch] = counts.get(ch, 0) + 1` means "add one to this character's
  count, starting from zero the first time".

```mermaid
flowchart TD
  Start[Start] --> Len{Same length?}
  Len -- No --> False1[Return False]
  Len -- Yes --> Count[Count every character of s]
  Count --> Next[Read next character of t]
  Next --> Left{Count for it is above zero?}
  Left -- No --> False2[Return False]
  Left -- Yes --> Use[Subtract one from its count]
  Use --> More{More characters in t?}
  More -- Yes --> Next
  More -- No --> True[Return True]
```

#### Invariant to say aloud

Count characters from one string and subtract matches from the other; every final count must balance.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 2
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** the day-specific checker accepts your implementation,
and the completed reference suite still passes. The checker only runs the two
examples above, so it cannot prove that repeated letters or empty strings work.

You can also temporarily add these checks below your `solve` function in the
practice file, then run `python3 dsa-python/practice/day-02.py`:

```python
if __name__ == '__main__':
    assert solve('anagram', 'nagaram') is True
    assert solve('rat', 'car') is False
    assert solve('', '') is True
    assert solve('a', 'ab') is False      # Different lengths.
    assert solve('aab', 'abb') is False   # Same length, different counts.
    assert solve('Aa', 'aA') is True
    assert solve('a', 'A') is False       # Case-sensitive.
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple solution</summary>

```python
def solve(s, t):
    if len(s) != len(t):
        return False
    remaining = list(t)  # A list copy we can remove characters from.
    for ch in s:
        if ch not in remaining:
            return False
        remaining.remove(ch)  # Removes the first matching character.
    return True
```

</details>

For each of the `n` characters in `s`, `ch not in remaining` and
`remaining.remove(ch)` can scan the whole list, so the worst-case time is
O(n²). The list copy uses O(n) extra space. Sorting both strings
(`sorted(s) == sorted(t)`) is a shorter alternative at O(n log n) time.

#### Optimized code — reveal after attempting

<details>
<summary>Show the Valid Anagram solution</summary>

```python
def solve(s, t):
    if len(s) != len(t):
        return False
    counts = {}  # character -> how many unused copies came from s
    for ch in s:
        counts[ch] = counts.get(ch, 0) + 1
    for ch in t:
        # Zero (or missing) means t needs a copy that s did not provide.
        if counts.get(ch, 0) == 0:
            return False
        counts[ch] -= 1
    return True
```

</details>

Because the lengths are equal, `t` cannot finish with any count above zero
unless some other count would have gone below zero first, and that case already
returned `False`. Time is O(n) with average constant-time dictionary
operations; extra space is O(k), where `k` is the number of distinct
characters.

For `s = 'aab'` and `t = 'aba'`, counting `s` gives `{'a': 2, 'b': 1}`:

| Step | Character of `t` | Count before | Action | Dictionary after |
|---:|---|---:|---|---|
| 1 | `a` | 2 | Above zero; subtract one | `{'a': 1, 'b': 1}` |
| 2 | `b` | 1 | Above zero; subtract one | `{'a': 1, 'b': 0}` |
| 3 | `a` | 1 | Above zero; subtract one | `{'a': 0, 'b': 0}` |
| End | — | — | Every count balanced | Return `True` |

With `'rat'` and `'car'`, counting gives `{'r': 1, 'a': 1, 't': 1}`; the
first character of `t` is `c`, whose count is `0`, so return `False`.

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “I first check that the lengths match. Then, for
each character of `s`, I search a copy of `t` and remove one matching
character. If I cannot find one, the strings are not anagrams. Searching and
removing from a list are linear, so this is O(n²) time.”

**Example:** For `'rat'` and `'tar'`, remove `r` → `['t', 'a']`, remove `a`
→ `['t']`, remove `t` → `[]`, so return `True`.

**Follow-up:** Why remove instead of only checking `ch in t`? Checking alone
ignores counts: `'aab'` would wrongly match `'abb'`, because every `a` would
find the same single `a`.

##### DSA Q2. How does frequency counting improve the solution?

**Interview-ready answer:** “I store how many times each character appears in
`s` in a dictionary. Then each character of `t` uses up one count. A dictionary
lookup is O(1) on average, so the whole check is one pass over each string.”

**Example:** `'anagram'` produces `{'a': 3, 'n': 1, 'g': 1, 'r': 1, 'm': 1}`.
Reading `'nagaram'` subtracts each of those counts down to zero.

**Follow-up:** Python's `collections.Counter(s) == Counter(t)` expresses the
same idea in one line. In an interview, show the manual version first so the
interviewer sees you understand what `Counter` does.

##### DSA Q3. Why is the solution correct?

**Interview-ready answer:** “Every count means ‘unused copies of this
character from `s`’. When `t` needs a character whose count is zero, `t` has
more of it than `s`, so I return `False`. If I finish without that happening
and the lengths are equal, every count must be exactly zero.”

**Example:** `'aab'` vs `'abb'`: after `a` and `b`, the counts are
`{'a': 1, 'b': 0}`. The final `b` sees `0`, so return `False`.

**Follow-up:** Why is the early length check needed? Without it, `'ab'` vs
`'a'` would finish the loop with `{'a': 0, 'b': 1}` and wrongly return `True`.

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “Time is O(n) expected, where n is the string
length, because I read each string once and dictionary operations are O(1) on
average. Extra space is O(k) for k distinct characters.”

**Example:** For lowercase English letters, `k` is at most 26, so the extra
space is effectively constant. For arbitrary Unicode text, `k` can grow with
the input.

**Follow-up:** Is O(n) guaranteed? Not strictly: hash collisions can make
dictionary operations slower in the worst case. Sorting gives a guaranteed
O(n log n) bound and is a reasonable trade-off for short strings.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “Empty strings, different lengths, repeated
letters with the same length, uppercase versus lowercase, and spaces or
punctuation. I ask whether case and whitespace should be ignored.”

**Example:** `solve('', '')` is `True`; `solve('a', 'A')` is `False` under
case-sensitive rules; `solve('aab', 'abb')` is `False`.

**Follow-up:** If the interviewer wants `'Dormitory'` and `'dirty room'` to
match, normalize first, for example lowercase both strings and keep only
letters, then run the same count check.

##### DSA Q6. What changes if I must group many words into anagram groups?

**Interview-ready answer:** “I build a key that is the same for every anagram,
such as the sorted word or a tuple of 26 letter counts, and store a dictionary
from key to a list of words.”

**Example:** `['eat', 'tea', 'tan']` produces keys `'aet'`, `'aet'`, and
`'ant'`, so the groups are `[['eat', 'tea'], ['tan']]`.

**Follow-up:** Sorted keys cost O(m log m) per word of length m; a 26-count
tuple key costs O(m) per word but only works for a fixed alphabet.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

A checkbox uses onChange, a delete button uses onClick, and visible tasks are derived from task props plus the selected filter. Derived values should not be copied into a second state variable.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.

#### How

Before looking at the code in section 6, sketch the component state, user
event, request, success result, and failure result.

Three ideas are new today:

1. **Event handlers with an argument.** Each row needs to tell the handler
   *which* task changed. An arrow function captures the row's ID:
   `onClick={() => { void deleteTask(task.id); }}`. `void` says "start this
   async function; I am deliberately not awaiting it here".
2. **Checkbox `onChange`.** For a checkbox, `event.target.checked` is the new
   boolean value. MiniTrack sends that value to the server instead of flipping
   it locally.
3. **Derived state.** The filter (`'all'`, `'open'`, or `'done'`) is real state
   because the user chooses it. The list of visible tasks is *not* state: it is
   calculated from `tasks` and `filter` on every render.

```tsx
// Derived during rendering: no useState, no useEffect.
let visibleTasks = tasks;
if (filter === 'open') {
  visibleTasks = tasks.filter(task => !task.done);
}
if (filter === 'done') {
  visibleTasks = tasks.filter(task => task.done);
}
```

`Array.prototype.filter` returns a **new** array containing only items for
which the callback returns `true`; it does not change `tasks`.

Files to open deliberately:

- `frontend/app/TaskBoard.tsx`
- `frontend/app/api/tasks/[id]/route.ts`
- `frontend/lib/validation.ts`

Answer before coding:

- Which value is persistent, and which value is temporary interaction state?
- What starts this behavior?
- What should the user see while work is pending?
- What should remain unchanged when the operation fails?

### 5. Backend guided study (1 hour 30 minutes)

#### What

The dynamic Route Handler validates the path ID, validates the PATCH body, and calls parameterized UPDATE or DELETE functions. Missing tasks return 404 instead of success-shaped data.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

MiniTrack has no login yet, so today's routes check the first, fourth, fifth,
and sixth items. Authentication arrives in a later prep day.

#### Step 1: Add the database functions

Try writing these two signatures yourself before reading the full file:

```ts
export async function setDone(id: string, done: boolean): Promise<Task | null>
export async function deleteTask(id: string): Promise<boolean>
```

Then replace `frontend/lib/tasks.ts` with this full file. `listTasks` and
`createTask` are unchanged from Prep Day 01; `setDone` and `deleteTask` are new.

```ts
import type { Task } from '../app/types';
import { getPool } from './db';

// PostgreSQL returns created_at as a Date; the browser receives a string.
type TaskRow = Omit<Task, 'created_at'> & { created_at: Date };

function toTask(row: TaskRow): Task {
  return { ...row, created_at: row.created_at.toISOString() };
}

export async function listTasks(): Promise<Task[]> {
  const result = await getPool().query<TaskRow>(
    'SELECT id, title, done, created_at FROM tasks ORDER BY id'
  );
  return result.rows.map(toTask);
}

export async function createTask(title: string): Promise<Task> {
  const result = await getPool().query<TaskRow>(
    'INSERT INTO tasks (title) VALUES ($1) RETURNING id, title, done, created_at',
    [title]
  );
  const row = result.rows[0];
  if (!row) throw new Error('Inserted task was not returned by PostgreSQL');
  return toTask(row);
}

export async function setDone(id: string, done: boolean): Promise<Task | null> {
  const result = await getPool().query<TaskRow>(
    'UPDATE tasks SET done = $1 WHERE id = $2 RETURNING id, title, done, created_at',
    [done, id]
  );
  const row = result.rows[0];
  // No row means no task has this ID: a normal "not found", not a crash.
  return row ? toTask(row) : null;
}

export async function deleteTask(id: string): Promise<boolean> {
  const result = await getPool().query('DELETE FROM tasks WHERE id = $1 RETURNING id', [id]);
  return result.rowCount !== null && result.rowCount > 0;
}
```

`$1` and `$2` are placeholders; the values array is sent separately, so a
title or ID can never become SQL syntax. The `BIGINT` ID stays a string in
TypeScript so large IDs cannot lose precision.

#### Step 2: Add ID validation

Replace `frontend/lib/validation.ts`. `normalizeTitle` and `isRecord` are
unchanged from Prep Day 01; `isValidId` is new.

```ts
export function normalizeTitle(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const title = value.trim();
  return title.length >= 1 && title.length <= 200 ? title : null;
}

export function isValidId(raw: string): boolean {
  // Positive whole number, no leading zero, small enough to be exact in JS.
  return /^[1-9]\d*$/.test(raw) && Number.isSafeInteger(Number(raw));
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
```

`isValidId` rejects `abc`, `0`, `-1`, `1.5`, `007`, and numbers too large to
represent exactly. Rejecting them early avoids a pointless database query and
gives the client a clear 400.

#### Step 3: Create the item Route Handler

The folder name `[id]` makes a **dynamic route**: `/api/tasks/7` runs this file
with `id = '7'`. In this Next.js version, `params` is a Promise, so await it.
Create `frontend/app/api/tasks/[id]/route.ts`:

```ts
import { deleteTask, setDone } from '../../../../lib/tasks';
import { isRecord, isValidId } from '../../../../lib/validation';

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: RouteContext): Promise<Response> {
  const { id } = await params;
  if (!isValidId(id)) {
    return Response.json({ error: 'Invalid task ID' }, { status: 400 });
  }

  let parsingBody = true;
  try {
    const body: unknown = await request.json();
    parsingBody = false;
    if (!isRecord(body) || typeof body.done !== 'boolean') {
      return Response.json({ error: 'done must be boolean' }, { status: 400 });
    }
    const task = await setDone(id, body.done);
    return task
      ? Response.json(task)
      : Response.json({ error: 'Task not found' }, { status: 404 });
  } catch (error: unknown) {
    if (parsingBody) {
      return Response.json({ error: 'Invalid JSON' }, { status: 400 });
    }
    // Full details stay in the server log; the client gets a generic message.
    console.error(`PATCH /api/tasks/${id} failed:`, error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: RouteContext): Promise<Response> {
  const { id } = await params;
  if (!isValidId(id)) {
    return Response.json({ error: 'Invalid task ID' }, { status: 400 });
  }

  try {
    const deleted = await deleteTask(id);
    return deleted
      ? Response.json({ deleted: true })
      : Response.json({ error: 'Task not found' }, { status: 404 });
  } catch (error: unknown) {
    console.error(`DELETE /api/tasks/${id} failed:`, error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

Keep `frontend/app/api/tasks/route.ts` (GET and POST) exactly as it was. The
browser page and the API share the origin `http://localhost:3000`, so no CORS
setup is needed.

With `npm run dev` running, check the API before touching React:

```bash
curl -i -X POST http://localhost:3000/api/tasks \
  -H 'Content-Type: application/json' -d '{"title":"Test PATCH and DELETE"}'
# Replace TASK_ID with the "id" value returned by the POST request:
curl -i -X PATCH http://localhost:3000/api/tasks/TASK_ID \
  -H 'Content-Type: application/json' -d '{"done":true}'
curl -i -X PATCH http://localhost:3000/api/tasks/TASK_ID \
  -H 'Content-Type: application/json' -d '{"done":"yes"}'
curl -i -X PATCH http://localhost:3000/api/tasks/abc \
  -H 'Content-Type: application/json' -d '{"done":true}'
curl -i -X DELETE http://localhost:3000/api/tasks/TASK_ID
curl -i -X DELETE http://localhost:3000/api/tasks/TASK_ID
```

**Expected statuses:** `201`, `200` with `"done":true`, `400` (`done must be
boolean`), `400` (`Invalid task ID`), `200` with `{"deleted":true}`, and
finally `404` because the task is already gone.

### 6. MiniTrack implementation (1 hour)

#### Step 1: Extend the task board

First try it yourself in three passes, running the app after each: connect the
checkbox to PATCH, connect Delete to DELETE, then add the filter. Then compare
with this full updated `frontend/app/TaskBoard.tsx`. The `addTask` function and
the add form are unchanged from Prep Day 01; lines marked `NEW` are today's
work.

```tsx
'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import type { Task } from './types';

type Filter = 'all' | 'open' | 'done'; // NEW

export default function TaskBoard({ tasks }: { tasks: Task[] }) {
  const [title, setTitle] = useState('');
  const [filter, setFilter] = useState<Filter>('all'); // NEW
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  // NEW: derived from props + filter during rendering; never stored in state.
  let visibleTasks = tasks;
  if (filter === 'open') {
    visibleTasks = tasks.filter(task => !task.done);
  }
  if (filter === 'done') {
    visibleTasks = tasks.filter(task => task.done);
  }

  async function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanTitle = title.trim();
    if (!cleanTitle) {
      setError('Enter a task title.');
      return;
    }

    setBusy(true);
    setError('');
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: cleanTitle }),
      });

      if (!response.ok) {
        setError(`Could not add task (${response.status})`);
        setBusy(false);
        return;
      }

      setTitle('');
      router.refresh();
      setBusy(false);
    } catch {
      setError('Could not connect to the server');
      setBusy(false);
    }
  }

  // NEW: send the checkbox's new value; the server decides what is saved.
  async function toggleTask(taskId: string, done: boolean) {
    setBusy(true);
    setError('');
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ done }),
      });

      if (!response.ok) {
        setError(`Could not update task (${response.status})`);
        setBusy(false);
        return;
      }

      router.refresh();
      setBusy(false);
    } catch {
      setError('Could not connect to the server');
      setBusy(false);
    }
  }

  // NEW: DELETE needs only the ID in the URL, so there is no request body.
  async function deleteTask(taskId: string) {
    setBusy(true);
    setError('');
    try {
      const response = await fetch(`/api/tasks/${taskId}`, { method: 'DELETE' });

      if (!response.ok) {
        setError(`Could not delete task (${response.status})`);
        setBusy(false);
        return;
      }

      router.refresh();
      setBusy(false);
    } catch {
      setError('Could not connect to the server');
      setBusy(false);
    }
  }

  return (
    <section className="mt-8">
      <form onSubmit={addTask} className="flex flex-wrap gap-3">
        <label htmlFor="task-title" className="sr-only">Task title</label>
        <input
          id="task-title"
          className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2"
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="What needs doing?"
          maxLength={200}
          disabled={busy}
        />
        <button
          type="submit"
          className="rounded-lg bg-violet-600 px-4 py-2 disabled:opacity-50"
          disabled={busy}
        >
          {busy ? 'Adding...' : 'Add task'}
        </button>
      </form>

      {/* NEW: the filter is real state because the user chooses it. */}
      <label className="mt-5 flex items-center gap-2 text-sm text-slate-300">
        Show:
        <select
          className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
          value={filter}
          onChange={event => setFilter(event.target.value as Filter)}
        >
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="done">Done</option>
        </select>
      </label>

      {error && <p role="alert" className="mt-3 text-rose-300">{error}</p>}
      <p className="mt-4 text-slate-400">
        Showing {visibleTasks.length} of {tasks.length} tasks
      </p>

      {visibleTasks.length === 0 ? (
        <p className="mt-4 text-slate-400">No tasks in this filter.</p>
      ) : (
        <ul className="mt-4 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
          {visibleTasks.map(task => (
            <li
              key={task.id}
              className="flex items-center gap-3 border-b border-slate-700 px-5 py-4 last:border-b-0"
            >
              {/* NEW: checkbox replaces Prep Day 01's emoji marker. */}
              <input
                className="size-5 accent-violet-400"
                aria-label={`Complete ${task.title}`}
                type="checkbox"
                checked={task.done}
                disabled={busy}
                onChange={event => {
                  void toggleTask(task.id, event.target.checked);
                }}
              />
              <span className={`flex-1 ${task.done ? 'text-slate-500 line-through' : ''}`}>
                {task.title}
              </span>
              {/* NEW: type="button" so it can never submit a form. */}
              <button
                className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-rose-400/10 hover:text-rose-300"
                disabled={busy}
                type="button"
                onClick={() => {
                  void deleteTask(task.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
```

The checkbox's `checked` value comes from the `task` prop, which comes from
PostgreSQL. Clicking it does not flip anything locally; it asks the server, then
`router.refresh()` brings back the saved value. If the request fails, the box
stays in its old position and the error explains why. `busy` disables controls
during a request to reduce double clicks, but it is not server-side protection.

`frontend/app/page.tsx` does **not** change today: it already reads
`listTasks()` inside `<Suspense>` after `await io()` and passes the rows to
`<TaskBoard tasks={tasks} />`.

#### Step 2: Run and verify

With PostgreSQL running and your existing `frontend/.env.local` configured,
run from the repository root:

```bash
cd frontend
npm run lint
npm run dev
```

Open `http://localhost:3000` and check:

1. Add two tasks, tick one, and reload: the tick remains.
2. Choose **Open**: only the unticked task is shown. Choose **Done**: only the
   ticked task is shown. Choose **All**: both return.
3. Delete one task and reload: it stays deleted.
4. Stop PostgreSQL, tick a box: an error appears and the box does not change.
   Restart PostgreSQL afterwards.

**Expected observation:** the user-visible milestone works, its important
failure path is explicit, and existing behavior remains intact.

**If something fails:**

- `404` for every PATCH: check the folder is literally named `[id]` inside
  `frontend/app/api/tasks/`.
- TypeScript error about `params`: the type must be `Promise<{ id: string }>`
  and you must `await params`.
- Filter shows stale rows after a toggle: you stored `visibleTasks` in state
  instead of calculating it (see section 8).

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant U as You
  participant B as TaskBoard.tsx (browser)
  participant A as api/tasks/[id]/route.ts
  participant D as PostgreSQL
  participant S as page.tsx (Server Component)
  U->>B: Tick the checkbox for task 7
  B->>B: toggleTask("7", true); setBusy(true)
  B->>A: PATCH /api/tasks/7 body {"done":true}
  A->>A: isValidId("7"); typeof done is boolean
  A->>D: UPDATE tasks SET done = $1 WHERE id = $2 RETURNING ...
  D-->>A: Updated row (or no row)
  A-->>B: 200 task JSON (or 404 / 500)
  B->>S: router.refresh()
  S->>D: listTasks(): SELECT ... ORDER BY id
  D-->>S: Fresh rows
  S-->>B: New tasks prop; visibleTasks recalculated
  B-->>U: Box stays ticked and the filter view updates
```

Trace one concrete input. Name every boundary, value, and possible failure.
For example, `PATCH /api/tasks/abc` stops at `isValidId` with 400 and never
reaches PostgreSQL.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Change the filter to store a separate visibleTasks state value.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** The list can become stale when fresh task props arrive.

**Root cause:** Duplicated state has two sources that must be synchronized.

**Restore and verify:** Delete the duplicate state and compute visible tasks during rendering.

One way to break it: add
`const [visibleTasks, setVisibleTasks] = useState(tasks);` and update it only
inside the `<select>` `onChange`. Then add a task while **All** is selected:
the new task is saved but missing from the list until you change the filter.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

### 9. Interview questions and answers (30 minutes)

#### Q1. What are event handlers and derived state?

**Interview-ready answer:** A checkbox uses onChange, a delete button uses onClick, and visible tasks are derived from task props plus the selected filter. Derived values should not be copied into a second state variable.

**Example:** In `frontend/app/TaskBoard.tsx`, the checkbox calls
`toggleTask(task.id, event.target.checked)` and Delete calls
`deleteTask(task.id)`. `filter` is `useState<Filter>('all')`, while
`visibleTasks` is a plain variable computed with `tasks.filter(...)` on every
render.

**Senior follow-up:** If filtering became expensive (thousands of rows plus
search and sorting), first measure, then consider `useMemo` for the derived
value or move filtering to the server with a query parameter. It would still be
derived data, not a second source of truth.

#### Q2. How should the backend handle PATCH and DELETE by resource ID?

**Interview-ready answer:** The dynamic Route Handler validates the path ID, validates the PATCH body, and calls parameterized UPDATE or DELETE functions. Missing tasks return 404 instead of success-shaped data.

**Example:** `PATCH /api/tasks/abc` returns 400 from `isValidId`;
`{"done":"yes"}` returns 400; a valid request for a missing ID gets `null` from
`setDone` and returns 404; a database outage is logged with `console.error`
and the client receives only `{"error":"Internal server error"}` with 500.

**Senior follow-up:** Deleting twice returns 200 then 404, but the server
*state* after both is the same, so DELETE is still idempotent. Once users
exist, the WHERE clause must also check ownership, otherwise any valid ID can
be changed by anyone (an IDOR vulnerability).

#### Q3. What invariant makes the frequency counting solution correct?

**Interview-ready answer:** Count characters from one string and subtract matches from the other; every final count must balance.

**Example:** For `'aab'` and `'aba'`, counts start at `{'a': 2, 'b': 1}`
and reach `{'a': 0, 'b': 0}` after reading `t`. For `'rat'` and `'car'`, `c`
has count `0` immediately, so return `False`.

**Senior follow-up:** O(n) relies on average O(1) dictionary operations and
equal lengths being checked first. For a fixed alphabet, a 26-element list is
faster and uses constant space; for very long streams, counts must be stored
without holding both strings.

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** The task ID travels in the URL, the new value travels in JSON when needed, and router.refresh requests authoritative rows after mutation.

**Example:** Ticking task 7 sends `PATCH /api/tasks/7` with
`{"done":true}`; the Route Handler runs `UPDATE ... WHERE id = $2`; after 200,
`router.refresh()` makes `page.tsx` call `listTasks()` again; `TaskBoard`
receives new props and recalculates `visibleTasks`.

**Senior follow-up:** Each mutation costs two round trips (mutation plus
refresh read). Measure p95 latency of `/api/tasks/[id]` and page refresh before
adding optimistic UI or caching; also log 404 and 500 rates per route.

### 10. Complexity and operational cost

- **DSA:** O(n) time and O(k) space for k distinct characters.
- **Application:** Filtering is O(n) per render for n tasks. PATCH and DELETE each use one database round trip; the refresh adds a read round trip.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 02 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 02: complete, delete, and filter tasks`

<a id="prep-day-03"></a>

## Prep Day 03 — Add safe title editing to the API

**Date:** Friday, November 27, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Add safe title editing to the API.

[Prep Day 02](../lessons/interview-prep/prep-day-02.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](../lessons/interview-prep/README.md) · [Prep Day 04](../lessons/interview-prep/prep-day-04.md)

**Everything to read today is below.** The original [App Day 6](../lessons/day-06.md)
and [DSA Day 03](../dsa-python/lessons/dsa-day-03.md) remain available for
comparison. This prep day changes only the data layer and the
`PATCH /api/tasks/[id]` contract so a title can be renamed safely; you test it
with curl and the browser console. Completing, deleting, and filtering came
from Prep Day 02 and must keep working. The Edit, Save, and Cancel buttons in
the browser belong to Prep Day 04. Write runnable code in the named project and
practice files, not in this Markdown file.

### Learning objectives

- explain designing the edit request in beginner-friendly language;
- explain PATCH contracts and UPDATE RETURNING and its failure boundary;
- implement or verify the listed MiniTrack milestone;
- solve DSA Day 03 using the set membership pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **set membership** pattern?

Use this format:

```md
## Friday, November 27, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Designing the edit request:** The browser sends only the field being changed. A narrow PATCH body makes intent clear and prevents unrelated values from being overwritten.

**Backend focus — PATCH contracts and UPDATE RETURNING:** A partial-update endpoint validates that exactly one supported field is present, binds values in SQL, and uses RETURNING to obtain the updated row in the same database round trip.

**Today's connection:** The API boundary protects the data layer from malformed partial updates before SQL runs.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 03: set membership"]
  DSA --> FE["Frontend: Designing the edit request"]
  FE --> BE["Backend: PATCH contracts and UPDATE RETURNING"]
  BE --> App["MiniTrack: Add safe title editing to the API"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-03.py`](../dsa-python/practice/day-03.py)
**Pattern:** set membership

#### Problem: Contains Duplicate

Given a sequence of numbers, return `True` if **any** value appears at least
twice, and `False` if every value is distinct. Assume the values are hashable
(numbers here), and the input may be a list or a tuple.

```python
solve([1, 2, 3, 1])  # True  (1 appears twice)
solve((1, 2, 3))     # False (the checker passes a tuple here)
```

The simple approach compares every pair: O(n²) time. A faster approach
remembers every value already seen in a Python **set** and stops as soon as a
value is seen a second time.

#### Start coding

In the practice file, replace the `raise NotImplementedError` line with your
own implementation. This is the starting shape:

```python
def solve(nums):
    # Return True if any value appears more than once, otherwise False.
    raise NotImplementedError
```

A **set** is a collection with no duplicates and fast membership checks:

- `seen = set()` creates an empty set. (Note: `{}` creates an empty
  *dictionary*, not a set.)
- `value in seen` is `True` if `value` was added before; on average this is
  O(1), like a dictionary key lookup.
- `seen.add(value)` stores `value`; adding it again changes nothing.

```mermaid
flowchart TD
  Start[Start with empty set] --> Next[Read next value]
  Next --> Seen{Value already in set?}
  Seen -- Yes --> True[Return True]
  Seen -- No --> Add[Add value to set]
  Add --> More{More values?}
  More -- Yes --> Next
  More -- No --> False[Return False]
```

#### Invariant to say aloud

Insert each value into a set and stop when a value is already present.

More precisely: before checking the current value, `seen` contains exactly the
earlier values, and all of them were distinct.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 3
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** the day-specific checker accepts your implementation,
and the completed reference suite still passes. The checker's two examples do
not include an empty input or negative numbers, so add those yourself.

You can also temporarily add these checks below your `solve` function in the
practice file, then run `python3 dsa-python/practice/day-03.py`:

```python
if __name__ == '__main__':
    assert solve([1, 2, 3, 1]) is True
    assert solve((1, 2, 3)) is False
    assert solve([]) is False
    assert solve([5]) is False
    assert solve([-1, -1]) is True
    assert solve([0, 1, 0]) is True
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple solution</summary>

```python
def solve(nums):
    for i in range(len(nums)):
        # Start after i so a value is never compared with itself.
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j]:
                return True
    return False
```

</details>

This compares every pair, up to `n × (n - 1) / 2` comparisons, so the
worst-case time is O(n²). It uses O(1) extra space. A middle option is to sort
a copy and compare neighbours: O(n log n) time.

#### Optimized code — reveal after attempting

<details>
<summary>Show the Contains Duplicate solution</summary>

```python
def solve(nums):
    seen = set()  # distinct values read so far
    for value in nums:
        if value in seen:
            return True  # second time we meet this value
        seen.add(value)
    return False
```

</details>

Checking before adding means a value can only match an **earlier** copy of
itself. Expected time is O(n) with average constant-time set operations; extra
space is O(n) because, with no duplicate, every value is stored.

| Index | Value | Set before checking | Action |
|---:|---:|---|---|
| 0 | 1 | `{}` (empty) | Not present; add → `{1}` |
| 1 | 2 | `{1}` | Not present; add → `{1, 2}` |
| 2 | 3 | `{1, 2}` | Not present; add → `{1, 2, 3}` |
| 3 | 1 | `{1, 2, 3}` | Present; return `True` |

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “I compare every value with every later value. If
any pair is equal, I return `True`; after all pairs, I return `False`. That is
O(n²) time and O(1) extra space.”

**Example:** For `[1, 2, 3, 1]`, the pair at indexes `0` and `3` is equal,
so return `True`.

**Follow-up:** Sorting first and comparing neighbours is O(n log n) and needs
no hash set, which helps if memory is tight. Sorting in place changes the
caller's list, so sort a copy unless mutation is allowed.

##### DSA Q2. How does a set improve the solution?

**Interview-ready answer:** “A set answers ‘have I seen this before?’ in O(1)
on average. I scan once: if the value is already in the set it is a duplicate;
otherwise I add it.”

**Example:** After reading `1, 2, 3`, the set is `{1, 2, 3}`. The next `1`
is found immediately.

**Follow-up:** One-liner: `len(set(nums)) != len(nums)`. It is also O(n) but
always builds the whole set; the loop can stop early at the first duplicate.

##### DSA Q3. Why is the solution correct?

**Interview-ready answer:** “Before each check, the set holds exactly the
earlier values, all distinct. If the current value is in it, an earlier copy
exists, so there is a duplicate. If the loop finishes, every value was new
when read, so all values are distinct.”

**Example:** `[0, 1, 0]`: `0` added, `1` added, then `0` is found → `True`.

**Follow-up:** Why check before adding? Adding first would make every value
find itself, so `[5]` would wrongly return `True`.

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “Expected O(n) time, because each value causes at
most one lookup and one insert, both O(1) on average. O(n) extra space in the
worst case, when all values are distinct.”

**Example:** `(1, 2, 3)` stores all three values and returns `False` after
three lookups and three inserts.

**Follow-up:** The O(1) average assumes a good hash function; adversarial
collisions can degrade lookups. Sorting gives a guaranteed O(n log n) bound.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “Empty input, one value, two equal values,
negative numbers and zero, a duplicate at the very end, and whether the input
can be a tuple or contain unhashable items.”

**Example:** `solve([])` and `solve([5])` are `False`; `solve([-1, -1])` is
`True`.

**Follow-up:** Lists such as `[[1], [1]]` cannot be put in a set because a
list is unhashable; convert each inner list to a tuple first.

##### DSA Q6. What if duplicates only count when they are at most k indexes apart?

**Interview-ready answer:** “I keep a sliding window: the set holds only the
last k values. Before moving on, I remove the value that falls out of the
window. That stays O(n) time with O(k) space.”

**Example:** `[1, 2, 3, 1]` with `k = 3` is `True` (indexes 0 and 3); with
`k = 2` it is `False`, because `1` leaves the window before index 3.

**Follow-up:** If values only need to be *close* (within `t`), a set is no
longer enough; you need buckets or a sorted structure.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

The browser sends only the field being changed. A narrow PATCH body makes intent clear and prevents unrelated values from being overwritten.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.

#### How

Today there is no new React code. Instead, design the request that Prep Day 04's
Edit form will send. After today the same URL accepts two request shapes:

```json
{ "done": true }
```

```json
{ "title": "Review React state" }
```

One request must contain **exactly one** of these fields. These are rejected
with 400: `{}`, `{"title":"A","done":true}`, `{"title":"   "}`,
`{"done":"yes"}`, an array, and malformed JSON.

Why narrow? If the browser sent the whole task, for example
`{"title":"New","done":false,"created_at":"..."}`, a stale copy could silently
undo someone's completion or overwrite a server-owned value. Sending only the
changed field makes intent explicit.

You can try the contract from the browser before Prep Day 04 exists. Open
`http://localhost:3000`, open DevTools → Console, and paste (replace `7` with
a real task ID):

```js
await fetch('/api/tasks/7', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Renamed from the console' }),
}).then(response => response.status);
```

Expect `200`. Reload the page: the new title appears because `page.tsx` reads
it from PostgreSQL.

Files to open deliberately:

- `frontend/app/api/tasks/[id]/route.ts`
- `frontend/lib/tasks.ts`
- `frontend/lib/validation.ts`

Answer before coding:

- Which value is persistent, and which value is temporary interaction state?
- What starts this behavior?
- What should the user see while work is pending?
- What should remain unchanged when the operation fails?

### 5. Backend guided study (1 hour 30 minutes)

#### What

A partial-update endpoint validates that exactly one supported field is present, binds values in SQL, and uses RETURNING to obtain the updated row in the same database round trip.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

MiniTrack still has no login, so authentication and authorization are not yet
part of these routes.

```mermaid
flowchart TD
  A["1. PATCH /api/tasks/:id"] --> B["2. Validate the ID"]
  B --> C["3. Parse JSON as unknown"]
  C --> D{"4. Exactly one field?"}
  D -- title --> E["5A. Normalize title"]
  D -- done --> F["5B. Validate boolean"]
  D -- invalid --> G["Return 400"]
  E --> H["6. Parameterized UPDATE"]
  F --> H
  H --> I{"7. Row returned?"}
  I -- Yes --> J["Return 200 + task"]
  I -- No --> K["Return 404"]
```

Three status codes, three meanings:

| Status | Meaning | MiniTrack example |
|---:|---|---|
| 400 | The request itself is wrong | `{"title":""}` or ID `abc` |
| 404 | The request is valid but the task does not exist | ID `999999999` |
| 500 | Something unexpected failed on the server | PostgreSQL is stopped |

`normalizeTitle` and `isValidId` in `frontend/lib/validation.ts` are unchanged
from Prep Day 02; the title rules (trim, then 1–200 characters) are the same
rules POST already uses.

### 6. MiniTrack implementation (1 hour)

#### Step 1: Add the rename function

Write only this signature in `frontend/lib/tasks.ts` first, and ask: which
values must be SQL parameters, and how will a missing ID be reported?

```ts
export async function renameTask(id: string, title: string): Promise<Task | null>
```

Then compare with this full updated `frontend/lib/tasks.ts`. Everything above
`renameTask` is unchanged from Prep Day 02.

```ts
import type { Task } from '../app/types';
import { getPool } from './db';

type TaskRow = Omit<Task, 'created_at'> & { created_at: Date };

function toTask(row: TaskRow): Task {
  return { ...row, created_at: row.created_at.toISOString() };
}

export async function listTasks(): Promise<Task[]> {
  const result = await getPool().query<TaskRow>(
    'SELECT id, title, done, created_at FROM tasks ORDER BY id'
  );
  return result.rows.map(toTask);
}

export async function createTask(title: string): Promise<Task> {
  const result = await getPool().query<TaskRow>(
    'INSERT INTO tasks (title) VALUES ($1) RETURNING id, title, done, created_at',
    [title]
  );
  const row = result.rows[0];
  if (!row) throw new Error('Inserted task was not returned by PostgreSQL');
  return toTask(row);
}

export async function setDone(id: string, done: boolean): Promise<Task | null> {
  const result = await getPool().query<TaskRow>(
    'UPDATE tasks SET done = $1 WHERE id = $2 RETURNING id, title, done, created_at',
    [done, id]
  );
  const row = result.rows[0];
  return row ? toTask(row) : null;
}

export async function deleteTask(id: string): Promise<boolean> {
  const result = await getPool().query('DELETE FROM tasks WHERE id = $1 RETURNING id', [id]);
  return result.rowCount !== null && result.rowCount > 0;
}

// NEW
export async function renameTask(id: string, title: string): Promise<Task | null> {
  const result = await getPool().query<TaskRow>(
    `
      UPDATE tasks
      SET title = $1
      WHERE id = $2
      RETURNING id, title, done, created_at
    `,
    // Values are separate from SQL syntax, preventing value-based injection.
    [title, id]
  );

  const row = result.rows[0];
  // No row is a normal "not found" outcome, not a database failure.
  return row ? toTask(row) : null;
}
```

`RETURNING` sends back the saved row in the same round trip, so no second
`SELECT` is needed and the response shows exactly what PostgreSQL stored.

#### Step 2: Extend the PATCH Route Handler

Replace `frontend/app/api/tasks/[id]/route.ts` with this full file. The ID
check, JSON parsing, and the whole `DELETE` function are unchanged from Prep
Day 02. The PATCH body check now decides which single update was requested.

```ts
import type { Task } from '../../../types';
import { deleteTask, renameTask, setDone } from '../../../../lib/tasks';
import { isRecord, isValidId, normalizeTitle } from '../../../../lib/validation';

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: RouteContext): Promise<Response> {
  const { id } = await params;
  if (!isValidId(id)) {
    return Response.json({ error: 'Invalid task ID' }, { status: 400 });
  }

  let parsingBody = true;
  try {
    const body: unknown = await request.json();
    parsingBody = false;
    if (!isRecord(body)) {
      return Response.json({ error: 'Request body must be an object' }, { status: 400 });
    }

    const hasDone = Object.hasOwn(body, 'done');
    const hasTitle = Object.hasOwn(body, 'title');

    // Both true or both false means the request contract is ambiguous.
    if (hasDone === hasTitle) {
      return Response.json({ error: 'Provide either done or title' }, { status: 400 });
    }

    // Choose the operation first, then run it below.
    let updateTask: () => Promise<Task | null>;

    if (hasTitle) {
      const title = normalizeTitle(body.title);
      if (!title) {
        return Response.json({ error: 'title must be 1–200 characters' }, { status: 400 });
      }
      updateTask = () => renameTask(id, title);
    } else if (typeof body.done === 'boolean') {
      const done = body.done;
      updateTask = () => setDone(id, done);
    } else {
      return Response.json({ error: 'done must be boolean' }, { status: 400 });
    }
    const task = await updateTask();
    return task
      ? Response.json(task)
      : Response.json({ error: 'Task not found' }, { status: 404 });
  } catch (error: unknown) {
    if (parsingBody) {
      return Response.json({ error: 'Invalid JSON' }, { status: 400 });
    }
    console.error(`PATCH /api/tasks/${id} failed:`, error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: RouteContext): Promise<Response> {
  const { id } = await params;
  if (!isValidId(id)) {
    return Response.json({ error: 'Invalid task ID' }, { status: 400 });
  }

  try {
    const deleted = await deleteTask(id);
    return deleted
      ? Response.json({ deleted: true })
      : Response.json({ error: 'Task not found' }, { status: 404 });
  } catch (error: unknown) {
    console.error(`DELETE /api/tasks/${id} failed:`, error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

Two helpers to understand:

- `Object.hasOwn(body, 'title')` is `true` when the object has its own
  `title` key, even if the value is `""` or `null`. That lets us tell "field
  missing" apart from "field present but invalid".
- `hasDone === hasTitle` is `true` in exactly two cases: neither key (`{}`) or
  both keys. Both are ambiguous, so both return 400.

`updateTask` is a function stored in a variable. Choosing it first and calling
it once keeps a single `404`/`500` response path for both operations. The
`Task` type comes from `frontend/app/types.ts`.

#### Step 3: Run and verify

With PostgreSQL running and `frontend/.env.local` configured, run from the
repository root:

```bash
cd frontend
npm run lint
npm run dev
```

In a second terminal, create a task and copy its returned `id`:

```bash
curl -i -X POST http://localhost:3000/api/tasks \
  -H 'Content-Type: application/json' \
  -d '{"title":"Original title"}'
```

Then replace `TASK_ID` and run each request:

```bash
# 1. Valid rename
curl -i -X PATCH http://localhost:3000/api/tasks/TASK_ID \
  -H 'Content-Type: application/json' -d '{"title":"  Updated title  "}'

# 2. Existing completion behavior must still work
curl -i -X PATCH http://localhost:3000/api/tasks/TASK_ID \
  -H 'Content-Type: application/json' -d '{"done":true}'

# 3. Invalid: both operations in one request
curl -i -X PATCH http://localhost:3000/api/tasks/TASK_ID \
  -H 'Content-Type: application/json' -d '{"title":"Ambiguous","done":true}'

# 4. Invalid: empty object
curl -i -X PATCH http://localhost:3000/api/tasks/TASK_ID \
  -H 'Content-Type: application/json' -d '{}'

# 5. Invalid: blank title
curl -i -X PATCH http://localhost:3000/api/tasks/TASK_ID \
  -H 'Content-Type: application/json' -d '{"title":"   "}'

# 6. Invalid: malformed JSON
curl -i -X PATCH http://localhost:3000/api/tasks/TASK_ID \
  -H 'Content-Type: application/json' -d '{"title":'

# 7. Valid ID shape, but no matching row
curl -i -X PATCH http://localhost:3000/api/tasks/999999999 \
  -H 'Content-Type: application/json' -d '{"title":"Missing"}'
```

**Expected statuses:** `200` (title saved as `"Updated title"`, trimmed),
`200` (`"done":true` and the new title kept), `400`, `400`, `400`, `400`, and
`404`. Then open `http://localhost:3000`: the renamed task shows its new title,
and ticking, deleting, and filtering from Prep Day 02 still work.

**Expected observation:** the user-visible milestone works, its important
failure path is explicit, and existing behavior remains intact.

**If something fails:**

- Rename returns 200 but the title is unchanged: check the values array is
  `[title, id]` to match `SET title = $1 WHERE id = $2`.
- TypeScript reports `Property 'hasOwn' does not exist`: the `lib` option in
  `frontend/tsconfig.json` must include `esnext` (the scaffold already does).
- The checkbox stops working: the `done` branch must still call `setDone`.

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant U as You
  participant C as curl or DevTools console
  participant R as api/tasks/[id]/route.ts
  participant V as lib/validation.ts
  participant D as lib/tasks.ts
  participant P as PostgreSQL
  U->>C: Rename task 7
  C->>R: PATCH /api/tasks/7 body {"title":"  Updated title  "}
  R->>V: isValidId("7"); isRecord(body)
  R->>R: hasTitle true, hasDone false: exactly one field
  R->>V: normalizeTitle(body.title)
  V-->>R: "Updated title"
  R->>D: renameTask("7", "Updated title")
  D->>P: UPDATE tasks SET title = $1 WHERE id = $2 RETURNING ...
  P-->>D: Updated row (or no row)
  D-->>R: Task (or null)
  R-->>C: 200 task JSON (or 404 / 500)
  C-->>U: Check status, then reload the page to see the title
```

Trace one concrete input. Name every boundary, value, and possible failure.
For example, `{"title":"A","done":true}` stops at `hasDone === hasTitle` and
never reaches `renameTask`.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Allow both title and done in a request that is meant to update exactly one field.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** The endpoint contract becomes ambiguous and tests cannot prove which change was intended.

**Root cause:** Loose object checks accept states outside the designed API contract.

**Restore and verify:** Require exactly one supported key and reject extra or conflicting fields.

One way to break it: delete the `if (hasDone === hasTitle)` block. Send
`{"title":"Ambiguous","done":true}`: the response is 200, the title changes,
and `done` is silently ignored because the `hasTitle` branch wins. Send `{}`:
the request falls through to `done must be boolean`, a misleading message.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

### 9. Interview questions and answers (30 minutes)

#### Q1. What is designing the edit request?

**Interview-ready answer:** The browser sends only the field being changed. A narrow PATCH body makes intent clear and prevents unrelated values from being overwritten.

**Example:** Renaming task 7 sends `PATCH /api/tasks/7` with
`{"title":"Review React state"}`, not the full task. A stale full-task body
such as `{"title":"New","done":false}` could undo a completion made in another
tab.

**Senior follow-up:** If the UI later needs to change several fields at once,
define a multi-field patch contract with a fixed allowlist of columns and one
transactional UPDATE, rather than looping over whatever keys the client sent.

#### Q2. How should the backend handle PATCH contracts and UPDATE RETURNING?

**Interview-ready answer:** A partial-update endpoint validates that exactly one supported field is present, binds values in SQL, and uses RETURNING to obtain the updated row in the same database round trip.

**Example:** In `frontend/app/api/tasks/[id]/route.ts`, `Object.hasOwn`
detects which key is present, `normalizeTitle` trims and length-checks it, and
`renameTask` runs `UPDATE tasks SET title = $1 WHERE id = $2 RETURNING id,
title, done, created_at`. No row becomes `null` and then 404.

**Senior follow-up:** Without `RETURNING`, a follow-up `SELECT` could see a
different row if another request changed it in between. When PostgreSQL is
down, the handler logs the real error server-side and returns only
`Internal server error`, never connection strings or SQL text.

#### Q3. What invariant makes the set membership solution correct?

**Interview-ready answer:** Insert each value into a set and stop when a value is already present.

**Example:** `[1, 2, 3, 1]`: the set grows `{1}`, `{1, 2}`, `{1, 2, 3}`;
the fourth value `1` is already present, so return `True`.

**Senior follow-up:** O(n) time assumes average O(1) hashing and enough
memory for O(n) values. If memory is limited, sort a copy (O(n log n)) and
compare neighbours; for a stream too big for memory, use external sorting or a
probabilistic filter that accepts false positives.

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** The API boundary protects the data layer from malformed partial updates before SQL runs.

**Example:** `{"title":"   "}` is rejected with 400 by `normalizeTitle` before
`renameTask` is called; a valid rename reaches PostgreSQL once, and the next
`page.tsx` render shows the saved title via `listTasks()`.

**Senior follow-up:** Track 400 vs 404 vs 500 counts for `PATCH
/api/tasks/[id]`. A spike in 400s suggests a client bug or contract change;
500s suggest a database problem. Concurrent renames are last-write-wins today;
a version column would be needed to detect conflicts.

### 10. Complexity and operational cost

- **DSA:** O(n) expected time and O(n) space.
- **Application:** Validation is proportional to the small request body. An UPDATE by primary key is typically O(log n) index lookup plus the write.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 03 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 03: add safe title editing to the api`

<a id="prep-day-04"></a>

## Prep Day 04 — Build accessible browser editing

**Date:** Saturday, November 28, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Build accessible browser editing.

[Prep Day 03](../lessons/interview-prep/prep-day-03.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](../lessons/interview-prep/README.md) · [Prep Day 05](../lessons/interview-prep/prep-day-05.md)

**Everything to read today is below.** The original [App Day 7](../lessons/day-07.md)
and [DSA Day 04](../dsa-python/lessons/dsa-day-04.md) remain available for
comparison. This prep day adds Edit, Save, and Cancel controls to
`TaskBoard.tsx` and uses the title-rename API built in Prep Day 03 without
changing it. Adding, completing, deleting, and filtering came from Prep Days
01–02 and must keep working. Search and shareable URL filters belong to Prep
Day 05. Write runnable code in the named project and practice files, not in
this Markdown file.

### Learning objectives

- explain explicit edit state, useRef, and useEffect in beginner-friendly language;
- explain preserving data when editing fails and its failure boundary;
- implement or verify the listed MiniTrack milestone;
- solve DSA Day 04 using the one-pass invariant pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **one-pass invariant** pattern?

Use this format:

```md
## Saturday, November 28, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Explicit edit state, useRef, and useEffect:** State stores which task is being edited and the draft title. A ref points to the rendered input, and an effect focuses it because focus synchronizes React with the browser DOM.

**Backend focus — Preserving data when editing fails:** The server rejects invalid or missing updates explicitly. The client should keep edit mode and the draft value when the request fails so the user can correct or retry it.

**Today's connection:** Local draft state supports interaction while PostgreSQL remains the final persisted state.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 04: one-pass invariant"]
  DSA --> FE["Frontend: Explicit edit state, useRef, and useEffect"]
  FE --> BE["Backend: Preserving data when editing fails"]
  BE --> App["MiniTrack: Build accessible browser editing"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-04.py`](../dsa-python/practice/day-04.py)
**Pattern:** one-pass invariant

#### Problem: Best Time to Buy and Sell Stock

You are given a list of daily stock prices, where `prices[i]` is the price on
day `i`. Buy **once** and sell **once**, on a **later** day. Return the
largest possible profit, or `0` if no profitable trade exists. Assume prices
are non-negative numbers; an empty list returns `0`.

```python
solve([7, 1, 5, 3, 6, 4])  # 5  (buy at 1, sell at 6)
solve([7, 6, 4, 3, 1])     # 0  (prices only fall)
```

The trap: you cannot sell before you buy. In the first example, `7 - 1 = 6`
would mean selling on day 0 and buying on day 1, which is not allowed.

The simple approach tries every buy day with every later sell day: O(n²). A
faster approach walks the list **once**, remembering the cheapest price seen so
far and the best profit found so far.

#### Start coding

In the practice file, replace the `raise NotImplementedError` line with your
own implementation. This is the starting shape:

```python
def solve(prices):
    # Return the best profit from one buy followed by one later sell, or 0.
    raise NotImplementedError
```

Three Python helpers keep the loop short:

- `float('inf')` is "infinity": larger than every number. Starting the
  minimum there means the first real price always becomes the new minimum.
- `max(a, b)` returns the larger value; `min(a, b)` returns the smaller value.
- `price - float('inf')` is negative infinity, so `max(0, price - minimum)`
  safely stays `0` on the first day.

```mermaid
flowchart TD
  Start[minimum = infinity, best = 0] --> Next[Read next price]
  Next --> Profit[Profit if sold today = price minus minimum]
  Profit --> Best[best = larger of best and that profit]
  Best --> Min[minimum = smaller of minimum and price]
  Min --> More{More prices?}
  More -- Yes --> Next
  More -- No --> Return[Return best]
```

#### Invariant to say aloud

Track the lowest price seen before today and the best profit available at the current price.

The order matters: compute today's profit **before** letting today's price
become the minimum, so the buy is always on an earlier day.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 4
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** the day-specific checker accepts your implementation,
and the completed reference suite still passes. The checker does not test an
empty list or a new minimum that appears after the best trade, so add those.

You can also temporarily add these checks below your `solve` function in the
practice file, then run `python3 dsa-python/practice/day-04.py`:

```python
if __name__ == '__main__':
    assert solve([7, 1, 5, 3, 6, 4]) == 5
    assert solve([7, 6, 4, 3, 1]) == 0
    assert solve([]) == 0
    assert solve([5]) == 0          # One day: no later day to sell.
    assert solve([2, 2]) == 0       # Equal prices: no profit.
    assert solve([1, 2]) == 1
    assert solve([3, 8, 1, 4]) == 5  # Later low of 1 does not beat 8 - 3.
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple solution</summary>

```python
def solve(prices):
    best = 0
    for buy in range(len(prices)):
        # Only later days can be sell days.
        for sell in range(buy + 1, len(prices)):
            best = max(best, prices[sell] - prices[buy])
    return best
```

</details>

This tries every buy/sell pair, up to `n × (n - 1) / 2` pairs, so the time is
O(n²). It uses O(1) extra space.

#### Optimized code — reveal after attempting

<details>
<summary>Show the Best Time to Buy and Sell Stock solution</summary>

```python
def solve(prices):
    minimum = float('inf')  # cheapest price on an earlier day
    best = 0                # best profit found so far; 0 means "do not trade"
    for price in prices:
        # Sell today using the cheapest earlier buy.
        best = max(best, price - minimum)
        # Only now may today's price become a future buy candidate.
        minimum = min(minimum, price)
    return best
```

</details>

Each price is read once, so time is O(n). Only two numbers are stored, so extra
space is O(1).

For `[7, 1, 5, 3, 6, 4]`:

| Day | Price | Minimum before | Profit if sold today | Best after | Minimum after |
|---:|---:|---:|---:|---:|---:|
| 0 | 7 | ∞ | −∞ | 0 | 7 |
| 1 | 1 | 7 | −6 | 0 | 1 |
| 2 | 5 | 1 | 4 | 4 | 1 |
| 3 | 3 | 1 | 2 | 4 | 1 |
| 4 | 6 | 1 | 5 | 5 | 1 |
| 5 | 4 | 1 | 3 | 5 | 1 |

Return `5`.

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “For every buy day, I try every later sell day and
keep the largest difference, starting from zero. That checks all valid pairs,
so it is correct, but it takes O(n²) time and O(1) extra space.”

**Example:** For `[7, 1, 5]`, the pairs are `1 - 7`, `5 - 7`, and `5 - 1`;
the best is `4`.

**Follow-up:** Why start the inner loop at `buy + 1`? Selling on the same day
gives zero and selling earlier is not allowed, so only later days matter.

##### DSA Q2. What is the key idea of the one-pass solution?

**Interview-ready answer:** “If I sell today, the best buy is simply the
cheapest earlier price. So I only need to remember that minimum and the best
profit so far while I scan once.”

**Example:** On day 4 of `[7, 1, 5, 3, 6, 4]`, the cheapest earlier price is
`1`, so selling at `6` gives `5`, the answer.

**Follow-up:** This is a simple form of dynamic programming: the best answer
ending at day i depends only on a small summary (the minimum) of days before i.

##### DSA Q3. Why is the solution correct?

**Interview-ready answer:** “Before processing a price, `minimum` is the
lowest price on earlier days and `best` is the best profit using a sell day
before today. Today's best sale is `price - minimum`. Updating `best` first and
`minimum` second keeps both statements true for the next day, so at the end
`best` covers every valid pair.”

**Example:** `[3, 8, 1, 4]`: at `8`, best becomes `5`; at `1`, the minimum
drops to `1`; at `4`, the profit is only `3`, so best stays `5`.

**Follow-up:** What if I update the minimum first? Then a day can "buy and
sell" against itself. Here that only adds a profit of `0`, so the answer is
still right, but the code no longer matches the invariant. In a variant with a
per-trade fee or a minimum holding period, that order can produce wrong
answers.

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “O(n) time, because each price is read once with
constant work, and O(1) extra space, because I store only `minimum` and
`best`.”

**Example:** A million prices need a million loop iterations and still only
two stored numbers.

**Follow-up:** O(1) space assumes the input list already exists. For a live
stream of prices, the same two variables work without storing the history.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “An empty list, one price, all equal prices,
strictly falling prices, and a new minimum that appears after the best trade.
I also ask whether prices can be negative or floating point.”

**Example:** `[]`, `[5]`, `[2, 2]`, and `[7, 6, 4, 3, 1]` all return `0`;
`[3, 8, 1, 4]` returns `5`, not `3`.

**Follow-up:** If the interviewer wants the actual buy and sell days, store
the index of the minimum and update a `(buy_day, sell_day)` pair whenever
`best` improves.

##### DSA Q6. What changes if I may make unlimited transactions?

**Interview-ready answer:** “Then I add every positive day-to-day increase,
because any rising stretch can be split into one-day trades with the same total
profit. That is still O(n) time and O(1) space.”

**Example:** `[1, 3, 2, 5]` gives `(3 - 1) + (5 - 2) = 5`, while a single
trade can only make `4`.

**Follow-up:** With at most k transactions or a cooldown day, you need a small
dynamic-programming state per day (for example, holding vs not holding).

### 4. Frontend guided study (1 hour 30 minutes)

#### What

State stores which task is being edited and the draft title. A ref points to the rendered input, and an effect focuses it because focus synchronizes React with the browser DOM.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.

#### How

Before looking at the code in section 6, sketch the component state, user
event, request, success result, and failure result.

Model the edit UI as a small state machine before writing JSX:

```mermaid
stateDiagram-v2
  [*] --> Viewing
  Viewing --> Editing: Click Edit
  Editing --> Viewing: Cancel
  Editing --> Saving: Submit valid title
  Saving --> Viewing: API success
  Saving --> Editing: API failure
```

Three new pieces of client-only state live in `TaskBoard`:

```ts
const [editingId, setEditingId] = useState<string | null>(null);
const [editTitle, setEditTitle] = useState('');
const editInputRef = useRef<HTMLInputElement>(null);
```

- `editingId` answers **which** task is being edited (`null` means none). A
  plain `true/false` could not say which row to show as a form.
- `editTitle` is the uncommitted draft. It is copied from `task.title` when
  editing starts, so the user can change it without touching the `task` prop.
- `editInputRef` is a **ref**: a box whose `.current` React fills with the
  real `<input>` element after it appears on screen. Changing a ref does not
  re-render.

`useEffect(callback, [editingId])` runs `callback` **after** React has put the
new UI on screen, and again whenever `editingId` changes. That is the right time
to call the browser's `focus()` and `select()` on the input, because only then
does the input exist:

```ts
useEffect(() => {
  if (editingId) {
    editInputRef.current?.focus();
    editInputRef.current?.select();
  }
}, [editingId]);
```

`?.` means "only call this if `.current` is not `null`". Focus is an external
browser operation, so an effect is appropriate; do not use effects to compute
values that can be derived during rendering (like Prep Day 02's
`visibleTasks`).

Accessibility rules for today:

- every input has a label; the edit input uses a visually hidden `sr-only`
  `<label>` so screen readers announce "Edit Buy milk";
- Edit, Save, and Cancel are real `<button>` elements, reachable with Tab;
- Save is `type="submit"` so **Enter** saves; Cancel is `type="button"` so it
  never submits;
- errors use `role="alert"` so they are announced.

Files to open deliberately:

- `frontend/app/TaskBoard.tsx`
- `frontend/app/api/tasks/[id]/route.ts`

Answer before coding:

- Which value is persistent, and which value is temporary interaction state?
- What starts this behavior?
- What should the user see while work is pending?
- What should remain unchanged when the operation fails?

### 5. Backend guided study (1 hour 30 minutes)

#### What

The server rejects invalid or missing updates explicitly. The client should keep edit mode and the draft value when the request fails so the user can correct or retry it.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

No server file changes today. The browser reuses Prep Day 03's contract in
`frontend/app/api/tasks/[id]/route.ts`:

| Browser sends | Server responds | What `TaskBoard` must do |
|---|---|---|
| `{"title":"Buy oat milk"}` for an existing task | `200` + updated task | Leave edit mode; `router.refresh()` |
| `{"title":"   "}` (if the client check is bypassed) | `400` | Stay in edit mode; keep draft; show error |
| A title for a task deleted in another tab | `404` | Stay in edit mode; keep draft; show error |
| Any request while PostgreSQL is down | `500` | Stay in edit mode; keep draft; show error |
| Network failure (server stopped) | `fetch` throws | Stay in edit mode; keep draft; show error |

The client also checks for a blank title before sending, but that is only for a
quick message. The server's `normalizeTitle` check is the real protection,
because any client (curl, a script) can skip the browser.

The rule on the client side: **clear the edit state only after a successful
response.** Clearing it before awaiting the request would lose the user's typing
if the save fails.

### 6. MiniTrack implementation (1 hour)

#### Step 1: Add editing to the task board

First try it yourself in passes, running the app after each: add the two state
values and the Edit button, render the edit form, add the focus effect, then
save. Then compare with this full updated `frontend/app/TaskBoard.tsx`. Code
from Prep Day 02 is unchanged; lines marked `NEW` are today's work.

```tsx
'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react'; // NEW: useEffect, useRef
import { useRouter } from 'next/navigation';
import type { Task } from './types';

type Filter = 'all' | 'open' | 'done';

export default function TaskBoard({ tasks }: { tasks: Task[] }) {
  const [title, setTitle] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const [editingId, setEditingId] = useState<string | null>(null); // NEW
  const [editTitle, setEditTitle] = useState(''); // NEW: uncommitted draft
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const editInputRef = useRef<HTMLInputElement>(null); // NEW
  const router = useRouter();

  let visibleTasks = tasks;
  if (filter === 'open') {
    visibleTasks = tasks.filter(task => !task.done);
  }
  if (filter === 'done') {
    visibleTasks = tasks.filter(task => task.done);
  }

  // NEW: after the edit input is on screen, move keyboard focus into it.
  useEffect(() => {
    if (editingId) {
      editInputRef.current?.focus();
      editInputRef.current?.select();
    }
  }, [editingId]);

  async function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanTitle = title.trim();
    if (!cleanTitle) {
      setError('Enter a task title.');
      return;
    }

    setBusy(true);
    setError('');
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: cleanTitle }),
      });

      if (!response.ok) {
        setError(`Could not add task (${response.status})`);
        setBusy(false);
        return;
      }

      setTitle('');
      router.refresh();
      setBusy(false);
    } catch {
      setError('Could not connect to the server');
      setBusy(false);
    }
  }

  async function toggleTask(taskId: string, done: boolean) {
    setBusy(true);
    setError('');
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ done }),
      });

      if (!response.ok) {
        setError(`Could not update task (${response.status})`);
        setBusy(false);
        return;
      }

      router.refresh();
      setBusy(false);
    } catch {
      setError('Could not connect to the server');
      setBusy(false);
    }
  }

  async function deleteTask(taskId: string) {
    setBusy(true);
    setError('');
    try {
      const response = await fetch(`/api/tasks/${taskId}`, { method: 'DELETE' });

      if (!response.ok) {
        setError(`Could not delete task (${response.status})`);
        setBusy(false);
        return;
      }

      router.refresh();
      setBusy(false);
    } catch {
      setError('Could not connect to the server');
      setBusy(false);
    }
  }

  // NEW: copy the saved title into the draft; never edit the task prop itself.
  function startEditing(task: Task) {
    setEditingId(task.id);
    setEditTitle(task.title);
    setError('');
  }

  // NEW: discard the draft without any request.
  function cancelEditing() {
    setEditingId(null);
    setEditTitle('');
    setError('');
  }

  // NEW: send only the title; leave edit mode only after the server agrees.
  async function saveTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!editingId) return;

    const cleanTitle = editTitle.trim();
    if (!cleanTitle) {
      setError('Task title cannot be empty.');
      return;
    }

    setBusy(true);
    setError('');
    try {
      const response = await fetch(`/api/tasks/${editingId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: cleanTitle }),
      });

      if (!response.ok) {
        // Keep editingId and editTitle so the user can fix or retry.
        setError(`Could not save task (${response.status})`);
        setBusy(false);
        return;
      }

      setEditingId(null);
      setEditTitle('');
      router.refresh();
      setBusy(false);
    } catch {
      setError('Could not connect to the server');
      setBusy(false);
    }
  }

  return (
    <section className="mt-8">
      <form onSubmit={addTask} className="flex flex-wrap gap-3">
        <label htmlFor="task-title" className="sr-only">Task title</label>
        <input
          id="task-title"
          className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2"
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="What needs doing?"
          maxLength={200}
          disabled={busy}
        />
        <button
          type="submit"
          className="rounded-lg bg-violet-600 px-4 py-2 disabled:opacity-50"
          disabled={busy}
        >
          {busy ? 'Adding...' : 'Add task'}
        </button>
      </form>

      <label className="mt-5 flex items-center gap-2 text-sm text-slate-300">
        Show:
        <select
          className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
          value={filter}
          onChange={event => setFilter(event.target.value as Filter)}
        >
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="done">Done</option>
        </select>
      </label>

      {error && <p role="alert" className="mt-3 text-rose-300">{error}</p>}
      <p className="mt-4 text-slate-400">
        Showing {visibleTasks.length} of {tasks.length} tasks
      </p>

      {visibleTasks.length === 0 ? (
        <p className="mt-4 text-slate-400">No tasks in this filter.</p>
      ) : (
        <ul className="mt-4 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
          {visibleTasks.map(task => (
            <li
              key={task.id}
              className="flex items-center gap-3 border-b border-slate-700 px-5 py-4 last:border-b-0"
            >
              <input
                className="size-5 accent-violet-400"
                aria-label={`Complete ${task.title}`}
                type="checkbox"
                checked={task.done}
                disabled={busy}
                onChange={event => {
                  void toggleTask(task.id, event.target.checked);
                }}
              />
              {/* NEW: this row shows either the edit form or the normal view. */}
              {editingId === task.id ? (
                <form className="flex min-w-0 flex-1 items-center gap-2" onSubmit={saveTask}>
                  <label className="sr-only" htmlFor={`edit-${task.id}`}>
                    Edit {task.title}
                  </label>
                  <input
                    id={`edit-${task.id}`}
                    className="min-h-10 min-w-0 flex-1 rounded-lg border border-violet-400 bg-slate-950 px-3 outline-none"
                    ref={editInputRef}
                    value={editTitle}
                    onChange={event => setEditTitle(event.target.value)}
                    maxLength={200}
                    disabled={busy}
                  />
                  <button
                    className="rounded-lg px-3 py-2 text-violet-300 hover:bg-slate-800"
                    type="submit"
                    disabled={busy}
                  >
                    Save
                  </button>
                  <button
                    className="rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800"
                    type="button"
                    disabled={busy}
                    onClick={cancelEditing}
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                <>
                  <span className={`flex-1 ${task.done ? 'text-slate-500 line-through' : ''}`}>
                    {task.title}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800"
                      type="button"
                      disabled={busy}
                      onClick={() => startEditing(task)}
                    >
                      Edit
                    </button>
                    <button
                      className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-rose-400/10 hover:text-rose-300"
                      disabled={busy}
                      type="button"
                      onClick={() => {
                        void deleteTask(task.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
```

Important decisions:

- The draft is local state; the saved title is always `task.title` from
  PostgreSQL. Never write `task.title = editTitle`: that changes nothing in the
  database and breaks React's assumption that props are read-only.
- This is **not** optimistic UI: the old title stays visible in the list until
  the server confirms and `router.refresh()` returns fresh props.
- `<>...</>` is a **fragment**: it groups two elements without adding an
  extra DOM element.
- Starting a second edit simply replaces `editingId` and the draft; the first
  draft is discarded deliberately.

`frontend/app/page.tsx`, `frontend/lib/tasks.ts`, and both Route Handlers do
**not** change today.

#### Step 2: Run and verify

With PostgreSQL running and `frontend/.env.local` configured, run from the
repository root:

```bash
cd frontend
npm run lint
npm run dev
```

Open `http://localhost:3000` and check each item:

1. Click **Edit**: the row becomes an input with the current title already
   selected, so typing replaces it.
2. Type a new title and press **Enter**: the list shows the new title. Reload:
   it is still there.
3. Click **Edit**, change the text, click **Cancel**: the old title returns.
   In DevTools → Network, no request was sent.
4. Clear the input and press **Enter**: "Task title cannot be empty." appears
   and the row stays in edit mode.
5. Using only the keyboard, **Tab** reaches Edit, the input, Save, and Cancel.
6. Stop PostgreSQL (leave `npm run dev` running), edit, and Save: an error
   appears, the form stays open, and your draft is still there. Restart
   PostgreSQL and press Save again: it succeeds.
7. Ticking, deleting, adding, and filtering still work.

**Expected observation:** the user-visible milestone works, its important
failure path is explicit, and existing behavior remains intact.

**If something fails:**

- The input does not get focus: check `ref={editInputRef}` is on the edit
  input and `editingId` is in the effect's dependency array.
- Every row turns into a form: compare `editingId === task.id`, not just
  `editingId`.
- Save reloads the whole page: `event.preventDefault()` is missing in
  `saveTask`.
- The draft disappears after a failed save: `setEditingId(null)` runs before
  `response.ok` is checked.

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant U as You
  participant C as TaskBoard.tsx (browser)
  participant A as api/tasks/[id]/route.ts
  participant P as PostgreSQL
  participant S as page.tsx (Server Component)
  U->>C: Click Edit on task 7 "Buy milk"
  C->>C: startEditing: editingId "7", editTitle "Buy milk"
  C->>C: Effect runs after render: focus() and select()
  U->>C: Type "Buy oat milk" and press Enter
  C->>C: saveTask: preventDefault; trim; setBusy(true)
  C->>A: PATCH /api/tasks/7 body {"title":"Buy oat milk"}
  A->>P: UPDATE tasks SET title = $1 WHERE id = $2 RETURNING ...
  P-->>A: Updated row (or no row / error)
  A-->>C: 200 task JSON (or 400 / 404 / 500)
  C->>C: On 200 clear edit state; on failure keep draft and show error
  C->>S: router.refresh() (success only)
  S->>P: listTasks()
  P-->>S: Fresh rows
  S-->>C: New tasks prop shows "Buy oat milk"
  C-->>U: Row back in viewing mode with the saved title
```

Trace one concrete input. Name every boundary, value, and possible failure.
For example, a blank draft never leaves the browser: `saveTask` stops at the
`trim()` check and keeps edit mode open.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Call focus directly while the component is rendering.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** The input may not exist yet, and rendering now has an external side effect.

**Root cause:** DOM synchronization must happen after React commits the element.

**Restore and verify:** Move focus into an effect keyed by the editing task ID.

One way to break it: delete the `useEffect` and instead write
`if (editingId) editInputRef.current?.focus();` directly in the component body
above `return`. Click Edit: on that first render `editInputRef.current` is
still `null` (the input has not been placed on screen yet), so nothing is
focused. React's lint rules may also warn about reading a ref during render.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

### 9. Interview questions and answers (30 minutes)

#### Q1. What are explicit edit state, useRef, and useEffect?

**Interview-ready answer:** State stores which task is being edited and the draft title. A ref points to the rendered input, and an effect focuses it because focus synchronizes React with the browser DOM.

**Example:** In `frontend/app/TaskBoard.tsx`, clicking Edit on task 7 sets
`editingId` to `"7"` and `editTitle` to `"Buy milk"`. The row renders an
input with `ref={editInputRef}`, and the effect keyed on `[editingId]` calls
`focus()` and `select()` after that input exists.

**Senior follow-up:** `editingId` and `editTitle` can drift (for example a
draft with no editing ID). If editing grows more complex, combine them into one
state object such as `{ mode: 'editing', id, draft }` or use `useReducer`, so
impossible combinations cannot be represented.

#### Q2. How should the backend handle preserving data when editing fails?

**Interview-ready answer:** The server rejects invalid or missing updates explicitly. The client should keep edit mode and the draft value when the request fails so the user can correct or retry it.

**Example:** If task 7 was deleted in another tab, `PATCH /api/tasks/7`
returns 404 from `renameTask` returning `null`. `saveTask` sees
`response.ok === false`, shows "Could not save task (404)", and does not clear
`editingId` or `editTitle`.

**Senior follow-up:** Two tabs renaming the same task is last-write-wins
today. To detect conflicts, add a version or `updated_at` column, send it with
the PATCH, and return 409 when it no longer matches. On 500, log the database
error server-side only; the browser never sees connection details.

#### Q3. What invariant makes the one-pass invariant solution correct?

**Interview-ready answer:** Track the lowest price seen before today and the best profit available at the current price.

**Example:** `[7, 1, 5, 3, 6, 4]`: the minimum becomes `1` on day 1; on day
4, `6 - 1 = 5` raises `best` to `5`, which is returned.

**Senior follow-up:** O(n) time and O(1) space hold for one transaction. If
the problem allows unlimited trades, sum positive daily increases; with at most
k trades or fees, you need a dynamic-programming state per day.

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** Local draft state supports interaction while PostgreSQL remains the final persisted state.

**Example:** `editTitle` holds "Buy oat milk" only in the browser until
`PATCH /api/tasks/7` returns 200. Then `router.refresh()` re-runs `page.tsx`,
`listTasks()` reads PostgreSQL, and `TaskBoard` shows the saved title.

**Senior follow-up:** Each save costs a PATCH plus a refresh read. If users
find saving slow, measure that latency first; optimistic UI could show the new
title immediately but would need rollback on failure and handling for stale
responses that finish out of order.

### 10. Complexity and operational cost

- **DSA:** O(n) time and O(1) space.
- **Application:** Finding the edited task is O(n) in a simple rendered list. Focus is constant work; the network update dominates latency.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 04 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 04: build accessible browser editing`

<a id="prep-day-05"></a>

## Prep Day 05 — Make search and filters shareable

**Date:** Monday, November 30, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Make search and filters shareable.

[Prep Day 04](../lessons/interview-prep/prep-day-04.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](../lessons/interview-prep/README.md) · [Prep Day 06](../lessons/interview-prep/prep-day-06.md)

**Everything to read today is below.** The original [App Day 8](../lessons/day-08.md)
and [DSA Day 05](../dsa-python/lessons/dsa-day-05.md) remain available for
comparison. This prep day covers the URL contract, normalizing `q` and
`status`, the GET search form, and a first parameterized PostgreSQL filter.
Title editing belongs to Prep Days 03–04. Making `%` and `_` literal,
filtering the JSON API, and the search loading/empty/error states belong to
Prep Day 06; automated tests begin on Prep Day 07. Write runnable code in the
named project and practice files, not in this Markdown file.

### Learning objectives

- explain url state versus local state in beginner-friendly language;
- explain reading and normalizing search parameters and its failure boundary;
- implement or verify the listed MiniTrack milestone;
- solve DSA Day 05 using the two pointers pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **two pointers** pattern?

Use this format:

```md
## Monday, November 30, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — URL state versus local state:** Search and filter values belong in the URL when users should reload, bookmark, or share them. Temporary draft text can stay local until the user applies it.

**Backend focus — Reading and normalizing search parameters:** The server treats query parameters as untrusted strings, normalizes allowed values, and passes a typed filter to the data function.

**Today's connection:** The URL becomes the input to server rendering, so navigation and data selection describe the same state.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 05: two pointers"]
  DSA --> FE["Frontend: URL state versus local state"]
  FE --> BE["Backend: Reading and normalizing search parameters"]
  BE --> App["MiniTrack: Make search and filters shareable"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-05.py`](../dsa-python/practice/day-05.py)
**Pattern:** two pointers

#### Problem: Valid Palindrome

Given a string, return `True` if it reads the same forwards and backwards
after you **ignore** every character that is not a letter or digit and treat
uppercase and lowercase letters as equal. Otherwise return `False`.
Assume an empty string, or a string with no letters or digits, counts as a
palindrome.

```python
solve('A man, a plan, a canal: Panama')  # True  ("amanaplanacanalpanama")
solve('race a car')                      # False ("raceacar" reversed is "racaecar")
```

The simple approach builds a cleaned copy and compares it with its reverse:
O(n) time but O(n) extra space. Two pointers give the same answer with O(1)
extra space by reading the original string from both ends.

#### Start coding

In the practice file, replace the `raise NotImplementedError` line with your
own implementation. This is the starting shape:

```python
def solve(s):
    # Return True if s is a palindrome when only letters and digits count.
    raise NotImplementedError
```

Three small Python tools are useful:

- `ch.isalnum()` returns `True` when the one-character string `ch` is a
  letter or a digit. For example, `'a'.isalnum()` and `'7'.isalnum()` are
  `True`, while `','.isalnum()` and `' '.isalnum()` are `False`.
- `ch.lower()` returns the lowercase version, so `'A'.lower()` is `'a'`.
- Inside a loop, `continue` skips the rest of the current pass and starts the
  next pass immediately.

A **pointer** here is just an index variable. `left` starts at the first index
and `right` starts at the last index; they walk toward each other.

```mermaid
flowchart TD
  Start["left = 0, right = last index"] --> Loop{"left < right?"}
  Loop -- No --> Yes["Return True"]
  Loop -- Yes --> SkipL{"s[left] is letter or digit?"}
  SkipL -- No --> MoveL["left += 1"] --> Loop
  SkipL -- Yes --> SkipR{"s[right] is letter or digit?"}
  SkipR -- No --> MoveR["right -= 1"] --> Loop
  SkipR -- Yes --> Same{"Lowercase characters equal?"}
  Same -- No --> No["Return False"]
  Same -- Yes --> Both["left += 1 and right -= 1"] --> Loop
```

#### Invariant to say aloud

Move inward from both ends while skipping ignored characters and comparing normalized values.

More precisely: every character outside `left..right` has already been either
skipped or matched with its mirror partner, so only the middle part can still
break the palindrome.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 5
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** the day-specific checker prints `Case 1 passed` and
`Case 2 passed` for the two sample strings above, and the completed reference
suite still passes. Two samples are not a complete test, so add your own.

You can also temporarily add these checks below your `solve` function in the
practice file, then run `python3 dsa-python/practice/day-05.py`:

```python
if __name__ == '__main__':
    assert solve('A man, a plan, a canal: Panama') is True
    assert solve('race a car') is False
    assert solve('') is True           # Nothing to compare.
    assert solve(' ') is True          # Only ignored characters.
    assert solve('.,!') is True
    assert solve('a') is True
    assert solve('Aa') is True         # Case is ignored.
    assert solve('ab') is False
    assert solve('0P') is False        # Digits count and are not letters.
    assert solve('ab,A') is True       # Cleaned text is "aba".
    print('All checks passed')
```

Remove the block before committing if you prefer to keep practice files clean.

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple solution</summary>

```python
def solve(s):
    # Keep only letters and digits, all in lowercase.
    cleaned = ''.join(ch.lower() for ch in s if ch.isalnum())
    # cleaned[::-1] is a reversed copy of the string.
    return cleaned == cleaned[::-1]
```

</details>

There is no slower "try everything" version worth writing here, so this is
the simpler alternative. It visits each character a constant number of times:
O(n) time. It builds the cleaned string and its reversed copy: O(n) extra
space. It is a good first answer; the interviewer's follow-up is usually
"can you avoid the copy?"

#### Optimized code — reveal after attempting

<details>
<summary>Show the two-pointer solution</summary>

```python
def solve(s):
    left, right = 0, len(s) - 1
    while left < right:
        # Skip ignored characters on the left before comparing.
        if not s[left].isalnum():
            left += 1
            continue
        # Skip ignored characters on the right before comparing.
        if not s[right].isalnum():
            right -= 1
            continue
        if s[left].lower() != s[right].lower():
            return False
        left += 1
        right -= 1
    return True
```

</details>

Each pass moves at least one pointer inward, so the loop runs at most `n`
times: O(n) time and O(1) extra space. For an empty string `right` starts at
`-1`, the loop never runs, and the answer is `True`.

Trace for `'ab,A'` (indices `0:a`, `1:b`, `2:,`, `3:A`):

| Pass | left | right | Characters | Action |
|---:|---:|---:|---|---|
| 1 | 0 | 3 | `a` and `A` | Both kept; `a == a`; move both inward |
| 2 | 1 | 2 | `b` and `,` | Right is ignored; `right -= 1` |
| 3 | 1 | 1 | — | `left < right` is false; return `True` |

The middle `b` never needs a partner, which is why the loop stops when the
pointers meet.

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force or simple approach?

**Interview-ready answer:** “I build a cleaned string containing only the
lowercase letters and digits, then compare it with its reverse. That is O(n)
time and O(n) extra space because of the copy.”

**Example:** `'race a car'` becomes `'raceacar'`; its reverse is
`'racaecar'`, so the answer is `False`.

**Follow-up:** Is building the copy wrong? No. It is clear and correct. Offer
it first, then improve space if the interviewer asks or if strings can be
very large.

##### DSA Q2. How do two pointers improve the solution?

**Interview-ready answer:** “I compare the first and last useful characters
directly in the original string. One pointer starts at the left and one at
the right. I skip ignored characters, compare lowercase values, and move both
pointers inward after a match. No cleaned copy is needed.”

**Example:** In `'A man, a plan...'`, the first comparison is `A` against the
final `a`; they match after `.lower()`.

**Follow-up:** Why skip only one pointer per pass and then `continue`? It keeps
each pass simple and re-checks `left < right` after every move, so the
pointers can never cross while skipping punctuation.

##### DSA Q3. Why is the algorithm correct?

**Interview-ready answer:** “Before each pass, every kept character outside
`left..right` has already been matched with its mirror partner. If I find a
mismatch, the string cannot be a palindrome. If the pointers meet or cross
without a mismatch, every pair matched, so it is a palindrome.”

**Example:** For `'ab,A'`, the outer `a`/`A` pair matches; the comma is
skipped; the middle `b` has no partner to compare.

**Follow-up:** What would break the invariant? Comparing before skipping. Then
`'a,'` would compare `a` with `,` and wrongly return `False`.

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “O(n) time because each pass moves at least one
pointer and the pointers move at most `n` positions in total. O(1) extra
space because I store only two integer indices.”

**Example:** For `'.,!'`, the left pointer skips punctuation until it meets
the right pointer: at most three moves.

**Follow-up:** Are there hidden costs? `str.lower()` on one character is
constant work. For full Unicode case rules, `str.casefold()` is more correct
than `lower()` for some languages, but it can change string length in rare
cases, so clarify requirements.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “An empty string, only punctuation or spaces, one
character, mixed case, digits mixed with letters, and punctuation at either
end. I also confirm whether digits count and how case should be compared.”

**Example:** `''` and `' '` return `True`; `'0P'` returns `False` because
`0` and `p` differ.

**Follow-up:** Why does `'0P'` matter? It catches implementations that only
keep letters with `isalpha()` and therefore ignore the digit.

##### DSA Q6. What if one deletion is allowed?

**Interview-ready answer:** “That is the ‘valid palindrome II’ variant. I run
the same two pointers. At the first mismatch, I check whether skipping the left
character or skipping the right character leaves a palindrome for the middle
part. Each check is a plain two-pointer scan, so the total is still O(n) time
and O(1) space.”

**Example:** For `'abca'`, the first mismatch is `b` versus `c`; skipping `c`
leaves `'aba'`, so the answer is `True`.

**Follow-up:** Why not try deleting every character? That is n deletions times
an O(n) check: O(n²). The first mismatch is the only place a deletion can
help.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

Search and filter values belong in the URL when users should reload, bookmark, or share them. Temporary draft text can stay local until the user applies it.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.

Compare the two kinds of state already in MiniTrack:

| Value | Where it lives | Survives reload? | Shareable? |
|---|---|---|---|
| `title` draft in `TaskBoard` | React `useState` | No | No |
| `editingId` and `editTitle` (Prep Day 04) | React `useState` | No | No |
| Day 5 `filter` in the **Show** select | React `useState` | No | No |
| `q` and `status` after today | URL: `/?q=react&status=open` | Yes | Yes |
| Task rows | PostgreSQL | Yes | Yes (through the server) |

#### How

Today's URL contract is:

```text
/?q=react&status=open
```

- `q` is trimmed and limited to 100 characters;
- `status` is `all`, `open`, or `done`;
- a missing or unknown value means `q=""` and `status="all"`.

```mermaid
flowchart TD
  A["1. User submits search form"] --> B["2. Browser navigates with ?q=&status="]
  B --> C["3. Next.js provides searchParams"]
  C --> D["4. Validate and normalize values"]
  D --> E["5. Build bound PostgreSQL query"]
  E --> F["6. PostgreSQL filters rows"]
  F --> G["7. Server Component renders results"]
```

The form uses `method="GET"`. When a GET form is submitted, the browser
itself turns each named field into the query string: `name="q"` becomes `q=`
and `name="status"` becomes `status=`. No JavaScript, `useState`, or `fetch`
is needed, so there are no debounce timers or out-of-order responses yet.

Create `frontend/app/SearchForm.tsx`. It has no `'use client'`, so it is a
Server Component:

```tsx
import type { TaskFilters } from '../lib/validation';

export default function SearchForm({ filters }: { filters: TaskFilters }) {
  return (
    // method="GET" puts the field values in the URL: /?q=...&status=...
    <form
      className="my-6 grid gap-3 rounded-2xl border border-slate-700 bg-slate-900 p-4 sm:grid-cols-[1fr_auto_auto]"
      method="GET"
    >
      <label>
        <span className="sr-only">Search task titles</span>
        <input
          className="min-h-11 w-full rounded-lg border border-slate-700 bg-slate-950 px-3"
          type="search"
          name="q"
          // defaultValue: the browser owns the draft; the URL owns the applied value.
          defaultValue={filters.query}
          placeholder="Search tasks"
          maxLength={100}
        />
      </label>

      <label>
        <span className="sr-only">Task status</span>
        <select
          className="min-h-11 rounded-lg border border-slate-700 bg-slate-950 px-3"
          name="status"
          defaultValue={filters.status}
        >
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="done">Done</option>
        </select>
      </label>

      <button className="min-h-11 rounded-lg bg-violet-500 px-5 font-bold">
        Apply
      </button>
    </form>
  );
}
```

`defaultValue` (instead of `value`) makes these **uncontrolled** inputs: the
browser keeps the draft the user is typing, and React only supplies the
starting value from the URL. Typing does not change the URL; pressing
**Apply** or **Enter** does. That is the "draft stays local until applied"
rule from the What section.

Files to open deliberately:

- `frontend/app/page.tsx`
- `frontend/app/TaskBoard.tsx`
- `frontend/lib/tasks.ts`

Answer before coding:

- Which value is persistent, and which value is temporary interaction state?
- What starts this behavior?
- What should the user see while work is pending?
- What should remain unchanged when the operation fails?

**Leave `TaskBoard.tsx` unchanged today.** It still has the Day 5 **Show**
select (`useState<Filter>`). That select only narrows the list the server has
already filtered, and it is lost on reload. Keep it for now as the contrast in
today's debugging exercise.

### 5. Backend guided study (1 hour 30 minutes)

#### What

The server treats query parameters as untrusted strings, normalizes allowed values, and passes a typed filter to the data function.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

#### Step 1: Add one shared filter type and normalizer

Anyone can type `/?status=banana&q=` followed by 10,000 characters. The
normalizer turns any input into one of a few safe shapes.

Replace `frontend/lib/validation.ts` with this complete file. The first three
functions are unchanged from Prep Day 02; the filter code is new:

```ts
export function normalizeTitle(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const title = value.trim();
  return title.length >= 1 && title.length <= 200 ? title : null;
}

export function isValidId(raw: string): boolean {
  return /^[1-9]\d*$/.test(raw) && Number.isSafeInteger(Number(raw));
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

// New today: the only three status values the app understands.
export type TaskStatus = 'all' | 'open' | 'done';

export type TaskFilters = {
  query: string;
  status: TaskStatus;
};

export function normalizeTaskFilters(
  queryValue: unknown,
  statusValue: unknown,
): TaskFilters {
  // Anything that is not a string (missing, or an array from ?q=a&q=b) becomes ''.
  const query =
    typeof queryValue === 'string'
      ? queryValue.trim().slice(0, 100)
      : '';

  // An allowlist: unknown values fall back to 'all' instead of reaching SQL.
  const status: TaskStatus =
    statusValue === 'open' || statusValue === 'done'
      ? statusValue
      : 'all';

  return { query, status };
}
```

`slice(0, 100)` keeps at most the first 100 characters. Falling back to
defaults is a deliberate policy for a page; an API could return `400`
instead. Documenting the choice matters more than pretending only one policy
is valid.

| Raw URL | Normalized `TaskFilters` |
|---|---|
| `/` | `{ query: '', status: 'all' }` |
| `/?q=%20%20React%20%20&status=open` | `{ query: 'React', status: 'open' }` |
| `/?status=banana` | `{ query: '', status: 'all' }` |
| `/?q=a&q=b` | `{ query: '', status: 'all' }` (array is not a string) |

#### Step 2: Add a first filtered query

Add this function to the end of `frontend/lib/tasks.ts`, and add the import at
the top. Keep every existing function (`listTasks`, `createTask`, `setDone`,
`deleteTask`, and Prep Day 03's `renameTask`):

```ts
// Add near the other imports at the top of the file.
import type { TaskFilters } from './validation';

// Add after the existing functions.
export async function searchTasks(filters: TaskFilters): Promise<Task[]> {
  // First version: % and _ typed by a user still act as LIKE wildcards.
  // Prep Day 06 escapes them so they are matched literally.
  const pattern = `%${filters.query}%`;

  const result = await getPool().query<TaskRow>(
    `
      SELECT id, title, done, created_at
      FROM tasks
      WHERE title ILIKE $1
        AND (
          $2::text = 'all'
          OR done = ($2::text = 'done')
        )
      ORDER BY id
    `,
    // Values travel separately from the SQL text.
    [pattern, filters.status],
  );

  return result.rows.map(toTask);
}
```

How the SQL reads:

- `ILIKE` is case-insensitive pattern matching. In a pattern, `%` means "any
  characters". So `%react%` matches any title containing `react`, `React`,
  or `REACT`. An empty query gives `%%`, which matches every title.
- `$2::text` tells PostgreSQL to treat parameter 2 as text.
- `$2::text = 'all' OR ...` lets every row through when the status is `all`.
- `done = ($2::text = 'done')` compares the `done` column with a boolean:
  `true` when status is `done`, `false` when status is `open`.

The SQL structure is fixed; only bound values change. A title containing a
quote such as `Bob's task` is data, not SQL syntax.

### 6. MiniTrack implementation (1 hour)

**Milestone source:** Day 8 URL-backed search and status filters

1. Read searchParams in the Server Component.
2. Build a form or navigation update that writes q and status to the URL.
3. Verify reload and copied URLs preserve the result.

#### Step 1: Read searchParams in the page

Next.js gives a page its query string as `searchParams`, which is a
**Promise**. Awaiting it inside the `Suspense` subtree makes only that part
request-specific, so the header stays in the static shell. You do not need
`io()` in this component: awaiting `searchParams` already marks it as
request-time. Do not add `dynamic = 'force-dynamic'`.

Replace `frontend/app/page.tsx` with:

```tsx
import { Suspense } from 'react';
import SearchForm from './SearchForm';
import TaskBoard from './TaskBoard';
import { searchTasks } from '../lib/tasks';
import { normalizeTaskFilters } from '../lib/validation';
import type { Task } from './types';

type PageProps = {
  searchParams: Promise<{
    q?: string;
    status?: string;
  }>;
};

async function TaskResults({ searchParams }: PageProps) {
  // Awaiting searchParams makes this subtree request-specific.
  const params = await searchParams;
  const filters = normalizeTaskFilters(params.q, params.status);

  let tasks: Task[] = [];
  let error: string | null = null;
  try {
    tasks = await searchTasks(filters);
  } catch (err) {
    error = err instanceof Error ? err.message : 'Unable to load tasks';
  }

  return (
    <>
      {/* The form shows the same filters the URL and SQL used. */}
      <SearchForm filters={filters} />
      {error ? (
        <p
          className="rounded-xl border border-rose-400/30 bg-rose-400/10 p-4 text-rose-200"
          role="alert"
        >
          Could not load tasks: {error}. Check PostgreSQL and DATABASE_URL.
        </p>
      ) : (
        <TaskBoard tasks={tasks} />
      )}
    </>
  );
}

export default function Home({ searchParams }: PageProps) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-5 py-12">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-300">
          Your workspace
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">MiniTrack</h1>
        <p className="mt-2 text-slate-400">
          Simple tasks. Serious full-stack concepts.
        </p>
      </header>

      <Suspense fallback={<p className="mt-8 text-slate-400">Filtering tasks...</p>}>
        <TaskResults searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
```

`Home` is not `async`; it passes the unresolved Promise down. `TaskResults`
awaits it, normalizes once, and uses the same `filters` for both the SQL call
and the form's default values, so the screen and the URL cannot disagree.
`listTasks` is no longer used by the page; keep it in `tasks.ts` because
`GET /api/tasks` still uses it until Prep Day 06.

#### Step 2: Run and verify

With PostgreSQL running and `frontend/.env.local` configured, from the
repository root:

```bash
cd frontend
npx tsc --noEmit
npm run lint
npm run dev
```

Add tasks such as `Learn React`, `Review SQL`, and `React testing`, then mark
`Review SQL` done. Check each case:

1. Type `react`, choose **Open**, press **Apply**. The address bar shows
   `/?q=react&status=open` and only open titles containing "react" appear.
2. Reload. The same results and the same form values remain.
3. Copy the URL into a new tab. The same view appears.
4. Apply a second search, then press the browser **Back** button. The previous
   search and results return.
5. Visit `/?status=banana`. The select shows **All** and all tasks appear.
6. Visit `/?q=zzzz`. The board shows its empty message.
7. Add, complete, edit, and delete a task while a filter is applied; each
   still works and the list refreshes through `router.refresh()`.

**Expected observation:** the user-visible milestone works, its important
failure path is explicit, and existing behavior remains intact.

**Failure checks:**

- Stop PostgreSQL and reload: the page shows the `role="alert"` message, not
  an empty list that looks like "no matches". Restart PostgreSQL afterwards.
- If the URL changes but results do not, confirm the inputs have `name="q"`
  and `name="status"` and that `TaskResults` passes `filters` to `searchTasks`.
- If TypeScript reports that `searchParams` is not a Promise, check the
  `PageProps` type and that you `await` it.

**Known gap for Prep Day 06:** searching for `%` currently matches every
title because `%` is still a wildcard. That is a search-semantics bug, not
SQL injection: the value is bound.

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant U as User
  participant B as Browser
  participant N as Next.js page.tsx
  participant V as normalizeTaskFilters
  participant P as PostgreSQL
  U->>B: Type react, choose Open, press Apply
  B->>N: GET /?q=react&status=open
  N->>N: Send static header and Suspense fallback
  N->>V: params.q = "react", params.status = "open"
  V-->>N: { query: "react", status: "open" }
  N->>P: SELECT ... ILIKE $1 ... with ["%react%", "open"]
  P-->>N: Matching open rows, or an error
  N-->>B: Stream SearchForm + TaskBoard, or alert
  B-->>U: URL, form, and list show the same filters
```

Trace one concrete input. Name every boundary, value, and possible failure.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Keep the active filter only in component state.

You do not need to write new code: the Day 5 **Show** select in `TaskBoard`
is exactly this design. Choose **Done** in that select (not in the search
form), copy the URL, and reload.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** Reloading or sharing the URL loses the selected view.

**Root cause:** Local state is not a durable navigation representation.

**Restore and verify:** Move committed filter state into search parameters.
Use the search form's **Status** select instead, reload, and confirm
`status=done` survives in the URL and on screen.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

### 9. Interview questions and answers (30 minutes)

#### Q1. What is url state versus local state?

**Interview-ready answer:** Search and filter values belong in the URL when users should reload, bookmark, or share them. Temporary draft text can stay local until the user applies it.

**Example:** In `frontend/app/SearchForm.tsx`, the search input uses
`defaultValue={filters.query}`, so typing is a local browser draft. Pressing
**Apply** submits the GET form and the URL becomes `/?q=react&status=open`.
In contrast, `TaskBoard`'s `title` and `editTitle` are `useState` drafts that
should never appear in the URL.

**Senior follow-up:** URL state becomes hard to maintain when there are many
interdependent parameters, when values are large, or when they are private
(never put tokens or personal data in a URL; it ends up in history and logs).
If users need live search, measure request volume first, then add debouncing
and cancellation while still writing the committed value to the URL.

#### Q2. How should the backend handle reading and normalizing search parameters?

**Interview-ready answer:** The server treats query parameters as untrusted strings, normalizes allowed values, and passes a typed filter to the data function.

**Example:** `normalizeTaskFilters(params.q, params.status)` turns
`/?q=  React  &status=banana` into `{ query: 'React', status: 'all' }`.
`searchTasks(filters)` then binds `'%React%'` and `'all'` as `$1` and `$2`.

**Senior follow-up:** A silent fallback is friendly for a page, but an API
client may prefer `400` so mistakes are visible. Either way, never log or
echo raw query strings that may contain personal data, and when PostgreSQL is
unavailable show a generic error rather than an empty "no matches" list.

#### Q3. What invariant makes the two pointers solution correct?

**Interview-ready answer:** Move inward from both ends while skipping ignored characters and comparing normalized values.

**Example:** For `'ab,A'`: compare `a` with `A` (match), skip the comma,
then the pointers meet at `b`, so return `True`. For `'race a car'`, the
first mismatch is `e` versus `a`, so return `False`.

**Senior follow-up:** O(n) time and O(1) space assume `isalnum()` and
`lower()` are constant-time per character. If full Unicode case folding is
required, `casefold()` is more correct, and if the input is a stream that can
only be read forwards, two pointers no longer apply directly.

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** The URL becomes the input to server rendering, so navigation and data selection describe the same state.

**Example:** Applying the form sends `GET /?q=react&status=open`. The page
awaits `searchParams`, normalizes it, runs one parameterized `SELECT`, and
streams `SearchForm` plus `TaskBoard`. A colleague opening the same URL gets
the same view.

**Senior follow-up:** The first bottleneck to measure is the `%react%`
`ILIKE` query, which can scan every row. Check it with `EXPLAIN` on realistic
data before adding an index. The first security risk is tomorrow's wildcard
semantics and, later, making sure filters are always combined with the
signed-in owner.

### 10. Complexity and operational cost

- **DSA:** O(n) time and O(1) auxiliary space.
- **Application:** Parsing query parameters is constant for this fixed filter set. Database cost depends on selectivity and indexing, which must be measured.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 05 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 05: make search and filters shareable`

<a id="prep-day-06"></a>

## Prep Day 06 — Implement safe PostgreSQL search

**Date:** Tuesday, December 1, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Implement safe PostgreSQL search.

[Prep Day 05](../lessons/interview-prep/prep-day-05.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](../lessons/interview-prep/README.md) · [Prep Day 07](../lessons/interview-prep/prep-day-07.md)

**Everything to read today is below.** The original [App Day 8](../lessons/day-08.md)
(sections 3, 6, 7, and the debugging exercise) and
[DSA Day 06](../dsa-python/lessons/dsa-day-06.md) remain available for
comparison. Prep Day 05 already added the URL contract,
`normalizeTaskFilters`, `SearchForm.tsx`, and a first `searchTasks`. Today
makes `%`, `_`, and `\` literal, filters `GET /api/tasks` with the same rules,
and checks the loading, empty, and error states. Automated tests begin on
Prep Day 07. Write runnable code in the named project and practice files, not
in this Markdown file.

### Learning objectives

- explain search loading, empty, and error states in beginner-friendly language;
- explain parameterized ilike and wildcard semantics and its failure boundary;
- implement or verify the listed MiniTrack milestone;
- solve DSA Day 06 using the two pointers on sorted data pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **two pointers on sorted data** pattern?

Use this format:

```md
## Tuesday, December 1, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Search loading, empty, and error states:** A complete search experience distinguishes pending work, zero matching records, validation failures, and server failures instead of showing an unexplained blank list.

**Backend focus — Parameterized ILIKE and wildcard semantics:** Binding a value prevents SQL injection, but percent and underscore still have wildcard meaning inside LIKE patterns. Decide whether users are allowed to use those wildcards and escape them when literal search is required.

**Today's connection:** Normalized URL input becomes bound SQL data and returns a server-rendered filtered list.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 06: two pointers on sorted data"]
  DSA --> FE["Frontend: Search loading, empty, and error states"]
  FE --> BE["Backend: Parameterized ILIKE and wildcard semantics"]
  BE --> App["MiniTrack: Implement safe PostgreSQL search"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-06.py`](../dsa-python/practice/day-06.py)
**Pattern:** two pointers on sorted data

#### Problem: Two Sum II (sorted input)

You are given a list of integers sorted from smallest to largest and a target.
Return the **zero-based** indices `[i, j]` with `i < j` of two different
elements whose sum equals the target. Return an empty list if no pair exists.
Assume any one valid pair is acceptable.

```python
solve([2, 7, 11, 15], 9)  # [0, 1]  because 2 + 7 == 9
solve([1, 2, 4, 6], 8)    # [1, 3]  because 2 + 6 == 8
```

This is Prep Day 01's Two Sum with one extra fact: the list is **sorted**.
Prep Day 01 used a dictionary (O(n) extra space). Sorted order lets us use two
pointers instead, with O(1) extra space.

#### Start coding

In the practice file, replace the `raise NotImplementedError` line with your
own implementation. This is the starting shape:

```python
def solve(nums, target):
    # nums is sorted ascending. Return [left, right] or [] if no pair exists.
    raise NotImplementedError
```

No new Python helpers are needed: a `while` loop and two index variables are
enough. The key idea is what sorted order guarantees:

- moving `left` one step **right** can only keep the sum the same or make it
  **larger**;
- moving `right` one step **left** can only keep the sum the same or make it
  **smaller**.

So a sum that is too small says "move `left`", and a sum that is too large
says "move `right`".

```mermaid
flowchart TD
  Start["left = 0, right = last index"] --> Loop{"left < right?"}
  Loop -- No --> Empty["Return empty list"]
  Loop -- Yes --> Sum["total = nums[left] + nums[right]"]
  Sum --> Eq{"total == target?"}
  Eq -- Yes --> Found["Return [left, right]"]
  Eq -- No --> Small{"total < target?"}
  Small -- Yes --> Right["left += 1 to raise the sum"] --> Loop
  Small -- No --> Left["right -= 1 to lower the sum"] --> Loop
```

#### Invariant to say aloud

Compare the sum at both ends; move the left pointer for a small sum and the right pointer for a large sum.

More precisely: if a valid pair exists, it always lies inside `left..right`.
Each move discards only an index that cannot belong to any valid pair.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 6
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** the day-specific checker prints `Case 1 passed` and
`Case 2 passed` for the two samples above, and the completed reference suite
still passes. The checker compares exact lists, so return zero-based indices
in increasing order.

You can also temporarily add these checks below your `solve` function in the
practice file, then run `python3 dsa-python/practice/day-06.py`:

```python
if __name__ == '__main__':
    assert solve([2, 7, 11, 15], 9) == [0, 1]
    assert solve([1, 2, 4, 6], 8) == [1, 3]
    assert solve([], 5) == []
    assert solve([5], 10) == []            # One element cannot be used twice.
    assert solve([2, 2], 4) == [0, 1]      # Duplicates at different indices.
    assert solve([-3, -1, 4, 6], 3) == [0, 3]
    assert solve([1, 2, 3], 100) == []     # Every sum is too small.
    assert solve([1, 2, 3], -5) == []      # Every sum is too large.
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple solution</summary>

```python
def solve(nums, target):
    for i in range(len(nums)):
        # Start after i so the two indices are always different.
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []
```

</details>

This ignores the sorted order and checks every pair: O(n²) time in the worst
case and O(1) extra space. The Prep Day 01 dictionary solution also works
here, in O(n) expected time but O(n) extra space.

#### Optimized code — reveal after attempting

<details>
<summary>Show the two-pointer solution</summary>

```python
def solve(nums, target):
    left, right = 0, len(nums) - 1
    while left < right:
        total = nums[left] + nums[right]
        if total == target:
            return [left, right]
        if total < target:  # raise sum
            left += 1
        else:  # lower sum
            right -= 1
    return []
```

</details>

Each pass moves one pointer inward, so there are at most `n - 1` passes: O(n)
time in the worst case (no hashing caveat) and O(1) extra space.

Trace for `[1, 2, 4, 6]` with target `8`:

| Pass | left | right | nums[left] + nums[right] | Action |
|---:|---:|---:|---|---|
| 1 | 0 | 3 | 1 + 6 = 7 | Too small; `left += 1` |
| 2 | 1 | 3 | 2 + 6 = 8 | Equal; return `[1, 3]` |

In pass 1, `1` is discarded because even the largest partner, `6`, is too
small for it.

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “I try every pair `i < j` and return the first
pair whose sum equals the target. That is O(n²) time and O(1) extra space. It
does not use the fact that the list is sorted.”

**Example:** For `[1, 2, 4, 6]` and `8`, it checks `1+2`, `1+4`, `1+6`, then
`2+4`, then `2+6` and returns `[1, 3]`.

**Follow-up:** The dictionary solution from Two Sum is O(n) expected time but
O(n) space. Sorted input makes an O(1)-space answer possible.

##### DSA Q2. What is the core idea of the two-pointer solution?

**Interview-ready answer:** “I start with the smallest and largest values. If
their sum is too small, the only way to increase it is to move the left
pointer right. If it is too large, I move the right pointer left. I stop when
the sum matches or the pointers meet.”

**Example:** `[2, 7, 11, 15]` with `9`: `2 + 15 = 17` is too large, then
`2 + 11 = 13` too large, then `2 + 7 = 9`, so return `[0, 1]`.

**Follow-up:** Why must the input be sorted? Without sorted order, moving a
pointer has no predictable effect on the sum, so discarding an index is not
safe.

##### DSA Q3. Why is it correct to discard an index?

**Interview-ready answer:** “If `nums[left] + nums[right]` is too small, then
`nums[left]` plus any other remaining value is also too small, because
`nums[right]` is the largest remaining value. So `left` cannot be in any
answer and can be discarded. The symmetric argument discards `right` when the
sum is too large. Therefore, if an answer exists, it stays between the
pointers.”

**Example:** In `[1, 2, 4, 6]` with target `8`, `1 + 6 = 7`. Since `6` is the
biggest partner left, `1` can never reach `8`.

**Follow-up:** This invariant is the proof. State it before coding so the
interviewer sees why the pointer moves are not guesses.

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “O(n) time because each pass moves one pointer
inward and they can move at most `n - 1` times in total. O(1) extra space for
two indices and a sum.”

**Example:** For `[1, 2, 3]` and target `100`, the left pointer moves twice
and then the loop stops with `[]`.

**Follow-up:** Unlike the dictionary version, this O(n) is a true worst-case
bound with no hash-collision caveat. If the input were unsorted, sorting first
costs O(n log n) and you would need to keep original indices.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “An empty list, one element, duplicates such as
`[2, 2]`, negative numbers, a target smaller than every sum, a target larger
than every sum, and a pair at the very ends.”

**Example:** `[5]` with `10` returns `[]` because the same element cannot be
used twice; `[2, 2]` with `4` returns `[0, 1]`.

**Follow-up:** Ask whether indices should be zero-based or one-based. Some
interview platforms expect `[1, 2]` for the first pair; this course uses
`[0, 1]`.

##### DSA Q6. How does this extend to 3Sum?

**Interview-ready answer:** “Sort the list. For each index `i`, run this same
two-pointer search on the part to the right of `i` for target
`-nums[i]`. Skip equal neighbouring values to avoid duplicate triplets. That
is O(n²) time and O(1) extra space besides the output.”

**Example:** For `[-1, 0, 1, 2, -1, -4]`, sorting gives
`[-4, -1, -1, 0, 1, 2]`; fixing `-1` and searching for `1` finds `[-1, 0, 1]`
and `[-1, -1, 2]`.

**Follow-up:** Sorting changes positions, so 3Sum normally returns values,
not original indices. Clarify which output is required.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

A complete search experience distinguishes pending work, zero matching records, validation failures, and server failures instead of showing an unexplained blank list.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.
A blank screen is ambiguous: the user cannot tell "still loading" from "no
matches" from "the database is down".

#### How

You built every state on Prep Day 05; today you verify each one deliberately.
This table maps each state to the exact code that renders it:

| State | Trigger | Where it is rendered | What the user sees |
|---|---|---|---|
| Pending | `TaskResults` is awaiting `searchParams` or `searchTasks` | `<Suspense fallback={...}>` in `frontend/app/page.tsx` | `Filtering tasks...` |
| Empty | Query succeeded with zero rows | `visibleTasks.length === 0` branch in `frontend/app/TaskBoard.tsx` | `No tasks in this filter.` plus the search form |
| Invalid input | `?status=banana`, `?q=a&q=b`, or a very long `q` | `normalizeTaskFilters` in `frontend/lib/validation.ts` | Safe defaults (`All`, empty search); no error |
| Server failure | PostgreSQL is down or the query throws | `catch` in `TaskResults` | Red `role="alert"` box: `Could not load tasks: ...` |
| Success | Rows returned | `TaskBoard` list | Matching tasks; form shows applied filters |

Two details are worth saying aloud:

- The search form is rendered **inside** the success and error branches, so
  the user can always change the search even when results fail.
- Normalization is a policy choice. MiniTrack silently falls back for the
  page. The JSON API below uses the same policy, so the page and API never
  disagree.

Because `SearchForm` is a plain `method="GET"` form, submitting it performs a
normal browser navigation. The server sends the static header and the
`Filtering tasks...` fallback first, then streams the results. On a fast local
database the fallback may only flash; the next step makes it visible.

Files to open deliberately:

- `frontend/app/page.tsx`
- `frontend/app/TaskBoard.tsx`
- `frontend/lib/tasks.ts`

Answer before coding:

- Which value is persistent, and which value is temporary interaction state?
- What starts this behavior?
- What should the user see while work is pending?
- What should remain unchanged when the operation fails?

### 5. Backend guided study (1 hour 30 minutes)

#### What

Binding a value prevents SQL injection, but percent and underscore still have wildcard meaning inside LIKE patterns. Decide whether users are allowed to use those wildcards and escape them when literal search is required.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

#### Two different problems

| Problem | Example input | Protected by |
|---|---|---|
| **SQL injection:** input changes the SQL structure | `' OR 1=1 --` | Bound parameters (`$1`) — done since Prep Day 01 |
| **Wildcard semantics:** input is data, but the pattern language interprets it | `100%` or `a_b` | Escaping `%`, `_`, and `\` — today |

In an `ILIKE` pattern:

- `%` matches any sequence of characters (including none);
- `_` matches exactly one character;
- `\` is the escape character we will declare, so `\%` means a real `%`.

With Prep Day 05's code, searching `100%` builds the pattern `%100%%`, which
also matches `1000 tests`. Searching `a_b` matches `axb`. MiniTrack's contract
says search is a **literal** substring match, so those are bugs.

#### Escape the pattern characters

A **regular expression** (regex) is a small pattern language for finding text.
In JavaScript, `/[\\%_]/g` means "find any one of the characters `\`, `%`, or
`_`, everywhere in the string" (`g` means global: every match, not just the
first). In the replacement `'\\$&'`, `\\` is one real backslash and `$&` means
"the character that was matched". So each special character gets a backslash
in front of it:

| Input | `escapeLike(input)` | Final pattern `%...%` |
|---|---|---|
| `react` | `react` | `%react%` |
| `100%` | `100\%` | `%100\%%` |
| `a_b` | `a\_b` | `%a\_b%` |
| `C:\temp` | `C:\\temp` | `%C:\\temp%` |

### 6. MiniTrack implementation (1 hour)

**Milestone source:** Day 8 SQL filtering and wildcard behavior

1. Add owner-safe or current-stage SQL predicates for status and title.
2. Bind every value instead of concatenating SQL data.
3. Test percent, underscore, empty text, and no-result cases.

MiniTrack has no users yet, so "current-stage" means status and title only.
An owner predicate arrives with authentication on a later prep day.

#### Step 1: Make search literal in `frontend/lib/tasks.ts`

Add `escapeLike` above `searchTasks`, then replace the Prep Day 05
`searchTasks` with this version. Keep all other functions and the
`import type { TaskFilters } from './validation';` line:

```ts
function escapeLike(value: string): string {
  // Escape the escape character first, then PostgreSQL wildcard characters.
  return value.replace(/[\\%_]/g, '\\$&');
}

export async function searchTasks(filters: TaskFilters): Promise<Task[]> {
  // The user's text is literal; only our own outer % characters are wildcards.
  const pattern = `%${escapeLike(filters.query)}%`;

  const result = await getPool().query<TaskRow>(
    `
      SELECT id, title, done, created_at
      FROM tasks
      WHERE title ILIKE $1 ESCAPE '\\'
        AND (
          $2::text = 'all'
          OR done = ($2::text = 'done')
        )
      ORDER BY id
    `,
    [pattern, filters.status],
  );

  return result.rows.map(toTask);
}
```

Two changes from Prep Day 05: `escapeLike(filters.query)` and
`ESCAPE '\\'`. Inside a JavaScript template string, `'\\'` becomes the SQL
text `'\'`, a one-character string declaring backslash as the escape
character. `escapeLike` is not exported: it is an internal detail of the data
layer. The values are still bound; the SQL structure is still fixed.

#### Step 2: Filter the JSON API with the same rules

Replace `frontend/app/api/tasks/route.ts` with this complete file. `POST` is
unchanged from Prep Day 01; `GET` now reads the query string:

```ts
import type { NextRequest } from 'next/server';
import { createTask, searchTasks } from '../../../lib/tasks';
import { isRecord, normalizeTaskFilters, normalizeTitle } from '../../../lib/validation';

// GET /api/tasks?q=react&status=open
export async function GET(request: NextRequest): Promise<Response> {
  // Same normalizer as page.tsx, so the page and API apply identical rules.
  const filters = normalizeTaskFilters(
    request.nextUrl.searchParams.get('q'),
    request.nextUrl.searchParams.get('status'),
  );

  try {
    return Response.json(await searchTasks(filters), {
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch (error: unknown) {
    console.error('GET /api/tasks failed:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function POST(request: Request): Promise<Response> {
  // Network JSON is untrusted, so keep it unknown until validation.
  let parsingBody = true;
  try {
    const body: unknown = await request.json();
    parsingBody = false;
    const title = normalizeTitle(isRecord(body) ? body.title : undefined);
    if (!title) {
      return Response.json({ error: 'title must be 1–200 characters' }, { status: 400 });
    }
    return Response.json(await createTask(title), { status: 201 });
  } catch (error: unknown) {
    if (parsingBody) {
      return Response.json({ error: 'Invalid JSON' }, { status: 400 });
    }
    console.error('POST /api/tasks failed:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

`NextRequest` is the Web `Request` plus Next.js helpers;
`request.nextUrl.searchParams.get('q')` returns the first `q` value as a
string, or `null` if missing. `normalizeTaskFilters` accepts `unknown`, so
`null` safely becomes `''`. With no query string, `GET /api/tasks` behaves as
before: every task. `listTasks` is now unused by the routes; you may keep it.

#### Step 3: Run and verify

From the repository root:

```bash
cd frontend
npx tsc --noEmit
npm run lint
npm run dev
```

In a second terminal, create titles that expose wildcard bugs:

```bash
curl -s -X POST http://localhost:3000/api/tasks \
  -H 'Content-Type: application/json' -d '{"title":"100% done"}'
curl -s -X POST http://localhost:3000/api/tasks \
  -H 'Content-Type: application/json' -d '{"title":"1000 tests"}'
curl -s -X POST http://localhost:3000/api/tasks \
  -H 'Content-Type: application/json' -d '{"title":"a_b"}'
curl -s -X POST http://localhost:3000/api/tasks \
  -H 'Content-Type: application/json' -d '{"title":"axb"}'
curl -s -X POST http://localhost:3000/api/tasks \
  -H 'Content-Type: application/json' -d '{"title":"C:\\temp"}'
```

In JSON, `\\` is one real backslash, so the last title is `C:\temp`.
Now search through the API. In a URL, `%` must be written `%25` and `\` must
be written `%5C`:

```bash
curl -s 'http://localhost:3000/api/tasks?q=100%25'      # only "100% done"
curl -s 'http://localhost:3000/api/tasks?q=a_b'         # only "a_b"
curl -s 'http://localhost:3000/api/tasks?q=C:%5C'       # only "C:\temp"
curl -s 'http://localhost:3000/api/tasks?q=%25'         # only titles containing %
curl -s 'http://localhost:3000/api/tasks?q=zzzz'        # []
curl -s 'http://localhost:3000/api/tasks?q=&status=open' # all open tasks
curl -s "http://localhost:3000/api/tasks?q=%27%20OR%201%3D1%20--"  # [] — text, not SQL
```

Then repeat `100%`, `a_b`, and `zzzz` in the browser search form. The browser
encodes the characters for you.

**Expected observation:** the user-visible milestone works, its important
failure path is explicit, and existing behavior remains intact.

**Failure checks:**

- **Error state:** stop PostgreSQL, reload `/?q=react`, and confirm the red
  alert appears with the search form still visible. Run
  `curl -i 'http://localhost:3000/api/tasks?q=react'` and expect `500` with
  `{"error":"Internal server error"}` — no SQL text or password in the body.
  The detailed error appears only in the `npm run dev` terminal. Restart
  PostgreSQL.
- **Empty state:** `/?q=zzzz` shows `No tasks in this filter.`, not a blank
  page or an error.
- **Pending state:** to see the fallback clearly, temporarily add
  `await new Promise(resolve => setTimeout(resolve, 2000));` as the first line
  of `TaskResults`, reload, observe `Filtering tasks...`, then **remove the
  delay**.
- **Cost check:** a leading `%` usually prevents a normal B-tree index from
  helping. Inspect the plan in `psql`:

```bash
psql -d minitrack -c "EXPLAIN SELECT id FROM tasks WHERE title ILIKE '%react%'"
```

Expect a `Seq Scan on tasks` (every row is checked). That is fine for a small
table; measure with realistic data before adding a trigram index.

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant U as User or curl
  participant R as GET /api/tasks route.ts
  participant V as normalizeTaskFilters
  participant D as searchTasks + escapeLike
  participant P as PostgreSQL
  U->>R: GET /api/tasks?q=100%25&status=all
  R->>V: q = "100%", status = "all"
  V-->>R: { query: "100%", status: "all" }
  R->>D: searchTasks(filters)
  D->>D: escapeLike("100%") returns "100\%", then wraps it in outer % signs
  D->>P: SELECT ... ILIKE $1 ESCAPE '\' with values [pattern, "all"]
  P-->>D: Only rows whose title contains "100%"
  D-->>R: Task[]
  R-->>U: 200 JSON, or 500 generic error if PostgreSQL fails
```

Trace one concrete input. Name every boundary, value, and possible failure.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Concatenate the search text directly into the SQL string.

For example, temporarily change the query to
``WHERE title ILIKE '%${filters.query}%'`` and remove `$1` from the values.
Do this only against your local development database.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** Quotes or SQL syntax in the input can change the query and create an injection vulnerability.

Searching `Bob's` now produces a PostgreSQL syntax error (a `500`), and a
crafted value can change which rows are returned.

**Root cause:** The query structure and untrusted data were mixed.

**Restore and verify:** Restore placeholders and pass search values separately.

Then search `Bob's` again and confirm it returns matching rows or `[]`, not
an error. As a second, smaller experiment, remove only `escapeLike` and
confirm `100%` matches `1000 tests` again: still safe from injection, but the
wildcard semantics changed. Restore it.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

### 9. Interview questions and answers (30 minutes)

#### Q1. What is search loading, empty, and error states?

**Interview-ready answer:** A complete search experience distinguishes pending work, zero matching records, validation failures, and server failures instead of showing an unexplained blank list.

**Example:** In MiniTrack, `/?q=react` first shows the `Suspense` fallback
`Filtering tasks...`; `/?q=zzzz` shows `No tasks in this filter.` from
`TaskBoard.tsx`; `/?status=banana` falls back to **All**; and a stopped
database shows the `role="alert"` message from the `catch` in
`TaskResults`, with the search form still usable.

**Senior follow-up:** These states get harder with live (debounced) search:
you need to cancel or ignore stale responses, avoid flashing the fallback on
every keystroke, and keep old results visible while new ones load. Add that
only when users or measurements show the GET form is too slow.

#### Q2. How should the backend handle parameterized ilike and wildcard semantics?

**Interview-ready answer:** Binding a value prevents SQL injection, but percent and underscore still have wildcard meaning inside LIKE patterns. Decide whether users are allowed to use those wildcards and escape them when literal search is required.

**Example:** `searchTasks` calls `escapeLike('100%')`, producing `100\%`,
binds the pattern `%100\%%` as `$1`, and declares `ESCAPE '\'`. The result
contains `100% done` but not `1000 tests`.

**Senior follow-up:** When PostgreSQL is unavailable, the route logs the
error with `console.error` on the server and returns only
`{"error":"Internal server error"}`; it must never return the SQL text,
connection string, or stack trace. Later, add the owner predicate so search
cannot reveal another user's titles.

#### Q3. What invariant makes the two pointers on sorted data solution correct?

**Interview-ready answer:** Compare the sum at both ends; move the left pointer for a small sum and the right pointer for a large sum.

**Example:** `[1, 2, 4, 6]` with target `8`: `1 + 6 = 7` is too small, so
discard index `0`; `2 + 6 = 8`, so return `[1, 3]`.

**Senior follow-up:** O(n) time and O(1) space hold only because the input is
already sorted. If it is unsorted, sorting costs O(n log n) and loses original
indices, so the Prep Day 01 dictionary solution may be the better choice.

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** Normalized URL input becomes bound SQL data and returns a server-rendered filtered list.

**Example:** The browser form and `curl 'http://localhost:3000/api/tasks?q=a_b'`
both go through `normalizeTaskFilters` and the same `searchTasks`, so the page
and the API return the same `a_b` task and exclude `axb`.

**Senior follow-up:** The first bottleneck is the `Seq Scan` from
`ILIKE '%...%'`. Measure with `EXPLAIN (ANALYZE, BUFFERS)` on realistic data;
a `pg_trgm` GIN index can help reads but adds storage and write cost.

### 10. Complexity and operational cost

- **DSA:** O(n) time and O(1) space.
- **Application:** A leading-wildcard search can scan many rows. Use EXPLAIN with representative data before adding a specialized index.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 06 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 06: implement safe postgresql search`

<a id="prep-day-07"></a>

## Prep Day 07 — Add focused unit tests

**Date:** Wednesday, December 2, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Add focused unit tests.

[Prep Day 06](../lessons/interview-prep/prep-day-06.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](../lessons/interview-prep/README.md) · [Prep Day 08](../lessons/interview-prep/prep-day-08.md)

**Everything to read today is below.** The original [App Day 9](../lessons/day-09.md)
(sections 1, 2, and 4) and [DSA Day 07](../dsa-python/lessons/dsa-day-07.md)
remain available for comparison. This prep day covers only fast **unit**
tests for the pure functions in `frontend/lib/validation.ts`: no server, no
database, no browser. The isolated test database, PostgreSQL integration
tests, and Playwright browser tests belong to Prep Day 08. Search and filters
were completed on Prep Days 05–06. Write runnable code in the named project
and practice files, not in this Markdown file.

### Learning objectives

- explain testing behavior rather than component internals in beginner-friendly language;
- explain pure validation tests and its failure boundary;
- implement or verify the listed MiniTrack milestone;
- solve DSA Day 07 using the sliding window pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **sliding window** pattern?

Use this format:

```md
## Wednesday, December 2, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Testing behavior rather than component internals:** A frontend test should interact through labels, roles, text, and user actions, then assert what a user can observe. Internal state names are implementation details.

**Backend focus — Pure validation tests:** Pure normalization and validation functions are fast unit-test targets because they need no server or database. Test valid values and each rejected boundary.

**Today's connection:** Unit tests create a fast safety net at the narrowest deterministic boundary.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 07: sliding window"]
  DSA --> FE["Frontend: Testing behavior rather than component internals"]
  FE --> BE["Backend: Pure validation tests"]
  BE --> App["MiniTrack: Add focused unit tests"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-07.py`](../dsa-python/practice/day-07.py)
**Pattern:** sliding window

#### Problem: Longest Substring Without Repeating Characters

Given a string, return the **length** of the longest substring in which no
character appears twice. A substring is a run of **consecutive** characters.
Return `0` for an empty string.

```python
solve('abcabcbb')  # 3  ("abc")
solve('bbbbb')     # 1  ("b")
solve('')          # 0
```

A **substring** is different from a subsequence: in `'pwwkew'`, `'wke'` is a
substring, but `'pwke'` is not, because its letters are not next to each other.

#### Start coding

In the practice file, replace the `raise NotImplementedError` line with your
own implementation. This is the starting shape:

```python
def solve(s):
    # Return the length of the longest substring with no repeated character.
    raise NotImplementedError
```

Python tools you will use:

- `enumerate(s)` gives index and character pairs: `enumerate('ab')` produces
  `(0, 'a')` and then `(1, 'b')`.
- A dictionary such as `{'a': 0}` can remember that `'a'` was last seen at
  index `0`. `ch in last_seen` checks whether a key exists.
- `max(a, b)` returns the larger number.

A **window** is the current substring `s[left..right]`, described by two
indices. The right edge moves forward one character at a time. When the new
character is already inside the window, the left edge jumps just past the
earlier copy, so the window contains no repeats again.

```mermaid
flowchart TD
  Start["last_seen = empty, left = 0, best = 0"] --> Next{"Another character at right?"}
  Next -- No --> Done["Return best"]
  Next -- Yes --> Dup{"ch seen at an index >= left?"}
  Dup -- Yes --> Jump["left = last_seen[ch] + 1"] --> Save
  Dup -- No --> Save["last_seen[ch] = right"]
  Save --> Best["best = max(best, right - left + 1)"] --> Next
```

#### Invariant to say aloud

Expand the right edge and move the left edge past a repeated character while tracking the best valid window.

More precisely: after each step, `s[left..right]` has no repeated character,
and `best` is the length of the longest such window seen so far.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 7
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** the day-specific checker prints `Case 1 passed`
through `Case 3 passed` for the three samples above, and the completed
reference suite still passes. The samples do not include the tricky `'abba'`
case, so add it yourself.

You can also temporarily add these checks below your `solve` function in the
practice file, then run `python3 dsa-python/practice/day-07.py`:

```python
if __name__ == '__main__':
    assert solve('abcabcbb') == 3
    assert solve('bbbbb') == 1
    assert solve('') == 0
    assert solve('a') == 1
    assert solve(' ') == 1         # A space is a character too.
    assert solve('au') == 2        # Whole string is the answer.
    assert solve('pwwkew') == 3    # "wke", not the subsequence "pwke".
    assert solve('dvdf') == 3      # "vdf": left jumps to 1, not 2.
    assert solve('abba') == 2      # left must never move backwards.
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple solution</summary>

```python
def solve(s):
    best = 0
    for start in range(len(s)):
        seen = set()  # characters in s[start..end]
        for end in range(start, len(s)):
            if s[end] in seen:
                break  # Any longer substring from start also repeats.
            seen.add(s[end])
        best = max(best, len(seen))
    return best
```

</details>

A `set` is like a dictionary with only keys; `x in seen` checks membership.
For every start index, this grows the substring until a repeat appears. That
is O(n²) time in the worst case (for example, all different characters) and
O(k) extra space, where `k` is the number of different characters. Checking
every substring separately, without the early `break`, would be O(n³).

#### Optimized code — reveal after attempting

<details>
<summary>Show the sliding-window solution</summary>

```python
def solve(s):
    last_seen = {}  # character -> most recent index
    left = 0
    best = 0
    for right, ch in enumerate(s):
        # Only a copy inside the current window (index >= left) is a repeat.
        if ch in last_seen and last_seen[ch] >= left:
            left = last_seen[ch] + 1  # discard old duplicate
        last_seen[ch] = right
        best = max(best, right - left + 1)
    return best
```

</details>

`right` visits each index once and `left` only moves forward, so the work is
O(n) time with average constant-time dictionary operations. The dictionary
holds at most one entry per distinct character: O(k) extra space, where `k`
is at most `n` and at most the alphabet size.

Trace for `'abba'` — the case that catches most bugs:

| right | ch | `last_seen` before | Repeat inside window? | left after | Window | best |
|---:|---|---|---|---:|---|---:|
| 0 | `a` | `{}` | No | 0 | `a` | 1 |
| 1 | `b` | `{a: 0}` | No | 0 | `ab` | 2 |
| 2 | `b` | `{a: 0, b: 1}` | Yes, `1 >= 0` | 2 | `b` | 2 |
| 3 | `a` | `{a: 0, b: 2}` | No, `0 < 2` (outside window) | 2 | `ba` | 2 |

At `right = 3`, the old `a` at index `0` is already outside the window.
Without the `>= left` check, `left` would jump **back** to `1` and the window
`bba` would wrongly contain two `b`s, giving `3`.

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “For each start index, I extend the substring to
the right, keeping a set of characters. When I see a repeat, I stop extending
from that start. I track the largest set size. That is O(n²) time and O(k)
space.”

**Example:** For `'abcabcbb'`, start `0` grows to `abc` and stops at the
second `a`; the best so far is `3`.

**Follow-up:** The waste is that each new start rebuilds almost the same set.
The sliding window reuses the previous window instead of starting over.

##### DSA Q2. What is the core sliding-window idea?

**Interview-ready answer:** “I keep one window with no repeats. I always move
the right edge forward. If the new character already appears inside the
window, I move the left edge to just after that earlier copy. A dictionary of
last-seen indices lets me jump directly instead of moving left one step at a
time.”

**Example:** In `'dvdf'`, at the second `d` (index 2), the earlier `d` is at
`0`, so `left` becomes `1` and the window is `vd`; then `f` makes `vdf`,
length `3`.

**Follow-up:** A version with a set and a `while` loop that removes
characters from the left is also O(n), because each character is added and
removed at most once.

##### DSA Q3. Why is the `last_seen[ch] >= left` check necessary?

**Interview-ready answer:** “The dictionary remembers characters from the
whole string, not only the current window. A remembered index smaller than
`left` is outside the window, so it is not a repeat. Without the check, `left`
could move backwards and the window would contain duplicates again.”

**Example:** `'abba'` must return `2`. Without the check, the final `a` moves
`left` back to `1` and the code returns `3`.

**Follow-up:** An equivalent fix is `left = max(left, last_seen[ch] + 1)`.
Both express the invariant that `left` never decreases.

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “O(n) time because `right` visits each index once,
`left` only moves forward, and dictionary operations are O(1) on average.
O(k) space for the dictionary, where `k` is the number of distinct
characters.”

**Example:** For a string of 1,000,000 lowercase letters, the dictionary holds
at most 26 entries.

**Follow-up:** With heavy hash collisions, dictionary operations can degrade.
If the alphabet is small and known, a fixed-size list indexed by character
code gives guaranteed O(1) access.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “An empty string, one character, all the same
character, all different characters, spaces or punctuation, and a repeat
whose earlier copy is already outside the window.”

**Example:** `''` gives `0`; `'bbbbb'` gives `1`; `'au'` gives `2`;
`'abba'` gives `2`.

**Follow-up:** Ask whether the input is ASCII or full Unicode, and whether
uppercase and lowercase are different. In Python, `'A'` and `'a'` are
different characters unless you normalize them.

##### DSA Q6. What if at most `k` distinct characters are allowed?

**Interview-ready answer:** “The window rule changes from ‘no repeats’ to ‘at
most `k` distinct characters’. I keep a count of each character in the
window. When the number of distinct characters exceeds `k`, I move `left`
forward, decreasing counts and deleting zero counts, until the rule holds
again. It is still O(n) time.”

**Example:** For `'eceba'` with `k = 2`, the longest valid substring is
`'ece'`, length `3`.

**Follow-up:** That variant is a variable sliding window with a `while`
shrink loop, which is tomorrow's DSA pattern. The validity rule is the only
part that changes.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

A frontend test should interact through labels, roles, text, and user actions, then assert what a user can observe. Internal state names are implementation details.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.

A test is a **contract check**. If it checks internals, a harmless refactor
breaks it. If it checks behavior, it only breaks when users would notice.

#### How

Look at what a user (or screen reader) can actually find in
`frontend/app/TaskBoard.tsx` and `frontend/app/SearchForm.tsx`:

| User-visible handle | Where it comes from |
|---|---|
| Textbox labelled **Task title** | `aria-label="Task title"` on the add input |
| Button named **Add task** | the submit button's text |
| Checkbox labelled **Complete Learn React** | ``aria-label={`Complete ${task.title}`}`` |
| Button named **Edit**, **Save**, **Cancel**, **Delete** | button text |
| Search box labelled **Search task titles** | the `sr-only` label in `SearchForm` |
| Text **No tasks in this filter.** | the empty branch |

Now compare two ways to describe the same check, in plain language:

| Coupled to internals (fragile) | Coupled to behavior (robust) |
|---|---|
| "`editingId` equals `'7'`" | "a textbox labelled **Edit Learn React** is visible" |
| "`setBusy` was called with `true`" | "the **Add task** button is disabled while saving" |
| "the element with class `line-through` exists" | "the checkbox **Complete Learn React** is checked after reload" |
| "`toggleTask` was called" | "after checking the box and reloading, it is still checked" |

Renaming `editingId` to `activeTaskId`, or replacing the Tailwind classes, must
not break a good test. Removing the **Task title** label **should** break one,
because a real user would be affected.

Today you apply the same principle at the smallest layer: you test what
`normalizeTitle` **returns**, not how it computes it. Prep Day 08 automates
the browser checks in the right-hand column with Playwright, using these exact
labels.

Files to open deliberately:

- `frontend/test/unit/validation.test.ts` (you create it today)
- `frontend/lib/validation.ts`
- `frontend/package.json`

Answer before coding:

- Which value is persistent, and which value is temporary interaction state?
- What starts this behavior?
- What should the user see while work is pending?
- What should remain unchanged when the operation fails?

### 5. Backend guided study (1 hour 30 minutes)

#### What

Pure normalization and validation functions are fast unit-test targets because they need no server or database. Test valid values and each rejected boundary.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

#### Choose the right test level

```mermaid
flowchart BT
  U["Many fast unit tests<br/>validation and pure helpers"] --> I["Fewer integration tests<br/>task layer + PostgreSQL"]
  I --> E["Small number of E2E tests<br/>browser + Next.js + PostgreSQL"]
```

Use the lowest level that proves the behavior. Today is only the bottom layer.

A function is **pure** when its result depends only on its arguments and it
changes nothing outside itself: no network, database, clock, or random
numbers. Every function in `frontend/lib/validation.ts` is pure, and that
file has no `server-only` or `pg` import, so tests can import it directly.

These are the exact rules every route and page already relies on:

| Function | Accepts | Rejects or falls back |
|---|---|---|
| `normalizeTitle(value)` | strings of 1–200 characters after trimming | non-strings, blank, more than 200 → `null` |
| `isValidId(raw)` | `'1'`, `'12'`, up to `Number.MAX_SAFE_INTEGER` | `''`, `'0'`, `'-1'`, `'1.5'`, `'12abc'`, `'007'`, unsafe integers → `false` |
| `isRecord(value)` | plain objects such as `{}` | `null`, arrays, strings → `false` |
| `normalizeTaskFilters(q, status)` | trimmed `q` up to 100 characters; `open`/`done` | non-string `q` → `''`; unknown status → `'all'` |

Test the **boundaries** — the values on each side of a rule — because that is
where off-by-one mistakes hide: 200 characters is valid, 201 is not.

#### Tools used in the test file

- `node:test` is Node's built-in test runner. `test('name', () => { ... })`
  registers one test.
- `node:assert/strict` provides checks. `assert.equal(actual, expected)`
  compares with `===`. `assert.deepEqual(actual, expected)` compares objects
  field by field.
- `tsx` runs TypeScript files directly, so Node can load `.ts` tests without a
  separate build step.

### 6. MiniTrack implementation (1 hour)

**Milestone source:** Day 9 unit tests and test boundaries

1. Write a success test before changing implementation.
2. Add empty, whitespace, wrong-type, too-long, and unsafe-ID cases.
3. Break one condition deliberately and confirm the test fails for the expected reason.

#### Step 1: Install the test runner and add scripts

From `frontend/`:

```bash
npm install --save-dev tsx
```

Add these two lines to the existing `"scripts"` object in
`frontend/package.json`. Keep `dev`, `build`, `start`, and `lint`:

```json
"test": "npm run test:unit",
"test:unit": "tsx --test test/unit/*.test.ts"
```

Prep Day 08 adds `test:integration` and `test:e2e` next to these.

#### Step 2: Write the unit tests

Create `frontend/test/unit/validation.test.ts`. Write the first success test,
run it, and only then add the rejection cases:

```ts
import assert from 'node:assert/strict';
import test from 'node:test';
import {
  isRecord,
  isValidId,
  normalizeTaskFilters,
  normalizeTitle,
} from '../../lib/validation';

test('normalizes a valid title', () => {
  assert.equal(normalizeTitle('  Learn testing  '), 'Learn testing');
});

test('accepts titles at the length boundaries', () => {
  assert.equal(normalizeTitle('x'), 'x');
  assert.equal(normalizeTitle('x'.repeat(200)), 'x'.repeat(200));
  // Length is checked after trimming, so surrounding spaces do not count.
  assert.equal(normalizeTitle(`  ${'x'.repeat(200)}  `), 'x'.repeat(200));
});

test('rejects invalid titles', () => {
  assert.equal(normalizeTitle(''), null);
  assert.equal(normalizeTitle('   '), null);
  assert.equal(normalizeTitle(42), null);
  assert.equal(normalizeTitle(null), null);
  assert.equal(normalizeTitle(undefined), null);
  assert.equal(normalizeTitle('x'.repeat(201)), null);
});

test('accepts positive, safe integer IDs', () => {
  assert.equal(isValidId('1'), true);
  assert.equal(isValidId('12'), true);
  assert.equal(isValidId(String(Number.MAX_SAFE_INTEGER)), true);
});

test('rejects malformed and unsafe IDs', () => {
  for (const raw of ['', '0', '-1', '1.5', '12abc', ' 12', '007', '1 OR 1=1']) {
    assert.equal(isValidId(raw), false, `expected ${JSON.stringify(raw)} to be rejected`);
  }
  // 2^53 cannot be represented exactly as a JavaScript number.
  assert.equal(isValidId('9007199254740992'), false);
});

test('recognizes only plain JSON objects as records', () => {
  assert.equal(isRecord({ title: 'x' }), true);
  assert.equal(isRecord(null), false);
  assert.equal(isRecord([]), false);
  assert.equal(isRecord('title'), false);
});

test('normalizes search and status', () => {
  assert.deepEqual(
    normalizeTaskFilters('  React  ', 'open'),
    { query: 'React', status: 'open' },
  );

  assert.deepEqual(
    normalizeTaskFilters(undefined, 'unknown'),
    { query: '', status: 'all' },
  );
});

test('bounds and sanitizes search input', () => {
  assert.equal(normalizeTaskFilters('q'.repeat(150), 'done').query.length, 100);
  // A repeated ?q=a&q=b can arrive as an array; it is not a string.
  assert.deepEqual(
    normalizeTaskFilters(['a', 'b'], 'DONE'),
    { query: '', status: 'all' },
  );
});
```

Each test name describes a behavior, and each assertion checks a returned
value. The optional third argument to `assert.equal` is a message printed if
that check fails, which tells you **which** ID broke the loop.

#### Step 3: Run the tests

From `frontend/`:

```bash
npm run test:unit
npx tsc --noEmit
npm run lint
```

**Expected observation:** the user-visible milestone works, its important
failure path is explicit, and existing behavior remains intact.

The test output lists eight passing tests and ends with lines similar to:

```text
ℹ tests 8
ℹ pass 8
ℹ fail 0
```

No PostgreSQL server or `npm run dev` is needed. The run should take well
under a few seconds.

#### Step 4: Prove the tests can fail

In `frontend/lib/validation.ts`, temporarily change `title.length <= 200` to
`title.length < 200` and run `npm run test:unit` again. Expect exactly one
failure, `accepts titles at the length boundaries`, with an
`AssertionError` showing `null` where `'xxx...'` was expected. Restore `<=`
and rerun until all eight pass.

**Failure checks:**

- `Cannot find module '../../lib/validation'`: the test file must be at
  `frontend/test/unit/validation.test.ts`, and `validation.ts` at
  `frontend/lib/validation.ts`.
- `sh: tsx: command not found`: run `npm install --save-dev tsx` inside
  `frontend/`.
- `Could not find '.../test/unit/*.test.ts'`: the glob found no file; check
  the folder and the `.test.ts` suffix.
- A test that imports `frontend/lib/tasks.ts` or `db.ts` is not a unit test:
  it needs PostgreSQL and belongs to Prep Day 08.

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant Y as You
  participant N as npm run test:unit
  participant T as tsx --test
  participant F as validation.test.ts
  participant V as lib/validation.ts
  Y->>N: Run from frontend/
  N->>T: tsx --test test/unit/*.test.ts
  T->>F: Load the TypeScript test file
  F->>V: normalizeTitle("x".repeat(201))
  V-->>F: null
  F->>F: assert.equal(null, null) passes
  T-->>N: tests 8, pass 8, fail 0, exit code 0
  N-->>Y: Green run, or the failing test name and diff
```

Trace one concrete input. Name every boundary, value, and possible failure.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Write a test that only checks an internal helper was called.

For example, imagine a test that passes only if `normalizeTitle` internally
calls `value.trim()`. Now refactor `normalizeTitle` to strip spaces with a
regular expression instead: the returned values are identical, but that test
fails.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** A refactor can fail the test even when user behavior remains correct.

**Root cause:** The test is coupled to implementation instead of the contract.

**Restore and verify:** Assert the returned value, response, or visible result.

Your `validation.test.ts` already does this: `normalizeTitle('  Learn testing  ')`
must return `'Learn testing'`, however it is computed. Make the regex
refactor, confirm all eight tests still pass, then revert it.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

### 9. Interview questions and answers (30 minutes)

#### Q1. What is testing behavior rather than component internals?

**Interview-ready answer:** A frontend test should interact through labels, roles, text, and user actions, then assert what a user can observe. Internal state names are implementation details.

**Example:** For `frontend/app/TaskBoard.tsx`, a good check is "the
checkbox labelled **Complete Learn React** is still checked after reload", not
"`toggleTask` was called" or "`busy` became `true`". In today's
`frontend/test/unit/validation.test.ts`, the same idea means asserting
`normalizeTitle('  Learn testing  ') === 'Learn testing'`, not how it trims.

**Senior follow-up:** Behavior-focused tests become hard when accessible
names are missing or duplicated, which is itself a product bug worth fixing.
If a component has complex internal logic, extract it into a pure function and
unit-test that, rather than reaching into component state.

#### Q2. How should the backend handle pure validation tests?

**Interview-ready answer:** Pure normalization and validation functions are fast unit-test targets because they need no server or database. Test valid values and each rejected boundary.

**Example:** `normalizeTitle('x'.repeat(200))` is accepted and
`normalizeTitle('x'.repeat(201))` returns `null`; `isValidId('007')` and
`isValidId('9007199254740992')` return `false`. These are the same checks the
`POST` and `PATCH` route handlers rely on before reaching SQL.

**Senior follow-up:** Unit tests prove the rules, not the wiring. A route
could forget to call `isValidId`, and these tests would still pass. That gap
is covered by Prep Day 08's integration and browser tests; keep each layer
focused on what only it can prove.

#### Q3. What invariant makes the sliding window solution correct?

**Interview-ready answer:** Expand the right edge and move the left edge past a repeated character while tracking the best valid window.

**Example:** For `'abba'`: windows `a`, `ab`, then the second `b` moves `left`
to `2` (`b`), then the final `a` was last seen at `0 < left`, so `left` stays
at `2` and the window is `ba`. The answer is `2`.

**Senior follow-up:** O(n) assumes average O(1) dictionary operations and that
`left` never moves backwards. For a small fixed alphabet, an array indexed by
character code removes the hashing caveat.

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** Unit tests create a fast safety net at the narrowest deterministic boundary.

**Example:** Every request path starts with these functions: `POST` uses
`normalizeTitle` and `isRecord`, `PATCH` and `DELETE` use `isValidId`, and the
page and `GET /api/tasks` use `normalizeTaskFilters`. `npm run test:unit`
checks all of them in seconds, without PostgreSQL.

**Senior follow-up:** Run unit tests on every commit in CI because they are
cheap. The first signal to watch is flaky or slow tests; a unit test that
needs a database or network has drifted to the wrong level.

### 10. Complexity and operational cost

- **DSA:** O(n) time and O(k) space.
- **Application:** Each pure test is normally O(input size) and runs without I/O, making the suite cheap enough to run frequently.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 07 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 07: add focused unit tests`

<a id="prep-day-08"></a>

## Prep Day 08 — Test database and browser behavior

**Date:** Thursday, December 3, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Test database and browser behavior.

[Prep Day 07](../lessons/interview-prep/prep-day-07.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](../lessons/interview-prep/README.md) · [Prep Day 09](../lessons/interview-prep/prep-day-09.md)

**Everything to read today is below.** The original [App Day 9](../lessons/day-09.md)
and [DSA Day 08](../dsa-python/lessons/dsa-day-08.md) remain available for
comparison. This prep day covers only the **database integration test** and
the **browser (Playwright) journey**. The fast unit tests for
`normalizeTitle` and `normalizeTaskFilters` were Prep Day 07; sign-in and
authentication start on Prep Day 09. Write runnable code in the named project
and practice files, not in this Markdown file.

### Learning objectives

- explain critical user-flow testing in beginner-friendly language;
- explain isolated real-database integration tests and its failure boundary;
- implement or verify the listed MiniTrack milestone;
- solve DSA Day 08 using the variable sliding window pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **variable sliding window** pattern?

Use this format:

```md
## Thursday, December 3, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Critical user-flow testing:** An end-to-end test proves that a user can complete a valuable journey through the real browser and server. Keep it focused because it is slower and has more failure sources.

**Backend focus — Isolated real-database integration tests:** SQL behavior should be tested against a real isolated PostgreSQL database because mocks cannot prove constraints, SQL syntax, or transaction behavior.

**Today's connection:** Unit, database, and browser tests cover different boundaries without asking one expensive test to prove everything.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 08: variable sliding window"]
  DSA --> FE["Frontend: Critical user-flow testing"]
  FE --> BE["Backend: Isolated real-database integration tests"]
  BE --> App["MiniTrack: Test database and browser behavior"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-08.py`](../dsa-python/practice/day-08.py)
**Pattern:** variable sliding window

#### Problem: Minimum Size Subarray Sum

You are given a positive whole number `target` and a list of **positive**
integers `nums`. Return the length of the **shortest contiguous** part of the
list (a *subarray*) whose sum is at least `target`. If no such part exists,
return `0`.

"Contiguous" means the elements sit next to each other: in `[2, 3, 1]`,
`[3, 1]` is a subarray, but `[2, 1]` is not.

Assumptions: every number in `nums` is greater than zero, and `target` is
greater than zero. Note the argument order: `target` comes first.

```python
solve(7, [2, 3, 1, 2, 4, 3])        # 2, because [4, 3] sums to 7
solve(11, [1, 1, 1, 1, 1, 1, 1, 1])  # 0, because the whole list sums to only 8
```

The simple approach tries every starting position and extends to the right
until the sum is large enough: O(n²) time. A **sliding window** does better.
A window is the part of the list between two positions, `left` and `right`.
Because every number is positive, adding an element on the right always makes
the sum bigger, and removing an element on the left always makes it smaller.
That lets you grow the window until it is valid, then shrink it as far as
possible while it stays valid.

#### Start coding

In the practice file, replace the `raise NotImplementedError` line with your
own implementation. This is the starting shape:

```python
def solve(target, nums):
    # Return the length of the shortest contiguous subarray with sum >= target, or 0.
    raise NotImplementedError
```

Python helpers you can use:

- `enumerate(nums)` gives the index and the value together. For `[2, 3]` it
  produces `(0, 2)` and then `(1, 3)`. Here the index is the window's `right`
  edge.
- `float('inf')` is "infinity": a number larger than any real length. Start
  `best` there so the first valid window always replaces it, and so you can
  tell at the end whether any window was found.
- `min(a, b)` returns the smaller of two values.
- A window from `left` to `right` (both included) has length
  `right - left + 1`.

```mermaid
flowchart TD
  Start[left = 0, running = 0, best = infinity] --> Next[Move right: add nums at right to running]
  Next --> Valid{running >= target?}
  Valid -- Yes --> Record[best = min of best and window length]
  Record --> Shrink[Subtract nums at left, then move left forward]
  Shrink --> Valid
  Valid -- No --> More{More values?}
  More -- Yes --> Next
  More -- No --> Answer[Return 0 if best is infinity, else best]
```

#### Invariant to say aloud

Expand until the sum satisfies the target, then shrink while the window remains valid to find the minimum.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 8
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** the day-specific checker prints `Case 1 passed` and
`Case 2 passed`, and the completed reference suite still passes. The checker
only covers the two supplied examples; it does not test every edge case.

You can also temporarily add these checks below your `solve` function in the
practice file, then run `python3 dsa-python/practice/day-08.py`:

```python
if __name__ == '__main__':
    assert solve(7, [2, 3, 1, 2, 4, 3]) == 2
    assert solve(11, [1, 1, 1, 1, 1, 1, 1, 1]) == 0
    assert solve(4, [1, 4, 4]) == 1           # one element is enough
    assert solve(15, [1, 2, 3, 4, 5]) == 5    # only the whole list works
    assert solve(3, [3]) == 1                 # single element equal to target
    assert solve(5, []) == 0                  # empty list: no window exists
    assert solve(100, [1, 2]) == 0            # sum never reaches target
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple solution</summary>

```python
def solve(target, nums):
    best = 0
    for start in range(len(nums)):
        total = 0
        for end in range(start, len(nums)):
            total += nums[end]
            if total >= target:
                length = end - start + 1
                if best == 0 or length < best:
                    best = length
                break  # a longer window from this start cannot be shorter
    return best
```

</details>

For each start, this adds elements to the right until the sum is big enough,
then stops. In the worst case (no valid window) both loops run fully, so time
is O(n²). It uses O(1) extra space.

#### Optimized code — reveal after attempting

<details>
<summary>Show the sliding window solution</summary>

```python
def solve(target, nums):
    left = 0
    running = 0            # sum of nums[left..right]
    best = float('inf')    # no valid window found yet
    for right, value in enumerate(nums):
        running += value
        while running >= target:
            best = min(best, right - left + 1)
            running -= nums[left]  # shrink while valid
            left += 1
    return 0 if best == float('inf') else best
```

</details>

Each element is added once when `right` reaches it and removed at most once
when `left` passes it, so the total work is O(n) even though there is a loop
inside a loop. Extra space is O(1).

Trace for `solve(7, [2, 3, 1, 2, 4, 3])`:

| right | value | running after adding | Shrinking steps while `running >= 7` | best after | left after |
|---:|---:|---:|---|---:|---:|
| 0 | 2 | 2 | none | ∞ | 0 |
| 1 | 3 | 5 | none | ∞ | 0 |
| 2 | 1 | 6 | none | ∞ | 0 |
| 3 | 2 | 8 | length 4 → best 4; remove 2 → running 6 | 4 | 1 |
| 4 | 4 | 10 | length 4 → best 4; remove 3 → 7; length 3 → best 3; remove 1 → 6 | 3 | 3 |
| 5 | 3 | 9 | length 3 → best 3; remove 2 → 7; length 2 → best 2; remove 4 → 3 | 2 | 5 |

The loop ends and `best` is `2`, the window `[4, 3]`.

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “For every starting index I keep adding elements
to the right until the sum reaches the target. The first time it does, that
is the shortest window for that start, so I record its length and stop. I
return the smallest length found, or 0. That is O(n²) time and O(1) space.”

**Example:** With target `7` and `[2, 3, 1, 2, 4, 3]`, start `0` needs
`[2, 3, 1, 2]` (length 4); start `4` needs `[4, 3]` (length 2).

**Follow-up:** Why can you `break` after the first valid end? Because every
later end makes the window longer, so it cannot improve the answer for that
start.

##### DSA Q2. How does the sliding window improve it?

**Interview-ready answer:** “Instead of restarting the sum for every start, I
keep one running sum for the window between `left` and `right`. I move
`right` forward to grow the window. While the sum is at least the target, I
record the length and move `left` forward to shrink it. Both pointers only
move forward.”

**Example:** At `right = 4`, the window `[1, 2, 4]` has sum 7. Recording
length 3 and then removing `1` drops the sum to 6, so the window stops
shrinking.

**Follow-up:** What is reused? The running sum. Removing one element from the
left costs O(1) instead of re-adding the whole window.

##### DSA Q3. Why is it correct to shrink as soon as the window is valid?

**Interview-ready answer:** “Because all numbers are positive, removing the
leftmost element strictly lowers the sum. For a fixed `right`, the shortest
valid window ending there is found by shrinking until it becomes invalid. Any
`left` I move past could only pair with a later `right` to make a longer
window, so I never lose a better answer.”

**Example:** At `right = 3`, the window `[2, 3, 1, 2]` (sum 8) is recorded
as length 4. Removing `2` leaves `[3, 1, 2]` with sum 6, which is too small,
so shrinking stops. Index 0 is never needed again: any window that starts at
index 0 and ends later would be longer than 4.

**Follow-up:** State the invariant: after the inner loop finishes, the sum of
`nums[left..right]` is less than `target`, and `best` holds the shortest valid
window ending at any index up to `right`.

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “O(n) time and O(1) extra space. The inner
`while` loop looks nested, but `left` only moves forward and can move at most
n times in total, so every element is added once and removed at most once.”

**Example:** In the trace, `left` moves from 0 to 5 across the whole run,
never backwards, even though one step removed two elements.

**Follow-up:** This is *amortized* reasoning: a single iteration of the outer
loop can do several removals, but the total across all iterations is bounded
by n.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “An empty list, no valid window, a single element
that already meets the target, a window that must be the whole list, and a
target that is reached exactly. I also confirm the numbers are positive,
because the algorithm depends on that.”

**Example:** `solve(4, [1, 4, 4])` returns `1`; `solve(15, [1, 2, 3, 4, 5])`
returns `5`; `solve(5, [])` returns `0`.

**Follow-up:** Why return `0` instead of `float('inf')`? The problem defines
`0` as "no answer". Converting at the end keeps the loop simple and the
output matches the contract.

##### DSA Q6. What changes if the list can contain negative numbers?

**Interview-ready answer:** “The sliding window breaks, because adding an
element no longer guarantees a bigger sum and shrinking no longer guarantees
a smaller one. I would use prefix sums with a monotonic deque of candidate
start indices, which still runs in O(n) time but needs O(n) space.”

**Example:** `solve(4, [3, -2, 1, 4])` returns `4`, but the correct answer
is `1` (`[4]` alone). After removing `3`, the window `[-2, 1, 4]` sums to 3,
so shrinking stops, even though dropping `-2` would *raise* the sum and reveal
the shorter window.

**Follow-up:** For positive numbers only, a second alternative is prefix sums
plus binary search for each start: O(n log n). Mention it as a trade-off,
then explain why the O(n) window is better for this contract.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

An end-to-end test proves that a user can complete a valuable journey through the real browser and server. Keep it focused because it is slower and has more failure sources.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.

#### How

Today's tests sit at different levels of a **test pyramid**:

```mermaid
flowchart BT
  U["Many fast unit tests<br/>validation and pure helpers (Prep Day 07)"] --> I["Fewer integration tests<br/>task layer + PostgreSQL (today)"]
  I --> E["Small number of E2E tests<br/>browser + Next.js + PostgreSQL (today)"]
```

Use the lowest level that proves the behavior. Browser tests are valuable but
slower and more fragile than pure function tests.

**Playwright** is a library that opens a real browser (Chromium), clicks and
types like a user, and checks what appears on the page. An **E2E** (end-to-end)
test uses the whole stack: browser → Next.js → PostgreSQL.

Playwright finds elements by their **accessible name**, the same label a screen
reader announces. Today's test relies on two names that `frontend/app/TaskBoard.tsx`
already provides from Prep Day 02:

```tsx
// The add-task input is named "Task title".
<input aria-label="Task title" /* ...existing props... */ />

// Each task checkbox is named "Complete <title>".
<input aria-label={`Complete ${task.title}`} type="checkbox" /* ... */ />
```

If your input uses `<label htmlFor="task-title">Task title</label>` instead of
`aria-label`, Playwright's `getByLabel('Task title')` finds it the same way.

| Playwright call | What it means |
|---|---|
| `page.goto('/')` | Open the page at `baseURL` + `/`. |
| `page.getByLabel('Task title')` | Find the control whose accessible name is "Task title". |
| `page.getByRole('button', { name: /add task/i })` | Find a button whose name matches "add task", ignoring case. |
| `.fill('text')` / `.click()` / `.check()` | Type, click, or tick a checkbox. |
| `await expect(locator).toBeVisible()` | Wait (up to a timeout) until the element appears. |
| `await expect(locator).toBeChecked()` | Wait until the checkbox is ticked. |
| `page.reload()` | Reload the page, which proves the data came from the database. |

Files you will create in section 6:

- `frontend/playwright.config.ts`
- `frontend/test/e2e/tasks.spec.ts`
- `frontend/package.json` (new scripts only)

Answer before coding:

- Which value is persistent (the task row in `minitrack_test`), and which value is temporary interaction state (the input text)?
- What starts this behavior? (Playwright's `fill` and `click`.)
- What should the user see while work is pending? (The button is disabled until the request finishes.)
- What should remain unchanged when the operation fails? (No new row; the reload shows no task.)

### 5. Backend guided study (1 hour 30 minutes)

#### What

SQL behavior should be tested against a real isolated PostgreSQL database because mocks cannot prove constraints, SQL syntax, or transaction behavior.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

#### Why a separate test database

Integration tests delete data so every test starts from a known state. If they
point at your normal `minitrack` database, they erase your personal tasks. So
today you create a second database, `minitrack_test`, with the same schema,
and give the tests their own environment file.

Two protections work together:

1. `frontend/.env.test.local` sets `DATABASE_URL` to `minitrack_test`.
2. A **guard helper** refuses to run if the URL names any other database.

Create `frontend/test/helpers/test-database.ts`:

```ts
export function requireTestDatabase(): string {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL is required for integration tests');
  }

  // new URL(...).pathname is the database part, for example "/minitrack_test".
  const databaseName = new URL(connectionString).pathname;
  if (databaseName !== '/minitrack_test') {
    throw new Error(`Refusing to test against ${databaseName}`);
  }

  return connectionString;
}
```

This guard is not a substitute for careful configuration, but it prevents a
common destructive mistake.

#### The integration test

The test calls the real data functions from `frontend/lib/tasks.ts`
(`createTask` from Prep Day 01 and `renameTask` from Prep Day 03). Those
functions use `getPool()` from `frontend/lib/db.ts`, which reads the same
`DATABASE_URL`. A second `Pool` in the test is used only for setup and to
check the stored row independently.

New words:

- `node:test` is Node's built-in test runner. `test(name, fn)` defines a test;
  `beforeEach` runs before every test; `after` runs once at the end.
- `assert.equal(actual, expected)` fails the test when the values differ.
- `TRUNCATE tasks RESTART IDENTITY` deletes every row and resets the ID counter
  to 1.

Create `frontend/test/integration/tasks.test.ts`:

```ts
import assert from 'node:assert/strict';
import test, { after, beforeEach } from 'node:test';
import { Pool } from 'pg';
import { createTask, renameTask } from '../../lib/tasks';
import { requireTestDatabase } from '../helpers/test-database';

// The guard runs before any SQL, so a wrong DATABASE_URL stops the file here.
const pool = new Pool({ connectionString: requireTestDatabase() });

beforeEach(async () => {
  // Isolation makes every test independent of execution order.
  await pool.query('TRUNCATE tasks RESTART IDENTITY');
});

after(async () => {
  // Close connections so the test process can exit.
  await pool.end();
});

test('renames a persisted task', async () => {
  const created = await createTask('Before');
  const updated = await renameTask(created.id, 'After');

  assert.equal(updated?.title, 'After');

  // Read the row directly to prove PostgreSQL stored the change.
  const result = await pool.query(
    'SELECT title FROM tasks WHERE id = $1',
    [created.id],
  );
  assert.equal(result.rows[0]?.title, 'After');
});
```

The application helper and assertion pool use the same test connection string.
The direct `SELECT` verifies persistence independently of the returned object.
The application pool inside `getPool()` is not closed by the test, so expect a
pause of about 10 seconds after the result before the process exits: that is
`pg` closing its idle connections. If a run ever hangs much longer, that pool
is the first thing to inspect.

### 6. MiniTrack implementation (1 hour)

**Milestone source:** Day 9 PostgreSQL integration and Playwright tests

Run every command below from `frontend/` unless stated otherwise.

#### Step 1: Install the test tools

```bash
npm install --save-dev @playwright/test dotenv-cli
npm install server-only
npx playwright install chromium
```

- `@playwright/test` controls a real browser.
- `dotenv-cli` loads `.env.test.local` for the commands it starts.
- `server-only` is the small package behind `import 'server-only'` in
  `frontend/lib/db.ts` (see the note in Step 2).
- `tsx` was installed on Prep Day 07 for unit tests. If `npx tsx --version`
  fails, run `npm install --save-dev tsx`.

#### Step 2: Add the scripts

Merge these entries into the existing `"scripts"` object in
`frontend/package.json`. Keep `dev`, `build`, `start`, and `lint` as they are;
`test` and `test:unit` should already exist from Prep Day 07.

```json
{
  "scripts": {
    "test": "npm run test:unit",
    "test:unit": "tsx --test test/unit/*.test.ts",
    "test:integration": "dotenv -e .env.test.local -- tsx --conditions=react-server --test test/integration/*.test.ts",
    "test:e2e": "dotenv -e .env.test.local -- playwright test"
  }
}
```

**Note on `--conditions=react-server`:** App Day 9 shows the integration
script without this flag. `frontend/lib/db.ts` starts with
`import 'server-only'`. Next.js handles that import itself, but plain Node does
not: without the package the test fails with `Cannot find module
'server-only'`, and with the package but without the flag it throws on
purpose. The `react-server` condition tells Node to load the package's empty
server version, so the test can import the real data layer.

#### Step 3: Create the isolated database

From `frontend/`:

```bash
createdb minitrack_test
psql -d minitrack_test -f ../backend/sql/schema.sql
```

Create `frontend/.env.test.local` (replace `YOUR_USER` with your local
PostgreSQL user):

```env
DATABASE_URL=postgresql://YOUR_USER@localhost:5432/minitrack_test
```

Confirm it is ignored, then confirm the table exists:

```bash
git check-ignore .env.test.local
psql -d minitrack_test -c '\d tasks'
```

**Expected observation:** `git check-ignore` prints `.env.test.local`, and
`\d tasks` lists `id`, `title`, `done`, and `created_at`. Never use your
development or production database for destructive tests.

#### Step 4: Create and run the integration test

Create the two files from section 5:
`test/helpers/test-database.ts` and `test/integration/tasks.test.ts`. Then:

```bash
npm run test:integration
```

**Expected observation:** one passing test named `renames a persisted task`
and `fail 0`.

#### Step 5: Add one browser journey

Create `frontend/playwright.config.ts`:

```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test/e2e',
  use: {
    // page.goto('/') opens this address.
    baseURL: 'http://127.0.0.1:3000',
  },
  webServer: {
    // Playwright starts the dev server and waits for the URL to respond.
    command: 'npm run dev',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: false,
  },
});
```

`reuseExistingServer: false` makes Playwright start its own server. That
server inherits `DATABASE_URL` from `dotenv`, so the app talks to
`minitrack_test`. (Next.js does not overwrite an environment variable that is
already set, so `.env.local` cannot switch it back to `minitrack`.)

Create `frontend/test/e2e/tasks.spec.ts`:

```ts
import { expect, test } from '@playwright/test';
import { Pool } from 'pg';
import { requireTestDatabase } from '../helpers/test-database';

// This pool resets data; the app under test uses its own pool.
const pool = new Pool({ connectionString: requireTestDatabase() });

test.beforeEach(async () => {
  await pool.query('TRUNCATE tasks RESTART IDENTITY');
});

test.afterAll(async () => {
  await pool.end();
});

test('creates, completes, and persists a task', async ({ page }) => {
  await page.goto('/');

  // Arrange and act through accessible names, like a real user.
  await page.getByLabel('Task title').fill('Practice testing');
  await page.getByRole('button', { name: /add task/i }).click();

  await expect(page.getByText('Practice testing')).toBeVisible();
  await page.getByLabel('Complete Practice testing').check();
  await page.reload();

  // After a reload, the state can only come from PostgreSQL.
  await expect(page.getByLabel('Complete Practice testing')).toBeChecked();
});
```

Role and label queries test the same accessible names users and assistive
technology rely on.

Stop any `npm run dev` you already have running (it would hold port 3000), then:

```bash
npm run test:e2e
```

**Expected observation:** Playwright starts Next.js, runs one test, and
reports `1 passed`. Your `minitrack` development tasks are untouched; check
with `psql -d minitrack -c 'SELECT count(*) FROM tasks'` before and after.

#### Step 6: Run the full set and inspect one deliberate failure

```bash
npm run test:unit
npm run test:integration
npm run test:e2e
npx tsc --noEmit
npm run build
```

Then try one deliberate failure: change the E2E text in the last assertion to
`'Complete Something else'`, rerun `npm run test:e2e`, and read the error.

**Expected observation:** the test fails after its timeout with a message that
the locator was not found. Restore the text and confirm it passes again.

Failure checks:

| Symptom | Likely cause |
|---|---|
| `Refusing to test against /minitrack` | `.env.test.local` points at the development database; the guard did its job. |
| `DATABASE_URL is required` | `.env.test.local` is missing, or the script was run without `dotenv -e`. |
| `relation "tasks" does not exist` | Step 3's `psql -f ../backend/sql/schema.sql` was not run on `minitrack_test`. |
| `Cannot find module 'server-only'` or a "Server Component" error | Step 1's `server-only` install or Step 2's `--conditions=react-server` flag is missing. |
| `Port 3000 is already in use` | Another `npm run dev` is running; stop it. |
| `Executable doesn't exist` | Run `npx playwright install chromium`. |

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant T as Playwright test
  participant B as Chromium
  participant N as Next.js dev server
  participant D as minitrack_test DB
  T->>D: TRUNCATE tasks RESTART IDENTITY
  T->>B: page.goto('/')
  B->>N: GET /
  N->>D: SELECT tasks (none)
  T->>B: fill "Practice testing" and click Add task
  B->>N: POST /api/tasks {"title":"Practice testing"}
  N->>D: INSERT ... RETURNING (id 1)
  N-->>B: 201, then router.refresh()
  T->>B: check "Complete Practice testing"
  B->>N: PATCH /api/tasks/1 {"done":true}
  N->>D: UPDATE tasks SET done = true WHERE id = 1
  T->>B: page.reload()
  B->>N: GET /
  N->>D: SELECT tasks (done = true)
  T->>B: expect checkbox toBeChecked
```

Trace one concrete input. Name every boundary, value, and possible failure.
For example: if the PATCH returned 500, the reload would show an unchecked box
and the last assertion would fail, pointing you at the item Route Handler.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Point tests at the normal development database.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** Tests can destroy or depend on personal data and become order-dependent.

**Root cause:** The suite lacks data isolation.

**Restore and verify:** Use a dedicated test database and reset known state between tests.

Concretely: change `.env.test.local` to `.../minitrack` and run
`npm run test:integration`. The guard should throw
`Refusing to test against /minitrack` **before** any `TRUNCATE`. Then, only in
your head, remove the guard: `TRUNCATE` would erase your real tasks. Restore
`minitrack_test` and rerun to see the test pass. Also try removing
`beforeEach` and running the integration test twice: the second run still
passes here, but any test that counts rows or assumes ID `1` would now depend
on leftovers from the first run.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

### 9. Interview questions and answers (30 minutes)

#### Q1. What is critical user-flow testing?

**Interview-ready answer:** An end-to-end test proves that a user can complete a valuable journey through the real browser and server. Keep it focused because it is slower and has more failure sources.

**Example:** `frontend/test/e2e/tasks.spec.ts` fills `Task title`, clicks
**Add task**, ticks `Complete Practice testing`, reloads, and asserts the box
is still checked. One test proves the form, POST, PATCH, SQL, and
server-rendered reload work together. Invalid-title combinations stay in the
fast unit tests from Prep Day 07.

**Senior follow-up:** E2E tests become hard to maintain when they use brittle
CSS selectors, fixed waits, or shared data. Prefer role and label locators,
web-first assertions that wait automatically, and a reset per test. If the
suite grows slow, measure it and push edge cases down to unit or integration
tests rather than adding retries.

#### Q2. How should the backend handle isolated real-database integration tests?

**Interview-ready answer:** SQL behavior should be tested against a real isolated PostgreSQL database because mocks cannot prove constraints, SQL syntax, or transaction behavior.

**Example:** `test/integration/tasks.test.ts` calls `createTask('Before')` and
`renameTask(id, 'After')` from `frontend/lib/tasks.ts`, then runs
`SELECT title FROM tasks WHERE id = $1` with its own pool. A mock could not
prove that `UPDATE ... RETURNING` works or that `created_at` converts to a
string.

**Senior follow-up:** The guard in `test/helpers/test-database.ts` fails fast on
the wrong database. Create the test schema with the same migration or schema
file as production so they cannot drift. For parallel workers, give each its
own schema or database, because a shared `TRUNCATE` would interfere.

#### Q3. What invariant makes the variable sliding window solution correct?

**Interview-ready answer:** Expand until the sum satisfies the target, then shrink while the window remains valid to find the minimum.

**Example:** For `solve(7, [2, 3, 1, 2, 4, 3])`, at `right = 5` the running
sum is 9. Shrinking records length 3, then length 2 for `[4, 3]`, and stops
when the sum falls to 3. The answer is `2`.

**Senior follow-up:** O(n) time and O(1) space hold only for positive
numbers, because then shrinking always lowers the sum. With negative numbers,
use prefix sums with a monotonic deque instead.

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** Unit, database, and browser tests cover different boundaries without asking one expensive test to prove everything.

**Example:** A blank title is caught by the `normalizeTitle` unit test; the
rename SQL is caught by the integration test; a missing `router.refresh()` or
a broken checkbox label is caught only by the Playwright journey.

**Senior follow-up:** Before adding more infrastructure, measure total suite
time and flaky-test rate. The first CI bottleneck is usually the browser job;
the first security risk is a test configuration that can reach real data.

### 10. Complexity and operational cost

- **DSA:** O(n) time and O(1) space for non-negative inputs.
- **Application:** Unit tests are cheapest, database tests add process and I/O cost, and browser tests are slowest. The suite should have many narrow tests and few critical E2E paths.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 08 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 08: test database and browser behavior`

<a id="prep-day-09"></a>

## Prep Day 09 — Add authentication and client session Context

**Date:** Friday, December 4, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Add authentication and client session Context.

[Prep Day 08](../lessons/interview-prep/prep-day-08.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](../lessons/interview-prep/README.md) · [Prep Day 10](../lessons/interview-prep/prep-day-10.md)

**Everything to read today is below.** The original [App Day 10](../lessons/day-10.md)
and [DSA Day 09](../dsa-python/lessons/dsa-day-09.md) remain available for
comparison. This prep day covers GitHub sign-in and sign-out, the server-side
`auth()` check on the page, and client session Context. Returning `401` from
the task API routes and the first mock interview belong to Prep Day 10; task
ownership (`owner_id`) belongs to Prep Days 11–12. Write runnable code in the
named project and practice files, not in this Markdown file.

### Learning objectives

- explain context for client-visible session data in beginner-friendly language;
- explain server-side authentication checks and its failure boundary;
- implement or verify the listed MiniTrack milestone;
- solve DSA Day 09 using the stack pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **stack** pattern?

Use this format:

```md
## Friday, December 4, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Context for client-visible session data:** SessionProvider uses React Context to make session state available to descendants without passing props through every level. It improves client ergonomics but is not a security boundary.

**Backend focus — Server-side authentication checks:** Protected Server Components and Route Handlers obtain the verified session on the server. Hiding a button in the browser does not stop a direct HTTP request.

**Today's connection:** The identity provider establishes a session; React Context distributes a display-friendly view while server code enforces access.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 09: stack"]
  DSA --> FE["Frontend: Context for client-visible session data"]
  FE --> BE["Backend: Server-side authentication checks"]
  BE --> App["MiniTrack: Add authentication and client session Context"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-09.py`](../dsa-python/practice/day-09.py)
**Pattern:** stack

#### Problem: Valid Parentheses

Given a string `s` made only of the bracket characters `(`, `)`, `[`, `]`,
`{`, and `}`, return `True` if the brackets are **balanced and correctly
nested**, otherwise `False`.

Correctly nested means every closing bracket matches the **most recent**
opening bracket that is still open. `([])` is valid; `([)]` is not, even
though it has one of each kind.

Assumptions: the empty string is valid. Any character that is not a bracket
makes the input invalid (the reference returns `False`).

```python
solve('()[]{}')  # True
solve('([)]')    # False
solve('(((')     # False, three brackets are never closed
```

Counting is not enough: `([)]` has matching counts but the wrong order. You
need to remember the order of unclosed openers, and the one you must close
next is always the **last** one you opened. That "last in, first out"
behaviour is exactly what a **stack** gives you.

#### Start coding

In the practice file, replace the `raise NotImplementedError` line with your
own implementation. This is the starting shape:

```python
def solve(s):
    # Return True if every bracket closes the most recent unmatched opener.
    raise NotImplementedError
```

Python helpers you can use:

- A Python **list** works as a stack. `stack.append(x)` pushes `x` on top;
  `stack.pop()` removes and returns the top item.
- A **dictionary** can map each closer to its opener:
  `pairs = {')': '(', ']': '[', '}': '{'}`. Then `pairs[')']` is `'('`.
- `pairs.values()` gives the openers; `set(...)` turns them into a set so
  `ch in opening` is a fast membership check.
- `not stack` is `True` when the list is empty.

```mermaid
flowchart TD
  Start[Empty stack] --> Next[Read next character]
  Next --> Open{Opening bracket?}
  Open -- Yes --> Push[Push it] --> More
  Open -- No --> Close{Closing bracket?}
  Close -- No --> Bad[Return False]
  Close -- Yes --> Match{Stack not empty and popped opener matches?}
  Match -- No --> Bad
  Match -- Yes --> More{More characters?}
  More -- Yes --> Next
  More -- No --> Empty[Return True only if stack is empty]
```

#### Invariant to say aloud

Push opening delimiters and require every closing delimiter to match the most recent unmatched opening one.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 9
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** the day-specific checker prints `Case 1 passed`
through `Case 3 passed`, and the completed reference suite still passes. The
three supplied cases do not cover a lone closing bracket or an empty string,
so add your own checks.

You can also temporarily add these checks below your `solve` function in the
practice file, then run `python3 dsa-python/practice/day-09.py`:

```python
if __name__ == '__main__':
    assert solve('()[]{}') is True
    assert solve('([)]') is False
    assert solve('(((') is False
    assert solve('') is True          # nothing to close
    assert solve(')') is False        # closer with an empty stack
    assert solve('{[]}') is True      # nested correctly
    assert solve('(]') is False       # wrong kind
    assert solve('(a)') is False      # not a bracket: outside the contract
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple solution</summary>

```python
def solve(s):
    if any(ch not in '()[]{}' for ch in s):
        return False
    previous = None
    while s != previous:
        previous = s
        # Remove every adjacent matching pair, then try again.
        s = s.replace('()', '').replace('[]', '').replace('{}', '')
    return s == ''
```

</details>

A valid string always contains at least one adjacent pair such as `[]`.
Removing pairs repeatedly eventually empties a valid string; an invalid one
gets stuck. Each pass is O(n), and there can be about n / 2 passes (for
`((((...))))`), so the worst case is O(n²) time and O(n) extra space for the
new strings.

#### Optimized code — reveal after attempting

<details>
<summary>Show the stack solution</summary>

```python
def solve(s):
    pairs = {')': '(', ']': '[', '}': '{'}  # closer -> its opener
    opening = set(pairs.values())
    stack = []
    for ch in s:
        if ch in opening:
            stack.append(ch)
        elif ch in pairs:
            # The closer must match the most recent unclosed opener.
            if not stack or stack.pop() != pairs[ch]:
                return False
        else:
            return False  # input contract: brackets only
    return not stack
```

</details>

Each character is pushed at most once and popped at most once: O(n) time.
In the worst case (all openers) the stack holds n characters: O(n) space.

Trace for `solve('([)]')`:

| Step | Character | Kind | Stack before | Action | Stack after |
|---:|---|---|---|---|---|
| 1 | `(` | opener | `[]` | push | `['(']` |
| 2 | `[` | opener | `['(']` | push | `['(', '[']` |
| 3 | `)` | closer | `['(', '[']` | pop `[`; needs `(`; mismatch | return `False` |

For `solve('()[]{}')` the stack goes `['(']` → `[]` → `['[']` → `[]` →
`['{']` → `[]`, and the final empty stack returns `True`.

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “I repeatedly delete adjacent matching pairs such
as `()`, `[]`, and `{}` until the string stops changing. If it ends empty, it
was valid. Each pass is linear and there can be about n / 2 passes, so it is
O(n²) time.”

**Example:** `{[]}` → remove `[]` → `{}` → remove `{}` → empty, so `True`.
`([)]` has no adjacent pair, so it is stuck and returns `False`.

**Follow-up:** Why is this still correct? A valid nested string always has an
innermost adjacent pair, and removing it leaves a valid string, so the
process can only empty valid strings.

##### DSA Q2. Why is a stack the right data structure?

**Interview-ready answer:** “The bracket I must close next is always the most
recently opened one that is still open. A stack gives me exactly that item in
O(1) with `pop()`, so I push openers and pop on every closer.”

**Example:** In `{[]}`, after pushing `{` and `[`, the closer `]` must match
`[`, the top of the stack, not `{`.

**Follow-up:** Why not just count each type? Counts ignore order. `([)]`
has equal counts but crosses its brackets.

##### DSA Q3. Why is the stack solution correct?

**Interview-ready answer:** “The invariant is that the stack holds exactly the
unmatched openers, in the order they were opened. A closer is valid only if it
matches the top. At the end, the string is valid only if nothing is left
unmatched, so I return `not stack`.”

**Example:** For `(((` every character is pushed and nothing pops, so the
stack ends with three items and the answer is `False`.

**Follow-up:** There are three failure points to name: a closer with an empty
stack (`)`), a closer that does not match the top (`(]`), and leftover openers
at the end (`(((`).

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “O(n) time, because each character is pushed at
most once and popped at most once, and dictionary and set lookups are O(1) on
average. O(n) space in the worst case, when the string is all openers.”

**Example:** `'(' * 1000` keeps 1000 items on the stack before returning
`False`.

**Follow-up:** A quick early exit: if `len(s)` is odd, the answer must be
`False`. It does not change the worst-case complexity, but it is worth
mentioning.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “The empty string, a single closer, a single
opener, wrong kinds like `(]`, crossed order like `([)]`, deep nesting, and
characters that are not brackets. I ask whether non-bracket characters should
be ignored or rejected.”

**Example:** `solve('')` is `True`; `solve(')')` is `False`;
`solve('(a)')` is `False` under this contract.

**Follow-up:** If the interviewer says other characters should be ignored,
change the final `else: return False` to `continue`. Confirm the contract
before coding.

##### DSA Q6. What if there is only one bracket type, or I must report where it fails?

**Interview-ready answer:** “With only `(` and `)`, I do not need a stack: a
counter of open brackets is enough, giving O(1) space. I return `False` if it
goes below zero and require it to be zero at the end. To report the error
position, I store indices on the stack instead of characters.”

**Example:** For `())(`, the counter goes 1, 0, -1, so it fails at index 2.

**Follow-up:** A harder variant is "longest valid parentheses substring",
which pushes indices and uses the index below the top as the start of the
current valid run.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

SessionProvider uses React Context to make session state available to descendants without passing props through every level. It improves client ergonomics but is not a security boundary.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.

#### How

**Authentication** answers "who are you?". MiniTrack uses **Auth.js** (the
`next-auth` package) with **GitHub OAuth**: GitHub checks the user's
password, then sends them back to MiniTrack, and Auth.js stores a signed
session cookie.

```mermaid
flowchart TD
  A["1. User clicks Sign in"] --> B["2. Auth.js redirects to GitHub"]
  B --> C["3. GitHub authenticates user"]
  C --> D["4. Callback returns to Auth.js"]
  D --> E["5. Auth.js creates signed session cookie"]
  E --> F["6. Server reads session with auth()"]
  F --> G{"Authenticated?"}
  G -- No --> H["Show sign-in"]
  G -- Yes --> I["Render tasks"]
```

There are two ways to read the session:

| Where | How | Trusted for security? |
|---|---|---|
| Server Component, Route Handler, Server Action | `await auth()` from `frontend/auth.ts` | Yes; it verifies the signed cookie on the server. |
| Client Component | `useSession()` inside `SessionProvider` | No; it is display data the browser can change. |

**React Context** lets a parent component make a value available to every
descendant without passing it as a prop through each level. `SessionProvider`
is a Context provider; `useSession()` is the hook that reads it. Today's
example is small, a "Signed in as ..." line, so you can see the mechanism.

Files you will create or change in section 6:

- `frontend/auth.ts`
- `frontend/app/api/auth/[...nextauth]/route.ts`
- `frontend/app/AuthControls.tsx`
- `frontend/app/AuthSessionProvider.tsx`
- `frontend/app/ClientSessionSummary.tsx`
- `frontend/app/page.tsx`

Answer before coding:

- Which value is persistent (the signed session cookie and GitHub identity), and which value is temporary interaction state (`useSession()`'s `status`)?
- What starts this behavior? (Clicking **Sign in with GitHub** submits a Server Action form.)
- What should the user see while work is pending? (`Checking session...` from Suspense or `useSession()`'s `loading` status.)
- What should remain unchanged when the operation fails? (No cookie is set; the page still shows the sign-in screen.)

### 5. Backend guided study (1 hour 30 minutes)

#### What

Protected Server Components and Route Handlers obtain the verified session on the server. Hiding a button in the browser does not stop a direct HTTP request.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

#### Secrets stay on the server

Auth.js needs three secret values. They live only in the ignored
`frontend/.env.local`, never in code, commits, logs, or the browser:

| Variable | What it is | Where it comes from |
|---|---|---|
| `AUTH_SECRET` | Key that signs the session cookie | `npx auth secret` writes it for you |
| `AUTH_GITHUB_ID` | Your GitHub OAuth App's client ID | GitHub developer settings |
| `AUTH_GITHUB_SECRET` | Your GitHub OAuth App's client secret | GitHub developer settings |

Auth.js reads these names automatically, which is why `frontend/auth.ts` can
be only a few lines.

#### The server check

Every private **server** entry point calls `auth()` and treats a missing
`session.user` as "not signed in":

```ts
const session = await auth();
if (!session?.user) {
  // Not signed in: show the sign-in screen (page) or return 401 (API, Prep Day 10).
}
```

Today you add this check to the page in `frontend/app/page.tsx`. The task API
routes in `frontend/app/api/tasks/` are **still open** at the end of today;
section 8 shows why that is a real gap, and Prep Day 10 closes it.

### 6. MiniTrack implementation (1 hour)

**Milestone source:** Day 10 Auth.js, SessionProvider, and useSession

Run every command from `frontend/`.

#### Step 1: Install Auth.js and create the cookie secret

```bash
npm install next-auth@beta
npx auth secret
```

`npx auth secret` adds a strong `AUTH_SECRET` to your local environment file.
Never copy it into a lesson, commit, browser bundle, log, or chat.

Auth.js package and provider instructions can change. Recheck the
[official installation guide](https://authjs.dev/getting-started/installation)
and [GitHub provider guide](https://authjs.dev/guides/configuring-github)
before you begin.

#### Step 2: Create a GitHub OAuth App

In GitHub → **Settings** → **Developer settings** → **OAuth Apps** → **New
OAuth App**:

- Homepage URL: `http://localhost:3000`
- Authorization callback URL: `http://localhost:3000/api/auth/callback/github`

Add the issued values to `frontend/.env.local` (these are placeholders; use
your own values and never commit them):

```env
AUTH_GITHUB_ID=YOUR_GITHUB_CLIENT_ID
AUTH_GITHUB_SECRET=YOUR_GITHUB_CLIENT_SECRET
```

Keep the existing `DATABASE_URL`. Confirm the file is still ignored:

```bash
git check-ignore .env.local
```

#### Step 3: Configure Auth.js

Create `frontend/auth.ts` (at the `frontend/` root, next to `package.json`):

```ts
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

// Auth.js creates the route handlers, server session reader, and server actions.
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
});
```

- `handlers` answers Auth.js's own HTTP routes (sign-in, callback, sign-out).
- `auth()` reads and verifies the session on the server.
- `signIn` and `signOut` start or end a session from a Server Action.

Create `frontend/app/api/auth/[...nextauth]/route.ts`:

```ts
import { handlers } from '@/auth';

// The catch-all route receives Auth.js sign-in, callback, and session requests.
export const { GET, POST } = handlers;
```

`[...nextauth]` is a **catch-all** segment: it matches
`/api/auth/signin`, `/api/auth/callback/github`, and every other path under
`/api/auth/`. `@/auth` means `frontend/auth.ts`; the `@/*` alias was set when
the project was created. The route contains no provider secret.

#### Step 4: Add sign-in and sign-out controls

Create `frontend/app/AuthControls.tsx`:

```tsx
import { auth, signIn, signOut } from '@/auth';

export default async function AuthControls() {
  const session = await auth();

  if (!session?.user) {
    return (
      <form
        action={async () => {
          'use server';
          await signIn('github', { redirectTo: '/' });
        }}
      >
        <button className="rounded-lg bg-violet-500 px-4 py-2 font-bold">
          Sign in with GitHub
        </button>
      </form>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-slate-300">
        {session.user.name ?? session.user.email ?? 'Signed in'}
      </span>
      <form
        action={async () => {
          'use server';
          await signOut({ redirectTo: '/' });
        }}
      >
        <button className="rounded-lg border border-slate-700 px-4 py-2">
          Sign out
        </button>
      </form>
    </div>
  );
}
```

This is a Server Component (no `'use client'`). The `'use server'` line turns
each inline function into a **Server Action**: the form posts to the server,
which runs `signIn` or `signOut`, so provider logic and secrets never reach
the browser.

#### Step 5: Add client session Context

Create `frontend/app/AuthSessionProvider.tsx`:

```tsx
'use client';

import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { ReactNode } from 'react';

export default function AuthSessionProvider({
  children,
  session,
}: {
  children: ReactNode;
  session: Session | null;
}) {
  return (
    // Passing the server-verified session avoids an extra client fetch on load.
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}
```

Create `frontend/app/ClientSessionSummary.tsx`, a descendant Client Component
that reads the Context-backed hook:

```tsx
'use client';

import { useSession } from 'next-auth/react';

export default function ClientSessionSummary() {
  // status is 'loading', 'authenticated', or 'unauthenticated'.
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Checking session...</p>;
  if (!session?.user) return <p>Not signed in</p>;

  return <p>Signed in as {session.user.name ?? session.user.email}</p>;
}
```

`SessionProvider` must be a Client Component because Context only works in
the client tree; that is why it needs its own `'use client'` wrapper file.

#### Step 6: Protect the page

Replace `frontend/app/page.tsx` with the version below. It keeps the Prep
Day 06 search page (`SearchForm`, `searchTasks`, `normalizeTaskFilters`) and
adds the server check before any task is read:

```tsx
import { Suspense } from 'react';
import { auth } from '@/auth';
import AuthControls from './AuthControls';
import AuthSessionProvider from './AuthSessionProvider';
import ClientSessionSummary from './ClientSessionSummary';
import SearchForm from './SearchForm';
import TaskBoard from './TaskBoard';
import { searchTasks } from '../lib/tasks';
import { normalizeTaskFilters } from '../lib/validation';

type PageProps = {
  searchParams: Promise<{
    q?: string;
    status?: string;
  }>;
};

async function PrivateTasks({ searchParams }: PageProps) {
  // auth() reads the signed session cookie on the server.
  const session = await auth();

  if (!session?.user) {
    return (
      <section className="rounded-2xl border border-slate-700 bg-slate-900 p-8">
        <h2 className="text-2xl font-bold">Sign in to open MiniTrack</h2>
        <div className="mt-5">
          <AuthControls />
        </div>
      </section>
    );
  }

  // Only a signed-in request reaches the database read.
  const params = await searchParams;
  const filters = normalizeTaskFilters(params.q, params.status);
  const tasks = await searchTasks(filters);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Context wraps only the interactive subtree that needs it. */}
        <AuthSessionProvider session={session}>
          <ClientSessionSummary />
        </AuthSessionProvider>
        <AuthControls />
      </div>
      <SearchForm filters={filters} />
      <TaskBoard tasks={tasks} />
    </>
  );
}

export default function Home({ searchParams }: PageProps) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-5 py-12">
      <h1 className="mb-8 text-4xl font-bold">MiniTrack</h1>
      <Suspense fallback={<p className="text-slate-400">Checking session...</p>}>
        <PrivateTasks searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
```

`auth()` reads request cookies, so `PrivateTasks` is request-time work inside
`Suspense`, which is what Cache Components require. Do not add
`'use cache'` here: private session output must never be cached and shared,
and do not add `dynamic = 'force-dynamic'`.

#### Step 7: Run and verify

```bash
npm run lint
npx tsc --noEmit
npm run dev
```

In a private/incognito window, open `http://localhost:3000`:

1. Signed out: the page shows **Sign in to open MiniTrack** and no tasks.
2. Click **Sign in with GitHub**, approve the app, and return to MiniTrack.
3. The page shows `Signed in as <your name>`, **Sign out**, the search form,
   and your tasks.
4. Refresh: you stay signed in (the cookie persists).
5. Click **Sign out**: the sign-in screen returns.

**Expected observation:** sign-in and sign-out work and the page never shows
tasks to a signed-out visitor. Note what is **not** fixed yet: in a separate
terminal, `curl -i http://localhost:3000/api/tasks` still returns `200` with
task JSON. That is today's gap, closed on Prep Day 10. Also expect
`npm run test:e2e` from Prep Day 08 to fail now, because an anonymous browser
sees the sign-in screen instead of the `Task title` input; Prep Day 10 updates
the browser test.

Failure checks:

| Symptom | Likely cause |
|---|---|
| GitHub reports that the `redirect_uri` must match the registered callback URL | The callback URL in the OAuth App is not exactly `http://localhost:3000/api/auth/callback/github`. |
| `MissingSecret` error | `AUTH_SECRET` is missing; rerun `npx auth secret` and restart the dev server. |
| `Cannot find module '@/auth'` | `auth.ts` is not in `frontend/`, or the `@/*` path alias is missing from `tsconfig.json`. |
| `useSession must be wrapped in a <SessionProvider />` | `ClientSessionSummary` was rendered outside `AuthSessionProvider`. |
| Changes to `.env.local` have no effect | Restart `npm run dev`; environment files are read at startup. |

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant U as User
  participant B as Browser
  participant N as Next.js and Auth.js
  participant G as GitHub OAuth
  U->>B: Click "Sign in with GitHub"
  B->>N: POST Server Action (signIn('github'))
  N-->>B: Redirect to GitHub authorize URL
  B->>G: User approves MiniTrack
  G-->>B: Redirect to /api/auth/callback/github?code=...
  B->>N: GET callback
  N->>G: Exchange code for user profile
  N-->>B: Set signed session cookie, redirect to /
  B->>N: GET / with cookie
  N->>N: PrivateTasks: auth() verifies cookie
  N-->>B: HTML with tasks and SessionProvider(session)
  B->>B: useSession() returns status "authenticated"
```

Trace one concrete input. Name every boundary, value, and possible failure.
For example: a wrong callback URL fails at the GitHub step; a missing
`AUTH_SECRET` fails when Auth.js tries to sign the cookie.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Protect a mutation only by hiding its button when useSession reports no user.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** An attacker can call the Route Handler directly.

**Root cause:** Browser state is controlled by the client and cannot authorize server resources.

**Restore and verify:** Call auth() at the server boundary and reject missing identity.

Concretely: sign out, then from a terminal (which has no browser cookie) run:

```bash
curl -i -X POST http://localhost:3000/api/tasks \
  -H 'Content-Type: application/json' -d '{"title":"Added without signing in"}'
```

It returns `201`, and the task appears after you sign in again. No button was
needed. Delete that task. The repair, a server `auth()` check returning `401`
in every task Route Handler, is Prep Day 10's first step; write down which
four handlers need it (`GET`/`POST` in `app/api/tasks/route.ts`,
`PATCH`/`DELETE` in `app/api/tasks/[id]/route.ts`).

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

### 9. Interview questions and answers (30 minutes)

#### Q1. What is context for client-visible session data?

**Interview-ready answer:** SessionProvider uses React Context to make session state available to descendants without passing props through every level. It improves client ergonomics but is not a security boundary.

**Example:** `frontend/app/page.tsx` passes the server-verified `session` into
`AuthSessionProvider`; `ClientSessionSummary` calls `useSession()` and renders
`Signed in as ...` without any prop. A Client Component deeper in the tree
could read the same value.

**Senior follow-up:** Context re-renders every consumer when its value
changes, so keep the provider around only the subtree that needs it, as
`page.tsx` does. If many unrelated components needed different session
fields, measure re-renders first; a Server Component passing a small prop is
often simpler than more Context.

#### Q2. How should the backend handle server-side authentication checks?

**Interview-ready answer:** Protected Server Components and Route Handlers obtain the verified session on the server. Hiding a button in the browser does not stop a direct HTTP request.

**Example:** `PrivateTasks` in `frontend/app/page.tsx` calls `await auth()`
and returns the sign-in section before `searchTasks(filters)` runs, so a
signed-out visitor never triggers the SQL. The `curl -X POST /api/tasks` in
section 8 shows that the API still needs the same check.

**Senior follow-up:** Secrets such as `AUTH_SECRET` and
`AUTH_GITHUB_SECRET` stay in server environment variables and must never be
logged. If GitHub is down, sign-in fails but existing signed cookies still
verify locally; log the provider error on the server without the code or
token.

#### Q3. What invariant makes the stack solution correct?

**Interview-ready answer:** Push opening delimiters and require every closing delimiter to match the most recent unmatched opening one.

**Example:** For `([)]`, the stack is `['(', '[']` when `)` arrives. Popping
gives `[`, which does not match `(`, so the answer is `False` at step 3.

**Senior follow-up:** O(n) time and O(n) space assume average O(1) dictionary
and set lookups. With only one bracket type, a counter replaces the stack and
space drops to O(1).

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** The identity provider establishes a session; React Context distributes a display-friendly view while server code enforces access.

**Example:** GitHub verifies the user, Auth.js sets a signed cookie, `auth()`
in `page.tsx` reads it to decide whether to render tasks, and
`useSession()` only drives the `Signed in as ...` text.

**Senior follow-up:** The first security risk is the still-open task API
(fixed on Prep Day 10), and the next is that every signed-in user still shares
one `tasks` table (fixed with `owner_id` on Prep Days 11–12). Measure how often
`auth()` runs per request before worrying about its cost.

### 10. Complexity and operational cost

- **DSA:** O(n) time and O(n) worst-case space.
- **Application:** Session verification adds work to protected requests. Cache and database choices depend on the configured session strategy.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 09 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 09: add authentication and client session context`

<a id="prep-day-10"></a>

## Prep Day 10 — Finish authentication and run the first mock

**Date:** Saturday, December 5, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Finish authentication and run the first mock.

[Prep Day 09](../lessons/interview-prep/prep-day-09.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](../lessons/interview-prep/README.md) · [Prep Day 11](../lessons/interview-prep/prep-day-11.md)

**Everything to read today is below.** The original [App Day 10](../lessons/day-10.md),
[Interview index](./INTERVIEW_INDEX.md), and
[DSA Day 10](../dsa-python/lessons/dsa-day-10.md) remain available for
comparison. This prep day closes the task API to anonymous callers with
`401`, verifies the whole sign-in flow, updates the Prep Day 08 browser test,
and runs your first 30-minute mock. Sign-in, sign-out, and `SessionProvider`
were built on Prep Day 09. Task ownership (`owner_id`, `403`/`404` for another
user's task) belongs to Prep Days 11–12. Write runnable code in the named
project and practice files, not in this Markdown file.

### Learning objectives

- explain authenticated loading and signed-out states in beginner-friendly language;
- explain returning 401 for missing identity and its failure boundary;
- implement or verify the listed MiniTrack milestone;
- solve DSA Day 10 using the monotonic stack pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **monotonic stack** pattern?

Use this format:

```md
## Saturday, December 5, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Authenticated loading and signed-out states:** The UI should represent loading, authenticated, and unauthenticated states explicitly. Rendering the signed-out state is not a substitute for server enforcement.

**Backend focus — Returning 401 for missing identity:** A Route Handler returns 401 when no valid identity is present. Authorization for a particular task is a separate Day 11 decision.

**Today's connection:** Authentication proves who is making a request but does not yet prove which task that user may access.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 10: monotonic stack"]
  DSA --> FE["Frontend: Authenticated loading and signed-out states"]
  FE --> BE["Backend: Returning 401 for missing identity"]
  BE --> App["MiniTrack: Finish authentication and run the first mock"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-10.py`](../dsa-python/practice/day-10.py)
**Pattern:** monotonic stack

#### Problem: Daily Temperatures

You are given a list of daily temperatures. For each day, return how many
days you must wait until a **strictly warmer** temperature. If no warmer day
comes later, use `0` for that day. The answer list has the same length as the
input.

Assumptions: temperatures are integers; an equal temperature is **not**
warmer.

```python
solve([73, 74, 75, 71, 69, 72, 76, 73])  # [1, 1, 4, 2, 1, 1, 0, 0]
```

For example, day 2 is `75`. The next warmer day is day 6 (`76`), so the
answer for day 2 is `6 - 2 = 4`.

The simple approach scans forward from every day: O(n²) time. A faster idea:
keep a **stack of days that are still waiting** for a warmer day. When a warm
day arrives, it answers every waiting day on top of the stack that is colder.
The waiting temperatures on the stack always get colder from bottom to top,
which is why it is called a **monotonic** (one-direction) stack.

#### Start coding

In the practice file, replace the `raise NotImplementedError` line with your
own implementation. This is the starting shape:

```python
def solve(temperatures):
    # Return days to wait for a strictly warmer temperature, or 0 for each day.
    raise NotImplementedError
```

Python helpers you can use:

- `[0] * len(temperatures)` makes a list of zeros with the same length, so
  days that never find a warmer day already hold `0`.
- `stack[-1]` reads the top of the stack **without** removing it;
  `stack.pop()` removes and returns it.
- `while stack and ...` stops safely when the stack becomes empty, because
  Python checks `stack` first and skips the rest if it is empty.
- Store **indices** (day numbers) on the stack, not temperatures: you need
  the index to compute the distance `day - earlier`, and you can always look
  the temperature up with `temperatures[index]`.

```mermaid
flowchart TD
  Start[answer = zeros, empty stack] --> Next[Read day and temp]
  Next --> Warmer{Stack not empty and temp > temperature of top day?}
  Warmer -- Yes --> Pop[Pop earlier day; answer at earlier = day - earlier]
  Pop --> Warmer
  Warmer -- No --> Push[Push day]
  Push --> More{More days?}
  More -- Yes --> Next
  More -- No --> Return[Return answer]
```

#### Invariant to say aloud

Keep indices whose temperatures form a decreasing stack; a warmer day resolves entries from the top.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 10
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** the day-specific checker prints `Case 1 passed`,
and the completed reference suite still passes. There is only one supplied
case, so the asserts below matter.

You can also temporarily add these checks below your `solve` function in the
practice file, then run `python3 dsa-python/practice/day-10.py`:

```python
if __name__ == '__main__':
    assert solve([73, 74, 75, 71, 69, 72, 76, 73]) == [1, 1, 4, 2, 1, 1, 0, 0]
    assert solve([]) == []                    # no days
    assert solve([50]) == [0]                 # one day, nothing later
    assert solve([30, 30, 30]) == [0, 0, 0]   # equal is not warmer
    assert solve([30, 40, 50]) == [1, 1, 0]   # rising
    assert solve([50, 40, 30]) == [0, 0, 0]   # falling: stack only grows
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple solution</summary>

```python
def solve(temperatures):
    answer = [0] * len(temperatures)
    for day in range(len(temperatures)):
        for later in range(day + 1, len(temperatures)):
            if temperatures[later] > temperatures[day]:
                answer[day] = later - day
                break  # the first warmer day is the answer
    return answer
```

</details>

For each day this scans forward until it finds a warmer day. A falling list
like `[50, 40, 30]` never breaks early, so the worst case is O(n²) time with
O(1) extra space besides the answer list.

#### Optimized code — reveal after attempting

<details>
<summary>Show the monotonic stack solution</summary>

```python
def solve(temperatures):
    answer = [0] * len(temperatures)
    stack = []  # indices with monotonically decreasing temperatures
    for day, temp in enumerate(temperatures):
        # Today answers every colder day that is still waiting.
        while stack and temp > temperatures[stack[-1]]:
            earlier = stack.pop()
            answer[earlier] = day - earlier
        stack.append(day)
    return answer
```

</details>

Each index is pushed once and popped at most once, so the total work is O(n)
time. The stack can hold all n indices (falling temperatures): O(n) space.

Trace for `solve([73, 74, 75, 71, 69, 72, 76, 73])` (stack shown as
`index:temp`):

| day | temp | Popped (answer set) | Stack after push |
|---:|---:|---|---|
| 0 | 73 | none | `0:73` |
| 1 | 74 | 0 → `answer[0] = 1` | `1:74` |
| 2 | 75 | 1 → `answer[1] = 1` | `2:75` |
| 3 | 71 | none (71 < 75) | `2:75, 3:71` |
| 4 | 69 | none | `2:75, 3:71, 4:69` |
| 5 | 72 | 4 → `answer[4] = 1`; 3 → `answer[3] = 2` | `2:75, 5:72` |
| 6 | 76 | 5 → `answer[5] = 1`; 2 → `answer[2] = 4` | `6:76` |
| 7 | 73 | none | `6:76, 7:73` |

Days 6 and 7 are never popped, so they keep `0`. Result:
`[1, 1, 4, 2, 1, 1, 0, 0]`.

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “For each day I scan forward until I find a
strictly warmer temperature and record the distance. If I never find one, the
answer stays 0. In the worst case, a falling list, every scan goes to the end,
so it is O(n²) time.”

**Example:** For day 2 (`75`) the scan checks `71`, `69`, `72`, and then
finds `76` at day 6, so the answer is 4.

**Follow-up:** What repeated work is wasted? Days 3, 4, and 5 are scanned
again from each earlier day. The stack lets each later day answer many
earlier days at once.

##### DSA Q2. How does the monotonic stack work?

**Interview-ready answer:** “I keep a stack of days still waiting for a
warmer day. For each new day, while it is warmer than the day on top, I pop
that day and record the distance. Then I push the new day, because it is now
waiting too.”

**Example:** On day 5 (`72`), the stack is `2:75, 3:71, 4:69`. `72` pops
day 4 (answer 1) and day 3 (answer 2), stops at `75`, and pushes day 5.

**Follow-up:** Why store indices? The answer is a distance, so you need the
index; the temperature can be read with `temperatures[index]`.

##### DSA Q3. Why is it correct?

**Interview-ready answer:** “The invariant is that the stack holds, from
bottom to top, days with decreasing temperatures that have not seen a warmer
day yet. When a day pops an earlier day, it is the **first** warmer day for
it, because every day in between was not warmer, or the earlier day would
already have been popped.”

**Example:** Day 3 (`71`) waits through day 4 (`69`, colder) and is popped by
day 5 (`72`), the first warmer day, giving 2.

**Follow-up:** Why does the stack stay in order? A day is pushed only after
every strictly colder day on top has been popped, so every day below it is at
least as warm. Equal temperatures can sit next to each other, so strictly
speaking the stack is non-increasing from bottom to top.

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “O(n) time, because each index is pushed once and
popped at most once; the inner `while` loop's total work across the whole run
is at most n pops. O(n) extra space for the stack, plus the O(n) answer.”

**Example:** For `[50, 40, 30]` nothing is ever popped and the stack grows to
three items; for `[30, 40, 50]` the stack never holds more than one item.

**Follow-up:** This is amortized reasoning: day 6 pops two items in one
iteration, but the total number of pops can never exceed the number of pushes.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “An empty list, one day, equal temperatures, a
strictly rising list, a strictly falling list, and a warm day at the very end.
Equal temperatures are the trap: the problem says strictly warmer, so I use
`>` and not `>=`.”

**Example:** `solve([30, 30, 30])` is `[0, 0, 0]`. If the comparison were
`>=`, it would wrongly return `[1, 1, 0]`.

**Follow-up:** Days left on the stack at the end never found a warmer day.
Because `answer` starts as zeros, no extra loop is needed to fill them.

##### DSA Q6. What realistic variant uses the same idea?

**Interview-ready answer:** “Next Greater Element in a circular array. I loop
over the indices twice using `i % n`, so a day near the end can find a warmer
day at the start. It is still O(n) time and O(n) space.”

**Example:** For circular `[3, 1, 2]`, index 2 (`2`) wraps around and finds
`3` at index 0, so its next greater value is `3`; index 0 has none, `-1`.

**Follow-up:** Stock Span ("how many consecutive previous days were at most
today's price") uses the mirror image: pop while the top is less than or
equal to today, and measure the distance backwards.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

The UI should represent loading, authenticated, and unauthenticated states explicitly. Rendering the signed-out state is not a substitute for server enforcement.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.

#### How

MiniTrack already shows all three states from the Prep Day 09 code. Find each
one before writing anything new:

| State | Where it comes from | What the user sees |
|---|---|---|
| Loading | `Suspense` fallback in `frontend/app/page.tsx` while `auth()` runs; `status === 'loading'` in `ClientSessionSummary.tsx` | `Checking session...` |
| Unauthenticated | `PrivateTasks` returns early when `!session?.user` | **Sign in to open MiniTrack** and the GitHub button |
| Authenticated | `PrivateTasks` continues to `searchTasks(filters)` | `Signed in as ...`, **Sign out**, search, and tasks |

The relevant excerpt from `frontend/app/page.tsx` (no change today):

```tsx
async function PrivateTasks({ searchParams }: PageProps) {
  const session = await auth();

  if (!session?.user) {
    // Unauthenticated: render sign-in and stop before any task query.
    return (
      <section className="rounded-2xl border border-slate-700 bg-slate-900 p-8">
        <h2 className="text-2xl font-bold">Sign in to open MiniTrack</h2>
        <div className="mt-5">
          <AuthControls />
        </div>
      </section>
    );
  }
  // Authenticated: read filters and tasks...
}
```

And from `frontend/app/ClientSessionSummary.tsx`:

```tsx
const { data: session, status } = useSession();

if (status === 'loading') return <p>Checking session...</p>;
if (!session?.user) return <p>Not signed in</p>;
return <p>Signed in as {session.user.name ?? session.user.email}</p>;
```

The signed-out screen is a **courtesy**. `TaskBoard.tsx` still sends
`fetch('/api/tasks', ...)` requests, and anyone can send the same requests
with curl. The real protection is today's backend change.

Files to open deliberately:

- `frontend/auth.ts`
- `frontend/app/api/tasks/route.ts`
- `frontend/app/api/tasks/[id]/route.ts`
- `frontend/test/e2e/tasks.spec.ts`

Answer before coding:

- Which value is persistent (the signed session cookie), and which value is temporary interaction state (`useSession()`'s `status`)?
- What starts this behavior? (Any HTTP request to `/api/tasks`, from the app or from curl.)
- What should the user see while work is pending? (`Checking session...`.)
- What should remain unchanged when the operation fails? (A `401` must not create, update, or delete any row.)

### 5. Backend guided study (1 hour 30 minutes)

#### What

A Route Handler returns 401 when no valid identity is present. Authorization for a particular task is a separate Day 11 decision.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

#### Choosing the status code

| Status | Meaning | MiniTrack example |
|---|---|---|
| `401 Unauthorized` | No valid identity: "sign in first" | Anonymous `GET /api/tasks` (today) |
| `403 Forbidden` | Identity known, but not allowed | A signed-in user editing someone else's task (Prep Days 11–12 may use this or `404`) |
| `404 Not Found` | The resource does not exist (or is hidden) | `PATCH /api/tasks/999999` when no such row exists |
| `400 Bad Request` | Input is invalid | `PATCH /api/tasks/abc` |

#### The check, placed first

At the **start** of every task Route Handler, before reading the body or the
ID:

```ts
import { auth } from '@/auth';

const session = await auth();
if (!session?.user) {
  return Response.json(
    { error: 'Unauthorized' },
    { status: 401 },
  );
}
```

Putting it first means an anonymous caller learns nothing else: not whether
the JSON was valid, and not whether a task ID exists. Apply it to collection
`GET`/`POST` and item `PATCH`/`DELETE`. Do not trust a user ID sent in request
JSON; identity comes only from `auth()`.

#### Important limitation after today

- anonymous users cannot access tasks;
- authenticated users can access tasks;
- **all authenticated users still share the same task table**.

Authentication answers **who are you?** It does not yet answer **which rows
may you access?** Prep Days 11–12 add an owner column and enforce ownership in
every query.

### 6. MiniTrack implementation (1 hour)

**Milestone source:** Day 10 protected requests and authentication review

Run every command from `frontend/`.

#### Step 1: Protect the collection routes

Replace `frontend/app/api/tasks/route.ts` with the version below. It is the
Prep Day 06 search-aware `GET` and the Prep Day 01 `POST`, each with the
session check added first:

```ts
import type { NextRequest } from 'next/server';
import { auth } from '@/auth';
import { createTask, searchTasks } from '../../../lib/tasks';
import {
  isRecord,
  normalizeTaskFilters,
  normalizeTitle,
} from '../../../lib/validation';

export async function GET(request: NextRequest): Promise<Response> {
  // Authenticate before doing any other work.
  const session = await auth();
  if (!session?.user) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const filters = normalizeTaskFilters(
    request.nextUrl.searchParams.get('q'),
    request.nextUrl.searchParams.get('status'),
  );

  try {
    return Response.json(await searchTasks(filters));
  } catch (error: unknown) {
    console.error('GET /api/tasks failed:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request): Promise<Response> {
  const session = await auth();
  if (!session?.user) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // JSON from the network is untrusted, so keep it unknown until validation.
  let parsingBody = true;
  try {
    const body: unknown = await request.json();
    parsingBody = false;
    const title = normalizeTitle(isRecord(body) ? body.title : undefined);
    if (!title) {
      return Response.json({ error: 'title must be 1–200 characters' }, { status: 400 });
    }
    return Response.json(await createTask(title), { status: 201 });
  } catch (error: unknown) {
    if (parsingBody) {
      return Response.json({ error: 'Invalid JSON' }, { status: 400 });
    }
    console.error('POST /api/tasks failed:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

#### Step 2: Protect the item routes

Replace `frontend/app/api/tasks/[id]/route.ts` with the version below. It is
the Prep Day 03 `PATCH` (title **or** done) and Prep Day 02 `DELETE`, with the
session check added first:

```ts
import { auth } from '@/auth';
import { deleteTask, renameTask, setDone } from '../../../../lib/tasks';
import { isRecord, isValidId, normalizeTitle } from '../../../../lib/validation';

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: RouteContext): Promise<Response> {
  const session = await auth();
  if (!session?.user) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Dynamic route parameters are asynchronous in this Next.js version.
  const { id } = await params;
  if (!isValidId(id)) {
    return Response.json({ error: 'Invalid task ID' }, { status: 400 });
  }

  let parsingBody = true;
  try {
    const body: unknown = await request.json();
    parsingBody = false;
    if (!isRecord(body)) {
      return Response.json({ error: 'Request body must be an object' }, { status: 400 });
    }

    const hasDone = Object.hasOwn(body, 'done');
    const hasTitle = Object.hasOwn(body, 'title');
    // One operation per request keeps update validation unambiguous.
    if (hasDone === hasTitle) {
      return Response.json({ error: 'Provide either done or title' }, { status: 400 });
    }

    let updateTask: () => ReturnType<typeof renameTask>;
    if (hasTitle) {
      const title = normalizeTitle(body.title);
      if (!title) {
        return Response.json({ error: 'title must be 1–200 characters' }, { status: 400 });
      }
      updateTask = () => renameTask(id, title);
    } else if (typeof body.done === 'boolean') {
      const done = body.done;
      updateTask = () => setDone(id, done);
    } else {
      return Response.json({ error: 'done must be boolean' }, { status: 400 });
    }
    const task = await updateTask();
    return task
      ? Response.json(task)
      : Response.json({ error: 'Task not found' }, { status: 404 });
  } catch (error: unknown) {
    if (parsingBody) {
      return Response.json({ error: 'Invalid JSON' }, { status: 400 });
    }
    console.error(`PATCH /api/tasks/${id} failed:`, error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: RouteContext): Promise<Response> {
  const session = await auth();
  if (!session?.user) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  if (!isValidId(id)) {
    return Response.json({ error: 'Invalid task ID' }, { status: 400 });
  }

  try {
    const deleted = await deleteTask(id);
    return deleted
      ? Response.json({ deleted: true })
      : Response.json({ error: 'Task not found' }, { status: 404 });
  } catch (error: unknown) {
    console.error(`DELETE /api/tasks/${id} failed:`, error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

The four checks are repeated on purpose so each handler's behavior is visible
in one place. Later you may extract a small server-only helper, but keep the
`401` response explicit.

#### Step 3: Verify behavior

```bash
npm run lint
npx tsc --noEmit
npm run dev
```

In a second terminal (plain curl does not share the browser cookie, which
makes it ideal for anonymous checks):

```bash
curl -i http://localhost:3000/api/tasks
curl -i -X POST http://localhost:3000/api/tasks \
  -H 'Content-Type: application/json' -d '{"title":"Should fail"}'
curl -i -X PATCH http://localhost:3000/api/tasks/1 \
  -H 'Content-Type: application/json' -d '{"done":true}'
curl -i -X DELETE http://localhost:3000/api/tasks/1
curl -i -X PATCH http://localhost:3000/api/tasks/abc \
  -H 'Content-Type: application/json' -d 'not json'
```

**Expected observation:** all five return `HTTP/1.1 401` with
`{"error":"Unauthorized"}`. The last one proves the auth check runs before ID
and JSON validation. `psql -d minitrack -c 'SELECT id, title, done FROM tasks'`
shows no new or changed row.

Then in a private/incognito window, check the full list:

1. The anonymous page shows sign-in.
2. GitHub sign-in returns to MiniTrack.
3. Refresh preserves the session.
4. Add, complete, rename, and delete a task: all still work, because the
   browser sends the session cookie with each `fetch`.
5. Sign-out removes private access.
6. No token, cookie, secret, or provider response appears in the server logs.

#### Step 4: Update the browser tests

The Prep Day 08 journey now meets the sign-in screen, so it cannot find
`Task title`. App Day 10 does not provide an authenticated Playwright setup,
so park that test honestly and add an anonymous test that should pass.

In `frontend/test/e2e/tasks.spec.ts`, change only the test line:

```ts
// Parked until the browser test can sign in; anonymous users now see sign-in.
test.fixme('creates, completes, and persists a task', async ({ page }) => {
```

Create `frontend/test/e2e/auth.spec.ts`:

```ts
import { expect, test } from '@playwright/test';

test('anonymous visitors see sign-in and the API returns 401', async ({ page, request }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'Sign in to open MiniTrack' }),
  ).toBeVisible();
  await expect(page.getByRole('button', { name: 'Sign in with GitHub' })).toBeVisible();
  // No task form is rendered for an anonymous visitor.
  await expect(page.getByLabel('Task title')).toHaveCount(0);

  // `request` sends HTTP without the browser's cookies.
  const response = await request.get('/api/tasks');
  expect(response.status()).toBe(401);
});
```

```bash
npm run test:unit
npm run test:integration
npm run test:e2e
npm run build
```

**Expected observation:** unit and integration tests still pass (they call
`lib/` functions directly, below the Route Handlers). Playwright reports
`1 passed` and `1 skipped`. `npm run build` succeeds.

Failure checks:

| Symptom | Likely cause |
|---|---|
| Anonymous curl returns `200` | The check is missing from that handler, or the file was not saved. |
| Anonymous `PATCH /api/tasks/abc` returns `400` | The auth check is placed after ID validation; move it to the top. |
| Signed-in browser actions now fail with `401` | The session cookie is missing; sign out and in again, and confirm `AUTH_SECRET` did not change. |
| `auth.spec.ts` fails with `MissingSecret` | The dev server could not read `AUTH_SECRET`; confirm it is in `frontend/.env.local`. |

#### Step 5: Run the first 30-minute mock (React and API)

Set a timer. Use a partner, or record yourself and play it back. Do **not**
read the model answers until the timer ends.

- **0–3 min:** Pitch MiniTrack in one minute, then name its four layers.
- **3–23 min:** Answer the eight questions below aloud, about 2 minutes each.
  For every answer, name a real MiniTrack file.
- **23–30 min:** Score yourself and write the two weakest answers in
  `checkpoints/ROUGH/Notes.md`.

Score each answer 0–2: **0** = could not explain, **1** = correct but vague
or no file named, **2** = clear answer, a MiniTrack example, and one
trade-off. A total of 12/16 or more is a good first mock.

<details>
<summary>Q1. Why is the task title input "controlled", and why not mutate the tasks array?</summary>

**Model answer:** In `frontend/app/TaskBoard.tsx` the input's `value` comes
from `title` state and `onChange` calls `setTitle`, so React is the single
source of truth for what is typed. The `tasks` array comes from the Server
Component as props; mutating it would not trigger a re-render and would drift
from PostgreSQL. After a successful request, `router.refresh()` asks the
server for fresh data instead.

</details>

<details>
<summary>Q2. What happens, step by step, when a signed-in user adds a task?</summary>

**Model answer:** `onSubmit` calls `preventDefault()`, trims the title, and
`fetch`es `POST /api/tasks` with JSON. The browser attaches the session
cookie. The Route Handler calls `auth()`, parses the body, validates it with
`normalizeTitle`, calls `createTask`, which runs a parameterized `INSERT ...
RETURNING`, and returns `201`. The client clears the input and calls
`router.refresh()`, so `page.tsx` re-runs `searchTasks` and renders the new
row.

</details>

<details>
<summary>Q3. Which status codes does the task API return, and why each?</summary>

**Model answer:** `200` for a successful read or update, `201` for a created
task, `400` for invalid JSON, title, or ID, `401` when `auth()` finds no
session, `404` when `renameTask`, `setDone`, or `deleteTask` finds no row, and
`500` for an unexpected database error that is logged on the server with a
generic message to the client.

</details>

<details>
<summary>Q4. Why use $1 placeholders, and do they escape % and _ in search?</summary>

**Model answer:** In `frontend/lib/tasks.ts`, values are sent separately from
the SQL text, so a title like `'); DROP TABLE tasks; --` is stored as text,
not run. Placeholders do **not** change `LIKE` meaning: `%` and `_` are still
wildcards inside the pattern, so `escapeLike` adds a backslash before them and
the query uses `ILIKE $1 ESCAPE '\'`.

</details>

<details>
<summary>Q5. Why disable the button while a request is pending, and is that enough?</summary>

**Model answer:** `busy` disables the button to stop accidental double
submits and show progress. It is not enough on its own: `POST` is not
idempotent, so a network retry could still create two tasks. A real fix would
be a server-side idempotency key or a unique constraint.

</details>

<details>
<summary>Q6. What is authentication versus authorization in MiniTrack today?</summary>

**Model answer:** Authentication proves identity: GitHub OAuth through
Auth.js, checked with `auth()`. Authorization decides which rows that
identity may touch. Today every signed-in user can read and change every task,
because `tasks` has no owner. Prep Days 11–12 add `owner_id` and filter every
query by it.

</details>

<details>
<summary>Q7. Can React Context or a hidden button protect the API?</summary>

**Model answer:** No. `SessionProvider` and `useSession()` only distribute a
display copy of the session to Client Components. The browser can be modified,
and curl does not run React at all. The protection is the `auth()` check at
the top of each handler in `app/api/tasks/route.ts` and
`app/api/tasks/[id]/route.ts`, which returns `401`.

</details>

<details>
<summary>Q8. Why does MiniTrack have unit, integration, and browser tests?</summary>

**Model answer:** Unit tests check `normalizeTitle` and `normalizeTaskFilters`
in milliseconds without a database. The integration test proves
`renameTask` really updates `minitrack_test`. The Playwright tests prove a
user journey and, from today, that an anonymous visitor sees sign-in and gets
`401`. Each level catches different failures at a different cost.

</details>

#### Step 6: Weekly DSA review (part of the 1 hour 45 minute DSA block)

Pick the two DSA days from this week (Days 05–10) with the lowest confidence
in your notebook. Reattempt each in its practice file for 20 minutes without
looking at the solution, then run `python3 dsa-python/scripts/check_practice.py N`.
Write the invariant for each from memory.

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant U as User
  participant N as Next.js and Auth.js
  participant G as GitHub OAuth
  participant B as Browser cookie
  participant A as Task Route Handler
  participant D as PostgreSQL
  U->>N: Click Sign in with GitHub
  N->>G: OAuth authorization redirect
  G-->>N: Verified callback
  N-->>B: Set signed session cookie
  U->>A: GET /api/tasks with cookie
  A->>N: auth()
  N-->>A: Session
  A->>D: searchTasks(filters)
  D-->>A: Rows
  A-->>U: 200 task JSON
  Note over U,A: curl GET /api/tasks without cookie
  A->>N: auth()
  N-->>A: null
  A-->>U: 401 {"error":"Unauthorized"}, no SQL runs
```

Trace one concrete input. Name every boundary, value, and possible failure.
Draw this diagram once from memory on paper; it is today's system-design
drill.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Return 404 whenever the session is missing.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** Clients cannot distinguish missing authentication from a missing resource.

**Root cause:** The response does not describe the failed boundary accurately.

**Restore and verify:** Use 401 for missing or invalid authentication and reserve 404 for resource policy.

Concretely: in `GET` of `app/api/tasks/route.ts`, change `401` to `404` and
`'Unauthorized'` to `'Not found'`. Run `curl -i http://localhost:3000/api/tasks`
and `npm run test:e2e`. The new `auth.spec.ts` fails on
`expect(response.status()).toBe(401)`. A client seeing `404` would show
"task list not found" instead of sending the user to sign in. Restore `401`
and rerun both.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

### 9. Interview questions and answers (30 minutes)

#### Q1. What is authenticated loading and signed-out states?

**Interview-ready answer:** The UI should represent loading, authenticated, and unauthenticated states explicitly. Rendering the signed-out state is not a substitute for server enforcement.

**Example:** `frontend/app/page.tsx` shows `Checking session...` as the
`Suspense` fallback, returns **Sign in to open MiniTrack** when
`auth()` returns no user, and renders `SearchForm` and `TaskBoard` otherwise.
`ClientSessionSummary.tsx` mirrors this with `status === 'loading'`.

**Senior follow-up:** Hiding states in the client can flash the wrong UI or
leak data if the server sent it anyway. Deciding on the server in
`PrivateTasks` means signed-out HTML never contains tasks. If the loading
state is visible too often, measure `auth()` latency before redesigning.

#### Q2. How should the backend handle returning 401 for missing identity?

**Interview-ready answer:** A Route Handler returns 401 when no valid identity is present. Authorization for a particular task is a separate Day 11 decision.

**Example:** `curl -i -X DELETE http://localhost:3000/api/tasks/1` without a
cookie hits `DELETE` in `app/api/tasks/[id]/route.ts`; `auth()` returns
`null`, the handler returns `401 {"error":"Unauthorized"}`, and
`deleteTask` never runs.

**Senior follow-up:** Put the check before validation so anonymous callers
learn nothing about IDs. Log internal `500` errors, but never log the cookie,
`AUTH_SECRET`, or provider tokens. A `401` for every anonymous request is
expected, not an error to alert on; a sudden spike of them may be worth a
metric.

#### Q3. What invariant makes the monotonic stack solution correct?

**Interview-ready answer:** Keep indices whose temperatures form a decreasing stack; a warmer day resolves entries from the top.

**Example:** For `[73, 74, 75, 71, 69, 72, 76, 73]`, day 5 (`72`) pops day 4
(`69`, answer 1) and day 3 (`71`, answer 2), then stops at day 2 (`75`).

**Senior follow-up:** O(n) time holds because each index is pushed and popped
at most once. Using `>=` instead of `>` changes the meaning for equal
temperatures, so confirm "strictly warmer" with the interviewer.

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** Authentication proves who is making a request but does not yet prove which task that user may access.

**Example:** Signed in as user A, `PATCH /api/tasks/7 {"done":true}` passes the
`auth()` check and `setDone('7', true)` updates task 7, even if user B
created it. That is the gap Prep Days 11–12 close with `owner_id`.

**Senior follow-up:** The first security risk is this shared table (an
insecure direct object reference). Before adding infrastructure, measure the
`401` rate and `auth()` latency per request; with the default cookie session
strategy, verification is local and no database lookup is needed.

### 10. Complexity and operational cost

- **DSA:** O(n) time and O(n) space.
- **Application:** A monotonic stack processes each index at most twice. Authentication cost should be measured at the protected boundary, not guessed.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 10 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 10: finish authentication and run the first mock`

<a id="prep-day-11"></a>

## Prep Day 11 — Migrate from shared tasks to owned tasks

**Date:** Monday, December 7, 2026
**Time:** 7 study hours plus breaks
**Starting point:** Prep Day 10 is complete: GitHub sign-in works through Auth.js and anonymous task requests return `401`. All signed-in users still share one task table.
**Goal:** Migrate from shared tasks to owned tasks.

[Prep Day 10](../lessons/interview-prep/prep-day-10.md) · [Track home](../lessons/interview-prep/README.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Prep Day 12](../lessons/interview-prep/prep-day-12.md)

**Everything to read today is below.** The original [App Day 11](../lessons/day-11.md)
and [DSA Day 11](../dsa-python/lessons/dsa-day-11.md) remain available for
comparison. This prep day covers the user tables, the `owner_id` migration,
creating tasks with an owner, and owner-scoped **reads** (the page and
`GET /api/tasks`). Scoping the item mutations (`PATCH` and `DELETE` on
`/api/tasks/[id]`) and closing the IDOR gap belong to Prep Day 12; automated
authorization tests belong to Prep Day 13. Write runnable code in the named
project and practice files, not in this Markdown file.

### Learning objectives

- explain rendering identity-scoped data in beginner-friendly language;
- explain safe schema migration for required ownership and its failure boundary;
- implement or verify the listed MiniTrack milestone;
- solve DSA Day 11 using the binary search pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before reading further, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **binary search** pattern?

Use this format:

```md
## Monday, December 7, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Rendering identity-scoped data:** The page should receive only tasks selected for the authenticated owner. The client should not download every user's tasks and filter them locally.

**Backend focus — Safe schema migration for required ownership:** Adding a required owner to existing rows needs an ordered migration: create compatible schema, backfill or deliberately remove teaching data, add constraints, and verify before relying on them.

**Today's connection:** Identity becomes a foreign-key relationship used by every task data operation.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 11: binary search"]
  DSA --> FE["Frontend: Rendering identity-scoped data"]
  FE --> BE["Backend: Safe schema migration for required ownership"]
  BE --> App["MiniTrack: Migrate from shared tasks to owned tasks"]
  App --> Explain["Explain, test, and record gaps"]
```

Prep Day 10 answered **who is this user?** Today starts answering **which rows
belong to this user?**

```mermaid
flowchart TD
  A["1. Request reaches the server"] --> B["2. auth() reads the session"]
  B --> C{"3. session.user.id exists?"}
  C -- No --> D["Return 401 or show sign-in"]
  C -- Yes --> E["4. Pass the owner ID to the data layer"]
  E --> F["5. SQL filters WHERE owner_id = $1"]
  F --> G["6. Only that user's rows leave PostgreSQL"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-11.py`](../dsa-python/practice/day-11.py)
**Pattern:** binary search

#### Problem: Binary Search

Given a list of integers sorted in ascending order and a target, return the
index of the target. Return `-1` if the target is not in the list. Assume the
values are distinct; if duplicates exist, any matching index is acceptable.

```python
solve([-1, 0, 3, 5, 9, 12], 9)  # 4
solve([-1, 0, 3, 5, 9, 12], 2)  # -1
```

The simple approach checks every element from left to right: O(n) time. Because
the list is **sorted**, one comparison with the middle element tells you which
half cannot contain the target, so you can throw that half away.

#### Start coding

In the practice file, replace the `raise NotImplementedError` line with your
own implementation. This is the starting shape:

```python
def solve(nums, target):
    # Return the index of target, or -1 if it is absent.
    raise NotImplementedError
```

Two Python details you will use:

- `//` is **integer division**: `7 // 2` is `3`, not `3.5`. List indices must
  be whole numbers.
- `left + (right - left) // 2` is the middle index between `left` and `right`.
  For `left = 3` and `right = 5`, it is `3 + 2 // 2 = 4`.

`left` and `right` are the first and last indices that could still hold the
target. When `left > right`, nothing is left to search.

```mermaid
flowchart TD
  Start["left = 0, right = len - 1"] --> Loop{"left <= right?"}
  Loop -- No --> Missing["Return -1"]
  Loop -- Yes --> Mid["mid = left + (right - left) // 2"]
  Mid --> Equal{"nums[mid] == target?"}
  Equal -- Yes --> Found["Return mid"]
  Equal -- No --> Smaller{"nums[mid] < target?"}
  Smaller -- Yes --> Right["left = mid + 1"]
  Smaller -- No --> Left["right = mid - 1"]
  Right --> Loop
  Left --> Loop
```

#### Invariant to say aloud

Maintain a search interval that is guaranteed to contain the target if it exists, and discard half after each comparison.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 11
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** the day-specific checker prints `Case 1 passed` and
`Case 2 passed`, and the completed reference suite still passes. The checker
only tests the two sample calls above, so add your own edge cases.

You can also temporarily add these checks below your `solve` function in the
practice file, then run `python3 dsa-python/practice/day-11.py`:

```python
if __name__ == '__main__':
    assert solve([-1, 0, 3, 5, 9, 12], 9) == 4
    assert solve([-1, 0, 3, 5, 9, 12], 2) == -1
    assert solve([], 5) == -1                     # Empty list.
    assert solve([5], 5) == 0                     # One element, found.
    assert solve([5], 1) == -1                    # One element, missing.
    assert solve([-1, 0, 3, 5, 9, 12], -1) == 0   # First element.
    assert solve([-1, 0, 3, 5, 9, 12], 12) == 5   # Last element.
    assert solve([-1, 0, 3, 5, 9, 12], 13) == -1  # Larger than all.
    assert solve([-1, 0, 3, 5, 9, 12], -5) == -1  # Smaller than all.
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple solution</summary>

```python
def solve(nums, target):
    for i, value in enumerate(nums):
        if value == target:
            return i
    return -1
```

</details>

This linear scan ignores the fact that the list is sorted. In the worst case
(target missing or last), it compares all `n` elements, so time is O(n). It
uses O(1) extra space and also works on unsorted input.

#### Optimized code — reveal after attempting

<details>
<summary>Show the binary search solution</summary>

```python
def solve(nums, target):
    left, right = 0, len(nums) - 1  # inclusive search interval
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            left = mid + 1   # target can only be to the right of mid
        else:
            right = mid - 1  # target can only be to the left of mid
    return -1
```

</details>

Each comparison removes `mid` and at least half of the remaining interval. A
list of one million values needs at most about 20 comparisons. Time is
O(log n); extra space is O(1).

Trace `solve([-1, 0, 3, 5, 9, 12], 9)`:

| Step | left | right | mid | nums[mid] | Action |
|---:|---:|---:|---:|---:|---|
| 1 | 0 | 5 | 2 | 3 | `3 < 9`; set `left = 3` |
| 2 | 3 | 5 | 4 | 9 | Equal; return `4` |

For target `2`: `mid = 2` (`3 > 2`, so `right = 1`), then `mid = 0`
(`-1 < 2`, so `left = 1`), then `mid = 1` (`0 < 2`, so `left = 2`). Now
`left > right`, so return `-1`.

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “I scan from left to right and return the first
index whose value equals the target. If I reach the end, I return -1. That is
O(n) time and O(1) extra space, and it does not use the sorted order.”

**Example:** For `[-1, 0, 3, 5, 9, 12]` and target `9`, the scan checks five
values before returning `4`.

**Follow-up:** When is the linear scan the right choice? When the data is
unsorted and searched once; sorting first costs O(n log n), which is more than
one O(n) scan.

##### DSA Q2. How does binary search use the sorted order?

**Interview-ready answer:** “I compare the target with the middle value. If
the middle is smaller, every value to its left is also smaller, so the target
can only be on the right. If it is larger, the target can only be on the left.
Each comparison discards about half of the remaining values.”

**Example:** Searching for `9`, the first middle value is `3`. Since the list
is sorted, `-1`, `0`, and `3` can all be discarded at once.

**Follow-up:** The requirement is a **monotonic** condition, not literally a
list. Binary search also works on answers such as “smallest capacity that
works” when larger answers stay valid.

##### DSA Q3. Why is the loop `left <= right`, and why `mid + 1` and `mid - 1`?

**Interview-ready answer:** “I use an inclusive interval: both `left` and
`right` can still hold the target. The interval is empty only when
`left > right`. After checking `mid`, I exclude it with `mid + 1` or
`mid - 1`, so the interval always shrinks and the loop terminates.”

**Example:** With `[5]` and target `5`, `left = right = 0`. Using
`left < right` would skip the only element and wrongly return `-1`.

**Follow-up:** Writing `left = mid` with an inclusive interval can loop forever
when `left` and `right` are adjacent. Pick one interval convention and keep
every update consistent with it.

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “The iterative version takes O(log n) time
because the interval halves after each comparison, and O(1) extra space
because it stores only three indices.”

**Example:** For one million values, about 20 comparisons are enough because
2²⁰ is about one million.

**Follow-up:** O(log n) assumes O(1) random access by index. On a linked list,
reaching the middle costs O(n). Python integers do not overflow, but in Java or
C++ `left + (right - left) // 2` avoids overflow from `left + right`.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “I test an empty list, one element found and
missing, the first and last positions, a target smaller or larger than every
value, and duplicates if the interviewer allows them.”

**Example:** `solve([], 5)` returns `-1` immediately because `right` starts at
`-1`; `solve([5], 5)` returns `0`.

**Follow-up:** With duplicates such as `[1, 2, 2, 2, 3]`, this version returns
*some* index of `2`, not necessarily the first. Clarify whether the first or
last occurrence is required.

##### DSA Q6. How would you find the first index where the target could be inserted?

**Interview-ready answer:** “I search for the lower bound: the first index
whose value is greater than or equal to the target. I use a half-open interval
`[left, right)` starting with `right = len(nums)`. If `nums[mid] < target`,
I move `left = mid + 1`; otherwise `right = mid`. When they meet, `left` is the
answer.”

**Example:** In `[1, 3, 5, 7]`, the lower bound for `4` is index `2`; for `8`
it is index `4`, the end of the list.

**Follow-up:** Python's `bisect.bisect_left` implements this. It also finds
the first occurrence of a duplicate value: check that the returned index is in
range and holds the target.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

The page should receive only tasks selected for the authenticated owner. The client should not download every user's tasks and filter them locally.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.
Anything sent to the browser can be read in DevTools, even if React never
renders it.

#### How

Compare these two designs. The first is a data leak even though the screen
looks correct:

```tsx
// WRONG: every user's rows reach the browser, then React hides some of them.
const allTasks = await searchTasks(filters);
<TaskBoard tasks={allTasks.filter(task => task.ownerId === session.user.id)} />
```

```tsx
// RIGHT: PostgreSQL returns only the signed-in user's rows.
const tasks = await searchTasks(session.user.id, filters);
<TaskBoard tasks={tasks} />
```

In the right version, the Server Component reads the verified session with
`auth()`, passes `session.user.id` to the data layer, and sends only owned
rows to the `TaskBoard` Client Component. `TaskBoard` does not change today:
it still receives `tasks` as props and never learns other users exist. The
`Task` type also does not gain an `ownerId` field, because the browser does
not need it.

Files to open deliberately:

- `frontend/app/page.tsx` (the Server Component that reads the session)
- `frontend/lib/tasks.ts` (the data functions that receive the owner ID)
- `frontend/auth.ts` (where `session.user.id` is created)

Answer before coding:

- Which value is persistent (`tasks.owner_id` in PostgreSQL), and which value
  is temporary interaction state (the search box and pending flags)?
- What starts this behavior? (A request for `/`, carrying the session cookie.)
- What should the user see while work is pending? (`Checking session...` from
  the Suspense fallback.)
- What should remain unchanged when the operation fails? (No rows are shown;
  no other user's data is ever sent.)

### 5. Backend guided study (1 hour 30 minutes)

#### What

Adding a required owner to existing rows needs an ordered migration: create compatible schema, backfill or deliberately remove teaching data, add constraints, and verify before relying on them.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

#### Why Auth.js needs database tables

On Prep Day 10, Auth.js stored the session in a signed cookie and had no user
table. A foreign key needs a real row to point to, so today Auth.js gets the
official PostgreSQL adapter. The adapter creates a `users` row the first time
someone signs in and stores linked provider accounts and sessions. Each user
gets a stable integer `id` (a `SERIAL` column), and that is what
`tasks.owner_id` will reference.

```mermaid
erDiagram
  users ||--o{ accounts : "signs in with"
  users ||--o{ sessions : "has"
  users ||--o{ tasks : "owns"
  users {
    SERIAL id PK
    VARCHAR email
  }
  tasks {
    BIGINT id PK
    INTEGER owner_id FK
    TEXT title
    BOOLEAN done
  }
```

#### Why a required column needs an ordered migration

`ALTER TABLE tasks ADD COLUMN owner_id INTEGER NOT NULL` asks PostgreSQL to
give **every existing row** a non-null owner. The existing rows have none, so
the statement fails. You must decide what happens to old rows first.

For this local learning database, the deliberate choice is to delete the
sample tasks inside one transaction. For production data, never delete rows;
use the staged sequence instead:

```sql
-- Production-style sequence (illustration; do not run it today).
-- 1. Compatible change: the column may be NULL for now.
ALTER TABLE tasks
ADD COLUMN owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE;

-- 2. Backfill with an approved mapping, for example one known account.
UPDATE tasks SET owner_id = :owner_id WHERE owner_id IS NULL;

-- 3. Verify: this must return 0 before continuing.
SELECT count(*) FROM tasks WHERE owner_id IS NULL;

-- 4. Enforce the rule only after the data satisfies it.
ALTER TABLE tasks ALTER COLUMN owner_id SET NOT NULL;
```

`:owner_id` is a `psql` variable (set with `\set owner_id 1`), not a value
typed by an end user. Take a backup and plan rollback before step 4.

### 6. MiniTrack implementation (1 hour)

#### Step 1: Install the adapter and create the user tables

From `frontend/`:

```bash
npm install @auth/pg-adapter
```

Create `backend/sql/migrations/002-auth-users.sql`. This is the schema from
the official
[Auth.js PostgreSQL adapter guide](https://authjs.dev/getting-started/adapters/pg);
recheck the guide before installing because adapter schemas can change:

```sql
-- Tables required by @auth/pg-adapter. Column names are case-sensitive.
CREATE TABLE verification_token
(
  identifier TEXT NOT NULL,
  expires TIMESTAMPTZ NOT NULL,
  token TEXT NOT NULL,

  PRIMARY KEY (identifier, token)
);

CREATE TABLE accounts
(
  id SERIAL,
  "userId" INTEGER NOT NULL,
  type VARCHAR(255) NOT NULL,
  provider VARCHAR(255) NOT NULL,
  "providerAccountId" VARCHAR(255) NOT NULL,
  refresh_token TEXT,
  access_token TEXT,
  expires_at BIGINT,
  id_token TEXT,
  scope TEXT,
  session_state TEXT,
  token_type TEXT,

  PRIMARY KEY (id)
);

CREATE TABLE sessions
(
  id SERIAL,
  "userId" INTEGER NOT NULL,
  expires TIMESTAMPTZ NOT NULL,
  "sessionToken" VARCHAR(255) NOT NULL,

  PRIMARY KEY (id)
);

CREATE TABLE users
(
  id SERIAL,
  name VARCHAR(255),
  email VARCHAR(255),
  "emailVerified" TIMESTAMPTZ,
  image TEXT,

  PRIMARY KEY (id)
);
```

#### Step 2: Add `owner_id` to tasks

Create `backend/sql/migrations/003-task-owners.sql`:

```sql
BEGIN;

-- Learning-only choice: remove unowned sample data.
DELETE FROM tasks;

ALTER TABLE tasks
ADD COLUMN owner_id INTEGER NOT NULL
REFERENCES users(id)
ON DELETE CASCADE;

-- Supports "this owner's tasks" reads and "this owner's task N" lookups.
CREATE INDEX tasks_owner_id_id_idx
ON tasks (owner_id, id);

COMMIT;
```

`INTEGER` matches the adapter's `users.id SERIAL`. `ON DELETE CASCADE` removes
a user's tasks when the user row is deleted. `BEGIN`/`COMMIT` make the delete
and the new column one all-or-nothing change.

Apply both files in order from the repository root. `ON_ERROR_STOP=1` makes
`psql` stop at the first error instead of running later statements:

```bash
psql -d minitrack -v ON_ERROR_STOP=1 -f backend/sql/migrations/002-auth-users.sql
psql -d minitrack -v ON_ERROR_STOP=1 -f backend/sql/migrations/003-task-owners.sql
psql -d minitrack -c '\d tasks'
```

**Expected observation:** `\d tasks` lists `owner_id | integer | not null`,
the index `tasks_owner_id_id_idx`, and a foreign-key constraint referencing
`users(id)`.

These migration files are not re-runnable: running `002` twice fails with
`relation "verification_token" already exists`. Do not re-run
`backend/sql/schema.sql` on this database either; its starter `INSERT`s have
no `owner_id` and would now fail the `NOT NULL` constraint.

#### Step 3: Connect Auth.js to PostgreSQL

Replace `frontend/auth.ts`. It reuses the existing server-only pool from
`frontend/lib/db.ts`:

```ts
import PostgresAdapter from '@auth/pg-adapter';
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { getPool } from './lib/db';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PostgresAdapter(getPool()),
  providers: [GitHub],
  callbacks: {
    session({ session, user }) {
      // The database adapter supplies the stable Auth.js user ID.
      session.user.id = user.id;
      return session;
    },
  },
});
```

TypeScript does not know about `session.user.id` yet. Create
`frontend/types/next-auth.d.ts` to extend the Auth.js `Session` type:

```ts
import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
```

#### Step 4: Give the read and create functions an owner

In `frontend/lib/tasks.ts`, make `ownerId` the **first, required** argument
of every read function and of `createTask`. Replace only these three functions
and keep the rest of the file (`toTask`, `escapeLike`, `setDone`,
`renameTask`, `deleteTask`) unchanged today:

```ts
export async function listTasks(ownerId: string): Promise<Task[]> {
  const result = await getPool().query<TaskRow>(
    'SELECT id, title, done, created_at FROM tasks WHERE owner_id = $1 ORDER BY id',
    [ownerId],
  );
  return result.rows.map(toTask);
}

export async function searchTasks(
  ownerId: string,
  filters: TaskFilters,
): Promise<Task[]> {
  const pattern = `%${escapeLike(filters.query)}%`;

  const result = await getPool().query<TaskRow>(
    `
      SELECT id, title, done, created_at
      FROM tasks
      WHERE owner_id = $1
        AND title ILIKE $2 ESCAPE '\\'
        AND (
          $3::text = 'all'
          OR done = ($3::text = 'done')
        )
      ORDER BY id
    `,
    [ownerId, pattern, filters.status],
  );

  return result.rows.map(toTask);
}

export async function createTask(
  ownerId: string,
  title: string,
): Promise<Task> {
  const result = await getPool().query<TaskRow>(
    `
      INSERT INTO tasks (owner_id, title)
      VALUES ($1, $2)
      RETURNING id, title, done, created_at
    `,
    [ownerId, title],
  );

  const row = result.rows[0];
  if (!row) throw new Error('Inserted task was not returned by PostgreSQL');
  return toTask(row);
}
```

`session.user.id` is a string in TypeScript, while `owner_id` is an
`INTEGER`; `pg` sends the bound value and PostgreSQL converts `'7'` to `7`.
Making the owner a required parameter means TypeScript reports every caller you
forgot to update. If `listTasks` has no callers left after Prep Day 06's
search work, you may delete it instead.

**Known gap until tomorrow:** `setDone`, `renameTask`, and `deleteTask` still
match only `WHERE id = $1`. A signed-in user who guesses another task ID could
still change it. Prep Day 12 closes this gap.

#### Step 5: Use the session owner in the collection API

Replace `frontend/app/api/tasks/route.ts`. It keeps Prep Day 10's `401`
checks and passes the verified owner to the data layer:

```ts
import type { NextRequest } from 'next/server';
import { auth } from '@/auth';
import { createTask, searchTasks } from '../../../lib/tasks';
import {
  isRecord,
  normalizeTaskFilters,
  normalizeTitle,
} from '../../../lib/validation';

export async function GET(request: NextRequest): Promise<Response> {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const filters = normalizeTaskFilters(
    request.nextUrl.searchParams.get('q'),
    request.nextUrl.searchParams.get('status'),
  );

  try {
    return Response.json(await searchTasks(session.user.id, filters));
  } catch (error: unknown) {
    console.error('GET /api/tasks failed:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request): Promise<Response> {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let parsingBody = true;
  try {
    const body: unknown = await request.json();
    parsingBody = false;
    const title = normalizeTitle(isRecord(body) ? body.title : undefined);
    if (!title) {
      return Response.json({ error: 'title must be 1–200 characters' }, { status: 400 });
    }
    // The owner comes from the verified session, never from the request body.
    return Response.json(await createTask(session.user.id, title), { status: 201 });
  } catch (error: unknown) {
    if (parsingBody) {
      return Response.json({ error: 'Invalid JSON' }, { status: 400 });
    }
    console.error('POST /api/tasks failed:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

Even if a caller sends `{"title":"x","ownerId":"1"}`, the handler ignores
`ownerId` because it reads only `body.title`.

#### Step 6: Render only the owner's tasks on the page

Replace `frontend/app/page.tsx`. It combines Prep Day 10's sign-in gate with
the URL search filters and passes the owner ID into `searchTasks`:

```tsx
import { Suspense } from 'react';
import { auth } from '@/auth';
import AuthControls from './AuthControls';
import SearchForm from './SearchForm';
import TaskBoard from './TaskBoard';
import { searchTasks } from '../lib/tasks';
import { normalizeTaskFilters } from '../lib/validation';
import type { Task } from './types';

type PageProps = {
  searchParams: Promise<{
    q?: string;
    status?: string;
  }>;
};

async function PrivateTasks({ searchParams }: PageProps) {
  // auth() reads the session cookie, so this subtree is request-time work.
  const session = await auth();
  const ownerId = session?.user?.id;

  if (!ownerId) {
    return (
      <section className="rounded-2xl border border-slate-700 bg-slate-900 p-8">
        <h2 className="text-2xl font-bold">Sign in to open MiniTrack</h2>
        <div className="mt-5">
          <AuthControls />
        </div>
      </section>
    );
  }

  const params = await searchParams;
  const filters = normalizeTaskFilters(params.q, params.status);

  let tasks: Task[] = [];
  let error: string | null = null;
  try {
    // PostgreSQL filters by owner; other users' rows never reach React.
    tasks = await searchTasks(ownerId, filters);
  } catch {
    error = 'Unable to load tasks';
  }

  return (
    <>
      <AuthControls />
      <SearchForm filters={filters} />
      {error ? (
        <p
          className="rounded-xl border border-rose-400/30 bg-rose-400/10 p-4 text-rose-200"
          role="alert"
        >
          Could not load tasks. Check PostgreSQL and DATABASE_URL.
        </p>
      ) : (
        <TaskBoard tasks={tasks} />
      )}
    </>
  );
}

export default function Home({ searchParams }: PageProps) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-5 py-12">
      <h1 className="mb-8 text-4xl font-bold">MiniTrack</h1>
      <Suspense fallback={<p className="text-slate-400">Checking session...</p>}>
        <PrivateTasks searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
```

With Cache Components, `auth()` and `searchParams` are request-time APIs, so
they belong inside `Suspense`. Do not add `dynamic = 'force-dynamic'`, and do
not cache private output with `"use cache"`.

#### Step 7: Run and verify

From `frontend/`:

```bash
npx tsc --noEmit
npm run lint
npm run dev
```

1. Restart the dev server, open `http://localhost:3000`, **sign out, then sign
   in again**. With the adapter, Auth.js now creates a database user and a
   database session.
2. Add a task named `Owned task`.
3. In another terminal, prove that PostgreSQL recorded the owner:

```bash
psql -d minitrack -c 'SELECT id, name, email FROM users;'
psql -d minitrack -c 'SELECT id, owner_id, title FROM tasks ORDER BY id;'
```

**Expected observation:** one `users` row for your GitHub account, and every
task row has that user's `id` as `owner_id`. Anonymous
`curl -i http://localhost:3000/api/tasks` still returns `401`.

**Failure checks:**

- `column "owner_id" of relation "tasks" contains null values`: you ran
  `ALTER TABLE ... NOT NULL` without deleting or backfilling rows (today's
  debugging exercise).
- `Property 'id' does not exist on type ...`: `frontend/types/next-auth.d.ts`
  is missing or not included by `tsconfig.json`.
- `relation "users" does not exist` while signing in: migration `002` was not
  applied to the database in `DATABASE_URL`.
- `Expected 2 arguments, but got 1` from `tsc`: a caller of `createTask` or
  `searchTasks` still omits the owner. Fix the caller; do not make the owner
  optional.

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant U as Signed-in user (id 7)
  participant B as Browser
  participant P as page.tsx PrivateTasks
  participant A as Auth.js auth()
  participant D as lib/tasks.ts searchTasks
  participant DB as PostgreSQL
  U->>B: Open /?status=open
  B->>P: GET / with session cookie
  P->>A: auth()
  A->>DB: Look up session by token
  DB-->>A: Session for user 7
  A-->>P: session.user.id = "7"
  P->>D: searchTasks("7", { query: "", status: "open" })
  D->>DB: SELECT ... WHERE owner_id = $1 AND ... ["7", "%%", "open"]
  DB-->>D: Only user 7's open rows
  D-->>P: Task[]
  P-->>B: Streamed HTML with TaskBoard props
  B-->>U: Sees only their own tasks
```

Trace one concrete input. Name every boundary, value, and possible failure.
For example: a missing session cookie stops at `auth()` and shows the sign-in
section; a stopped PostgreSQL stops at `searchTasks` and shows the alert.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Add a NOT NULL owner_id column immediately to a populated table without a backfill.

Use a throwaway copy so your real data is safe:

```bash
psql -d minitrack -c 'CREATE TABLE tasks_copy AS SELECT id, title FROM tasks;'
psql -d minitrack -c "INSERT INTO tasks_copy (id, title) VALUES (999, 'old row');"
psql -d minitrack -c 'ALTER TABLE tasks_copy ADD COLUMN owner_id INTEGER NOT NULL;'
```

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** The migration fails because existing rows have no owner.
PostgreSQL reports `column "owner_id" of relation "tasks_copy" contains null values`.

**Root cause:** The new constraint is incompatible with current data.

**Restore and verify:** Use an explicit compatibility and backfill sequence before enforcing NOT NULL.

```bash
psql -d minitrack -c 'ALTER TABLE tasks_copy ADD COLUMN owner_id INTEGER;'
psql -d minitrack -c 'UPDATE tasks_copy SET owner_id = (SELECT min(id) FROM users);'
psql -d minitrack -c 'SELECT count(*) FROM tasks_copy WHERE owner_id IS NULL;'
psql -d minitrack -c 'ALTER TABLE tasks_copy ALTER COLUMN owner_id SET NOT NULL;'
psql -d minitrack -c 'DROP TABLE tasks_copy;'
```

The count must be `0` before `SET NOT NULL` succeeds. Do not stop after making
the symptom disappear. Explain why the repair restores the intended invariant:
every row has an owner at the moment the rule starts being enforced.

### 9. Interview questions and answers (30 minutes)

#### Q1. What is rendering identity-scoped data?

**Interview-ready answer:** The page should receive only tasks selected for the authenticated owner. The client should not download every user's tasks and filter them locally.

**Example:** In `frontend/app/page.tsx`, `PrivateTasks` calls `auth()`, then
`searchTasks(ownerId, filters)`, and passes the result to `<TaskBoard
tasks={tasks} />`. `TaskBoard` never receives another user's row, so there is
nothing to leak through DevTools or the React props payload.

**Senior follow-up:** Client-side filtering looks fine in a demo but leaks data
and wastes bandwidth as the table grows. If the page later becomes a client-side
fetch, the same rule applies to `GET /api/tasks`: scope on the server, and
never cache private, per-user output in a shared cache.

#### Q2. How should the backend handle safe schema migration for required ownership?

**Interview-ready answer:** Adding a required owner to existing rows needs an ordered migration: create compatible schema, backfill or deliberately remove teaching data, add constraints, and verify before relying on them.

**Example:** `backend/sql/migrations/003-task-owners.sql` deliberately deletes
local sample rows inside `BEGIN`/`COMMIT`, then adds `owner_id INTEGER NOT NULL
REFERENCES users(id)`. In production you would add a nullable column, run
`UPDATE tasks SET owner_id = ...`, verify `SELECT count(*) ... IS NULL` returns
`0`, and only then `SET NOT NULL`.

**Senior follow-up:** On a large table, `SET NOT NULL` scans every row while
holding a strong lock. Backfill in batches, consider adding a
`CHECK (owner_id IS NOT NULL) NOT VALID` constraint and validating it
separately, rehearse on a copy of production data, and prepare a backup and
rollback plan before the irreversible step.

#### Q3. What invariant makes the binary search solution correct?

**Interview-ready answer:** Maintain a search interval that is guaranteed to contain the target if it exists, and discard half after each comparison.

**Example:** For `solve([-1, 0, 3, 5, 9, 12], 9)`: the interval starts as
indices `0..5`; `nums[2] = 3 < 9`, so it becomes `3..5`; `nums[4] = 9`, so
return `4`.

**Senior follow-up:** O(log n) assumes sorted data with O(1) index access. If
the data changes often, keeping it sorted may cost more than the searches save;
a hash set gives expected O(1) membership but no ordering or range queries.

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** Identity becomes a foreign-key relationship used by every task data operation.

**Example:** GitHub sign-in creates a `users` row with `id = 7`; Auth.js copies
it into `session.user.id`; `POST /api/tasks` calls `createTask("7", title)`,
which inserts `owner_id = 7`; the page calls `searchTasks("7", filters)`,
which reads only `WHERE owner_id = $1`.

**Senior follow-up:** The first thing to measure is query plans for
owner-scoped reads (`EXPLAIN ANALYZE` should use `tasks_owner_id_id_idx`). The
first security risk is the item routes still matching only by `id`; Prep Day
12 closes that IDOR gap.

### 10. Complexity and operational cost

- **DSA:** O(log n) time and O(1) iterative space.
- **Application:** Migration cost grows with row count and lock behavior. Rehearse on representative data and define recovery before production execution.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 11 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 11: migrate from shared tasks to owned tasks`

<a id="prep-day-12"></a>

## Prep Day 12 — Enforce owner authorization in SQL

**Date:** Tuesday, December 8, 2026
**Time:** 7 study hours plus breaks
**Starting point:** Prep Day 11 is complete: Auth.js users persist in PostgreSQL, every task has a required `owner_id`, and the page and `GET`/`POST /api/tasks` are scoped to the signed-in owner. Item `PATCH`/`DELETE` still match only the task ID.
**Goal:** Enforce owner authorization in SQL.

[Prep Day 11](../lessons/interview-prep/prep-day-11.md) · [Track home](../lessons/interview-prep/README.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Prep Day 13](../lessons/interview-prep/prep-day-13.md)

**Everything to read today is below.** The original [App Day 11](../lessons/day-11.md)
(sections 4–6) and [DSA Day 12](../dsa-python/lessons/dsa-day-12.md) remain
available for comparison. This prep day scopes every task mutation by owner,
closes the IDOR gap left on Prep Day 11, and checks it manually with a second
user. The user tables and the `owner_id` migration belong to Prep Day 11;
automated authorization tests and clearer `401`/`404` UI messages belong to
Prep Day 13. Write runnable code in the named project and practice files, not
in this Markdown file.

### Learning objectives

- explain treating hidden UI as convenience only in beginner-friendly language;
- explain owner-scoped SQL and IDOR prevention and its failure boundary;
- implement or verify the listed MiniTrack milestone;
- solve DSA Day 12 using the binary search in rotated data pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before reading further, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **binary search in rotated data** pattern?

Use this format:

```md
## Tuesday, December 8, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Treating hidden UI as convenience only:** The UI may hide actions a user cannot take, but that only improves usability. Every request must still be authorized on the server.

**Backend focus — Owner-scoped SQL and IDOR prevention:** Include owner ID in the same SELECT, UPDATE, or DELETE predicate as the task ID. Fetching by ID and checking later creates avoidable race and omission risks.

**Today's connection:** Authorization is enforced where the database operation selects the row, closing the direct-object-reference gap.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 12: binary search in rotated data"]
  DSA --> FE["Frontend: Treating hidden UI as convenience only"]
  FE --> BE["Backend: Owner-scoped SQL and IDOR prevention"]
  BE --> App["MiniTrack: Enforce owner authorization in SQL"]
  App --> Explain["Explain, test, and record gaps"]
```

```mermaid
flowchart TD
  A["PATCH or DELETE /api/tasks/42"] --> B["Validate the ID"]
  B --> C["auth() reads the session"]
  C --> D{"session.user.id exists?"}
  D -- No --> E["401 Unauthorized"]
  D -- Yes --> F["SQL: WHERE id = 42 AND owner_id = session user"]
  F --> G{"Row returned?"}
  G -- Yes --> H["200 with the task"]
  G -- No --> I["404 Task not found (missing or not yours)"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-12.py`](../dsa-python/practice/day-12.py)
**Pattern:** binary search in rotated data

#### Problem: Search in Rotated Sorted Array

A sorted list of **distinct** integers was rotated: it was cut at some point
and the two parts were swapped. For example, `[0, 1, 2, 4, 5, 6, 7]` rotated
at index 4 becomes `[4, 5, 6, 7, 0, 1, 2]`. Given the rotated list and a target,
return the target's index, or `-1` if it is absent. Aim for O(log n) time.

```python
solve([4, 5, 6, 7, 0, 1, 2], 0)  # 4
solve([4, 5, 6, 7, 0, 1, 2], 3)  # -1
```

A plain linear scan is O(n). Ordinary binary search fails because the whole
list is not sorted. The key observation: if you split a rotated list at any
`mid`, **at least one half is still sorted**, and for a sorted half you can
check with two comparisons whether the target lies inside it.

#### Start coding

In the practice file, replace the `raise NotImplementedError` line with your
own implementation. This is the starting shape:

```python
def solve(nums, target):
    # Return the index of target in the rotated list, or -1.
    raise NotImplementedError
```

Two Python details you will use:

- `(left + right) // 2` is the middle index using integer division.
- A **chained comparison** such as `nums[left] <= target < nums[mid]` means
  `nums[left] <= target and target < nums[mid]`. It is true only when the
  target falls in that range.

How to tell which half is sorted: if `nums[left] <= nums[mid]`, the values
from `left` to `mid` rise without a break, so the left half is sorted.
Otherwise the break is in the left half, so the right half (`mid` to `right`)
is sorted.

```mermaid
flowchart TD
  Start["left = 0, right = len - 1"] --> Loop{"left <= right?"}
  Loop -- No --> Missing["Return -1"]
  Loop -- Yes --> Mid["mid = (left + right) // 2"]
  Mid --> Hit{"nums[mid] == target?"}
  Hit -- Yes --> Found["Return mid"]
  Hit -- No --> Sorted{"nums[left] <= nums[mid]?"}
  Sorted -- "Yes: left half sorted" --> InLeft{"nums[left] <= target < nums[mid]?"}
  InLeft -- Yes --> GoLeft["right = mid - 1"]
  InLeft -- No --> GoRight["left = mid + 1"]
  Sorted -- "No: right half sorted" --> InRight{"nums[mid] < target <= nums[right]?"}
  InRight -- Yes --> GoRight
  InRight -- No --> GoLeft
  GoLeft --> Loop
  GoRight --> Loop
```

#### Invariant to say aloud

At least one side is sorted; use bounds to decide whether the target lies inside that sorted half.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 12
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** the day-specific checker prints `Case 1 passed` and
`Case 2 passed`, and the completed reference suite still passes. Two samples
cannot cover every rotation point, so add your own cases.

You can also temporarily add these checks below your `solve` function in the
practice file, then run `python3 dsa-python/practice/day-12.py`:

```python
if __name__ == '__main__':
    assert solve([4, 5, 6, 7, 0, 1, 2], 0) == 4
    assert solve([4, 5, 6, 7, 0, 1, 2], 3) == -1
    assert solve([4, 5, 6, 7, 0, 1, 2], 4) == 0   # First element.
    assert solve([4, 5, 6, 7, 0, 1, 2], 2) == 6   # Last element.
    assert solve([], 1) == -1                     # Empty list.
    assert solve([1], 1) == 0                     # One element, found.
    assert solve([1], 0) == -1                    # One element, missing.
    assert solve([3, 1], 1) == 1                  # Two elements, rotated.
    assert solve([1, 2, 3, 4, 5], 4) == 3         # Not rotated at all.
    assert solve([5, 1, 3], 5) == 0
    assert solve([5, 1, 3], 3) == 2
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple solution</summary>

```python
def solve(nums, target):
    for i, value in enumerate(nums):
        if value == target:
            return i
    return -1
```

</details>

The linear scan is always correct, rotated or not, but it checks up to all
`n` values: O(n) time and O(1) extra space. A middle-ground alternative is two
passes: binary-search for the rotation point (the smallest value), then run
ordinary binary search on the correct sorted part. That is also O(log n) but
has more code and more boundaries to get wrong.

#### Optimized code — reveal after attempting

<details>
<summary>Show the rotated binary search solution</summary>

```python
def solve(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        if nums[left] <= nums[mid]:  # left half is sorted
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:  # right half is sorted
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1
```

</details>

Only the **sorted** half can be checked reliably with two comparisons. If the
target is inside it, search there; otherwise the target can only be in the
other half. Each step still discards half the interval: O(log n) time and O(1)
extra space.

Trace `solve([4, 5, 6, 7, 0, 1, 2], 0)`:

| Step | left | right | mid | nums[mid] | Sorted half | Target inside it? | Action |
|---:|---:|---:|---:|---:|---|---|---|
| 1 | 0 | 6 | 3 | 7 | Left (`4 <= 7`): `[4, 5, 6, 7]` | `4 <= 0 < 7`? No | `left = 4` |
| 2 | 4 | 6 | 5 | 1 | Left (`0 <= 1`): `[0, 1]` | `0 <= 0 < 1`? Yes | `right = 4` |
| 3 | 4 | 4 | 4 | 0 | — | — | Equal; return `4` |

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “I scan every index and return the first one whose
value equals the target, or -1 at the end. It is O(n) time and O(1) space. It
is correct but ignores the fact that each part of the list is sorted.”

**Example:** For `[4, 5, 6, 7, 0, 1, 2]` and target `0`, the scan checks five
values before returning `4`.

**Follow-up:** Why mention it if it is slow? It gives a correct baseline to
test the optimized version against, for example on many random rotations.

##### DSA Q2. What is the core idea of the O(log n) solution?

**Interview-ready answer:** “When I split a rotated sorted list at `mid`, at
least one half is sorted, because the single rotation break can be in only one
half. I identify the sorted half by comparing its endpoints. If the target is
within that half's range I search there; otherwise I search the other half.”

**Example:** At `mid = 3` in `[4, 5, 6, 7, 0, 1, 2]`, the left half
`[4, 5, 6, 7]` is sorted. Target `0` is not between `4` and `7`, so it must be
in the right half.

**Follow-up:** The sorted half gives a *range test*; the unsorted half does
not. That is why the decision always starts from the sorted side.

##### DSA Q3. Why is the check `nums[left] <= nums[mid]` with `<=`, not `<`?

**Interview-ready answer:** “When `left == mid`, the left half has one element
and is trivially sorted. With `<`, I would wrongly treat the right half as
sorted and could discard the target.”

**Example:** `solve([3, 1], 1)`: `left = 0`, `mid = 0`. With `<=`, the left
half `[3]` is sorted; `3 <= 1 < 3` is false, so `left = 1`, and index `1` is
found. With `<`, the code would test `3 < 1 <= 1`, which is false, set
`right = -1`, and wrongly return `-1`.

**Follow-up:** The strict comparisons in `target < nums[mid]` and
`nums[mid] < target` are correct because `nums[mid] == target` was already
handled.

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “Each iteration discards about half of the
interval, so it is O(log n) time. It stores a few indices, so O(1) extra
space.”

**Example:** A rotated list of one million distinct values needs about 20
iterations.

**Follow-up:** The O(log n) bound depends on **distinct** values. With
duplicates, `nums[left] == nums[mid] == nums[right]` hides which half is
sorted, and the worst case becomes O(n).

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “An empty list, one element, two elements, a list
that was not rotated at all, the target at the first and last index, the
target on each side of the rotation point, and a missing target.”

**Example:** `solve([1, 2, 3, 4, 5], 4)` returns `3` because an unrotated list
always takes the “left half sorted” branch correctly; `solve([], 1)` returns
`-1` because `right` starts at `-1`.

**Follow-up:** Also test every rotation of a small list against the brute-force
version. That catches off-by-one boundary bugs quickly.

##### DSA Q6. What changes if duplicates are allowed?

**Interview-ready answer:** “If `nums[left]`, `nums[mid]`, and `nums[right]`
are all equal, I cannot tell which half is sorted. I shrink both ends by one,
`left += 1` and `right -= 1`, and continue. Otherwise I use the same logic.”

**Example:** In `[1, 1, 1, 3, 1]`, the endpoints and middle are all `1`, so
the first step cannot decide which side contains `3`.

**Follow-up:** That makes the worst case O(n), for example a list of all `1`s
except one value. A related variant is finding the minimum of a rotated list:
compare `nums[mid]` with `nums[right]` to decide which side holds the break.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

The UI may hide actions a user cannot take, but that only improves usability. Every request must still be authorized on the server.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.
The browser is fully controlled by the user: they can open DevTools, edit HTML,
or call `fetch` directly.

#### How

After Prep Day 11, `TaskBoard` shows only your own tasks, so there is no
complete or delete button for another user's task. That is good usability, but
it is not protection. Task IDs are sequential numbers (`41`, `42`, ...), so
anyone signed in can try another ID. In the browser DevTools console on
`http://localhost:3000`, while signed in, this sends a real request with your
session cookie:

```js
await fetch('/api/tasks/42', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Changed from the console' }),
}).then(response => response.status);
```

No React component was involved, so no hidden button or disabled state can
stop it. Only the Route Handler and its SQL can. Today you will use exactly
this request to prove the fix: after the change, it must return `404` for a
task you do not own.

`TaskBoard` itself does not change today. It already sends
`PATCH /api/tasks/${taskId}` and `DELETE /api/tasks/${taskId}` with only the
task ID and the requested change, never an owner ID; the server derives the
owner from the session.

Files to open deliberately:

- `frontend/lib/tasks.ts` (every query must include `owner_id`)
- `frontend/app/api/tasks/route.ts` (already scoped on Prep Day 11)
- `frontend/app/api/tasks/[id]/route.ts` (today's change)

Answer before coding:

- Which value is persistent (the task row and its `owner_id`), and which value
  is temporary interaction state (`busy`, `error`, `editingId`)?
- What starts this behavior? (A click, or any HTTP request to `/api/tasks/[id]`.)
- What should the user see while work is pending? (Disabled controls from the
  existing `busy` state.)
- What should remain unchanged when the operation fails? (The other user's row,
  every column of it.)

### 5. Backend guided study (1 hour 30 minutes)

#### What

Include owner ID in the same SELECT, UPDATE, or DELETE predicate as the task ID. Fetching by ID and checking later creates avoidable race and omission risks.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

#### IDOR in one sentence

**Insecure direct object reference (IDOR)** happens when the server checks
*who you are* but not *whether this object is yours*, so changing an ID in a
URL reaches someone else's data. The current item route is vulnerable:

```sql
-- Current Prep Day 11 query: any signed-in user can update task 42.
UPDATE tasks SET title = $1 WHERE id = $2 RETURNING id, title, done, created_at;
```

#### Fetch-then-check versus a single scoped statement

This version looks reasonable, but has two weaknesses:

```ts
// Avoid: two steps, and the check is easy to forget on another route.
const task = await getTaskById(id);            // SELECT ... WHERE id = $1
if (task.ownerId !== session.user.id) return 404;
await renameTaskById(id, title);               // UPDATE ... WHERE id = $1
```

1. **Omission risk:** every route must remember the separate `if`. One missed
   route is a vulnerability.
2. **Race risk:** the row can change between the `SELECT` and the `UPDATE`.

Put the rule inside the one statement that selects the row:

```sql
UPDATE tasks
SET title = $1
WHERE id = $2 AND owner_id = $3
RETURNING id, title, done, created_at;
```

PostgreSQL returns the updated row only if it exists **and** belongs to the
owner. Zero rows means “not found for you”. The route returns `404` in both
cases (missing or someone else's), so an attacker cannot learn which IDs
exist. The `(owner_id, id)` index added on Prep Day 11 serves this lookup.

### 6. MiniTrack implementation (1 hour)

#### Step 1: Scope every data function

Replace `frontend/lib/tasks.ts` with this complete version. It keeps the Prep
Day 11 owner-scoped reads and `createTask`, and adds `ownerId` as the first
required argument of every mutation:

```ts
import type { Task } from '../app/types';
import { getPool } from './db';
import type { TaskFilters } from './validation';

type TaskRow = Omit<Task, 'created_at'> & { created_at: Date };

function toTask(row: TaskRow): Task {
  return { ...row, created_at: row.created_at.toISOString() };
}

function escapeLike(value: string): string {
  // Escape the escape character first, then PostgreSQL wildcard characters.
  return value.replace(/[\\%_]/g, '\\$&');
}

export async function listTasks(ownerId: string): Promise<Task[]> {
  const result = await getPool().query<TaskRow>(
    'SELECT id, title, done, created_at FROM tasks WHERE owner_id = $1 ORDER BY id',
    [ownerId],
  );
  return result.rows.map(toTask);
}

export async function searchTasks(
  ownerId: string,
  filters: TaskFilters,
): Promise<Task[]> {
  const pattern = `%${escapeLike(filters.query)}%`;

  const result = await getPool().query<TaskRow>(
    `
      SELECT id, title, done, created_at
      FROM tasks
      WHERE owner_id = $1
        AND title ILIKE $2 ESCAPE '\\'
        AND (
          $3::text = 'all'
          OR done = ($3::text = 'done')
        )
      ORDER BY id
    `,
    [ownerId, pattern, filters.status],
  );

  return result.rows.map(toTask);
}

export async function createTask(
  ownerId: string,
  title: string,
): Promise<Task> {
  const result = await getPool().query<TaskRow>(
    `
      INSERT INTO tasks (owner_id, title)
      VALUES ($1, $2)
      RETURNING id, title, done, created_at
    `,
    [ownerId, title],
  );

  const row = result.rows[0];
  if (!row) throw new Error('Inserted task was not returned by PostgreSQL');
  return toTask(row);
}

export async function setDone(
  ownerId: string,
  id: string,
  done: boolean,
): Promise<Task | null> {
  const result = await getPool().query<TaskRow>(
    `
      UPDATE tasks
      SET done = $1
      WHERE id = $2 AND owner_id = $3
      RETURNING id, title, done, created_at
    `,
    [done, id, ownerId],
  );

  const row = result.rows[0];
  return row ? toTask(row) : null;
}

export async function renameTask(
  ownerId: string,
  id: string,
  title: string,
): Promise<Task | null> {
  const result = await getPool().query<TaskRow>(
    `
      UPDATE tasks
      SET title = $1
      WHERE id = $2 AND owner_id = $3
      RETURNING id, title, done, created_at
    `,
    [title, id, ownerId],
  );

  const row = result.rows[0];
  // No row means "missing or not yours"; the route reports both as 404.
  return row ? toTask(row) : null;
}

export async function deleteTask(ownerId: string, id: string): Promise<boolean> {
  const result = await getPool().query(
    'DELETE FROM tasks WHERE id = $1 AND owner_id = $2 RETURNING id',
    [id, ownerId],
  );
  return result.rowCount !== null && result.rowCount > 0;
}
```

Every function now has `ownerId` first. A caller that forgets it gets a
TypeScript error instead of a silent security hole.

#### Step 2: Use the session owner in the item Route Handler

Replace `frontend/app/api/tasks/[id]/route.ts`. It keeps Prep Day 10's `401`
check and Prep Day 03's “exactly one of `done` or `title`” contract:

```ts
import { auth } from '@/auth';
import type { Task } from '../../../types';
import { deleteTask, renameTask, setDone } from '../../../../lib/tasks';
import { isRecord, isValidId, normalizeTitle } from '../../../../lib/validation';

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: RouteContext): Promise<Response> {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
  // Only the verified session decides the owner.
  const ownerId = session.user.id;

  const { id } = await params;
  if (!isValidId(id)) {
    return Response.json({ error: 'Invalid task ID' }, { status: 400 });
  }

  let parsingBody = true;
  try {
    const body: unknown = await request.json();
    parsingBody = false;
    if (!isRecord(body)) {
      return Response.json({ error: 'Provide either done or title' }, { status: 400 });
    }

    const hasDone = Object.hasOwn(body, 'done');
    const hasTitle = Object.hasOwn(body, 'title');
    if (hasDone === hasTitle) {
      return Response.json({ error: 'Provide either done or title' }, { status: 400 });
    }

    let updateTask: () => Promise<Task | null>;
    if (hasTitle) {
      const title = normalizeTitle(body.title);
      if (!title) {
        return Response.json({ error: 'title must be 1–200 characters' }, { status: 400 });
      }
      updateTask = () => renameTask(ownerId, id, title);
    } else if (typeof body.done === 'boolean') {
      const done = body.done;
      updateTask = () => setDone(ownerId, id, done);
    } else {
      return Response.json({ error: 'done must be boolean' }, { status: 400 });
    }
    const task = await updateTask();
    // null means missing OR owned by someone else; both are 404 on purpose.
    return task
      ? Response.json(task)
      : Response.json({ error: 'Task not found' }, { status: 404 });
  } catch (error: unknown) {
    if (parsingBody) {
      return Response.json({ error: 'Invalid JSON' }, { status: 400 });
    }
    console.error(`PATCH /api/tasks/${id} failed:`, error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: RouteContext): Promise<Response> {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  if (!isValidId(id)) {
    return Response.json({ error: 'Invalid task ID' }, { status: 400 });
  }

  try {
    const deleted = await deleteTask(session.user.id, id);
    return deleted
      ? Response.json({ deleted: true })
      : Response.json({ error: 'Task not found' }, { status: 404 });
  } catch (error: unknown) {
    console.error(`DELETE /api/tasks/${id} failed:`, error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

`const ownerId = session.user.id` copies the value into a `const` so the
`updateTask` closures keep a definitely-string value. The collection route
`frontend/app/api/tasks/route.ts` from Prep Day 11 is already scoped and stays
unchanged.

#### Step 3: Type-check and run

From `frontend/`:

```bash
npx tsc --noEmit
npm run lint
npm run dev
```

**Expected observation:** no type errors. If `tsc` reports
`Expected 3 arguments, but got 2` (or similar), a caller still uses an old
signature; pass the session owner rather than loosening the type.

#### Step 4: Prove cross-user isolation by hand

You need a task owned by somebody else. Create a second user and task directly
in PostgreSQL (a fake email, not a real account):

```bash
psql -d minitrack -c "INSERT INTO users (name, email) VALUES ('Other user', 'other@example.test') RETURNING id;"
psql -d minitrack -c "INSERT INTO tasks (owner_id, title) SELECT id, 'Other user private task' FROM users WHERE email = 'other@example.test' RETURNING id;"
```

Note the returned task ID; this example uses `42`. Signed in as yourself in the
browser, open `http://localhost:3000` and confirm the other task is not listed.
Then run in the DevTools console:

```js
await fetch('/api/tasks/42', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Stolen' }),
}).then(response => response.status);  // 404

await fetch('/api/tasks/42', { method: 'DELETE' })
  .then(response => response.status);  // 404
```

Then confirm the row is unchanged:

```bash
psql -d minitrack -c "SELECT id, owner_id, title, done FROM tasks WHERE id = 42;"
```

**Expected observation:** both requests return `404`, and the row still has
the title `Other user private task`. Your own tasks can still be completed,
renamed, and deleted from the UI. Anonymous
`curl -i -X DELETE http://localhost:3000/api/tasks/42` still returns `401`.

**Failure checks:**

- A cross-user request returns `200`: one SQL statement is missing
  `AND owner_id = $n`. Search `frontend/lib/tasks.ts` for `WHERE id` and check
  each match.
- Your own toggle returns `404`: the argument order is wrong, for example
  `setDone(id, ownerId, done)`. The parameter array must match `$1`, `$2`, `$3`.
- `401` in the browser: your session expired or was created before Prep Day
  11's adapter change. Sign out and sign in again.

Remove the fake user when finished (its task is removed by `ON DELETE CASCADE`):

```bash
psql -d minitrack -c "DELETE FROM users WHERE email = 'other@example.test';"
```

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant B as User 7 browser console
  participant R as PATCH /api/tasks/[id] route.ts
  participant A as Auth.js auth()
  participant D as lib/tasks.ts renameTask
  participant P as PostgreSQL
  B->>R: PATCH /api/tasks/42 {"title":"Stolen"}
  R->>A: auth()
  A-->>R: session.user.id = "7"
  R->>R: isValidId("42"); normalizeTitle("Stolen")
  R->>D: renameTask("7", "42", "Stolen")
  D->>P: UPDATE ... WHERE id = $2 AND owner_id = $3 ["Stolen", "42", "7"]
  P-->>D: zero rows (task 42 belongs to user 8)
  D-->>R: null
  R-->>B: 404 {"error":"Task not found"}
```

Trace one concrete input. Name every boundary, value, and possible failure.
Repeat the trace for your own task: the same `UPDATE` returns one row and the
route returns `200`.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Update a task using only WHERE id = $1.

In `renameTask`, temporarily change the predicate to `WHERE id = $2` and the
parameter array to `[title, id]`. Recreate the fake user and task from Step 4
and run the console `PATCH` again.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** Any authenticated user who learns another task ID can mutate it.
The console request returns `200`, and `psql` shows the other user's title is
now `Stolen`.

**Root cause:** Authentication was mistaken for resource authorization.

**Restore and verify:** Bind both task ID and verified owner ID in the mutation predicate.
Restore `WHERE id = $2 AND owner_id = $3` with `[title, id, ownerId]`, reset
the title in `psql`, rerun the request, and confirm `404` plus an unchanged
row.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant: a mutation can touch a row only if the row's owner is
the verified session user.

### 9. Interview questions and answers (30 minutes)

#### Q1. What is treating hidden UI as convenience only?

**Interview-ready answer:** The UI may hide actions a user cannot take, but that only improves usability. Every request must still be authorized on the server.

**Example:** `TaskBoard` never renders a button for task `42` because the page
only receives owned tasks, yet `fetch('/api/tasks/42', { method: 'PATCH', ...
})` from the console still reaches the Route Handler. Only
`WHERE id = $2 AND owner_id = $3` in `renameTask` turns it into a `404`.

**Senior follow-up:** Hiding controls is still worth doing for clarity, but
the UI and server rules can drift. When permissions become richer (shared
projects, roles), compute them on the server and send the allowed actions as
data, while the server re-checks every request.

#### Q2. How should the backend handle owner-scoped SQL and IDOR prevention?

**Interview-ready answer:** Include owner ID in the same SELECT, UPDATE, or DELETE predicate as the task ID. Fetching by ID and checking later creates avoidable race and omission risks.

**Example:** `PATCH /api/tasks/42` calls `auth()`, gets
`session.user.id = "7"`, and calls `renameTask("7", "42", title)`, which runs
`UPDATE tasks SET title = $1 WHERE id = $2 AND owner_id = $3`. Zero rows
becomes `404 Task not found`.

**Senior follow-up:** Return the same `404` for missing and not-owned rows so
IDs cannot be enumerated. Log the internal error for `500`s but never log
session cookies or tokens. PostgreSQL Row-Level Security can add defense in
depth, and opaque IDs make guessing harder, but neither replaces the scoped
predicate.

#### Q3. What invariant makes the binary search in rotated data solution correct?

**Interview-ready answer:** At least one side is sorted; use bounds to decide whether the target lies inside that sorted half.

**Example:** `solve([4, 5, 6, 7, 0, 1, 2], 0)`: at `mid = 3`, the left half
`[4..7]` is sorted and excludes `0`, so `left = 4`; at `mid = 5`, the left half
`[0, 1]` is sorted and includes `0`, so `right = 4`; at `mid = 4`, return `4`.

**Senior follow-up:** O(log n) assumes distinct values. With duplicates,
`nums[left] == nums[mid] == nums[right]` hides the sorted side, and shrinking
both ends makes the worst case O(n).

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** Authorization is enforced where the database operation selects the row, closing the direct-object-reference gap.

**Example:** Every function in `frontend/lib/tasks.ts` now takes `ownerId`
first, and both Route Handler files pass `session.user.id`. Reads, creates,
completion, renaming, and deletion all touch only the signed-in user's rows.

**Senior follow-up:** The first thing to measure is query latency per owner
(`EXPLAIN ANALYZE` on the scoped `UPDATE` should use `tasks_owner_id_id_idx`).
The remaining risk is regression: a new route that forgets the owner. Prep Day
13 adds automated cross-user tests to catch that.

### 10. Complexity and operational cost

- **DSA:** O(log n) time and O(1) space.
- **Application:** Use an index that matches measured owner-scoped query patterns. Extra indexes improve some reads but increase write and storage cost.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 12 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 12: enforce owner authorization in sql`

<a id="prep-day-13"></a>

## Prep Day 13 — Prove authorization with negative tests

**Date:** Wednesday, December 9, 2026
**Time:** 7 study hours plus breaks
**Starting point:** Prep Day 12 is complete: every function in `frontend/lib/tasks.ts` takes `ownerId` first, and every task Route Handler returns `401` without a session and `404` for a task the user does not own. Prep Days 07–08's unit and integration test setup (`node:test`, `tsx`, `minitrack_test`) exists.
**Goal:** Prove authorization with negative tests.

[Prep Day 12](../lessons/interview-prep/prep-day-12.md) · [Track home](../lessons/interview-prep/README.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Prep Day 14](../lessons/interview-prep/prep-day-14.md)

**Everything to read today is below.** The original [App Day 12](../lessons/day-12.md)
and [DSA Day 13](../dsa-python/lessons/dsa-day-13.md) remain available for
comparison. This prep day turns owner isolation into automated tests (data
layer and Route Handlers), adds a test-only session seam without any
production bypass, and gives the UI clear `401` and `404` messages. The owner
column and scoped SQL belong to Prep Days 11–12; keyboard, focus, and ARIA work
belongs to Prep Day 14. Write runnable code in the named project and practice
files, not in this Markdown file.

### Learning objectives

- explain clear unauthorized and missing behavior in beginner-friendly language;
- explain anonymous, owner, and cross-owner test matrices and its failure boundary;
- implement or verify the listed MiniTrack milestone;
- solve DSA Day 13 using the linked-list pointer reversal pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before reading further, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **linked-list pointer reversal** pattern?

Use this format:

```md
## Wednesday, December 9, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Clear unauthorized and missing behavior:** The interface should not expose another user's data and should respond safely when a resource disappears. Exact status details may be intentionally limited to avoid leaking existence.

**Backend focus — Anonymous, owner, and cross-owner test matrices:** Test each operation as anonymous, owner, and other user. For forbidden mutations, verify both the response and that the database row remained unchanged.

**Today's connection:** Negative tests turn owner isolation from an assumption into repeatable evidence.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 13: linked-list pointer reversal"]
  DSA --> FE["Frontend: Clear unauthorized and missing behavior"]
  FE --> BE["Backend: Anonymous, owner, and cross-owner test matrices"]
  BE --> App["MiniTrack: Prove authorization with negative tests"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-13.py`](../dsa-python/practice/day-13.py)
**Pattern:** linked-list pointer reversal

#### Problem: Reverse Linked List

A **singly linked list** is a chain of nodes. Each node stores a value `val`
and a reference `next` to the following node; the last node's `next` is
`None`. You receive only the first node, the `head`. Reverse the list and
return the new head. An empty list is `None`.

```text
Input:  1 -> 2 -> 3 -> None
Output: 3 -> 2 -> 1 -> None
```

```python
solve(build([1, 2, 3]))  # head of 3 -> 2 -> 1, so to_list(...) == [3, 2, 1]
solve(None)               # None
```

(`build` and `to_list` are small helpers defined below.) Unlike a Python list,
you cannot jump to index `i`; you can only follow `next` one node at a time.

#### Start coding

The practice file already defines the node class. Replace the
`raise NotImplementedError` line with your own implementation:

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

def solve(head):
    # Return the head of the reversed list.
    raise NotImplementedError
```

`ListNode(1, ListNode(2))` creates a node with value `1` whose `next` is a
node with value `2`. `self.val, self.next = val, next` assigns both attributes
in one line. `while current:` keeps looping while `current` is a node and
stops when it becomes `None`.

The idea: walk the list once and turn each arrow around. You need three
references: `previous` (the already-reversed part), `current` (the node being
changed), and `following` (the rest of the list, saved before its only link is
overwritten).

```mermaid
flowchart TD
  Start["previous = None, current = head"] --> Loop{"current is not None?"}
  Loop -- No --> Done["Return previous (new head)"]
  Loop -- Yes --> Save["following = current.next"]
  Save --> Flip["current.next = previous"]
  Flip --> Prev["previous = current"]
  Prev --> Next["current = following"]
  Next --> Loop
```

#### Invariant to say aloud

Before changing current.next, save the next node; then reverse the pointer and advance both references.

At the top of every loop iteration, `previous` is the head of a correctly
reversed list of all nodes already visited, and `current` is the head of the
untouched remainder.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 13
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** the checker prints `This problem uses
linked-list/tree structures; write your own object-based tests.` and does
**not** test your code, because it has no list samples for linked lists. The
reference suite reverses `1 -> 2 -> 3` and expects `[3, 2, 1]`. Your real
check is the assert block below.

Temporarily add these helpers and checks below your `solve` function, then run
`python3 dsa-python/practice/day-13.py`. `build` turns a Python list into
linked nodes (it builds from the back so each new node can point at the
previous head); `to_list` walks the nodes and collects the values:

```python
def build(values):
    head = None
    for value in reversed(values):
        head = ListNode(value, head)
    return head

def to_list(head):
    values = []
    while head:
        values.append(head.val)
        head = head.next
    return values

if __name__ == '__main__':
    assert to_list(solve(build([1, 2, 3]))) == [3, 2, 1]
    assert solve(None) is None                          # Empty list.
    assert to_list(solve(build([7]))) == [7]            # One node.
    assert to_list(solve(build([1, 2]))) == [2, 1]      # Two nodes.
    assert to_list(solve(build([1, 1, 2]))) == [2, 1, 1]  # Duplicates.
    original_head = build([1, 2, 3])
    new_head = solve(original_head)
    assert original_head.next is None   # Old head is now the tail.
    assert new_head.val == 3
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple solution</summary>

```python
def solve(head):
    nodes = []
    while head:
        nodes.append(head)
        head = head.next
    # Relink from the back: each node points at the one before it.
    for i in range(len(nodes) - 1, 0, -1):
        nodes[i].next = nodes[i - 1]
    if nodes:
        nodes[0].next = None
        return nodes[-1]
    return None
```

</details>

There is no slow brute force here; the simpler alternative stores every node
in a Python list so it can use indices, then relinks them. It is O(n) time but
uses O(n) extra space. Creating brand-new reversed nodes from the values is
also simple but uses O(n) extra memory and returns copies instead of reversing
the original nodes.

#### Optimized code — reveal after attempting

<details>
<summary>Show the in-place reversal solution</summary>

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solve(head):
    previous = None
    current = head
    while current:
        following = current.next  # save rest before changing link
        current.next = previous
        previous = current
        current = following
    return previous
```

</details>

Each node's `next` is changed exactly once. Time is O(n); extra space is O(1)
because only three references are stored, whatever the list length.

Trace `1 -> 2 -> 3`:

| Step | previous before | current | following saved | Link changed | Reversed part after |
|---:|---|---:|---:|---|---|
| 1 | `None` | 1 | 2 | `1.next = None` | `1` |
| 2 | 1 | 2 | 3 | `2.next = 1` | `2 -> 1` |
| 3 | 2 | 3 | `None` | `3.next = 2` | `3 -> 2 -> 1` |
| End | 3 | `None` | — | — | return node `3` |

#### DSA interview questions and answers

##### DSA Q1. What is the simple approach before optimizing?

**Interview-ready answer:** “I walk the list once and put every node into a
Python list. Then I relink them from the back so each node points to the
previous one, set the old head's `next` to `None`, and return the last node.
That is O(n) time and O(n) extra space.”

**Example:** For `1 -> 2 -> 3`, the array is `[n1, n2, n3]`; set
`n3.next = n2`, `n2.next = n1`, `n1.next = None`, and return `n3`.

**Follow-up:** Both approaches are O(n) time; the in-place version wins on
memory, which matters for very long lists or memory-constrained systems.

##### DSA Q2. What is the core idea of the in-place solution?

**Interview-ready answer:** “I keep two lists at once: a reversed list starting
at `previous` and the unvisited remainder starting at `current`. Each step I
move one node from the front of the remainder to the front of the reversed
list by pointing its `next` at `previous`.”

**Example:** After step 2 for `1 -> 2 -> 3`, `previous` is `2 -> 1` and
`current` is `3`.

**Follow-up:** This is the same as popping from one stack and pushing onto
another, but done by rewiring references instead of copying values.

##### DSA Q3. Why must `following` be saved first?

**Interview-ready answer:** “`current.next` is the only reference to the rest
of the list. If I overwrite it with `previous` first, I lose the remainder and
cannot continue. Saving it first keeps the invariant: `current` always points
to the untouched remainder.”

**Example:** At node `1` in `1 -> 2 -> 3`, writing `current.next = None`
before saving would leave nothing pointing at node `2`; the loop would stop
and return just `1`.

**Follow-up:** The loop ends when `current` is `None`. At that moment the
remainder is empty, so `previous` heads the fully reversed list, which is why
we return `previous`, not `current` or `head`.

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “O(n) time because each node is visited once and
each link is changed once. O(1) extra space because I only keep three
references.”

**Example:** A list of one million nodes still needs only `previous`,
`current`, and `following`.

**Follow-up:** A recursive version is shorter but uses O(n) call-stack space.
Python's default recursion limit is about 1,000 frames, so a long list would
raise `RecursionError`.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “An empty list returns `None`, a single node
returns itself, two nodes swap, duplicates keep their relative reversed order,
and the old head must end with `next = None` so there is no cycle.”

**Example:** `solve(None)` returns `None` because the loop never runs and
`previous` is still `None`. For `[7]`, the loop runs once and returns node `7`.

**Follow-up:** Forgetting to break the old head's link (in hand-written
relinking code) creates a two-node cycle, and any later traversal loops
forever. Prep Day 14's fast and slow pointers detect that kind of cycle.

##### DSA Q6. How would you reverse only positions `left` to `right`?

**Interview-ready answer:** “I walk to the node just before position `left`,
reverse exactly `right - left + 1` nodes with the same three-pointer loop, then
reconnect: the node before the segment points to the new segment head, and
the old segment head points to the node after the segment. A dummy node
before the head avoids a special case when `left` is 1.”

**Example:** Reversing positions 2–4 of `1 -> 2 -> 3 -> 4 -> 5` gives
`1 -> 4 -> 3 -> 2 -> 5`.

**Follow-up:** Reversing in groups of `k` repeats the same segment reversal;
the hard part is always saving and reconnecting the boundaries, still in O(n)
time and O(1) space.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

The interface should not expose another user's data and should respond safely when a resource disappears. Exact status details may be intentionally limited to avoid leaking existence.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.

Since Prep Day 12, a mutation can fail with `401` (no valid session) or `404`
(the task is missing **or** belongs to someone else). The server deliberately
does not say which `404` case happened. The UI should turn these into clear,
honest messages, without guessing or revealing more than the server said.

| Status | Meaning for the user | What the UI should do |
|---|---|---|
| `401` | Signed out or session expired | Ask the user to sign in again |
| `404` | Task no longer available | Say so, and refresh the list so the stale row disappears |
| `400` | The request was invalid | Ask the user to check the input |
| other | Unexpected server failure | Show a generic retry message |

#### How

Keep the message rules in one small, testable function instead of scattering
`if` statements across `TaskBoard`. Create `frontend/app/task-errors.ts`:

```ts
export type TaskAction = 'add' | 'update' | 'delete';

export function describeTaskError(action: TaskAction, status: number): string {
  if (status === 401) {
    return 'Your session has ended. Refresh the page and sign in again.';
  }
  if (status === 404) {
    // Do not claim "someone else owns it": the server deliberately hides that.
    return 'That task is no longer available. The list has been refreshed.';
  }
  if (status === 400) {
    return `Could not ${action} the task. Check the title and try again.`;
  }
  return `Could not ${action} the task (${status}). Please try again.`;
}
```

In `frontend/app/TaskBoard.tsx`, change only the `!response.ok` branches.
Replace each ``setError(`Could not ... task (${response.status})`)`` line with
the helper, and refresh the server data after a `404`. For example, the toggle
branch becomes:

```tsx
if (!response.ok) {
  setError(describeTaskError('update', response.status));
  if (response.status === 404) {
    // Reload PostgreSQL-backed props so the unavailable row disappears.
    router.refresh();
  }
  setBusy(false);
  return;
}
```

Use `'add'` in the add-task branch, `'update'` in the toggle and rename
branches, and `'delete'` in the delete branch. Add the import at the top of
`TaskBoard.tsx`:

```tsx
import { describeTaskError } from './task-errors';
```

The existing `role="alert"` paragraph already announces `error` to screen
readers, so no new markup is needed.

Add `frontend/test/unit/task-errors.test.ts`:

```ts
import assert from 'node:assert/strict';
import test from 'node:test';
import { describeTaskError } from '../../app/task-errors';

test('401 asks the user to sign in again', () => {
  assert.match(describeTaskError('update', 401), /sign in again/);
});

test('404 does not reveal whether another user owns the task', () => {
  const message = describeTaskError('delete', 404);
  assert.match(message, /no longer available/);
  assert.doesNotMatch(message, /another user|forbidden|owner/i);
});

test('unexpected statuses show a generic retry message', () => {
  assert.equal(
    describeTaskError('add', 500),
    'Could not add the task (500). Please try again.',
  );
});
```

Files to open deliberately:

- `frontend/app/TaskBoard.tsx` and the new `frontend/app/task-errors.ts`
- `frontend/app/api/tasks/[id]/route.ts` (where `401` and `404` come from)
- `frontend/test/` (unit and integration tests)

Answer before coding:

- Which value is persistent (task rows), and which value is temporary
  interaction state (`error`, `busy`)?
- What starts this behavior? (A toggle, rename, or delete whose response is
  not OK.)
- What should the user see while work is pending? (Disabled controls.)
- What should remain unchanged when the operation fails? (The database row and
  every other visible task.)

### 5. Backend guided study (1 hour 30 minutes)

#### What

Test each operation as anonymous, owner, and other user. For forbidden mutations, verify both the response and that the database row remained unchanged.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

#### Write the security matrix first

Authorization is a **negative** property: the system must *prevent* actions.
A passing happy-path test (“User A can rename A's task”) says nothing about
whether User A can rename User B's task. So list every actor and operation
before writing code:

```mermaid
flowchart TD
  A["Protected task operation"] --> B{"Session?"}
  B -- None --> C["401"]
  B -- Valid --> D{"Owns target?"}
  D -- Yes --> E["Success"]
  D -- No --> F["404 (not 403, to hide existence)"]
  E --> G["Verify only owned rows changed"]
  F --> G
```

| Actor | Operation | Expected |
|---|---|---|
| Anonymous | list / create / update / delete | `401`, no rows changed |
| User A | own task | success |
| User A | User B's task | `404`, User B's row unchanged |
| User A or B | list / search | only that user's rows |

#### Two rules that make these tests trustworthy

1. **Use two distinct owners.** If both fixtures belong to one user, every
   “cross-user” test is really a same-user test and passes for the wrong reason.
2. **Check the database after a rejected mutation.** A buggy route could
   update the row and *then* return `404`. Only a fresh `SELECT` proves the
   security invariant.

#### A test seam, not a bypass

Tests cannot click “Sign in with GitHub”. Never add something like
`if (process.env.TEST_MODE) return fakeUser` to production code; one
misconfigured deployment would grant access to everyone. Instead, move the
handler logic into a function that **receives** a session reader. Production
passes the real `auth()`; tests pass a small function that returns a chosen
session or `null`.

### 6. MiniTrack implementation (1 hour)

#### Step 1: Rebuild the test database with the owner migrations

The Prep Day 08 test database has no `users` table or `owner_id` column.
Recreate it from the repository root. These commands delete **only**
`minitrack_test`; double-check the name before running:

```bash
dropdb --if-exists minitrack_test
createdb minitrack_test
psql -d minitrack_test -v ON_ERROR_STOP=1 -f backend/sql/schema.sql
psql -d minitrack_test -v ON_ERROR_STOP=1 -f backend/sql/migrations/002-auth-users.sql
psql -d minitrack_test -v ON_ERROR_STOP=1 -f backend/sql/migrations/003-task-owners.sql
```

The order matters: `schema.sql` creates `tasks` with starter rows, and `003`
deletes them before adding the required `owner_id`. `frontend/.env.test.local`
must still point `DATABASE_URL` at `minitrack_test`, and
`frontend/test/helpers/test-database.ts` (`requireTestDatabase`) still refuses
any other database name.

#### Step 2: Add owner fixtures

Create `frontend/test/helpers/owners.ts`:

```ts
import type { Session } from 'next-auth';
import type { Pool } from 'pg';

export async function resetOwnedTables(pool: Pool): Promise<void> {
  // Only safe because the pool was created from requireTestDatabase().
  await pool.query(
    'TRUNCATE tasks, sessions, accounts, users RESTART IDENTITY CASCADE',
  );
}

export async function createTestUser(
  pool: Pool,
  email: string,
): Promise<string> {
  const result = await pool.query<{ id: string }>(
    `
      INSERT INTO users (email)
      VALUES ($1)
      RETURNING id::text AS id
    `,
    [email],
  );

  const row = result.rows[0];
  if (!row) throw new Error('Test user was not created');
  return row.id;
}

export function sessionFor(userId: string): Session {
  // A fake, in-memory session: no cookie, token, or GitHub account involved.
  return {
    user: { id: userId, email: `${userId}@example.test` },
    expires: new Date(Date.now() + 60_000).toISOString(),
  };
}
```

`users.id` is an `INTEGER`, which `pg` returns as a JavaScript number.
`RETURNING id::text` makes PostgreSQL return a string, matching the `string`
type used by `session.user.id` and the data functions.

#### Step 3: Update the existing integration test

Prep Day 08's `frontend/test/integration/tasks.test.ts` calls
`createTask('Before')`, which no longer compiles. Replace it:

```ts
import assert from 'node:assert/strict';
import test, { after, beforeEach } from 'node:test';
import { Pool } from 'pg';
import { getPool } from '../../lib/db';
import { createTask, renameTask } from '../../lib/tasks';
import { createTestUser, resetOwnedTables } from '../helpers/owners';
import { requireTestDatabase } from '../helpers/test-database';

const pool = new Pool({ connectionString: requireTestDatabase() });

beforeEach(async () => {
  // Isolation makes every test independent of execution order.
  await resetOwnedTables(pool);
});

after(async () => {
  await pool.end();
  await getPool().end();
});

test('renames a persisted task', async () => {
  const owner = await createTestUser(pool, 'owner@example.test');
  const created = await createTask(owner, 'Before');
  const updated = await renameTask(owner, created.id, 'After');

  assert.equal(updated?.title, 'After');

  const result = await pool.query(
    'SELECT title FROM tasks WHERE id = $1',
    [created.id],
  );
  assert.equal(result.rows[0]?.title, 'After');
});
```

`getPool().end()` closes the application's pool too, so the test process can
exit promptly.

#### Step 4: Extract testable Route Handler logic

Next.js only allows HTTP method exports (and route config) in `route.ts`
files, so put the testable functions in a sibling `handlers.ts` file. Create
`frontend/app/api/tasks/handlers.ts`:

```ts
import type { NextRequest } from 'next/server';
import type { Session } from 'next-auth';
import { auth } from '@/auth';
import { searchTasks } from '../../../lib/tasks';
import { normalizeTaskFilters } from '../../../lib/validation';

// Production uses Auth.js; tests pass a function returning a chosen session.
export type SessionReader = () => Promise<Session | null>;

export async function handleGetTasks(
  request: NextRequest,
  readSession: SessionReader = () => auth(),
): Promise<Response> {
  const session = await readSession();
  if (!session?.user?.id) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const filters = normalizeTaskFilters(
    request.nextUrl.searchParams.get('q'),
    request.nextUrl.searchParams.get('status'),
  );

  try {
    return Response.json(await searchTasks(session.user.id, filters));
  } catch (error: unknown) {
    console.error('GET /api/tasks failed:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

Replace `frontend/app/api/tasks/route.ts`. `GET` now delegates to the handler;
`POST` is unchanged from Prep Day 11:

```ts
import type { NextRequest } from 'next/server';
import { auth } from '@/auth';
import { createTask } from '../../../lib/tasks';
import { isRecord, normalizeTitle } from '../../../lib/validation';
import { handleGetTasks } from './handlers';

export async function GET(request: NextRequest): Promise<Response> {
  return handleGetTasks(request);
}

export async function POST(request: Request): Promise<Response> {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let parsingBody = true;
  try {
    const body: unknown = await request.json();
    parsingBody = false;
    const title = normalizeTitle(isRecord(body) ? body.title : undefined);
    if (!title) {
      return Response.json({ error: 'title must be 1–200 characters' }, { status: 400 });
    }
    // The owner comes from the verified session, never from the request body.
    return Response.json(await createTask(session.user.id, title), { status: 201 });
  } catch (error: unknown) {
    if (parsingBody) {
      return Response.json({ error: 'Invalid JSON' }, { status: 400 });
    }
    console.error('POST /api/tasks failed:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

Do the same for the item `PATCH`. Create
`frontend/app/api/tasks/[id]/handlers.ts`; its body is Prep Day 12's `PATCH`
logic with `auth()` replaced by `readSession()`:

```ts
import { auth } from '@/auth';
import type { Task } from '../../../types';
import { renameTask, setDone } from '../../../../lib/tasks';
import { isRecord, isValidId, normalizeTitle } from '../../../../lib/validation';
import type { SessionReader } from '../handlers';

export type RouteContext = { params: Promise<{ id: string }> };

export async function handlePatchTask(
  request: Request,
  { params }: RouteContext,
  readSession: SessionReader = () => auth(),
): Promise<Response> {
  const session = await readSession();
  if (!session?.user?.id) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const ownerId = session.user.id;

  const { id } = await params;
  if (!isValidId(id)) {
    return Response.json({ error: 'Invalid task ID' }, { status: 400 });
  }

  let parsingBody = true;
  try {
    const body: unknown = await request.json();
    parsingBody = false;
    if (!isRecord(body)) {
      return Response.json({ error: 'Provide either done or title' }, { status: 400 });
    }

    const hasDone = Object.hasOwn(body, 'done');
    const hasTitle = Object.hasOwn(body, 'title');
    if (hasDone === hasTitle) {
      return Response.json({ error: 'Provide either done or title' }, { status: 400 });
    }

    let updateTask: () => Promise<Task | null>;
    if (hasTitle) {
      const title = normalizeTitle(body.title);
      if (!title) {
        return Response.json({ error: 'title must be 1–200 characters' }, { status: 400 });
      }
      updateTask = () => renameTask(ownerId, id, title);
    } else if (typeof body.done === 'boolean') {
      const done = body.done;
      updateTask = () => setDone(ownerId, id, done);
    } else {
      return Response.json({ error: 'done must be boolean' }, { status: 400 });
    }
    const task = await updateTask();
    return task
      ? Response.json(task)
      : Response.json({ error: 'Task not found' }, { status: 404 });
  } catch (error: unknown) {
    if (parsingBody) {
      return Response.json({ error: 'Invalid JSON' }, { status: 400 });
    }
    console.error(`PATCH /api/tasks/${id} failed:`, error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

Replace `frontend/app/api/tasks/[id]/route.ts`. `PATCH` delegates; `DELETE`
is unchanged from Prep Day 12:

```ts
import { auth } from '@/auth';
import { deleteTask } from '../../../../lib/tasks';
import { isValidId } from '../../../../lib/validation';
import { handlePatchTask, type RouteContext } from './handlers';

export async function PATCH(request: Request, context: RouteContext): Promise<Response> {
  return handlePatchTask(request, context);
}

export async function DELETE(_request: Request, { params }: RouteContext): Promise<Response> {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  if (!isValidId(id)) {
    return Response.json({ error: 'Invalid task ID' }, { status: 400 });
  }

  try {
    const deleted = await deleteTask(session.user.id, id);
    return deleted
      ? Response.json({ deleted: true })
      : Response.json({ error: 'Task not found' }, { status: 404 });
  } catch (error: unknown) {
    console.error(`DELETE /api/tasks/${id} failed:`, error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

Production behavior is identical: the real routes call the handlers with the
default `() => auth()` reader.

#### Step 5: Write the authorization tests

Create `frontend/test/integration/authorization.test.ts`. It covers the data
layer directly and the Route Handlers through the session seam, and it always
re-reads the protected row with its own pool:

```ts
import assert from 'node:assert/strict';
import test, { after, beforeEach } from 'node:test';
import { NextRequest } from 'next/server';
import { Pool } from 'pg';
import { handleGetTasks } from '../../app/api/tasks/handlers';
import { handlePatchTask } from '../../app/api/tasks/[id]/handlers';
import type { Task } from '../../app/types';
import { getPool } from '../../lib/db';
import {
  createTask,
  deleteTask,
  renameTask,
  searchTasks,
  setDone,
} from '../../lib/tasks';
import type { TaskFilters } from '../../lib/validation';
import {
  createTestUser,
  resetOwnedTables,
  sessionFor,
} from '../helpers/owners';
import { requireTestDatabase } from '../helpers/test-database';

const pool = new Pool({ connectionString: requireTestDatabase() });
const allTasks: TaskFilters = { query: '', status: 'all' };

beforeEach(async () => {
  await resetOwnedTables(pool);
});

after(async () => {
  await pool.end();
  await getPool().end();
});

// Read the row independently of the code under test.
async function readRow(id: string) {
  const result = await pool.query<{ title: string; done: boolean }>(
    'SELECT title, done FROM tasks WHERE id = $1',
    [id],
  );
  return result.rows[0];
}

function patchRequest(id: string, body: unknown) {
  const request = new Request(`http://localhost/api/tasks/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return { request, context: { params: Promise.resolve({ id }) } };
}

test('data layer: users cannot read or mutate one another tasks', async () => {
  const userA = await createTestUser(pool, 'a@example.test');
  const userB = await createTestUser(pool, 'b@example.test');
  const taskA = await createTask(userA, 'A private task');
  const taskB = await createTask(userB, 'B private task');

  const visibleToA = await searchTasks(userA, allTasks);
  assert.deepEqual(visibleToA.map(task => task.id), [taskA.id]);

  assert.equal(await renameTask(userA, taskB.id, 'Stolen'), null);
  assert.equal(await setDone(userA, taskB.id, true), null);
  assert.equal(await deleteTask(userA, taskB.id), false);

  // The most important assertion: User B's row is exactly as it was.
  assert.deepEqual(await readRow(taskB.id), {
    title: 'B private task',
    done: false,
  });
});

test('GET /api/tasks: anonymous request returns 401', async () => {
  const request = new NextRequest('http://localhost/api/tasks');
  const response = await handleGetTasks(request, async () => null);

  assert.equal(response.status, 401);
});

test('GET /api/tasks: each user sees only their own rows', async () => {
  const userA = await createTestUser(pool, 'a@example.test');
  const userB = await createTestUser(pool, 'b@example.test');
  await createTask(userA, 'Shared word A');
  const taskB = await createTask(userB, 'Shared word B');

  const request = new NextRequest('http://localhost/api/tasks?q=shared');
  const response = await handleGetTasks(request, async () => sessionFor(userB));
  const tasks = (await response.json()) as Task[];

  assert.equal(response.status, 200);
  assert.deepEqual(tasks.map(task => task.id), [taskB.id]);
});

test('PATCH: anonymous request returns 401 and changes nothing', async () => {
  const owner = await createTestUser(pool, 'owner@example.test');
  const task = await createTask(owner, 'Original');
  const { request, context } = patchRequest(task.id, { title: 'Changed' });

  const response = await handlePatchTask(request, context, async () => null);

  assert.equal(response.status, 401);
  assert.equal((await readRow(task.id))?.title, 'Original');
});

test('PATCH: cross-user request returns 404 and changes nothing', async () => {
  const userA = await createTestUser(pool, 'a@example.test');
  const userB = await createTestUser(pool, 'b@example.test');
  const taskB = await createTask(userB, 'B private task');
  const { request, context } = patchRequest(taskB.id, { done: true });

  const response = await handlePatchTask(
    request,
    context,
    async () => sessionFor(userA),
  );

  assert.equal(response.status, 404);
  assert.deepEqual(await readRow(taskB.id), {
    title: 'B private task',
    done: false,
  });
});

test('PATCH: the owner can update their own task', async () => {
  const owner = await createTestUser(pool, 'owner@example.test');
  const task = await createTask(owner, 'Mine');
  const { request, context } = patchRequest(task.id, { done: true });

  const response = await handlePatchTask(
    request,
    context,
    async () => sessionFor(owner),
  );

  assert.equal(response.status, 200);
  assert.equal((await readRow(task.id))?.done, true);
});
```

#### Step 6: Run the tests one file at a time

Both integration files `TRUNCATE` the same test database. Node's test runner
runs files in parallel by default, which would let one file wipe the other's
fixtures mid-test. In `frontend/package.json`, add `--test-concurrency=1` to
the integration script (keep your other scripts):

```json
{
  "scripts": {
    "test:integration": "dotenv -e .env.test.local -- tsx --test --test-concurrency=1 test/integration/*.test.ts"
  }
}
```

Then, from `frontend/`:

```bash
npx tsc --noEmit
npm run test:unit
npm run test:integration
```

**Expected observation:** the unit run includes the three `task-errors` tests,
and the integration run reports `renames a persisted task` plus the five
authorization tests as passing. In the browser, toggling a task that was
deleted in another tab shows `That task is no longer available...` and the
row disappears after the refresh.

Do not run the Prep Day 08 Playwright journey today: it predates sign-in and
now stops at the sign-in screen. Browser tests that need a real session are a
later topic; injected sessions do not verify the GitHub OAuth configuration,
so keep a manual sign-in smoke test.

**Failure checks:**

- `Refusing to test against /minitrack`: `DATABASE_URL` in
  `.env.test.local` points at the development database. Good, the guard worked;
  fix the file.
- `relation "users" does not exist`: Step 1 migrations were not applied to
  `minitrack_test`.
- `Cannot find module 'server-only'`: Next.js bundles its own copy, but plain
  Node needs the package. Run `npm install server-only` in `frontend/`.
- `This module cannot be imported from a Client Component module`: the
  `server-only` import in `frontend/lib/db.ts` throws outside Next.js. Add
  `--conditions=react-server` after `tsx` in the test scripts so Node resolves
  `server-only` to its empty server build.
- Random failures that disappear when run alone: integration files ran in
  parallel; check `--test-concurrency=1`.
- The test process hangs after passing: a pool is still open; check both
  `pool.end()` and `getPool().end()` in `after`.

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant T as authorization.test.ts
  participant H as handlePatchTask
  participant D as lib/tasks.ts setDone
  participant P as minitrack_test PostgreSQL
  T->>P: createTestUser A (id 1), B (id 2); createTask(B, "B private task")
  T->>H: PATCH task 1 {done: true}, readSession returns User A
  H->>H: session.user.id = "1"; isValidId("1"); body has only done
  H->>D: setDone("1", "1", true)
  D->>P: UPDATE ... WHERE id = $2 AND owner_id = $3 [true, "1", "1"]
  P-->>D: zero rows (task 1 is owned by user 2)
  D-->>H: null
  H-->>T: 404 Task not found
  T->>P: SELECT title, done FROM tasks WHERE id = 1
  P-->>T: "B private task", done = false (unchanged)
```

Trace one concrete input. Name every boundary, value, and possible failure.
Notice that the test talks to PostgreSQL twice: once through the code under
test and once directly, so a bug in the code cannot hide its own damage.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Assert only that a cross-user PATCH returns an error.

Temporarily delete the final `assert.deepEqual(await readRow(taskB.id), ...)`
from the cross-user `PATCH` test. Then simulate a route that mutates first and
reports an error afterwards:

1. In `frontend/lib/tasks.ts`, change `setDone`'s predicate to `WHERE id = $2`
   and its parameter array to `[done, id]` (the owner check is gone).
2. In `frontend/app/api/tasks/[id]/handlers.ts`, directly after
   `const task = await updateTask();`, add
   `return Response.json({ error: 'Task not found' }, { status: 404 });`.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** A bug could still modify the row before returning the error.
The weakened test still passes, even though User B's task is now `done = true`.

**Root cause:** The test checks the HTTP surface but not the security invariant.

**Restore and verify:** Read the row afterward and assert all protected values are unchanged.
Put the `readRow` assertion back and confirm the test now **fails** against the
broken code. Then restore the owner predicate and the normal `404` logic and
confirm it passes.

Also try the two other false-confidence traps from the canonical lesson: create
both fixtures with the same user (the cross-user test now tests nothing), and
temporarily log the fake session object to see what would leak if a real
session were logged.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant: a rejected request leaves every protected column of
another user's row unchanged.

### 9. Interview questions and answers (30 minutes)

#### Q1. What is clear unauthorized and missing behavior?

**Interview-ready answer:** The interface should not expose another user's data and should respond safely when a resource disappears. Exact status details may be intentionally limited to avoid leaking existence.

**Example:** `describeTaskError('update', 404)` in `frontend/app/task-errors.ts`
returns `That task is no longer available...`, and `TaskBoard` calls
`router.refresh()` so the stale row disappears. It never says “owned by another
user”, because the server deliberately returns the same `404` for missing and
not-owned tasks. A `401` asks the user to sign in again.

**Senior follow-up:** Centralising messages in one tested function keeps them
consistent as more routes appear. If product later needs “you were removed from
this project”, that is an explicit permission feature with its own API design,
not something the client should infer from status codes.

#### Q2. How should the backend handle anonymous, owner, and cross-owner test matrices?

**Interview-ready answer:** Test each operation as anonymous, owner, and other user. For forbidden mutations, verify both the response and that the database row remained unchanged.

**Example:** In `frontend/test/integration/authorization.test.ts`, the
cross-user test calls `handlePatchTask(request, context, async () =>
sessionFor(userA))` on User B's task, asserts `404`, and then runs its own
`SELECT title, done FROM tasks WHERE id = $1` to prove the row is still
`{ title: 'B private task', done: false }`.

**Senior follow-up:** The session reader is a documented seam, not an
environment-flag bypass, so production always calls Auth.js. Extend the matrix
to every surface that returns task data: list, search, exports, background
jobs, and caches. Keep secrets, cookies, and session tokens out of test logs and
CI artifacts, and keep one manual or deployed smoke test of real GitHub sign-in.

#### Q3. What invariant makes the linked-list pointer reversal solution correct?

**Interview-ready answer:** Before changing current.next, save the next node; then reverse the pointer and advance both references.

**Example:** For `1 -> 2 -> 3`: save `2`, set `1.next = None`; save `3`, set
`2.next = 1`; save `None`, set `3.next = 2`; `current` is now `None`, so
return `previous`, which is node `3` heading `3 -> 2 -> 1`.

**Senior follow-up:** The iterative version is O(n) time and O(1) space. A
recursive version uses O(n) stack and hits Python's recursion limit on long
lists. If other code holds references to the nodes, in-place reversal changes
what they see; return a copy if the original must stay intact.

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** Negative tests turn owner isolation from an assumption into repeatable evidence.

**Example:** `npm run test:integration` creates two users in `minitrack_test`,
exercises `searchTasks`, `renameTask`, `setDone`, `deleteTask`,
`handleGetTasks`, and `handlePatchTask` as anonymous, owner, and other user,
and fails if a future change drops `AND owner_id = $n` from any of them.

**Senior follow-up:** These tests are the regression net for later refactors.
Run them in CI against a freshly migrated database (`schema.sql`, `002`, `003`
in order), measure their run time as the matrix grows, and share setup helpers
such as `createTestUser` rather than copying fixtures.

### 10. Complexity and operational cost

- **DSA:** O(n) time and O(1) space.
- **Application:** The authorization matrix multiplies cases, but table-driven setup keeps the suite understandable. Real-database tests cost more and should share safe setup helpers.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 13 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 13: prove authorization with negative tests`

<a id="prep-day-14"></a>

## Prep Day 14 — Make the complete flow accessible

**Date:** Thursday, December 10, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Make the complete flow accessible.

[Prep Day 13](../lessons/interview-prep/prep-day-13.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](../lessons/interview-prep/README.md) · [Prep Day 15](../lessons/interview-prep/prep-day-15.md)

**Everything to read today is below.** The original [App Day 13](../lessons/day-13.md)
and [DSA Day 14](../dsa-python/lessons/dsa-day-14.md) remain available for
comparison. This prep day covers the accessibility half of App Day 13:
semantic page regions, labels, accessible names, error messages tied to their
fields, and deliberate keyboard focus. Mobile-first row layout and measured
memoization belong to Prep Day 15; the full quality gate and mock interview
belong to Prep Day 16. Write runnable code in the named project and practice
files, not in this Markdown file.

### Learning objectives

- explain semantic HTML and deliberate focus in beginner-friendly language;
- explain accessible validation responses and their failure boundary;
- implement or verify the listed MiniTrack milestone;
- solve DSA Day 14 using the fast and slow pointers pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **fast and slow pointers** pattern?

Use this format:

```md
## Thursday, December 10, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Semantic HTML and deliberate focus:** Native controls provide keyboard behavior, roles, and states automatically. Use ARIA to add missing meaning, not to recreate a button from a generic element.

**Backend focus — Accessible validation responses:** The server should return stable, non-secret error information that the client can associate with the affected control and announce appropriately.

**Today's connection:** Accessible behavior spans browser semantics, React state, async feedback, and predictable server errors.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 14: fast and slow pointers"]
  DSA --> FE["Frontend: Semantic HTML and deliberate focus"]
  FE --> BE["Backend: Accessible validation responses"]
  BE --> App["MiniTrack: Make the complete flow accessible"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-14.py`](../dsa-python/practice/day-14.py)
**Pattern:** fast and slow pointers

#### Problem: Linked List Cycle

You receive the first node (the **head**) of a singly linked list. Return
`True` if following `.next` links ever brings you back to a node you already
visited (a **cycle**). Return `False` if the links eventually reach `None`.

Assumptions:

- `head` may be `None` (an empty list);
- node values may repeat, so a cycle is about **the same node object**, not the
  same value;
- do not change the list while checking it.

A linked list is built from small objects. The practice file defines this
class, so you do not need to write it yourself:

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next
```

`ListNode(1)` creates one node holding `1` whose `next` is `None`.
`ListNode(1, ListNode(2))` creates `1 -> 2 -> None`. You can also connect
nodes later by assigning `node.next = other_node`.

The day checker has no built-in examples for linked lists, so use these sample
calls (the same shape the reference tests use):

```python
a = ListNode(1); b = ListNode(2); c = ListNode(3)
a.next = b; b.next = c
solve(a)     # False: 1 -> 2 -> 3 -> None
c.next = b
solve(a)     # True: 1 -> 2 -> 3 -> back to 2 -> ...
solve(None)  # False: an empty list has no cycle
```

The simple approach remembers every node it has visited: O(n) time and O(n)
extra memory. Today's pattern uses two pointers instead and needs O(1) extra
memory.

#### Start coding

In the practice file, replace the `raise NotImplementedError` line with your
own implementation. This is the starting shape:

```python
def solve(head):
    # Return True if following .next ever revisits a node; otherwise False.
    raise NotImplementedError
```

Three Python details you will need:

- `None` counts as false in a condition, so `while fast and fast.next:` keeps
  looping only while **both** `fast` and `fast.next` are real nodes. Python
  checks `fast` first and stops early if it is `None`, so `fast.next` is never
  read from `None`.
- `slow is fast` asks “are these the **same object**?” Comparing values with
  `slow.val == fast.val` would be wrong, because two different nodes can hold
  the same value.
- `fast.next.next` moves two links at once. It is safe only after checking that
  `fast.next` exists.

The idea: `slow` moves one node per step and `fast` moves two. Without a cycle,
`fast` falls off the end. With a cycle, `fast` laps around and catches `slow`.

```mermaid
flowchart TD
  Start["slow = fast = head"] --> Check{"fast and fast.next exist?"}
  Check -- No --> NoCycle["Return False"]
  Check -- Yes --> Move["slow moves 1 step, fast moves 2 steps"]
  Move --> Same{"slow is fast?"}
  Same -- Yes --> Cycle["Return True"]
  Same -- No --> Check
```

#### Invariant to say aloud

Advance one pointer twice as fast; if a cycle exists, the pointers eventually meet.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 14
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** for Day 14 the checker only loads your file and
prints `This problem uses linked-list/tree structures; write your own
object-based tests.` It does **not** test your answer, so use the assert block
below. The completed reference suite still passes (`test_linked_lists` covers
Days 13–15).

To create test lists quickly, add this helper **above** your asserts. It builds
a list from Python values and, if `pos` is not `-1`, connects the last node
back to the node at index `pos` to make a cycle:

```python
def build_with_cycle(values, pos):
    nodes = [ListNode(value) for value in values]  # one node per value
    for i in range(len(nodes) - 1):
        nodes[i].next = nodes[i + 1]               # link each node to the next
    if nodes and pos >= 0:
        nodes[-1].next = nodes[pos]                # last node points back
    return nodes[0] if nodes else None
```

`[ListNode(value) for value in values]` is a **list comprehension**: it makes a
new list containing one `ListNode` for each value. `nodes[-1]` means the last
item in the list.

Now temporarily add these checks at the bottom of the practice file, then run
`python3 dsa-python/practice/day-14.py`:

```python
if __name__ == '__main__':
    assert solve(build_with_cycle([1, 2, 3], -1)) is False
    assert solve(build_with_cycle([1, 2, 3], 1)) is True
    assert solve(None) is False                              # empty list
    assert solve(build_with_cycle([1], -1)) is False         # one node, no loop
    assert solve(build_with_cycle([1], 0)) is True           # node points to itself
    assert solve(build_with_cycle([1, 2], 0)) is True        # whole list is the cycle
    assert solve(build_with_cycle([7, 7, 7], -1)) is False   # repeated values, no cycle
    assert solve(build_with_cycle(list(range(1000)), 500)) is True
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple solution</summary>

```python
def solve(head):
    seen = set()          # node objects we have already visited
    node = head
    while node:
        if node in seen:  # same object reached twice -> cycle
            return True
        seen.add(node)
        node = node.next
    return False          # reached None, so the list ends
```

</details>

A `set` stores items and answers “is this item already inside?” quickly. A
plain `ListNode` is stored by **identity**, so two different nodes with the
same value are still different set items. This visits each node at most once:
O(n) time and O(n) extra space for the set.

#### Optimized code — reveal after attempting

<details>
<summary>Show the Linked List Cycle solution</summary>

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solve(head):
    slow = fast = head
    while fast and fast.next:   # fast needs two real links to move
        slow = slow.next        # one step
        fast = fast.next.next   # two steps
        if slow is fast:        # identity, not matching values
            return True
    return False
```

</details>

Trace `1 -> 2 -> 3 -> back to 2` (`build_with_cycle([1, 2, 3], 1)`). Call
the nodes A(1), B(2), and C(3); C's `next` is B.

| Step | `slow` after move | `fast` after move | `slow is fast`? | Action |
|---:|---|---|---|---|
| start | A(1) | A(1) | not checked | Enter loop: A and A.next exist |
| 1 | B(2) | C(3) | No | Continue: C and C.next (B) exist |
| 2 | C(3) | C(3) (C → B → C) | Yes | Return `True` |

Without the cycle (`C.next is None`), step 1 leaves `fast` at C, and
`fast.next` is `None`, so the loop stops and returns `False`. Time is O(n);
extra space is O(1) because only two variables are used.

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “I walk the list and put each node object into a
set. If I ever reach a node that is already in the set, the list has a cycle.
If I reach `None`, it does not. That is O(n) time and O(n) extra space.”

**Example:** For A(1) → B(2) → C(3) → B, the set grows to `{A, B, C}`, then the
walk reaches B again and returns `True`.

**Follow-up:** Why store nodes instead of values? Values can repeat:
`[7, 7, 7]` has no cycle, but a value set would wrongly report one on the
second `7`.

##### DSA Q2. What is the core idea of fast and slow pointers?

**Interview-ready answer:** “Two pointers start at the head. Slow moves one
node per step and fast moves two. If the list ends, fast reaches `None` first
and there is no cycle. If there is a cycle, both pointers end up inside it and
fast eventually lands on the same node as slow.”

**Example:** In `build_with_cycle([1, 2, 3], 1)`, the pointers meet at C after
two steps.

**Follow-up:** This is often called Floyd's cycle detection or the “tortoise
and hare” algorithm.

##### DSA Q3. Why must the pointers meet, and why can't fast skip over slow?

**Interview-ready answer:** “Once both pointers are inside the cycle, each
step moves fast two nodes and slow one node, so the distance from fast to slow
along the cycle shrinks by exactly one per step. A distance that shrinks by one
each time must reach zero; it cannot jump from one to minus one.”

**Example:** If fast is 3 nodes behind slow in the cycle, after one step it is
2 behind, then 1 behind, then on the same node.

**Follow-up:** Slow enters the cycle within n steps, and they meet within one
more trip around the cycle, so the total number of steps is O(n).

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “Time is O(n) because slow visits at most about n
nodes before the pointers meet or fast reaches the end. Extra space is O(1)
because I keep only two references, unlike the set version, which stores up to
n nodes.”

**Example:** For a 1,000-node list whose tail points to node 500, the set
version stores 1,000 nodes; the pointer version stores two variables.

**Follow-up:** The constant factor is slightly higher because fast does two
moves per step, but it uses no hashing and no extra memory, which matters for
very long lists.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “An empty list, one node without a cycle, one node
pointing to itself, a two-node cycle, a long list with a cycle starting in the
middle, and repeated values without a cycle. The guard must check both
`fast` and `fast.next` before moving.”

**Example:** `solve(None)` returns `False` without entering the loop;
`build_with_cycle([1], 0)` returns `True` because slow and fast both move back
to the same node.

**Follow-up:** Checking only `while fast.next:` crashes on an empty list with
`AttributeError: 'NoneType' object has no attribute 'next'`.

##### DSA Q6. How would you return the node where the cycle starts?

**Interview-ready answer:** “After slow and fast meet, I move one pointer back
to the head and then move both one step at a time. The node where they meet
again is the start of the cycle. It is still O(n) time and O(1) space.”

**Example:** For `build_with_cycle([3, 2, 0, -4], 1)`, the second phase meets
at the node with value `2`.

**Follow-up:** Why does it work? If the head is `x` steps from the cycle start
and the meeting point is `y` steps past it, the math shows that `x` steps from
the head and `x` steps from the meeting point land on the same node. The same
fast/slow idea also finds the middle of a list.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

Native controls provide keyboard behavior, roles, and states automatically. Use ARIA to add missing meaning, not to recreate a button from a generic element.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.
A person using only a keyboard, a screen reader, or browser zoom must be able
to create, edit, complete, filter, and delete a task just like a mouse user.

#### How

Learn these ideas one at a time before you change any code.

**1. Semantic HTML.** HTML elements carry meaning. `<button>` is announced as
a button, can be reached with Tab, and responds to Enter and Space with no
extra code. `<header>`, `<nav>`, and `<main>` are **landmarks**: screen-reader
users can jump straight to them. A `<div onClick>` looks the same on screen
but has none of these behaviors.

**2. Accessible name.** Every control needs a name that assistive technology
reads aloud. A `<label htmlFor="task-title">` names the input whose `id` is
`task-title`. A button's visible text is its name. If many rows each have an
“Edit” button, add `aria-label={`Edit ${task.title}`}` so each name is unique,
and keep the visible word at the start of the name.

**3. ARIA attributes.** ARIA adds meaning HTML cannot express on its own:

| Attribute | What it tells assistive technology | MiniTrack use |
|---|---|---|
| `aria-invalid={true}` | “The value in this field is not accepted.” | Title input after a rejected save |
| `aria-describedby="id"` | “Read this other element as extra description.” | Connects the input to its error text |
| `role="alert"` | “Announce this new message now.” | A failed create, edit, toggle, or delete |
| `role="status"` | “Announce this politely when the user is idle.” | Task count and “Saving…” |
| `aria-disabled={true}` | “This control is unavailable right now,” but it stays focusable. | Buttons while a request is pending |

**4. Deliberate focus.** **Focus** is the element that receives keyboard
input. A `disabled` element cannot keep focus, so disabling the button you
just pressed throws focus back to the top of the page. Today you will keep
controls focusable with `aria-disabled` and `readOnly`, move focus into the
edit input when editing starts, and return focus to the same Edit button after
Save, Cancel, or Escape.

**5. Visible focus.** The Tailwind classes
`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400`
draw a ring only when the browser decides the user is navigating by keyboard.

Files to open deliberately:

- `frontend/app/TaskBoard.tsx`
- `frontend/app/page.tsx`

Answer before coding:

- Which value is persistent, and which value is temporary interaction state?
  (Saved titles live in PostgreSQL; `editingId`, the draft title, and error
  messages are temporary React state.)
- What starts this behavior? (A key press: Tab, Enter, Space, or Escape.)
- What should the user see while work is pending? (“Saving…” in a status
  region, and controls that ignore repeat presses but keep focus.)
- What should remain unchanged when the operation fails? (The saved task, the
  typed draft, and the position of keyboard focus.)

### 5. Backend guided study (1 hour 30 minutes)

#### What

The server should return stable, non-secret error information that the client can associate with the affected control and announce appropriately.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

#### The error contract MiniTrack already has

You do not need new backend code today. Since App Days 5–11, every task Route
Handler answers with a status code and a small JSON body such as
`{ "error": "Task not found" }`. Review this existing collection `POST`
handler in `frontend/app/api/tasks/route.ts` (Day 10 added the session check;
Day 11 added the owner):

```ts
export async function POST(request: Request): Promise<Response> {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let parsingBody = true;
  try {
    const body: unknown = await request.json();
    parsingBody = false;
    const title = normalizeTitle(isRecord(body) ? body.title : undefined);
    if (!title) {
      return Response.json({ error: 'title must be 1–200 characters' }, { status: 400 });
    }
    return Response.json(await createTask(session.user.id, title), { status: 201 });
  } catch (error: unknown) {
    if (parsingBody) {
      return Response.json({ error: 'Invalid JSON' }, { status: 400 });
    }
    // Full details stay in the server log; the browser gets a generic message.
    console.error('POST /api/tasks failed:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

The item handler in `frontend/app/api/tasks/[id]/route.ts` follows the same
contract for `PATCH` and `DELETE`.

| Status | Example `error` text | Where today's UI shows it |
|---:|---|---|
| 400 | `title must be 1–200 characters` | Under the field that was submitted |
| 400 | `Invalid task ID` | Above the task list |
| 401 | `Unauthorized` | Next to the action; the user must sign in again |
| 404 | `Task not found` | Under the edit field, or above the list for toggle/delete |
| 500 | `Internal server error` | Next to the action; details stay in the server log |

Why this is accessible **and** safe:

- The text is stable and human-readable, so the client can show it as-is.
- It never contains SQL, stack traces, session cookies, or whether another
  user owns a task (`404` for both “missing” and “not yours”).
- The status code lets the client choose where to show it; the `error` text
  tells the person what happened.

The client still validates first (blank title) for fast feedback, but the
server check is the real rule because anyone can send HTTP requests directly.

### 6. MiniTrack implementation (1 hour)

**Milestone source:** Day 13 semantics, keyboard behavior, names, states, and focus

**Starting state:** After Prep Day 13, users sign in with GitHub, every task
query and mutation is scoped by `session.user.id`, and negative authorization
tests pass. `frontend/app/page.tsx` reads the URL filters (App Day 8) and the
session (App Day 10). `SearchForm.tsx`, `AuthControls.tsx`, `lib/tasks.ts`, and
`lib/validation.ts` stay unchanged today.

Goals:

1. Complete create, edit, filter, and delete using only the keyboard.
2. Verify every control has an accessible name and visible focus.
3. Associate errors with fields and announce important async failures.

#### Step 1: Audit before changing anything (15 minutes)

Run the app, put the mouse away, and try the whole journey with Tab,
Shift+Tab, Enter, Space, and Escape. Write each failure in your notebook. Use
this checklist from App Day 13:

- Can Tab reach controls in a logical order?
- Is focus visible on every control?
- Does each input have a label?
- Are errors announced and visible?
- Is completion communicated beyond color?
- Where does focus go after Save, Cancel, and Delete?

Open your browser's developer tools, choose the **Accessibility** panel (Chrome:
Elements → Accessibility; Firefox: Accessibility tab), and inspect the name and
role of the Edit and Delete buttons.

#### Step 2: Add semantic page regions to `frontend/app/page.tsx`

First try it yourself: put the site name and account controls in
`<header><nav>`, the page title and tasks in `<main>`, and keep both
request-time parts inside `Suspense`. Then compare with this complete file:

```tsx
import Link from 'next/link';
import { Suspense } from 'react';
import { auth } from '@/auth';
import AuthControls from './AuthControls';
import SearchForm from './SearchForm';
import TaskBoard from './TaskBoard';
import { searchTasks } from '../lib/tasks';
import { normalizeTaskFilters } from '../lib/validation';
import type { Task } from './types';

type PageProps = {
  searchParams: Promise<{
    q?: string;
    status?: string;
  }>;
};

// Request-time subtree: reads the session cookie, the URL, and PostgreSQL.
async function TaskContent({ searchParams }: PageProps) {
  const session = await auth();
  if (!session?.user?.id) {
    return (
      <section
        aria-labelledby="sign-in-heading"
        className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-8"
      >
        <h2 className="text-2xl font-bold" id="sign-in-heading">
          Sign in to open MiniTrack
        </h2>
        <p className="mt-2 text-slate-300">
          Use the Sign in with GitHub button at the top of the page.
        </p>
      </section>
    );
  }

  const params = await searchParams;
  const filters = normalizeTaskFilters(params.q, params.status);

  let tasks: Task[] = [];
  let loadFailed = false;
  try {
    tasks = await searchTasks(session.user.id, filters);
  } catch (error) {
    // Prep Day 14: log details on the server; show a stable, non-secret message.
    console.error('Loading tasks failed:', error);
    loadFailed = true;
  }

  if (loadFailed) {
    return (
      <p
        className="mt-8 rounded-xl border border-rose-400/30 bg-rose-400/10 p-4 text-rose-200"
        role="alert"
      >
        Could not load tasks. Check that PostgreSQL is running, then reload.
      </p>
    );
  }

  return (
    <>
      <SearchForm filters={filters} />
      <TaskBoard tasks={tasks} />
    </>
  );
}

export default function Home({ searchParams }: PageProps) {
  return (
    <>
      {/* Prep Day 14: landmarks let screen-reader users jump between regions. */}
      <header className="border-b border-slate-800">
        <nav
          aria-label="Account"
          className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4"
        >
          <Link
            className="font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
            href="/"
          >
            MiniTrack
          </Link>
          {/* AuthControls calls auth(), which reads cookies, so it needs Suspense too. */}
          <Suspense fallback={<span className="text-sm text-slate-400">Checking session…</span>}>
            <AuthControls />
          </Suspense>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6" id="main-content">
        <h1 className="text-3xl font-bold sm:text-4xl">My tasks</h1>
        <Suspense fallback={<p className="mt-8 text-slate-400" role="status">Loading tasks…</p>}>
          <TaskContent searchParams={searchParams} />
        </Suspense>
      </main>
    </>
  );
}
```

What changed and why:

- `<header>`, `<nav aria-label="Account">`, and `<main>` create landmarks. There
  is exactly one `<h1>`; `TaskBoard` adds `<h2>` headings below it.
- `Link` from `next/link` renders a real `<a href="/">` (so it is a normal,
  keyboard-focusable link) and lets Next.js navigate without a full reload.
  `npm run lint` rejects a plain `<a href="/">` for internal pages.
- `AuthControls` moved into the header. It calls `auth()`, which reads request
  cookies, so with Cache Components it must sit inside its own `Suspense`.
  Do not add `dynamic = 'force-dynamic'`.
- `searchParams` and `auth()` already make `TaskContent` request-time work, so
  it needs no `io()` call.
- The load error no longer shows the raw database message to the user; the
  details go to the server log instead.
- `frontend/app/layout.tsx` already has `<html lang="en">`; keep it so screen
  readers use the correct pronunciation.

`SearchForm.tsx` from App Day 8 already uses a real `<form method="GET">`,
labelled `<input type="search">` and `<select>`, and a native submit button,
so URL filtering is keyboard-accessible without changes.

#### Step 3: Make `frontend/app/TaskBoard.tsx` keyboard- and screen-reader-friendly

First try each change yourself, one at a time, re-testing with the keyboard
after each:

1. a visible `<label>` for the title input and a list heading;
2. separate error messages for the add form, the edit form, and row actions,
   each connected to its control;
3. readable server error text instead of only a status code;
4. controls that stay focusable while a request is pending;
5. focus into the edit input on Edit, and back to the Edit button afterwards;
6. unique names for Edit, Delete, and the checkbox, and completion text that
   is not only a color.

Then compare with this complete file. It keeps the App Day 5–7 behavior
(create, complete, edit, delete, `router.refresh()`), keeps status filtering
in the URL through `SearchForm` (App Day 8), and marks today's changes with
`Prep Day 14` comments. If your styling classes differ, keep yours and copy
only the marked behavior.

```tsx
'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import type { Task } from './types';

// Prep Day 14: one shared style so every control shows keyboard focus.
const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400';
const actionClass = `min-h-10 rounded-lg px-3 text-sm text-slate-200 hover:bg-slate-800 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 ${focusRing}`;
const errorClass = 'rounded-lg border border-rose-400/30 bg-rose-400/10 p-3 text-sm text-rose-200';

// Prep Day 14: turn the server's JSON body, such as { "error": "Task not found" },
// into text a person can read. Fall back to the status code if there is no message.
async function readErrorMessage(response: Response): Promise<string> {
  try {
    const body: unknown = await response.json();
    if (
      typeof body === 'object' &&
      body !== null &&
      'error' in body &&
      typeof body.error === 'string'
    ) {
      return body.error;
    }
  } catch {
    // The body was not JSON.
  }
  return `Request failed (${response.status})`;
}

export default function TaskBoard({ tasks }: { tasks: Task[] }) {
  const [title, setTitle] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [busy, setBusy] = useState(false);
  // Prep Day 14: each error appears next to the control it describes.
  const [titleError, setTitleError] = useState('');
  const [editError, setEditError] = useState('');
  const [listError, setListError] = useState('');
  const router = useRouter();

  const titleInputRef = useRef<HTMLInputElement>(null);
  const editInputRef = useRef<HTMLInputElement>(null);
  const listHeadingRef = useRef<HTMLHeadingElement>(null);
  // Prep Day 14: remember every Edit button so focus can return to the right one.
  const editButtons = useRef(new Map<string, HTMLButtonElement>());
  const returnFocusTo = useRef<string | null>(null);

  const openCount = tasks.filter(task => !task.done).length;

  useEffect(() => {
    if (editingId) {
      editInputRef.current?.focus();
      editInputRef.current?.select();
    } else if (returnFocusTo.current) {
      // Prep Day 14: after Save, Cancel, or Escape, focus returns to that row's Edit button.
      editButtons.current.get(returnFocusTo.current)?.focus();
      returnFocusTo.current = null;
    }
  }, [editingId]);

  // One helper for every request. showError decides where the message appears.
  async function request(
    path: string,
    options: RequestInit,
    showError: (message: string) => void,
  ): Promise<boolean> {
    setTitleError('');
    setEditError('');
    setListError('');
    setBusy(true);
    try {
      const response = await fetch(path, options);
      if (!response.ok) {
        showError(await readErrorMessage(response));
        setBusy(false);
        return false;
      }
      router.refresh(); // Re-run the Server Component to read PostgreSQL again.
      setBusy(false);
      return true;
    } catch {
      showError('Could not connect to the server.');
      setBusy(false);
      return false;
    }
  }

  async function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return; // Prep Day 14: ignore repeats instead of disabling (keeps focus).
    const cleanTitle = title.trim();
    if (!cleanTitle) {
      setTitleError('Enter a task title.');
      titleInputRef.current?.focus();
      return;
    }
    const ok = await request(
      '/api/tasks',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: cleanTitle }),
      },
      setTitleError,
    );
    if (ok) setTitle('');
    titleInputRef.current?.focus();
  }

  async function toggleTask(taskId: string, done: boolean) {
    if (busy) return;
    await request(
      `/api/tasks/${taskId}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ done }),
      },
      setListError,
    );
  }

  async function removeTask(taskId: string) {
    if (busy) return;
    const ok = await request(`/api/tasks/${taskId}`, { method: 'DELETE' }, setListError);
    // Prep Day 14: the focused row disappears, so move focus to a stable place.
    if (ok) listHeadingRef.current?.focus();
  }

  function startEditing(task: Task) {
    if (busy) return;
    setEditingId(task.id);
    setEditTitle(task.title);
    setEditError('');
  }

  function stopEditing() {
    returnFocusTo.current = editingId; // Prep Day 14: remember where to send focus.
    setEditingId(null);
    setEditTitle('');
    setEditError('');
  }

  async function saveTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!editingId || busy) return;
    const cleanTitle = editTitle.trim();
    if (!cleanTitle) {
      setEditError('Task title cannot be empty.');
      editInputRef.current?.focus();
      return;
    }
    const ok = await request(
      `/api/tasks/${editingId}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: cleanTitle }),
      },
      setEditError,
    );
    if (ok) {
      stopEditing();
    } else {
      editInputRef.current?.focus(); // Keep the user in the field they must fix.
    }
  }

  return (
    <section aria-labelledby="add-task-heading" className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-5">
      <h2 className="text-lg font-semibold" id="add-task-heading">
        Add a task
      </h2>
      <form className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-start" noValidate onSubmit={addTask}>
        <div className="flex flex-1 flex-col gap-2">
          {/* Prep Day 14: a visible label names the input for everyone. */}
          <label className="text-sm font-medium" htmlFor="task-title">
            Task title
          </label>
          <input
            aria-describedby={titleError ? 'task-title-error' : undefined}
            aria-invalid={Boolean(titleError)}
            className={`min-h-11 rounded-lg border border-slate-600 bg-slate-950 px-3 ${focusRing}`}
            id="task-title"
            maxLength={200}
            name="title"
            onChange={event => setTitle(event.target.value)}
            readOnly={busy}
            ref={titleInputRef}
            value={title}
          />
          {titleError ? (
            <p className={errorClass} id="task-title-error" role="alert">
              {titleError}
            </p>
          ) : null}
        </div>
        <button
          aria-disabled={busy}
          className={`min-h-11 rounded-lg bg-violet-500 px-5 font-bold text-white sm:mt-7 aria-disabled:opacity-50 ${focusRing}`}
          type="submit"
        >
          Add task
        </button>
      </form>

      {/* tabIndex={-1} lets code focus this heading without adding it to the Tab order. */}
      <h2 className="mt-8 text-lg font-semibold" id="task-list-heading" ref={listHeadingRef} tabIndex={-1}>
        Tasks
      </h2>

      {listError ? (
        <p className={`mt-3 ${errorClass}`} role="alert">
          {listError}
        </p>
      ) : null}

      {tasks.length === 0 ? (
        <p className="mt-3 text-slate-400">No tasks match this view.</p>
      ) : (
        <ul aria-labelledby="task-list-heading" className="mt-3 border-t border-slate-700">
          {tasks.map(task => (
            <li className="flex items-center gap-3 border-b border-slate-700 py-3" key={task.id}>
              <input
                aria-disabled={busy}
                aria-label={`Complete ${task.title}`}
                checked={task.done}
                className={`size-5 accent-violet-400 ${focusRing}`}
                onChange={event => {
                  void toggleTask(task.id, event.target.checked);
                }}
                type="checkbox"
              />

              {editingId === task.id ? (
                <form
                  className="flex min-w-0 flex-1 flex-wrap items-center gap-2"
                  noValidate
                  onKeyDown={event => {
                    // Prep Day 14: Escape cancels, as users expect from an edit box.
                    if (event.key === 'Escape' && !busy) stopEditing();
                  }}
                  onSubmit={saveTask}
                >
                  <label className="sr-only" htmlFor={`edit-${task.id}`}>
                    Edit {task.title}
                  </label>
                  <input
                    aria-describedby={editError ? `edit-${task.id}-error` : undefined}
                    aria-invalid={Boolean(editError)}
                    className={`min-h-10 min-w-0 flex-1 rounded-lg border border-violet-400 bg-slate-950 px-3 ${focusRing}`}
                    id={`edit-${task.id}`}
                    maxLength={200}
                    onChange={event => setEditTitle(event.target.value)}
                    readOnly={busy}
                    ref={editInputRef}
                    value={editTitle}
                  />
                  <button aria-disabled={busy} className={actionClass} type="submit">
                    Save
                  </button>
                  <button
                    aria-disabled={busy}
                    className={actionClass}
                    onClick={() => {
                      if (!busy) stopEditing();
                    }}
                    type="button"
                  >
                    Cancel
                  </button>
                  {editError ? (
                    <p className={`w-full ${errorClass}`} id={`edit-${task.id}-error`} role="alert">
                      {editError}
                    </p>
                  ) : null}
                </form>
              ) : (
                <>
                  <span className={`min-w-0 flex-1 break-words ${task.done ? 'text-slate-400 line-through' : ''}`}>
                    {task.title}
                    {/* Prep Day 14: completion is announced, not shown only by color. */}
                    <span className="sr-only">{task.done ? ' (completed)' : ' (open)'}</span>
                  </span>
                  <button
                    aria-disabled={busy}
                    aria-label={`Edit ${task.title}`}
                    className={actionClass}
                    onClick={() => startEditing(task)}
                    ref={node => {
                      if (node) editButtons.current.set(task.id, node);
                      else editButtons.current.delete(task.id);
                    }}
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    aria-disabled={busy}
                    aria-label={`Delete ${task.title}`}
                    className={actionClass}
                    onClick={() => {
                      void removeTask(task.id);
                    }}
                    type="button"
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Prep Day 14: a polite status region announces progress and the new count. */}
      <p className="mt-4 text-sm text-slate-400" role="status">
        {busy ? 'Saving…' : `${tasks.length} ${tasks.length === 1 ? 'task' : 'tasks'} · ${openCount} open`}
      </p>
    </section>
  );
}
```

Read the important decisions slowly:

- **`aria-disabled` plus `if (busy) return`** replaces `disabled={busy}` on
  buttons and the checkbox. The control stays focusable, looks unavailable
  (`aria-disabled:opacity-50`), and ignores repeat presses. The server is still
  the real protection against duplicates.
- **`readOnly={busy}`** stops typing during a save but, unlike `disabled`,
  lets the input keep focus.
- **Three error states** (`titleError`, `editError`, `listError`) let each
  message sit next to the control it describes. `aria-describedby` points the
  input at the error's `id`, and `aria-invalid` marks the field.
- **`readErrorMessage`** shows the server's stable text, such as
  `Task not found`, instead of only `Request failed (404)`.
- **`noValidate`** turns off the browser's own pop-up bubbles so React's
  connected error message is the single source of feedback.
- **Focus moves on purpose:** into the edit input on Edit; back to that row's
  Edit button after Save, Cancel, or Escape; to the “Tasks” heading after a
  delete removes the focused row; and back to the field after a failure.
- **The ref callback** `ref={node => ...}` runs when the button appears
  (`node` is the element) and when it disappears (`node` is `null`), keeping
  the `Map` of Edit buttons up to date.
- The Playwright test from App Day 9 still finds `getByLabel('Task title')`,
  `getByRole('button', { name: /add task/i })`, and
  `getByLabel('Complete Practice testing')`.

If your Day 5 version still has a client-side `<select>` filter inside
`TaskBoard`, remove it: since App Day 8 the status filter lives in the URL
through `SearchForm`, and two filters would disagree.

#### Step 4: Run and verify

From `frontend/`, with PostgreSQL running:

```bash
npm run lint
npx tsc --noEmit
npm run dev
```

Open `http://localhost:3000`, sign in, and complete this keyboard-only script:

1. Tab to **Task title**, type `Keyboard only`, press Enter. The task appears
   and focus stays in the title field.
2. Press Enter on an empty title. Expect `Enter a task title.` under the field,
   and a screen reader announces it.
3. Tab to **Edit Keyboard only**, press Enter. Focus moves into the edit input
   with the text selected. Press Escape: focus returns to the same Edit button.
4. Edit again, change the title, press Enter. Focus returns to the Edit button.
5. Press Space on the checkbox. The status line says `Saving…`, then the new
   count; focus stays on the checkbox.
6. Tab to the search form, choose **Done**, and press Enter. The URL changes to
   `?q=&status=done`.
7. Tab to **Delete**, press Enter. Focus moves to the **Tasks** heading.
8. Zoom to 200% and repeat step 1. Nothing should be hidden or cut off.

Failure checks:

- **Server message:** open two tabs. In tab A, start editing a task. In tab B,
  delete it. In tab A, press Enter. Expect `Task not found` under the edit
  field, `aria-invalid="true"` on the input, and focus still in the input.
- **Server validation:** in the browser console while signed in, run:

  ```js
  await fetch('/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: '   ' }),
  }).then(response => response.json());
  ```

  Expect `{ error: 'title must be 1–200 characters' }`. The same text appears
  under the title field if this request comes from the form.
- **Database down:** stop PostgreSQL and reload. Expect the alert
  `Could not load tasks. Check that PostgreSQL is running, then reload.` and no
  SQL details on the page; the details appear in the `npm run dev` terminal.

Then run the browser suite from App Day 9 if your Day 12 setup supports signed-in
tests:

```bash
npm run test:e2e
```

**Expected observation:** the user-visible milestone works, its important
failure path is explicit, and existing behavior remains intact. Automated
checks find some problems; your keyboard script proves the journey.

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant K as Keyboard user
  participant B as Browser
  participant R as TaskBoard (React)
  participant A as PATCH /api/tasks/42
  participant P as PostgreSQL
  K->>B: Tab to "Edit Buy milk" and press Enter
  B->>R: onClick → startEditing(task 42)
  R-->>B: Render edit input, effect focuses and selects it
  K->>B: Type "Buy oat milk", press Enter
  B->>R: onSubmit → saveTask()
  R-->>B: readOnly input, status "Saving…"
  R->>A: PATCH {"title":"Buy oat milk"}
  A->>A: auth(), isValidId, normalizeTitle
  A->>P: UPDATE ... WHERE id=42 AND owner_id=$owner
  alt row updated
    P-->>A: Updated row
    A-->>R: 200 task JSON
    R->>R: router.refresh(), stopEditing()
    R-->>B: Focus returns to "Edit Buy oat milk"
  else row missing or not owned
    P-->>A: zero rows
    A-->>R: 404 {"error":"Task not found"}
    R-->>B: role="alert" message under input, focus stays in input
  end
  B-->>K: Screen reader announces the result
```

Trace one concrete input. Name every boundary, value, and possible failure.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Replace a button with a div that has only an onClick handler.

For example, change the Delete `<button ... type="button">` to
`<div className={actionClass} onClick={...}>Delete</div>`.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** Keyboard activation and button semantics disappear.
Tab skips the “button”, Enter and Space do nothing, and the Accessibility panel
shows no `button` role and no `Delete Buy milk` name.

**Root cause:** A visual shape was used instead of the correct interactive element.

**Restore and verify:** Restore a native button and style it as needed. Tab
reaches it again and Enter deletes the task.

A second quick break: change `aria-disabled={busy}` back to `disabled={busy}` on
the checkbox, press Space, and watch focus jump to the top of the page.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

### 9. Interview questions and answers (30 minutes)

#### Q1. What is semantic HTML and deliberate focus?

**Interview-ready answer:** “Semantic HTML means using the element that already
means what I need—`button`, `label`, `form`, `nav`, `main`—so the browser
gives me keyboard support, roles, and states for free. Deliberate focus means I
decide where keyboard focus goes after the screen changes, instead of letting
it fall back to the top of the page.”

**Example:** In `frontend/app/TaskBoard.tsx`, Edit is a native `<button>` with
`aria-label={`Edit ${task.title}`}`. When editing starts, a `useEffect` on
`editingId` focuses the edit input; after Save, Cancel, or Escape it focuses
the same Edit button again using the `editButtons` `Map` of refs.

**Senior follow-up:** “Manual focus code grows with every new dynamic view. If
we add dialogs, menus, or comboboxes, I would use a well-tested accessible
component library or the native `<dialog>` element rather than custom focus
traps, and I would add keyboard Playwright tests to catch regressions.”

#### Q2. How should the backend handle accessible validation responses?

**Interview-ready answer:** “The Route Handler returns a specific status code
and a short, stable JSON message. The client shows that message next to the
control that caused it and announces it. The message must never include SQL,
stack traces, secrets, or whether another user owns a resource.”

**Example:** `POST /api/tasks` with `{"title":"   "}` returns `400` and
`{ "error": "title must be 1–200 characters" }`. `TaskBoard` reads it with
`readErrorMessage`, stores it in `titleError`, renders it with
`id="task-title-error"` and `role="alert"`, and the input points to it through
`aria-describedby`.

**Senior follow-up:** “For multi-field forms I would return a machine-readable
code per field, for example `{ field: 'title', code: 'too_long' }`, so the
client can localize text. Internal failures still return a generic `500` while
the server logs details with a request ID, never the session cookie.”

#### Q3. What invariant makes the fast and slow pointers solution correct?

**Interview-ready answer:** “Slow moves one node and fast moves two. If there
is no cycle, fast reaches `None`. If there is a cycle, once both are inside it
the gap between them shrinks by exactly one each step, so fast must land on
slow. I compare with `is`, not values.”

**Example:** For A(1) → B(2) → C(3) → B, after step 1 slow is B and fast is C;
after step 2 both are C, so `solve` returns `True`.

**Senior follow-up:** “It is O(n) time and O(1) space, assuming the list is not
modified while we walk it. If I also need the cycle's start, I reset one pointer
to the head and advance both one step until they meet.”

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** “Accessibility runs through every layer: the server
renders landmarks and headings, React manages focus and announces status, and
the Route Handlers return predictable errors that the UI can attach to the
right field. Keyboard users get the same create, edit, filter, and delete flow
backed by the same owner-scoped PostgreSQL queries.”

**Example:** A keyboard user presses Enter on **Edit Buy milk**, types a new
title, presses Enter, and `PATCH /api/tasks/42` runs
`UPDATE ... WHERE id = $2 AND owner_id = $3`. On success `router.refresh()`
reloads the list and focus returns to **Edit Buy oat milk**; on `404` the
message appears under the input.

**Senior follow-up:** “Before adding infrastructure I would measure user
signals: the keyboard Playwright journey in CI, an automated axe scan for
machine-detectable issues, and support tickets. Automated tools cannot prove
usability, so I would still test with a screen reader and with disabled users.”

### 10. Complexity and operational cost

- **DSA:** O(n) time and O(1) space.
- **Application:** Accessibility checks add development time but reduce duplicated custom interaction code and costly late fixes.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 14 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 14: make the complete flow accessible`

<a id="prep-day-15"></a>

## Prep Day 15 — Measure responsive rendering and memoization

**Date:** Friday, December 11, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Measure responsive rendering and memoization.

[Prep Day 14](../lessons/interview-prep/prep-day-14.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](../lessons/interview-prep/README.md) · [Prep Day 16](../lessons/interview-prep/prep-day-16.md)

**Everything to read today is below.** The original [App Day 13](../lessons/day-13.md)
and [DSA Day 15](../dsa-python/lessons/dsa-day-15.md) remain available for
comparison. This prep day covers the second half of App Day 13: mobile-first
task rows, the React Profiler, one measured memoization experiment, and
separating render time from API and SQL time. Semantic HTML, labels, and focus
were Prep Day 14; the full quality gate and mock belong to Prep Day 16.
Production deployment starts on Prep Day 17. Write runnable code in the named
project and practice files, not in this Markdown file.

### Learning objectives

- explain responsive layout and measured memoization in beginner-friendly language;
- explain separating render cost from API latency and its failure boundary;
- implement or verify the listed MiniTrack milestone;
- solve DSA Day 15 using the dummy-node list merge pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **dummy-node list merge** pattern?

Use this format:

```md
## Friday, December 11, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Responsive layout and measured memoization:** Start with the narrow layout, then add breakpoint changes where content needs them. useMemo caches a value, useCallback caches a function reference, and React.memo may skip a child render when props remain shallowly equal.

**Backend focus — Separating render cost from API latency:** A slow interaction may come from rendering, network latency, server work, or SQL. Profile the layer before optimizing it.

**Today's connection:** Performance work uses evidence across React, HTTP, server, and database layers.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 15: dummy-node list merge"]
  DSA --> FE["Frontend: Responsive layout and measured memoization"]
  FE --> BE["Backend: Separating render cost from API latency"]
  BE --> App["MiniTrack: Measure responsive rendering and memoization"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-15.py`](../dsa-python/practice/day-15.py)
**Pattern:** dummy-node list merge

#### Problem: Merge Two Sorted Lists

You receive the heads of two linked lists, `a` and `b`. Each list is already
sorted from smallest to largest. Return the head of **one** sorted list that
contains every node from both lists.

Assumptions:

- either list (or both) may be `None` (empty);
- values may repeat, inside one list or across both;
- reuse the existing nodes by changing their `.next` links; do not create a
  new node for every value;
- when two values are equal, take the node from `a` first.

The practice file already defines the node class you met on Prep Day 14:

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next
```

The day checker has no built-in examples for linked lists. These sample calls
match the reference test:

```python
a = ListNode(1, ListNode(2, ListNode(3)))  # 1 -> 2 -> 3
b = ListNode(1, ListNode(4))               # 1 -> 4
solve(a, b)                           # 1 -> 1 -> 2 -> 3 -> 4
solve(None, ListNode(1, ListNode(4)))  # 1 -> 4 (the non-empty list as is)
solve(None, None)                     # None
```

Use a fresh list in the second call: after `solve(a, b)`, the original nodes
of `a` and `b` have been relinked into the merged list.

The simple approach copies all values into a Python list, sorts it, and builds
new nodes: O((n + m) log(n + m)) time and O(n + m) extra space. Because both
inputs are already sorted, you can do better by walking them together once.

#### Start coding

In the practice file, replace the `raise NotImplementedError` line with your
own implementation. This is the starting shape:

```python
def solve(a, b):
    # Return the head of one sorted list made by relinking the nodes of a and b.
    raise NotImplementedError
```

Two ideas make the code short:

- **Dummy node.** `dummy = ListNode()` is a throwaway node placed before the
  answer. You always attach the next node to `tail.next`, so the first node
  needs no special `if`. At the end, the real head is `dummy.next`.
- **Tuple assignment.** `tail.next, a = a, a.next` first reads both
  right-hand values (`a` and `a.next`), then assigns them. It attaches the
  current `a` node to the output **and** moves `a` forward in one line.

```mermaid
flowchart TD
  Start["dummy = tail = ListNode()"] --> Both{"a and b both not None?"}
  Both -- Yes --> Compare{"a.val <= b.val?"}
  Compare -- Yes --> TakeA["tail.next = a, then a = a.next"]
  Compare -- No --> TakeB["tail.next = b, then b = b.next"]
  TakeA --> Advance["tail = tail.next"]
  TakeB --> Advance
  Advance --> Both
  Both -- No --> Rest["tail.next = whichever list is left"]
  Rest --> Return["Return dummy.next"]
```

#### Invariant to say aloud

Append the smaller current node to a stable dummy-headed output and advance only that source pointer.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 15
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** for Day 15 the checker only loads your file and
prints `This problem uses linked-list/tree structures; write your own
object-based tests.` It does **not** test your answer, so use the assert block
below. The completed reference suite still passes (`test_linked_lists` covers
Days 13–15).

Add these two helpers **above** your asserts. `build` turns a Python list into
a linked list, and `to_list` turns a linked list back into a Python list so
you can compare results with `==`:

```python
def build(values):
    head = None
    for value in reversed(values):  # build from the back: 3, then 2, then 1
        head = ListNode(value, head)
    return head

def to_list(head):
    values = []
    while head:
        values.append(head.val)
        head = head.next
    return values
```

`reversed(values)` walks a list from its last item to its first. Building from
the back lets each new node point at the list built so far.

Now temporarily add these checks at the bottom of the practice file, then run
`python3 dsa-python/practice/day-15.py`:

```python
if __name__ == '__main__':
    assert to_list(solve(build([1, 2, 3]), build([1, 4]))) == [1, 1, 2, 3, 4]
    assert to_list(solve(build([1, 2, 4]), build([1, 3, 4]))) == [1, 1, 2, 3, 4, 4]
    assert solve(None, None) is None                             # both empty
    assert to_list(solve(None, build([0]))) == [0]               # one empty
    assert to_list(solve(build([5]), None)) == [5]
    assert to_list(solve(build([-3, 10]), build([-5, 0, 20]))) == [-5, -3, 0, 10, 20]
    assert to_list(solve(build([1, 2]), build([3, 4]))) == [1, 2, 3, 4]  # no overlap
    first, second = ListNode(2), ListNode(2)
    merged = solve(first, second)
    assert merged is first and merged.next is second             # nodes reused; ties take a first
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple solution</summary>

```python
def solve(a, b):
    values = []
    for head in (a, b):              # copy every value from both lists
        while head:
            values.append(head.val)
            head = head.next
    values.sort()
    dummy = tail = ListNode()
    for value in values:             # build brand-new nodes
        tail.next = ListNode(value)
        tail = tail.next
    return dummy.next
```

</details>

This ignores the fact that the inputs are sorted. Sorting `n + m` values costs
O((n + m) log(n + m)) time, and the copied values plus new nodes cost
O(n + m) extra space. It also returns new nodes instead of reusing the
originals, so `merged is first` would be `False`.

#### Optimized code — reveal after attempting

<details>
<summary>Show the Merge Two Sorted Lists solution</summary>

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def solve(a, b):
    dummy = tail = ListNode()        # placeholder before the real head
    while a and b:
        if a.val <= b.val:           # <= keeps a's node first on ties
            tail.next, a = a, a.next
        else:
            tail.next, b = b, b.next
        tail = tail.next             # tail is always the last merged node
    tail.next = a if a else b        # attach whatever remains (already sorted)
    return dummy.next
```

</details>

Trace `a = 1 -> 2 -> 3` and `b = 1 -> 4`:

| Step | `a` points at | `b` points at | Choose | Merged list after step |
|---:|---:|---:|---|---|
| 1 | 1 | 1 | `a` (1 <= 1) | 1 |
| 2 | 2 | 1 | `b` | 1 → 1 |
| 3 | 2 | 4 | `a` | 1 → 1 → 2 |
| 4 | 3 | 4 | `a` | 1 → 1 → 2 → 3 |
| end | `None` | 4 | attach rest of `b` | 1 → 1 → 2 → 3 → 4 |

Each loop step moves exactly one node, so time is O(n + m). Extra space is
O(1): only `dummy`, `tail`, `a`, and `b`.

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “I copy every value from both lists into a Python
list, sort it, and build a new linked list. That is O((n + m) log(n + m)) time
and O(n + m) extra space, and it creates new nodes instead of reusing the
existing ones.”

**Example:** `[1, 2, 3]` and `[1, 4]` become `[1, 2, 3, 1, 4]`, sorted to
`[1, 1, 2, 3, 4]`, then turned into five new nodes.

**Follow-up:** Why mention it? It is a correct baseline, and it shows I noticed
that the sorted input is the clue for a linear solution.

##### DSA Q2. What does the dummy node do?

**Interview-ready answer:** “The dummy node is a fixed starting point before
the answer. Because `tail` starts at the dummy, I can always write
`tail.next = node`, even for the very first node. At the end I return
`dummy.next`, which skips the placeholder.”

**Example:** Without a dummy, I would need `if head is None: head = node` before
every attach, plus a special case when one input is empty.

**Follow-up:** The dummy's value (`0`) is never returned, so it does not matter
even if the lists contain `0`.

##### DSA Q3. Why is the result sorted?

**Interview-ready answer:** “At each step the two candidates are the smallest
remaining nodes in each list, because both lists are sorted. I attach the
smaller one, so every attached node is no larger than anything still waiting.
When one list runs out, the other list's remaining nodes are already sorted and
all at least as large as the last attached node, so I attach them in one step.”

**Example:** After attaching `1, 1, 2, 3`, list `a` is empty and `b` still
holds `4`; `tail.next = b` finishes the merge.

**Follow-up:** Using `<=` instead of `<` makes the merge **stable**: equal
values keep `a` before `b`, which matters when nodes carry extra data.

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “O(n + m) time, because each loop iteration
attaches one node and every node is attached at most once; the final leftover
attach is O(1). Extra space is O(1), because I only relink existing nodes.”

**Example:** Merging 1,000 and 10 nodes performs at most 10 comparisons
before list `b` is empty, then attaches the remaining `a` nodes at once.

**Follow-up:** A recursive version is shorter but uses O(n + m) call-stack
space, and Python's default recursion limit (about 1,000) can raise
`RecursionError` on long lists.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “Both lists empty, one list empty, lists of
different lengths, duplicate values across lists, negative numbers, and lists
that do not overlap at all. I also check that the original nodes are reused
and that ties keep `a` first.”

**Example:** `solve(None, None)` returns `None` because `dummy.next` was never
set; `solve(build([1, 2]), build([3, 4]))` attaches `1, 2`, then all of `b`.

**Follow-up:** Because nodes are relinked, the caller's original `a` and `b`
lists are changed. Ask the interviewer whether modifying the input is allowed.

##### DSA Q6. How would you merge k sorted lists?

**Interview-ready answer:** “I would put the head of each list in a min-heap.
Each step pops the smallest node, attaches it, and pushes that node's next.
With N total nodes, that is O(N log k) time and O(k) extra space.”

**Example:** For three lists `1→4`, `1→3`, `2→6`, the heap starts with
`1, 1, 2`; popping and refilling produces `1, 1, 2, 3, 4, 6`.

**Follow-up:** Python's `heapq` cannot compare `ListNode` objects, so push
tuples such as `(node.val, index, node)` where `index` breaks ties.
Repeatedly merging pairs of lists is another O(N log k) option.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

Start with the narrow layout, then add breakpoint changes where content needs them. useMemo caches a value, useCallback caches a function reference, and React.memo may skip a child render when props remain shallowly equal.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.
A layout that overflows at 320 pixels hides buttons from phone users, and
memoization added without measurement makes code harder to change without
making it faster.

#### How

Learn these ideas one at a time.

**1. Mobile-first Tailwind.** A class without a prefix, such as `grid`,
applies at every width. A prefixed class, such as `sm:grid-cols-[auto_1fr_auto]`,
applies only at the `sm` breakpoint (40rem, normally 640 px) **and wider**. So
you write the phone layout first, then add `sm:` or `md:` classes only where
wider screens need a change. `frontend/app/globals.css` already contains
`@import "tailwindcss";`; Tailwind v4 provides these breakpoints with no extra
configuration.

**2. Touch targets and wrapping.** `min-h-11` makes a control at least 44 px
tall, which is easier to tap. `flex-wrap` lets buttons move to a new line
instead of pushing past the screen edge. `min-w-0` lets a grid or flex child
shrink, and `break-words` breaks a very long word instead of overflowing.

**3. What a render is.** When state changes, React calls the component
function again (a **render**), compares the new output with the old one, and
updates only the changed DOM (a **commit**). Typing one letter in the
**Task title** input changes `title` state, so all of `TaskBoard` renders again,
including every task row.

**4. Three memoization tools.**

| Tool | What it remembers | When it helps |
|---|---|---|
| `useMemo(() => value, [deps])` | A calculated **value** | The calculation is measurably slow |
| `useCallback(fn, [deps])` | The same **function object** between renders | A memoized child receives that function as a prop |
| `memo(Component)` | The child's last output | Its props are shallowly equal (`===` for each prop) |

**Shallowly equal** means React compares each prop with `Object.is`, which
works like `===`. A new arrow function created during render is never equal to
the previous one, so it defeats `memo` unless it is wrapped in `useCallback`.

**5. The React Profiler.** Install the React Developer Tools browser
extension. Its **Profiler** tab records each commit and shows how long each
component took to render. In its settings, turn on **Record why each component
rendered while profiling**.

Files to open deliberately:

- `frontend/app/TaskBoard.tsx`
- `frontend/app/globals.css`

Answer before coding:

- Which value is persistent, and which value is temporary interaction state?
  (Tasks are in PostgreSQL; `title`, `editingId`, and `busy` are React state.)
- What starts this behavior? (A keystroke, a click, or a viewport resize.)
- What should the user see while work is pending? (`Saving…` in the status
  line; layout must not jump.)
- What should remain unchanged when the operation fails? (Saved tasks and
  focus; memoization must never change what is displayed.)

### 5. Backend guided study (1 hour 30 minutes)

#### What

A slow interaction may come from rendering, network latency, server work, or SQL. Profile the layer before optimizing it.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

#### Where the time goes when you tick a checkbox

One click triggers **two** server round trips and one render:

1. `fetch('PATCH /api/tasks/42')` — Route Handler: `auth()`, validation, then
   `UPDATE ... WHERE id = $2 AND owner_id = $3` in PostgreSQL.
2. `router.refresh()` — Next.js requests a new Server Component payload
   (a request with `_rsc=` in the URL), which runs `searchTasks` again.
3. React commits the new `tasks` prop in the browser.

Measure each layer with the matching tool:

| Layer | Tool | Number to record |
|---|---|---|
| Browser render | React Profiler | Commit duration for `TaskBoard` |
| Network + server | DevTools **Network** tab → request → **Timing** | “Waiting for server response” and total time |
| Route Handler | Temporary `performance.now()` log | Database time inside the handler |
| SQL | `EXPLAIN ANALYZE` in `psql` | Planning and execution time; scan type |

Temporary measurement in `frontend/app/api/tasks/[id]/route.ts`: inside
`PATCH`, wrap only the existing database call. Remove these lines after you
record the numbers:

```ts
const dbStarted = performance.now(); // TEMPORARY: Prep Day 15 measurement
const task = await updateTask();
console.info(`PATCH /api/tasks/${id} database: ${(performance.now() - dbStarted).toFixed(1)} ms`);
```

`performance.now()` returns milliseconds with fractions, and it is available in
Node.js and browsers without an import. Log only the timing and the task ID,
never the request body, cookie, or session.

To see how PostgreSQL runs the owner-scoped search, open `psql -d minitrack`:

```sql
SELECT id, email FROM users;  -- find your own user id

EXPLAIN ANALYZE
SELECT id, title, done, created_at
FROM tasks
WHERE owner_id = 1            -- replace 1 with your id from the query above
  AND title ILIKE '%profiling%' ESCAPE '\'
ORDER BY id;
```

**Expected observation:** with a few hundred rows, execution takes well under
a few milliseconds, and PostgreSQL may choose a sequential scan even though
`tasks_owner_id_id_idx` exists, because reading a tiny table directly is
cheaper. A leading-wildcard `ILIKE '%…%'` cannot use a normal B-tree index on
`title`. None of this needs fixing at this size; you are learning to read the
evidence.

### 6. MiniTrack implementation (1 hour)

**Milestone source:** Day 13 responsive design and React profiling lab

**Starting state:** `frontend/app/TaskBoard.tsx` is the Prep Day 14 version:
labelled inputs, three connected error messages, `aria-disabled` controls,
deliberate focus, and a flex row per task. Only `TaskBoard.tsx` changes today;
`page.tsx` and the API stay the same.

Goals:

1. Verify the task row at narrow width and zoom.
2. Record a React Profiler baseline.
3. Try one memoization change, measure again, and remove it if it adds complexity without benefit.

#### Step 1: Make task rows mobile-first

First try it yourself: at phone width, put the checkbox and title on the first
line and the action buttons on the next line; from `sm` upward, put the actions
in a third column on the right.

Then compare. In `frontend/app/TaskBoard.tsx`, change the `min-h-10` at the
start of `actionClass` to `min-h-11`:

```tsx
const actionClass = `min-h-11 rounded-lg px-3 text-sm text-slate-200 hover:bg-slate-800 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 ${focusRing}`;
```

Then replace the whole `<ul aria-labelledby="task-list-heading" ...>...</ul>`
block with this version. All behavior from Prep Day 14 is unchanged; only the
layout classes marked `Prep Day 15` are new:

```tsx
        <ul aria-labelledby="task-list-heading" className="mt-3 border-t border-slate-700">
          {/* Prep Day 15: two columns on phones; a third "actions" column from sm (40rem) up. */}
          {tasks.map(task => (
            <li
              className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-3 gap-y-2 border-b border-slate-700 py-3 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center"
              key={task.id}
            >
              <input
                aria-disabled={busy}
                aria-label={`Complete ${task.title}`}
                checked={task.done}
                className={`mt-0.5 size-5 accent-violet-400 sm:mt-0 ${focusRing}`}
                onChange={event => {
                  void toggleTask(task.id, event.target.checked);
                }}
                type="checkbox"
              />

              {editingId === task.id ? (
                // Prep Day 15: on sm+ the edit form spans the title and actions columns.
                <form
                  className="flex min-w-0 flex-wrap items-center gap-2 sm:col-span-2"
                  noValidate
                  onKeyDown={event => {
                    if (event.key === 'Escape' && !busy) stopEditing();
                  }}
                  onSubmit={saveTask}
                >
                  <label className="sr-only" htmlFor={`edit-${task.id}`}>
                    Edit {task.title}
                  </label>
                  <input
                    aria-describedby={editError ? `edit-${task.id}-error` : undefined}
                    aria-invalid={Boolean(editError)}
                    className={`min-h-11 w-full min-w-0 rounded-lg border border-violet-400 bg-slate-950 px-3 sm:w-auto sm:flex-1 ${focusRing}`}
                    id={`edit-${task.id}`}
                    maxLength={200}
                    onChange={event => setEditTitle(event.target.value)}
                    readOnly={busy}
                    ref={editInputRef}
                    value={editTitle}
                  />
                  <button aria-disabled={busy} className={actionClass} type="submit">
                    Save
                  </button>
                  <button
                    aria-disabled={busy}
                    className={actionClass}
                    onClick={() => {
                      if (!busy) stopEditing();
                    }}
                    type="button"
                  >
                    Cancel
                  </button>
                  {editError ? (
                    <p className={`w-full ${errorClass}`} id={`edit-${task.id}-error`} role="alert">
                      {editError}
                    </p>
                  ) : null}
                </form>
              ) : (
                <>
                  <span className={`min-w-0 break-words ${task.done ? 'text-slate-400 line-through' : ''}`}>
                    {task.title}
                    <span className="sr-only">{task.done ? ' (completed)' : ' (open)'}</span>
                  </span>
                  {/* Prep Day 15: under the title on phones, in column 3 on sm+; buttons wrap. */}
                  <div className="col-start-2 flex flex-wrap gap-2 sm:col-start-3">
                    <button
                      aria-disabled={busy}
                      aria-label={`Edit ${task.title}`}
                      className={actionClass}
                      onClick={() => startEditing(task)}
                      ref={node => {
                        if (node) editButtons.current.set(task.id, node);
                        else editButtons.current.delete(task.id);
                      }}
                      type="button"
                    >
                      Edit
                    </button>
                    <button
                      aria-disabled={busy}
                      aria-label={`Delete ${task.title}`}
                      className={actionClass}
                      onClick={() => {
                        void removeTask(task.id);
                      }}
                      type="button"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
```

Why these classes:

- `grid-cols-[auto_minmax(0,1fr)]` gives the checkbox its natural width and
  the title the rest. `minmax(0,1fr)` lets the title column shrink below the
  width of a long word, so `break-words` can wrap it.
- `col-start-2` puts the action buttons under the title (not under the
  checkbox) on phones; `sm:col-start-3` moves them to a third column.
- `items-start` keeps the checkbox aligned with the first line of a long,
  wrapped title; `sm:items-center` centers the row on wider screens.
- The add form from Prep Day 14 already uses `flex-col sm:flex-row`, so it
  stacks on phones without changes.

#### Step 2: Verify at narrow width and zoom

Run the app (`cd frontend && npm run dev`), sign in, and add a task whose title
is a single 60-character word, for example
`Supercalifragilisticexpialidocious-and-even-longer-than-that`.

1. Open DevTools → **Toggle device toolbar**, set the width to **320**.
2. In the Console, check that the page does not scroll sideways:

   ```js
   document.documentElement.scrollWidth <= document.documentElement.clientWidth
   ```

   Expect `true`. If it is `false`, look for an element wider than the screen
   in the Elements panel.
3. Check widths 320, 768 (tablet), and 1280 (desktop). Actions are under the
   title at 320 and on the right at 768 and 1280.
4. Return to desktop width and zoom the browser to 200%. Everything still fits,
   and you can still Tab through every control from Prep Day 14.
5. Commit the layout change before experimenting:

   ```bash
   git add frontend/app/TaskBoard.tsx
   git commit -m "prep day 15: mobile-first task rows"
   ```

#### Step 3: Record a Profiler baseline

You need enough rows to see anything. In `psql -d minitrack`, add 200 rows to
**your own** user (replace `1` with your id from `SELECT id, email FROM users;`):

```sql
INSERT INTO tasks (owner_id, title)
SELECT 1, 'Profiling task ' || n
FROM generate_series(1, 200) AS n;
```

Reload the page, then in the React DevTools **Profiler** tab:

1. Click **Record**.
2. Click in **Task title** and type `hello` (5 keystrokes).
3. Click **Stop**.
4. Write down: number of commits, the `TaskBoard` render time in the slowest
   commit, and the “why did this render” reason (`State changed: title`).

Repeat three times and use the middle value. The development build is slower
than production, so compare **before and after** in the same mode, not with
numbers from another computer.

#### Step 4: Try one memoization experiment

Each keystroke re-renders all 200 rows even though no task changed. The
experiment: move the row's title and buttons into a memoized `TaskRow` so React
can skip rows whose props did not change.

1. Update the React import:

   ```tsx
   import { memo, useCallback, useEffect, useRef, useState, type FormEvent } from 'react';
   ```

2. Add this component **above** `export default function TaskBoard`:

   ```tsx
   type TaskRowProps = {
     task: Task;
     busy: boolean;
     onEdit: (task: Task) => void;
     onDelete: (taskId: string) => Promise<void>;
     registerEditButton: (taskId: string, node: HTMLButtonElement | null) => void;
   };

   // Prep Day 15 EXPERIMENT: memo skips this row when every prop is === to last time.
   const TaskRow = memo(function TaskRow({
     task,
     busy,
     onEdit,
     onDelete,
     registerEditButton,
   }: TaskRowProps) {
     return (
       <>
         <span className={`min-w-0 break-words ${task.done ? 'text-slate-400 line-through' : ''}`}>
           {task.title}
           <span className="sr-only">{task.done ? ' (completed)' : ' (open)'}</span>
         </span>
         <div className="col-start-2 flex flex-wrap gap-2 sm:col-start-3">
           <button
             aria-disabled={busy}
             aria-label={`Edit ${task.title}`}
             className={actionClass}
             onClick={() => onEdit(task)}
             ref={node => registerEditButton(task.id, node)}
             type="button"
           >
             Edit
           </button>
           <button
             aria-disabled={busy}
             aria-label={`Delete ${task.title}`}
             className={actionClass}
             onClick={() => {
               void onDelete(task.id);
             }}
             type="button"
           >
             Delete
           </button>
         </div>
       </>
     );
   });
   ```

3. Inside `TaskBoard`, the functions passed to `TaskRow` must keep the same
   identity between renders, or `memo` never skips. Replace `request`,
   `removeTask`, and `startEditing` with these `useCallback` versions, and add
   `registerEditButton`:

   ```tsx
   const request = useCallback(
     async (path: string, options: RequestInit, showError: (message: string) => void) => {
       setTitleError('');
       setEditError('');
       setListError('');
       setBusy(true);
       try {
         const response = await fetch(path, options);
         if (!response.ok) {
           showError(await readErrorMessage(response));
           setBusy(false);
           return false;
         }
         router.refresh();
         setBusy(false);
         return true;
       } catch {
         showError('Could not connect to the server.');
         setBusy(false);
         return false;
       }
     },
     [router], // State setters are already stable, so only router is listed.
   );

   const removeTask = useCallback(
     async (taskId: string) => {
       if (busy) return;
       const ok = await request(`/api/tasks/${taskId}`, { method: 'DELETE' }, setListError);
       if (ok) listHeadingRef.current?.focus();
     },
     [busy, request], // New function only when busy flips, not on every keystroke.
   );

   const startEditing = useCallback(
     (task: Task) => {
       if (busy) return;
       setEditingId(task.id);
       setEditTitle(task.title);
       setEditError('');
     },
     [busy],
   );

   const registerEditButton = useCallback((taskId: string, node: HTMLButtonElement | null) => {
     if (node) editButtons.current.set(taskId, node);
     else editButtons.current.delete(taskId);
   }, []);
   ```

4. In the `<ul>` block, replace the whole `<> ... </>` view-mode branch (the
   title `<span>` and the actions `<div>`) with:

   ```tsx
   <TaskRow
     busy={busy}
     onDelete={removeTask}
     onEdit={startEditing}
     registerEditButton={registerEditButton}
     task={task}
   />
   ```

`addTask`, `toggleTask`, and `saveTask` stay plain functions because they are
not passed to `TaskRow`. `useCallback` must be called at the top level of the
component, never inside a condition or loop.

#### Step 5: Measure again and decide

Run `npx tsc --noEmit` and `npm run lint`, reload, and repeat the Step 3
recording three times. In the Profiler, `TaskRow` entries should now appear
grey (“Did not render”) for keystrokes in **Task title**.

| Measurement | Baseline | With `memo(TaskRow)` |
|---|---:|---:|
| `TaskBoard` render time, slowest keystroke commit (ms) | | |
| Rows that rendered per keystroke | 200 | |
| Lines of code added | 0 | about 70 |

Decision rule:

- **Keep** the experiment only if typing felt slow before and the numbers show
  a clear, repeatable improvement.
- **Otherwise remove it** and return to the committed plain version:

  ```bash
  git restore frontend/app/TaskBoard.tsx
  ```

Things the memo version cannot avoid: when you press Save or tick a checkbox,
`busy` changes and `router.refresh()` returns **new task objects**, so every
row renders anyway. For 200 short rows the baseline is usually only a few
milliseconds, which is why many teams keep the plain version.

`useMemo` would look like this for the count, but a filter over 200 items is
too cheap to justify it; measure before adding it:

```tsx
const openCount = useMemo(() => tasks.filter(task => !task.done).length, [tasks]);
```

#### Step 6: Clean up and run checks

Remove the profiling rows and the temporary `performance.now()` lines:

```sql
DELETE FROM tasks WHERE owner_id = 1 AND title LIKE 'Profiling task %';
```

From `frontend/`:

```bash
npm run lint
npx tsc --noEmit
npm run test:unit
```

**Expected observation:** the user-visible milestone works, its important
failure path is explicit, and existing behavior remains intact. The page has no
sideways scroll at 320 px, you have written baseline and experiment numbers,
and the final `TaskBoard.tsx` contains only memoization you can justify.

Failure checks:

- Pass an inline `onEdit={task => startEditing(task)}` to `TaskRow` and record
  again: every row renders on every keystroke, because the new arrow function is
  never `===` to the old one.
- Remove `busy` from the `removeTask` dependency list. `npm run lint` warns
  (`react-hooks/exhaustive-deps`), and the function keeps reading the old
  `busy` value—a **stale closure**.

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant U as User
  participant P as React Profiler
  participant R as TaskBoard (React)
  participant A as PATCH /api/tasks/42
  participant D as PostgreSQL
  U->>P: Start recording
  U->>R: Type "h" in Task title
  R->>R: setTitle("h") → TaskBoard renders
  R->>R: memo compares TaskRow props (task, busy, callbacks)
  R-->>P: Commit: 1.8 ms, rows skipped or rendered
  U->>R: Tick "Complete Profiling task 42"
  R->>A: PATCH {"done":true}
  A->>D: UPDATE ... WHERE id=42 AND owner_id=$owner
  D-->>A: Updated row (database time logged)
  A-->>R: 200 JSON (Network → Timing)
  R->>R: router.refresh() → new tasks prop → rows render
  R-->>P: Commit after refresh
  P-->>U: Compare render ms with network ms
```

Trace one concrete input. Name every boundary, value, and possible failure.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Wrap every calculation and callback in memoization before profiling.

For example, wrap `openCount`, `addTask`, `toggleTask`, and `saveTask` in
`useMemo` or `useCallback` and pass the dependencies you guess.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** Dependencies become harder to reason about while performance may not improve.
Lint warns about missing dependencies, and a callback with a forgotten
dependency can read an old `busy` or `editTitle` value.

**Root cause:** Optimization was applied without evidence of a bottleneck.

**Restore and verify:** Return to plain code, capture a baseline, and optimize only measured work.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

### 9. Interview questions and answers (30 minutes)

#### Q1. What is responsive layout and measured memoization?

**Interview-ready answer:** “Responsive layout means the page stays readable
and usable from a 320-pixel phone to a wide desktop and at 200% zoom. I write
the narrow layout first and add breakpoint classes only where wider screens
need a change. Measured memoization means I profile first and only add
`useMemo`, `useCallback`, or `memo` when the numbers show a real cost.”

**Example:** In `frontend/app/TaskBoard.tsx`, each `<li>` uses
`grid-cols-[auto_minmax(0,1fr)]` on phones and
`sm:grid-cols-[auto_minmax(0,1fr)_auto]` from 640 px up. For memoization, I
recorded typing `hello` with 200 rows in the Profiler before and after
`memo(TaskRow)`, then kept or reverted it based on the numbers.

**Senior follow-up:** “Memoization creates hidden coupling: every callback
passed to a memoized child needs correct dependencies. If the list grew to
thousands of rows, I would first consider pagination or list virtualization,
which reduce the work instead of caching it.”

#### Q2. How should the backend handle separating render cost from API latency?

**Interview-ready answer:** “I split one slow interaction into its parts:
React render time from the Profiler, request time from the Network tab, the
handler's database time from a temporary server log, and the query plan from
`EXPLAIN ANALYZE`. I only optimize the part that is actually slow.”

**Example:** Ticking a checkbox sends `PATCH /api/tasks/42`, logs
`PATCH /api/tasks/42 database: 1.3 ms`, then `router.refresh()` sends an
`_rsc` request that runs `searchTasks(ownerId, filters)` again. If the Network
tab shows 300 ms waiting but the database takes 1 ms, the problem is not SQL.

**Senior follow-up:** “In production I would replace `console.info` with
structured metrics or tracing (for example OpenTelemetry spans) and watch p95
latency, not averages. Logs must never include cookies, tokens, or task
content from other users.”

#### Q3. What invariant makes the dummy-node list merge solution correct?

**Interview-ready answer:** “`tail` is always the last node of a correctly
sorted merged list that starts at `dummy.next`. Each step I attach the smaller
of the two current nodes and advance only that list, so the merged part stays
sorted and nothing is skipped. When one list ends, I attach the rest of the
other.”

**Example:** For `1→2→3` and `1→4`: attach `a`'s 1, `b`'s 1, then 2 and 3 from
`a`; `a` is empty, so `tail.next = b` attaches 4.

**Senior follow-up:** “It is O(n + m) time and O(1) extra space because nodes
are relinked, which also changes the caller's lists. For k lists I would use a
min-heap with `(val, index, node)` tuples for O(N log k).”

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** “Performance is a full-stack question. A click in
`TaskBoard` becomes a `PATCH` Route Handler, an owner-scoped `UPDATE`, a
`router.refresh()` round trip that re-runs `searchTasks`, and finally a React
commit. Responsive CSS costs no JavaScript, and memoization only affects the
last step.”

**Example:** With 200 rows, typing in **Task title** costs a few milliseconds of
render time, while ticking a checkbox costs two network round trips. The
user-visible delay is the round trips, so `memo(TaskRow)` would not make the
checkbox feel faster.

**Senior follow-up:** “Before adding caching or infrastructure, I would measure
p95 interaction latency in production with real user monitoring. If network
round trips dominate, an optimistic update with `useOptimistic` or a smaller
refresh payload would help more than memoization.”

### 10. Complexity and operational cost

- **DSA:** O(n + m) time and O(1) auxiliary space.
- **Application:** Rendering a small list is O(n) and often cheap. Memoization adds comparison, memory, and cognitive cost that must be justified by measurements.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 15 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 15: measure responsive rendering and memoization`

<a id="prep-day-16"></a>

## Prep Day 16 — Run the quality gate and a full-stack mock

**Date:** Saturday, December 12, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Run the quality gate and a full-stack mock.

[Prep Day 15](../lessons/interview-prep/prep-day-15.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](../lessons/interview-prep/README.md) · [Prep Day 17](../lessons/interview-prep/prep-day-17.md)

**Everything to read today is below.** The original
[acceptance checklist](../CHECKLIST.md),
[interview index](./INTERVIEW_INDEX.md),
[App Day 13](../lessons/day-13.md), and
[DSA Day 16](../dsa-python/lessons/dsa-day-16.md) remain available for
comparison. Today is a **review and mock day**: you write no new feature code.
You run every existing check, walk the complete signed-in journey, explain the
system end to end, and fix only the two most valuable gaps you find. The scope
is App Days 5–13 (Prep Days 01–15). Production deployment (App Day 14) belongs
to Prep Day 17, and release and recovery checks (App Day 15) belong to Prep
Day 18. Write runnable code only in the practice file and in small gap-repair
changes, not in this Markdown file.

### Learning objectives

- explain the complete browser journey in beginner-friendly language;
- explain what tests, type-check, build, and browser checks each prove, and where each stops;
- run and verify the MiniTrack quality gate;
- solve DSA Day 16 using the recursive tree DFS pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **recursive tree DFS** pattern?

Use this format:

```md
## Saturday, December 12, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Explaining the complete browser journey:** Start with the user event, describe state and rendering, identify the HTTP request, then explain how the refreshed server data reaches the client.

**Backend focus — Running tests, type-check, build, and browser checks:** Each gate proves a different property: tests prove selected behavior, type-check proves static contracts, build proves production compilation, and browser checks prove the integrated journey.

**Today's connection:** A release candidate needs code, data, security, accessibility, and operational evidence together.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 16: recursive tree DFS"]
  DSA --> FE["Frontend: Explaining the complete browser journey"]
  FE --> BE["Backend: Running tests, type-check, build, and browser checks"]
  BE --> App["MiniTrack: Run the quality gate and a full-stack mock"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-16.py`](../dsa-python/practice/day-16.py)
**Pattern:** recursive tree DFS

#### Problem: Maximum Depth of Binary Tree

You receive the top node (the **root**) of a binary tree. Return its
**maximum depth**: the number of nodes on the longest path from the root down
to a leaf. A **leaf** is a node with no children.

Assumptions:

- `root` may be `None` (an empty tree), whose depth is `0`;
- a tree with only a root has depth `1`;
- the tree is not necessarily balanced or a binary search tree; values do not
  matter, only shape.

A binary tree is built from nodes that each have up to two children. The
practice file defines this class:

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right
```

`TreeNode(2, TreeNode(1), TreeNode(3))` creates a root `2` with a left child
`1` and a right child `3`. A missing child is `None`.

The day checker has no built-in examples for trees. These sample calls match
the reference test and the classic example:

```python
solve(TreeNode(2, TreeNode(1), TreeNode(3)))  # 2
solve(None)                                   # 0
#     3
#    / \
#   9   20
#      /  \
#     15   7
solve(TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7))))  # 3
```

#### Start coding

In the practice file, replace the `raise NotImplementedError` line with your
own implementation. This is the starting shape:

```python
def solve(root):
    # Return the number of nodes on the longest root-to-leaf path (0 for None).
    raise NotImplementedError
```

Two Python ideas you need:

- **Recursion** means a function calls itself on a smaller input. Every
  recursive function needs a **base case** that stops without calling itself
  (here: `root is None` returns `0`) and a **recursive case** that combines
  answers to smaller problems.
- `max(a, b)` returns the larger of two numbers, for example `max(1, 2)` is `2`.

The idea: the depth of a tree is one (for the root itself) plus the deeper of
its two subtrees. This is a **depth-first search (DFS)**: each call goes all the
way down one side before returning.

```mermaid
flowchart TD
  Call["solve(node)"] --> Empty{"node is None?"}
  Empty -- Yes --> Zero["Return 0"]
  Empty -- No --> Left["left = solve(node.left)"]
  Left --> Right["right = solve(node.right)"]
  Right --> Combine["Return 1 + max(left, right)"]
```

#### Invariant to say aloud

The depth of a node is one plus the greater depth of its left and right subtrees, with an empty tree at zero.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 16
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** for Day 16 the checker only loads your file and
prints `This problem uses linked-list/tree structures; write your own
object-based tests.` It does **not** test your answer, so use the assert block
below. The completed reference suite still passes (`test_tree` covers Days
16–18).

Temporarily add these checks at the bottom of the practice file, then run
`python3 dsa-python/practice/day-16.py`:

```python
if __name__ == '__main__':
    assert solve(TreeNode(2, TreeNode(1), TreeNode(3))) == 2
    assert solve(None) == 0                                   # empty tree
    assert solve(TreeNode(5)) == 1                            # root only
    tree = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
    assert solve(tree) == 3                                   # deeper right side
    left_only = TreeNode(1, TreeNode(2, TreeNode(3)))
    assert solve(left_only) == 3                              # missing right children
    chain = TreeNode(1, None, TreeNode(2, None, TreeNode(3, None, TreeNode(4))))
    assert solve(chain) == 4                                  # skewed like a list
    assert solve(TreeNode(7, TreeNode(7), TreeNode(7))) == 2  # repeated values
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

There is no meaningfully slower “brute force” here: any correct answer must
look at every node once. The useful alternative is an **iterative** DFS that
uses your own stack instead of Python's call stack, which avoids
`RecursionError` on very deep trees.

<details>
<summary>Show the iterative alternative</summary>

```python
def solve(root):
    if root is None:
        return 0
    deepest = 0
    stack = [(root, 1)]                 # pairs of (node, depth of that node)
    while stack:
        node, depth = stack.pop()       # take the most recently added pair
        deepest = max(deepest, depth)
        if node.left:
            stack.append((node.left, depth + 1))
        if node.right:
            stack.append((node.right, depth + 1))
    return deepest
```

</details>

A Python list works as a **stack**: `append` adds to the end and `pop()`
removes from the end. Each node is pushed and popped once, so time is O(n).
The stack holds at most one waiting sibling per level of the current path, so
extra space is O(h), where h is the tree's height.

#### Optimized code — reveal after attempting

<details>
<summary>Show the Maximum Depth solution</summary>

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

def solve(root):
    if root is None:            # base case: empty tree has depth 0
        return 0
    return 1 + max(solve(root.left), solve(root.right))
```

</details>

Trace the tree `3 → (9, 20 → (15, 7))`. Calls finish from the bottom up:

| Order finished | Call | Left result | Right result | Returns |
|---:|---|---:|---:|---:|
| 1 | `solve(9)` | `solve(None)` = 0 | `solve(None)` = 0 | 1 + 0 = **1** |
| 2 | `solve(15)` | 0 | 0 | **1** |
| 3 | `solve(7)` | 0 | 0 | **1** |
| 4 | `solve(20)` | 1 (from 15) | 1 (from 7) | 1 + 1 = **2** |
| 5 | `solve(3)` | 1 (from 9) | 2 (from 20) | 1 + 2 = **3** |

Each node is visited once: O(n) time. The call stack holds one frame per level
of the current path: O(h) space, which is O(log n) for a balanced tree and O(n)
for a tree shaped like a chain.

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “There isn't a slower brute force worth writing:
any correct solution must visit every node, because the deepest leaf could be
anywhere. A naive idea would be to collect every root-to-leaf path as a list
and take the longest, but that copies paths and costs up to O(n·h). The
recursive DFS already visits each node once.”

**Example:** For `3 → (9, 20 → (15, 7))`, the paths are `[3, 9]`,
`[3, 20, 15]`, and `[3, 20, 7]`; the longest has 3 nodes.

**Follow-up:** That is why the interesting comparison is recursive versus
iterative, not slow versus fast.

##### DSA Q2. What is the core idea of recursive DFS here?

**Interview-ready answer:** “I trust the function to answer the same question
for smaller trees. The depth of this tree is one for the current node plus the
larger of the left and right subtree depths. An empty subtree has depth zero,
which stops the recursion.”

**Example:** `solve(20)` asks `solve(15)` and `solve(7)`, both return `1`, so
`solve(20)` returns `2`.

**Follow-up:** This is a **post-order** traversal: each node combines results
after both children have finished.

##### DSA Q3. Why is it correct?

**Interview-ready answer:** “By induction on tree size. The base case is
correct: an empty tree has depth zero. If the calls on both subtrees return
their correct depths, then the longest path through this node goes into the
deeper subtree, so its length is one plus the larger depth.”

**Example:** For a root-only tree, both children return `0`, so the answer is
`1 + max(0, 0) = 1`.

**Follow-up:** Missing children are handled by the base case, so a node with
only a left child still works: `max(left_depth, 0)`.

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “O(n) time because every node is visited once,
plus one `None` check per missing child. O(h) extra space for the call stack,
where h is the height: about log n for a balanced tree, and n for a skewed
tree.”

**Example:** A 1,000-node chain needs about 1,000 nested calls; a balanced
1,000-node tree needs about 10.

**Follow-up:** CPython's default recursion limit is about 1,000, so a very deep
chain raises `RecursionError`. Use the iterative stack version, or a
breadth-first level count, when depth is unbounded.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “An empty tree, a single node, a tree that only goes
left, a tree that only goes right, a balanced tree, and repeated values. Values
should not affect the answer, only the shape.”

**Example:** `solve(None)` returns `0`; `solve(TreeNode(5))` returns `1`; a
right-only chain of four nodes returns `4`.

**Follow-up:** Ask whether depth counts nodes or edges. This problem counts
nodes; counting edges would return one less for a non-empty tree.

##### DSA Q6. How would you find the minimum depth instead?

**Interview-ready answer:** “Minimum depth is the shortest path to a **leaf**.
I cannot just replace `max` with `min`, because a missing child is not a leaf.
If one child is `None`, I must use the other child's depth. Breadth-first
search is even better: it stops at the first leaf it reaches.”

**Example:** For `TreeNode(1, None, TreeNode(2))`, `1 + min(0, 1)` would wrongly
give `1`; the correct minimum depth is `2`, because node `1` is not a leaf.

**Follow-up:** BFS with a queue finds the minimum depth without visiting deeper
levels, which matters for very unbalanced trees. Prep Day 17 practises BFS.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

Start with the user event, describe state and rendering, identify the HTTP request, then explain how the refreshed server data reaches the client.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.
In an interview, a clear end-to-end explanation shows that you understand how
the pieces you built connect, not just each file on its own.

#### How

Use this five-part script for any MiniTrack action. Practise it aloud with the
checkbox example until you can say it without reading:

1. **Event:** what the user does and which handler runs.
2. **Client state:** which React state changes and what the user sees.
3. **Request:** the HTTP method, URL, and body.
4. **Server:** authentication, validation, authorization, and SQL.
5. **Refresh:** how fresh data comes back and React re-renders.

The complete system you built across App Days 3–13:

```mermaid
flowchart LR
  subgraph Browser
    TB["TaskBoard.tsx<br/>Client Component<br/>title, editingId, busy, errors"]
    SF["SearchForm.tsx<br/>GET form ?q=&status="]
  end
  subgraph Next["Next.js server"]
    PG["page.tsx<br/>Server Component<br/>auth() + searchParams"]
    RH["Route Handlers<br/>/api/tasks, /api/tasks/[id]"]
    AU["auth.ts<br/>Auth.js + GitHub"]
    LIB["lib/tasks.ts<br/>owner-scoped SQL"]
  end
  DB[("PostgreSQL<br/>tasks, users,<br/>accounts, sessions")]
  SF -- "navigate" --> PG
  TB -- "fetch POST/PATCH/DELETE" --> RH
  TB -- "router.refresh()" --> PG
  PG --> AU
  RH --> AU
  AU --> DB
  PG --> LIB
  RH --> LIB
  LIB -- "$1, $2 bound values" --> DB
  PG -- "tasks prop" --> TB
```

Review these key excerpts (they are already in your project; do not retype
them, and `// ...` marks lines left out). First, the **Server Component** in
`frontend/app/page.tsx` reads the session, the URL, and PostgreSQL on the
server:

```tsx
async function TaskContent({ searchParams }: PageProps) {
  const session = await auth();
  if (!session?.user?.id) {
    // ...return the "Sign in to open MiniTrack" section
  }

  const params = await searchParams;
  const filters = normalizeTaskFilters(params.q, params.status);
  // ...a try/catch around this call renders a role="alert" message on failure
  const tasks = await searchTasks(session.user.id, filters);

  return (
    <>
      <SearchForm filters={filters} />
      <TaskBoard tasks={tasks} />
    </>
  );
}
```

Second, the **Client Component** in `frontend/app/TaskBoard.tsx` sends one
request and asks the server for fresh data:

```tsx
async function request(
  path: string,
  options: RequestInit,
  showError: (message: string) => void,
): Promise<boolean> {
  setTitleError('');
  setEditError('');
  setListError('');
  setBusy(true);
  try {
    const response = await fetch(path, options);
    if (!response.ok) {
      showError(await readErrorMessage(response)); // e.g. "Task not found"
      setBusy(false);
      return false;
    }
    router.refresh(); // re-run page.tsx on the server and send new props
    setBusy(false);
    return true;
  } catch {
    showError('Could not connect to the server.');
    setBusy(false);
    return false;
  }
}

async function toggleTask(taskId: string, done: boolean) {
  if (busy) return;
  await request(
    `/api/tasks/${taskId}`,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done }),
    },
    setListError,
  );
}
```

Model explanation for **ticking “Complete Buy milk”** (say it in under two
minutes):

> “The checkbox's `onChange` calls `toggleTask('42', true)`. React sets `busy`
> and the status line says ‘Saving…’. The browser sends `PATCH /api/tasks/42`
> with `{"done":true}` and the session cookie. The Route Handler calls
> `auth()`; no session means `401`. It validates the ID with `isValidId` and the
> body with `isRecord`, then runs `UPDATE tasks SET done = $1 WHERE id = $2 AND
> owner_id = $3`. Zero rows means `404` whether the task is missing or belongs
> to someone else. On `200`, `router.refresh()` re-runs `page.tsx` on the
> server, which calls `searchTasks(session.user.id, filters)` again, and React
> renders the new `tasks` prop. The checkbox stays focused, and the status line
> announces the new count. PostgreSQL stays the source of truth; React only
> holds temporary state.”

Files to open deliberately:

- `frontend/package.json`
- `frontend/test`
- `frontend/app`

Answer before the mock:

- Which value is persistent, and which value is temporary interaction state?
- What starts this behavior?
- What should the user see while work is pending?
- What should remain unchanged when the operation fails?

### 5. Backend guided study (1 hour 30 minutes)

#### What

Each gate proves a different property: tests prove selected behavior, type-check proves static contracts, build proves production compilation, and browser checks prove the integrated journey.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

#### What each gate proves

These scripts were added on App Day 9 in `frontend/package.json`:

```json
{
  "scripts": {
    "test": "npm run test:unit",
    "test:unit": "tsx --test test/unit/*.test.ts",
    "test:integration": "dotenv -e .env.test.local -- tsx --test test/integration/*.test.ts",
    "test:e2e": "dotenv -e .env.test.local -- playwright test"
  }
}
```

| Gate | Command (from `frontend/`) | It proves | It cannot prove |
|---|---|---|---|
| Lint | `npm run lint` | Common React and Next.js mistakes, such as hook rules | That the feature works |
| Type-check | `npx tsc --noEmit` | Values match declared types across files | Runtime data from users or PostgreSQL |
| Unit | `npm run test:unit` | Pure functions such as `normalizeTitle` and `isValidId` | Anything that needs PostgreSQL or a browser |
| Integration | `npm run test:integration` | Owner-scoped SQL and handlers against `minitrack_test` | Real GitHub sign-in, browser behavior |
| End-to-end | `npm run test:e2e` | A real browser journey with persistence across reload | Every edge case; it is slow, so keep it small |
| Build | `npm run build` | Production compilation, including Cache Components rules | Authorization, data correctness |
| Manual | Keyboard and 320 px checks | Usability and accessibility a tool cannot judge | Regressions next week, unless automated |

The negative authorization test from App Day 12 is the gate that proves users
are isolated. Review its core in
`frontend/test/integration/authorization.test.ts`:

```ts
test('users cannot read or mutate one another tasks', async () => {
  const userA = await createTestUser(pool, 'a@example.test');
  const userB = await createTestUser(pool, 'b@example.test');
  const taskA = await createTask(userA, 'A private task');
  const taskB = await createTask(userB, 'B private task');

  const visibleToA = await searchTasks(userA, { query: '', status: 'all' });
  assert.deepEqual(visibleToA.map(task => task.id), [taskA.id]);

  assert.equal(await renameTask(userA, taskB.id, 'Stolen'), null);
  assert.equal(await deleteTask(userA, taskB.id), false);

  const stillVisibleToB = await searchTasks(userB, { query: '', status: 'all' });
  assert.equal(stillVisibleToB[0]?.title, 'B private task');
});
```

It passes only because every data function in `frontend/lib/tasks.ts` puts the
owner in the SQL predicate (App Day 11):

```sql
UPDATE tasks
SET title = $1
WHERE id = $2 AND owner_id = $3
RETURNING id, title, done, created_at;
```

And the anonymous case uses the injectable session reader from App Day 12, so
no test needs real GitHub credentials:

```ts
test('anonymous list returns 401', async () => {
  const request = new NextRequest('http://localhost/api/tasks');
  const response = await handleGetTasks(request, async () => null);

  assert.equal(response.status, 401);
});
```

The Day 9 guard in `frontend/test/helpers/test-database.ts` refuses to run
destructive tests unless `DATABASE_URL` ends in `/minitrack_test`.

### 6. MiniTrack implementation (1 hour)

**Milestone source:** Days 5–13 verification and end-to-end explanation

No new feature code today. Goals:

1. Run the repository's focused tests, type-check, and production build.
2. Complete the critical browser journey as an authenticated user.
3. Run a 45-minute mock and record the two highest-value gaps.

#### Step 1: Run the quality gate (20 minutes)

Make sure PostgreSQL is running and `frontend/.env.local` and
`frontend/.env.test.local` exist (never commit them). From the repository root:

```bash
python3 -m unittest discover -s dsa-python/tests -v
cd frontend
npm run lint
npx tsc --noEmit
npm run test:unit
npm run test:integration
npm run test:e2e
npm run build
```

Run them in this order: the fast, cheap checks first, so a typo fails in
seconds instead of after a full build. Record each result in your notebook as
`pass`, `fail`, or `not set up`.

**Expected observation:** every command exits without errors; the integration
run includes `users cannot read or mutate one another tasks`; `npm run build`
ends with a route summary for `/`, `/api/tasks`, and `/api/tasks/[id]`.

If a gate fails, use this table before changing code:

| Symptom | Likely cause | First check |
|---|---|---|
| `Refusing to test against /minitrack` | `.env.test.local` points at the development database | Change it to `.../minitrack_test` |
| Integration `relation "users" does not exist` | Test database is missing the Day 11 migrations | Apply the migrations to `minitrack_test` in numeric order |
| Build: uncached data accessed outside `<Suspense>` | A component calls `auth()` or reads PostgreSQL outside `Suspense` | Wrap it in `Suspense`; do not add `force-dynamic` |
| E2E test stops at “Sign in to open MiniTrack” | The App Day 9 browser test has no signed-in session since Day 10 | Record it as a gap; never add a production auth bypass |
| `tsc` error on `session.user.id` | Missing `frontend/types/next-auth.d.ts` from Day 11 | Restore the module augmentation |

#### Step 2: Walk the critical journey (15 minutes)

Run `npm run dev`, then check each item and note anything that fails:

- [ ] Signed out, `/` shows “Sign in to open MiniTrack”.
- [ ] Sign in with GitHub; your name appears in the header.
- [ ] Create a task with only the keyboard; it persists after reload.
- [ ] Edit, save, and cancel with the keyboard; focus returns to Edit.
- [ ] Complete a task; the status line updates.
- [ ] Search `?q=milk&status=open`; reload and Back keep the filter.
- [ ] Delete a task; focus moves to the **Tasks** heading.
- [ ] At 320 px there is no sideways scroll.
- [ ] Sign out; the tasks disappear.

Then prove the API rejects anonymous callers (curl sends no session cookie):

```bash
curl -i http://localhost:3000/api/tasks
curl -i -X PATCH http://localhost:3000/api/tasks/1 \
  -H 'Content-Type: application/json' -d '{"done":true}'
```

Expect `HTTP/1.1 401` and `{"error":"Unauthorized"}` for both. For cross-user
access, rely on the integration test above, or sign in as a second GitHub
account in a private window and try to `PATCH` the first user's task ID from
the browser console: expect `404`.

Compare with the [acceptance checklist](../CHECKLIST.md) rows for Days 5–13:

- [ ] Day 5 create, complete, filter, and delete from the browser
- [ ] Day 6 task-title PATCH validation and persistence work
- [ ] Day 7 edit, save, cancel, focus, and failure states work in the browser
- [ ] Day 8 search and status filters survive reload through the URL
- [ ] Day 9 unit, isolated integration, and browser tests pass
- [ ] Day 10 GitHub sign-in/sign-out and client session Context work; anonymous task API calls return `401`
- [ ] Day 11 every task query and mutation is scoped by the session owner
- [ ] Day 12 automated tests prove anonymous and cross-user access is blocked
- [ ] Day 13 accessibility checks pass and I can explain measured React memoization
- [ ] `.env` and `.env.local` are NOT committed

#### Step 3: Run a timed 45-minute mock (45 minutes, plus review)

Ask a friend to read the questions, or record yourself with a timer. Close
this file during each answer and open it only to score yourself afterwards.

| Minutes | Segment | Prompt |
|---:|---|---|
| 0–5 | Introduction | “Walk me through MiniTrack in two minutes.” |
| 5–15 | System design | “Draw the browser → Next.js → PostgreSQL flow and trace ticking a checkbox.” |
| 15–30 | Deep questions | Pick five questions from the bank below at random. |
| 30–40 | Live coding | Solve Maximum Depth of Binary Tree aloud, then test it. |
| 40–45 | Your questions | Ask the interviewer two questions about their team's testing and deploys. |

Score each answer: **2** = correct, concrete, and includes an example;
**1** = correct but vague; **0** = wrong or stuck.

##### Mock question bank with model answers

1. **What runs on the server and what runs in the browser?**
   `page.tsx` is a Server Component: it calls `auth()`, reads `searchParams`,
   and queries PostgreSQL, and its code never ships to the browser.
   `TaskBoard.tsx` starts with `'use client'` because it needs state and event
   handlers. The server passes `tasks` as a serializable prop.
2. **What happens after a mutation?** The Route Handler changes PostgreSQL and
   returns JSON. The client calls `router.refresh()`, which re-runs the Server
   Component and sends new props. React keeps client state such as the typed
   title, and the list shows the saved data.
3. **Why ignore repeat clicks while busy? Is that enough?** It reduces
   accidental duplicate requests, but it is not idempotency. A retried `POST`
   can still create two tasks; a real fix uses an idempotency key or a
   uniqueness rule on the server.
4. **Why `PATCH` and not `PUT`?** `PATCH` is a partial update: MiniTrack sends
   only `{ "done": true }` or `{ "title": "..." }`. `PUT` conventionally
   replaces the whole resource. Either way, the server still validates fields
   and checks ownership.
5. **Why is focus an effect but filtering is not?** Focus synchronizes React
   with the browser DOM after commit, so it belongs in `useEffect`. Filtering is
   derived from props and state and can be calculated during render, so an
   effect would add an extra render and possible bugs.
6. **Why put filters in the URL?** `/?q=react&status=open` survives reload,
   works with Back, and can be shared. The server must still validate it with
   `normalizeTaskFilters`, because users can edit the URL.
7. **Does a `$1` parameter escape `%` and `_`?** No. Parameters prevent SQL
   injection, but `%` and `_` are still `ILIKE` wildcards. `escapeLike` plus
   `ESCAPE '\'` makes them literal characters.
8. **Unit, integration, or end-to-end?** Unit tests check pure functions fast;
   integration tests check SQL and handlers against an isolated
   `minitrack_test` database; one or two end-to-end tests check a real browser
   journey. Most tests should be the fast kind.
9. **Authentication versus authorization?** Authentication answers “who are
   you?” (`auth()` returns a session). Authorization answers “may you touch this
   row?” (`WHERE id = $2 AND owner_id = $3`). A valid session alone does not
   prove access to task 42.
10. **What is IDOR and why return `404`?** An insecure direct object reference
    is when changing an ID in a URL reaches someone else's data. MiniTrack puts
    the owner in every SQL predicate and returns `404` for both “missing” and
    “not yours”, so attackers cannot discover which IDs exist.
11. **Why test the database after a forbidden request?** A handler can return
    `404` and still have changed the row. The Day 12 test re-reads User B's task
    and asserts the title is still `B private task`.
12. **What can the Auth.js session Context do?** `SessionProvider` and
    `useSession()` let Client Components show the signed-in name without prop
    drilling. They cannot protect data: every Route Handler and the page still
    call `auth()` on the server.
13. **Why native controls over ARIA?** A `<button>` already supports Tab,
    Enter, Space, and the button role. ARIA adds missing meaning, such as
    `aria-describedby` linking an input to its error, but it does not add
    keyboard behavior to a `<div>`.
14. **`useMemo`, `useCallback`, `memo`?** `useMemo` caches a value,
    `useCallback` caches a function's identity, and `memo` skips a child render
    when its props are shallowly equal. Profile first; on Prep Day 15 you
    measured `memo(TaskRow)` before deciding whether to keep it.
15. **Why a connection pool?** Opening a PostgreSQL connection is slow, so
    `getPool()` reuses a limited set of connections. If every connection is
    busy, new queries wait, so slow queries and leaked clients show up as
    request latency.

#### Step 4: Repair only the two highest-value gaps (rest of the block)

List every gap from the gate, the journey, and the mock. Pick two using this
order: **security** (data leak, missing `401`/`404`) → **broken journey** →
**failing gate** → **explanation gap** (a mock answer scored 0). Write:

```md
## Gap repair — Saturday, December 12, 2026

1. Gap:
   Evidence (command or question):
   Smallest fix:
   How I verified it:
2. Gap:
   Evidence:
   Smallest fix:
   How I verified it:
Deferred (not today):
```

Fix code gaps with the smallest change and re-run only the gate that failed.
Fix explanation gaps by re-reading the matching excerpt above and answering
the question aloud again.

**Expected observation:** the user-visible milestone works, its important
failure path is explicit, and existing behavior remains intact. You have a
gate result for every command, a mock score, and two verified repairs.

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant U as Signed-in user
  participant C as TaskBoard (browser)
  participant H as PATCH /api/tasks/42
  participant A as auth() (Auth.js)
  participant P as PostgreSQL
  participant S as page.tsx (server)
  U->>C: Tick "Complete Buy milk"
  C->>C: busy = true, status "Saving…"
  C->>H: PATCH {"done":true} + session cookie
  H->>A: auth()
  A-->>H: session.user.id = "7"
  H->>H: isValidId("42"), isRecord(body)
  H->>P: UPDATE tasks SET done=$1 WHERE id=$2 AND owner_id=$3
  alt owned row
    P-->>H: 1 row
    H-->>C: 200 task JSON
    C->>S: router.refresh()
    S->>P: searchTasks("7", filters)
    P-->>S: owner's rows only
    S-->>C: new tasks prop
    C-->>U: Checkbox ticked, count announced
  else missing or another user's task
    P-->>H: 0 rows
    H-->>C: 404 {"error":"Task not found"}
    C-->>U: role="alert" message, data unchanged
  end
```

Trace one concrete input. Name every boundary, value, and possible failure.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Treat a successful production build as proof that authorization works.

To see it, temporarily remove `AND owner_id = $3` from the rename `UPDATE` in
`frontend/lib/tasks.ts` **and** remove `ownerId` from that query's values array
(PostgreSQL rejects a query that receives more values than placeholders). Then
run `npm run build` and `npm run test:integration`.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** Security logic may compile perfectly while allowing cross-user access.
`npm run build` succeeds, but the integration test fails because
`renameTask(userA, taskB.id, 'Stolen')` now returns a task instead of `null`.

**Root cause:** Compilation and behavior verification answer different questions.

**Restore and verify:** Run the negative authorization tests as a separate required gate.
Restore `AND owner_id = $3` and the `ownerId` value, and confirm
`npm run test:integration` passes again.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

### 9. Interview questions and answers (30 minutes)

#### Q1. How do you explain the complete browser journey?

**Interview-ready answer:** “I go in five steps: the user event, the client
state, the HTTP request, the server's auth, validation, and SQL, and then how
fresh data returns. I always say where the source of truth is—PostgreSQL—and
what is only temporary React state.”

**Example:** Ticking a checkbox in `frontend/app/TaskBoard.tsx` calls
`toggleTask`, sets `busy`, sends `PATCH /api/tasks/42` with `{"done":true}`,
the handler runs `UPDATE ... WHERE id = $2 AND owner_id = $3`, and
`router.refresh()` re-runs `page.tsx` so React receives the new `tasks` prop.

**Senior follow-up:** “The design does two round trips per change. If that
became noticeable, I would measure it and consider optimistic UI with
`useOptimistic` plus rollback on error, or returning the updated task and
patching local state—at the cost of more client complexity.”

#### Q2. How should the backend handle running tests, type-check, build, and browser checks?

**Interview-ready answer:** “Each gate answers a different question, so I run
all of them and fail fast: lint and `tsc` in seconds, unit tests next, then
integration tests against an isolated `minitrack_test` database, a small
Playwright journey, and finally `next build`. A green build never replaces a
negative authorization test.”

**Example:** Removing `AND owner_id = $3` still passes `npm run build`, but
`npm run test:integration` fails on
`users cannot read or mutate one another tasks`.

**Senior follow-up:** “In CI I would run the same commands on every pull
request with a fresh database created from migrations, keep secrets in the CI
secret store, and make sure test logs and Playwright traces never capture
session cookies.”

#### Q3. What invariant makes the recursive tree DFS solution correct?

**Interview-ready answer:** “The depth of a node is one plus the larger depth of
its two subtrees, and an empty tree has depth zero. If each recursive call
returns the right depth for its subtree, combining them gives the right depth
for the whole tree.”

**Example:** For `3 → (9, 20 → (15, 7))`: `solve(9) = 1`,
`solve(20) = 1 + max(1, 1) = 2`, and `solve(3) = 1 + max(1, 2) = 3`.

**Senior follow-up:** “It is O(n) time and O(h) stack space. On very deep or
untrusted trees, Python's recursion limit can raise `RecursionError`, so I
would switch to an explicit stack or a BFS level count.”

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** “Today proves the system is a release candidate,
not just that it works on my machine: code passes lint, types, and build; data
access is owner-scoped and proven by negative tests; the journey works with a
keyboard and on a phone; and I can explain every step. Deployment comes next.”

**Example:** My notebook shows `pass` for `npm run lint`, `npx tsc --noEmit`,
`npm run test:unit`, `npm run test:integration`, and `npm run build`; anonymous
`curl -i http://localhost:3000/api/tasks` returns `401`; and two gaps from the
mock are fixed and re-verified.

**Senior follow-up:** “The first production signals I would add are error-rate
and p95 latency per route, database pool saturation, and a smoke test of the
real GitHub sign-in after each deploy, because injected test sessions do not
verify the OAuth configuration.”

### 10. Complexity and operational cost

- **DSA:** O(n) time and O(h) call-stack space.
- **Application:** A full gate is slower than a focused check, so use focused feedback while coding and the complete gate at milestones.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 16 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 16: run the quality gate and a full-stack mock`

<a id="prep-day-17"></a>

## Prep Day 17 — Deploy with production-safe configuration

**Date:** Monday, December 14, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Deploy with production-safe configuration.

[Prep Day 16](../lessons/interview-prep/prep-day-16.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](../lessons/interview-prep/README.md) · [Prep Day 18](../lessons/interview-prep/prep-day-18.md)

**Everything to read today is below.** The original [App Day 14](../lessons/day-14.md)
and [DSA Day 17](../dsa-python/lessons/dsa-day-17.md) remain available for
comparison. This prep day covers only the first production deployment:
separate secrets, deliberate migrations, the OAuth callback, a production
smoke test, and the rollback trigger. The clean-checkout release gate, the
two-user acceptance journey, operations documentation, and recovery drills
belong to Prep Day 18. Hosting products change frequently: choose a current
Next.js-compatible host and managed PostgreSQL service and follow their
official documentation for the clicks; keep this file's security and
verification rules regardless of vendor. Write runnable code in the named
project and practice files, not in this Markdown file.

### Learning objectives

- explain production URLs and user-visible failures in beginner-friendly language;
- explain build-time versus runtime configuration and its failure boundary;
- implement or verify the listed MiniTrack milestone;
- solve DSA Day 17 using the tree BFS pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **tree BFS** pattern?

Use this format:

```md
## Monday, December 14, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Production URLs and user-visible failures:** The deployed client must use the correct HTTPS origin and present useful failure states without exposing secrets or server internals.

**Backend focus — Build-time versus runtime configuration:** Build-time values are embedded while compiling; runtime secrets and database URLs must be supplied securely to the running service. Publicly prefixed values are not secrets.

**Today's connection:** Deployment connects immutable code, runtime configuration, database state, identity callbacks, and observable smoke tests.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 17: tree BFS"]
  DSA --> FE["Frontend: Production URLs and user-visible failures"]
  FE --> BE["Backend: Build-time versus runtime configuration"]
  BE --> App["MiniTrack: Deploy with production-safe configuration"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-17.py`](../dsa-python/practice/day-17.py)
**Pattern:** tree BFS

#### Problem: Binary Tree Level Order Traversal

You are given the **root** node of a binary tree. Return a list of lists: the
first inner list holds the value at depth 0 (the root), the next holds every
value at depth 1 from left to right, and so on. Return an empty list for an
empty tree (`root is None`).

Assumptions: each node has a `val`, a `left` child, and a `right` child; a
missing child is `None`. Values may repeat; you return them, you do not
compare them.

```python
#     2
#    / \
#   1   3
solve(TreeNode(2, TreeNode(1), TreeNode(3)))  # [[2], [1, 3]]
solve(None)                                     # []
```

The simple approach is to find the tree's height and then, for each depth,
walk the whole tree again to collect that depth's values. That repeats work.
A **queue** lets you visit every node exactly once, level by level.

#### Start coding

The practice file already contains the node class and the function to write.
Replace the `raise NotImplementedError` line with your implementation:

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

def solve(root):
    # Return a list of levels, each a list of values from left to right.
    raise NotImplementedError
```

`TreeNode(2, TreeNode(1), TreeNode(3))` builds a node with value `2`, left
child `1`, and right child `3`. A leaf is just `TreeNode(5)`, because `left`
and `right` default to `None`.

A **queue** is first-in, first-out: the node added first leaves first.
Python's `collections.deque` is a double-ended queue. Import it before using
it:

```python
from collections import deque

queue = deque([10])   # deque([10])
queue.append(20)      # add on the right: deque([10, 20])
queue.popleft()       # remove from the left and return 10
len(queue)            # 1
```

`popleft()` is O(1). A plain list's `pop(0)` must shift every remaining item,
so it is O(n).

```mermaid
flowchart TD
  Start{Root is None?} -- Yes --> Empty[Return empty list]
  Start -- No --> Init[Queue holds root; levels is empty]
  Init --> Loop{Queue empty?}
  Loop -- No --> Size[size = current queue length]
  Size --> Take[Pop exactly size nodes, append their values to level]
  Take --> Kids[Append each popped node's existing children to the queue]
  Kids --> Save[Append level to levels]
  Save --> Loop
  Loop -- Yes --> Done[Return levels]
```

#### Invariant to say aloud

Process nodes level by level with a queue, measuring the current queue length before adding the next level.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 17
python3 -m unittest discover -s dsa-python/tests -v
python3 dsa-python/practice/day-17.py
```

**Expected observation:** Day 17 uses tree objects, so the day checker has no
built-in examples. It prints `This problem uses linked-list/tree structures;
write your own object-based tests.` and exits successfully **even if `solve`
is not written yet**. The real check for your code is the third command, which
runs the temporary asserts below. The reference suite should still pass; it
tests the completed solution with the tree `2 → (1, 3)`.

Temporarily add these checks below your `solve` function in the practice file:

```python
if __name__ == '__main__':
    assert solve(None) == []
    assert solve(TreeNode(7)) == [[7]]
    assert solve(TreeNode(2, TreeNode(1), TreeNode(3))) == [[2], [1, 3]]
    #     3
    #    / \
    #   9   20
    #      /  \
    #     15   7
    tree = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
    assert solve(tree) == [[3], [9, 20], [15, 7]]
    # A left-leaning chain has one node per level.
    chain = TreeNode(1, TreeNode(2, TreeNode(3)))
    assert solve(chain) == [[1], [2], [3]]
    # Duplicates are kept; missing children are skipped.
    assert solve(TreeNode(5, None, TreeNode(5))) == [[5], [5]]
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple solution</summary>

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

def solve(root):
    def height(node):
        if node is None:
            return 0
        return 1 + max(height(node.left), height(node.right))

    def collect(node, depth, target, out):
        # Walk down until reaching the requested depth.
        if node is None:
            return
        if depth == target:
            out.append(node.val)
            return
        collect(node.left, depth + 1, target, out)
        collect(node.right, depth + 1, target, out)

    levels = []
    for target in range(height(root)):
        level = []
        collect(root, 0, target, level)
        levels.append(level)
    return levels
```

</details>

This is correct because visiting left before right keeps each level in left
to right order. It restarts from the root for every depth, so with height `h`
it costs O(n·h) time. A balanced tree has `h ≈ log n`, but a chain has
`h = n`, so the worst case is O(n²). Recursion uses O(h) call-stack space.

#### Optimized code — reveal after attempting

<details>
<summary>Show the level order solution</summary>

```python
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

def solve(root):
    if root is None:
        return []
    queue = deque([root])
    levels = []
    while queue:
        level = []
        for _ in range(len(queue)):  # only nodes from this depth
            node = queue.popleft()
            level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        levels.append(level)
    return levels
```

</details>

`range(len(queue))` is evaluated **once**, when the `for` loop starts, so
children appended during the loop wait for the next level. Every node is
appended and popped exactly once: O(n) time. The queue holds at most about
one level plus part of the next, so extra space is O(w), where `w` is the
maximum width (up to about n/2 in a full tree).

Trace for the tree `3 → (9, 20 → (15, 7))`:

| Level loop | Queue at start | `len(queue)` | Popped in order | Children appended | `levels` after |
|---:|---|---:|---|---|---|
| 1 | `[3]` | 1 | 3 | 9, 20 | `[[3]]` |
| 2 | `[9, 20]` | 2 | 9, 20 | 15, 7 | `[[3], [9, 20]]` |
| 3 | `[15, 7]` | 2 | 15, 7 | none | `[[3], [9, 20], [15, 7]]` |
| — | `[]` | — | loop stops | — | return |

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “I compute the tree's height. Then for each depth
from 0 to height − 1, I do a depth-first walk from the root and collect the
nodes at exactly that depth. It is correct but repeats work: O(n·h) time,
which becomes O(n²) for a chain-shaped tree.”

**Example:** For `1 → 2 → 3` (a chain), depth 2 requires walking past 1 and 2
again, after depth 1 already walked past 1.

**Follow-up:** A one-pass DFS that passes `depth` and appends to
`levels[depth]` is also O(n). It is a valid alternative; BFS is more natural
when the problem says “level by level”.

##### DSA Q2. What is the core idea of the BFS solution?

**Interview-ready answer:** “A queue releases nodes in the order they were
added, so if I add children after their parents, all depth-d nodes leave
before any depth-d+1 node. Before each level, I record how many nodes are in
the queue; that number is exactly the size of the current level.”

**Example:** When the queue is `[9, 20]`, the size is 2. I pop 9 and 20 and
push 15 and 7, but I stop after two pops, so `[9, 20]` becomes one level.

**Follow-up:** Without the size snapshot you still get BFS order, but you lose
the level boundaries. An alternative is to push `(node, depth)` pairs.

##### DSA Q3. Why is the solution correct?

**Interview-ready answer:** “Invariant: at the start of each `while` iteration
the queue contains exactly the nodes of one depth, left to right. It is true
initially because the queue holds only the root. During the iteration I pop
all of them and append their children in left-then-right order, so afterwards
the queue holds exactly the next depth, still left to right.”

**Example:** After the first iteration the queue changes from `[3]` to
`[9, 20]`, the complete depth-1 level.

**Follow-up:** The loop terminates because each node enters the queue once
and every iteration removes at least one node.

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “O(n) time, because each node is pushed and popped
once and each pop does constant work. Extra space is O(w) for the queue, where
w is the maximum level width; the output itself also stores all n values.”

**Example:** A perfect tree with 15 nodes has 8 leaves on its last level, so
the queue reaches about n/2. A chain never holds more than one node.

**Follow-up:** Using `list.pop(0)` instead of `deque.popleft()` makes each
pop O(n) and the whole algorithm O(n²) in the worst case.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “An empty tree, a single node, a node with only a
right child, a left-only chain, a complete tree, and repeated values.”

**Example:** `solve(None)` returns `[]`, not `[[]]`. `TreeNode(5, None,
TreeNode(5))` returns `[[5], [5]]`.

**Follow-up:** Why check `if node.left`? Because `None` children must not be
queued; popping `None` and reading `.val` would raise `AttributeError`.

##### DSA Q6. How would you adapt this for zigzag order or the right-side view?

**Interview-ready answer:** “The level loop stays the same. For zigzag I
reverse every second `level` list before saving it. For the right-side view I
keep only the last value of each level.”

**Example:** For `3 → (9, 20 → (15, 7))`, zigzag gives
`[[3], [20, 9], [15, 7]]` and the right-side view gives `[3, 20, 7]`.

**Follow-up:** Minimum depth is another variant: return the current level
number at the first leaf you pop, which can stop early instead of visiting all
n nodes.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

The deployed client must use the correct HTTPS origin and present useful failure states without exposing secrets or server internals.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.

#### How

**1. MiniTrack's browser code already avoids hard-coded origins.** Every
mutation in `frontend/app/TaskBoard.tsx` uses a relative, same-origin path:

```ts
// Relative URL: the browser sends it to whichever origin served the page.
const response = await fetch('/api/tasks', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: cleanTitle }),
});
```

On your laptop that origin is `http://localhost:3000`; in production it is
`https://YOUR_PRODUCTION_DOMAIN`. Nothing in the client needs a configured
API URL, and no CORS policy is needed. If you ever see `localhost` in a
production network request, a hard-coded URL slipped in.

**2. The only origin you must configure is the OAuth callback.** GitHub sends
the user back to an exact URL registered in the GitHub OAuth app. Production
needs its **own** OAuth app:

```text
Homepage: https://YOUR_PRODUCTION_DOMAIN
Callback: https://YOUR_PRODUCTION_DOMAIN/api/auth/callback/github
```

`/api/auth/callback/github` is served by the Auth.js catch-all route you built
on App Day 10 (`frontend/app/api/auth/[...nextauth]/route.ts`).

**3. User-visible failures must be helpful but not revealing.** The Route
Handlers already return a generic body for server failures and log details
only on the server:

```ts
} catch (error: unknown) {
  console.error('POST /api/tasks failed:', error); // server log only
  return Response.json({ error: 'Internal server error' }, { status: 500 });
}
```

The client then shows `Could not add task (500)`: the user learns that the
action failed, and no SQL, host name, or credential reaches the browser.

**Production check for the page:** the App Day 5 version of
`frontend/app/page.tsx` printed the raw database message
(`Could not load tasks: {error}. Check PostgreSQL and DATABASE_URL.`). That is
useful on your laptop but can reveal database host names in production. If
your page still contains that display, change only the `catch` block in
`TaskContent` so the message is generic and the detail stays in the server
log:

```tsx
  } catch (err) {
    console.error('Loading tasks failed:', err); // visible only in host logs
    error = 'Unable to load tasks';
  }
```

The rendered text then reads `Could not load tasks: Unable to load tasks.
Check PostgreSQL and DATABASE_URL.` Mentioning a variable **name** is
acceptable; printing its **value** never is.

Files to open deliberately:

- `frontend/.env.local.example`
- `frontend/package.json`
- `backend/sql`

Answer before deploying:

- Which value is persistent, and which value is temporary interaction state?
  (Tasks live in production PostgreSQL; the input text, `busy`, and `error`
  live only in the browser tab.)
- What starts this behavior? (A user opening the HTTPS URL or pressing
  **Sign in with GitHub**.)
- What should the user see while work is pending? (The Suspense fallback and
  disabled buttons, exactly as locally.)
- What should remain unchanged when the operation fails? (The database rows
  and every secret; only a generic message appears.)

### 5. Backend guided study (1 hour 30 minutes)

#### What

Build-time values are embedded while compiling; runtime secrets and database URLs must be supplied securely to the running service. Publicly prefixed values are not secrets.

#### Build time versus run time, one idea at a time

- **Build time** is when `npm run build` compiles and bundles the app. Any
  `process.env.NEXT_PUBLIC_SOMETHING` used in client code is **copied into the
  JavaScript files** sent to every visitor. Treat it as public.
- **Run time** is when the deployed server handles a request. Server-only code
  reads `process.env.DATABASE_URL` or `AUTH_SECRET` at that moment, from the
  host's secret manager. The value never enters a browser file.

MiniTrack's database module from App Day 3, `frontend/lib/db.ts`, already
follows the runtime rule:

```ts
import 'server-only'; // build fails if a Client Component imports this file
import { Pool } from 'pg';

// Cache the pool across Next.js development reloads.
const globalForPg = globalThis as typeof globalThis & { taskPool?: Pool };

export function getPool(): Pool {
  // Read on the server when the first query runs, not baked into a bundle.
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL is missing. Copy frontend/.env.local.example to .env.local and edit it.');
  }
  globalForPg.taskPool ??= new Pool({ connectionString, max: 5 });
  return globalForPg.taskPool;
}
```

Because the variable is read inside `getPool()`, a build can succeed with no
database at all. That is why `npm run build` is **not** a smoke test.

Auth.js (App Day 10, `frontend/auth.ts`) reads `AUTH_SECRET`,
`AUTH_GITHUB_ID`, and `AUTH_GITHUB_SECRET` from the server environment by
naming convention; the code contains no secret:

```ts
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub], // credentials come from AUTH_GITHUB_* at run time
});
```

(Your Day 11 version also passes `adapter: PostgresAdapter(getPool())` and a
`session` callback; that does not change where secrets come from.)

#### The production contract

Record names and purposes, never values:

| Setting | Purpose | Where it lives |
|---|---|---|
| Production app URL | HTTPS origin users visit | Host settings / DNS |
| `DATABASE_URL` | Managed production PostgreSQL | Host secret manager |
| `AUTH_SECRET` | Production-only session secret | Host secret manager |
| `AUTH_GITHUB_ID` | Production GitHub OAuth app ID | Host secret manager |
| `AUTH_GITHUB_SECRET` | Production GitHub OAuth secret | Host secret manager |
| Node.js version | Runtime compatible with the app | Host build settings |

Keep `frontend/.env.local.example` as a **names-only** template that is safe
to commit. After App Day 10 it can document every server variable with
placeholders:

```env
# Copy to .env.local for local development. Never commit .env.local.
DATABASE_URL=postgresql://YOUR_MAC_USER@localhost:5432/minitrack
AUTH_SECRET=GENERATE_WITH_npx_auth_secret
AUTH_GITHUB_ID=YOUR_GITHUB_CLIENT_ID
AUTH_GITHUB_SECRET=YOUR_GITHUB_CLIENT_SECRET
```

Localhost and production must not share secrets: create a new `AUTH_SECRET`
and a separate GitHub OAuth app for production. Never upload `.env.local`.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

#### Migrations run as a deliberate step

The schema is created by ordered SQL files, not by app startup:

| Order | File | What it does |
|---:|---|---|
| 1 | `backend/sql/schema.sql` | Creates `tasks` (App Day 3) |
| 2 | `backend/sql/migrations/002-auth-users.sql` | Auth.js `users`, `accounts`, `sessions`, `verification_tokens` (App Day 11) |
| 3 | `backend/sql/migrations/003-task-owners.sql` | `DELETE FROM tasks`, then adds required `owner_id` (App Day 11) |

**Warning:** file 3 deletes every task. It is acceptable **only** while
initializing a brand-new, empty production database. Never rerun it after
users have data; use the staged nullable → backfill → `NOT NULL` plan instead.

### 6. MiniTrack implementation (1 hour)

**Milestone source:** Day 14 managed deployment, secrets, migrations, and smoke tests

```mermaid
flowchart TD
  A["1. Tests and build pass"] --> B["2. Backup / migration plan ready"]
  B --> C["3. Configure production secrets"]
  C --> D["4. Apply reviewed migrations"]
  D --> E["5. Deploy immutable build"]
  E --> F["6. Run HTTPS smoke tests"]
  F --> G{"Healthy?"}
  G -- Yes --> H["Release"]
  G -- No --> I["Rollback and investigate"]
```

#### Step 1: Pass the local release gate

From `frontend/` (the test scripts were added on App Day 9):

```bash
npm ci
npm run test:unit
npm run test:integration
npm run test:e2e
npx tsc --noEmit
npm run build
```

Then prove that no database URL or public secret variable reached browser
code:

```bash
grep -rn "NEXT_PUBLIC_" app lib auth.ts || echo "OK: no public env variables"
grep -rlE 'postgres(ql)?://' .next/static \
  && echo "STOP: a database URL is in browser assets" \
  || echo "OK: no database URL in browser assets"
```

**Expected observation:** every command passes and both checks print `OK`.

#### Step 2: Create production services

1. Create a managed PostgreSQL database and require encrypted connections
   according to the provider's guidance.
2. Create a **separate** GitHub OAuth app with the HTTPS homepage and callback
   shown in section 4.
3. Generate a new production `AUTH_SECRET` (for example with `npx auth
   secret`, copying the value into the host, not into a committed file).
4. Enter `DATABASE_URL`, `AUTH_SECRET`, `AUTH_GITHUB_ID`, and
   `AUTH_GITHUB_SECRET` in the host's secret manager.

#### Step 3: Back up, then migrate

Take a provider backup or restore point first, even for a new database. Then
load the production URL into your current terminal **without** saving it in a
file or shell history, and confirm the database is empty:

```bash
read -rs DATABASE_URL   # paste the production URL, press Enter (nothing echoes)
psql "$DATABASE_URL" -c '\dt'
```

**Expected observation:** `Did not find any relations.` Only then run the
ordered migrations from the repository root:

```bash
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 \
  -f backend/sql/schema.sql
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 \
  -f backend/sql/migrations/002-auth-users.sql
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 \
  -f backend/sql/migrations/003-task-owners.sql
psql "$DATABASE_URL" -c '\dt'
```

`ON_ERROR_STOP=1` makes `psql` stop at the first error instead of continuing
with a half-applied schema. The final `\dt` should list `tasks`, `users`,
`accounts`, `sessions`, and `verification_tokens`. Close the terminal when
finished so the variable disappears.

#### Step 4: Deploy the tested revision

Deploy the same commit that passed Step 1. In the build logs, variable
**names** may appear; values must not. If the host shows a value, rotate it.

#### Step 5: Run the production smoke test

Replace `YOUR_PRODUCTION_DOMAIN` and run:

```bash
curl -i https://YOUR_PRODUCTION_DOMAIN/api/health
curl -i https://YOUR_PRODUCTION_DOMAIN/api/tasks
curl -sI http://YOUR_PRODUCTION_DOMAIN | head -n 1
```

**Expected observations:**

1. `/api/health` returns `200` with `{"ok":true}`. It proves the app is
   serving requests; it does **not** query PostgreSQL.
2. Anonymous `/api/tasks` returns `401` with `{"error":"Unauthorized"}`.
   A `200` with data means authentication is missing; a `500` usually means
   a missing secret or unreachable database.
3. Plain `http://` redirects (`301`/`308`) to HTTPS, or the host refuses it.

Then in a browser:

1. Open `https://YOUR_PRODUCTION_DOMAIN`, choose **Sign in with GitHub**, and
   confirm you return to the production domain, not `localhost`.
2. In developer tools → Application → Cookies, confirm the session cookie is
   `HttpOnly` and `Secure`.
3. Create, complete, filter, and delete one task; reload to confirm it
   persisted in production PostgreSQL.
4. Sign in with a second GitHub account in a private window and confirm the
   first account's task is absent.
5. Sign out and confirm the private page shows the sign-in prompt again.

Do not experiment with destructive SQL in production.

#### Step 6: Write the rollback trigger

Add this to your deployment notes:

```md
## Rollback triggers
Roll back the application when any of these happen after a release:
- migrations fail or post-migration data checks fail;
- the OAuth callback loops or rejects valid users;
- one user can see or change another user's tasks;
- the error rate rises materially above the previous release;
- the application cannot reach PostgreSQL.

Owner of the rollback: YOUR_NAME. Previous build: redeploy the last good
revision from the host dashboard. Schema changes are NOT undone by an app
rollback; see the database recovery plan (Prep Day 18).
```

#### Failure checks

| Symptom | Most likely cause | Where to look |
|---|---|---|
| GitHub shows `redirect_uri is not associated` | Callback still points to `localhost` | Production OAuth app settings |
| Every task request returns `500` | Missing or wrong `DATABASE_URL` | Host runtime logs (names only) |
| Sign-in fails with a configuration error | Missing `AUTH_SECRET` or `AUTH_GITHUB_*` | Host secret manager |
| Build succeeds but the site errors | Build never touches PostgreSQL or OAuth | Smoke test, not build logs |

**Expected observation:** the user-visible milestone works, its important
failure path is explicit, and existing behavior remains intact.

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant U as Release tester
  participant H as Production host (Next.js)
  participant G as GitHub OAuth
  participant P as Managed PostgreSQL
  U->>H: GET https://YOUR_PRODUCTION_DOMAIN/api/health
  H-->>U: 200 {"ok":true}
  U->>H: Sign in with GitHub
  H->>G: Redirect with production callback URL
  G-->>H: /api/auth/callback/github?code=...
  H->>P: Auth.js stores user and session
  H-->>U: Secure HttpOnly session cookie
  U->>H: POST /api/tasks {"title":"Smoke test"}
  H->>H: auth() then normalizeTitle()
  H->>P: INSERT ... VALUES ($1, $2) with owner_id
  P-->>H: New row
  H-->>U: 201, then router.refresh() shows the task
  U->>H: Sign out, then GET /api/tasks
  H-->>U: 401 Unauthorized
```

Trace one concrete input. Name every boundary, value, and possible failure.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Place a database password in a public client environment variable.

Do this only locally, with your local database, and never deploy it. In
`frontend/.env.local` add `NEXT_PUBLIC_DATABASE_URL` with the same value as
`DATABASE_URL`, reference `process.env.NEXT_PUBLIC_DATABASE_URL` in a
`console.log` inside `TaskBoard.tsx`, run `npm run build`, then repeat the
`.next/static` check from section 6.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** The credential can be included in browser-delivered code.

**Root cause:** The trust boundary between server configuration and public configuration was violated.

**Restore and verify:** Rotate the credential and keep it only in the deployment platform's server-side secret store.

Locally: delete the line and the `console.log`, rebuild, and confirm the
check prints `OK`. If this had ever reached production, removing the line
would not be enough; anyone who loaded the page could have copied it.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

### 9. Interview questions and answers (30 minutes)

#### Q1. What is production URLs and user-visible failures?

**Interview-ready answer:** “In production the browser talks to an HTTPS
origin, so nothing in client code should hard-code `localhost`. MiniTrack's
`TaskBoard` uses relative paths like `/api/tasks`, so the same build works on
any origin. The only place the origin must be registered is the GitHub OAuth
callback. When something fails, the user sees a short, actionable message,
and the details go to server logs.”

**Example:** `fetch('/api/tasks', { method: 'POST', ... })` reaches
`https://YOUR_PRODUCTION_DOMAIN/api/tasks`. If PostgreSQL is down, the Route
Handler logs the error and returns `{ error: 'Internal server error' }` with
status 500; the board shows `Could not add task (500)`.

**Senior follow-up:** Once the API becomes a separate service on another
origin, you need a configured base URL, CORS rules, and cookie `SameSite`
decisions. Add a request ID to error responses so support can correlate a
user report with a log line without exposing internals.

#### Q2. How should the backend handle build-time versus runtime configuration?

**Interview-ready answer:** “Build-time values are copied into compiled
output; anything prefixed `NEXT_PUBLIC_` becomes public JavaScript. Runtime
values are read by the server while handling a request and come from the
host's secret manager. `DATABASE_URL`, `AUTH_SECRET`, and the GitHub secret
must stay runtime, server-only values.”

**Example:** `getPool()` in `frontend/lib/db.ts` reads
`process.env.DATABASE_URL` on the first query and imports `server-only`, so a
Client Component cannot even import it. That is also why `npm run build`
succeeded with PostgreSQL stopped.

**Senior follow-up:** Know whether your host bakes variables into an image or
injects them when an instance starts: changing a secret may require a restart
or redeploy. Use separate credentials per environment with least privilege,
rotation, and audited access so a leaked preview secret cannot touch
production.

#### Q3. What invariant makes the tree BFS solution correct?

**Interview-ready answer:** Process nodes level by level with a queue, measuring the current queue length before adding the next level.

**Example:** For `3 → (9, 20 → (15, 7))`: the queue `[3]` has size 1 and
produces `[3]`; `[9, 20]` has size 2 and produces `[9, 20]`; `[15, 7]`
produces `[15, 7]`. Result: `[[3], [9, 20], [15, 7]]`.

**Senior follow-up:** O(n) time assumes `deque.popleft()` is O(1); with
`list.pop(0)` it degrades to O(n²). Space is O(w) for the queue. For a very
wide tree, a DFS that writes to `levels[depth]` uses O(h) stack instead, but
risks Python's recursion limit on deep trees.

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** Deployment connects immutable code, runtime configuration, database state, identity callbacks, and observable smoke tests.

**Example:** The commit that passed `npm run test:e2e` is deployed unchanged.
The host injects `DATABASE_URL` and `AUTH_*`. Migrations 1–3 were applied by
hand with `ON_ERROR_STOP=1`. GitHub returns to
`/api/auth/callback/github` on the production domain. The smoke test signs
in, creates a task, reloads, and checks that an anonymous `/api/tasks` returns
`401`.

**Senior follow-up:** First measure the production error rate and the
database connection count: each server instance opens up to `max: 5` pooled
connections, so scaling instances can exhaust the managed database's
connection limit before CPU becomes a problem. The first security risk to
check is secret leakage into browser bundles or logs.

### 10. Complexity and operational cost

- **DSA:** O(n) time and O(w) space for maximum tree width.
- **Application:** Managed services trade direct infrastructure control for operational convenience. Track application, database, egress, and build costs separately.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 17 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 17: deploy with production-safe configuration`

<a id="prep-day-18"></a>

## Prep Day 18 — Verify release and recovery

**Date:** Tuesday, December 15, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Verify release and recovery.

[Prep Day 17](../lessons/interview-prep/prep-day-17.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](../lessons/interview-prep/README.md) · [Prep Day 19](../lessons/interview-prep/prep-day-19.md)

**Everything to read today is below.** The original [App Day 15](../lessons/day-15.md)
and [DSA Day 18](../dsa-python/lessons/dsa-day-18.md) remain available for
comparison. This prep day covers verifying the release that Prep Day 17
deployed: the clean-checkout release gate, the two-user acceptance journey,
operations and recovery documentation, a local backup-and-restore drill, and
the five-minute system explanation. It adds no new application feature.
Production configuration and the first deployment belong to Prep Day 17; the
frontend interview review starts on Prep Day 19. Write runnable code in the
named project and practice files, not in this Markdown file.

### Learning objectives

- explain production smoke testing in beginner-friendly language;
- explain application rollback versus database recovery and its failure boundary;
- implement or verify the listed MiniTrack milestone;
- solve DSA Day 18 using the DFS with bounds pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **DFS with bounds** pattern?

Use this format:

```md
## Tuesday, December 15, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Production smoke testing:** A smoke test checks the smallest critical journey after deployment: load, sign in, create, update, and read the expected result.

**Backend focus — Application rollback versus database recovery:** Rolling back application code does not automatically reverse a schema or data migration. Database changes need compatibility planning, backups, and tested recovery steps.

**Today's connection:** A release is complete only when the team can verify it, explain it, and recover from failure.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 18: DFS with bounds"]
  DSA --> FE["Frontend: Production smoke testing"]
  FE --> BE["Backend: Application rollback versus database recovery"]
  BE --> App["MiniTrack: Verify release and recovery"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-18.py`](../dsa-python/practice/day-18.py)
**Pattern:** DFS with bounds

#### Problem: Validate Binary Search Tree

You are given the **root** of a binary tree. Return `True` if it is a valid
**binary search tree (BST)** and `False` otherwise. In a valid BST, for
**every** node:

- every value in its left subtree is **strictly smaller** than the node's value;
- every value in its right subtree is **strictly larger** than the node's value.

Assumptions: values are numbers; an empty tree (`None`) is valid; duplicates
are **invalid** because the comparison is strict.

```python
#     2
#    / \
#   1   3
solve(TreeNode(2, TreeNode(1), TreeNode(3)))  # True

#     5
#    / \
#   1   4
#      / \
#     3   6
solve(TreeNode(5, TreeNode(1), TreeNode(4, TreeNode(3), TreeNode(6))))  # False
```

The second tree fails because `4` is the right child of `5`, so it must be
**larger** than 5, and it is not. A harder trap is the tree
`5 → (4, 6 → (3, 7))`: every parent–child pair looks correct (`3 < 6`), but
`3` sits in the right subtree of `5`, so it must also be larger than 5. You
need limits passed down from **all** ancestors.

#### Start coding

The practice file already contains the node class and the function to write:

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

def solve(root):
    # Return True when the whole tree is a strict BST.
    raise NotImplementedError
```

Two Python ideas help here.

1. **A helper function inside `solve`.** You may define `def valid(node,
   lower, upper):` inside `solve` and call it recursively. It sees nothing
   special from outside; it simply keeps the extra parameters out of the
   public signature.
2. **Infinity as a starting limit.** `float('inf')` is larger than every
   ordinary number and `float('-inf')` is smaller than every ordinary number.
   Python also allows a chained comparison: `lower < x < upper` means
   `lower < x and x < upper`.

```python
float('-inf') < -1000000 < float('inf')   # True
lower, upper = 5, 10
lower < 7 < upper                          # True
lower < 5 < upper                          # False (5 is not strictly greater)
```

```mermaid
flowchart TD
  Start["valid(root, -inf, +inf)"] --> Empty{node is None?}
  Empty -- Yes --> True1[Return True]
  Empty -- No --> Check{"lower < node.val < upper?"}
  Check -- No --> False1[Return False]
  Check -- Yes --> Left["valid(node.left, lower, node.val)"]
  Left --> LeftOk{Left valid?}
  LeftOk -- No --> False1
  LeftOk -- Yes --> Right["valid(node.right, node.val, upper)"]
  Right --> Result[Return the right result]
```

#### Invariant to say aloud

Every BST node must remain strictly inside bounds inherited from all ancestors, not only compare with its parent.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 18
python3 -m unittest discover -s dsa-python/tests -v
python3 dsa-python/practice/day-18.py
```

**Expected observation:** Day 18 uses tree objects, so the day checker has no
built-in examples. It prints `This problem uses linked-list/tree structures;
write your own object-based tests.` and exits successfully **even if `solve`
is not written yet**. The third command runs your temporary asserts below and
is the real check. The reference suite should still pass; it checks that
`2 → (1, 3)` is valid.

Temporarily add these checks below your `solve` function in the practice file:

```python
if __name__ == '__main__':
    assert solve(None) is True
    assert solve(TreeNode(1)) is True
    assert solve(TreeNode(2, TreeNode(1), TreeNode(3))) is True
    assert solve(TreeNode(5, TreeNode(1), TreeNode(4, TreeNode(3), TreeNode(6)))) is False
    # Parent-child pairs look fine, but 3 is in the right subtree of 5.
    assert solve(TreeNode(5, TreeNode(4), TreeNode(6, TreeNode(3), TreeNode(7)))) is False
    # Duplicates break the strict rule on either side.
    assert solve(TreeNode(2, TreeNode(2))) is False
    assert solve(TreeNode(2, None, TreeNode(2))) is False
    # Negative values and a right-leaning chain.
    assert solve(TreeNode(-3, None, TreeNode(-1, None, TreeNode(0)))) is True
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple solution</summary>

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

def solve(root):
    def all_values(node):
        # Every value in this subtree, collected again for each caller.
        if node is None:
            return []
        return all_values(node.left) + [node.val] + all_values(node.right)

    def valid(node):
        if node is None:
            return True
        if any(value >= node.val for value in all_values(node.left)):
            return False
        if any(value <= node.val for value in all_values(node.right)):
            return False
        return valid(node.left) and valid(node.right)

    return valid(root)
```

</details>

This applies the definition literally: for every node, compare it with every
value below it. Each node's values are collected once per ancestor, so the
time is O(n·h), which is O(n²) for a chain. It also builds temporary lists of
up to O(n) values plus O(h) call stack.

#### Optimized code — reveal after attempting

<details>
<summary>Show the bounds solution</summary>

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

def solve(root):
    def valid(node, lower, upper):
        if node is None:
            return True
        # The node must fit inside limits set by ALL its ancestors.
        if not (lower < node.val < upper):
            return False
        # Going left tightens the upper limit; going right tightens the lower.
        return (valid(node.left, lower, node.val)
                and valid(node.right, node.val, upper))
    return valid(root, float('-inf'), float('inf'))
```

</details>

Each node is checked once with two comparisons: O(n) time. The recursion
depth equals the tree height, so extra space is O(h): O(log n) for a
balanced tree and O(n) for a chain. `and` stops early, so the right subtree
is skipped once the left subtree fails.

Trace for the trap tree `5 → (4, 6 → (3, 7))`:

| Call | Node | `lower` | `upper` | `lower < val < upper`? | Result |
|---:|---:|---|---|---|---|
| 1 | 5 | -inf | +inf | yes | check children |
| 2 | 4 (left of 5) | -inf | 5 | yes | leaf: True |
| 3 | 6 (right of 5) | 5 | +inf | yes | check children |
| 4 | 3 (left of 6) | 5 | 6 | **no**, 3 is not > 5 | False |
| — | back to 6, then 5 | — | — | — | `False` returned to the caller |

Call 4 is where a parent-only check would wrongly pass, because `3 < 6`.

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “For every node, I collect all values in its left
subtree and confirm each is smaller, then all values in its right subtree and
confirm each is larger. Then I repeat for the children. It follows the
definition exactly, but each value is re-collected for every ancestor, so it
is O(n·h) time, O(n²) for a chain.”

**Example:** For `5 → (4, 6 → (3, 7))`, the right-subtree values of 5 are
`[3, 6, 7]`; `3 <= 5`, so return `False`.

**Follow-up:** Why not only compare each node with its direct children? That
is O(n) but wrong: the same tree passes every parent–child check.

##### DSA Q2. What is the core idea of the bounds solution?

**Interview-ready answer:** “Every node inherits an allowed open interval
from its ancestors. The root may be anything. Going left, the parent's value
becomes the new upper limit; going right, it becomes the new lower limit. A
node is valid only if it falls strictly inside its interval and both subtrees
are valid.”

**Example:** Node 3 under `5 → right → 6 → left` receives `(5, 6)`. Three is
outside that interval.

**Follow-up:** The interval only gets narrower as you go down, which is why
one comparison per node is enough.

##### DSA Q3. Why is the solution correct?

**Interview-ready answer:** “Claim: `valid(node, lower, upper)` returns True
exactly when every value in that subtree lies strictly between `lower` and
`upper` and the subtree is ordered. By induction on height: `None` is
trivially valid. For a real node, the BST rule for this node and every
ancestor is exactly ‘inside the inherited bounds’, and passing `node.val` as
the new bound enforces this node's rule on all its descendants.”

**Example:** In `2 → (1, 3)`, 1 is checked against `(-inf, 2)` and 3 against
`(2, +inf)`; both pass, so the tree is valid.

**Follow-up:** An equivalent proof: an in-order traversal of a valid BST is
strictly increasing. Both views give O(n) algorithms.

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “O(n) time because each node is visited once with
constant work. O(h) extra space for the recursion stack, where h is the
height: O(log n) if balanced, O(n) if the tree is a chain.”

**Example:** A chain of 10,000 nodes would need 10,000 nested calls.

**Follow-up:** Python's default recursion limit is about 1,000, so a deep
chain raises `RecursionError`. In production code use an explicit stack of
`(node, lower, upper)` tuples, which has the same O(h) space without the
interpreter limit.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “An empty tree, a single node, duplicates on the
left and on the right, a violation deep in the tree, negative numbers, and a
skewed chain.”

**Example:** `TreeNode(2, TreeNode(2))` returns `False` because `2 < 2` is
false. `solve(None)` returns `True`.

**Follow-up:** Infinity sentinels have a caveat: a node whose value is itself
`float('inf')` would fail. If that is allowed, pass `None` to mean “no limit”
and check `lower is None or lower < val`.

##### DSA Q6. How would you solve it with an in-order traversal instead?

**Interview-ready answer:** “I visit left, node, right, and remember only the
previous value. If any value is less than or equal to the previous one, the
tree is invalid. That is O(n) time and O(h) stack, and it needs only one
remembered number instead of two bounds.”

**Example:** In-order on `5 → (4, 6 → (3, 7))` gives `4, 5, 3, ...`; `3 <= 5`
fails at the third value.

**Follow-up:** If the interviewer says duplicates are allowed on the left, the
bounds version changes to `lower < val <= upper` on the left side. Clarify the
duplicate rule before coding.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

A smoke test checks the smallest critical journey after deployment: load, sign in, create, update, and read the expected result.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.

#### How

**Smoke test versus test suite.** Your App Day 9 Playwright test
`frontend/test/e2e/tasks.spec.ts` runs against a **test** database before
release:

```ts
test('creates, completes, and persists a task', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('Task title').fill('Practice testing');
  await page.getByRole('button', { name: /add task/i }).click();

  await expect(page.getByText('Practice testing')).toBeVisible();
  await page.getByLabel('Complete Practice testing').check();
  await page.reload();

  await expect(page.getByLabel('Complete Practice testing')).toBeChecked();
});
```

It truncates `tasks` before each test, so it must **never** point at
production. A production smoke test is the same idea done gently by a person
(or a non-destructive script) against the real site: a few critical steps,
no data wiping.

**The deployed acceptance journey (App Day 15).** Run it in two browser
profiles or one normal and one private window.

As **User A**:

1. Sign in with GitHub.
2. Create a task called `Release check A`.
3. Rename it to `Release check A renamed` and tick its checkbox.
4. Search with `?q=release&status=done`, copy the URL, and open it in a new
   tab: the same filtered result should appear.
5. Reload and confirm everything persisted.
6. Note the task's ID: in developer tools → Network, click the PATCH request
   and read the number in `/api/tasks/ID`.

As **User B** (the second GitHub account):

1. Sign in separately and confirm User A's task is absent.
2. Try User A's known ID from the browser console:

```js
// Run in User B's tab. Replace 123 with User A's task ID.
await fetch('/api/tasks/123', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ done: false }),
}).then(response => response.status);
```

**Expected observation:** `404`. The owner-scoped SQL
`WHERE id = $2 AND owner_id = $3` matched no row, and the response does not
reveal whether the ID exists for someone else. Reload User A's tab: the task
must still be completed and renamed.

Finally, sign out and confirm the private page shows the sign-in prompt and a
console `fetch('/api/tasks').then(r => r.status)` returns `401`.

Files to open deliberately:

- `README.md`
- `docs/ARCHITECTURE.md`
- `docs/APP_OVERVIEW.md`

Answer before verifying:

- Which value is persistent, and which value is temporary interaction state?
  (Tasks and users are in PostgreSQL; the edit draft and `busy` flag are tab
  state that disappears on reload.)
- What starts this behavior? (A release finishing, or a tester opening the
  production URL.)
- What should the user see while work is pending? (Disabled buttons and the
  Suspense fallback, never a blank page.)
- What should remain unchanged when the operation fails? (User A's row when
  User B's PATCH is rejected.)

### 5. Backend guided study (1 hour 30 minutes)

#### What

Rolling back application code does not automatically reverse a schema or data migration. Database changes need compatibility planning, backups, and tested recovery steps.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

#### Two different undo buttons

- **Application rollback** redeploys an earlier build. It is fast and safe
  when the database still has the shape that older build expects.
- **Database recovery** restores data or schema from a backup or provider
  restore point, or rolls *forward* with a reviewed fix. It is slower, may
  lose writes made after the backup, and must be rehearsed.

Why they differ: App Day 11's `003-task-owners.sql` runs `DELETE FROM tasks`
and adds a required column. Redeploying the App Day 10 build afterwards would
not bring deleted tasks back, and the old `INSERT INTO tasks (title)` would
fail because `owner_id` is now `NOT NULL`.

#### Make migrations backward-compatible (expand and contract)

For a database that already holds user data, App Day 11 says: add a nullable
column, backfill, verify, then add `NOT NULL`. Written as separate,
reviewable steps:

```sql
-- Release 1 (expand): old code still works because the column is optional.
ALTER TABLE tasks
ADD COLUMN owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE;

-- Backfill with an approved mapping. 1 is a placeholder owner ID.
UPDATE tasks SET owner_id = 1 WHERE owner_id IS NULL;

-- Verify before tightening. Expect 0.
SELECT COUNT(*) FROM tasks WHERE owner_id IS NULL;

-- Release 2 (contract), only after new code writes owner_id everywhere.
ALTER TABLE tasks ALTER COLUMN owner_id SET NOT NULL;
```

Between the two releases both the old and new application versions can run,
so an application rollback stays safe.

#### Rehearse a backup and restore locally

Practice on your **local development** database only. From the repository
root:

```bash
# 1. Back up (custom format can be restored selectively).
pg_dump -d minitrack --format=custom --file=minitrack-backup.dump

# 2. Restore into a separate scratch database, never over the original.
createdb minitrack_restore_drill
pg_restore --no-owner -d minitrack_restore_drill minitrack-backup.dump

# 3. Verify the copy.
psql -d minitrack -c 'SELECT COUNT(*) FROM tasks;'
psql -d minitrack_restore_drill -c 'SELECT COUNT(*) FROM tasks;'

# 4. Clean up the drill.
dropdb minitrack_restore_drill
rm minitrack-backup.dump
```

**Expected observation:** both counts match. Time the drill and write the
duration in your notes: that is your first estimate of recovery time. Never
commit a `.dump` file; it contains real data. In production, prefer the
provider's restore point and its documented procedure.

### 6. MiniTrack implementation (1 hour)

**Milestone source:** Day 15 release checks, documentation, and recovery

```mermaid
flowchart TD
  A["1. Clean checkout"] --> B["2. Install from lockfile"]
  B --> C["3. Unit + integration + E2E"]
  C --> D["4. Type check + production build"]
  D --> E["5. Review diff and secrets"]
  E --> F["6. Production journey"]
  F --> G["7. Documentation rehearsal"]
  G --> H{"Every gate passes?"}
  H -- No --> I["Fix or document blocker"]
  H -- Yes --> J["Launch"]
```

#### Step 1: Run the release gate from a clean checkout

A clean checkout proves that nothing depends on files only your laptop has.
From the repository root, after committing your work:

```bash
git status --short          # must print nothing
git clone . ../minitrack-release-check
cd ../minitrack-release-check/frontend
cp ../../minitrack-week1/frontend/.env.test.local .env.test.local
npm ci
npm run test:unit
npm run test:integration
npm run test:e2e
npx tsc --noEmit
npm run build
git status --short
```

Replace `minitrack-week1` if your folder has another name. Only the ignored
**test** environment file is copied; it points at `minitrack_test`.

**Expected observation:** every check passes, `npm ci` installs exactly the
lockfile versions, and the final `git status --short` prints nothing. Every
extra step you had to perform is a hidden dependency: write it into the
README in Step 2. Delete `../minitrack-release-check` afterwards.

#### Step 2: Document the operating interface

Add an operations section to the main `README.md`. Use names, never values:

````md
## Operating MiniTrack

**Runtime:** Node.js (version from the host settings), PostgreSQL (managed).

### Environment variables (names only)
`DATABASE_URL`, `AUTH_SECRET`, `AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET`.
Local template: `frontend/.env.local.example`. Tests: `frontend/.env.test.local`.

### Local setup
```bash
createdb minitrack
psql -d minitrack -f backend/sql/schema.sql
psql -d minitrack -f backend/sql/migrations/002-auth-users.sql
psql -d minitrack -f backend/sql/migrations/003-task-owners.sql
cd frontend && npm ci && npm run dev
```

### Tests
`npm run test:unit`, `npm run test:integration`, `npm run test:e2e`
(the last two require `minitrack_test`).

### GitHub OAuth callback
`https://YOUR_DOMAIN/api/auth/callback/github` (separate app per environment).

### API summary
| Route | Authentication | Authorization |
|---|---|---|
| `GET /api/health` | Public | No task data |
| `GET /api/tasks` | Required | Owner-scoped list |
| `POST /api/tasks` | Required | Owner from session |
| `PATCH /api/tasks/:id` | Required | ID and owner predicate |
| `DELETE /api/tasks/:id` | Required | ID and owner predicate |

### Deploy and smoke test
Backup → migrations with `psql -v ON_ERROR_STOP=1` → deploy tested commit →
`/api/health` 200 → anonymous `/api/tasks` 401 → sign in, create, reload →
second user cannot see the task → sign out.

### Recovery
- App rollback: redeploy the previous build from the host dashboard.
- Database: provider restore point taken before each migration; restore is
  rehearsed with `pg_dump`/`pg_restore` locally.
- Access: only YOUR_NAME can read production secrets and logs.
- Failed requests: search host logs for `failed:` lines from Route Handlers.

### Known limitations
No sharing or teams; no pagination; no optimistic concurrency; basic rate
limiting; basic monitoring; one OAuth provider.
````

Known limitations are not failures when they are explicit and appropriate for
the product stage.

#### Step 3: Check one failure is actionable and private

Locally, stop PostgreSQL (for example `brew services stop postgresql@17`, or
your installed version), then:

```bash
curl -i http://localhost:3000/api/health
curl -i -X POST http://localhost:3000/api/tasks \
  -H 'Content-Type: application/json' -d '{"title":"While DB is down"}'
```

**Expected observation:** health still returns `200` (it does not query the
database), and the anonymous task request returns `401`. Then, in a signed-in
browser tab, try to add a task: the board shows an error such as
`Could not add task (500)` (Auth.js also stores sessions in PostgreSQL since
App Day 11, so the failure may happen while reading the session). The
terminal running `npm run dev` shows the real error. No response body contains
the database URL. Restart PostgreSQL afterwards.

#### Step 4: Rehearse the five-minute explanation

Say this aloud, timing yourself, while pointing at the sequence diagram in
section 7:

1. **Browser (30 s):** `TaskBoard.tsx` holds only temporary state: the input
   text, `editingId`, `busy`, and `error`.
2. **Route Handler (60 s):** `PATCH /api/tasks/:id` validates the ID with
   `isValidId` and the body, and maps results to `200`, `400`, `401`, `404`,
   or `500`.
3. **Auth.js (45 s):** `auth()` reads the signed `HttpOnly` cookie and gives
   a verified user ID; the client never sends an owner ID.
4. **Data layer (45 s):** parameterized SQL with `id = $2 AND owner_id = $3`.
5. **PostgreSQL (30 s):** constraints, persistence, `RETURNING`.
6. **Refresh (30 s):** `router.refresh()` re-runs the Server Component.
7. **Tests and operations (60 s):** unit, integration, and E2E tests;
   separate secrets; smoke test; rollback versus recovery.

**Expected observation:** the user-visible milestone works, its important
failure path is explicit, and existing behavior remains intact.

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant U as User A
  participant B as Browser/React
  participant N as Next.js Route Handler
  participant A as Auth.js
  participant P as PostgreSQL
  U->>B: Rename "Release check A" and press Save
  B->>N: PATCH /api/tasks/123 {"title":"Release check A renamed"}
  N->>A: auth()
  A-->>N: Verified user ID (User A)
  N->>N: isValidId("123"), normalizeTitle(...)
  N->>P: UPDATE tasks SET title=$1 WHERE id=$2 AND owner_id=$3
  P-->>N: Updated row (User B would get no row, so 404)
  N-->>B: 200 JSON task
  B->>N: router.refresh()
  N->>P: Owner-scoped SELECT
  P-->>N: Fresh task rows
  N-->>B: Updated Server Component result
  B-->>U: Renamed task persists after reload
```

Trace one concrete input. Name every boundary, value, and possible failure.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Assume redeploying the previous commit will undo a destructive migration.

Do this as a **thought experiment and a local drill only**. Take a
`pg_dump` of your local database first, then write in your notebook what
would happen if `003-task-owners.sql` ran in production and you redeployed
the App Day 10 build.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** Old code may start against incompatible or already-lost data.

Concretely: the old build runs `INSERT INTO tasks (title) VALUES ($1)` and
PostgreSQL rejects it with a `NOT NULL` violation on `owner_id`, so every
create returns `500`; and the deleted tasks stay deleted.

**Root cause:** Code rollback and data recovery were treated as the same operation.

**Restore and verify:** Use backward-compatible migrations and a rehearsed database restore or forward-fix plan.

Restore your local dump into `minitrack_restore_drill` as in section 5 and
confirm the row count matches the count you recorded before the drill.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

### 9. Interview questions and answers (30 minutes)

#### Q1. What is production smoke testing?

**Interview-ready answer:** “A smoke test is a short, non-destructive set of
checks against the real deployed environment, run right after a release. It
proves the critical path works with the real configuration: health, sign-in,
database access, one core user journey, and access control. It complements
the deeper test suite; it does not replace it.”

**Example:** For MiniTrack: `GET /api/health` returns 200, anonymous
`GET /api/tasks` returns 401, User A signs in, creates and renames a task,
reloads, and User B's `PATCH /api/tasks/123` returns 404.

**Senior follow-up:** Automate the safe parts with a dedicated smoke-test
account and run them after every deploy and on a schedule. Never point the
App Day 9 E2E suite at production; it truncates tables. Alert on failures
rather than relying on someone to look.

#### Q2. How should the backend handle application rollback versus database recovery?

**Interview-ready answer:** “They are separate operations. Rolling back the
app redeploys old code; it does not change data. If a migration dropped or
transformed data, I need a backup or restore point, or a reviewed forward
fix. I make migrations backward-compatible so that rolling back the app is
always safe.”

**Example:** App Day 11's learning migration runs `DELETE FROM tasks` and adds
`owner_id NOT NULL`. Redeploying the App Day 10 build afterwards fails every
`INSERT INTO tasks (title)` and cannot bring rows back. The production-safe
version adds a nullable `owner_id`, backfills it, verifies zero nulls, and
only then sets `NOT NULL` in a later release.

**Senior follow-up:** Define recovery-point and recovery-time objectives, take
a restore point before each migration, rehearse restores into a scratch
database, and keep evidence (logs, a dump) before changing anything during an
incident. Logs must record request IDs and errors, never task contents or
secrets.

#### Q3. What invariant makes the DFS with bounds solution correct?

**Interview-ready answer:** Every BST node must remain strictly inside bounds inherited from all ancestors, not only compare with its parent.

**Example:** For `5 → (4, 6 → (3, 7))`: 5 is checked in `(-inf, inf)`, 4 in
`(-inf, 5)`, 6 in `(5, inf)`, and 3 in `(5, 6)`. Three is not greater than 5,
so the function returns `False`, even though `3 < 6` looks fine locally.

**Senior follow-up:** O(n) time and O(h) stack hold for any shape; for a
skewed tree h = n and Python's recursion limit becomes a real risk, so use an
explicit stack. If values can be infinite, replace the sentinels with `None`.
Clarify whether duplicates are allowed before coding.

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** A release is complete only when the team can verify it, explain it, and recover from failure.

**Example:** A clean clone passes `npm ci`, all three test levels,
`npx tsc --noEmit`, and `npm run build`. The production journey passes for
User A and User B. The README lists environment variable names, the
migration order, the callback URL, the API table, and the recovery steps, and
a local `pg_dump`/`pg_restore` drill matched row counts.

**Senior follow-up:** The first operational signals to measure are the 5xx
rate per route, sign-in failures, and database connection saturation. The
first security risk to re-check after each release is owner isolation, which
is why the User B 404 check is part of every smoke test.

### 10. Complexity and operational cost

- **DSA:** O(n) time and O(h) call-stack space.
- **Application:** Recovery work has ongoing storage and drill cost, but untested backups have little practical value.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 18 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 18: verify release and recovery`

<a id="prep-day-19"></a>

## Prep Day 19 — Run a frontend interview deep review

**Date:** Wednesday, December 16, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Run a frontend interview deep review.

[Prep Day 18](../lessons/interview-prep/prep-day-18.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](../lessons/interview-prep/README.md) · [Prep Day 20](../lessons/interview-prep/prep-day-20.md)

**Everything to read today is below.** The original
[interview index](./INTERVIEW_INDEX.md),
[app architecture](./ARCHITECTURE.md), and
[DSA Day 19](../dsa-python/lessons/dsa-day-19.md) remain available for
comparison. This is a **review day: write no new feature code.** It covers
frontend topics only: the event loop, rendering, hydration, state, effects,
refs, Context, memoization, accessibility, and performance, each tied to a
real MiniTrack example. The code below is copied from App Days 1–13 so you
can study without opening other files. The backend speed round (HTTP, SQL,
transactions, pooling, authorization) belongs to Prep Day 20, and system
design starts on Prep Day 21. Write runnable DSA code in the practice file and
your recall answers in your notebook, not in this Markdown file.

### Learning objectives

- explain event loop, rendering, hydration, state, effects, refs, context, memoization, and accessibility in beginner-friendly language;
- explain how server rendering changes frontend data flow and its failure boundary;
- implement or verify the listed MiniTrack milestone;
- solve DSA Day 19 using the heap selection pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **heap selection** pattern?

Use this format:

```md
## Wednesday, December 16, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Event loop, rendering, hydration, state, effects, refs, Context, memoization, and accessibility:** A strong frontend explanation connects runtime scheduling to React rendering, distinguishes persistent server data from local interaction state, and uses effects only for external synchronization.

**Backend focus — How server rendering changes frontend data flow:** A Server Component can read server resources directly and send rendered output, while a Client Component adds browser state and events. Mutations still cross an HTTP or server-action boundary.

**Today's connection:** Frontend interviews reward boundary explanations, not isolated hook definitions.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 19: heap selection"]
  DSA --> FE["Frontend: Event loop, rendering, hydration, state, effects, refs, Context, memoization, and accessibility"]
  FE --> BE["Backend: How server rendering changes frontend data flow"]
  BE --> App["MiniTrack: Run a frontend interview deep review"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-19.py`](../dsa-python/practice/day-19.py)
**Pattern:** heap selection

#### Problem: Kth Largest Element

Given a list of numbers `nums` and a whole number `k`, return the k-th largest
value. Count duplicates: in `[5, 5, 4]` the first and second largest are both
`5`. If `k` is smaller than 1 or larger than `len(nums)`, raise `ValueError`.

```python
solve([3, 2, 1, 5, 6, 4], 2)           # 5
solve([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)  # 4
```

In the second call, sorted from largest the values are
`6, 5, 5, 4, ...`, so the 4th largest is `4`, not the 4th **distinct** value.

The simple approach sorts every value: O(n log n). If `k` is small, you only
need to remember the `k` largest values seen so far.

#### Start coding

In the practice file, replace the `raise NotImplementedError` line:

```python
def solve(nums, k):
    # Return the k-th largest value, counting duplicates.
    raise NotImplementedError
```

A **min-heap** is a list arranged so the **smallest** item is always at
index `0`. Python's `heapq` module keeps that arrangement for you. Import it
first:

```python
import heapq

heap = []
heapq.heappush(heap, 5)   # heap[0] is 5
heapq.heappush(heap, 2)   # heap[0] is 2 (smallest moves to the front)
heapq.heappush(heap, 8)   # heap[0] is still 2
heap[0]                   # 2: read the smallest in O(1)
heapq.heapreplace(heap, 7)  # remove 2 and add 7 in one step; returns 2
heap[0]                   # 5
```

`heappush` and `heapreplace` cost O(log size). Only `heap[0]` is guaranteed
to be the smallest; the rest of the list is not fully sorted.

The idea: keep a min-heap of the `k` largest values seen so far. Its smallest
member, `heap[0]`, is then the k-th largest so far.

```mermaid
flowchart TD
  Check{"1 <= k <= len(nums)?"} -- No --> Error[Raise ValueError]
  Check -- Yes --> Next[Read next value]
  Next --> Small{"Heap has fewer than k items?"}
  Small -- Yes --> Push[heappush value]
  Small -- No --> Bigger{"value > heap[0]?"}
  Bigger -- Yes --> Replace[heapreplace: drop smallest, add value]
  Bigger -- No --> Skip[Ignore value]
  Push --> More{More values?}
  Replace --> More
  Skip --> More
  More -- Yes --> Next
  More -- No --> Answer["Return heap[0]"]
```

#### Invariant to say aloud

Keep or build a heap so the next most relevant element can be removed without fully sorting all values.

For this problem: after each value, the heap holds the `min(k, seen)` largest
values seen so far, and `heap[0]` is the smallest of them.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 19
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** the checker prints `Case 1 passed`, `Case 2
passed`, and `All supplied cases passed.` for the two samples above, and the
completed reference suite still passes. The checker does not test invalid
`k`; the asserts below do.

You can also temporarily add these checks below your `solve` function, then
run `python3 dsa-python/practice/day-19.py`:

```python
if __name__ == '__main__':
    assert solve([3, 2, 1, 5, 6, 4], 2) == 5
    assert solve([3, 2, 3, 1, 2, 4, 5, 5, 6], 4) == 4
    assert solve([7], 1) == 7
    assert solve([5, 5, 4], 2) == 5          # duplicates count
    assert solve([-1, -5, -3], 3) == -5      # k == len(nums): the minimum
    assert solve([1, 2, 3], 1) == 3          # k == 1: the maximum
    for bad_k in (0, 4):
        try:
            solve([1, 2, 3], bad_k)
        except ValueError:
            pass
        else:
            raise AssertionError('invalid k must raise ValueError')
    try:
        solve([], 1)
    except ValueError:
        pass
    else:
        raise AssertionError('empty input must raise ValueError')
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple solution</summary>

```python
def solve(nums, k):
    if not (1 <= k <= len(nums)):
        raise ValueError('k must be in [1, len(nums)]')
    ordered = sorted(nums, reverse=True)  # largest first, duplicates kept
    return ordered[k - 1]                 # k is 1-based
```

</details>

Sorting is easy to verify and often fine in practice. It costs O(n log n)
time and O(n) extra space for the sorted copy, and does more work than needed
when `k` is much smaller than `n`.

#### Optimized code — reveal after attempting

<details>
<summary>Show the heap solution</summary>

```python
import heapq

def solve(nums, k):
    if not (1 <= k <= len(nums)):
        raise ValueError('k must be in [1, len(nums)]')
    heap = []  # min-heap of the k largest values seen so far
    for value in nums:
        if len(heap) < k:
            heapq.heappush(heap, value)
        elif value > heap[0]:
            # value beats the current k-th largest, so it replaces it.
            heapq.heapreplace(heap, value)
    return heap[0]
```

</details>

Each value causes at most one O(log k) heap operation, so the time is
O(n log k) and the extra space is O(k). Values that are not larger than
`heap[0]` are skipped, because they cannot be among the k largest.

Trace for `solve([3, 2, 1, 5, 6, 4], 2)` (the heap is shown sorted for
readability):

| Value | Heap before | Rule | Heap after | `heap[0]` |
|---:|---|---|---|---:|
| 3 | `[]` | fewer than 2 items: push | `[3]` | 3 |
| 2 | `[3]` | fewer than 2 items: push | `[2, 3]` | 2 |
| 1 | `[2, 3]` | `1 > 2`? no: skip | `[2, 3]` | 2 |
| 5 | `[2, 3]` | `5 > 2`: replace | `[3, 5]` | 3 |
| 6 | `[3, 5]` | `6 > 3`: replace | `[5, 6]` | 5 |
| 4 | `[5, 6]` | `4 > 5`? no: skip | `[5, 6]` | 5 |

Return `heap[0]`, which is `5`.

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “I sort the list from largest to smallest and
return the item at index `k - 1`. It is simple and obviously correct. It takes
O(n log n) time and O(n) extra space for the sorted copy.”

**Example:** `sorted([3, 2, 1, 5, 6, 4], reverse=True)` is
`[6, 5, 4, 3, 2, 1]`; index `1` is `5`.

**Follow-up:** Sorting is the right answer when you need many different `k`
values from the same data: sort once, then each lookup is O(1).

##### DSA Q2. Why a min-heap of size k, and not a max-heap?

**Interview-ready answer:** “I want quick access to the weakest member of my
current top-k, because that is the one a new value might replace. A min-heap
puts that weakest value at `heap[0]`. When the heap is full and a new value is
bigger, I replace the smallest.”

**Example:** With heap `[3, 5]` and new value `6`, `6 > 3`, so 3 leaves and
the heap becomes `[5, 6]`.

**Follow-up:** A max-heap of all n values also works: heapify in O(n), then
pop k − 1 times in O(k log n). It uses O(n) space instead of O(k).

##### DSA Q3. Why is the solution correct?

**Interview-ready answer:** “Invariant: after processing each value, the heap
contains exactly the `min(k, seen)` largest values seen so far. Pushing while
the heap is small keeps it true. When it is full, a value larger than
`heap[0]` belongs in the top-k and `heap[0]` no longer does, so `heapreplace`
keeps it true; a smaller or equal value does not belong, so skipping keeps it
true. At the end the heap holds the k largest values, and its minimum is the
k-th largest.”

**Example:** At value `4` in the trace, the heap `[5, 6]` already holds the
two largest values; `4` is not larger than `5`, so it is skipped.

**Follow-up:** Skipping a value equal to `heap[0]` is safe: the heap already
contains an equal value, so the k-th largest number is unchanged.

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “O(n log k) time, because each of n values does at
most one push or replace on a heap of size k. O(k) extra space for the heap.
When k is close to n this is O(n log n), no better than sorting.”

**Example:** For one million values and `k = 10`, each heap operation works
on at most 10 items, so `log k` is about 3.

**Follow-up:** Quickselect has expected O(n) time and can work in place, but
its worst case is O(n²) unless pivots are chosen carefully, and it reorders
the input.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “k equal to 1 and to `len(nums)`, duplicates,
negative numbers, a single element, and invalid k such as 0, a value larger
than the length, or an empty list.”

**Example:** `solve([5, 5, 4], 2)` is `5` because duplicates count;
`solve([1, 2, 3], 0)` raises `ValueError`.

**Follow-up:** Ask whether the interviewer wants the k-th **distinct** value.
If so, deduplicate with `set(nums)` first and re-check that `k` is still in
range.

##### DSA Q6. How would you handle a stream of numbers?

**Interview-ready answer:** “The same size-k min-heap works for a stream
because it never needs earlier values again. I keep it as the state of an
object: each new number does one O(log k) push or replace, and the current
answer is always `heap[0]` once the heap has k items.”

**Example:** With `k = 3`, after seeing `4, 5, 8, 2` the heap is `[4, 5, 8]`
and the answer is `4`; adding `10` replaces `4` and the answer becomes `5`.

**Follow-up:** This is the classic “Kth Largest Element in a Stream” problem.
Memory stays O(k) no matter how long the stream runs, which is why the heap
beats sorting there.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

A strong frontend explanation connects runtime scheduling to React rendering, distinguishes persistent server data from local interaction state, and uses effects only for external synchronization.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.

#### How

Study each block in order: read the code, close the file, and explain it aloud
in two sentences. Then fill the concept map at the end of this section.

**1. Event loop (App Day 1, `exercises/js-predictions.js`).** Predict the
output before running:

```js
console.log('1. Start');
setTimeout(() => console.log('1. Timer'), 0);
Promise.resolve().then(() => console.log('1. Promise'));
console.log('1. End');

function makeCounter() {
  let count = 0;
  return () => ++count; // Closure retains count between calls.
}
const counter = makeCounter();
console.log('2.', counter(), counter());

async function getValue() { return 7; }
console.log('3. Sync');
getValue().then(value => console.log('3. Async', value));
console.log('3. End');
```

```bash
node exercises/js-predictions.js
```

**Expected observation:**

```text
1. Start
1. End
2. 1 2
3. Sync
3. End
1. Promise
3. Async 7
1. Timer
```

All synchronous lines run first on the call stack. Then the **microtask**
queue (promise callbacks) is emptied, and only then does the **timer**
callback run, even with a `0` delay.

**2. Server and Client Components (App Day 8 `frontend/app/page.tsx`).** The
page is a Server Component: it can await data on the server and never ships
that code to the browser:

```tsx
async function TaskResults({ searchParams }: PageProps) {
  // Awaiting searchParams makes this subtree request-specific.
  const params = await searchParams;
  const filters = normalizeTaskFilters(params.q, params.status);
  const tasks = await searchTasks(filters);

  return (
    <>
      <SearchForm filters={filters} />
      <TaskBoard tasks={tasks} />
    </>
  );
}

export default function Home({ searchParams }: PageProps) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-5 py-12">
      <h1 className="text-4xl font-bold">MiniTrack</h1>

      <Suspense fallback={<p className="mt-8 text-slate-400">Filtering tasks...</p>}>
        <TaskResults searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
```

`TaskBoard.tsx` starts with `'use client'`, so it can use state and event
handlers. `Suspense` shows the fallback while the request-time part loads.
With Cache Components, request-time reads go inside `Suspense` (using
`searchParams`, `auth()`, or `io()`); MiniTrack never uses
`dynamic = 'force-dynamic'`.

**3. Hydration (App Day 4).** `'use client'` marks a client boundary, not
“render only in the browser”. The server still sends HTML for `TaskBoard` on
the first load; then React **hydrates** it, attaching state and event handlers
to the existing HTML. A **hydration mismatch** happens when the first client
render differs from the server HTML, for example rendering `Date.now()` during
render.

**4. State, controlled input, and derived data (App Day 5
`frontend/app/TaskBoard.tsx`).**

```tsx
const [title, setTitle] = useState(''); // Controlled input: React owns the value.
const [filter, setFilter] = useState<Filter>('all');
const [busy, setBusy] = useState(false);
const [error, setError] = useState('');
const router = useRouter();

// Derived during render: no extra state and no effect.
let visibleTasks = tasks;
if (filter === 'open') {
  visibleTasks = tasks.filter(task => !task.done);
}
if (filter === 'done') {
  visibleTasks = tasks.filter(task => task.done);
}
```

`tasks` is a prop from the server (persistent data). `title`, `filter`,
`busy`, and `error` are temporary interaction state. After a successful
request, `router.refresh()` re-runs the Server Component so fresh props
arrive; the component never mutates `tasks`.

**5. Refs and effects (App Day 7, App Day 13).**

```tsx
const [editingId, setEditingId] = useState<string | null>(null);
const [editTitle, setEditTitle] = useState('');
const editInputRef = useRef<HTMLInputElement>(null);

useEffect(() => {
  if (editingId) {
    // Focus is a browser DOM operation: a valid reason for an effect.
    editInputRef.current?.focus();
    editInputRef.current?.select();
  }
}, [editingId]);
```

`useRef` holds the input element without causing a re-render. `useEffect`
runs after React has committed the input to the page. Filtering does **not**
need an effect because it can be computed during render.

**6. Context (App Day 10 `frontend/app/AuthSessionProvider.tsx`).**

```tsx
'use client';

import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { ReactNode } from 'react';

export default function AuthSessionProvider({
  children,
  session,
}: {
  children: ReactNode;
  session: Session | null;
}) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}
```

A descendant reads it with `const { data: session, status } = useSession();`.
Context avoids passing the session through every component. It does **not**
protect anything: Route Handlers still call `auth()`. PostgreSQL tasks are not
copied into Context, which would create a second source of truth.

**7. Memoization (App Day 13 lab).**

```tsx
const counts = useMemo(() => {
  return {
    open: tasks.filter(task => !task.done).length,
    done: tasks.filter(task => task.done).length,
  };
}, [tasks]);

const startEditing = useCallback((task: Task) => {
  setEditingId(task.id);
  setEditTitle(task.title);
}, []);

const TaskRow = memo(function TaskRow({
  task,
  onEdit,
}: {
  task: Task;
  onEdit: (task: Task) => void;
}) {
  return (
    <li>
      <span>{task.title}</span>
      <button type="button" onClick={() => onEdit(task)}>
        Edit
      </button>
    </li>
  );
});
```

`useMemo` caches a value, `useCallback` caches a function reference, and
`memo` skips a render when props are shallowly equal. Keep them only when the
React Profiler shows a real improvement.

**8. Accessibility (App Day 13).**

```tsx
const titleErrorId = 'task-title-error';

<label className="font-medium" htmlFor="task-title">
  Task title
</label>
<input
  aria-describedby={error ? titleErrorId : undefined}
  aria-invalid={Boolean(error)}
  className="min-h-11 rounded-lg border border-slate-600 bg-slate-950 px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
  id="task-title"
  name="title"
/>
{error ? (
  <p className="text-rose-300" id={titleErrorId} role="alert">
    {error}
  </p>
) : null}
```

A real `<label>` names the input; `role="alert"` announces a new error;
native `<button>` and `<input type="checkbox">` give keyboard support for
free. Completion is shown with a checkbox and screen-reader text, not only
color.

#### Concept map to fill from memory

Cover the right-hand columns and fill them in your notebook first:

| Concept | MiniTrack example | One-sentence explanation |
|---|---|---|
| Event loop | `exercises/js-predictions.js` | Microtasks run before the `0` ms timer. |
| Closure | `makeCounter()` | The returned function keeps `count` alive. |
| Server Component | `TaskResults` in `page.tsx` | Reads PostgreSQL on the server; no client bundle. |
| Client Component | `TaskBoard.tsx` | `'use client'` enables state and events. |
| Hydration | First load of `TaskBoard` | Server HTML becomes interactive. |
| Controlled input | `value={title}` + `onChange` | React state is the input's single source. |
| Derived data | `visibleTasks` | Calculated during render, never stored. |
| Ref | `editInputRef` | Holds the DOM input without re-rendering. |
| Effect | Focus on `editingId` change | Synchronizes React with the DOM. |
| URL state | `?q=&status=` GET form | Shareable, reload-safe filters. |
| Context | `AuthSessionProvider` | Shares the session; not authorization. |
| Memoization | `useMemo` counts, `memo(TaskRow)` | Performance only, measured first. |
| Accessibility | Label, `role="alert"`, native controls | Usable by keyboard and screen reader. |
| Performance | React Profiler, server reads | Measure before optimizing. |

Files to open deliberately (after answering from memory):

- `frontend/app/page.tsx`
- `frontend/app/TaskBoard.tsx`
- `frontend/app/AuthSessionProvider.tsx` (the Context provider from App Day 10)

Answer before checking:

- Which value is persistent, and which value is temporary interaction state?
  (`tasks` from PostgreSQL versus `title`, `filter`, `editingId`, `busy`.)
- What starts this behavior? (A user event such as submit, or the first page
  request.)
- What should the user see while work is pending? (The Suspense fallback on
  load; disabled buttons during a mutation.)
- What should remain unchanged when the operation fails? (The `tasks` prop;
  the draft text stays so the user can retry.)

### 5. Backend guided study (1 hour 30 minutes)

#### What

A Server Component can read server resources directly and send rendered output, while a Client Component adds browser state and events. Mutations still cross an HTTP or server-action boundary.

#### How the data flows in MiniTrack

```mermaid
flowchart LR
  Req["GET /?q=report&status=open"] --> SC["Server Component: auth() + searchTasks()"]
  SC --> DB[(PostgreSQL)]
  DB --> SC
  SC --> HTML["HTML + props for TaskBoard"]
  HTML --> Hyd["Browser hydrates TaskBoard"]
  Hyd --> Mut["User clicks: fetch PATCH /api/tasks/:id"]
  Mut --> RH["Route Handler: auth() + validate + SQL"]
  RH --> Ref["router.refresh()"]
  Ref --> SC
```

**Reads** happen in the Server Component. The App Day 10 page checks the
session on the server before rendering private content:

```tsx
async function PrivateTasks() {
  // auth() reads the signed session cookie on the server.
  const session = await auth();

  if (!session?.user) {
    return (
      <section className="rounded-2xl border border-slate-700 bg-slate-900 p-8">
        <h2 className="text-2xl font-bold">Sign in to open MiniTrack</h2>
        <div className="mt-5">
          <AuthControls />
        </div>
      </section>
    );
  }

  return (
    <>
      <AuthControls />
      {/* Render the existing request-time task content here. */}
    </>
  );
}
```

From App Day 11 the read also passes the owner:
`searchTasks(session.user.id, filters)`. Because `auth()` reads cookies, this
is request-time work inside `Suspense` and is never cached with
`"use cache"`.

**Mutations** cross an HTTP boundary. Every task Route Handler starts with:

```ts
const session = await auth();
if (!session?.user) {
  return Response.json(
    { error: 'Unauthorized' },
    { status: 401 },
  );
}
```

**Server Actions** are the other boundary. Sign-in in `AuthControls.tsx` uses
one, so provider logic stays on the server:

```tsx
<form
  action={async () => {
    'use server';
    await signIn('github', { redirectTo: '/' });
  }}
>
  <button className="rounded-lg bg-violet-500 px-4 py-2 font-bold">
    Sign in with GitHub
  </button>
</form>
```

Why not fetch tasks from the browser on first load? It would render an empty
page, wait for hydration, and then make another HTTP request. A Server
Component sends the data with the first HTML. A client fetch is still right
for browser-driven updates or data that depends on client-only state.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

### 6. MiniTrack implementation (1 hour)

**Milestone source:** Frontend review across Days 1–15

No application file changes today. Use a timer.

#### Step 1: 20-question speed round (35 minutes)

Set a timer for **90 seconds per question**. Answer aloud first, then open
the model answer. Mark each answer ✅ (complete), 🟡 (partial), or ❌ in your
notebook. Repeat every ❌ at the end.

<details>
<summary>1. Why does synchronous code print before callbacks?</summary>

The call stack runs all synchronous code to completion. Callbacks wait in
queues and run only when the stack is empty. In `js-predictions.js`,
`1. Start` and `1. End` print before either callback.

</details>

<details>
<summary>2. Why does a Promise <code>.then</code> beat a <code>setTimeout(..., 0)</code>?</summary>

Promise callbacks are microtasks. After each task, the runtime empties the
whole microtask queue before taking the next timer task. So `1. Promise` and
`3. Async 7` print before `1. Timer`.

</details>

<details>
<summary>3. What is a closure?</summary>

A function that keeps access to variables from the scope where it was
created. `makeCounter()` returns a function that still reads and updates
`count`, so `counter(), counter()` gives `1 2`.

</details>

<details>
<summary>4. What runs on the server and what runs in the browser?</summary>

Server Components (the page, `TaskResults`, `AuthControls`) run only on the
server and can read PostgreSQL and cookies. `TaskBoard.tsx` with
`'use client'` is rendered to HTML on the server for the first load and then
runs in the browser, where it handles events.

</details>

<details>
<summary>5. What is hydration, and what causes a mismatch?</summary>

Hydration attaches React state and event handlers to HTML the server already
sent. A mismatch happens when the first client render produces different
output, for example `Date.now()` or `window` reads during render. Move
browser-only values into an effect or event.

</details>

<details>
<summary>6. What do <code>Suspense</code> and Cache Components do on the MiniTrack page?</summary>

The static shell (heading, layout) can be prerendered. Request-time work
(`searchParams`, `auth()`, `io()`) sits inside `<Suspense>`, which shows a
fallback such as `Filtering tasks...` until the data streams in. MiniTrack
does not use `dynamic = 'force-dynamic'`.

</details>

<details>
<summary>7. What is a controlled input?</summary>

An input whose `value` comes from React state and whose `onChange` updates
that state: `value={title}` and `onChange={event => setTitle(event.target.value)}`.
React is the single source of truth, so the app can trim, validate, and clear
it.

</details>

<details>
<summary>8. Why not mutate the <code>tasks</code> prop?</summary>

Props are owned by the parent and React detects changes by new references.
Writing `task.title = editTitle` would not re-render reliably and would make
the browser a second, unsaved database. MiniTrack sends a PATCH and calls
`router.refresh()`.

</details>

<details>
<summary>9. Why is <code>visibleTasks</code> not stored in state?</summary>

It can be calculated from `tasks` and `filter` during render. Storing it
would require an effect to keep it in sync, adding an extra render and a
chance of stale data.

</details>

<details>
<summary>10. What does <code>router.refresh()</code> do?</summary>

It asks Next.js to re-run the Server Components for the current route and
send new props, while keeping client state such as the input text. MiniTrack
calls it after a successful POST, PATCH, or DELETE.

</details>

<details>
<summary>11. Why disable the submit button while a request is pending?</summary>

`busy` prevents accidental double-clicks from sending two POSTs. It is only a
UX guard: POST is not idempotent, and a retry or a second tab can still
create duplicates, so the server would need an idempotency key for a hard
guarantee.

</details>

<details>
<summary>12. Why <code>key={task.id}</code> instead of the array index?</summary>

The key tells React which item is which between renders. When a filter or
delete changes positions, an index key would attach the wrong state or DOM
node to a task; a stable database ID does not.

</details>

<details>
<summary>13. What is a stale closure in React?</summary>

A callback that captured an old render's values. For example,
`setCount(count + 1)` called twice in one handler uses the same old `count`;
`setCount(c => c + 1)` uses the latest value.

</details>

<details>
<summary>14. When do you use <code>useRef</code> instead of <code>useState</code>?</summary>

Use a ref for a value that must survive renders but should not trigger one,
such as a DOM node. `editInputRef` points at the edit input so an effect can
call `focus()`.

</details>

<details>
<summary>15. When is <code>useEffect</code> appropriate, and when should you avoid it?</summary>

Use it to synchronize with something outside React: focusing the edit input
after `editingId` changes. Avoid it for values computable during render (the
filter) and for logic that belongs in an event handler (sending the PATCH).

</details>

<details>
<summary>16. Why keep search filters in the URL?</summary>

`?q=report&status=open` is bookmarkable, shareable, survives reload, and
works with a plain GET form without JavaScript. The server validates it with
`normalizeTaskFilters` before querying.

</details>

<details>
<summary>17. What can Context do, and what can it not do?</summary>

`SessionProvider` shares the session with distant Client Components without
prop drilling. It cannot secure data: anyone can send HTTP directly, so each
Route Handler still calls `auth()`. Context consumers re-render when the
value changes.

</details>

<details>
<summary>18. Why is hiding a button not protection?</summary>

The browser is controlled by the user. A hidden Delete button does not stop
`fetch('/api/tasks/123', { method: 'DELETE' })` from the console. Protection
is `auth()` plus `WHERE id = $1 AND owner_id = $2` on the server.

</details>

<details>
<summary>19. How do <code>useMemo</code>, <code>useCallback</code>, and <code>React.memo</code> differ?</summary>

`useMemo` caches a computed value (`counts`), `useCallback` caches a function
reference (`startEditing`), and `memo` lets a component (`TaskRow`) skip
rendering when its props are shallowly equal. A new inline callback each
render defeats `memo`. They are performance tools; measure with the Profiler.

</details>

<details>
<summary>20. What makes the MiniTrack task list accessible?</summary>

Native controls (`button`, checkbox), a real label for every input, errors in
`role="alert"` linked with `aria-describedby`, visible focus styles, focus
moved to the edit input and back, completion text for screen readers instead
of color alone, and a layout that works at 320 px and 200% zoom.

</details>

#### Step 2: Rebuild one small form from memory (20 minutes)

Without looking, write the add-task form and its submit handler in your
notebook or in a scratch file `checkpoints/ROUGH/add-task-recall.tsx` (not in
`frontend/`, so the app is unchanged). It must include: a controlled input,
`preventDefault`, trimming, a POST with JSON, `busy` and `error` state, and
`router.refresh()` on success. Then compare:

<details>
<summary>Show the App Day 5 add-task form</summary>

```tsx
async function addTask(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault(); // Prevent browser's default full-page form submission.
  const cleanTitle = title.trim();
  if (!cleanTitle) return;

  setBusy(true);
  setError('');

  try {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: cleanTitle }),
    });

    if (!response.ok) {
      setError(`Could not add task (${response.status})`);
      setBusy(false);
      return;
    }

    setTitle('');
    router.refresh(); // Load the latest tasks from PostgreSQL.
    setBusy(false);
  } catch {
    setError('Could not connect to the server');
    setBusy(false);
  }
}

// Inside the returned JSX:
<form className="flex flex-col gap-3 sm:flex-row" onSubmit={addTask}>
  <input
    className="min-h-12 flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 text-white outline-none placeholder:text-slate-500 focus:border-violet-400"
    aria-label="Task title"
    value={title}
    onChange={event => setTitle(event.target.value)}
    placeholder="Add a task"
    maxLength={200}
    disabled={busy}
  />
  <button
    className="min-h-12 rounded-xl bg-violet-500 px-5 font-bold text-white hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-50"
    disabled={busy || !title.trim()}
    type="submit"
  >
    Add task
  </button>
</form>
```

</details>

Mark every line you missed and say why it exists.

#### Step 3: Confirm nothing changed (5 minutes)

From the repository root:

```bash
node exercises/js-predictions.js
cd frontend
npm run lint
npx tsc --noEmit
git status --short
```

**Expected observation:** the prediction output matches section 4, lint and
type checking pass as they did yesterday, and `git status --short` shows no
changes under `frontend/`. Delete the scratch recall file or keep it under
`checkpoints/ROUGH/` only.

**Expected observation:** the user-visible milestone works, its important
failure path is explicit, and existing behavior remains intact.

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant U as User
  participant B as Browser/React
  participant S as Server Component (page.tsx)
  participant R as Route Handler
  participant P as PostgreSQL
  U->>B: Open /?status=open
  B->>S: GET /?status=open with session cookie
  S->>S: auth(), normalizeTaskFilters()
  S->>P: Owner-scoped SELECT
  P-->>S: Rows
  S-->>B: Streamed HTML + TaskBoard props
  B->>B: Hydrate TaskBoard (handlers attached)
  U->>B: Click Edit on "Write report"
  B->>B: setEditingId(id), effect focuses editInputRef
  U->>B: Type new title, press Enter
  B->>R: PATCH /api/tasks/42 {"title":"Write final report"}
  R->>P: UPDATE ... WHERE id=$2 AND owner_id=$3
  P-->>R: Updated row
  R-->>B: 200 JSON
  B->>S: router.refresh()
  S-->>B: New tasks prop; edit mode closed
```

Trace one concrete input. Name every boundary, value, and possible failure.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Use useEffect to copy every prop into state.

Do this in a scratch copy, or revert immediately afterwards with
`git checkout -- frontend/app/TaskBoard.tsx`. Replace the derived
`visibleTasks` block with:

```tsx
// Anti-pattern: duplicating a prop in state and syncing it with an effect.
const [visibleTasks, setVisibleTasks] = useState<Task[]>([]);

useEffect(() => {
  setVisibleTasks(
    filter === 'all'
      ? tasks
      : tasks.filter(task => (filter === 'done' ? task.done : !task.done)),
  );
}, [filter]); // tasks is missing on purpose
```

Add `useEffect` to the React import. Run `npm run lint` and `npm run dev`,
then add a task.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** State can drift and causes an extra render cycle.

Concretely: on first load the board briefly shows `No tasks in this filter.`
because the first render uses `[]`; lint warns about the missing `tasks`
dependency; and after adding a task, `router.refresh()` sends new `tasks`, but
the list does not show the new task until you change the filter.

**Root cause:** Derived render data was mistaken for external synchronization.

**Restore and verify:** Compute the value during rendering unless the user needs an independent editable draft.

Restore the `let visibleTasks = tasks; ...` block, confirm the new task
appears immediately, and note the exception: `editTitle` **is** copied from a
prop, on purpose, because the user edits an independent draft.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

### 9. Interview questions and answers (30 minutes)

#### Q1. What is event loop, rendering, hydration, state, effects, refs, context, memoization, and accessibility?

**Interview-ready answer:** “They describe one pipeline. The event loop
decides when JavaScript runs: synchronous code, then microtasks, then timers.
React renders from props and state; the server renders first and the browser
hydrates. State holds temporary interaction data; persistent data stays on the
server. Effects synchronize with outside systems; refs hold values that should
not trigger renders. Context shares values across distant components,
memoization skips measured expensive work, and accessibility makes the result
usable by everyone.”

**Example:** In `TaskBoard.tsx`, clicking **Edit** sets `editingId` (state),
React re-renders, the effect focuses `editInputRef` (ref plus effect), the
input has a label (accessibility), and Save sends a PATCH whose promise
resolves as a microtask.

**Senior follow-up:** When `TaskBoard` grows past a few hundred lines, split
it into `TaskRow` and `TaskForm` components and use `useReducer` for the
`editingId`/`busy`/`error` transitions. Justify `memo` or list virtualization
only with Profiler measurements on a realistic task count.

#### Q2. How should the backend handle how server rendering changes frontend data flow?

**Interview-ready answer:** “Reads move to the server: a Server Component
calls `auth()` and queries PostgreSQL directly, then sends HTML and props.
The browser only holds interaction state. Mutations still cross a boundary,
either a Route Handler over HTTP or a Server Action, and each boundary
re-checks identity and validates input. After a mutation, `router.refresh()`
re-runs the server read.”

**Example:** `TaskResults` awaits `searchParams`, calls
`normalizeTaskFilters`, and passes `searchTasks(...)` results to
`<TaskBoard tasks={tasks} />`. Toggling a checkbox sends
`PATCH /api/tasks/42`, which returns `401` without a session.

**Senior follow-up:** If PostgreSQL is unavailable, the Server Component read
fails inside `Suspense`, so the user should see an error state rather than an
empty list that looks like “no tasks”. Log the error with a request ID on the
server; never send the database message or connection string to the browser.

#### Q3. What invariant makes the heap selection solution correct?

**Interview-ready answer:** Keep or build a heap so the next most relevant element can be removed without fully sorting all values.

**Example:** For `[3, 2, 1, 5, 6, 4]` and `k = 2`, the size-2 min-heap goes
`[3]`, `[2, 3]`, `[2, 3]`, `[3, 5]`, `[5, 6]`, `[5, 6]`; `heap[0]` is `5`.

**Senior follow-up:** O(n log k) assumes k is much smaller than n; if k is
close to n, sorting or quickselect is simpler. For a stream, the size-k heap
is the natural choice because memory stays O(k).

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** Frontend interviews reward boundary explanations, not isolated hook definitions.

**Example:** “Our page is a Server Component that reads the user's tasks from
PostgreSQL. `TaskBoard` hydrates in the browser and keeps only the input
text, filter, and edit draft. When I rename a task it sends a PATCH; the
server checks `auth()` and the owner in SQL; then `router.refresh()` brings
back the persisted truth. Focus moves to the edit input with a ref and an
effect, and errors are announced with a `role="alert"` paragraph.”

**Senior follow-up:** The first frontend signals to measure are slow
interactions (Interaction to Next Paint), the size of the client JavaScript
bundle, and refresh latency after a mutation. The first security risk is
assuming client checks protect data: always point to the server boundary.

### 10. Complexity and operational cost

- **DSA:** O(n log k) time and O(k) space with a size-k heap.
- **Application:** Review time should target retrieval and explanation. Re-reading familiar prose has lower value than attempting an answer and correcting gaps.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 19 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 19: run a frontend interview deep review`

<a id="prep-day-20"></a>

## Prep Day 20 — Run a backend and PostgreSQL deep review

**Date:** Thursday, December 17, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Run a backend and PostgreSQL deep review.

[Prep Day 19](../lessons/interview-prep/prep-day-19.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](../lessons/interview-prep/README.md) · [Prep Day 21](../lessons/interview-prep/prep-day-21.md)

**Everything to read today is below.** The original
[interview index](./INTERVIEW_INDEX.md),
[app architecture](./ARCHITECTURE.md),
[App Day 3](../lessons/day-03.md), [App Day 5](../lessons/day-05.md),
[App Day 6](../lessons/day-06.md), [App Day 10](../lessons/day-10.md),
[App Day 11](../lessons/day-11.md), and
[DSA Day 20](../dsa-python/lessons/dsa-day-20.md) remain available for
comparison. Today is a **review day: there is no new feature code**. You
re-read, trace, and explain the backend code you already built. The frontend
concept review was Prep Day 19; system design and scaling belong to Prep
Day 21; the full four-part mock belongs to Prep Day 22. Write runnable code
only in the named practice file, not in this Markdown file.

### Learning objectives

- explain communicating API failures to users in beginner-friendly language;
- explain HTTP, validation, SQL, transactions, pools, auth, caching, and failure handling and its failure boundary;
- implement or verify the listed MiniTrack milestone;
- solve DSA Day 20 using the counting plus heap pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **counting plus heap** pattern?

Use this format:

```md
## Thursday, December 17, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Communicating API failures to users:** The UI needs stable status and error information, but it should not display stack traces, SQL text, or secrets. Map technical failures to actionable user states.

**Backend focus — HTTP, validation, SQL, transactions, pools, auth, caching, and failure handling:** A backend request crosses trust boundaries: validate input, authenticate identity, authorize the resource, perform a bounded data operation, log internal failure safely, and return a deliberate response.

**Today's connection:** Backend reliability comes from explicit contracts and bounded behavior at every trust and resource boundary.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 20: counting plus heap"]
  DSA --> FE["Frontend: Communicating API failures to users"]
  FE --> BE["Backend: HTTP, validation, SQL, transactions, pools, auth, caching, and failure handling"]
  BE --> App["MiniTrack: Run a backend and PostgreSQL deep review"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-20.py`](../dsa-python/practice/day-20.py)
**Pattern:** counting plus heap

#### Problem: Top K Frequent Elements

Given a list of values `nums` and a whole number `k`, return the `k` values
that appear most often. The result is ordered from most frequent to less
frequent; when two values have the same count, either may come first.
Assumptions used by this course:

- values are hashable (numbers or strings);
- `k` must be between `0` and the number of **distinct** values; otherwise
  the function raises `ValueError('k out of range')`;
- `k = 0` returns an empty list.

```python
solve([1, 1, 1, 2, 2, 3], 2)  # [1, 2]
solve([4, 4, 4], 1)           # [4]
```

The simple approach counts each distinct value separately and then sorts all
of them by count. A faster approach counts everything in **one pass** and then
keeps only the best `k` values in a small **heap**.

#### Start coding

In the practice file, replace the `raise NotImplementedError` line with your
own implementation. This is the starting shape:

```python
def solve(nums, k):
    # Return the k most frequent values, most frequent first.
    raise NotImplementedError
```

Three Python helpers make this short. Learn them first:

1. **`Counter`** (from `collections`) counts values for you.
   `Counter([1, 1, 2])` produces `Counter({1: 2, 2: 1})`. It behaves like a
   dictionary: `len(...)` is the number of distinct values, and looping over it
   gives the distinct values (the keys).
2. **`frequency.get`** is a function you can pass around. If
   `frequency = Counter([1, 1, 2])`, then `frequency.get(1)` returns `2`.
3. **`heapq.nlargest(k, items, key=some_function)`** returns the `k` items with
   the largest `some_function(item)`, largest first. Internally it keeps a
   **min-heap** of size `k`: a list arranged so the smallest kept item is
   always at the front and can be replaced in O(log k) time.

```mermaid
flowchart TD
  Start[Read nums and k] --> Count[Count every value with Counter]
  Count --> Check{k between 0 and distinct count?}
  Check -- No --> Error[Raise ValueError]
  Check -- Yes --> Next[Take next distinct value]
  Next --> Small{Heap has fewer than k values?}
  Small -- Yes --> Push[Push value into heap]
  Small -- No --> Better{Count larger than smallest kept count?}
  Better -- Yes --> Replace[Replace smallest kept value]
  Better -- No --> Skip[Skip value]
  Push --> More{More distinct values?}
  Replace --> More
  Skip --> More
  More -- Yes --> Next
  More -- No --> Return[Return kept values, most frequent first]
```

#### Invariant to say aloud

Count frequencies first, then use a heap or bucket strategy to select the k most frequent values.

More precisely: after processing some distinct values, the size-`k` heap holds
the `k` most frequent values **seen so far**, and its front is the weakest of
them.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 20
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** the day-specific checker accepts your implementation,
and the completed reference suite still passes. The checker compares exact
lists, so return the most frequent value first. Its two examples have no ties;
they do not test every possible input.

You can also temporarily add these checks below your `solve` function in the
practice file, then run `python3 dsa-python/practice/day-20.py`:

```python
if __name__ == '__main__':
    assert solve([1, 1, 1, 2, 2, 3], 2) == [1, 2]
    assert solve([4, 4, 4], 1) == [4]
    assert solve([5, 6, 5], 0) == []
    assert solve([], 0) == []
    assert solve([-1, -1, 2], 1) == [-1]
    assert sorted(solve([7, 8], 2)) == [7, 8]  # A tie may come back in any order.
    try:
        solve([1, 2], 3)  # Only two distinct values exist.
    except ValueError:
        pass
    else:
        raise AssertionError('expected ValueError when k is too large')
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple solution</summary>

```python
def solve(nums, k):
    distinct = []
    for value in nums:
        if value not in distinct:  # Linear search: O(number of distinct values).
            distinct.append(value)
    if not (0 <= k <= len(distinct)):
        raise ValueError('k out of range')
    # Count each distinct value by scanning the whole list again.
    pairs = [(nums.count(value), value) for value in distinct]
    # Sort by count, largest first. `lambda pair: pair[0]` means "use the count".
    pairs.sort(key=lambda pair: pair[0], reverse=True)
    return [value for _, value in pairs[:k]]
```

</details>

With `n` values and `u` distinct values, finding distinct values and calling
`nums.count` once per distinct value each cost O(n × u), and sorting costs
O(u log u). The worst case (all values distinct) is O(n²) time. Extra space is
O(u).

#### Optimized code — reveal after attempting

<details>
<summary>Show the Top K Frequent solution</summary>

```python
from collections import Counter
import heapq

def solve(nums, k):
    frequency = Counter(nums)  # value -> how many times it appears
    if not (0 <= k <= len(frequency)):
        raise ValueError('k out of range')
    # nlargest keeps a size-k heap; values with tied counts may be chosen in any order.
    return heapq.nlargest(k, frequency, key=frequency.get)
```

</details>

Counting is one pass over `nums`: O(n) expected time. Selecting with a size-`k`
heap processes `u` distinct values at O(log k) each. Total: **O(n + u log k)**
time and **O(u + k)** extra space.

Trace for `solve([1, 1, 1, 2, 2, 3], 2)`. After counting,
`frequency = {1: 3, 2: 2, 3: 1}`. The heap below is shown as
`value:count`, with the weakest kept value first:

| Step | Distinct value | Count | Heap before | Action | Heap after |
|---:|---:|---:|---|---|---|
| 1 | 1 | 3 | `[]` | Fewer than 2 kept; push | `[1:3]` |
| 2 | 2 | 2 | `[1:3]` | Fewer than 2 kept; push | `[2:2, 1:3]` |
| 3 | 3 | 1 | `[2:2, 1:3]` | 1 is not larger than weakest count 2; skip | `[2:2, 1:3]` |
| End | — | — | — | Return strongest first | `[1, 2]` |

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “For each distinct value I count how often it
appears by scanning the list, then I sort the distinct values by count and
take the first k. Scanning once per distinct value makes it O(n × u), which is
O(n²) when every value is distinct.”

**Example:** For `[1, 1, 1, 2, 2, 3]`, the counts are `(3, 1)`, `(2, 2)`, and
`(1, 3)`. Sorting by count and taking two returns `[1, 2]`.

**Follow-up:** The first easy improvement is to count everything in one pass
with a dictionary. Then only the selection step remains.

##### DSA Q2. Why combine counting with a heap?

**Interview-ready answer:** “Counting answers *how often*; the heap answers
*which k are best* without sorting everything. I keep a min-heap of at most k
values, so the weakest kept value is at the front. A new value enters only if
its count beats that weakest one.”

**Example:** With `k = 2` and counts `{1: 3, 2: 2, 3: 1}`, the heap keeps
`1` and `2`; value `3` with count 1 cannot beat the weakest kept count 2.

**Follow-up:** Why a *min*-heap for the *largest* counts? Because the
decision each step is “should I evict the weakest kept value?”, so the weakest
must be cheap to find.

##### DSA Q3. Why is the answer correct?

**Interview-ready answer:** “The invariant is: after processing some distinct
values, the heap contains the k most frequent of those values. A value that is
skipped or evicted has a count no larger than k other values already seen, so
it can never be in the final top k. When every value is processed, the heap
holds the top k overall.”

**Example:** Value `3` is skipped because two values, `1` and `2`, already
beat it.

**Follow-up:** With ties, several answers are correct. Tests should compare
sets or sort the result unless the problem defines a tie-break rule.

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “Counting is O(n) expected time. The heap step
processes u distinct values at O(log k) each, so the total is O(n + u log k).
Extra space is O(u) for the counts plus O(k) for the heap.”

**Example:** For one million values with only ten distinct values, the heap
work is tiny; counting dominates.

**Follow-up:** O(n) counting assumes average O(1) hashing; heavy collisions can
degrade it. When `k` is close to `u`, simply sorting all counts in
O(u log u) is just as good and simpler; `heapq.nlargest` itself switches to
sorting when `k` is large.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “I test k equal to zero, k equal to the number of
distinct values, k larger than that, an empty list, a single repeated value,
negative numbers, and ties.”

**Example:** `solve([5, 6, 5], 0)` returns `[]`; `solve([1, 2], 3)` raises
`ValueError`; `solve([7, 8], 2)` may return `[7, 8]` or `[8, 7]`.

**Follow-up:** Ask whether an invalid `k` should raise an error, return as many
values as exist, or be impossible by contract. This implementation raises.

##### DSA Q6. How would you reach expected O(n) time?

**Interview-ready answer:** “I use bucket sort. A value can appear at most n
times, so I create buckets indexed by count, put each value in the bucket for
its count, and walk the buckets from high to low until I have k values.”

**Example:**

```python
from collections import Counter

def solve_buckets(nums, k):
    frequency = Counter(nums)
    buckets = [[] for _ in range(len(nums) + 1)]  # index = count
    for value, count in frequency.items():
        buckets[count].append(value)
    result = []
    for count in range(len(nums), 0, -1):
        for value in buckets[count]:
            if len(result) == k:
                return result
            result.append(value)
    return result
```

**Follow-up:** The same question appears in MiniTrack terms as “show the
k most common words in a user's task titles.” In PostgreSQL that would be a
`GROUP BY ... ORDER BY count(*) DESC LIMIT $1` query scoped by `owner_id`, so
the database counts and only k rows leave it.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

The UI needs stable status and error information, but it should not display stack traces, SQL text, or secrets. Map technical failures to actionable user states.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.

#### How: review the existing error handling

Before reading the code, sketch on paper: the component state, the user event,
the request, the success result, and the failure result for **toggling a
task**.

This is the existing App Day 5 handler in `frontend/app/TaskBoard.tsx`. Do not
change it today; read it and explain each branch:

```tsx
async function toggleTask(taskId: string, done: boolean) {
  setBusy(true);
  setError('');

  try {
    const response = await fetch(`/api/tasks/${taskId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done }),
    });

    // fetch() resolves for 4xx and 5xx responses, so check ok explicitly.
    if (!response.ok) {
      setError(`Could not update task (${response.status})`);
      setBusy(false);
      return;
    }

    router.refresh(); // Ask the Server Component to re-read PostgreSQL.
    setBusy(false);
  } catch {
    // fetch() rejects only when no HTTP response arrived (for example offline).
    setError('Could not connect to the server');
    setBusy(false);
  }
}
```

The message is rendered in an accessible live region, so screen readers
announce it without moving focus:

```tsx
{error && <p role="alert" className="mt-3 text-rose-300">{error}</p>}
```

Three facts to say aloud:

1. **`fetch()` does not throw for HTTP errors.** A `404` or `500` still
   resolves; only `response.ok` (status 200–299) means success.
2. **The UI shows a status number, not the server's internal error.** The
   server's JSON body is a short public message such as
   `{ "error": "Internal server error" }`; the real cause stays in server logs.
3. **On failure, nothing is refreshed.** The previous task list stays on screen,
   which is the truth because PostgreSQL did not change.

#### Map each technical failure to a user state

| What happened | Status the browser sees | What the user should be able to do |
|---|---|---|
| Blank or 201-character title | `400` | Fix the input; keep the typed text |
| Session expired or signed out | `401` | Sign in again |
| Task deleted in another tab, or not owned | `404` | Refresh the list; the task is gone |
| PostgreSQL down or a bug | `500` | Try again later; nothing was saved |
| Wi-Fi off, server not running | no response (`catch`) | Check connection; retry |

#### Review finding to discuss (do not change code today)

App Day 4's page renders `Could not load tasks: {error}` using
`err.message`. That is helpful while learning locally, but a raw
PostgreSQL or connection message can reveal internal details in production.
Be ready to say: “Locally I show the message to debug; in production I would
show a generic message and log the details with a request ID on the server.”

Files to open deliberately:

- `frontend/app/TaskBoard.tsx`
- `frontend/app/api/tasks/route.ts`
- `frontend/app/api/tasks/[id]/route.ts`
- `frontend/lib/tasks.ts`
- `frontend/lib/db.ts`
- `backend/sql/schema.sql`

Answer before moving on:

- Which value is persistent, and which value is temporary interaction state?
- What starts this behavior?
- What should the user see while work is pending?
- What should remain unchanged when the operation fails?

### 5. Backend guided study (1 hour 30 minutes)

#### What

A backend request crosses trust boundaries: validate input, authenticate identity, authorize the resource, perform a bounded data operation, log internal failure safely, and return a deliberate response.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

Review one topic at a time. For each, cover the code, say what it does, then
uncover it and compare.

#### 5.1 HTTP: the MiniTrack status contract

| Request | Success | Client error | Server error |
|---|---|---|---|
| `GET /api/tasks?q=&status=` | `200` + task array | `401` anonymous | `500` |
| `POST /api/tasks` `{ "title": "..." }` | `201` + created task | `400` invalid JSON/title, `401` | `500` |
| `PATCH /api/tasks/:id` `{ "done": true }` or `{ "title": "..." }` | `200` + updated task | `400`, `401`, `404` not found or not owned | `500` |
| `DELETE /api/tasks/:id` | `200` + `{ "deleted": true }` | `400`, `401`, `404` | `500` |
| `GET /api/health` | `200` + `{ "ok": true }` | — | — |

`201 Created` tells the client a new resource exists. `404` for another user's
task is deliberate: it does not reveal that the ID exists.

#### 5.2 Validation: `frontend/lib/validation.ts`

These are the App Day 5 validation helpers (App Day 8 later added
`normalizeTaskFilters` for search parameters):

```ts
export function normalizeTitle(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const title = value.trim();
  return title.length >= 1 && title.length <= 200 ? title : null;
}

export function isValidId(raw: string): boolean {
  // Positive whole number without leading zeros, small enough to be exact in JavaScript.
  return /^[1-9]\d*$/.test(raw) && Number.isSafeInteger(Number(raw));
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
```

Why validate on the server when the input already has `maxLength={200}`?
Because anyone can send HTTP directly with `curl`; browser checks are for
convenience, server checks are for correctness. The database adds a third
line of defense: `CHECK (char_length(title) BETWEEN 1 AND 200)`.

#### 5.3 SQL: every pattern MiniTrack uses

The schema from App Day 3 (`backend/sql/schema.sql`), plus the App Day 11
migration (`backend/sql/migrations/003-task-owners.sql`):

```sql
CREATE TABLE IF NOT EXISTS tasks (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL CHECK (char_length(title) BETWEEN 1 AND 200),
  done BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- App Day 11, inside BEGIN ... COMMIT:
ALTER TABLE tasks
ADD COLUMN owner_id INTEGER NOT NULL
REFERENCES users(id)
ON DELETE CASCADE;

CREATE INDEX tasks_owner_id_id_idx
ON tasks (owner_id, id);
```

The owner-scoped queries after App Day 11. Every value is a numbered
placeholder (`$1`, `$2`, ...) and is sent separately from the SQL text:

```sql
-- List and search (App Days 8 + 11): $1 owner, $2 escaped pattern, $3 status
SELECT id, title, done, created_at
FROM tasks
WHERE owner_id = $1
  AND title ILIKE $2 ESCAPE '\'
  AND ($3::text = 'all' OR done = ($3::text = 'done'))
ORDER BY id;

-- Create (App Day 11): $1 owner, $2 title
INSERT INTO tasks (owner_id, title)
VALUES ($1, $2)
RETURNING id, title, done, created_at;

-- Rename (App Days 6 + 11): $1 title, $2 task ID, $3 owner
UPDATE tasks
SET title = $1
WHERE id = $2 AND owner_id = $3
RETURNING id, title, done, created_at;

-- Complete and delete follow the same "id AND owner_id" rule.
```

In the TypeScript files, the search predicate is written as `ESCAPE '\\'`
because a JavaScript template string turns `\\` into one backslash.

- **`$1` placeholders** stop SQL injection through values. They do **not**
  remove the wildcard meaning of `%` and `_` inside `ILIKE`; that is why
  App Day 8 escapes them first with `escapeLike`.
- **`RETURNING`** returns the exact saved row in the same round trip.
- **`AND owner_id = $n`** puts authorization inside the database operation.
  Another user's task simply matches zero rows.

#### 5.4 Connection pool: `frontend/lib/db.ts`

```ts
import 'server-only';
import { Pool } from 'pg';

// Cache the pool across Next.js development reloads.
const globalForPg = globalThis as typeof globalThis & { taskPool?: Pool };

export function getPool(): Pool {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL is missing. Copy frontend/.env.local.example to .env.local and edit it.');
  }
  // Reuse a bounded number of connections instead of reconnecting per request.
  globalForPg.taskPool ??= new Pool({ connectionString, max: 5 });
  return globalForPg.taskPool;
}
```

- `import 'server-only'` makes the build fail if a Client Component imports
  this file, so credentials never reach the browser.
- `max: 5` means at most five queries run at once **per Node process**. The
  sixth waits in the pool's queue. Waiting is backpressure, not failure — but
  without a timeout, a slow database turns into slow pages.
- **Connection budget:** app instances × pool `max` + migrations + admin tools
  must stay below PostgreSQL's connection limit. Ten instances × 5 = 50.

#### 5.5 Transactions and indexes

- **Transaction:** a group of statements that succeed or fail together.
  MiniTrack's request handlers each run **one** SQL statement, and PostgreSQL
  already makes a single statement atomic, so the app needs no explicit
  `BEGIN`. The App Day 11 migration uses `BEGIN ... COMMIT` because deleting
  sample rows, adding the column, and creating the index must not half-apply.
- **When would a request need a transaction?** When two writes must agree, for
  example “move a task to another list and update both list counters”. Then you
  would take one client from the pool, run `BEGIN`, the statements, and
  `COMMIT`, or `ROLLBACK` on error, and always release the client.
- **Indexes today:** the primary key on `id`, and `(owner_id, id)` which serves
  “this owner's tasks ordered by id” and “this owner's task with this id”.
- **Not indexed yet:** `title ILIKE '%term%'`. A normal B-tree cannot use a
  leading wildcard. Measure with `EXPLAIN (ANALYZE, BUFFERS)` before adding a
  trigram index (Prep Day 21 covers measurement).

#### 5.6 Authentication and authorization

Every task Route Handler starts by asking Auth.js who the caller is
(App Days 10–11):

```ts
const session = await auth();
if (!session?.user?.id) {
  return Response.json({ error: 'Unauthorized' }, { status: 401 });
}
```

- **Authentication** = who are you? (`auth()` verifies the signed session cookie.)
- **Authorization** = may you touch *this* task? (`owner_id` in the SQL predicate.)
- The owner ID **always** comes from `session.user.id`, never from request JSON,
  the URL, or a header.

#### 5.7 Caching

- The collection `GET` (App Day 3) sends `Cache-Control: no-store` so browsers
  and proxies do not keep private task lists.
- App Day 10: `auth()` reads cookies, so the task list is request-time work. Do
  not mark private session output with `"use cache"`.
- `router.refresh()` is **not** a cache. It asks the server to render again,
  which re-runs the owner-scoped `SELECT`.
- A shared cache such as Redis is not part of MiniTrack. If measurement ever
  justified one, its keys would have to include the owner ID and be invalidated
  on every mutation (Prep Day 21).

#### 5.8 Failure handling

```ts
} catch (error: unknown) {
  console.error('POST /api/tasks failed:', error); // Full detail stays in server logs.
  return Response.json({ error: 'Internal server error' }, { status: 500 });
}
```

- The client receives a stable, generic message; the log keeps the detail.
- Never log secrets, cookies, or `DATABASE_URL`.
- `POST` is **not idempotent**: retrying an uncertain create can insert twice.
  Safe retries need an idempotency key stored with a unique constraint.

### 6. MiniTrack implementation (1 hour)

**Milestone source:** Backend review across Days 1–15

There is no new code today. The three tasks are tracing, recall, and a speed
round.

#### Step 1: Trace POST line by line

This is the collection `POST` handler in `frontend/app/api/tasks/route.ts`
after App Days 10–11 (App Day 3's handler plus the session check and owner).
Compare it with your file; do not paste over your file.

```ts
import { auth } from '@/auth';
import { createTask } from '../../../lib/tasks';
import { isRecord, normalizeTitle } from '../../../lib/validation';

export async function POST(request: Request): Promise<Response> {
  // 1. Authenticate: who is calling?
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // 2. Parse: network JSON is untrusted, so keep it unknown until validated.
  let parsingBody = true;
  try {
    const body: unknown = await request.json();
    parsingBody = false;
    // 3. Validate: a trimmed string of 1–200 characters.
    const title = normalizeTitle(isRecord(body) ? body.title : undefined);
    if (!title) {
      return Response.json({ error: 'title must be 1–200 characters' }, { status: 400 });
    }

    // 4. Persist with the owner from the verified session, then 5. respond.
    return Response.json(await createTask(session.user.id, title), { status: 201 });
  } catch (error: unknown) {
    if (parsingBody) {
      return Response.json({ error: 'Invalid JSON' }, { status: 400 });
    }
    console.error('POST /api/tasks failed:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

The data function in `frontend/lib/tasks.ts` (App Day 11, keeping App Day 3's
missing-row guard):

```ts
export async function createTask(ownerId: string, title: string): Promise<Task> {
  const result = await getPool().query<TaskRow>(
    `
      INSERT INTO tasks (owner_id, title)
      VALUES ($1, $2)
      RETURNING id, title, done, created_at
    `,
    [ownerId, title],
  );
  const row = result.rows[0];
  if (!row) throw new Error('Inserted task was not returned by PostgreSQL');
  return toTask(row); // Date -> ISO string for JSON.
}
```

Fill in this table in your notebook **without looking**, then compare:

| Line | Boundary | Possible failure | Response |
|---|---|---|---|
| `await auth()` | Identity | No or expired cookie | `401` |
| `await request.json()` | Untrusted input | Body is not JSON | `400` |
| `normalizeTitle(...)` | Validation | Blank, too long, not a string | `400` |
| `createTask(session.user.id, title)` | Data layer + pool | PostgreSQL down, pool timeout | `500`, logged |
| `INSERT ... RETURNING` | Database | `CHECK` violation (should be impossible after validation) | `500`, logged |
| `Response.json(..., { status: 201 })` | HTTP contract | — | `201` + task |

#### Step 2: Trace PATCH line by line

The item handler in `frontend/app/api/tasks/[id]/route.ts` combines App Day 5
(ID check, completion), App Day 6 (exactly one field), and App Days 10–11
(session and owner). `DELETE` follows the same pattern.

```ts
import { auth } from '@/auth';
import type { Task } from '../../../types';
import { renameTask, setDone } from '../../../../lib/tasks';
import { isRecord, isValidId, normalizeTitle } from '../../../../lib/validation';

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: RouteContext): Promise<Response> {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const ownerId = session.user.id;

  // Next.js provides dynamic route params as a Promise.
  const { id } = await params;
  if (!isValidId(id)) {
    return Response.json({ error: 'Invalid task ID' }, { status: 400 });
  }

  let parsingBody = true;
  try {
    const body: unknown = await request.json();
    parsingBody = false;
    if (!isRecord(body)) {
      return Response.json({ error: 'Provide either done or title' }, { status: 400 });
    }

    const hasDone = Object.hasOwn(body, 'done');
    const hasTitle = Object.hasOwn(body, 'title');
    // Both true or both false means the request contract is ambiguous.
    if (hasDone === hasTitle) {
      return Response.json({ error: 'Provide either done or title' }, { status: 400 });
    }

    let updateTask: () => Promise<Task | null>;
    if (hasTitle) {
      const title = normalizeTitle(body.title);
      if (!title) {
        return Response.json({ error: 'title must be 1–200 characters' }, { status: 400 });
      }
      updateTask = () => renameTask(ownerId, id, title);
    } else if (typeof body.done === 'boolean') {
      const done = body.done;
      updateTask = () => setDone(ownerId, id, done);
    } else {
      return Response.json({ error: 'done must be boolean' }, { status: 400 });
    }
    const task = await updateTask();
    // null means "no row with this id AND this owner": not found, not an exception.
    return task
      ? Response.json(task)
      : Response.json({ error: 'Task not found' }, { status: 404 });
  } catch (error: unknown) {
    if (parsingBody) {
      return Response.json({ error: 'Invalid JSON' }, { status: 400 });
    }
    console.error(`PATCH /api/tasks/${id} failed:`, error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

The completion data function, owner-scoped the same way App Day 11 scopes
`renameTask`:

```ts
export async function setDone(ownerId: string, id: string, done: boolean): Promise<Task | null> {
  const result = await getPool().query<TaskRow>(
    `
      UPDATE tasks
      SET done = $1
      WHERE id = $2 AND owner_id = $3
      RETURNING id, title, done, created_at
    `,
    [done, id, ownerId],
  );
  const row = result.rows[0];
  return row ? toTask(row) : null;
}
```

Say aloud what each of these requests returns and **which line decides it**:

| Request | Status | Deciding line |
|---|---:|---|
| No cookie, `PATCH /api/tasks/7` `{ "done": true }` | 401 | `!session?.user?.id` |
| Signed in, `PATCH /api/tasks/abc` | 400 | `!isValidId(id)` |
| Signed in, body `{ "title": "x", "done": true }` | 400 | `hasDone === hasTitle` |
| Signed in, body `{ "done": "yes" }` | 400 | `typeof body.done === 'boolean'` fails |
| Signed in as User B, task 42 owned by User A | 404 | `UPDATE` matches zero rows |
| Signed in, own task 7, `{ "done": true }` | 200 | `Response.json(task)` |

#### Step 3: Write the SQL patterns from memory

On a blank notebook page, write the list, create, rename, complete, and delete
queries. For **every** placeholder, write what value fills it and where that
value came from (session, URL, or validated body). Compare with section 5.3.

#### Step 4: Answer 20 backend questions aloud

Set a timer for 40 minutes (about two minutes per question). Answer aloud, then
reveal the model answers. Mark each as ✅ confident, 🟡 partial, or ❌ missed,
and repair the weakest three by rereading the matching part of section 5.

1. Why does `POST /api/tasks` return `201` instead of `200`?
2. What is the difference between `400`, `404`, and `500` in MiniTrack?
3. What is the difference between `401` and `403`, and why does MiniTrack return `404` for another user's task?
4. Why is the request body typed as `unknown`?
5. Why validate the title on the server if the input has `maxLength`?
6. Why use `$1` instead of a template string in SQL?
7. Does parameterization make `%` and `_` safe inside `ILIKE`?
8. Why use `RETURNING`?
9. Why use a connection pool, and what does `max: 5` mean?
10. What happens when every pooled connection is busy?
11. Why can adding app instances overload PostgreSQL?
12. Which indexes does MiniTrack have, and why not index every column?
13. What is a transaction, and where does MiniTrack use one?
14. What is authentication versus authorization?
15. Where must the owner ID come from?
16. What is IDOR, and how does MiniTrack prevent it?
17. Why `Cache-Control: no-store`, and why not `"use cache"` for task lists?
18. Is retrying a failed `POST` safe?
19. What should happen when PostgreSQL is unavailable?
20. Does `await pool.query(...)` block the Node.js server?

<details>
<summary>Show model answers</summary>

1. `201 Created` says a new resource now exists and the body is that resource;
   `200` would be a generic success.
2. `400`: the request itself is invalid (bad JSON, bad ID, bad title). `404`:
   valid request but no matching task for this owner. `500`: unexpected server
   or database failure; the client should retry later, not change input.
3. `401` means no valid authentication; `403` means known identity without
   permission. MiniTrack's owner-scoped `UPDATE` matches zero rows for another
   user's task and returns `404`, which avoids revealing that ID 42 exists.
4. JSON from the network can be any shape. `unknown` forces narrowing with
   `isRecord` and `typeof` before reading properties.
5. Any client can bypass the browser with `curl`. Browser checks are UX; server
   checks are correctness; the database `CHECK` is the last line.
6. Placeholders send values separately from SQL syntax, so a title like
   `'); DROP TABLE tasks; --` is stored as text, never executed.
7. No. Parameters stop injection, but `%` and `_` are still wildcards inside the
   pattern. `escapeLike` escapes them, and `ESCAPE '\'` tells PostgreSQL which
   escape character is used.
8. It returns the saved row (generated `id`, default `done`, `created_at`) in the
   same round trip, without a racy second `SELECT`.
9. Opening a PostgreSQL connection is expensive; a pool reuses a few. `max: 5`
   caps concurrent connections per Node process.
10. Extra queries wait in the pool queue. Latency rises; with a timeout they fail
    with an explicit error instead of hanging.
11. Each instance has its own pool. 20 instances × 20 connections = 400
    connections, which can exceed the database limit.
12. The primary key on `id` and `(owner_id, id)`. Every index costs storage and
    slows writes, so add one only after `EXPLAIN (ANALYZE, BUFFERS)` shows a
    need.
13. A group of statements that commit or roll back together. Each MiniTrack
    request is one atomic statement; the App Day 11 migration uses
    `BEGIN ... COMMIT`.
14. Authentication proves who you are (Auth.js session). Authorization decides
    which rows you may touch (`owner_id` predicate).
15. From the verified server session (`session.user.id`), never from the body,
    URL, or headers, which the client controls.
16. Insecure direct object reference: changing an ID to reach someone else's
    object. `WHERE id = $2 AND owner_id = $3` makes it impossible in one atomic
    query.
17. Task lists are private and change often. `no-store` stops shared caches
    from keeping them; `"use cache"` on cookie-dependent output could serve one
    user's data to another.
18. Not blindly. The first attempt may have committed before the connection
    failed, so a retry can duplicate the task. Use an idempotency key or retry
    only idempotent operations.
19. The data call rejects; the handler logs the error server-side and returns a
    generic `500` (or `503`). The UI shows a retry message and does not pretend
    the change was saved.
20. No. `await` pauses only that request's function; the event loop keeps
    serving other requests while PostgreSQL works.

</details>

#### Step 5: Run the existing checks

From the repository root:

```bash
cd frontend
npm run test:unit
npm run test:integration
npx tsc --noEmit
```

Then, with `npm run dev` running, check the anonymous boundary from a second
terminal (plain `curl` sends no browser cookie):

```bash
curl -i http://localhost:3000/api/tasks
curl -i -X PATCH http://localhost:3000/api/tasks/1 \
  -H 'Content-Type: application/json' -d '{"done":true}'
```

**Expected observation:** both `curl` requests return `401` with
`{"error":"Unauthorized"}`; the tests and type check pass. In the signed-in
browser, open DevTools → Network, toggle a task, and confirm the `PATCH`
returns `200` with the updated task JSON.

**Failure check:** stop PostgreSQL the way you started it (for example, find
the service name with `brew services list` and stop it), then toggle a task in
the browser. Expect `Could not update task (500)` on screen, a
`PATCH /api/tasks/... failed:` line in the Next.js terminal, and no SQL text in
the browser. Restart PostgreSQL afterwards.

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant U as You
  participant B as Browser (TaskBoard.tsx)
  participant R as PATCH /api/tasks/[id]
  participant A as Auth.js auth()
  participant P as pg Pool and PostgreSQL
  U->>B: Click checkbox on task 7
  B->>R: PATCH /api/tasks/7 {"done":true} + session cookie
  R->>A: auth()
  A-->>R: session.user.id = "3"
  R->>R: isValidId("7"), isRecord(body), exactly one field
  R->>P: UPDATE tasks SET done=$1 WHERE id=$2 AND owner_id=$3 RETURNING ...
  P-->>R: Updated row (or zero rows -> 404, or error -> 500)
  R-->>B: 200 + task JSON
  B->>B: response.ok, router.refresh()
  B-->>U: Checkbox shows done after fresh server render
```

Trace one concrete input. Name every boundary, value, and possible failure.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Retry every failed POST automatically.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** An uncertain first request may have committed, so a retry can create a duplicate.

**Root cause:** A non-idempotent operation was retried without deduplication.

**Restore and verify:** Use an idempotency key or limit retries to failures and operations with safe semantics.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

### 9. Interview questions and answers (30 minutes)

#### Q1. What is communicating api failures to users?

**Interview-ready answer:** “I check `response.ok`, because `fetch` resolves
for 4xx and 5xx. I map each class of failure to something the user can act
on — fix the input, sign in again, refresh, or retry later — and I never show
stack traces or SQL. The server returns a short public message and logs the
detail.”

**Example:** In `frontend/app/TaskBoard.tsx`, `toggleTask` sets
`Could not update task (500)` when PostgreSQL is down, and the `catch` branch
sets `Could not connect to the server` when no response arrives. The message
renders in `<p role="alert">`, and the old task list stays visible because
nothing was refreshed.

**Senior follow-up:** Showing only a status code is fine for a learning app.
At scale I would return a stable machine-readable error code plus a request ID,
so support can find the server log line without the UI exposing internals.

#### Q2. How should the backend handle http, validation, sql, transactions, pools, auth, caching, and failure handling?

**Interview-ready answer:** “Each Route Handler authenticates with `auth()`,
parses JSON as `unknown`, validates the ID and body, calls a data function that
runs parameterized SQL scoped by `owner_id`, and maps the outcome to `200`,
`201`, `400`, `401`, `404`, or `500`. Unexpected errors are logged on the
server, and the client gets a generic message.”

**Example:** `PATCH /api/tasks/7 {"done":true}` → `auth()` gives owner `3` →
`isValidId('7')` → `setDone('3', '7', true)` runs
`UPDATE ... WHERE id = $2 AND owner_id = $3 RETURNING ...` → `200` with the
row, or `404` if zero rows matched.

**Senior follow-up:** If PostgreSQL is unavailable, the pool call rejects and
the handler returns `500`. The log must not include cookies, `DATABASE_URL`, or
task text. Adding a pool acquisition timeout turns a hanging request into a
fast, explicit failure.

#### Q3. What invariant makes the counting plus heap solution correct?

**Interview-ready answer:** “Count frequencies first, then use a heap or
bucket strategy to select the k most frequent values. While scanning distinct
values, the size-k min-heap always holds the k most frequent values seen so
far, with the weakest at the front, so anything skipped or evicted can never be
in the final answer.”

**Example:** For `[1, 1, 1, 2, 2, 3]` and `k = 2`, the counts are
`{1: 3, 2: 2, 3: 1}`. The heap keeps `1:3` and `2:2`; `3:1` cannot beat the
weakest kept count `2`; the result is `[1, 2]`.

**Senior follow-up:** The cost is O(n + u log k) expected time, assuming
average O(1) hashing. If `k` is close to `u`, sorting is equally good. For an
expected O(n) bound, use count buckets.

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** “Backend reliability comes from explicit
contracts and bounded behavior at every trust and resource boundary: the
session for identity, validation for input, `owner_id` in SQL for
authorization, a bounded pool for database load, and stable status codes for
the UI.”

**Example:** A signed-in user clicks a checkbox; `TaskBoard.tsx` sends
`PATCH /api/tasks/7`; the Route Handler authenticates and validates;
`setDone` runs the owner-scoped `UPDATE`; the `200` triggers
`router.refresh()`, which re-runs the owner-scoped `SELECT` and renders the
checked box.

**Senior follow-up:** The first thing I would measure is database time per
request and pool wait time. Those show whether latency comes from slow queries
(fix with indexes or pagination) or too much concurrency for the pool, before
I add any infrastructure.

### 10. Complexity and operational cost

- **DSA:** O(n + u log k) expected time and O(u + k) extra space, where `u` is the number of distinct values; bucket sort reaches expected O(n).
- **Application:** Latency includes queueing, application work, database pool wait, query execution, and network time. Measure the components before scaling.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 20 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 20: run a backend and postgresql deep review`

<a id="prep-day-21"></a>

## Prep Day 21 — Design MiniTrack for realistic scale

**Date:** Friday, December 18, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Design MiniTrack for realistic scale.

[Prep Day 20](../lessons/interview-prep/prep-day-20.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](../lessons/interview-prep/README.md) · [Prep Day 22](../lessons/interview-prep/prep-day-22.md)

**Everything to read today is below.** The original
[app roadmap](./APP_BUILD_ROADMAP.md) (including its optional
infrastructure Days 19–25), [app architecture](./ARCHITECTURE.md),
[App Day 8](../lessons/day-08.md), [App Day 11](../lessons/day-11.md),
[App Day 15](../lessons/day-15.md), and
[DSA Day 21](../dsa-python/lessons/dsa-day-21.md) remain available for
comparison. Today is a **system-design day: there is no new feature code**.
SQL shown under “design sketch” is for discussion, not for adding to the app.
The line-by-line backend review was Prep Day 20; the timed four-part mock is
Prep Day 22. Write runnable code only in the named practice file, not in this
Markdown file.

### Learning objectives

- explain defining user-visible requirements in beginner-friendly language;
- explain scaling the measured bottleneck and its failure boundary;
- implement or verify the listed MiniTrack milestone;
- solve DSA Day 21 using the grid DFS pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **grid DFS** pattern?

Use this format:

```md
## Friday, December 18, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Defining user-visible requirements:** Begin system design with user journeys, scale assumptions, latency expectations, consistency needs, accessibility, and failure behavior before choosing infrastructure.

**Backend focus — Scaling the measured bottleneck:** Start with one stateless application and PostgreSQL. Add indexes, pagination, pool budgets, caching, replicas, load balancing, and observability only when requirements or measurements justify them.

**Today's connection:** System design connects product behavior, data correctness, security, performance, operations, and cost.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 21: grid DFS"]
  DSA --> FE["Frontend: Defining user-visible requirements"]
  FE --> BE["Backend: Scaling the measured bottleneck"]
  BE --> App["MiniTrack: Design MiniTrack for realistic scale"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-21.py`](../dsa-python/practice/day-21.py)
**Pattern:** grid DFS

#### Problem: Number of Islands

A grid is a list of rows; each cell is the **string** `'1'` (land) or `'0'`
(water). An **island** is a group of land cells connected up, down, left, or
right — **not diagonally**. Return how many islands there are.
Assumptions used by this course:

- every row has the same length;
- an empty grid (`[]`) has `0` islands;
- the function may change the grid it receives (it marks visited land as
  `'0'`), so pass a copy if the caller still needs the original.

```python
solve([['1', '1', '0'],
       ['0', '1', '0'],
       ['0', '0', '1']])  # 2
```

The top-left three land cells form one island; the bottom-right cell is a
second island.

#### Start coding

In the practice file, replace the `raise NotImplementedError` line with your
own implementation. This is the starting shape:

```python
def solve(grid):
    # Return the number of 4-directionally connected groups of '1' cells.
    raise NotImplementedError
```

Python pieces used below, one at a time:

1. **Rows and columns:** `len(grid)` is the number of rows and `len(grid[0])` is
   the number of columns. `grid[r][c]` is the cell in row `r`, column `c`.
2. **A list as a stack:** `stack.append(item)` puts an item on top and
   `stack.pop()` removes the top item (last in, first out). Exploring with a
   stack is an iterative **depth-first search (DFS)**.
3. **Tuples and unpacking:** `(r, c)` stores a position. `x, y = stack.pop()`
   takes the tuple apart into two variables.
4. **Directions:** `((1, 0), (-1, 0), (0, 1), (0, -1))` means down, up, right,
   and left. Adding `dx, dy` to `x, y` gives a neighbor.
5. **Bounds check:** `0 <= nx < rows` is Python's chained comparison; it is
   true only when `nx` is a valid row index.

```mermaid
flowchart TD
  Start[Scan every cell row by row] --> Land{Cell is '1'?}
  Land -- No --> NextCell[Move to next cell]
  Land -- Yes --> NewIsland[Count a new island]
  NewIsland --> Mark[Mark cell '0' and push it on the stack]
  Mark --> Pop[Pop a cell from the stack]
  Pop --> Neighbors[Check its four neighbors]
  Neighbors --> Valid{Inside grid and '1'?}
  Valid -- Yes --> MarkN[Mark neighbor '0' and push it]
  Valid -- No --> Empty{Stack empty?}
  MarkN --> Empty
  Empty -- No --> Pop
  Empty -- Yes --> NextCell
  NextCell --> Done{All cells scanned?}
  Done -- No --> Land
  Done -- Yes --> Return[Return island count]
```

#### Invariant to say aloud

Visit each land cell once, mark it seen, and recursively or iteratively explore its valid neighbors.

More precisely: a land cell is marked `'0'` **at the moment it is pushed**, so
no cell is pushed twice, and when the stack becomes empty, the whole island
containing the starting cell has been erased.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 21
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** the day-specific checker accepts your implementation,
and the completed reference suite still passes. The checker has only one
example, so your own edge cases matter today.

You can also temporarily add these checks below your `solve` function in the
practice file, then run `python3 dsa-python/practice/day-21.py`. Each call uses
a fresh grid literal, so marking cells cannot affect the next check:

```python
if __name__ == '__main__':
    assert solve([['1', '1', '0'], ['0', '1', '0'], ['0', '0', '1']]) == 2
    assert solve([]) == 0
    assert solve([['0', '0'], ['0', '0']]) == 0
    assert solve([['1']]) == 1
    assert solve([['1', '0'], ['0', '1']]) == 2  # Diagonal cells are not connected.
    assert solve([['1', '1', '1'], ['0', '1', '0'], ['1', '1', '1']]) == 1
    assert solve([['1', '0', '1', '0', '1']]) == 3
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

There is no sensible “slower but simpler” brute force: every correct solution
must look at every cell at least once. The simpler alternative is a
**recursive** DFS that records visited cells in a set and leaves the grid
unchanged.

<details>
<summary>Show the simple recursive solution</summary>

```python
def solve(grid):
    if not grid:
        return 0
    rows, cols = len(grid), len(grid[0])
    seen = set()  # positions already explored

    def explore(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols:
            return  # outside the grid
        if grid[r][c] != '1' or (r, c) in seen:
            return  # water, or already explored
        seen.add((r, c))
        explore(r + 1, c)
        explore(r - 1, c)
        explore(r, c + 1)
        explore(r, c - 1)

    count = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1' and (r, c) not in seen:
                count += 1
                explore(r, c)
    return count
```

</details>

This is also O(rows × columns) time and O(rows × columns) extra space for the
`seen` set. Its weakness is recursion depth: one long snake-shaped island can
exceed Python's default recursion limit of about 1,000 calls and crash with
`RecursionError`. The iterative stack below avoids that.

#### Optimized code — reveal after attempting

<details>
<summary>Show the Number of Islands solution</summary>

```python
def solve(grid):
    if not grid:
        return 0
    rows, cols = len(grid), len(grid[0])
    count = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] != '1':
                continue
            count += 1  # found land not erased by an earlier island
            stack = [(r, c)]
            grid[r][c] = '0'  # mark as soon as discovered
            while stack:
                x, y = stack.pop()
                for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < rows and 0 <= ny < cols and grid[nx][ny] == '1':
                        grid[nx][ny] = '0'  # mark before pushing so it is pushed once
                        stack.append((nx, ny))
    return count
```

</details>

Every cell is scanned once by the outer loops and pushed at most once, so time
is **O(rows × columns)**. The stack can hold O(rows × columns) cells in the
worst case (a grid that is all land), and no other extra structure is used.

Trace for the sample grid (positions are `(row, column)`):

| Step | Event | Stack after | Cells marked `'0'` so far | Count |
|---:|---|---|---|---:|
| 1 | Scan finds `(0,0)` is `'1'`; start island | `[(0,0)]` | `(0,0)` | 1 |
| 2 | Pop `(0,0)`; neighbor `(0,1)` is land | `[(0,1)]` | `(0,0) (0,1)` | 1 |
| 3 | Pop `(0,1)`; neighbor `(1,1)` is land | `[(1,1)]` | `+ (1,1)` | 1 |
| 4 | Pop `(1,1)`; no land neighbors | `[]` | — | 1 |
| 5 | Scan skips `(0,1)…(2,1)`: all `'0'` now | — | — | 1 |
| 6 | Scan finds `(2,2)`; start island | `[(2,2)]` | `+ (2,2)` | 2 |
| 7 | Pop `(2,2)`; no neighbors | `[]` | — | 2 |
| End | Return | — | — | **2** |

#### DSA interview questions and answers

##### DSA Q1. What is the simplest approach?

**Interview-ready answer:** “I scan every cell. When I find unvisited land, I
count a new island and run a recursive flood fill that visits every connected
land cell and records it in a `seen` set. There is no meaningfully slower brute
force, because every cell must be examined anyway.”

**Example:** In `[['1', '0'], ['0', '1']]`, the scan starts a flood fill at
`(0,0)`, which visits only that cell, then another at `(1,1)`: two islands.

**Follow-up:** The recursive version can raise `RecursionError` on a long
island in Python. An explicit stack has the same logic without that limit.

##### DSA Q2. What is the core idea of grid DFS?

**Interview-ready answer:** “Treat each land cell as a graph node with up to
four neighbors. Each time the scan finds land that has not been erased yet, it
is the first cell of a new island; DFS from there erases the whole island so it
is never counted again.”

**Example:** After erasing `(0,0)`, `(0,1)`, and `(1,1)`, the scan passes over
those cells as water and next finds `(2,2)`.

**Follow-up:** BFS with a `deque` works equally well; the order of exploring
does not change which cells belong to the component.

##### DSA Q3. Why mark a cell when it is pushed, not when it is popped?

**Interview-ready answer:** “Marking on push guarantees each cell enters the
stack at most once. If I marked on pop, two neighbors could both push the same
unmarked cell before either pops it, which wastes work and inflates the stack.”

**Example:** In a 2×2 block of land, `(0,1)` and `(1,0)` are both neighbors of
`(1,1)`. Marking on push means only the first of them pushes `(1,1)`.

**Follow-up:** Marking on pop is still *correct* for counting if you skip
already-marked cells after popping, but its worst-case stack can grow toward
O(4 × cells).

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “Time is O(rows × columns): each cell is scanned
once and pushed at most once, and each push checks four neighbors. Extra space
is O(rows × columns) in the worst case, for the stack when the grid is all
land.”

**Example:** A 1000 × 1000 grid of all `'1'` produces one island but can hold
many cells on the stack at once.

**Follow-up:** BFS has a different worst-case frontier shape, but the same
O(rows × columns) bound. If space is critical, union-find also uses
O(rows × columns) for its parent array.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “An empty grid, all water, a single land cell,
diagonal-only land, one row, one column, and one large island with a hole or
U-shape. I also confirm whether cells are strings or integers.”

**Example:** `[['1', '0'], ['0', '1']]` returns `2` because diagonals do not
connect; `[['1', '0', '1', '0', '1']]` returns `3`.

**Follow-up:** A grid of integers `1` would silently return `0` here because
`1 != '1'`. Clarify the input type before coding.

##### DSA Q6. How would you avoid changing the input grid?

**Interview-ready answer:** “Keep a separate `seen` set of positions, or copy
the grid first with `[row[:] for row in grid]`. Both cost O(rows × columns)
extra memory but leave the caller's data untouched.”

**Example:** A caller that counts islands and then draws the original map needs
the original `'1'` cells to still be there.

**Follow-up:** If land cells are added one at a time and the count must be
reported after each addition (“Number of Islands II”), rerunning DFS each time
is too slow; union-find merges neighboring islands in nearly constant amortized
time per addition.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

Begin system design with user journeys, scale assumptions, latency expectations, consistency needs, accessibility, and failure behavior before choosing infrastructure.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.

#### How: write the requirements before any boxes and arrows

Write each list in your notebook from memory first, then compare.

**Functional requirements (what a user can do):**

1. Sign in and out with GitHub.
2. See only their own tasks.
3. Create, rename, complete, and delete a task.
4. Search by title and filter by `all`, `open`, or `done`; the filters live in
   the URL (`/?q=sql&status=open`) so reload and sharing work.

**Non-functional requirements (how well it must behave):**

| Quality | MiniTrack requirement | Where it already shows up |
|---|---|---|
| Correctness | Saved data survives restarts; PostgreSQL is the source of truth | `router.refresh()` re-reads the database |
| Consistency | After my own change, my next view shows it (read-your-own-writes) | Mutation, then refresh reads the same primary database |
| Security | No user can read or change another user's tasks | `owner_id` in every SQL predicate |
| Latency | Target to agree with the interviewer, e.g. p95 server time under 300 ms for list and mutations | Not measured yet — say so |
| Availability | A learning product; brief downtime during deploys is acceptable | One app instance today |
| Accessibility | Keyboard-only use, labelled controls, announced errors | `<label>`, `role="alert"` (App Day 13) |
| Failure behavior | Errors are visible and nothing pretends to be saved | `Could not update task (500)` |

**Out of scope (say it out loud):** teams and sharing, real-time collaboration,
offline mode, mobile apps, multi-region.

**User-visible latency budget for one mutation** (illustrative, to discuss):

```mermaid
flowchart LR
  Click["Click checkbox"] --> Net1["Network to server"]
  Net1 --> Auth["auth() session check"]
  Auth --> Pool["Wait for pool connection"]
  Pool --> SQL["UPDATE ... RETURNING"]
  SQL --> Net2["Response to browser"]
  Net2 --> Refresh["router.refresh(): server re-renders with SELECT"]
  Refresh --> Paint["Updated list painted"]
```

The user waits for **two** server round trips (the `PATCH`, then the refresh).
Optimistic UI could hide the second one, but App Day 7 deliberately chose
server-confirmed updates first. Saying this trade-off is part of the design.

Files to open deliberately:

- `docs/ARCHITECTURE.md`
- `docs/APP_BUILD_ROADMAP.md`
- `frontend/lib/db.ts`
- `frontend/lib/tasks.ts`

Answer before moving on:

- Which value is persistent, and which value is temporary interaction state?
- What starts this behavior?
- What should the user see while work is pending?
- What should remain unchanged when the operation fails?

### 5. Backend guided study (1 hour 30 minutes)

#### What

Start with one stateless application and PostgreSQL. Add indexes, pagination, pool budgets, caching, replicas, load balancing, and observability only when requirements or measurements justify them.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

#### 5.1 Estimate before choosing infrastructure

Rough numbers turn “will it scale?” into arithmetic. These are **assumptions**
to state, not facts:

| Quantity | Assumption | Result |
|---|---|---|
| Registered users | 10,000 | — |
| Daily active users | 20% | 2,000 |
| Requests per active user per day | 40 (page loads + mutations) | 80,000 requests/day |
| Average rate | 80,000 ÷ 86,400 s | about 1 request/second |
| Peak rate | 10 × average | about 10 requests/second |
| Tasks per user | up to 500 | 5 million rows worst case |
| Row size with index overhead | about 200 bytes | about 1 GB |

**Conclusion to say aloud:** “At about 10 requests per second and roughly a
gigabyte of data, one Next.js instance and one managed PostgreSQL database
with backups are enough. I would not add caches, replicas, Kubernetes, or
microservices for this load. I would add measurement first.”

#### 5.2 The scaling ladder: each step needs a measured trigger

Climb only as far as evidence requires, and climb in this order:

| Step | Trigger you must observe first | Cost or risk it adds |
|---:|---|---|
| 1. Measure | Always first: p95 latency, error rate, query time, pool wait | Telemetry setup; never log task text or cookies |
| 2. Index | `EXPLAIN (ANALYZE, BUFFERS)` shows a slow scan on a frequent query | Slower writes, more storage |
| 3. Paginate | Lists grow large enough that response size or render time hurts | API and UI change; stable ordering needed |
| 4. Tune pool and timeouts | Pool wait time grows while the database still has headroom | Must fit the connection budget |
| 5. Scale up the database | CPU, memory, or I/O saturated after query fixes | Money |
| 6. Two or more app instances + load balancer | One instance's CPU saturates, or you need availability during deploys | Pools multiply; health checks needed |
| 7. Connection pooler (PgBouncer or managed) | Instances × pool size approaches the database connection limit | Some session features behave differently |
| 8. Read replica | Read load saturates the primary after the steps above | Replication lag breaks read-your-own-writes |
| 9. Cache (for example Redis) | A shared, expensive, read-heavy query dominates | Invalidation bugs; private-data leaks if keys lack owner ID |

**Deferred on purpose:** sharding, microservices, and Kubernetes. MiniTrack has
no measurement showing a need for them. Sharding comes only after query design,
indexes, pagination, pooling, a bigger database, and replicas are exhausted.
Microservices solve team-ownership and independent-deployment problems that a
one-person app does not have. Kubernetes is justified when its operational
cost is smaller than the scale, reliability, or team need it serves.

#### 5.3 Indexes and the query plan

MiniTrack's index from App Day 11:

```sql
CREATE INDEX tasks_owner_id_id_idx
ON tasks (owner_id, id);
```

It serves the two most common shapes: “this owner's tasks ordered by `id`” and
“this owner's task with this `id`”. To check a plan on your **local** database
(replace `1` with an owner ID that exists in your `users` table):

```bash
psql -d minitrack -c '\d tasks'
psql -d minitrack -c "EXPLAIN (ANALYZE, BUFFERS) SELECT id, title, done, created_at FROM tasks WHERE owner_id = 1 ORDER BY id;"
```

**Expected observation:** `\d tasks` lists the primary key and
`tasks_owner_id_id_idx`. With only a few rows, the plan may still say
`Seq Scan`: reading a tiny table directly is cheaper than using an index. That
is why plans must be measured with representative data volume.

Search uses `title ILIKE '%term%'`. A normal B-tree index cannot help with a
leading `%`. PostgreSQL's `pg_trgm` trigram index can, but only add it after a
plan proves search is slow.

#### 5.4 Pagination (design sketch, not code to add today)

Today `searchTasks` returns every matching row. If lists grew large, the next
step would be **cursor pagination** that reuses the `(owner_id, id)` index:

```sql
-- $1 owner from the session, $2 last id the client saw, $3 page size (bounded)
SELECT id, title, done, created_at
FROM tasks
WHERE owner_id = $1
  AND id > $2
ORDER BY id
LIMIT $3;
```

`OFFSET 10000` would make PostgreSQL read and discard 10,000 rows on every
page; a cursor jumps straight to the right place in the index and stays stable
when new tasks are inserted.

#### 5.5 Connection budget

From `frontend/lib/db.ts`, each Node process creates
`new Pool({ connectionString, max: 5 })`. The budget is:

```text
app instances × pool max + migration jobs + admin/monitoring connections
  must stay below PostgreSQL max_connections, with a safety margin
```

Example: 4 instances × 5 + 1 migration + 3 admin = 24 connections. Scaling to
40 instances would ask for 200 + 4, which can exceed a small managed database's
limit. That is the trigger for a pooler (step 7), not for more databases.

#### 5.6 Replicas and caching: correctness first

- **Replica lag:** after `PATCH`, `router.refresh()` re-reads the list. If that
  read went to a lagging replica, the user would see the old value. Rule: reads
  right after the user's own write stay on the primary.
- **Cache keys for private data** must include the owner ID and filters, for
  example `tasks:owner:3:q=sql:status=open`, and every create, rename,
  complete, and delete must invalidate that owner's keys. If the cache is down,
  read PostgreSQL instead of failing.

#### 5.7 Failure modes and observability

| Failure | What the user sees | Detection signal | Response |
|---|---|---|---|
| PostgreSQL down | `Could not update task (500)`, page shows load error | Error rate, failed health check | Restore service; restore from backup if data lost |
| Pool exhausted | Slow pages, then timeouts | Pool wait time, p95 latency | Find slow query; fix before raising `max` |
| Slow search on large data | Search takes seconds | Query duration by route | `EXPLAIN`, then trigram index or pagination |
| GitHub OAuth outage | Cannot sign in; signed-in sessions continue | Sign-in error rate | Communicate; no workaround that weakens auth |
| Bad deploy | Errors after release | Error rate change at deploy time | Roll back app; schema recovery is separate (App Day 15) |
| Bad migration | Data errors | Integrity checks, user reports | Stop rollout; restore point or reviewed roll-forward |

**Signals to measure first (service-level indicators):** request rate, error
rate, p50/p95/p99 latency per route, pool wait time, query duration, and
database CPU/connections. Logs are structured, carry a request ID, and never
include cookies, secrets, `DATABASE_URL`, or task titles.

### 6. MiniTrack implementation (1 hour)

**Milestone source:** Requirements, APIs, data model, scaling, and observability

1. State functional and non-functional requirements.
2. Draw APIs, schema, read path, write path, and trust boundaries.
3. Discuss bottlenecks, failure modes, metrics, and the next justified scaling step.

There is no new code. The output is a **30–40 minute spoken design** you can
give without notes. Practice it twice with a timer.

#### Design script with timeboxes

| Minutes | Section | Say this |
|---:|---|---|
| 0–5 | Requirements | Section 4 functional list, non-functional table, out of scope |
| 5–10 | Estimates | Section 5.1 arithmetic and the conclusion |
| 10–15 | API | Table below |
| 15–20 | Data model | Schema below; why `owner_id` and the index |
| 20–28 | Architecture | Diagram below; read path and write path |
| 28–36 | Bottlenecks and scaling | Section 5.2 ladder with triggers; what is deferred and why |
| 36–40 | Failures and observability | Section 5.7 table and signals |

#### API

| Method and path | Purpose | Auth | Success |
|---|---|---|---|
| `GET /` with `?q=&status=` | Server-rendered task page | Session required | HTML stream |
| `GET /api/tasks?q=&status=` | Task list as JSON | Session required | `200` |
| `POST /api/tasks` | Create `{ "title" }` | Session required | `201` |
| `PATCH /api/tasks/:id` | Exactly one of `{ "title" }` or `{ "done" }` | Session + owner | `200` / `404` |
| `DELETE /api/tasks/:id` | Delete | Session + owner | `200` / `404` |
| `GET /api/health` | Liveness | Public | `200 { "ok": true }` |
| `/api/auth/*` | Auth.js sign-in, callback, session | Public | Redirects / session |

#### Data model

```sql
-- App Day 3 table, plus App Day 11's owner column and index.
CREATE TABLE IF NOT EXISTS tasks (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL CHECK (char_length(title) BETWEEN 1 AND 200),
  done BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE tasks
ADD COLUMN owner_id INTEGER NOT NULL
REFERENCES users(id)
ON DELETE CASCADE;

CREATE INDEX tasks_owner_id_id_idx
ON tasks (owner_id, id);
```

The `users`, `accounts`, `sessions`, and `verification_tokens` tables come from
the Auth.js PostgreSQL adapter schema (App Day 11). One user owns many tasks.

#### Architecture: today, and the first justified additions

```mermaid
flowchart LR
  Browser["Browser<br/>React Client Components"] --> App["Next.js app (stateless)<br/>Server Components + Route Handlers"]
  App --> AuthJS["Auth.js auth()"]
  AuthJS -. OAuth redirect .-> GitHub["GitHub OAuth"]
  App --> Pool["pg Pool (max 5 per process)"]
  Pool --> PG[("PostgreSQL primary<br/>tasks, users, sessions")]
  PG -.-> Backup[("Backups / restore points")]
  LB["Load balancer<br/>(only when measured)"] -. later .-> App
  Replica[("Read replica<br/>(only when measured)")] -. later .-> PG
```

Solid lines exist today. Dashed components are added **only** when their
trigger in section 5.2 is observed.

- **Write path:** `TaskBoard.tsx` → `PATCH /api/tasks/7` → `auth()` → validation
  → `UPDATE ... WHERE id = $2 AND owner_id = $3 RETURNING ...` → `200` →
  `router.refresh()`.
- **Read path:** `GET /?q=sql&status=open` → Server Component → `auth()` →
  `normalizeTaskFilters` → `searchTasks(ownerId, filters)` → owner-scoped
  `SELECT` → streamed HTML inside `<Suspense>`.
- **Trust boundaries:** browser ↔ server (validate everything), server ↔
  GitHub (Auth.js verifies the callback), server ↔ PostgreSQL (bound
  parameters, credentials only in server environment variables).

#### Check your design against the running app

From the repository root, with PostgreSQL running:

```bash
psql -d minitrack -c '\d tasks'
cd frontend
npm run dev
```

In a second terminal:

```bash
curl -i http://localhost:3000/api/health
curl -i http://localhost:3000/api/tasks
```

**Expected observation:** `\d tasks` shows `owner_id` and
`tasks_owner_id_id_idx`; the health check returns `200` with `{"ok":true}`; the
anonymous task request returns `401`. If `owner_id` is missing, your database
has not had the App Day 11 migration applied — say so in the design rather than
assuming.

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant U as User
  participant B as Browser
  participant S as Server Component (page.tsx)
  participant A as Auth.js auth()
  participant D as searchTasks()
  participant P as pg Pool and PostgreSQL
  U->>B: Submit search form q=sql, status=open
  B->>S: GET /?q=sql&status=open + session cookie
  S->>A: auth()
  A-->>S: session.user.id = "3"
  S->>S: normalizeTaskFilters("sql", "open")
  S->>D: searchTasks("3", { query: "sql", status: "open" })
  D->>P: SELECT ... WHERE owner_id=$1 AND title ILIKE $2 AND done filter $3
  P-->>D: Matching rows (or error -> load error message)
  D-->>S: Task[]
  S-->>B: Streamed HTML inside Suspense
  B-->>U: Filtered list; URL is shareable and reload-safe
```

Trace one concrete input. Name every boundary, value, and possible failure.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Begin the design with Kubernetes and microservices before estimating traffic.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** The discussion becomes technology-driven and cannot justify complexity.

**Root cause:** Solutions were chosen before requirements and bottlenecks.

**Restore and verify:** Return to requirements, rough capacity, and the smallest architecture that satisfies them.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

### 9. Interview questions and answers (30 minutes)

#### Q1. What is defining user-visible requirements?

**Interview-ready answer:** “Before drawing infrastructure, I agree on what
users do, how fast it must feel, how consistent it must be, who must not see
what, how accessible it must be, and what happens when something fails. Those
requirements decide the architecture.”

**Example:** For MiniTrack: sign in, owner-only CRUD, URL-backed search;
read-your-own-writes after a change because `router.refresh()` must show the
new state; keyboard-accessible controls; and visible errors such as
`Could not update task (500)` instead of a fake success.

**Senior follow-up:** Read-your-own-writes is the requirement that later
forbids sending the post-mutation refresh to a lagging read replica. If the
product asked for real-time collaboration, the requirement — not a trend —
would justify adding push updates.

#### Q2. How should the backend handle scaling the measured bottleneck?

**Interview-ready answer:** “I start with one stateless Next.js app and one
PostgreSQL database, measure p95 latency, error rate, query time, and pool
wait, and then climb a ladder: indexes, pagination, pool and timeout tuning, a
bigger database, more app instances behind a load balancer, a pooler, replicas,
and caching — each only when a measurement triggers it.”

**Example:** At an estimated 10 requests per second peak and about 1 GB of
data, the first step is `EXPLAIN (ANALYZE, BUFFERS)` on the owner list query,
which `tasks_owner_id_id_idx` already serves. Adding instances would multiply
`max: 5` pools against the same database.

**Senior follow-up:** When PostgreSQL is unavailable, every instance fails
together, so more app instances do not fix it; backups, tested restores, and
managed failover do. Logs must stay privacy-safe and never include
`DATABASE_URL`, cookies, or task titles.

#### Q3. What invariant makes the grid DFS solution correct?

**Interview-ready answer:** “Visit each land cell once, mark it seen, and
explore its valid neighbors. Because a cell is marked when it is pushed, it is
never pushed twice, and when the stack empties, the whole island is erased, so
the scan counts each island exactly once.”

**Example:** On `[['1','1','0'],['0','1','0'],['0','0','1']]`, the first DFS
erases `(0,0)`, `(0,1)`, and `(1,1)`; the scan then finds only `(2,2)`, giving
`2`.

**Senior follow-up:** Time is O(rows × columns) and worst-case stack space is
O(rows × columns). If the input must not change, use a `seen` set; if land
arrives incrementally, use union-find.

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** “System design connects product behavior, data
correctness, security, performance, operations, and cost. For MiniTrack that
means owner-scoped SQL for security, PostgreSQL as the source of truth for
correctness, measured indexes and pagination for performance, backups for
recovery, and no extra components without a measured reason.”

**Example:** One user clicks a checkbox: `PATCH /api/tasks/7` → `auth()` →
owner-scoped `UPDATE` through a pool of five connections → `200` →
`router.refresh()` → owner-scoped `SELECT` → updated page. Every box in the
architecture diagram appears on that path.

**Senior follow-up:** The first operational signal I would add is per-route
p95 latency split into pool wait and query time. It tells me whether the next
step is a query fix or a capacity change, before any new infrastructure.

### 10. Complexity and operational cost

- **DSA:** O(rows * columns) time and O(rows * columns) worst-case space.
- **Application:** Every replica, cache, index, and queue has capacity and operational cost. Explain what measured problem pays for that complexity.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 21 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 21: design minitrack for realistic scale`

<a id="prep-day-22"></a>

## Prep Day 22 — Complete a four-part mock interview

**Date:** Saturday, December 19, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Complete a four-part mock interview.

[Prep Day 21](../lessons/interview-prep/prep-day-21.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](../lessons/interview-prep/README.md) · [Prep Day 23](../lessons/interview-prep/prep-day-23.md)

**Everything to read today is below.** The original
[preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md),
[interview index](./INTERVIEW_INDEX.md),
[app roadmap](./APP_BUILD_ROADMAP.md), and
[DSA Day 22](../dsa-python/lessons/dsa-day-22.md) remain available for
comparison. Today is a **mock day: there is no new feature code**. The
question banks, code-reading prompts, system-design prompt, and model answers
you need are embedded in section 6, drawn from App Days 4–15 and Prep Days
20–21. Repairing the gaps you find belongs to Prep Days 23–25; today you only
**select** the top three. Write runnable code only in the named practice file
or your rough notebook, not in this Markdown file.

### Learning objectives

- explain explaining while solving in beginner-friendly language;
- explain classifying interview mistakes and its failure boundary;
- implement or verify the listed MiniTrack milestone;
- solve DSA Day 22 using the topological sorting pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **topological sorting** pattern?

Use this format:

```md
## Saturday, December 19, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Explaining while solving:** State assumptions, outline the plan, narrate meaningful decisions, and test behavior. Silence and code dumping hide reasoning even when the final answer works.

**Backend focus — Classifying interview mistakes:** Separate knowledge gaps, implementation bugs, communication gaps, and time-management problems because each requires a different repair exercise.

**Today's connection:** A mock tests retrieval, reasoning, coding, communication, and pacing together.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 22: topological sorting"]
  DSA --> FE["Frontend: Explaining while solving"]
  FE --> BE["Backend: Classifying interview mistakes"]
  BE --> App["MiniTrack: Complete a four-part mock interview"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-22.py`](../dsa-python/practice/day-22.py)
**Pattern:** topological sorting

#### Problem: Course Schedule

There are `num_courses` courses numbered `0` to `num_courses - 1`. Each pair
`[course, prereq]` in `prerequisites` means “you must take `prereq` before
`course`”. Return `True` if it is possible to finish every course, or `False`
if the requirements contain a cycle (for example, A needs B and B needs A).
Assumptions used by this course:

- every course number is between `0` and `num_courses - 1`;
- pairs may repeat; a course that requires itself (`[0, 0]`) is a cycle;
- courses with no prerequisites can be taken at any time.

```python
solve(2, [[1, 0]])          # True: take 0, then 1
solve(2, [[1, 0], [0, 1]])  # False: 0 and 1 require each other
```

**Edge direction matters:** draw the arrow from prerequisite to course,
`prereq -> course`, because finishing the prerequisite is what unlocks the
course.

#### Start coding

In the practice file, replace the `raise NotImplementedError` line with your
own implementation. This is the starting shape:

```python
def solve(num_courses, prerequisites):
    # Return True if every course can be finished, otherwise False.
    raise NotImplementedError
```

Python pieces used below, one at a time:

1. **One empty list per course:** `[[] for _ in range(3)]` creates
   `[[], [], []]` — three *separate* lists. Do **not** write `[[]] * 3`; that
   creates three references to the *same* list, so appending to one appends
   to all.
2. **A list of zeros:** `[0] * 3` creates `[0, 0, 0]`. Numbers are safe to
   repeat this way.
3. **`deque`** (from `collections`) is a queue. `queue.append(x)` adds to the
   back and `queue.popleft()` removes from the front in O(1) time.
   `list.pop(0)` would take O(n) time.
4. **Indegree:** the number of prerequisites a course is still waiting for.
   A course with indegree `0` can be taken now.

```mermaid
flowchart TD
  Start[Build graph prereq to course] --> Degree[Count indegree for each course]
  Degree --> Seed[Queue every course with indegree 0]
  Seed --> Empty{Queue empty?}
  Empty -- No --> Take[Pop a course and count it as processed]
  Take --> Unlock[For each course it unlocks, subtract 1 from indegree]
  Unlock --> Ready{Indegree became 0?}
  Ready -- Yes --> Enqueue[Add that course to the queue]
  Ready -- No --> Empty
  Enqueue --> Empty
  Empty -- Yes --> Compare{processed equals num_courses?}
  Compare -- Yes --> True[Return True]
  Compare -- No --> False[Return False: a cycle remains]
```

#### Invariant to say aloud

Track prerequisites with indegrees or DFS states; processing every node proves the dependency graph has no cycle.

More precisely: a course enters the queue only when **all** its prerequisites
have already been processed. A course on a cycle always waits for another
course on the same cycle, so it never reaches indegree `0`.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 22
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** the day-specific checker accepts your implementation,
and the completed reference suite still passes. Its two examples do not cover
self-loops, longer cycles, or duplicate pairs, so add your own.

You can also temporarily add these checks below your `solve` function in the
practice file, then run `python3 dsa-python/practice/day-22.py`:

```python
if __name__ == '__main__':
    assert solve(2, [[1, 0]]) is True
    assert solve(2, [[1, 0], [0, 1]]) is False
    assert solve(0, []) is True
    assert solve(3, []) is True
    assert solve(1, [[0, 0]]) is False  # A course cannot require itself.
    assert solve(3, [[1, 0], [2, 1]]) is True
    assert solve(3, [[0, 1], [1, 2], [2, 0]]) is False
    assert solve(4, [[1, 0], [1, 0], [3, 2]]) is True  # Duplicate pair, two separate chains.
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple solution</summary>

```python
def solve(num_courses, prerequisites):
    taken = set()
    progress = True
    while progress:  # Keep sweeping while at least one new course was taken.
        progress = False
        for course in range(num_courses):
            if course in taken:
                continue
            # all(...) is True when every prerequisite of this course is already taken.
            if all(pre in taken for c, pre in prerequisites if c == course):
                taken.add(course)
                progress = True
    return len(taken) == num_courses
```

</details>

Each sweep checks every course against every pair: O(V × E), where `V` is the
number of courses and `E` the number of pairs. There can be up to `V` sweeps,
so the worst case is O(V² × E) time. Extra space is O(V) for `taken`.

#### Optimized code — reveal after attempting

<details>
<summary>Show the Course Schedule solution</summary>

```python
from collections import deque

def solve(num_courses, prerequisites):
    graph = [[] for _ in range(num_courses)]  # graph[pre] = courses unlocked by pre
    indegree = [0] * num_courses              # prerequisites still unfinished
    for course, pre in prerequisites:
        graph[pre].append(course)
        indegree[course] += 1
    queue = deque(i for i, deg in enumerate(indegree) if deg == 0)
    processed = 0
    while queue:
        pre = queue.popleft()
        processed += 1
        for course in graph[pre]:
            indegree[course] -= 1
            if indegree[course] == 0:  # its last prerequisite just finished
                queue.append(course)
    # Courses on a cycle never reach indegree 0, so they are never processed.
    return processed == num_courses
```

</details>

Building the graph touches each pair once, and the queue loop processes each
course once and each edge once: **O(V + E)** time and **O(V + E)** space.

Trace for `solve(2, [[1, 0]])`. The graph is `graph[0] = [1]`, and
`indegree = [0, 1]`:

| Step | Queue before | Pop | `processed` | Indegree changes | Queue after |
|---:|---|---:|---:|---|---|
| Start | — | — | 0 | — | `[0]` |
| 1 | `[0]` | 0 | 1 | course 1: 1 → 0, enqueue | `[1]` |
| 2 | `[1]` | 1 | 2 | none | `[]` |
| End | — | — | 2 | `2 == 2` | return `True` |

For `solve(2, [[1, 0], [0, 1]])`, `indegree = [1, 1]`. No course starts at
`0`, the queue starts empty, `processed` stays `0`, and `0 != 2` returns
`False`.

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “I repeatedly sweep through the courses and take
any course whose prerequisites are all taken. If a sweep takes nothing new, I
stop. If every course was taken, the answer is True. Each sweep is O(V × E) and
there can be V sweeps, so it is O(V² × E).”

**Example:** For `(3, [[1, 0], [2, 1]])`, the first sweep takes 0, 1, and 2
in order because each prerequisite was just taken; the next sweep takes
nothing and stops.

**Follow-up:** The waste is re-checking courses whose prerequisites have not
changed. Tracking a remaining-prerequisites count (indegree) removes that.

##### DSA Q2. What is the core idea of topological sorting here?

**Interview-ready answer:** “I model courses as a directed graph with edges
from prerequisite to course and count each course's unfinished prerequisites.
Courses at zero go into a queue. Processing a course lowers the count of every
course it unlocks; any that reach zero join the queue. This is Kahn's
algorithm.”

**Example:** In `(2, [[1, 0]])`, course 0 starts at zero. Processing it lowers
course 1 from 1 to 0, so course 1 is processed next.

**Follow-up:** A DFS alternative colors each node unvisited, visiting, or done;
reaching a “visiting” node again means a cycle. Both are O(V + E).

##### DSA Q3. Why does `processed == num_courses` prove there is no cycle?

**Interview-ready answer:** “A course is processed only after all its
prerequisites were processed. On a cycle, every course waits for another
course on the same cycle, so none of them ever reaches zero and they are never
processed. Conversely, an acyclic graph always has some course with no
unfinished prerequisites, so Kahn's algorithm keeps going until everything is
processed.”

**Example:** For `(3, [[0, 1], [1, 2], [2, 0]])`, all three indegrees start at
1, the queue starts empty, and `processed = 0`.

**Follow-up:** Processed courses before the cycle are still a valid partial
order; the leftover courses with nonzero indegree are exactly the ones on, or
blocked by, a cycle.

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “O(V + E) time: building the graph is O(E), seeding
the queue is O(V), and the loop processes each course once and each edge once.
Space is O(V + E) for the adjacency lists, plus O(V) for indegrees and the
queue.”

**Example:** 10,000 courses with 50,000 pairs is about 60,000 basic steps.

**Follow-up:** That bound depends on O(1) `popleft()`. Using `list.pop(0)`
would make each removal O(V) and the whole algorithm O(V² + E).

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “Zero courses, courses with no pairs, a self-loop,
a two-course cycle, a longer cycle, duplicate pairs, and disconnected groups.
I also ask whether course numbers can be out of range.”

**Example:** `solve(1, [[0, 0]])` is `False`; `solve(4, [[1, 0], [1, 0],
[3, 2]])` is `True` because the duplicate pair adds 2 to the indegree and is
also subtracted twice.

**Follow-up:** An out-of-range pair such as `[5, 0]` with `num_courses = 2`
raises `IndexError`. In an API, validate the input and return a clear error
instead.

##### DSA Q6. How would you return a valid course order?

**Interview-ready answer:** “I record each course as it is popped. If every
course was processed, that list is a valid order; otherwise I return an empty
list.”

**Example:**

```python
from collections import deque

def find_order(num_courses, prerequisites):
    graph = [[] for _ in range(num_courses)]
    indegree = [0] * num_courses
    for course, pre in prerequisites:
        graph[pre].append(course)
        indegree[course] += 1
    queue = deque(i for i, deg in enumerate(indegree) if deg == 0)
    order = []
    while queue:
        pre = queue.popleft()
        order.append(pre)
        for course in graph[pre]:
            indegree[course] -= 1
            if indegree[course] == 0:
                queue.append(course)
    return order if len(order) == num_courses else []
```

`find_order(3, [[1, 0], [2, 1]])` returns `[0, 1, 2]`.

**Follow-up:** The same idea orders MiniTrack's SQL migrations:
`003-task-owners.sql` depends on `002-auth-users.sql` because `owner_id`
references `users(id)`. Numbered filenames encode a simple chain; a real
dependency graph would need a topological order.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

State assumptions, outline the plan, narrate meaningful decisions, and test behavior. Silence and code dumping hide reasoning even when the final answer works.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.

#### How: a speaking framework you can reuse in every part

Use the same six steps for DSA, frontend, backend, and design answers:

| Step | What to say | Course Schedule example |
|---:|---|---|
| 1 | **Clarify** inputs, outputs, constraints | “Pairs are `[course, prereq]`? Can a course require itself? Are numbers in range?” |
| 2 | **Example** worked by hand | “With `[[1, 0]]` I take 0, then 1, so True.” |
| 3 | **Brute force** and its cost | “Sweep until nothing new is taken: O(V² × E).” |
| 4 | **Plan** the better idea before typing | “Indegree counts plus a queue; a cycle never reaches zero.” |
| 5 | **Code while narrating decisions**, not every keystroke | “I mark the edge `pre -> course` because finishing `pre` unlocks `course`.” |
| 6 | **Test and analyze** | “Run the cycle case; O(V + E) time and space.” |

For frontend and backend questions, steps 1–2 become: **short answer first**,
then **one concrete MiniTrack file or request**, then **a trade-off or failure
case**. Example:

> “Filtering does not need `useEffect`. In `TaskBoard.tsx` the visible list is
> derived during render from `tasks` and the filter, so there is no second
> state to keep in sync. An effect would render once with stale data and then
> again.”

**When you are stuck, keep talking:** “I'm not sure whether X or Y; I'll
assume X because ..., and I'll check it with this test.” Silence is scored as
a communication gap even when you are thinking well.

Files to open deliberately (after the mock, not during it):

- `checkpoints/ROUGH/Notes.md`
- `dsa-python/DSA_PROGRESS.md`
- `docs/MY_NOTES.md`

Answer before moving on:

- Which value is persistent, and which value is temporary interaction state?
- What starts this behavior?
- What should the user see while work is pending?
- What should remain unchanged when the operation fails?

### 5. Backend guided study (1 hour 30 minutes)

#### What

Separate knowledge gaps, implementation bugs, communication gaps, and time-management problems because each requires a different repair exercise.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

Use the checklist as a scoring rubric in the backend mock: an answer that skips
a boundary (for example, never mentions `owner_id`) is a knowledge gap, even if
the rest is fluent.

#### Classify every mistake into exactly one category

| Category | How it shows up | MiniTrack or DSA example | Repair exercise (Prep Days 23–25) |
|---|---|---|---|
| **Knowledge gap** | You did not know or misremembered the fact | Said `$1` also escapes `%` in `ILIKE` | Reread the topic, then explain it aloud from memory the next day |
| **Implementation bug** | You knew the idea but the code was wrong | Returned `True` after the queue loop without comparing `processed` with `num_courses` | Re-code the key loop from memory three times with a test after each |
| **Communication gap** | Correct idea, but unclear, silent, or no example | Fixed IDOR correctly but never said “the owner comes from the session” | Record a 90-second answer, replay it, and rewrite the first sentence |
| **Time-management problem** | Ran out of time or spent it on the wrong part | 25 minutes on a clever DSA solution, no tests, no complexity | Repeat with a visible timer and checkpoints at 10, 25, and 40 minutes |

#### Evidence, not confidence

Write evidence instead of “felt OK”. Copy this table into your notebook and
fill one row per mistake **during review**, not during the mock:

```md
| Part | Question | What happened (evidence) | Category | Impact 1–3 | Frequency 1–3 |
|---|---|---|---|---:|---:|
| Backend | IDOR bug hunt | Found missing owner_id after 6 min; never named IDOR | Communication | 3 | 2 |
```

**Priority score = impact × frequency.** The three highest scores become the
three gaps for the final phase. Ties go to the gap that affects more than one
part of the interview.

### 6. MiniTrack implementation (1 hour)

**Milestone source:** Timed DSA, frontend, backend, and system-design practice

1. Run 45 minutes each of DSA, frontend, backend, and system design.
2. Record evidence instead of a vague confidence score.
3. Select only the three highest-value gaps for final repair.

The mock takes 3 hours plus breaks and replaces most of today's open study time.
Do sections 1–3 first, then run the mock.

#### Mock rules

- Keep the timer running for each 45-minute part. Take a 10-minute break
  **between** parts, never inside one.
- No notes, no lesson files, no search. Speak aloud as if an interviewer were
  present; recording yourself on your phone is the best evidence.
- Reveal the model answers only **after** the part ends.
- Score each rubric line 0 (missing), 1 (partial), or 2 (clear).

#### Part 1 — DSA (45 minutes)

Choose a problem you solved earlier, at random, so you cannot prepare for it.
From the repository root:

```bash
python3 -c "import random; print(random.randint(1, 21))"
```

Open only that day's practice file. If it already contains your earlier
solution, write the new attempt in a fresh scratch file such as
`checkpoints/ROUGH/mock-dsa.py`, with a temporary
`if __name__ == '__main__':` assert block. For days with a checker example,
`python3 dsa-python/scripts/check_practice.py N` tests the practice file.

| Rubric line | 0–2 |
|---|---:|
| Clarified inputs, outputs, and edge cases before coding | |
| Gave brute force and its complexity | |
| Stated the invariant before coding | |
| Working code by minute 35 | |
| Ran at least three tests including an edge case | |
| Correct time and space complexity, with any caveat | |

#### Part 2 — Frontend (45 minutes)

Answer each question aloud in 60–90 seconds (short answer, MiniTrack example,
trade-off). Then do the code-reading prompt.

1. What is the difference between a Server Component and a Client Component?
2. What is hydration, and what causes a hydration mismatch?
3. Why does MiniTrack not load the initial tasks with `useEffect`?
4. What makes an input “controlled”?
5. Why should a component not mutate its `tasks` prop?
6. What does `router.refresh()` do after a mutation — and what does it not do?
7. Why is the filtered task list not stored in state?
8. What is the difference between `useRef` and `useEffect` in the edit flow?
9. Why store search filters in the URL?
10. Can React Context (`SessionProvider`) enforce authentication?
11. How should an async error be exposed accessibly?
12. How do `useMemo`, `useCallback`, and `React.memo` differ?

**Code-reading prompt.** This is App Day 5's handler in
`frontend/app/TaskBoard.tsx`. Explain what the user sees when the server returns
`404`, when the network is offline, and when the request succeeds.

```tsx
async function toggleTask(taskId: string, done: boolean) {
  setBusy(true);
  setError('');

  try {
    const response = await fetch(`/api/tasks/${taskId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done }),
    });

    if (!response.ok) {
      setError(`Could not update task (${response.status})`);
      setBusy(false);
      return;
    }

    router.refresh();
    setBusy(false);
  } catch {
    setError('Could not connect to the server');
    setBusy(false);
  }
}
```

<details>
<summary>Show frontend model answers</summary>

1. A Server Component runs on the server and can read PostgreSQL and private
   environment variables; its code is not sent to the browser. A Client
   Component (`'use client'`) is needed for state, effects, and event handlers.
   `page.tsx` reads tasks; `TaskBoard.tsx` handles clicks.
2. Hydration attaches React's event handlers and state to HTML the server
   already rendered. A mismatch happens when the first client render differs,
   for example rendering `Date.now()` during the first render.
3. The Server Component can read the database directly before HTML is sent, so
   there is no empty first render, no loading flash, and no extra client
   request.
4. React state is the source of truth: `value={title}` plus
   `onChange={event => setTitle(event.target.value)}`.
5. Props are owned by the parent and rendered from server data. Mutating them
   does not trigger a render and makes the UI disagree with PostgreSQL.
   MiniTrack changes data through the API, then refreshes.
6. It asks Next.js to re-render the Server Components for the current route,
   which re-runs the owner-scoped `SELECT` and sends fresh props. It does not
   save data, authorize anything, or act as a cache.
7. It can be derived during render from `tasks` and the filter. Storing it
   would create a second copy that can go stale.
8. `useRef` holds the input DOM node without causing renders; `useEffect` runs
   after the edit input is committed and calls `editInputRef.current?.focus()`.
9. URL state survives reload, can be shared or bookmarked, and works with a
   plain GET form; the server validates `q` and `status`.
10. No. It shares an already-established session with Client Components for
    UI. Security comes from `auth()` in every Route Handler and owner-scoped SQL.
11. Show visible text near the control and use a live region such as
    `role="alert"` so assistive technology announces it; link it with
    `aria-describedby` where relevant.
12. `useMemo` caches a computed value, `useCallback` caches a function
    reference, and `React.memo` may skip a component's render when its props
    are shallowly equal. They are performance tools; measure before using them.

**Code-reading:** `404` → `fetch` resolves, `response.ok` is false, the user
sees `Could not update task (404)` and the list is unchanged. Offline →
`fetch` rejects, the `catch` shows `Could not connect to the server`. Success →
`router.refresh()` re-reads PostgreSQL and the checkbox reflects the saved
value. In every case `busy` returns to `false`.

</details>

| Rubric line | 0–2 |
|---|---:|
| Short answer first for each question | |
| Named a real MiniTrack file or behavior | |
| Mentioned a trade-off or failure case | |
| Code-reading covered all three outcomes | |

#### Part 3 — Backend (45 minutes)

Answer aloud, then do the bug hunt.

1. Walk through `POST /api/tasks` from request to response.
2. Why `201`, `400`, `401`, `404`, and `500` — when is each returned?
3. Why are SQL values passed as `$1`, `$2`?
4. Does parameterization escape `%` and `_` in `ILIKE`?
5. Why `UPDATE ... RETURNING`?
6. What happens when the connection pool is exhausted?
7. Authentication versus authorization in MiniTrack?
8. Where does the owner ID come from, and why?
9. Is retrying a failed `POST` safe?
10. What is the recovery plan for a bad migration?

**Bug hunt.** This version of the App Day 11 delete function has a security
bug. Find it, name it, fix it, and say which test would have caught it.

```ts
export async function deleteTask(ownerId: string, id: string): Promise<boolean> {
  const result = await getPool().query(
    'DELETE FROM tasks WHERE id = $1 RETURNING id',
    [id],
  );
  return result.rowCount !== null && result.rowCount > 0;
}
```

<details>
<summary>Show backend model answers</summary>

1. `auth()` → `401` if no session; `request.json()` → `400` if invalid;
   `normalizeTitle` → `400` if not 1–200 characters;
   `createTask(session.user.id, title)` runs
   `INSERT INTO tasks (owner_id, title) VALUES ($1, $2) RETURNING ...` →
   `201` with the row; any unexpected error is logged and returns `500`.
2. `201` created; `400` invalid input; `401` not signed in; `404` no row with
   this ID **for this owner** (does not reveal other users' IDs); `500`
   unexpected failure with a generic body.
3. Values travel separately from SQL text, so input cannot change the query's
   structure (SQL injection).
4. No. `%` and `_` remain wildcards; App Day 8's `escapeLike` escapes them, and
   `ESCAPE '\'` names the escape character.
5. It returns the committed row in one round trip and avoids a racy second
   `SELECT`.
6. New queries wait in the pool's queue; latency rises; with a timeout they
   fail explicitly. Instances × `max` must fit the database's connection limit.
7. Authentication (Auth.js `auth()`) proves identity. Authorization
   (`AND owner_id = $n` in SQL) restricts which rows that identity can touch.
8. From `session.user.id` on the server. Bodies, URLs, and headers are
   controlled by the client and can be forged.
9. Not blindly; the first attempt may have committed. Use an idempotency key
   with a unique constraint, or retry only idempotent operations.
10. Stop the rollout, preserve evidence, restore from a provider restore point
    or apply a reviewed roll-forward, verify data integrity, then reopen
    traffic. App rollback alone does not undo a schema change.

**Bug hunt:** `ownerId` is never used, so any signed-in user can delete any
task by guessing its ID — an **IDOR** (insecure direct object reference). Fix:

```ts
'DELETE FROM tasks WHERE id = $1 AND owner_id = $2 RETURNING id',
[id, ownerId],
```

The App Day 12 authorization test catches it: User B sends
`DELETE /api/tasks/<User A's task>`, expects `404`, **and** asserts that User
A's row still exists.

</details>

| Rubric line | 0–2 |
|---|---:|
| Covered validate, authenticate, authorize, bind, respond, log | |
| Correct status codes with reasons | |
| Bug hunt: found, named, fixed, and tested | |
| Answers stayed concrete (real SQL, real file names) | |

#### Part 4 — System design (45 minutes)

**Prompt:** “Design MiniTrack for 10,000 registered users. After 30 minutes,
the interviewer says: traffic has grown 50 times. What changes?”

Draw on paper. Use this structure: requirements → estimates → API → data
model → architecture → bottlenecks → failures → trade-offs.

<details>
<summary>Show a model outline</summary>

- **Requirements:** GitHub sign-in; owner-only create, rename, complete,
  delete; URL-backed search and filters; read-your-own-writes; accessible
  controls; visible errors. Out of scope: teams, real-time, offline.
- **Estimates (assumptions):** 2,000 daily active users × 40 requests ≈ 1
  request/second average, about 10/second peak; up to 5 million rows, about 1 GB.
- **API:** `GET /api/tasks?q=&status=`, `POST /api/tasks`,
  `PATCH /api/tasks/:id`, `DELETE /api/tasks/:id`, `GET /api/health`,
  `/api/auth/*`.
- **Data model:** `tasks(id, owner_id → users.id, title CHECK 1–200, done,
  created_at)`, index `(owner_id, id)`; Auth.js adapter tables.
- **Architecture:** browser → one stateless Next.js app (Server Components +
  Route Handlers, `auth()`) → `pg` pool (`max: 5`) → managed PostgreSQL with
  backups; GitHub for OAuth.
- **Bottlenecks to measure:** p95 latency per route, pool wait, query time;
  `ILIKE '%term%'` search on large lists.
- **Failures:** PostgreSQL down → visible `500`, restore from tested backup;
  pool exhaustion → timeout and find the slow query; bad deploy → app rollback;
  bad migration → separate recovery.
- **After 50× growth (≈500 requests/second peak, ≈50 GB):** measure first;
  add `EXPLAIN`-justified indexes and cursor pagination
  (`WHERE owner_id = $1 AND id > $2 ORDER BY id LIMIT $3`); run several app
  instances behind a load balancer with readiness checks; recompute the
  connection budget and add a pooler if instances × `max` nears the limit;
  scale the database up; consider a read replica only for reads that tolerate
  lag (never the refresh right after the user's own write); consider an
  owner-scoped cache only if one expensive read dominates.
- **Still not justified:** sharding (50 GB fits one PostgreSQL),
  microservices (one team, one domain), Kubernetes (unless operational needs
  outweigh its cost). Say what measurement would change that.

</details>

| Rubric line | 0–2 |
|---|---:|
| Requirements and out-of-scope stated before drawing | |
| Numbers estimated with stated assumptions | |
| API and data model include `owner_id` and the index | |
| Each scaling step tied to a measured trigger | |
| Failure modes and signals named | |
| Did not propose sharding, microservices, or Kubernetes without a measured need | |

#### After the mock: record, classify, choose

1. For each part, total the rubric (0–12, 0–8, 0–8, 0–12).
2. Fill the evidence table from section 5, one row per lost point.
3. Assign each row one category: knowledge, implementation, communication, or
   time.
4. Pick the **three highest impact × frequency** rows. For each, write one
   measurable repair task, for example: “Implement Kahn's algorithm from memory
   and explain the cycle proof in 90 seconds” — not “study graphs more”.

**Expected observation:** four rubric scores, an evidence table, and exactly
three written repair tasks in `checkpoints/ROUGH/Notes.md`. If any part
scored 0 on “speaking”, the first repair task is a communication one.

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant I as Interviewer (timer)
  participant Y as You
  participant P as Python
  participant N as Notebook evidence table
  I->>Y: "Can all courses be finished? (2, [[1,0],[0,1]])"
  Y->>I: Clarify: pairs are [course, prereq]; self-loops possible?
  Y->>I: Brute force O(V^2 x E), then plan: indegree + queue
  Y->>P: Write solve(); run asserts including the cycle case
  P-->>Y: AssertionError on cycle case (returned True without checking processed)
  Y->>Y: Return processed == num_courses; rerun
  P-->>Y: All checks passed
  Y->>I: Invariant, O(V + E) time and space
  Y->>N: Log "missing processed check, 6 min" as implementation bug
```

Trace one concrete input. Name every boundary, value, and possible failure.

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Pause the timer whenever a question becomes uncomfortable.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** The result no longer measures interview pacing.

**Root cause:** The practice conditions do not match the target conditions.

**Restore and verify:** Keep the timer running, state what is blocking you, and review after the section.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

### 9. Interview questions and answers (30 minutes)

#### Q1. What is explaining while solving?

**Interview-ready answer:** “I clarify the problem, work an example, give the
brute force, state my plan and invariant before typing, narrate the decisions
that matter while coding, and finish by testing and analyzing complexity. The
interviewer scores my reasoning, not just the final code.”

**Example:** On Course Schedule I say: “I'll draw edges from prerequisite to
course because finishing the prerequisite unlocks the course; a cycle can never
reach indegree zero, so I compare `processed` with `num_courses`.” Then I run
the `(2, [[1, 0], [0, 1]])` case aloud.

**Senior follow-up:** Over-narration is also a problem: describing every
keystroke hides the important decisions. Narrate choices and trade-offs, stay
quiet briefly while typing routine code, and say when you are checking an
assumption.

#### Q2. How should the backend handle classifying interview mistakes?

**Interview-ready answer:** “I put every lost point into one category —
knowledge gap, implementation bug, communication gap, or time-management
problem — because each needs a different repair. Then I rank them by impact
times frequency and fix only the top three.”

**Example:** In the backend bug hunt, finding the missing `owner_id` in
`deleteTask` but never saying “IDOR” or “the owner comes from the session” is a
communication gap; the repair is a recorded 90-second answer, not rereading
App Day 11.

**Senior follow-up:** Evidence must be observable — “took 12 minutes to find
the bug”, “no complexity stated” — not “felt shaky”. Treat the classification
like an incident review: describe what happened without blame, find the root
cause, and choose one corrective action that can be verified.

#### Q3. What invariant makes the topological sorting solution correct?

**Interview-ready answer:** “Track prerequisites with indegrees or DFS states;
processing every node proves the dependency graph has no cycle. A course joins
the queue only when all its prerequisites are processed, and a course on a cycle
always waits for another cycle member, so it never reaches zero.”

**Example:** `solve(2, [[1, 0]])`: indegrees `[0, 1]`; pop 0, course 1 drops to
0, pop 1; `processed = 2 = num_courses`, so `True`. With `[[1, 0], [0, 1]]`,
indegrees are `[1, 1]`, the queue starts empty, and the answer is `False`.

**Senior follow-up:** O(V + E) relies on `deque.popleft()` being O(1) and on
valid course numbers. With an order required, record pops; with a very large
graph that does not fit in memory, process it in batches and persist
indegrees.

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** “A mock tests retrieval, reasoning, coding,
communication, and pacing together. MiniTrack gives every part one concrete
story: the request path for frontend and backend, owner-scoped SQL for
security, and a measured scaling ladder for design.”

**Example:** One user action covers three parts: clicking a checkbox in
`TaskBoard.tsx` (frontend), `PATCH /api/tasks/7` with `auth()` and
`UPDATE ... WHERE id = $2 AND owner_id = $3` (backend), and the
`router.refresh()` read-your-own-writes requirement that rules out sending that
read to a lagging replica (design).

**Senior follow-up:** In a real interview, if the interviewer pushes on
infrastructure, the first thing I would measure is per-route p95 latency split
into pool wait and query time. I would not propose Kubernetes, microservices,
or sharding before that measurement shows a need.

### 10. Complexity and operational cost

- **DSA:** O(vertices + edges) time and O(vertices + edges) space.
- **Application:** Mocks are expensive practice, so their value comes from specific post-mock repair rather than repeatedly taking mocks without analysis.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 22 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 22: complete a four-part mock interview`

<a id="prep-day-23"></a>

## Prep Day 23 — Rebuild one vertical slice from memory

**Date:** Monday, December 21, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Rebuild one vertical slice from memory.

[Prep Day 22](../lessons/interview-prep/prep-day-22.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](../lessons/interview-prep/README.md) · [Prep Day 24](../lessons/interview-prep/prep-day-24.md)

**Everything to read today is below.** The original [App Day 5](../lessons/day-05.md),
[App Day 11](../lessons/day-11.md), [App Day 15](../lessons/day-15.md), and
[DSA Day 23](../dsa-python/lessons/dsa-day-23.md) remain available for
comparison. Today is a **reconstruction** day: you rebuild the existing
“complete or reopen a task” slice from memory and repair the gaps you find. No
new feature is added. The final mock and project pitch belong to Prep Day 24;
light consolidation and the final checks belong to Prep Day 25. Write runnable
code in the named project and practice files, not in this Markdown file.

### Learning objectives

- explain reconstructing state and events in beginner-friendly language;
- explain reconstructing a bounded API path and its failure boundary;
- rebuild the MiniTrack completion slice from browser to PostgreSQL;
- solve DSA Day 23 using the one-dimensional dynamic programming pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **one-dimensional dynamic programming** pattern?

Use this format:

```md
## Monday, December 21, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Reconstructing state and events:** Begin with the user-visible state and event, derive what must be local, and keep persistent data on the server. Add loading and failure behavior as part of the feature.

**Backend focus — Reconstructing a bounded API path:** Define the method, path, input, success response, validation failures, authentication, authorization, and data operation before coding.

**Today's connection:** Reconstruction proves you can combine frontend, API, validation, and database reasoning without following a recipe.

**Today's slice:** a signed-in user ticks a task's checkbox. The browser sends
`PATCH /api/tasks/:id` with `{"done":true}`. The server checks the session,
validates the ID and body, runs an owner-scoped `UPDATE`, and returns the
updated task. The page then refreshes from PostgreSQL.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 23: one-dimensional dynamic programming"]
  DSA --> FE["Frontend: Reconstructing state and events"]
  FE --> BE["Backend: Reconstructing a bounded API path"]
  BE --> App["MiniTrack: Rebuild one vertical slice from memory"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-23.py`](../dsa-python/practice/day-23.py)
**Pattern:** one-dimensional dynamic programming

#### Problem: Climbing Stairs

You are at the bottom of a staircase with `n` steps. Each move climbs either
**1 step** or **2 steps**. Return how many different sequences of moves reach
exactly the top.

Assumptions: `n` is a whole number. `n = 0` has exactly **one** way (make no
moves). A negative `n` is invalid and raises `ValueError`.

```python
solve(0)  # 1
solve(2)  # 2  (1+1, 2)
solve(5)  # 8
```

To reach step `i`, your last move was either 1 step (from `i - 1`) or 2 steps
(from `i - 2`). So the number of ways to reach `i` is
`ways(i - 1) + ways(i - 2)`. That rule is called a **recurrence**; storing the
answers for smaller steps so we never compute them twice is **dynamic
programming**.

#### Start coding

In the practice file, replace the `raise NotImplementedError` line with your
own implementation. This is the starting shape:

```python
def solve(n):
    # Return the number of 1-step/2-step sequences that reach step n.
    raise NotImplementedError
```

Two Python helpers you will use:

- `range(2, n + 1)` produces `2, 3, …, n`. If `n` is `0` or `1`, it produces
  nothing, so the loop body never runs.
- `a, b = b, a + b` is **tuple assignment**. Python evaluates the whole right
  side first (`b` and `a + b`, using the old values) and then assigns both. So
  you do not need a temporary variable.
- `for _ in range(...)` uses `_` as a name that means “I do not need this
  loop value”.

```mermaid
flowchart TD
  Start[Check n is not negative] --> Base["a = ways(0) = 1, b = ways(1) = 1"]
  Base --> Loop{More steps from 2 to n?}
  Loop -- Yes --> Step["a, b = b, a + b (slide the window forward)"]
  Step --> Loop
  Loop -- No --> Return["Return b = ways(n)"]
```

#### Invariant to say aloud

Define dp[i] from already solved smaller states and identify the smallest base cases.

Concretely: before handling step `i`, `a` holds `ways(i - 2)` and `b` holds
`ways(i - 1)`. The base cases are `ways(0) = 1` and `ways(1) = 1`.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 23
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** the day-specific checker accepts your implementation
for `solve(0) == 1`, `solve(2) == 2`, and `solve(5) == 8`, and the completed
reference suite still passes. The checker's three examples are not a complete
test of every input, so add your own checks below.

You can also temporarily add these checks below your `solve` function in the
practice file, then run `python3 dsa-python/practice/day-23.py`:

```python
if __name__ == '__main__':
    assert solve(0) == 1
    assert solve(1) == 1
    assert solve(2) == 2
    assert solve(3) == 3
    assert solve(5) == 8
    assert solve(10) == 89
    try:
        solve(-1)
        raise AssertionError('negative n should raise ValueError')
    except ValueError:
        pass
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple recursive solution</summary>

```python
def solve(n):
    if n < 0:
        raise ValueError('n must be nonnegative')
    if n <= 1:
        return 1  # ways(0) = 1 and ways(1) = 1
    # The last move was either 1 step or 2 steps.
    return solve(n - 1) + solve(n - 2)
```

</details>

This follows the recurrence directly, but it recomputes the same smaller
values many times: `solve(5)` calls `solve(3)` twice and `solve(2)` three
times. The number of calls grows roughly like Fibonacci numbers, which is
exponential, about O(1.62ⁿ) (often loosely written O(2ⁿ)). The recursion stack
uses O(n) space. Very large `n` can also exceed Python's recursion limit.

#### Optimized code — reveal after attempting

<details>
<summary>Show the Climbing Stairs solution</summary>

```python
def solve(n):
    if n < 0:
        raise ValueError('n must be nonnegative')
    a, b = 1, 1  # ways for 0 steps and 1 step
    for _ in range(2, n + 1):
        # New b is ways(i) = ways(i - 1) + ways(i - 2); a moves up one step.
        a, b = b, a + b
    return b
```

</details>

Instead of a full `dp` list, keep only the last two answers. Each loop moves
the two-value window up by one step. Time is O(n); extra space is O(1)
variables (see DSA Q4 for the large-number caveat).

Trace for `solve(5)`:

| Step `i` | `a` before (`ways(i-2)`) | `b` before (`ways(i-1)`) | `a, b` after |
|---:|---:|---:|---|
| start | — | — | `1, 1` (ways 0 and 1) |
| 2 | 1 | 1 | `1, 2` |
| 3 | 1 | 2 | `2, 3` |
| 4 | 2 | 3 | `3, 5` |
| 5 | 3 | 5 | `5, 8` → return `8` |

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “I recurse on the last move. To reach step n, the
last move came from n minus 1 or n minus 2, so I return the sum of those two
recursive calls, with base cases for 0 and 1. It is correct but exponential,
because the same subproblems are solved again and again.”

**Example:** `solve(5)` calls `solve(4)` and `solve(3)`; `solve(4)` calls
`solve(3)` again. `solve(3)` is computed twice and `solve(2)` three times.

**Follow-up:** Adding a cache (`functools.lru_cache` or a dictionary) turns it
into top-down dynamic programming with O(n) time, but the recursion stack is
still O(n) and can hit Python's recursion limit.

##### DSA Q2. What is the core idea of the optimized solution?

**Interview-ready answer:** “I define ways(i) as the number of sequences that
reach step i. Every sequence ends with a 1-step or a 2-step, so
ways(i) = ways(i − 1) + ways(i − 2). I fill the answers from small to large
and keep only the last two, because nothing older is needed.”

**Example:** `ways(4) = ways(3) + ways(2) = 3 + 2 = 5`.

**Follow-up:** This is the Fibonacci sequence shifted by one. Recognizing that
is useful, but explain the recurrence from the problem rather than relying on
memory of Fibonacci.

##### DSA Q3. Why is the recurrence correct, and why is ways(0) equal to 1?

**Interview-ready answer:** “The two groups — sequences ending with a 1-step
and sequences ending with a 2-step — do not overlap and together cover every
sequence. So adding them counts every sequence exactly once. ways(0) is 1
because there is exactly one way to be at the bottom: do nothing. That base
case makes ways(2) = ways(1) + ways(0) = 2 come out right.”

**Example:** For `n = 2`: `[1, 1]` ends with a 1-step, `[2]` ends with a
2-step, total 2.

**Follow-up:** If you defined ways(0) as 0, then ways(2) would be 1, which is
wrong. Base cases are part of the correctness proof, not a detail.

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “The loop runs n − 1 times with constant work per
iteration, so O(n) time, and it stores two variables, so O(1) extra space.”

**Example:** `solve(10)` runs the loop 9 times and returns `89`.

**Follow-up:** The answers grow exponentially, and Python integers have no
fixed size. For very large n the numbers have O(n) digits, so each addition is
not truly constant time. Interviews often ask for the answer modulo
`10**9 + 7` to keep numbers bounded.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “n = 0 returns 1, n = 1 returns 1, n = 2 returns
2, a larger value like 10 returns 89, and a negative n raises ValueError. I
also confirm with the interviewer what n = 0 should mean.”

**Example:** `solve(0) == 1` and `solve(1) == 1` both return before the loop
runs, because `range(2, 1)` and `range(2, 2)` are empty.

**Follow-up:** If the interviewer wants 0 for `n = 0`, change only that
contract at the boundary; do not silently change the recurrence.

##### DSA Q6. What if the allowed step sizes change?

**Interview-ready answer:** “With an allowed set like {1, 3, 5}, the last move
can be any of them, so ways(i) is the sum of ways(i − s) for each allowed s
with i − s ≥ 0. I keep a dp list of length n + 1, which costs O(n × k) time for
k step sizes.”

**Example:** Steps `{1, 2, 3}` give `1, 1, 2, 4, 7` for `n = 0..4`.

**Follow-up:** If each step has a cost and you want the cheapest path (Min
Cost Climbing Stairs), replace “sum” with “minimum of previous cost plus this
step's cost”. The state is the same; only the combine operation changes.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

Begin with the user-visible state and event, derive what must be local, and keep persistent data on the server. Add loading and failure behavior as part of the feature.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.

#### How — specify before you code

Before writing any code, fill this table in your notebook **from memory**:

| Question | Your answer |
|---|---|
| Which value is persistent? | |
| Which values are temporary interaction state? | |
| Which event starts the slice? | |
| What request is sent (method, URL, body)? | |
| What does the user see while the request is pending? | |
| What happens after success? | |
| What does the user see after a failure, and what stays unchanged? | |

<details>
<summary>Compare with the reference specification</summary>

| Question | Reference answer |
|---|---|
| Persistent value | `task.done` in the PostgreSQL `tasks` row. The `tasks` prop is only a copy rendered by the server. |
| Temporary state | `busy` (a request is in flight) and `error` (the last failure message) in `TaskBoard`. |
| Starting event | The checkbox `onChange` for one task. |
| Request | `PATCH /api/tasks/42` with JSON `{"done":true}` (or `false` to reopen). |
| Pending | `busy` is `true`, so the checkboxes, input, and buttons are disabled. |
| Success | `router.refresh()` asks the Server Component to read PostgreSQL again; fresh props redraw the checkbox. |
| Failure | `error` shows `Request failed: Could not update task (404)` in a `role="alert"` paragraph. The checkbox remains bound to the server value because `checked={task.done}` comes from props. |

</details>

Files you will rebuild or check:

- `frontend/app/TaskBoard.tsx` (the `toggleTask` function and the checkbox)
- `frontend/app/api/tasks/[id]/route.ts` (the `PATCH` handler)
- `frontend/lib/tasks.ts` (the `setDone` data function)
- `frontend/lib/validation.ts` (`isValidId` and `isRecord`)

#### Reference frontend code — reveal after your timed attempt

The browser part of this slice was written on App Day 5. Later days add
editing, search, accessibility, and memoization around it, but **the toggle
request itself does not change** when ownership is added: the browser never
sends an owner ID.

<details>
<summary>Show the <code>toggleTask</code> excerpt from <code>frontend/app/TaskBoard.tsx</code></summary>

These lines live inside the `TaskBoard` component, which already has
`'use client'`, `useState`, and `useRouter()` from Prep Days 01–02:

```tsx
const [busy, setBusy] = useState(false);
const [error, setError] = useState('');
const router = useRouter();

async function toggleTask(taskId: string, done: boolean) {
  setBusy(true); // Disable controls to reduce duplicate requests.
  setError('');

  try {
    const response = await fetch(`/api/tasks/${taskId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done }),
    });

    if (!response.ok) {
      setError(`Could not update task (${response.status})`);
      setBusy(false);
      return;
    }

    router.refresh(); // PostgreSQL stays the source of truth.
    setBusy(false);
  } catch {
    setError('Could not connect to the server');
    setBusy(false);
  }
}
```

The checkbox inside the task list:

```tsx
<input
  className="size-5 accent-violet-400"
  aria-label={`Complete ${task.title}`}
  type="checkbox"
  checked={task.done}
  disabled={busy}
  onChange={event => {
    void toggleTask(task.id, event.target.checked);
  }}
/>
```

And the error message below the form:

```tsx
{error && (
  <p
    className="mt-4 rounded-lg border border-rose-400/30 bg-rose-400/10 p-3 text-rose-200"
    role="alert"
  >
    Request failed: {error}
  </p>
)}
```

`void` tells TypeScript and the linter that we intentionally do not await the
Promise inside the event handler; `toggleTask` handles its own errors.

</details>

### 5. Backend guided study (1 hour 30 minutes)

#### What

Define the method, path, input, success response, validation failures, authentication, authorization, and data operation before coding.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

#### Write the API contract from memory

Fill this in before coding:

| Part | Your answer |
|---|---|
| Method and path | |
| Path parameter rule | |
| Body rule | |
| Success response | |
| Validation failures | |
| Unauthenticated | |
| Task missing or owned by someone else | |
| Unexpected database error | |
| SQL statement | |

<details>
<summary>Compare with the reference contract</summary>

| Part | Reference answer |
|---|---|
| Method and path | `PATCH /api/tasks/:id` |
| Path parameter rule | `id` is a positive whole number with no leading zero that fits in a safe JavaScript integer (`isValidId`). |
| Body rule | JSON object with **exactly one** of `done` (boolean) or `title` (1–200 characters after trimming). Today's slice uses `done`. |
| Success | `200` with the updated task JSON: `{ id, title, done, created_at }`. |
| Validation failures | `400` for a bad ID, invalid JSON, both/neither fields, or a non-boolean `done`. |
| Unauthenticated | `401 {"error":"Unauthorized"}` |
| Missing or foreign task | `404 {"error":"Task not found"}` — the same response, so ownership is not leaked. |
| Database error | `500 {"error":"Internal server error"}`; details only in the server log. |
| SQL | `UPDATE tasks SET done = $1 WHERE id = $2 AND owner_id = $3 RETURNING id, title, done, created_at` |

</details>

#### Reference backend code — reveal after your timed attempt

Study it in two layers. First the **Day 5 version** (no sign-in yet), then
the **final owner-scoped version** that Days 6, 10, and 11 produced.

<details>
<summary>Show layer 1: the Day 5 slice (validation, data function, PATCH handler)</summary>

`frontend/lib/validation.ts`:

```ts
export function normalizeTitle(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const title = value.trim();
  return title.length >= 1 && title.length <= 200 ? title : null;
}

export function isValidId(raw: string): boolean {
  return /^[1-9]\d*$/.test(raw) && Number.isSafeInteger(Number(raw));
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
```

The `setDone` function in `frontend/lib/tasks.ts` (the file already has
`TaskRow`, `toTask`, and `getPool` from Prep Day 01):

```ts
export async function setDone(id: string, done: boolean): Promise<Task | null> {
  const result = await getPool().query<TaskRow>(
    'UPDATE tasks SET done = $1 WHERE id = $2 RETURNING id, title, done, created_at',
    [done, id]
  );
  const row = result.rows[0];
  return row ? toTask(row) : null; // No row means "not found", not a crash.
}
```

The `PATCH` handler in `frontend/app/api/tasks/[id]/route.ts`:

```ts
import { setDone } from '../../../../lib/tasks';
import { isRecord, isValidId } from '../../../../lib/validation';

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: RouteContext): Promise<Response> {
  const { id } = await params; // Next.js passes dynamic params as a Promise.
  if (!isValidId(id)) {
    return Response.json({ error: 'Invalid task ID' }, { status: 400 });
  }

  let parsingBody = true;
  try {
    const body: unknown = await request.json();
    parsingBody = false;
    if (!isRecord(body) || typeof body.done !== 'boolean') {
      return Response.json({ error: 'done must be boolean' }, { status: 400 });
    }
    const task = await setDone(id, body.done);
    return task
      ? Response.json(task)
      : Response.json({ error: 'Task not found' }, { status: 404 });
  } catch (error: unknown) {
    if (parsingBody) {
      return Response.json({ error: 'Invalid JSON' }, { status: 400 });
    }
    console.error(`PATCH /api/tasks/${id} failed:`, error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

</details>

<details>
<summary>Show layer 2: the final owner-scoped version (Days 6, 10, 11)</summary>

Three things changed after Day 5:

1. **Day 6** let `PATCH` rename a task, so the body must contain exactly one
   of `done` or `title`.
2. **Day 10** required a signed-in session (`auth()`), returning `401`
   otherwise.
3. **Day 11** made every data function take the owner ID **from the session**
   and include `owner_id` in the SQL predicate.

Owner-scoped data functions in `frontend/lib/tasks.ts` (owner first, matching
the Day 12 tests such as `renameTask(userA, taskB.id, 'Stolen')`):

```ts
export async function setDone(
  ownerId: string,
  id: string,
  done: boolean,
): Promise<Task | null> {
  const result = await getPool().query<TaskRow>(
    `
      UPDATE tasks
      SET done = $1
      WHERE id = $2 AND owner_id = $3
      RETURNING id, title, done, created_at
    `,
    [done, id, ownerId],
  );
  const row = result.rows[0];
  return row ? toTask(row) : null;
}

export async function renameTask(
  ownerId: string,
  id: string,
  title: string,
): Promise<Task | null> {
  const result = await getPool().query<TaskRow>(
    `
      UPDATE tasks
      SET title = $1
      WHERE id = $2 AND owner_id = $3
      RETURNING id, title, done, created_at
    `,
    [title, id, ownerId],
  );
  const row = result.rows[0];
  return row ? toTask(row) : null;
}
```

The final `PATCH` handler in `frontend/app/api/tasks/[id]/route.ts` (the
`DELETE` handler in the same file follows the same auth → validate →
owner-scoped query → status pattern):

```ts
import { auth } from '@/auth';
import type { Task } from '../../../types';
import { renameTask, setDone } from '../../../../lib/tasks';
import { isRecord, isValidId, normalizeTitle } from '../../../../lib/validation';

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: RouteContext): Promise<Response> {
  // 1. Authenticate: the owner always comes from the verified session.
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const ownerId = session.user.id;

  // 2. Validate the path parameter.
  const { id } = await params;
  if (!isValidId(id)) {
    return Response.json({ error: 'Invalid task ID' }, { status: 400 });
  }

  // 3. Parse and validate the untrusted body.
  let parsingBody = true;
  try {
    const body: unknown = await request.json();
    parsingBody = false;
    if (!isRecord(body)) {
      return Response.json({ error: 'Provide either done or title' }, { status: 400 });
    }

    const hasDone = Object.hasOwn(body, 'done');
    const hasTitle = Object.hasOwn(body, 'title');
    // Both true or both false means the request contract is ambiguous.
    if (hasDone === hasTitle) {
      return Response.json({ error: 'Provide either done or title' }, { status: 400 });
    }

    let updateTask: () => Promise<Task | null>;
    if (hasTitle) {
      const title = normalizeTitle(body.title);
      if (!title) {
        return Response.json({ error: 'title must be 1–200 characters' }, { status: 400 });
      }
      updateTask = () => renameTask(ownerId, id, title);
    } else if (typeof body.done === 'boolean') {
      const done = body.done;
      updateTask = () => setDone(ownerId, id, done);
    } else {
      return Response.json({ error: 'done must be boolean' }, { status: 400 });
    }

    // 4. Authorize inside the query: zero rows means missing OR not yours.
    const task = await updateTask();
    return task
      ? Response.json(task)
      : Response.json({ error: 'Task not found' }, { status: 404 });
  } catch (error: unknown) {
    if (parsingBody) {
      return Response.json({ error: 'Invalid JSON' }, { status: 400 });
    }
    console.error(`PATCH /api/tasks/${id} failed:`, error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

`session.user.id` is typed by the Day 11 module augmentation in
`frontend/types/next-auth.d.ts`. `@/auth` resolves to `frontend/auth.ts`
through the `"@/*": ["./*"]` path in `frontend/tsconfig.json`.

</details>

### 6. MiniTrack implementation (1 hour)

**Milestone source:** Timed MiniTrack reconstruction and targeted gap repair

#### Step 1: Choose and prepare the slice (5 minutes)

Use the completion slice described above (or, if you know it is solid, the
create slice from Prep Day 01). Work on a separate branch so the working app is
safe:

```bash
git switch -c rebuild-day23
```

Then, **in the branch only**, delete the body of `setDone`, the `PATCH`
handler, and `toggleTask` (leave their signatures as comments). Do not open
sections 4–5's hidden code.

#### Step 2: Rebuild for 60 minutes without the lesson

Order of work:

1. Write the API contract table (section 5) in your notebook.
2. Rebuild `setDone` with bound parameters and the owner predicate if your
   app is at Day 11 or later.
3. Rebuild the `PATCH` handler: auth → ID → JSON → body → query → status.
4. Rebuild `toggleTask` and the checkbox.
5. Use TypeScript errors (`npx tsc --noEmit`) as feedback, not the reference.

#### Step 3: Run and verify

From the repository root:

```bash
cd frontend
npx tsc --noEmit
npm run lint
npm run dev
```

Open `http://localhost:3000`, sign in, tick a task, reload, and confirm it is
still ticked. In a second terminal, try the failure paths (replace `TASK_ID`
with a real ID):

```bash
# Anonymous request (no session cookie): expect 401 on Day 10+ apps.
curl -i -X PATCH http://localhost:3000/api/tasks/TASK_ID \
  -H 'Content-Type: application/json' -d '{"done":true}'

# Invalid ID: expect 400 on a Day 5 app (401 first on a Day 10+ app).
curl -i -X PATCH http://localhost:3000/api/tasks/abc \
  -H 'Content-Type: application/json' -d '{"done":true}'
```

To test validation **after** authentication, use the browser's developer tools
console while signed in:

```js
await fetch('/api/tasks/TASK_ID', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ done: 'yes' }),
}).then(r => r.status); // 400
```

**Expected observation:** ticking persists after reload; a bad body returns
`400`; an anonymous request returns `401`; a task ID owned by another account
returns `404` and that task is unchanged.

#### Step 4: Compare and classify gaps (15 minutes)

Open the reference code in sections 4–5 only now. Record each difference in
your notebook using this table:

| Gap type | Example | Action |
|---|---|---|
| Missing concept | Forgot `AND owner_id = $3` | Re-explain aloud, then rebuild that function from memory again |
| Missing failure path | No `404` when zero rows | Re-derive the status table, then fix |
| API detail | Forgot `await params` | Note the API once; no rebuild needed |
| Harmless syntax | Different variable name | Ignore |

Finish by rebuilding only the weakest function a second time without looking.
Then return to your main branch (`git switch -`) and decide whether to keep
or delete the rebuild branch.

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant U as User A
  participant B as TaskBoard (browser)
  participant R as PATCH /api/tasks/[id]
  participant A as Auth.js auth()
  participant D as setDone()
  participant P as PostgreSQL
  U->>B: Tick "Practice SQL joins" (id 42)
  B->>B: setBusy(true); setError('')
  B->>R: PATCH /api/tasks/42 {"done":true}
  R->>A: auth()
  A-->>R: session.user.id = "7"
  R->>R: isValidId("42"), isRecord(body), done is boolean
  R->>D: setDone("7", "42", true)
  D->>P: UPDATE tasks SET done=$1 WHERE id=$2 AND owner_id=$3
  P-->>D: 1 row (or 0 rows if not owned)
  D-->>R: Task (or null)
  R-->>B: 200 task JSON (or 404)
  B->>B: router.refresh(); setBusy(false)
  B-->>U: Checkbox shows the saved value
```

Trace one concrete input: task `42`, owner `7`, body `{"done":true}`. Name
every boundary, value, and possible failure (`401`, `400`, `404`, `500`,
network error).

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Open the completed reference as soon as syntax feels uncertain.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** The exercise measures recognition rather than retrieval.

**Root cause:** The desired memory path was never practiced.

**Restore and verify:** Write pseudocode, use editor type feedback, and delay the reference until the timed attempt ends.

**Code-level variation:** in your rebuild branch, remove `AND owner_id = $3`
from `setDone`. Sign in as User B and tick User A's task ID from the console.
Predict the result (a `200` and User A's task changes — an IDOR bug), then
restore the predicate and confirm the same request returns `404`.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

### 9. Interview questions and answers (30 minutes)

#### Q1. How do you reconstruct state and events for a feature?

**Interview-ready answer:** “I start from what the user sees and does. For the
completion checkbox, the persistent value is `task.done` in PostgreSQL, so the
component does not store its own copy. The only local state is `busy` and
`error`. The checkbox's `onChange` sends a PATCH; on success I call
`router.refresh()` so the server re-reads the database.”

**Example:** In `frontend/app/TaskBoard.tsx`, `checked={task.done}` comes from
props and `disabled={busy}` prevents a second click while the request is in
flight. On failure, `setError('Could not update task (404)')` renders a
`role="alert"` message and the checkbox still shows the server value.

**Senior follow-up:** If users complained the checkbox felt slow, I could add
an optimistic update with `useOptimistic` or local state and roll back on
error. I would measure first, because optimistic UI adds a second temporary
source of truth that must be reconciled.

#### Q2. How should the backend handle reconstructing a bounded API path?

**Interview-ready answer:** “I write the contract first: method and path,
input rules, success status, every failure status, who may call it, and the
exact SQL. Then the handler follows a fixed order: authenticate, validate the
ID, parse JSON, validate the body, run one owner-scoped query, and map the
result to 200 or 404, with 500 for unexpected errors.”

**Example:** `PATCH /api/tasks/42` with `{"done":"yes"}` returns `400 done
must be boolean`; an anonymous call returns `401`; User B patching User A's
task gets `404` because `WHERE id = $2 AND owner_id = $3` matches zero rows.

**Senior follow-up:** The `500` path logs the error with
`` console.error(`PATCH /api/tasks/${id} failed:`, error) `` but returns only
`Internal server error`, so connection strings and SQL details never reach the
client. In production I would add a request ID to correlate the log line.

#### Q3. What invariant makes the one-dimensional dynamic programming solution correct?

**Interview-ready answer:** Define dp[i] from already solved smaller states and identify the smallest base cases. For Climbing Stairs, ways(i) = ways(i − 1) + ways(i − 2) with ways(0) = ways(1) = 1, and before each loop step `a` holds ways(i − 2) and `b` holds ways(i − 1).

**Example:** For `solve(5)`, `(a, b)` goes `(1, 1) → (1, 2) → (2, 3) →
(3, 5) → (5, 8)`, so the answer is `8`.

**Senior follow-up:** O(n) time and O(1) space assume constant-time addition;
Python's unbounded integers grow with n, so huge inputs usually ask for a
modulo. With arbitrary step sizes, keep a dp list and pay O(n × k).

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** “One checkbox click crosses every layer: React
state in the Client Component, a same-origin HTTP request, session
authentication in Auth.js, validation in the Route Handler, an owner-scoped
parameterized UPDATE in PostgreSQL, and a Server Component refresh. Being able
to rebuild it from memory shows I understand the boundaries, not just the
syntax.”

**Example:** Tick task `42` → `PATCH /api/tasks/42 {"done":true}` →
`auth()` returns owner `7` → `UPDATE ... WHERE id = 42 AND owner_id = 7` →
`200` → `router.refresh()` → owner-scoped `SELECT` → the checkbox stays
ticked after reload.

**Senior follow-up:** The first operational signal I would watch is the PATCH
error rate split by status: a spike in `404`s could mean stale tabs or an
authorization bug, and `500`s point to the database or pool. The
`(owner_id, id)` index keeps the UPDATE a point lookup as data grows.

### 10. Complexity and operational cost

- **DSA:** O(n) time and O(1) space with state compression.
- **Application:** The purpose is retrieval quality, not production speed. Track missing concepts separately from harmless syntax mistakes.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 23 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 23: rebuild one vertical slice from memory`

<a id="prep-day-24"></a>

## Prep Day 24 — Run the final mock and project pitch

**Date:** Tuesday, December 22, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Run the final mock and project pitch.

[Prep Day 23](../lessons/interview-prep/prep-day-23.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](../lessons/interview-prep/README.md) · [Prep Day 25](../lessons/interview-prep/prep-day-25.md)

**Everything to read today is below.** The original
[App overview](./APP_OVERVIEW.md),
[App architecture](./ARCHITECTURE.md),
[Interview index](./INTERVIEW_INDEX.md), [App Day 15](../lessons/day-15.md),
and [DSA Day 24](../dsa-python/lessons/dsa-day-24.md) remain available for
comparison. Today is a **mock** day: no new feature code. You practice the
project pitch at three depths, one timed DSA problem, and one system-design
extension. Rebuilding a slice belonged to Prep Day 23; final verification and
recall sheets belong to Prep Day 25.

### Learning objectives

- explain the MiniTrack user journey at three depths in beginner-friendly language;
- choose answer depth from interviewer signals without losing correctness;
- complete one timed DSA, project, and system-design mock;
- solve DSA Day 24 using the dynamic-programming state compression pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

1. What did yesterday's browser action send to the server?
2. Where is persistent task data stored, and what state is only temporary?
3. What error or edge case can you already predict for today's topic?
4. What do you remember about the **dynamic-programming state compression** pattern?

Use this format:

```md
## Tuesday, December 22, 2026

- What:
- Why:
- How MiniTrack uses it:
- What can go wrong:
- First task:
```

Do not copy the source paragraph. Write what you remember, then compare.

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Explaining the user journey at three depths:** A 30-second pitch states the problem and result, a two-minute pitch adds stack and key decisions, and a five-minute walkthrough traces one request plus trade-offs and testing.

**Backend focus — Choosing depth based on interviewer signals:** Start with the clear boundary-level answer and offer depth. Do not lead with every edge case before establishing the main flow.

**Today's connection:** The final mock turns implementation experience into a concise interview narrative.

```mermaid
flowchart LR
  Recall["Recall from notebook"] --> DSA["DSA 24: dynamic-programming state compression"]
  DSA --> FE["Frontend: Explaining the user journey at three depths"]
  FE --> BE["Backend: Choosing depth based on interviewer signals"]
  BE --> App["MiniTrack: Run the final mock and project pitch"]
  App --> Explain["Explain, test, and record gaps"]
```

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-24.py`](../dsa-python/practice/day-24.py)
**Pattern:** dynamic-programming state compression

#### Problem: House Robber

A street has houses in a row. `nums[i]` is the money in house `i`. You may
take money from any houses **except two neighbours** (adjacent houses). Return
the largest total you can take.

Assumptions: values are non-negative whole numbers; an empty street returns
`0`.

```python
solve([1, 2, 3, 1])     # 4   (houses 0 and 2: 1 + 3)
solve([2, 7, 9, 3, 1])  # 12  (houses 0, 2, 4: 2 + 9 + 1)
```

At each house you make one choice: **skip** it (keep the best total so far) or
**take** it (its money plus the best total from two houses back, because the
neighbour must be skipped).

#### Start coding

In the practice file, replace the `raise NotImplementedError` line with your
own implementation. This is the starting shape:

```python
def solve(nums):
    # Return the largest sum of non-adjacent values.
    raise NotImplementedError
```

Two Python helpers you will use:

- `max(a, b)` returns the larger of two numbers: `max(7, 11)` is `11`.
- `two_back, previous = previous, current` is **tuple assignment**: Python
  reads the right side with the old values first, then assigns both names at
  once. This slides the two remembered answers forward by one house.

```mermaid
flowchart TD
  Start["two_back = 0, previous = 0"] --> Next{Another house?}
  Next -- Yes --> Choose["current = max(previous, two_back + money)"]
  Choose --> Slide["two_back, previous = previous, current"]
  Slide --> Next
  Next -- No --> Return["Return previous"]
```

#### Invariant to say aloud

At each house, choose between skipping it and adding its value to the best result that cannot be adjacent.

Concretely: before house `i`, `previous` is the best total using houses
`0..i-1` and `two_back` is the best total using houses `0..i-2`.

#### Work in this order

1. Restate the problem and ask about constraints.
2. Give a brute-force approach and its cost before optimizing.
3. Write the invariant above in your own words.
4. Implement without opening the solution for 25 minutes.
5. Test empty, smallest, typical, duplicate, and boundary cases where relevant.
6. Use a small hint if blocked; do not spend the entire block stuck.
7. Compare with the commented reference and re-code the key loop from memory.

From the repository root:

```bash
python3 dsa-python/scripts/check_practice.py 24
python3 -m unittest discover -s dsa-python/tests -v
```

**Expected observation:** the day-specific checker accepts your implementation
for `[1, 2, 3, 1] → 4` and `[2, 7, 9, 3, 1] → 12`, and the completed reference
suite still passes. Those two examples do not cover an empty list or a single
house, so add the checks below.

You can also temporarily add these checks below your `solve` function in the
practice file, then run `python3 dsa-python/practice/day-24.py`:

```python
if __name__ == '__main__':
    assert solve([1, 2, 3, 1]) == 4
    assert solve([2, 7, 9, 3, 1]) == 12
    assert solve([]) == 0
    assert solve([5]) == 5
    assert solve([2, 1]) == 2
    assert solve([0, 0, 0]) == 0
    assert solve([2, 1, 1, 2]) == 4  # houses 0 and 3, not every other house
    print('All checks passed')
```

#### Brute-force code — reveal after attempting

<details>
<summary>Show the simple recursive solution</summary>

```python
def solve(nums):
    # best(i) = the largest total using only houses i, i+1, ..., end.
    def best(i):
        if i >= len(nums):
            return 0  # No houses left.
        skip = best(i + 1)
        take = nums[i] + best(i + 2)  # Taking i forces us to skip i + 1.
        return max(skip, take)

    return best(0)
```

</details>

A function defined inside another function (`best` inside `solve`) can read
the outer variable `nums`. Each call branches into two more calls, and the same
`best(i)` is recomputed many times, so time is exponential (about O(1.62ⁿ),
often written O(2ⁿ)). The recursion stack is O(n).

#### Optimized code — reveal after attempting

<details>
<summary>Show the House Robber solution</summary>

```python
def solve(nums):
    two_back = 0   # best total ending two houses ago
    previous = 0   # best total ending at the previous house
    for money in nums:
        # Skip this house, or take it plus the best non-adjacent total.
        current = max(previous, two_back + money)
        two_back, previous = previous, current
    return previous
```

</details>

A full `dp` list would store the best total for every prefix, but each step
only reads the last two values, so two variables are enough. Time is O(n);
extra space is O(1).

Trace for `[2, 7, 9, 3, 1]`:

| House | `money` | `two_back` before | `previous` before | `current = max(skip, take)` | After |
|---:|---:|---:|---:|---|---|
| 0 | 2 | 0 | 0 | `max(0, 0 + 2) = 2` | `0, 2` |
| 1 | 7 | 0 | 2 | `max(2, 0 + 7) = 7` | `2, 7` |
| 2 | 9 | 2 | 7 | `max(7, 2 + 9) = 11` | `7, 11` |
| 3 | 3 | 7 | 11 | `max(11, 7 + 3) = 11` | `11, 11` |
| 4 | 1 | 11 | 11 | `max(11, 11 + 1) = 12` | `11, 12` → return `12` |

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “For each house I try both choices: skip it and
solve the rest, or take it and solve from two houses later. I return the
larger result. It is correct because it explores every valid choice, but it is
exponential because the same suffixes are recomputed.”

**Example:** `best(0)` calls `best(1)` and `best(2)`; `best(1)` also calls
`best(2)`, so `best(2)` is computed twice already.

**Follow-up:** Caching `best(i)` makes it O(n) time and O(n) space. The
bottom-up loop then removes the cache and the recursion stack.

##### DSA Q2. What is the core idea of the optimized solution?

**Interview-ready answer:** “Let best(i) be the largest total using houses 0
through i. Then best(i) = max(best(i − 1), best(i − 2) + nums[i]). Because each
state needs only the two before it, I keep two variables instead of a list.”

**Example:** At house 2 in `[2, 7, 9]`: skip gives `7`, take gives
`2 + 9 = 11`, so best is `11`.

**Follow-up:** This is **state compression**: the recurrence's dependency
window decides how much memory you need. A window of two means O(1) space.

##### DSA Q3. Why is it correct?

**Interview-ready answer:** “The best plan for the first i houses either skips
house i — then it is the best plan for the first i − 1 houses — or takes house
i — then house i − 1 is skipped and the rest is the best plan for the first
i − 2 houses. Those two cases cover every valid plan, and taking the maximum
picks the better one.”

**Example:** `[2, 1, 1, 2]` returns `4` by taking houses 0 and 3. A naive
“every other house” idea gives only `3`.

**Follow-up:** Starting both variables at `0` represents “no houses yet”, so
the first house correctly becomes `max(0, 0 + nums[0])`.

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “O(n) time, because I visit each house once with
constant work, and O(1) extra space, because I keep two numbers.”

**Example:** For 1,000,000 houses, the loop runs 1,000,000 times and still
stores only `two_back`, `previous`, and `current`.

**Follow-up:** If the interviewer wants the actual houses chosen, I need the
full dp list (O(n) space) so I can walk backwards and reconstruct the choices.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “Empty list returns 0, one house returns its
value, two houses returns the larger, all zeros returns 0, and a case like
[2, 1, 1, 2] where alternating houses is not optimal.”

**Example:** `solve([2, 1]) == 2` and `solve([]) == 0` (the loop never runs).

**Follow-up:** If negative values were allowed, the `max` with “skip” already
avoids taking a negative house, so the answer is still never below `0`. Ask
whether an empty selection is allowed.

##### DSA Q6. What if the houses form a circle?

**Interview-ready answer:** “Now the first and last houses are neighbours, so
they cannot both be taken. I solve the straight-line problem twice — once
without the last house and once without the first — and return the larger.
One house is a special case.”

**Example:** `[2, 3, 2]` in a circle returns `3`: without the last house the
best is `3`, and without the first house the best is `3`.

**Follow-up:** It stays O(n) time; slicing copies cost O(n) extra space, which
you can avoid by passing start and end indices instead of slices.

### 4. Frontend guided study (1 hour 30 minutes)

#### What

A 30-second pitch states the problem and result, a two-minute pitch adds stack and key decisions, and a five-minute walkthrough traces one request plus trade-offs and testing.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.
In an interview, the same rule applies to your story: begin with what the user
experiences, then explain which layer owns which decision.

#### The user journey to narrate

From `docs/APP_OVERVIEW.md`:

1. Open MiniTrack and see three tasks.
2. Add **Practice React hooks**.
3. The new task appears in the list and persists after refresh.
4. Complete **Build first Node.js endpoint**.
5. Filter to **Open** tasks.
6. Search for **SQL** and edit the matching task.
7. Sign in on another device and see your own tasks.

#### The architecture to draw

From `docs/ARCHITECTURE.md`:

```text
Browser (http://localhost:3000)
  ├── Next.js Server Components: session, URL filters, PostgreSQL reads
  └── React Client Components: POST/PATCH/DELETE to Route Handlers
                                  |
                    Next.js app (TypeScript)
                      ├── Auth.js session checks ─── GitHub OAuth
                      └── pg Pool / parameterized SQL
                                      |
                                  PostgreSQL
```

#### How — write your own pitch first

For 20 minutes, write your own 30-second, two-minute, and five-minute pitches
in your notebook. Then record yourself saying each one and only afterwards
compare with the model scripts.

<details>
<summary>Show the 30-second model pitch</summary>

> “MiniTrack is a small personal task tracker I built with Next.js 16, React
> 19, TypeScript, and PostgreSQL. You sign in with GitHub, then add, rename,
> complete, search, filter, and delete your own tasks. I kept the product tiny
> on purpose so the effort goes into the engineering: validated APIs,
> parameterized and owner-scoped SQL, tests that prove one user cannot touch
> another user's data, accessibility, and a documented production release.”

</details>

<details>
<summary>Show the two-minute model pitch</summary>

> “MiniTrack is one Next.js app that serves both the UI and a same-origin API,
> so there is no separate server and no CORS setup.
>
> **Reads** happen in a Server Component: it calls `auth()`, then a
> server-only function runs an owner-scoped `SELECT` through a `pg` pool. With
> Cache Components, that request-time work sits inside `<Suspense>` after
> `io()`, so the page shell stays static.
>
> **Writes** start in a Client Component, `TaskBoard`. A controlled input and a
> checkbox send `POST`, `PATCH`, or `DELETE` to Route Handlers. Each handler
> authenticates, validates untrusted input, and calls a data function whose SQL
> includes `owner_id` from the session. After success the client calls
> `router.refresh()`, so PostgreSQL stays the single source of truth.
>
> **Key decisions:** raw SQL instead of an ORM to learn parameterization and
> pooling; search filters live in the URL so they survive reload; no
> optimistic UI yet, because correctness came first. Tests cover units,
> PostgreSQL integration against a separate database, a Playwright journey, and
> negative authorization cases.”

</details>

<details>
<summary>Show the five-minute model walkthrough</summary>

1. **Problem and result (20 s):** the 30-second pitch.
2. **Architecture (45 s):** draw the diagram above; name the two paths (server
   reads, client mutations through Route Handlers).
3. **Trace one request (2 min):** a user ticks a task.

   ```text
   1. TaskBoard checkbox onChange -> toggleTask("42", true)
   2. fetch PATCH /api/tasks/42 {"done":true}
   3. Route Handler: auth() -> 401 if no session.user.id
   4. isValidId("42"), request.json(), done must be boolean -> else 400
   5. setDone(ownerId, "42", true)
      UPDATE tasks SET done = $1 WHERE id = $2 AND owner_id = $3 RETURNING ...
   6. Row -> 200 task JSON; no row -> 404 (missing or not yours)
   7. Client: router.refresh() -> Server Component re-runs owner-scoped SELECT
   ```

4. **Failure behaviour (45 s):** `400` invalid input, `401` anonymous, `404`
   for missing or foreign tasks (no ownership leak), `500` with a generic body
   while details go to the server log; the UI shows a `role="alert"` message.
5. **Evidence (45 s):** integration test creates User A and User B, then
   asserts `renameTask(userA, taskB.id, 'Stolen')` returns `null` **and** User
   B's row is unchanged.
6. **Trade-offs and next steps (45 s):** no pagination, no optimistic
   concurrency/version column, basic rate limiting, one OAuth provider; what
   I would measure before changing each.

</details>

### 5. Backend guided study (1 hour 30 minutes)

#### What

Start with the clear boundary-level answer and offer depth. Do not lead with every edge case before establishing the main flow.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

#### Choosing depth from interviewer signals

| Signal from the interviewer | Depth to use | What to say next |
|---|---|---|
| “Briefly, what did you build?” or a glance at the clock | 30-second pitch | “Happy to go deeper into any layer.” |
| “How is it put together?” | Two-minute pitch | Offer one request trace. |
| “Walk me through what happens when…” | Five-minute trace | Follow the numbered request path. |
| “What if the database is down / two users…?” | One boundary, in depth | Name the layer, the status code, and the evidence. |
| Interrupts with a specific question | Stop and answer that | Do not finish the prepared script. |

#### API summary to recite

From App Day 15:

| Route | Authentication | Authorization |
|---|---|---|
| `GET /api/health` | Public | No task data |
| `GET /api/tasks` | Required | Owner-scoped list |
| `POST /api/tasks` | Required | Owner from session |
| `PATCH /api/tasks/:id` | Required | ID and owner predicate |
| `DELETE /api/tasks/:id` | Required | ID and owner predicate |

#### Boundary responsibilities to recite

- **Browser:** interaction and temporary UI state.
- **Route Handler:** HTTP validation and status mapping.
- **Auth.js:** verified identity and session.
- **Data layer:** parameterized, owner-scoped SQL.
- **PostgreSQL:** constraints, persistence, and transactions.
- **Tests:** regression and isolation evidence.
- **Deployment:** configuration, observability, and recovery.

#### Code excerpts to point at during the walkthrough

Owner-scoped creation from App Day 11 (`frontend/lib/tasks.ts`):

```ts
export async function createTask(
  ownerId: string,
  title: string,
): Promise<Task> {
  const result = await getPool().query<TaskRow>(
    `
      INSERT INTO tasks (owner_id, title)
      VALUES ($1, $2)
      RETURNING id, title, done, created_at
    `,
    [ownerId, title],
  );

  return toTask(result.rows[0]);
}
```

Server entry point pattern from App Day 11 (the owner never comes from the
request body):

```ts
const session = await auth();
if (!session?.user?.id) {
  return Response.json({ error: 'Unauthorized' }, { status: 401 });
}

const task = await renameTask(session.user.id, id, title);
return task
  ? Response.json(task)
  : Response.json({ error: 'Task not found' }, { status: 404 });
```

The isolation test from App Day 12
(`frontend/test/integration/authorization.test.ts`):

```ts
test('users cannot read or mutate one another tasks', async () => {
  const userA = await createTestUser(pool, 'a@example.test');
  const userB = await createTestUser(pool, 'b@example.test');
  const taskA = await createTask(userA, 'A private task');
  const taskB = await createTask(userB, 'B private task');

  const visibleToA = await searchTasks(userA, {
    query: '',
    status: 'all',
  });
  assert.deepEqual(visibleToA.map(task => task.id), [taskA.id]);

  assert.equal(await renameTask(userA, taskB.id, 'Stolen'), null);
  assert.equal(await deleteTask(userA, taskB.id), false);

  const stillVisibleToB = await searchTasks(userB, {
    query: '',
    status: 'all',
  });
  assert.equal(stillVisibleToB[0]?.title, 'B private task');
});
```

#### Trade-offs to state honestly

From `docs/ARCHITECTURE.md` and App Day 15:

- no task sharing or teams — every task has one owner;
- no optimistic UI — server-as-source-of-truth refresh first;
- no separate API framework — Route Handlers are enough for one app;
- simple validation — no schema library yet;
- no pagination or measured index tuning beyond `(owner_id, id)`;
- no optimistic concurrency/version column;
- limited rate limiting and basic monitoring; one OAuth provider.

### 6. MiniTrack implementation (1 hour)

**Milestone source:** Final DSA, project, and system-design mock

No code changes today. Run the mock as if it were real: timer on, notes
closed, camera or voice recorder on.

#### Mock schedule (60 minutes)

| Minutes | Part | Rule |
|---:|---|---|
| 0–25 | DSA: one unseen or weak problem | Restate, brute force, invariant, code, test, complexity |
| 25–35 | Project pitch | 30 s → 2 min → interviewer chooses one 5-minute trace |
| 35–55 | System-design extension | Clarify, propose, trade-offs, what you would measure |
| 55–60 | Self-review | Write only **critical** gaps (max three) |

#### Part 1: DSA mock problem — House Robber II

Houses are arranged in a **circle**, so the first and last houses are
neighbours. Return the largest total without taking two neighbours. Reuse your
`solve` from section 3 as a helper.

```python
rob_circle([2, 3, 2])     # 3
rob_circle([1, 2, 3, 1])  # 4
rob_circle([5])           # 5
rob_circle([])            # 0
```

<details>
<summary>Show a model solution</summary>

```python
def rob_circle(nums):
    if len(nums) == 1:
        return nums[0]  # One house has no neighbour to conflict with.
    # Either the last house is excluded, or the first house is excluded.
    return max(solve(nums[:-1]), solve(nums[1:]))
```

`nums[:-1]` is every house except the last; `nums[1:]` is every house except
the first. O(n) time; the two slices use O(n) extra space.

</details>

#### Part 2: Project pitch scorecard

Score each line 0 (missing), 1 (partial), or 2 (clear):

| Criterion | Score |
|---|---|
| Started with the user problem, not a technology list | |
| Named the two paths: server reads and client mutations | |
| Traced one request with real file and function names | |
| Explained authentication versus owner authorization | |
| Gave failure statuses and what the user sees | |
| Cited test evidence (including the cross-user test) | |
| Stated at least two honest limitations | |
| Stopped when the interviewer signalled enough depth | |

#### Part 3: System-design extension bank

Pick **one** question, answer for 20 minutes, then compare.

<details>
<summary>Q1. “MiniTrack now has a million users and some have 50,000 tasks. What changes?”</summary>

**Model answer:** “First I would measure: slow-query logs and
`EXPLAIN ANALYZE` on the owner-scoped list. The `(owner_id, id)` index already
keeps each user's rows together. The biggest change is pagination: keyset
pagination such as `WHERE owner_id = $1 AND id > $2 ORDER BY id LIMIT 50`
stays fast where `OFFSET` scans skipped rows. Search with `ILIKE '%sql%'`
cannot use a normal B-tree index, so I would measure and consider a trigram
index. The Next.js app is stateless, so it can scale horizontally behind a
load balancer; then the PostgreSQL connection count becomes the limit, so I
would size the `pg` pool per instance or add a pooler such as PgBouncer. Read
replicas come later and bring replication-lag trade-offs.”

</details>

<details>
<summary>Q2. “A user edits the same task in two tabs. How do you avoid lost updates?”</summary>

**Model answer:** “Today the last write wins. I would add a `version` column
and make the update conditional: `UPDATE tasks SET title = $1, version =
version + 1 WHERE id = $2 AND owner_id = $3 AND version = $4 RETURNING ...`.
Zero rows means either missing/foreign or stale; a follow-up owner-scoped
`SELECT` tells which, so I can return `404` or `409 Conflict` and let the UI
show the latest value. This is optimistic concurrency; it avoids holding
locks while a user types.”

</details>

<details>
<summary>Q3. “A flaky network retries POST /api/tasks. How do you prevent duplicates?”</summary>

**Model answer:** “POST is not idempotent, and disabling the button only stops
double clicks. The client sends an `Idempotency-Key` header with a random ID
per intended creation. The server stores the key with the owner and the
created task, under a unique constraint, in the same transaction as the
insert. A retry with the same key returns the stored task instead of creating
another. Keys expire after a retention window.”

</details>

<details>
<summary>Q4. “Should you add caching?”</summary>

**Model answer:** “Only after measuring. Task lists are private per user, so
I must never cache session-dependent output as shared data — the Day 10 rule
is not to put `"use cache"` on private session output. The reads are already
indexed point and range queries. If a measured hot path appeared, I would
consider a per-user cache keyed by owner with explicit invalidation on every
mutation, and weigh the staleness risk against the database load saved.”

</details>

<details>
<summary>Q5. “Add teams so tasks can be shared.”</summary>

**Model answer:** “That is a new authorization model, not a column tweak. I
would add `teams` and `memberships (team_id, user_id, role)`, give tasks a
`team_id`, and change every predicate from `owner_id = $session` to ‘the
session user has a membership in this task's team with a role that allows this
action’. The Day 12 negative tests must be extended to cross-team cases before
release.”

</details>

#### Part 4: Record only final critical gaps

In your notebook, write at most three gaps that would change an interview
outcome (for example, “cannot explain why `404` instead of `403`”). Ignore
cosmetic wording. Each gap gets one concrete fix for Prep Day 25.

**Expected observation:** you finished all four parts inside 60 minutes, your
pitch stayed within each time box, and your gap list is short and specific.

### 7. Trace the event or request

```mermaid
sequenceDiagram
  participant I as Interviewer
  participant Y as You
  participant B as Browser/React
  participant N as Next.js Route Handler
  participant A as Auth.js
  participant P as PostgreSQL
  I->>Y: "Walk me through adding a task."
  Y->>I: 30-second pitch, then offer depth
  I->>Y: "Go deeper on the request."
  Y->>B: TaskBoard submit: preventDefault, POST /api/tasks
  B->>N: {"title":"Practice React hooks"}
  N->>A: auth()
  A-->>N: session.user.id = "7"
  N->>N: normalizeTitle -> 400 if empty or > 200
  N->>P: INSERT INTO tasks (owner_id, title) VALUES ($1, $2)
  P-->>N: New row
  N-->>B: 201 task JSON
  B->>N: router.refresh() -> owner-scoped SELECT
  Y->>I: Failure paths, test evidence, trade-offs
```

Trace one concrete input: title `"Practice React hooks"` from owner `7`. Name
every boundary, value, and possible failure (`400`, `401`, `500`, network).

### 8. Deliberate debugging exercise (25 minutes)

**Break it:** Describe MiniTrack as a list of technologies.

**Predict before running:** write the expected symptom in your notebook.

**Expected symptom:** The interviewer cannot see the user problem, architecture decisions, or your contribution.

**Root cause:** Tools replaced the engineering story.

**Restore and verify:** Lead with the user journey, then explain boundaries, trade-offs, and verified outcomes.

**Try it:** record yourself saying “Next.js, React, TypeScript, Tailwind,
PostgreSQL, pg, Auth.js, Playwright” for 30 seconds, then the model 30-second
pitch. Note which version names a user, a decision, and evidence.

Do not stop after making the symptom disappear. Explain why the repair restores
the intended invariant.

### 9. Interview questions and answers (30 minutes)

#### Q1. How do you explain the MiniTrack user journey at three depths?

**Interview-ready answer:** “In 30 seconds I say what it is and why it is
interesting: a personal task tracker where the work went into validation,
owner-scoped SQL, tests, and deployment. In two minutes I add the two paths —
Server Components read PostgreSQL directly; Client Components mutate through
Route Handlers and refresh. In five minutes I trace one request with real
function names, its failure statuses, and the test that proves isolation.”

**Example:** The five-minute version traces `toggleTask("42", true)` in
`frontend/app/TaskBoard.tsx` → `PATCH /api/tasks/42` → `auth()` →
`setDone(ownerId, "42", true)` → `200` → `router.refresh()`.

**Senior follow-up:** The structure stays the same when the product grows;
only the request I choose to trace changes. If an interviewer cares about the
frontend, I trace focus, `role="alert"`, and `busy`; if they care about data,
I trace the SQL predicate and index.

#### Q2. How do you choose depth based on interviewer signals?

**Interview-ready answer:** “I give the boundary-level answer first, then
offer depth: ‘Happy to go into the SQL or the auth check.’ I follow their
choice instead of reciting every edge case.”

**Example:** Asked “What happens if the database is down?”, I answer: “A
mutation's Route Handler `catch` logs the error on the server and returns
`500 Internal server error`, and `TaskBoard` shows `Request failed: Could not
add task (500)`. The page read shows `Could not load tasks` in a
`role="alert"` element instead of an empty list that pretends to succeed.”
Then I stop.

**Senior follow-up:** Logs must not include the `DATABASE_URL`, OAuth secrets,
or task contents. In production I would add a request ID to both the log line
and the response so support can correlate them.

#### Q3. What invariant makes the dynamic-programming state compression solution correct?

**Interview-ready answer:** At each house, choose between skipping it and adding its value to the best result that cannot be adjacent. Before house i, `previous` is the best total for houses `0..i-1` and `two_back` is the best for `0..i-2`.

**Example:** For `[2, 7, 9, 3, 1]`, `(two_back, previous)` goes
`(0, 2) → (2, 7) → (7, 11) → (11, 11) → (11, 12)`, so the answer is `12`.

**Senior follow-up:** O(n) time and O(1) space hold because the recurrence
only looks two steps back. If you must return the chosen houses, keep the full
dp list; for a circle, run the line version twice.

#### Q4. How does today's work fit the complete MiniTrack system?

**Interview-ready answer:** “The mock turns the whole build into a story an
interviewer can follow: one user problem, two data paths, one traced request,
explicit failures, test evidence, and honest limitations.”

**Example:** Begin with “add Practice React hooks”, end with “it survives
reload because `router.refresh()` re-ran the owner-scoped `SELECT`, and the
cross-user test proves User B cannot see it.”

**Senior follow-up:** Before adding infrastructure I would measure p95
latency of `GET` and `PATCH`, the `pg` pool wait time, and the `4xx`/`5xx`
rate. The first likely bottleneck is unpaginated lists for heavy users, not
the Next.js server.

### 10. Complexity and operational cost

- **DSA:** O(n) time and O(1) space.
- **Application:** Communication should compress detail without losing correctness. Spend depth on decisions relevant to the question.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 24 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 24: run the final mock and project pitch`

<a id="prep-day-25"></a>

## Prep Day 25 — Consolidate, verify, and stop on time

**Date:** Wednesday, December 23, 2026
**Time:** 7 study hours plus breaks
**Starting point:** App Days 1–4 are complete. Continue from the current learner workspace and the previous preparation-day exit checklist.
**Goal:** Consolidate, verify, and stop on time.

[Prep Day 24](../lessons/interview-prep/prep-day-24.md) · [Preparation plan](./FULL_STACK_INTERVIEW_PREP_PLAN.md) · [Track home](../lessons/interview-prep/README.md)

**Everything to read today is below.** The original
[acceptance checklist](../CHECKLIST.md),
[interview index](./INTERVIEW_INDEX.md), [App Day 15](../lessons/day-15.md),
and [DSA Day 25](../dsa-python/lessons/dsa-day-25.md) remain available for
comparison. This is the **final** prep day: no new features and no new topics.
You solve Coin Change, run the existing verification commands and one
critical demo, and write four one-page recall sheets. The slice rebuild was
Prep Day 23 and the full mock was Prep Day 24. Fix only a blocker that would
break the demo, then stop on time.

### Learning objectives

- retrieve core frontend concepts calmly from short prompts;
- verify the MiniTrack demo path and its failure boundary without touching secrets;
- produce one-page FE, BE, DSA, and system-design recall sheets;
- solve DSA Day 25 using the unbounded knapsack dynamic programming pattern;
- record the result in your rough notebook and explain it without reading.

### 1. Start with notebook recall (45 minutes)

Before opening a lesson, write answers in
[`checkpoints/ROUGH/Notes.md`](../checkpoints/ROUGH/Notes.md):

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

### 2. Understand today's full-stack boundary (20 minutes)

**Frontend focus — Retrieving core concepts calmly:** Use short prompts to recall rendering, state, effects, Context, accessibility, and performance. Correct one gap, then move on instead of opening a new topic.

**Backend focus — Verifying the demo path:** Run the important checks and one critical user journey. Confirm configuration instructions without exposing or changing secrets.

**Today's connection:** The final day protects reliable recall, a working demo, and enough rest to use what you learned.

#### Today's time box

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

### 3. Python DSA practice (1 hour 45 minutes)

**Practice file:** [`dsa-python/practice/day-25.py`](../dsa-python/practice/day-25.py)
**Pattern:** unbounded knapsack dynamic programming

#### Problem: Coin Change

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

#### Start coding

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

#### Invariant to say aloud

Build the minimum coins for every smaller amount and allow each positive coin to be reused.

Concretely: when the loop reaches `total`, every `dp[t]` with `t < total` is
already the true minimum (or the impossible marker), so
`dp[total - coin] + 1` is the best plan whose **last** coin is `coin`.

#### Work in this order

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

#### Brute-force code — reveal after attempting

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

#### Optimized code — reveal after attempting

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

#### DSA interview questions and answers

##### DSA Q1. What is the brute-force approach?

**Interview-ready answer:** “I recursively try every coin as the next coin,
solve the smaller remaining amount, and keep the smallest result plus one. If
no coin leads to zero, the answer is −1. It is correct but exponential,
because the same remaining amounts are solved many times.”

**Example:** For `[1, 2, 5]` and `11`, the remaining amount `6` is reached by
`5 + …`, `2 + 2 + 1 + …`, `1 + 2 + 2 + …`, and many other paths.

**Follow-up:** Memoizing `fewest(remaining)` gives O(amount × coins) time
top-down, but the recursion can still be `amount` deep and hit Python's
recursion limit; the bottom-up list avoids that.

##### DSA Q2. What is the core idea of the dp solution?

**Interview-ready answer:** “dp[t] is the fewest coins to make t. Any optimal
plan for t ends with some coin c, and the rest is an optimal plan for t − c.
So dp[t] = 1 + the minimum of dp[t − c] over all usable coins. I fill dp from
0 up to amount.”

**Example:** `dp[6] = 1 + min(dp[5], dp[3], dp[2]) = 1 + min(2, 1, 2) = 2`
for coins `[1, 3, 4]`.

**Follow-up:** Because each total looks back at **any** smaller total, the
same coin can appear many times. In 0/1 knapsack, where each item can be used
once, the loop order changes so an item cannot be reused.

##### DSA Q3. Why is greedy (largest coin first) unsafe?

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

##### DSA Q4. What are the time and space costs?

**Interview-ready answer:** “O(amount × number of coins) time, because for
each total I try every coin, and O(amount) space for the dp list.”

**Example:** `amount = 10,000` with 3 coins is about 30,000 checks.

**Follow-up:** This is **pseudo-polynomial**: it depends on the numeric value
of `amount`, not the number of digits used to write it. An amount of
10⁹ would need a billion-entry list, which is too much memory.

##### DSA Q5. What edge cases should I test?

**Interview-ready answer:** “Amount 0 returns 0; an unreachable amount
returns −1; an empty coin list; a coin larger than the amount; a zero coin;
and a greedy-trap case like [1, 3, 4] with 6.”

**Example:** `solve([], 0) == 0`, `solve([], 3) == -1`,
`solve([0, 2], 4) == 2`.

**Follow-up:** Ask whether a negative amount is possible; this solution
assumes `amount >= 0` and does not validate it. Duplicate coin values only
repeat work and do not change the answer.

##### DSA Q6. What if you must count the number of ways instead?

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

### 4. Frontend guided study (1 hour 30 minutes)

#### What

Use short prompts to recall rendering, state, effects, Context, accessibility, and performance. Correct one gap, then move on instead of opening a new topic.

#### Why

The browser layer should make state and feedback understandable without taking
ownership of persistent data or security decisions that belong on the server.
Calm recall of these six ideas covers most frontend interview questions about
MiniTrack.

#### How — answer aloud, then reveal

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

### 5. Backend guided study (1 hour 30 minutes)

#### What

Run the important checks and one critical user journey. Confirm configuration instructions without exposing or changing secrets.

#### Boundary checklist

- Validate untrusted path, query, and body values.
- Authenticate identity when the route is protected.
- Authorize the resource separately from authentication.
- Bind SQL values rather than concatenating untrusted data.
- Return an explicit success or error status.
- Log internal failures on the server without exposing secrets.

#### Confirm configuration by name only

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

#### Migration order to recite

```bash
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f backend/sql/schema.sql
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f backend/sql/migrations/002-auth-users.sql
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f backend/sql/migrations/003-task-owners.sql
```

Do **not** rerun these today against a database you care about; `003` deletes
unowned sample tasks. Reciting the order is enough.

#### API summary to verify

| Route | Authentication | Authorization |
|---|---|---|
| `GET /api/tasks` | Required | Owner-scoped list |
| `POST /api/tasks` | Required | Owner from session |
| `PATCH /api/tasks/:id` | Required | ID and owner predicate |
| `DELETE /api/tasks/:id` | Required | ID and owner predicate |

### 6. MiniTrack implementation (1 hour)

**Milestone source:** Light review, final verification, and travel-ready notes

#### Step 1: Coin Change and the greedy explanation

Finish section 3, then explain aloud in one minute why greedy fails for
`[1, 3, 4]` and amount `6` (see DSA Q3).

#### Step 2: Run the release gate

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

#### Step 3: Walk the critical demo journey

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

#### Step 4: Write four one-page recall sheets

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

#### Acceptance checklist to tick (from `CHECKLIST.md`)

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

### 7. Trace the event or request

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

### 8. Deliberate debugging exercise (25 minutes)

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

### 9. Interview questions and answers (30 minutes)

#### Q1. How do you retrieve core frontend concepts calmly?

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

#### Q2. How do you verify the demo path?

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

#### Q3. What invariant makes the unbounded knapsack dynamic programming solution correct?

**Interview-ready answer:** Build the minimum coins for every smaller amount and allow each positive coin to be reused. When computing `dp[total]`, every smaller `dp` is already optimal, so `dp[total - coin] + 1` is the best plan ending with that coin, and the minimum over coins is the answer.

**Example:** For `[1, 3, 4]` and `6`, `dp` becomes `[0, 1, 2, 1, 1, 2, 2]`,
so the answer is `2` (`3 + 3`), while greedy gives `3`.

**Senior follow-up:** O(amount × coins) time and O(amount) space are
pseudo-polynomial; a huge amount makes the list impractical. Counting ways is a
different recurrence where loop order decides combinations versus
permutations.

#### Q4. How does today's work fit the complete MiniTrack system?

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

### 10. Complexity and operational cost

- **DSA:** O(amount * number of coins) time and O(amount) space.
- **Application:** The last day's scarce resource is attention. Consolidation has higher expected interview value than low-retention new coverage.
- **Learning:** Attempting, retrieving, and correcting is more valuable than
  copying several solutions. Keep the scope to one understood pattern today.

### Exit checklist

- [ ] I completed DSA Day 25 before reading its solution.
- [ ] I can state the invariant and complexity without notes.
- [ ] I completed or verified the MiniTrack milestone.
- [ ] I tested one success path and one failure path.
- [ ] I completed the deliberate debugging exercise.
- [ ] I answered all four interview questions aloud.
- [ ] I recorded what remains confusing and tomorrow's first task.

**Suggested commit:** `prep day 25: consolidate, verify, and stop on time`

---

## Slow-day fallback

Do not abandon the plan because one day is difficult.

### Yellow day — about four useful hours

1. 60 minutes: notebook recall and review.
2. 75 minutes: current DSA problem.
3. 90 minutes: the day’s MiniTrack milestone.
4. 15 minutes: explain one answer aloud.

Move only the unfinished highest-priority item to Saturday’s gap-repair block.

### Red day — minimum 90 minutes

1. Reattempt one previously solved DSA problem for 30 minutes.
2. Read your own notes for 20 minutes.
3. Trace one MiniTrack request for 25 minutes.
4. Write tomorrow’s first task for 15 minutes.

Do not compensate by studying late into the night or by doubling the next day.

## Weekly review scorecard

Complete this every Saturday:

| Area | Score 1–5 | Evidence |
|---|---:|---|
| DSA problem recognition | | |
| DSA implementation | | |
| Complexity explanation | | |
| Frontend concepts | | |
| Backend and SQL | | |
| Testing and debugging | | |
| System design | | |
| Communication without notes | | |

For any score below 3, write one concrete repair task for the next week. Do not
write “study more”; write something measurable such as “implement binary search
without notes and explain the loop invariant.”

## Rules that prevent overload

1. Finish the core app before optional Docker, caching, or Kubernetes work.
2. Prefer one understood DSA pattern over three copied solutions.
3. Write from memory instead of transcribing the lesson.
4. Keep Sundays free.
5. Use Saturday review blocks as buffers; do not let every missed task roll
   forward.
6. If deployment is blocked by an external service, rehearse locally and record
   the blocker rather than losing multiple days.
7. Stop new learning after December 22; December 23 is consolidation.

## Final readiness checklist

- [ ] I can complete and explain the critical MiniTrack user journey.
- [ ] I can trace a browser event through validation, authorization, SQL, and
      the returned UI state.
- [ ] I can explain React state, effects, refs, Context, and memoization.
- [ ] I can explain HTTP, API validation, PostgreSQL, pooling, and migrations.
- [ ] I can distinguish authentication from owner-scoped authorization.
- [ ] I can solve and explain the 25 DSA patterns in this guide.
- [ ] I can draw the MiniTrack architecture and justify each scaling step.
- [ ] I have completed the mock interviews and repaired the highest-value gaps.
- [ ] I can deliver the 30-second, two-minute, and five-minute project pitches.
- [ ] I have stopped adding new topics and am ready to travel on December 24.
