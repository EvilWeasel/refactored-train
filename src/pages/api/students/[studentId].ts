import type { APIContext, APIRoute } from "astro";
import { db, eq, Note, Student } from "astro:db";

export const DELETE: APIRoute = async ({ request, redirect, params }: APIContext) => {
  console.log(params)
  const studentId = Number(params.studentId);
  if (isNaN(studentId)) redirect("/");
  const student = await db.select().from(Student).where(eq(Student.id, studentId));
  if (!student) redirect("/");
  const removedNotes = await db.delete(Note).where(eq(Note.studentId, studentId));
  const result = await db.delete(Student).where(eq(Student.id, studentId));
  return new Response(null, { status: 200 })
}