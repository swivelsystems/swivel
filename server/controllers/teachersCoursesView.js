import * as Courses from './courses.js';
import * as Students from './students.js';

export const sqlQuery = (courseId) => {
  return new Promise((resolve, reject) => {
    const coursePackage = {};
    Courses.findAllStudents(courseId)
      .then((students) => {
        coursePackage.students = [];
        const studentsWaterfall = students.map((student) => {
          return Students.findById(student.studentId)
                  .then((studentInfo) => {
                    coursePackage.students.push(studentInfo);
                  })
                  .catch((err) => {
                    console.error('Error loading student info for student: ', student.studentId, err);
                    reject(err);
                    // res.status(500).send('Error loading student info for student: ', student.studentId);
                  });
        });
        return Promise.all(studentsWaterfall);
      })
      .then(() => {
        resolve(coursePackage);
      })
      .catch((err) => {
        console.error('failed at retrieving students list for course ID: ', courseId);
        reject(err);
        // res.status(500).send('failed at retrieving students list for course ID: ', courseId);
      });
  });
};
