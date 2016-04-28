const React = require('react');
const TestUtils = require('react-addons-test-utils');
import SideBar from '../components/SideBar.jsx';

const courses = [
  {
    id: 1,
    name: 'HistoryFall2015',
    students: [
      { name: 'Zach', id: 12 },
      { name: 'Kim', id: 123 },
      { name: 'james', id: 3 },
    ],
    assignments: ['Midterm', 'The Past 100 Years in the Middle East', 'The World Rulers'],
  },
];

describe('Testing SideBar.jsx', () => {
  const callback = jasmine.createSpy();
  const sidebar = TestUtils.renderIntoDocument(
    <SideBar courses={courses} handleClass={callback} handleHome={callback} />
  );

  it('renders SideBar without problems', () => {
    expect(sidebar).toBeDefined();
  });

  it('passes the event to the given callback when Home is clicked', () => {
  // const clicked = TestUtils.findRenderedDOMComponentWithClass(sidebar, 'home-button');
  //   TestUtils.Simulate.click(subject);
  // expect(sidebar).toBeDefined();
  // const sidebarItem = sidebar.findRenderedDOMComponentWithClass('home-button').getDOMNode();
  //   TestUtils.Simulate.click(sidebarItem);
  // //   clicked.props.onChange('an event!');
    // expect(callback).toHaveBeenCalledWith('an event!');
  });

  it('passes the event to callback with course when a course is clicked', () => {

  });
});



















