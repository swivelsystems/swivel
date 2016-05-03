import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../../client/store/configureStore';
import { Provider } from 'react-redux';
import AllStudentsTab from '../../../client/components/ClassView/AllStudentsTab.jsx';
const store = configureStore();

describe('AllStudentsTab', () => {
  const allStudentsTab = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <AllStudentsTab />
    </Provider>
  );

  it('renders without problems', (done) => {
    expect(allStudentsTab).toBeDefined();
    done();
  });

  it('should render a card for each student', (done) => {
    const students = TestUtils.scryRenderedDOMComponentsWithClass(
    allStudentsTab,
    'card');
    const allStudents = store.getState().displayedCourse.students;
    expect(students.length).toEqual(allStudents.length);
    done();
  });

  it('click on a student should change displayedStudent and tabView', (done) => {
    const students = TestUtils.scryRenderedDOMComponentsWithClass(
    allStudentsTab,
    'course-button');
    for (let i = 0; i < students.length; i++) {
      const studentBeforeClick = store.getState().displayedStudent;
      TestUtils.Simulate.click(students[i]);
      expect(store.getState().displayedStudent).not.toEqual(studentBeforeClick);
      expect(store.getState().tabView).toEqual('Student');
    }
    done();
  });
});

