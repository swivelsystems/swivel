const React = require('react');
const TestUtils = require('react-addons-test-utils'); // Alternately could use the DOM API

describe('test', () => {
  it('passes a test', () => {
    expect(2).toEqual(2);
  });
});
// import App from '../components/App.jsx';
//
// describe('app', () => {
//   it('renders without problems', () => {
//     const app = TestUtils.renderIntoDocument(<App />);
//     expect(app).toBeDefined();
//   });
// });
