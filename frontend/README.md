This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## MiniTrack course starting point

This directory is the learner workspace. It intentionally begins with only the
Next.js scaffold and a small Tailwind verification card. Database modules,
Route Handlers, and interactive components are created gradually in
[`../lessons/day-03.md`](../lessons/day-03.md) through
[`../lessons/day-05.md`](../lessons/day-05.md). Continue with
[`../lessons/day-06.md`](../lessons/day-06.md) through
[`../lessons/day-15.md`](../lessons/day-15.md) for editing, URL-backed search,
isolated tests, GitHub sign-in, owner authorization, accessibility, deployment,
and release verification.

Tailwind v4 is initialized by `postcss.config.mjs` and
`app/globals.css`. Comments in the starter code explain the connection between
Next.js fonts, Tailwind utilities, and the shared root layout.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
