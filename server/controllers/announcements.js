  import Announcement from '../models/Announcement.js';
/*
* Returns all announcements for the course found
* based on the courseId. Returns an empty array if the course
* is not found.
*/
export function findAllByCourse(courseId) {
  return new Promise((resolve, reject) => {
    Announcement.findAll({
      where: {
        courseId: courseId,
      },
      attributes: ['title', 'body'],
    })

    .then((data) => {
      const results = [];
      for (let i = 0; i < data.length; i++) {
        results[i] = data[i].dataValues;
      }
      resolve(results);
    })
    .catch((err) => {
      reject(err);
    });
  });
}
