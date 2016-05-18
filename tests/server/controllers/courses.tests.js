import * as Courses from '../../../server/controllers/courses.js';

describe('Course Controller', () => {
  it('should retrieve courses for a student', (done) => {
    Courses.findAllByStudent(1)
    .then((result) => {
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].name).toBeDefined();
      expect(result[0].description).toBeDefined();
      expect(result[0].department).toBeDefined();
    })
    .catch((err) => {
      throw new Error(err);
    });
    done();
  });

  it('should retrieve a course\'s name and description by its id', (done) => {
    Courses.findNameByCourseId(1)
    .then((result) => {
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].name).toBeDefined();
      expect(result[0].description).toBeDefined();
    })
    .catch((err) => {
      throw new Error(err);
    });
    done();
  });


  it('should retrieve courses for a teacher', (done) => {
    Courses.findAllByTeacher(1)
    .then((result) => {
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].name).toBeDefined();
      expect(result[0].description).toBeDefined();
      expect(result[0].department).toBeDefined();
    })
    .catch((err) => {
      throw new Error(err);
    });
    done();
  });

  it('should find all students taking a given course', (done) => {
    Courses.findAllStudents(1)
    .then((result) => {
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].studentId).toBeDefined();
    })
    .catch((err) => {
      throw new Error(err);
    });
    done();
  });
});
