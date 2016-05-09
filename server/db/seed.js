import Course from '../models/Course.js';
import Teacher from '../models/Teacher.js';

Teacher.findOrCreate({
  where: {
    name: 'Janice Redwood',
    department: 'Math',
    email: 'janice.redwood@everestprep.edu',
    password: 'recyclingnut00',
  },
});
// .spread((teacher) => {
//   Course.findOrCreate({
//     where: {
//       name: 'Algebra',
//       description: 'A course to learn about the basics of algebra.',
//       department: 'Math',
//     },
//   });
  // .spread((course) => {
  //   course.addTeacher(teacher);
  // });
// });
