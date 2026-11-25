export type TaskStatus = 'all' | 'open' | 'done';
export type TaskFilters = { query: string; status: TaskStatus };
export function normalizeTaskFilters(q: unknown, s: unknown): TaskFilters {
  return { query: typeof q === 'string' ? q : '', status: s === 'open' || s === 'done' ? s : 'all' };
}
export function normalizeTitle(value: unknown): string | null { return typeof value === 'string' ? value.trim() || null : null; }
export function isRecord(value: unknown): value is Record<string, unknown> { return typeof value === 'object' && value !== null && !Array.isArray(value); }
