type Session = { user: { id: string; name?: string | null; email?: string | null } };
export async function auth(): Promise<Session | null> { return null; }
