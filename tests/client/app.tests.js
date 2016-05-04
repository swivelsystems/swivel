const React = require('react');
const TestUtils = require('react-addons-test-utils'); // Alternately could use the DOM API

import App from '../../client/components/App.jsx';

describe('app', (done) => {
  it('renders without problems', () => {
    const app = TestUtils.renderIntoDocument(<App />);
    expect(app).toBeDefined();
    done();
  });
});
