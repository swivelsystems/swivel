import Course from '../models/Course.js';
import db from '../db/db.js';
/*
* Returns all courses that the student is enrolled in.
* Returns an empty array if the student is not found.
*/
export const findAllByStudent = (studentId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT courseId, grade FROM `studentsCoursesGrades` WHERE studentId = :studentId', {
      replacements: {
        studentId: studentId,
      },
      type: db.QueryTypes.SELECT,
    })
    .then((data) => {
      resolve(data);
    })
    .catch((err) => {
      reject(err);
    });
  });
};

export const findNameByCourseId = (courseId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT name FROM `courses` WHERE id = :courseId', {
      replacements: {
        courseId: courseId,
      },
      type: db.QueryTypes.SELECT })
    .then((data) => {
      resolve(data);
    })
    .catch((err) => {
      reject(err);
    });
  });
};

/*
* Returns all courses that the teacher is teaching.
* Returns an empty array if the teacher is not found.
*/
export const findAllByTeacher = (teacherId) => {
  return new Promise((resolve, reject) => {
    Course.findAll({
      where: {
        teacherId: teacherId,
      },
      attributes: ['id', 'name'],
    })
    .then((data) => {
      const results = [];
      for (let i = 0; i < data.length; i++) {
        results.push(data[i].dataValues);
      }
      resolve(results);
    })
    .catch((err) => {
      reject(err);
    });
  });
};

export const findAllStudents = (courseId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT studentId from `studentsCoursesGrades` where courseId = :courseId', {
      replacements: {
        courseId: courseId,
      },
      type: db.QueryTypes.SELECT,
    })
    .then((data) => {
      resolve(data);
    })
    .catch((err) => {
      reject(err);
    });
  });
};
