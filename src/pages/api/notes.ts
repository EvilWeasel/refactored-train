import type { APIContext, APIRoute } from "astro";
import { db, Note } from "astro:db";

export const POST: APIRoute = async ({ request, redirect }: APIContext) => {
  const form = await request.formData();
  const body = form.get("body")?.toString();
  const student_id = Number(form.get("student_id")?.toString());
  if (!body || !student_id) return new Response("missing body or student_id", { status: 400 });
  const newNotes = await db.insert(Note).values([{
    studentId: student_id,
    body: body
  }]);
  if (newNotes) return new Response(
    createNoteElem(body), { status: 201 })
  else return redirect("/");
}

export const createNoteElem = (body: string): string => {
  return `
  <li>${body}</li>
  `
}