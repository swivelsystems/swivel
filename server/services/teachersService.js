import * as Teachers from '../controllers/teachers.js';
import * as Courses from '../controllers/courses.js';
import * as Announcements from '../controllers/announcements.js';
import * as Assignments from '../controllers/assignments.js';
import * as Submissions from '../controllers/submissions.js';
import * as Students from '../controllers/students.js';

export const retrieveMainpage = (req, res) => {
  const teacherId = req.params.id;
  let arrOfCourses = [];

}

export const retrieve = (req, res) => {
  const teacherId = req.params.id;

  const masterResults = {};
  let closureForStudents;

  Teachers.findById(teacherId)
  .then((teacherInfo) => {
    masterResults.teacher = teacherInfo;

    return Courses.findAllByTeacher(teacherId);
  })
  .then((teacherCourses) => {
    masterResults.courses = teacherCourses;
    // Below, we are setting up the skeleton of the courses array
    // This will make it easier for us later to populate the array
    // We can just push data into the relevant empty array
    for (let i = 0; i < masterResults.courses.length; i++) {
      masterResults.courses[i].announcements = [];
      masterResults.courses[i].assignments = [];
      masterResults.courses[i].students = [];
    }
  })
  .then(() => {
    const arrOfAnnouncements = masterResults.courses.map((course) => (
      Announcements.findAllByCourse(course.id)
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
      Assignments.findAllByCourse(course.id)
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
          description: arrOfAssignments[i][j].description,
        });
      }
    }
  })
  .then(() => {
    const arrOfArrOfSubmissions = masterResults.courses.map((course) => {
      return course.assignments.map((assignment) => (
        Submissions.findByAssignmentId(assignment.id)
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
  })
  .then(() => {
    const arrOfArrStudents = masterResults.courses.map((course) => (
      Courses.findAllStudents(course.id)
    ));

    return Promise.all(arrOfArrStudents);
  })
  .then((arrOfArrOfStudents) => {
    const arrOfArrOfStudentsInfo = arrOfArrOfStudents.map((courseStudents) => {
      return courseStudents.map((student) => (
        Students.findById(student.studentId)
      ));
    });

    closureForStudents = arrOfArrOfStudentsInfo;

    const arrOfStudentsInfo = [].concat.apply([], arrOfArrOfStudentsInfo);

    return Promise.all(arrOfStudentsInfo);
  })
  .then((arrOfStudentsInfo) => {
    let counter = 0;
    for (let i = 0; i < closureForStudents.length; i++) {
      for (let j = 0; j < closureForStudents[i].length; j++) {
        masterResults.courses[i].students.push(arrOfStudentsInfo[counter]);
        counter++;
      }
    }
  })
  .then(() => {
    const arrOfArrOfGrades = masterResults.courses.map((course) => {
      return course.students.map((student) => (
        Students.findCourseGrade(course.id, student.id)
      ));
    });

    closureForStudents = arrOfArrOfGrades;

    const arrOfGrades = [].concat.apply([], arrOfArrOfGrades);
    return Promise.all(arrOfGrades);
  })
  .then((arrOfGrades) => {
    let counter = 0;
    for (let i = 0; i < closureForStudents.length; i++) {
      for (let j = 0; j < closureForStudents[i].length; j++) {
        masterResults.courses[i].students[j].courseGrade = arrOfGrades[counter];
        counter++;
      }
    }
  })
  .then(() => (
    res.send(masterResults)
  ))
  .catch((err) => {
    console.log(err);
  });
};
