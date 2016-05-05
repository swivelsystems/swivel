import Assignments from '../models/Assignment.js';

/*
* Returns an array of all assignments for a given course.
*/
export function findAllByCourse(courseId) {
  return new Promise((resolve, reject) => {
    Assignments.findAll({
      where: {
        courseId: courseId,
      },
      // i think sequelize automatically puts the underscore
      // between due and date for due_date
      attributes: ['id', 'name', 'dueDate', 'weight', 'courseId'],
    })
    .then((data) => {
      let results = [];
      for (let i = 0; i < data.length; i++) {
        results[i] = data[i].dataValues;
      }
      resolve(results);
    })
    .catch((err) => (
      console.log(err)
    ));
  });

}
