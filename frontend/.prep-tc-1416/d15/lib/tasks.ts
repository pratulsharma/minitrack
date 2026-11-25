import type { Task } from '../app/types';
import type { TaskFilters } from './validation';
export async function searchTasks(ownerId: string, filters: TaskFilters): Promise<Task[]> { void ownerId; void filters; return []; }
export async function createTask(ownerId: string, title: string): Promise<Task> { return { id: ownerId, title, done: false, created_at: '' }; }
