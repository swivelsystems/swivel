import * as Students from '../controllers/students.js';
import * as Courses from '../controllers/courses.js';
import * as Announcements from '../controllers/announcements';
import * as Assignments from '../controllers/assignments.js';
import * as Submissions from '../controllers/submissions.js';

export const retrieve = (req, res) => {
  // This is the studentId queried
  const studentId = req.params.id;

  const masterResults = {};

  // We make our initial sql query for the
  // student's basic info
  Students.findById(studentId)
  .then((studentInfo) => {
    // We apply the basic info to the student
    masterResults.student = studentInfo;

    // We then query the db for the
    // student's courses. This function is a promise,
    // so we return it from this scope so that its
    // result can be caught by the next 'then' scope
    return Courses.findAllByStudent(studentId);
  })
  .then((studentCourses) => {
    // We apply the result to the masterObject
    masterResults.courses = studentCourses;
  })
  .then(() => {
    // Now, since the student has multiple courses, we
    // need to make multiple async calls (one for each course)
    // to the db for the aforementioned courses' names

    // We map the promises which are return from these promisified functions
    // into an array, so that we can invoke Promise.all() on it
    // and not pass any info into the next 'then' block
    // until all of these async calls have completed
    const arrayOfPromises = masterResults.courses.map((x) => (
      Courses.findNameByCourseId(x.courseId))
    );

    return Promise.all(arrayOfPromises);
  })
  .then((arrOfCourseNames) => {
    for (let i = 0; i < arrOfCourseNames.length; i++) {
      masterResults.courses[i].name = arrOfCourseNames[i][0].name;
      masterResults.courses[i].announcements = [];
      masterResults.courses[i].assignments = [];
    }
  })
  .then(() => {
    const arrOfAnnouncements = masterResults.courses.map((course) => (
      Announcements.findAllByCourse(course.courseId)
    ));

    return Promise.all(arrOfAnnouncements);
  })
  .then((arrOfAnnouncements) => {
    for (let i = 0; i < arrOfAnnouncements.length; i++) {
      for (let j = 0; j < arrOfAnnouncements[i].length; j++) {
        masterResults.courses[i].announcements.push({
          title: arrOfAnnouncements[i][j].title,
          body: arrOfAnnouncements[i][j].body,
        });
      }
    }
  })
  .then(() => {
    const arrOfAssignments = masterResults.courses.map((course) => (
      Assignments.findAllByCourse(course.courseId)
    ));

    return Promise.all(arrOfAssignments);
  })
  .then((arrOfAssignments) => {
    for (let i = 0; i < arrOfAssignments.length; i++) {
      for (let j = 0; j < arrOfAssignments[i].length; j++) {
        masterResults.courses[i].assignments.push({
          id: arrOfAssignments[i][j].id,
          name: arrOfAssignments[i][j].name,
          dueDate: arrOfAssignments[i][j].dueDate,
          weight: arrOfAssignments[i][j].weight,
          courseId: arrOfAssignments[i][j].courseId,
        });
      }
    }
  })
  .then(() => {
    const arrOfArrOfSubmissions = masterResults.courses.map((course) => {
      return course.assignments.map((assignment) => (
        Submissions.findByAssignmentIdandStudentId(assignment.id, studentId)
      ));
    });

    const arrOfSubmissions = [].concat.apply([], arrOfArrOfSubmissions);

    return Promise.all(arrOfSubmissions);
  })
  .then((arrOfSubmissions) => {
    let counter = 0;
    for (let i = 0; i < masterResults.courses.length; i++) {
      for (let j = 0; j < masterResults.courses[i].assignments.length; j++) {
        masterResults.courses[i].assignments[j].submissions = arrOfSubmissions[counter];
        counter++;
      }
    }

    res.send(masterResults);
  })
  .catch((err) => {
    throw err;
  });
};
