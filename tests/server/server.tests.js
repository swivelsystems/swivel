const request = require('request');
const baseUrl = 'http://localhost:8080/';

describe('Server', function() {
  describe('GET /', function() {
    it('returns status code 200', (done) => {
      request.get(baseUrl, (error, response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
});
