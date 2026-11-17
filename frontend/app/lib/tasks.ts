// In this we will write 2 functions 
// listTasks and writeTask 
import type {Task} from "./types"
import  {getPool} from "./db"

type TaskRow = {
    id: string;
    title: string;
    done: boolean;
    created_at: Date;
}
export async function listTasks():Promise<Task[]>  {
    const results = await getPool().query<TaskRow>(
        'SELECT id, title, done, created_at FROM tasks ORDER BY id'
    )
        return results.rows.map((row:TaskRow)=> ({
            ...row,
            created_at: row.created_at.toISOString()
        }))
}

export async function createTask(title: string): Promise<Task> {
  const result = await getPool().query<TaskRow>(
    'INSERT INTO tasks (title) VALUES ($1) RETURNING id, title, done, created_at',
    // Bound values remain separate from SQL syntax.
    [title]
  );
  const row = result.rows[0];
  if (!row) throw new Error('Inserted task was not returned by PostgreSQL');
  return {...row, created_at: row.created_at.toISOString()}
}