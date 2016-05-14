import * as Teachers from '../controllers/teachers.js';
import * as Courses from '../controllers/courses.js';
import * as Announcements from '../controllers/announcements.js';
import * as Assignments from '../controllers/assignments.js';
import * as Submissions from '../controllers/submissions.js';
import * as Students from '../controllers/students.js';

export const retrieveHome = (req, res) => {
  const instructorId = req.params.id;

  let homePackage = {};

  Courses.findAllByTeacher(instructorId)
    .then((courses) => {

      homePackage.courses = courses;

      //Async Waterfall
      const coursesWaterfall = homePackage.courses.map((course) => {
        return Announcements.findAllByCourse(course.id)
          .then((announcements) => {
            course.announcements = announcements;
            return Assignments.findAllByCourse(course.id);
          })
          .catch((err) => {
            console.err('failed at finding announcements', err);
            res.status(500).send('failed at finding announcements for', course.name);
          })
          .then((assignments) => {
            course.assignments = assignments;
          })
          .catch((err) => {
            console.err('failed at finding assignments', err);
            res.status(500).send('failed at finding assignments for', course.name);
          });
      });
      return Promise.all(coursesWaterfall);
    })
    .catch((err) => {
      console.err("can't find teacher", err);
      res.status(500).send('failed at finding teacher: ', instructorId);
    })
    .then((waterfallSuccess) => {
      res.send(homePackage);
    })
    .catch((err) => {
      console.err("can't compile courses", err);
      res.status(500).send('failed at compiling all data for teacher', instructorId);
    });
}

export const retrieveCourse = (req, res) => {
  const courseId = req.params.id;

  let coursePackage = {};
  Courses.findAllStudents(courseId)
    .then((students) => {
      coursePackage.students = []
      const studentsWaterfall = students.map((student) => {
        return Students.findById(student.studentId)
                  .then((studentInfo) => {
                    coursePackage.students.push(studentInfo)
                  })
                  .catch((err) => {
                    console.err("Error loading student info for student: " , student.studentId, err)
                    res.status(500).send("Error loading student info for student: " , student.studentId)
                  });
      });
      return Promise.all(studentsWaterfall);
    })
    .catch((err) => {
      console.err("failed at retrieving students list for course ID: ", courseId);
      res.status(500).send('failed at retrieving students list for course ID: ' + courseId);
    })
    .then((waterfallSuccess) => {
      res.send(coursePackage);
    })
    .catch((err) => {
      console.err("Can't compile course info", err);
      res.status(500).send("can't compile course info for:" + courseId);
    });
};
