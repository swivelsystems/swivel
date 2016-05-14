import * as Courses from './courses.js';

export const sqlQuery = (courseId) => {
  return new Promise((resolve, reject) => {
    let coursePackage = {};
    Courses.findAllStudents(courseId)
      .then((students) => {
        coursePackage.students = [];
        const studentsWaterfall = students.map((student) => {
          return Students.findById(student.studentId)
                  .then((studentInfo) => (
                    coursePackage.students.push(studentInfo)
                  ))
                  .catch((err) => {
                    console.err('Error loading student info for student: ', student.studentId, err);
                    res.status(500).send('Error loading student info for student: ', student.studentId);
                  });
        });
        return Promise.all(studentsWaterfall);
      })
      .catch((err) => {
        console.err('failed at retrieving students list for course ID: ', courseId);
        res.status(500).send('failed at retrieving students list for course ID: ', courseId);
      })
      .then((waterfallSuccess) => (
        resolve(coursePackage)
      ))
      .catch((err) => {
        console.err('Can\'t compile course info', err);
        res.status(500).send('can\'t compile course info for:' + courseId);
      });
  });
};