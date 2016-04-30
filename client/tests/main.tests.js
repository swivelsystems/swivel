const React = require('react');
const TestUtils = require('react-addons-test-utils'); // Alternately could use the DOM API

import Main from '../components/Main.jsx';

const course = {
  name: 'HistoryFall2015',
  students: ['jack', 'bob', 'james'],
  assignments: ['Midterm', 'The Past 100 Years in the Middle East', 'The World Rulers'],
};

const isHome = true;

describe('main', () => {
  it('renders without problems', () => {
    const main = TestUtils.renderIntoDocument(<Main currentCourse = {course} isHome={ isHome } />);
    expect(main).toBeDefined();
  });
});
