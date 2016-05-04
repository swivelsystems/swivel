import * as announcements from '../../../server/controllers/announcements.js';
import Promise from 'promise';

describe('Announcement Controller', () => {
  // it('should create new announcements', (done) => {
  //   done();
  // });

<<<<<<< bbe95dac79a4b3bb7812b745d688dd3f11edc539
  // it('should successfully retrieve existing announcements', (done) => {
  //   new Promise((resolve) => {
  //     resolve(announcements.findAllByCourse(1));
  //   })
  //   .then((result) => {
  //     expect(result.length).toBeGreaterThan(0);
  //     expect(result[0].body.length).toBeGreaterThan(0);
  //     expect(result[0].title.length).toBeGreaterThan(0);
  //     done();
  //   })
  //   .catch((err) => {
  //     throw new Error(err);
  //   });
  // });
=======
  it('should successfully retrieve existing announcements', (done) => {
    const req = { body: { courseId: 1 } };
    new Promise((resolve) => {
      resolve(announcements.findAllByCourse(req, {}));
    })
    .then((res) => {
      const result = JSON.parse(res).body.announcements;
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].body.length).toBeGreaterThan(0);
      expect(result[0].title.length).toBeGreaterThan(0);
      done();
    })
    .catch((err) => {
      throw new Error(err);
    });
  });
>>>>>>> Refactor tests to use req, res

  // it('should update existing announcements', (done) => {
  //   done();
  // });
  //
  // it('should remove announcements from the database', (done) => {
  //   done();
  // });
});
