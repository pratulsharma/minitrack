import 'server-only';
import { Pool } from 'pg';

const globalForPg = globalThis as typeof globalThis & { taskPool?: Pool };

export function getPool(): Pool {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL is missing. Copy frontend/.env.local.example to .env.local and edit it.');
  }

  globalForPg.taskPool ??= new Pool({ connectionString, max: 5 });
  return globalForPg.taskPool;
}
