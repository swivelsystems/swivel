import Student from '../models/Student.js';
import db from '../db/db.js';

/*
* Returns a student object matching the provided id. Returns undefined if the
* student doesn't exist.
*/
// This will return the Id, Year, GPA, rank

export const findById = (studentId) => {
  return new Promise((resolve, reject) => {
    Student.find({
      where: {
        id: studentId,
      },
      attributes: ['id', 'name', 'year', 'GPA', 'rank'],
    })
    .then((data) => {
      const results = {};
      for (const key in data.dataValues) {
        results[key] = data.dataValues[key];
      }
      resolve(results);
    })
    .catch((err) => {
      reject(err);
    });
  });
};

export const findByEmail = (email) => {
  return new Promise((resolve, reject) => {
    Student.find({
      where: {
        email: email,
      },
      attributes: ['id', 'name', 'year', 'GPA', 'rank', 'email'],
    })
    .then((data) => {

    });
  });
};

export const findCourseGrade = (courseId, studentId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT grade FROM `studentsCoursesGrades` where courseId = :courseId AND studentId = :studentId', {
      replacements: {
        courseId: courseId,
        studentId: studentId,
      },
      type: db.QueryTypes.SELECT,
    })
    .then((data) => (
      resolve(data[0])
    ))
    .catch((err) => (
      reject(err)
    ));
  });
};
