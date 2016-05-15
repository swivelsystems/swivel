import * as Students from '../controllers/students.js';
import * as Courses from '../controllers/courses.js';
import * as Announcements from '../controllers/announcements';
import * as Assignments from '../controllers/assignments.js';
import * as Submissions from '../controllers/submissions.js';


export const retrieve = (req, res) => {
  const studentId = req.params.id;

  let studentPackage = {};

  Students.findById(studentId)
    .then((studentInfo) => {
      studentPackage.student = studentInfo;
      return Courses.findAllByStudent(studentId);
    })
    .catch((err) => {
      console.err('failed to retrieve info for student: ', studentId);
      res.status(500).send('failed to retrieve info for student: ' + studentId);
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
            console.err('failed at finding announcements', err);
            res.status(500).send('failed at finding announcements for', course.name);
          })
          .then((assignments) => {
            course.assignments = assignments;
            return Courses.findNameByCourseId(course.courseId);
          })
          .catch((err) => {
            console.err('failed at finding assignments', err);
            res.status(500).send('failed at finding assignments for', course.name);
          })
          .then((courseInfo) => {
            course.name = courseInfo[0].name;
            course.description = courseInfo[0].description;
          });
      });
      return Promise.all(coursesWaterfall);
    })
    .catch((err) => {
      console.err("can't find courses", err);
      res.status(500).send('failed at finding courses for student: ', studentId);
    })
    .then((waterfallSuccess) => {
      res.send(studentPackage);
    })
    .catch((err) => {
      console.err("can't compile courses", err);
      res.status(500).send('failed at compiling all data for student: ' + studentId);
    });
};
