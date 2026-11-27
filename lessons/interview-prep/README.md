# 25-day full-stack interview preparation lessons

This is the combined daily lesson track for the
[full-stack interview preparation plan](../../docs/FULL_STACK_INTERVIEW_PREP_PLAN.md).
It assumes MiniTrack App Days 1–4 are complete and begins with the canonical
[App Day 5](../day-05.md) learner milestone.

These preparation lessons combine notebook recall, frontend, backend,
MiniTrack integration, debugging, interview Q&A, complexity, and verification
into seven-hour guided days. Every prep day is one self-contained reading
file: its DSA problem, brute-force and optimized code, DSA interview Q&A, and
the day's app code are all inside it. Write and run the exercises in the
separate practice and application files. The original app and DSA lessons
remain linked from each day for comparison.

**Architecture transition:** Prep Day 01 now fetches tasks in a Client
Component through the API, and Prep Days 02–08 continue that approach.
Days 09–25 have not yet been fully adapted from the earlier server-rendered
approach; their instructions may need further changes before continuing from
the new client page.

## Daily track

| Prep day | Date | Guided lesson | DSA pattern |
|---:|---|---|---|
| 01 | Wednesday, November 25, 2026 | [Finish add-task from React to PostgreSQL](prep-day-01.md) | [hash map](../../dsa-python/lessons/dsa-day-01.md) |
| 02 | Thursday, November 26, 2026 | [Complete, delete, and filter tasks](prep-day-02.md) | [frequency counting](../../dsa-python/lessons/dsa-day-02.md) |
| 03 | Friday, November 27, 2026 | [Add safe title editing to the API](prep-day-03.md) | [set membership](../../dsa-python/lessons/dsa-day-03.md) |
| 04 | Saturday, November 28, 2026 | [Build accessible browser editing](prep-day-04.md) | [one-pass invariant](../../dsa-python/lessons/dsa-day-04.md) |
| 05 | Monday, November 30, 2026 | [Make search and filters shareable](prep-day-05.md) | [two pointers](../../dsa-python/lessons/dsa-day-05.md) |
| 06 | Tuesday, December 1, 2026 | [Implement safe PostgreSQL search](prep-day-06.md) | [two pointers on sorted data](../../dsa-python/lessons/dsa-day-06.md) |
| 07 | Wednesday, December 2, 2026 | [Add focused unit tests](prep-day-07.md) | [sliding window](../../dsa-python/lessons/dsa-day-07.md) |
| 08 | Thursday, December 3, 2026 | [Test database and browser behavior](prep-day-08.md) | [variable sliding window](../../dsa-python/lessons/dsa-day-08.md) |
| 09 | Friday, December 4, 2026 | [Add authentication and client session Context](prep-day-09.md) | [stack](../../dsa-python/lessons/dsa-day-09.md) |
| 10 | Saturday, December 5, 2026 | [Finish authentication and run the first mock](prep-day-10.md) | [monotonic stack](../../dsa-python/lessons/dsa-day-10.md) |
| 11 | Monday, December 7, 2026 | [Migrate from shared tasks to owned tasks](prep-day-11.md) | [binary search](../../dsa-python/lessons/dsa-day-11.md) |
| 12 | Tuesday, December 8, 2026 | [Enforce owner authorization in SQL](prep-day-12.md) | [binary search in rotated data](../../dsa-python/lessons/dsa-day-12.md) |
| 13 | Wednesday, December 9, 2026 | [Prove authorization with negative tests](prep-day-13.md) | [linked-list pointer reversal](../../dsa-python/lessons/dsa-day-13.md) |
| 14 | Thursday, December 10, 2026 | [Make the complete flow accessible](prep-day-14.md) | [fast and slow pointers](../../dsa-python/lessons/dsa-day-14.md) |
| 15 | Friday, December 11, 2026 | [Measure responsive rendering and memoization](prep-day-15.md) | [dummy-node list merge](../../dsa-python/lessons/dsa-day-15.md) |
| 16 | Saturday, December 12, 2026 | [Run the quality gate and a full-stack mock](prep-day-16.md) | [recursive tree DFS](../../dsa-python/lessons/dsa-day-16.md) |
| 17 | Monday, December 14, 2026 | [Deploy with production-safe configuration](prep-day-17.md) | [tree BFS](../../dsa-python/lessons/dsa-day-17.md) |
| 18 | Tuesday, December 15, 2026 | [Verify release and recovery](prep-day-18.md) | [DFS with bounds](../../dsa-python/lessons/dsa-day-18.md) |
| 19 | Wednesday, December 16, 2026 | [Run a frontend interview deep review](prep-day-19.md) | [heap selection](../../dsa-python/lessons/dsa-day-19.md) |
| 20 | Thursday, December 17, 2026 | [Run a backend and PostgreSQL deep review](prep-day-20.md) | [counting plus heap](../../dsa-python/lessons/dsa-day-20.md) |
| 21 | Friday, December 18, 2026 | [Design MiniTrack for realistic scale](prep-day-21.md) | [grid DFS](../../dsa-python/lessons/dsa-day-21.md) |
| 22 | Saturday, December 19, 2026 | [Complete a four-part mock interview](prep-day-22.md) | [topological sorting](../../dsa-python/lessons/dsa-day-22.md) |
| 23 | Monday, December 21, 2026 | [Rebuild one vertical slice from memory](prep-day-23.md) | [one-dimensional dynamic programming](../../dsa-python/lessons/dsa-day-23.md) |
| 24 | Tuesday, December 22, 2026 | [Run the final mock and project pitch](prep-day-24.md) | [dynamic-programming state compression](../../dsa-python/lessons/dsa-day-24.md) |
| 25 | Wednesday, December 23, 2026 | [Consolidate, verify, and stop on time](prep-day-25.md) | [unbounded knapsack dynamic programming](../../dsa-python/lessons/dsa-day-25.md) |

## Daily rules

1. Write recall notes before opening the source lesson.
2. Attempt the DSA practice file before reading its reference.
3. Type app code into the active `frontend/` learner workspace.
4. Use `reference/frontend-complete/` only after your own attempt.
5. Test success and failure behavior.
6. Explain the four interview answers aloud.
7. Keep Sundays free and use the documented slow-day fallback when needed.

## Start

[Begin Prep Day 01](prep-day-01.md)
