import * as Announcements from '../../../server/controllers/announcements.js';

describe('Announcement Controller', () => {

  it('should successfully retrieve all announcements for a course', (done) => {
    Announcements.findAllByCourse(1)
    .then((result) => {
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].body.length).toBeGreaterThan(0);
      expect(result[0].title.length).toBeGreaterThan(0);
      done();
    })
    .catch((err) => {
      if (err) {
        throw new Error(err);
      }
    });
  });
});
