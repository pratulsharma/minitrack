import { deleteTask, renameTask, setDone } from '../../../../lib/tasks';
import { isRecord, isValidId, normalizeTitle } from '../../../../lib/validation';

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: RouteContext): Promise<Response> {
  const { id } = await params;
  if (!isValidId(id)) {
    return Response.json({ error: 'Invalid task ID' }, { status: 400 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (!isRecord(body)) {
    return Response.json({ error: 'Request body must be an object' }, { status: 400 });
  }

  const hasDone = Object.hasOwn(body, 'done');
  const hasTitle = Object.hasOwn(body, 'title');
  if (hasDone === hasTitle) {
    return Response.json({ error: 'Provide either done or title' }, { status: 400 });
  }

  let updateTask: () => ReturnType<typeof renameTask>;
  if (hasTitle) {
    const title = normalizeTitle(body.title);
    if (!title) {
      return Response.json({ error: 'title must be 1–200 characters' }, { status: 400 });
    }
    updateTask = () => renameTask(id, title);
  } else if (typeof body.done === 'boolean') {
    const done = body.done;
    updateTask = () => setDone(id, done);
  } else {
    return Response.json({ error: 'done must be boolean' }, { status: 400 });
  }

  try {
    const task = await updateTask();
    return task
      ? Response.json(task)
      : Response.json({ error: 'Task not found' }, { status: 404 });
  } catch (error: unknown) {
    console.error(`PATCH /api/tasks/${id} failed:`, error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: RouteContext): Promise<Response> {
  const { id } = await params;
  if (!isValidId(id)) {
    return Response.json({ error: 'Invalid task ID' }, { status: 400 });
  }

  try {
    const deleted = await deleteTask(id);
    return deleted
      ? Response.json({ deleted: true })
      : Response.json({ error: 'Task not found' }, { status: 404 });
  } catch (error: unknown) {
    console.error(`DELETE /api/tasks/${id} failed:`, error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
