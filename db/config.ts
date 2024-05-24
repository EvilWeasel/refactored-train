import { column, defineDb, defineTable } from 'astro:db';

const Student = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    first_name: column.text(),
    last_name: column.text(),
  }
});

const Note = defineTable({
  columns: {
    body: column.text(),
    studentId: column.number({references: () => Student.columns.id})
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: {Student, Note}
});

// function buxtehude(paramOma, paramOpa) {
//   return 42069;
// }
// const buxtehude = (paramOma, paramOpa) => 42069;