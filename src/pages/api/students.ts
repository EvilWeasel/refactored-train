import type { APIContext, APIRoute } from "astro";
import { db, Student } from "astro:db";

export const POST: APIRoute = async ({ request, redirect }: APIContext) => {
  const form = await request.formData();
  const first_name = form.get("first_name")?.toString();
  const last_name = form.get("last_name")?.toString();
  const courseId = Number(form.get("courseId")?.toString());
  if (!first_name || !last_name || !courseId) return redirect("/");
  const result = await db.insert(Student).values([{
    first_name: first_name,
    last_name: last_name,
    course: courseId
  }]);
  if (!result) return redirect("/");

  return redirect("/");
}