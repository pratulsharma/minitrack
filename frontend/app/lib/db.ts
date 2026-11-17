// this function creates a pool of connection with the postgress
// we need db url to create the pool
import 'server-only'
import { Pool }  from 'pg'

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