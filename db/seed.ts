import { Student, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Student).values([
    {
      first_name: "Max",
      last_name: "Müller",
    },
    {
      first_name: "Nadine",
      last_name: "Müller",
    },
    {
      first_name: "Susanne",
      last_name: "Stark",
    },
  ])
}
