import { assignments } from '../../../server/controllers/assignments.js';

describe('Assignment Controller', () => {
  // it('should create new assignments', (done) => {
  //   done();
  // });

<<<<<<< 83a79b24692b144d3d153972bb9b4cafca65cf99
  // it('should successfully retrieve existing assignments', (done) => {
  //   new Promise((resolve) => (
  //     resolve(assignments.findAllByCourse(1))
  //   ))
  //   .then((result) => {
  //     expect(result.length).toBeGreaterThan(0);
  //     expect(result[0].name.length).toBeGreaterThan(0);
  //     expect(result[0].description.length).toBeGreaterThan(0);
  //     expect(result[0].weight).toBeDefined();
  //     expect(result[0].dueDate).toBeDefined();
  //     done();
  //   })
  //   .catch((err) => {
  //     throw new Error(err);
  //   });
  // });
=======
  it('should successfully retrieve existing assignments', (done) => {
    new Promise((resolve) => (
      resolve(assignments.findAllByCourse(1))
    ))
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
>>>>>>> Implement assigments controller unit test

  // it('should update existing assignments', (done) => {
  //   done();
  // });
  //
  // it('should remove assignments from the database', (done) => {
  //   done();
  // });
});
