import * as Submissions from '../../../server/controllers/submissions.js';

describe('Submission Controller', () => {
  it('should successfully retrieve existing submissions', (done) => {
    Submissions.findByAssignmentIdandStudentId()
    .then((result) => {
      expect(result.id).toBeDefined();
      expect(result.score).toBeDefined();
      expect(result.submissionDate).toBeDefined();
    })
    .catch((err) => {
      throw new Error(err);
    });
    done();
  });
});
