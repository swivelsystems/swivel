import { announcements } from '../../../server/controllers/announcements.js';

describe('Announcement Controller', () => {
  // it('should create new announcements', (done) => {
  //   done();
  // });

  it('should successfully retrieve existing announcements', (done) => {
    new Promise((res) => {
      res(announcements.findAllByCourse(1));
    })
    .then((allFound) => {
      expect(() => (
        allFound.length > 0
      )).toEqual(true);

      expect(() => (
        allFound[0].body.length > 0
      )).toEqual(true);

      expect(() => (
        allFound[0].title.length > 0
      )).toEqual(true);
      done();
    })
    .catch((err) => {
      throw new Error(err);
    });
  });

  // it('should update existing announcements', (done) => {
  //   done();
  // });
  //
  // it('should remove announcements from the database', (done) => {
  //   done();
  // });
});
