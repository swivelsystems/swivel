import * as Students from './students.js';
import * as Announcements from './announcements.js';
import * as Courses from './courses.js';
import * as Assignments from './assignments.js';
import * as Teachers from './teachers.js';

export const sqlQuery = (studentId) => {
  return new Promise((resolve, reject) => {
    const studentPackage = {};

    Students.findById(studentId)
    .then((studentInfo) => {
      studentPackage.student = studentInfo;
      return Courses.findAllByStudent(studentId);
    })
    .catch((err) => {
      console.error('failed to retrieve info for student: ', studentId);
      reject(err);
      // res.status(500).send('failed to retrieve info for student: ', studentId);
    })
    .then((courses) => {
      studentPackage.courses = courses;
      const coursesWaterfall = studentPackage.courses.map((course) => {
        return Announcements.findAllByCourse(course.courseId)
          .then((announcements) => {
            course.announcements = announcements;
            return Assignments.findAllByCourse(course.courseId);
          })
          .catch((err) => {
            console.error('failed at finding announcements', err);
            reject(err);
            // res.status(500).send('failed at finding announcements for:', course.name);
          })
          .then((assignments) => {
            course.assignments = assignments;
            return Courses.findNameByCourseId(course.courseId);
          })
          .catch((err) => {
            console.error('failed at finding assignments', err);
            reject(err);
            // res.status(500).send('failed at finding assignments for:', course.name);
          })
          .then((courseInfo) => {
            course.name = courseInfo[0].name;
            course.description = courseInfo[0].description;
            return Teachers.findById(courseInfo[0].teacherId);
          })
          .catch((err) => {
            console.error('failed at finding the teacher info', err);
          })
          .then((teacherInfo) => {
            course.teacherId = teacherInfo.id;
            course.teacherName = teacherInfo.name;
          })
          .catch((err) => {
            console.error('failed at finding course name and information', err);
            reject(err);
            // res.status(500).send('failed at finding course name and infomation for:', course.name);
          })
      });
      return Promise.all(coursesWaterfall);
    })
    .catch((err) => {
      console.err("can't find courses", err);
      reject(err);
      // res.status(500).send('failed at finding courses for student: ', studentId);
    })
    .then(() => {
      resolve(studentPackage);
    })
    .catch((err) => {
      console.err("can't compile courses", err);
      reject(err);
      // res.status(500).send('failed at compiling all data for student: ' + studentId);
    });
  });
};
