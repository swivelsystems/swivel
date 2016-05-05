import Submission from '../models/Submission.js';

/*
* Returns all submissions across all courses that the students is enrolled
* in. Returns an empty array if the student does not exist.
*/
export const findByAssignmentIdandStudentId = (assignmentId, studentId) => {
  return new Promise((resolve, reject) => {
    Submission.find({
      where: {
        assignmentId: assignmentId,
        studentId: studentId,
      },
      attributes: ['id', 'score', 'submissionDate', 'assignmentId'],
    })
    .then((data) => {
      if ( data !== null) {
        resolve(data.dataValues);
      } else {
        resolve({});
      }
    })
    ;
  });
};

export const findByAssignmentId = (assignmentId) => {
  return new Promise((resolve, reject) => {
    Submission.findAll({
      where: {
        assignmentId: assignmentId,
      },
      attributes: ['id', 'score', 'submissionDate', 'assignmentId', 'studentId'],
    })
    .then((data) => {
      const results = [];

      if (data !== null) {
        for (let i = 0; i < data.length; i++) {
          results.push(data[i].dataValues);
        }
        resolve(results);
      } else {
        resolve({});
      }
    });
  });
};

/*
* Returns an array of all submissions for a given course. Returns an empty
* array if the course is not found. This should be used for teachers only.
*/
// const getAllByCourse(courseId) {

// }
