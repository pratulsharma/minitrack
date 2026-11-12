# Python DSA Interview Track — 45 Days

A **35-minute/day** companion to the MiniTrack full-stack course, designed for senior full-stack and architect interviews. Practice patterns, not memorized answers.

## How to learn

- **5 min:** Understand problem / brute-force baseline.
- **15 min:** Code in `practice/day-NN.py` from scratch.
- **5 min:** Trace a counterexample and test edge cases.
- **10 min:** Compare the commented solution and explain complexity + interview twist.
- **Days 31–45:** Timed reattempts and mixed mock interviews.

Every daily lesson is **self-contained** and includes example code (inside a collapsed reference section), flow diagram, sequence/timing diagram, and an interview follow-up. All lessons render on GitHub.

## Quick start (Mac, Python 3.10+)

```bash
python3 --version
python3 -m unittest discover -s tests -v
python3 scripts/check_practice.py 1  # checks your Day 1 exercise against examples
```

No external Python dependencies; standard library only. The `tests/` suite runs the **completed reference implementations**, and `scripts/check_practice.py` checks **your practice files**, so you can tell the two apart. `NotImplementedError` means you haven't solved an exercise yet.

## Files

```text
minitrack-dsa-python/
├── README.md
├── ROADMAP.md                 # daily topics and patterns
├── PROGRESS.md                # log attempts, confidence, timing
├── lessons/day-01.md ... day-45.md
├── practice/day-01.py ... day-30.py
├── solutions/day-01.py ... day-30.py
├── scripts/check_practice.py
├── tests/test_solutions.py
└── docs/INTERVIEW_CHEATSHEET.md
```

## Boundaries

- Days 1–30 contain 30 core implementations; Days 31–45 are review and mocks.
- This is a **foundation track**, not a promise to master all LeetCode mediums in 45 days. Add unfamiliar variants after each pattern.
- Every solution declares its assumptions. In interviews, ask about constraints before choosing an algorithm.
- Full-stack work stays in the separate MiniTrack repository; this DSA repo is a focused companion.

**Start:** [Day 01 — Two Sum](lessons/day-01.md) · [Roadmap](ROADMAP.md) · [Progress](PROGRESS.md)
