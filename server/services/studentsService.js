import * as studentsHomeView from '../controllers/studentsHomeView.js';
import * as redis from '../db/redis.js';


export const retrieve = (req, res) => {
  const studentId = req.params.id;
  const key = `student${studentId}`;

  redis.sqlReadURI.get(key, (err, data) => {
    if (err) {
      res.status(500).send('Our server\'s not perfect, but we still love it. Give it another try!');
    } else if (data) {
      res.send(JSON.parse(data));
    } else {
      studentsHomeView.sqlQuery(studentId)
      .then((studentsPackage) => {
        res.send(studentsPackage);
        redis.sqlWriteUri.set(key, JSON.stringify(studentsPackage));
      })
      .catch((err) => {
        res.status(500).send('Our server\'s not perfect, but we still love it. Give it another try!');
      });
    }
  });
};
