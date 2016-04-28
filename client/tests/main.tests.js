const React = require('react');
const TestUtils = require('react-addons-test-utils');
import Main from '../components/Main.jsx';

const myCourse = {
  id: 1,
  name: 'HistoryFall2015',
  students: [
    { name: 'Zach', id: 12 },
    { name: 'Kim', id: 123 },
    { name: 'James', id: 3 },
  ],
  assignments: ['Midterm', 'The Past 100 Years in the Middle East', 'The World Rulers'],

};

const isHome = true;
const courseChanged = false;

describe('Testing Main.jsx', () => {
  beforeEach(() => {
  });

  it('renders main without problems', () => {
    const main = TestUtils.renderIntoDocument(
      <Main
        isHome={isHome}
        currentCourse={myCourse}
        courseChanged={courseChanged}
      />
    );
    expect(main).toBeDefined();
  });

  it('renders chart and info with course data for Course View', () => {

  });

  it('renders timeline for Home View', () => {

  });
});
