import * as Students from '../../../server/controllers/students.js';

describe('Student Controller', () => {
  it('should successfully retrieve existing students', (done) => {
    Students.findById(5)
    .then((result) => {
      expect(result.id).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.year).toBeDefined();
      expect(result.GPA).toBeDefined();
      expect(result.rank).toBeDefined();
    })
    .catch((err) => {
      throw new Error(err);
    });
    done();
  });

  it('should successfully retrieve a student\'s grade', (done) => {
    Students.findCourseGrade(25, 30)
    .then((result) => {
      expect(result).toBeDefined();
    })
    .catch((err) {
      throw new Error(err);
    })
    done();
  });
});
