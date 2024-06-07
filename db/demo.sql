select * from students
inner join courses
on students.course = courses.id
where id = 5;