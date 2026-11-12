# Day 5 — React state, forms, mutations and tricky full-stack cases

**90 min:** 15 concepts / 40 coding / 15 debugging / 20 interview.

## Outcome
Create, complete, delete and filter tasks from the browser. No elaborate UI. We keep PostgreSQL as the source of truth.

## What / Why / How

1. `'use client'` in `app/TaskBoard.tsx` declares an interactive React component.
2. `useState` stores input text, filter choice and in-flight request status.
3. The input is **controlled** by `value` and `onChange`.
4. `event.preventDefault()` prevents a traditional page-reloading HTML form submission.
5. `fetch()` sends POST/PATCH/DELETE to Node; the backend updates PostgreSQL.
6. `router.refresh()` re-runs the Server Component so the list is refreshed from the DB.
7. The visible list is **derived** using `tasks.filter(...)`; don't create redundant state for what you can compute.
8. Disabled buttons while one request is pending reduce accidental duplicate submissions in this demo, **but are not a true server-side idempotency guarantee**.

## Build

Start both backend and frontend as shown in the README. Open `frontend/app/TaskBoard.tsx` and read it top-to-bottom.

Test:

- Add `Practice React state`.
- Mark it complete, then reopen it.
- Filter to `Open`, then `Done`.
- Delete the task.
- Refresh the page; changes should persist because they're in PostgreSQL.

If you want to write the component yourself, temporarily rename `TaskBoard.tsx` and create your own using these steps: render `tasks`, then a controlled input, then POST, then filter, PATCH, DELETE. Compare with the reference after each step.

## Debug challenges

- **Remove `event.preventDefault()`:** A form can cause a page submission instead of purely running your async handler.
- **Remove `router.refresh()`:** DB changes occur but passed-in task props can remain stale until refresh/navigation.
- **Stop API while frontend stays up:** See error feedback and why the catch/finally blocks matter.
- **Try rapid double-clicks:** Discuss why disabling controls is not enough to prevent duplicates from network retries or different clients.

## Tricky React / JavaScript interview questions

1. **Why shouldn't you mutate React state directly?** React relies on state updates/new references to schedule rendering.
2. **What is a stale closure?** An async callback/event handler captures an older render's value; use functional updates where appropriate.
3. **Why not use `useEffect` to compute filtered tasks?** Filtering is derived from props/state; compute during rendering unless expensive enough to justify memoization.
4. **Does `setState` update the variable immediately in the current handler?** No; it schedules a render; current closure sees its render snapshot.
5. **Why `key={task.id}` instead of array index?** Stable identity avoids incorrect reuse when list order changes.
6. **Why is `router.refresh()` useful here?** Re-fetches and merges fresh server-rendered payload without manually syncing copied task state.
7. **Why is POST typically non-idempotent?** Repeating a create request can create two resources; production retry behavior needs idempotency keys or other guarantees.
8. **Why is PATCH different from PUT?** PATCH applies partial changes; PUT represents replacing target resource state (subject to endpoint semantics).
9. **What is a race condition?** Correctness depends on operation order; e.g. older response overwrites newer state. We'll cover request races and cancellation later.
10. **When would you prefer optimistic UI?** Low-latency feel when failure recovery and consistency are handled; not necessary for first version.

## Exit checklist

- [ ] Create works from browser.
- [ ] Toggle completion works.
- [ ] Filter works without another API call.
- [ ] Delete works.
- [ ] Errors are visible when backend is unavailable.
- [ ] I can answer at least 7/10 questions without notes.

**Commit:** `git add . && git commit -m "day5: React forms and task mutations"`

## Week 1 retrospective

Explain the full path: **button → event handler → fetch → Node callback → SQL → PostgreSQL → JSON → refresh → render**. Write a brief version in `docs/MY_NOTES.md`. Do not start authentication or caching yet.
