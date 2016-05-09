import Teacher from '../models/Teacher.js';

/*
* Returns one teacher object matching the id. Returns undefined otherwise.
*/
export const findById = (teacherId) => {
  return new Promise((resolve, reject) => {
    Teacher.find({
      where: {
        id: teacherId,
      },
      attributes: ['id', 'name'],
    })
    .then((data) => {
      resolve(data.dataValues);
    })
    .catch((err) => (
      reject(err)
    ));

  });

};
