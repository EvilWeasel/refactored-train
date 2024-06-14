import { column, defineDb, defineTable } from 'astro:db';

const Courses = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text()
  }
})

const Student = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    first_name: column.text(),
    last_name: column.text(),
    course: column.number({ references: () => Courses.columns.id })
  }
});

const Note = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    body: column.text(),
    studentId: column.number({ references: () => Student.columns.id })
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: { Student, Note, Courses }
});

// function buxtehude(paramOma, paramOpa) {
//   return 42069;
// }
// const buxtehude = (paramOma, paramOpa) => 42069;