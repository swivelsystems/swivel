import * as Teachers from '../controllers/teachers.js';
import * as Courses from '../controllers/courses.js';
import * as Announcements from '../controllers/announcements.js';
import * as Assignments from '../controllers/assignments.js';
import * as Submissions from '../controllers/submissions.js';
import * as Students from '../controllers/students.js';

export const retrieveHome = (req, res) => {
  const instructorId = req.params.id;

  let homePackage = {}

  Courses.findAllByTeacher(instructorId)
    .then((courses) => {

      homePackage.courses = courses;

      const arrOfCoursePromises = homePackage.courses.map((course) => {
        return Announcements.findAllByCourse(course.id)
          .then((announcements) => {
            course.announcements = announcements;
          })
          .catch((err) => {
            console.err('failed at finding announcements', err)
            res.status(500).send('failed at finding announcements for', course.name);
          })
          .then(() =>{
            return Assignments.findAllByCourse(course.id)
          })
          .catch((err) => {
            console.err('failed at finding assignments', err)
            res.status(500).send('failed at finding assignments for', course.name);
          })
          .then((assignments) => {
            course.assignments = assignments;
          })
      })
      return Promise.all(arrOfCoursePromises)
    })
    .catch((err) => {
      console.err("can't find teacher", err)
      res.status(500).send('failed at finding teacher: ', instructorId);
    })
    .then((arrOfCoursePromises) => {
      res.send(homePackage);
    })
    .catch((err) => {
      console.err("can't compile courses", err)
      res.status(500).send('failed at compiling all data for teacher', instructorId);
    });
}

export const retrieveCourse = (req, res) => {
  const courseId = req.params.id;

  let coursePackage = {}

}
