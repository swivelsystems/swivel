import * as Assignments from '../../../server/controllers/assignments.js';

describe('Assignments Controller', () => {
  it('should successfully retrieve all assignments for a course', (done) => {
    Assignments.findAllByCourse(1)
    .then((result) => {
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].name.length).toBeGreaterThan(0);
      expect(result[0].description.length).toBeGreaterThan(0);
      expect(result[0].weight).toBeDefined();
      expect(result[0].dueDate).toBeDefined();
      done();
    })
    .catch((err) => {
      throw new Error(err);
    });
  });
});
