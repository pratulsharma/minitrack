# Completed frontend reference

This directory contains the finished Week 1 application for comparison after
you attempt the lessons.

Do not copy files from here into the active `frontend/` workspace before
writing your own version. The active workspace begins with the output from
`create-next-app` and grows in this order:

1. Day 3: PostgreSQL driver, task data layer, validation, and GET/POST routes.
2. Day 4: Tailwind-styled Server Component with a static shell, Suspense, and request-time database tasks.
3. Day 5: Client Component, responsive Tailwind UI, state, and mutations.

To run this reference independently:

```bash
npm install
cp .env.local.example .env.local
# Set DATABASE_URL in .env.local.
npm run dev
```

The active learner app and this reference are separate npm projects. Run only
one of them at a time because both use port 3000.
