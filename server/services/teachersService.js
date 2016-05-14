import * as homeView from '../controllers/homeView.js';
import * as redis from '../db/redis.js';

export const retrieveHome = (req, res) => {
  const teacherId = req.params.id;
  const key = `home${teacherId}`;

  redis.readURI.get(key, (err, data) => {
    if (err) {
      res.status(500).send('Internal server error. Please try again.');
    } else if (data) {
      res.send(JSON.parse(data));
    } else {
      homeView.sqlQuery(teacherId)
      .then((homePackage) => {
        res.send(homePackage);
        redis.writeURI.set(key, JSON.stringify(homePackage));
      });
    }
  });
};

export const retrieveCourse = (req, res) => {
  const courseId = req.params.id;
  const key = `course${courseId}`;

  redis.readURI.get(key, (err, data) => {
    if (err) {
      console.err('failed at querying Redis for:', key);
      res.status(500).send('Internal server error. Please try again.');
    } else if (data) {
      res.send(JSON.parse(data));
    } else {
      homeView.sqlQuery(courseId)
      .then((coursePackage) => {
        res.send(coursePackage);
        redis.writeURI.set(key, JSON.stringify(coursePackage));
      });
    }
  });
};
