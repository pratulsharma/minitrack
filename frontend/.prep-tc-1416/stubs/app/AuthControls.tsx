import { auth } from '@/auth';
export default async function AuthControls() { const s = await auth(); return <span>{s?.user.name}</span>; }
