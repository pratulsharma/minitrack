import { setDone, deleteTask } from "../../../lib/tasks";
import { isRecord, normalizeTitle, isValidId } from "../../../lib/validation";

type RouteContext = {
  params: Promise<{ id: string }>;
};
export async function PATCH(
  request: Request,
  { params }: RouteContext,
): Promise<Response> {
  // Network JSON is untrusted, so keep it unknown until validation.
  let body: unknown;
  try {
    const { id } = await params;
    if (isValidId(id)) {
      return Response.json({ error: "id is invalid" }, { status: 400 });
    }
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: "Invalid JSON" }, { status: 400 });
    }
    return Response.json(await setDone(body.done, id), { status: 200 });
  } catch (error: unknown) {
    console.error("PATCH /api/tasks failed:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
export async function DELETE(
  request: Request,
  { params }: RouteContext,
): Promise<Response> {
  // Network JSON is untrusted, so keep it unknown until validation.
    const { id } = await params;
    if (isValidId(id)) {
      return Response.json({ error: "id is invalid" }, { status: 400 });
    }
  try {
    const deleted = await deleteTask(id);
    return deleted
      ? Response.json({ deleted: true })
      : Response.json({ error: 'Task not found' }, { status: 404 });
  } catch (error: unknown) {
    console.error(`DELETE /api/tasks/${id} failed:`, error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
