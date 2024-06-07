import { Courses, Student, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Courses).values([
    { title: "FI23-1" },
    { title: "FI23-2" },
    { title: "FI23-3" },
    { title: "FI23-4" },
    { title: "FI24-1" },
    { title: "FI24-2" },
    { title: "FI24-3" },
    { title: "FI24-4" },
  ]);


  await db.insert(Student).values([
    {
      first_name: "Max",
      last_name: "Müller",
      course: 1
    },
    {
      first_name: "Nadine",
      last_name: "Müller",
      course: 1

    },
    {
      first_name: "Susanne",
      last_name: "Stark",
      course: 1
    },
    {
      first_name: "Max",
      last_name: "Müller",
      course: 2
    },
    {
      first_name: "Nadine",
      last_name: "Müller",
      course: 2

    },
    {
      first_name: "Susanne",
      last_name: "Stark",
      course: 2
    },
  ])
}
/**
 * 
 * Insert Into Student (first_name, last_name) Values ("Max", "Müller")
 */