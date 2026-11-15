---
name: progressive-app-course
description: "Build a new application as a progressive, instructor-led course. Use when starting, planning, scaffolding, or extending an app with day-by-day lessons, commented code, diagrams, debugging exercises, interview Q&A, an isolated completed reference, testing, authentication, deployment, Docker, database scaling, caching, CI/CD, load balancing, observability, or Kubernetes."
argument-hint: "[app idea, requirements, or repository]"
user-invocable: true
disable-model-invocation: false
---

# Progressive App Course

Create applications using the same learning-first workflow as MiniTrack while
adapting the product and technology choices to the new app.

## Non-negotiable outcomes

Every course produced with this skill must:

1. start from fundamentals and add one understandable vertical slice at a time;
2. keep the learner workspace free of unintroduced future code;
3. isolate completed comparison code under `reference/`;
4. explain what, why, how, trade-offs, failures, and interview implications;
5. use real persistence, validation, tests, authentication, authorization,
   accessibility, deployment, and operational verification where relevant;
6. measure before adding infrastructure such as indexes, caches, replicas, load
   balancers, containers, or Kubernetes;
7. preserve a separate optional infrastructure track after the core app works.

## Procedure

### 1. Interview the learner

Use the available question tool before choosing architecture. Collect:

- app idea, target user, and one core user journey;
- learner experience and interview goals;
- preferred or prohibited technologies;
- whether the stack is fixed or should be recommended;
- local environment, database availability, and deployment target;
- desired course length and session duration;
- authentication, collaboration, accessibility, and infrastructure goals;
- whether a repository already exists.

Do not ask questions already answered by repository evidence or the request.
If the learner delegates a choice, recommend the smallest stack that teaches
the required concepts.

### 2. Inspect before designing

For an existing repository:

- inspect manifests, source layout, tests, documentation, and git status;
- preserve uncommitted work and established conventions;
- identify filename or learning-track collisions before creating lessons;
- distinguish the active learner workspace from completed reference code.

For a new repository, use official scaffolding tools rather than hand-building
framework boilerplate.

### 3. Choose and verify the stack

Choose equivalent technologies based on the product and learning goals. Explain
why each layer exists and what simpler alternative was rejected.

Verify current official documentation before depending on frequently changing
framework, authentication, deployment, or infrastructure conventions. Never
copy an old course pattern blindly into a newer toolchain.

Read [workflow phases](./references/workflow-phases.md) for the default sequence
and adaptation rules.

### 4. Create the course documents

Create or update:

```text
README.md
CHECKLIST.md
docs/
  APP_OVERVIEW.md
  APP_BUILD_ROADMAP.md
  ARCHITECTURE.md
  INTERVIEW_INDEX.md
  MY_NOTES.md
lessons/
  day-01.md
  day-02.md
  ...
reference/
  <completed-app>/
```

Use canonical zero-padded lesson names. Give parallel tracks distinctive names
such as `dsa-day-01.md` so they cannot collide.

Use [document templates](./references/document-templates.md) for required
sections and lesson structure.

### 5. Keep implementation progressive

- The active app starts from the official minimal scaffold.
- Add only files introduced by the current lesson.
- Never make the learner begin with the completed application.
- Preserve a runnable completed comparison under `reference/`, clearly labeled
  with the milestone it represents.
- Add comments for learning where a boundary, trade-off, or non-obvious rule
  deserves explanation; do not comment obvious syntax.
- Keep the database or server as the source of truth for persistent state.
- Keep temporary interaction state local and derive values instead of
  duplicating state.

### 6. Write every lesson as a complete teaching unit

Each lesson must include:

- time, starting point, goal, previous/roadmap/next links;
- learning objectives;
- numbered implementation sections with exact filenames;
- complete, commented code for the new behavior;
- commands and expected observations;
- at least two Mermaid diagrams: flow and sequence/timing;
- deliberate debugging exercises;
- at least four numbered interview questions;
- an **Interview-ready answer**, example, and senior follow-up for each;
- complexity or operational-cost analysis;
- an exit checklist and suggested commit.

Do not use unexplained placeholders for the core lesson. Clearly label optional
extensions.

### 7. Build in verified increments

For each milestone:

1. explain the boundary and data flow;
2. implement the smallest complete behavior;
3. validate at the correct level;
4. break it deliberately and diagnose the root cause;
5. connect the behavior to interview questions;
6. update roadmap, checklist, overview, architecture, and indexes.

Run the smallest relevant lint, test, type-check, build, migration, browser, or
deployment verification. Documentation-only work still requires link,
structure, naming, and whitespace checks.

### 8. Separate core product from optional infrastructure

Finish and deploy the correct single-service application first. Then offer an
optional sequence for:

- Docker and Compose;
- CI and immutable build artifacts;
- measured query plans, indexes, pagination, pools, replicas, and recovery;
- measured caching with identity-safe keys and invalidation;
- load testing, logs, metrics, and traces;
- stateless replicas and load balancing;
- Kubernetes, migration Jobs, probes, requests, and limits;
- continuous delivery, rollback, and resilience drills.

Do not recommend sharding, microservices, service meshes, or multi-region
systems without a measured requirement.

### 9. Validate the complete course

Use [quality gates](./references/quality-gates.md). A task is incomplete until:

- the requested code or documents persist in the repository;
- all local links resolve;
- lesson navigation is sequential;
- no future code leaks into the learner starting point;
- code samples match the selected versions and architecture;
- tests/builds or documentation checks pass;
- secrets, personal data, and production credentials are absent.

### 10. Report clearly

Summarize:

- created or changed course files;
- selected architecture and important trade-offs;
- validation performed and results;
- which implementation stage the active workspace represents;
- the next lesson to complete;
- any optional infrastructure work that remains intentionally deferred.

