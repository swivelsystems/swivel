import * as Courses from './courses.js';
import * as Announcements from './announcements.js';
import * as Assignments from './assignments.js';

export const sqlQuery = (teacherId) => {
  return new Promise((resolve, reject) => {
    const homePackage = {};
    Courses.findAllByTeacher(teacherId)
      .then((courses) => {
        homePackage.courses = courses;

        // Async Waterfall
        const coursesWaterfall = homePackage.courses.map((course) => {
          return Announcements.findAllByCourse(course.id)
                  .then((announcements) => {
                    course.announcements = announcements;
                    return Assignments.findAllByCourse(course.id);
                  })
                  .catch((err) => {
                    console.error('failed at finding announcements', err);
                    reject(err);
                    // res.status(500).send('failed at finding announcements for', course.name);
                  })
                  .then((assignments) => (
                    course.assignments = assignments
                  ))
                  .catch((err) => {
                    console.error('failed at finding assignments', err);
                    reject(err);
                    // res.status(500).send('failed at finding assignments for', course.name);
                  });
        });
        return Promise.all(coursesWaterfall);
      })
      .catch((err) => {
        console.error("can't find teacher", err);
        reject(err);
        // res.status(500).send('failed at finding teacher: ', teacherId);
      })
      .then(() => (
        resolve(homePackage)
      ));
  });
};