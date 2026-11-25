# Full-stack interview preparation plan

**Study window:** November 25–December 23, 2026  
**Travel date:** December 24, 2026  
**Schedule:** 7 hours a day, 6 days a week, with Sundays off  
**Total available:** 25 study days, approximately 175 hours

This plan is balanced across frontend, backend, Python DSA, system design, and
mock interviews. It deliberately includes notebook time and repetition because
writing concepts down is part of the learning process, not wasted time.

**Daily guided lessons:** [Start Interview Prep Day 01](../lessons/interview-prep/prep-day-01.md)
or open the [complete 25-day lesson index](../lessons/interview-prep/README.md).
For a single-document version, open the
[complete interview preparation master guide](INTERVIEW_CHEATSHEET.md).

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

## Phase 1 — Finish the Week 1 milestone

### Wednesday, November 25 — Study Day 1

- [ ] **DSA 01:** Two Sum — hash map.
- [ ] **Frontend:** Day 5 controlled input, `useState`, and `onSubmit`.
- [ ] **Backend:** Trace POST validation, SQL insertion, and HTTP responses.
- [ ] **MiniTrack:** Build the add-task flow without copying the final component.
- [ ] **Interview drill:** Explain controlled inputs and why `fetch()` needs an
      explicit `response.ok` check.

**Output:** Add a task from the browser and see it persist in PostgreSQL.

### Thursday, November 26 — Study Day 2

- [ ] **DSA 02:** Valid Anagram — frequency counting.
- [ ] **Frontend:** Checkbox events, delete buttons, filtering, and derived state.
- [ ] **Backend:** Trace PATCH and DELETE by task ID.
- [ ] **MiniTrack:** Finish Day 5 complete, delete, and filter behavior.
- [ ] **Interview drill:** Explain `router.refresh()` and why filtering does not
      need `useEffect`.

**Output:** Day 5 works end to end and its focused checks pass.

### Friday, November 27 — Study Day 3

- [ ] **DSA 03:** Contains Duplicate — set.
- [ ] **Frontend:** Review forms, event types, loading state, and error messages.
- [ ] **Backend:** Day 6 partial-update contract and title validation.
- [ ] **MiniTrack:** Implement and test title updates through PATCH.
- [ ] **Interview drill:** Compare PUT and PATCH.

**Output:** API supports a validated title edit.

### Saturday, November 28 — Study Day 4

- [ ] **DSA 04:** Best Time to Buy and Sell Stock — one-pass invariant.
- [ ] **Frontend:** Day 7 edit, save, cancel, `useRef`, and `useEffect`.
- [ ] **Backend:** Review edit failure responses and unchanged database state.
- [ ] **MiniTrack:** Finish the browser editing experience.
- [ ] **Mini mock:** Spend 30 minutes explaining Days 1–7 without reading.

**Output:** Task editing works with keyboard and failure handling.

### Sunday, November 29 — Rest

Do not schedule unfinished work automatically. If something slipped, move only
the most important item to a later catch-up block.

## Phase 2 — Search, testing, and authentication

### Monday, November 30 — Study Day 5

- [ ] **DSA 05:** Valid Palindrome — two pointers.
- [ ] **Frontend:** Day 8 URL-backed search and status filters.
- [ ] **Backend:** Read `searchParams` safely.
- [ ] **MiniTrack:** Make filters survive reload and become shareable.
- [ ] **Interview drill:** Explain local state versus URL state.

### Tuesday, December 1 — Study Day 6

- [ ] **DSA 06:** Two Sum II — two pointers on sorted data.
- [ ] **Frontend:** Review search pending, empty, and error states.
- [ ] **Backend:** Parameterized `ILIKE`, wildcard behavior, and query building.
- [ ] **MiniTrack:** Finish and verify Day 8 filtering.
- [ ] **Interview drill:** Explain why SQL parameters prevent injection but do
      not automatically escape `%` and `_`.

### Wednesday, December 2 — Study Day 7

- [ ] **DSA 07:** Longest Substring Without Repeating Characters — sliding window.
- [ ] **Frontend:** Test user-visible behavior rather than implementation details.
- [ ] **Backend:** Day 9 unit-test validation and pure functions.
- [ ] **MiniTrack:** Add focused unit tests and deliberately break one.
- [ ] **Interview drill:** Explain Arrange, Act, Assert.

### Thursday, December 3 — Study Day 8

- [ ] **DSA 08:** Minimum Size Subarray Sum — variable sliding window.
- [ ] **Frontend:** Playwright user-flow testing.
- [ ] **Backend:** Isolated PostgreSQL integration testing.
- [ ] **MiniTrack:** Run the Day 9 test layers and explain what each catches.
- [ ] **Interview drill:** Compare unit, integration, and end-to-end tests.

### Friday, December 4 — Study Day 9

- [ ] **DSA 09:** Valid Parentheses — stack.
- [ ] **Frontend:** Day 10 `SessionProvider`, `useSession`, and Context.
- [ ] **Backend:** Auth.js session checks in server code.
- [ ] **MiniTrack:** Add sign-in and sign-out behavior.
- [ ] **Interview drill:** Explain why client Context cannot enforce security.

### Saturday, December 5 — Study Day 10

- [ ] **DSA 10:** Daily Temperatures — monotonic stack.
- [ ] **Frontend/backend:** Finish Day 10 and reject anonymous API requests.
- [ ] **System design:** Draw the sign-in and authenticated-request sequence.
- [ ] **Mini mock:** 30-minute React and API interview.
- [ ] **Weekly review:** Reattempt the two weakest DSA problems.

**Week output:** Search, automated checks, and authentication work. Explain the
difference between authentication and authorization.

### Sunday, December 6 — Rest

## Phase 3 — Authorization, accessibility, and quality

### Monday, December 7 — Study Day 11

- [ ] **DSA 11:** Binary Search — search invariant.
- [ ] **Frontend:** Trace how the signed-in user affects rendered task data.
- [ ] **Backend:** Day 11 user schema, task ownership, and migration planning.
- [ ] **MiniTrack:** Add the owner relationship safely.
- [ ] **Interview drill:** Explain why adding a required column can break existing
      rows.

### Tuesday, December 8 — Study Day 12

- [ ] **DSA 12:** Search in Rotated Sorted Array — binary-search decisions.
- [ ] **Frontend:** Confirm the UI never assumes hidden data is protected.
- [ ] **Backend:** Scope every task query and mutation by owner ID.
- [ ] **MiniTrack:** Prove one user cannot read or mutate another user’s task.
- [ ] **Interview drill:** Explain IDOR and owner-scoped SQL.

### Wednesday, December 9 — Study Day 13

- [ ] **DSA 13:** Reverse Linked List — pointer manipulation.
- [ ] **Frontend:** Add clear unauthorized and not-found behavior.
- [ ] **Backend:** Day 12 authorization matrix and negative tests.
- [ ] **MiniTrack:** Test anonymous, owner, and other-user requests.
- [ ] **Interview drill:** Explain why tests should verify both the response and
      unchanged database state.

### Thursday, December 10 — Study Day 14

- [ ] **DSA 14:** Linked List Cycle — fast and slow pointers.
- [ ] **Frontend:** Day 13 semantic HTML, labels, keyboard use, focus, and ARIA.
- [ ] **Backend:** Review validation errors so the UI can communicate them.
- [ ] **MiniTrack:** Complete a keyboard-only task flow.
- [ ] **Interview drill:** Explain when native HTML is better than ARIA.

### Friday, December 11 — Study Day 15

- [ ] **DSA 15:** Merge Two Sorted Lists — dummy node.
- [ ] **Frontend:** Responsive behavior and measured memoization.
- [ ] **Backend:** Review API latency as a possible UI-performance bottleneck.
- [ ] **MiniTrack:** Profile before and after any `useMemo`, `useCallback`, or
      `React.memo` experiment.
- [ ] **Interview drill:** Explain all three memoization tools simply.

### Saturday, December 12 — Study Day 16

- [ ] **DSA 16:** Maximum Depth of Binary Tree — recursive DFS.
- [ ] **Project checkpoint:** Run tests, type-check, build, and browser checks.
- [ ] **System design:** Draw the complete browser → Next.js → PostgreSQL flow.
- [ ] **Mock:** 45-minute full-stack interview using MiniTrack.
- [ ] **Gap repair:** Fix only the two highest-value gaps found in the mock.

**Week output:** Authenticated task data is owner-isolated, tested, accessible,
and explainable.

### Sunday, December 13 — Rest

## Phase 4 — Deployment and interview depth

### Monday, December 14 — Study Day 17

- [ ] **DSA 17:** Binary Tree Level Order Traversal — BFS queue.
- [ ] **Frontend/backend:** Day 14 production configuration and managed services.
- [ ] **MiniTrack:** Deploy or rehearse the exact deployment steps.
- [ ] **Interview drill:** Explain build-time versus runtime configuration.

### Tuesday, December 15 — Study Day 18

- [ ] **DSA 18:** Validate Binary Search Tree — DFS with bounds.
- [ ] **Frontend/backend:** Day 15 smoke tests, recovery, and release checks.
- [ ] **MiniTrack:** Verify the deployed or production-like application.
- [ ] **Interview drill:** Explain app rollback versus database recovery.

### Wednesday, December 16 — Study Day 19

- [ ] **DSA 19:** Kth Largest Element — heap.
- [ ] **Frontend review:** Event loop, rendering, hydration, state, effects, refs,
      Context, memoization, accessibility, and performance.
- [ ] **MiniTrack:** Find one example of each concept in the course or app.
- [ ] **Interview drill:** Complete a 20-question frontend speed round.

### Thursday, December 17 — Study Day 20

- [ ] **DSA 20:** Top K Frequent Elements — counting and heap.
- [ ] **Backend review:** HTTP, validation, SQL, indexes, transactions, pooling,
      authentication, authorization, caching, and failure handling.
- [ ] **MiniTrack:** Trace POST and PATCH requests line by line.
- [ ] **Interview drill:** Complete a 20-question backend speed round.

### Friday, December 18 — Study Day 21

- [ ] **DSA 21:** Number of Islands — grid DFS.
- [ ] **System design:** Define MiniTrack requirements, APIs, data model, traffic,
      bottlenecks, and failure modes.
- [ ] **Scaling:** Discuss indexes, pagination, connection budgets, cache
      invalidation, stateless instances, load balancing, logs, and metrics.
- [ ] **Rule:** Do not claim Kubernetes or microservices are necessary without a
      measured requirement.

**Output:** A 30–40 minute MiniTrack system-design explanation.

### Saturday, December 19 — Study Day 22

- [ ] **DSA 22:** Course Schedule — topological sorting.
- [ ] **Full mock:** 45 minutes DSA, 45 minutes frontend, 45 minutes backend, and
      45 minutes system design.
- [ ] **Review:** Spend the remaining time classifying mistakes by concept,
      communication, coding, or time management.
- [ ] **Gap repair:** Choose the top three gaps for the final phase.

### Sunday, December 20 — Rest

## Phase 5 — Final consolidation

### Monday, December 21 — Study Day 23

- [ ] **DSA 23:** Climbing Stairs — one-dimensional dynamic programming.
- [ ] **Timed implementation:** Rebuild one small MiniTrack vertical slice
      without opening the lesson for the first 60 minutes.
- [ ] **Gap repair:** Work on the highest-priority frontend and backend gaps.
- [ ] **Interview drill:** Explain the completed feature as if sharing a screen.

### Tuesday, December 22 — Study Day 24

- [ ] **DSA 24:** House Robber — dynamic-programming state compression.
- [ ] **Final mock:** One DSA problem plus a full-stack project and system-design
      discussion.
- [ ] **Project pitch:** Practice a 30-second summary, a 2-minute summary, and a
      5-minute technical walkthrough.
- [ ] **Review:** Reattempt the two DSA problems with the lowest confidence.

### Wednesday, December 23 — Study Day 25

- [ ] **DSA 25:** Coin Change — unbounded knapsack dynamic programming.
- [ ] **Light review:** Use the interview indexes and your own notes; do not start
      a large new topic.
- [ ] **Project verification:** Run the important checks and confirm the demo path.
- [ ] **Cheat sheets:** Reduce weak concepts to one page each for FE, BE, DSA,
      and system design.
- [ ] **Stop on time:** Prepare for travel and sleep normally.

**Final output:** A working, explainable project; 25 attempted DSA patterns; a
system-design story; and evidence from two full mocks.

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

## Primary study links

- [Combined 25-day guided lesson track](../lessons/interview-prep/README.md)
- [MiniTrack acceptance checklist](../CHECKLIST.md)
- [MiniTrack app roadmap](APP_BUILD_ROADMAP.md)
- [Full-stack interview concept index](INTERVIEW_INDEX.md)
- [Python DSA roadmap](../dsa-python/DSA_ROADMAP.md)
- [Python DSA progress tracker](../dsa-python/DSA_PROGRESS.md)
- [Rough notebook](../checkpoints/ROUGH/Notes.md)
