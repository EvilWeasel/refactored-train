import type { APIContext, APIRoute } from "astro";
import { db, eq, Note } from "astro:db";

export const DELETE: APIRoute = async ({ request, redirect, params }: APIContext) => {
  console.log(params)
  const noteId = Number(params.noteId);
  if (isNaN(noteId)) redirect("/");
  const result = await db.delete(Note)
    .where(
      eq(Note.id, noteId)
    );
  if (!result) redirect("/");
  return new Response(null, { status: 200 })
}