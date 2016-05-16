import * as Courses from './courses.js';

export const sqlQuery = (teacherId) => {
  return new Promise((resolve, reject) => {
    Courses.findAllByTeacher(instructorId)
      .then((courses) => {
        const homePackage = {};

        homePackage.courses = courses;

        // Async Waterfall
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
                  .then((assignments) => (
                    course.assignments = assignments
                  ))
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
      .then((waterfallSuccess) => (
        resolve(homePackage)
      ))
      .catch((err) => {
        console.err("can't compile courses", err);
        res.status(500).send('failed at compiling all data for teacher', instructorId);
      });
  });
};