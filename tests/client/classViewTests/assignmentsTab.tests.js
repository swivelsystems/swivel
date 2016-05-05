import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../../client/store/configureStore';
import { Provider } from 'react-redux';
import AssignmentsTab from '../../../client/components/ClassView/AssignmentsTab.jsx';
const store = configureStore();

describe('AssignmentsTab', () => {
  const assignmentsTab = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <AssignmentsTab />
    </Provider>
  );
  it('renders without problems', (done) => {
    expect(assignmentsTab).toBeDefined();
    done();
  });

  it('should render a card for each assignment', (done) => {
    const assignments = TestUtils.scryRenderedDOMComponentsWithClass(
    assignmentsTab,
    'card');
    const allAssignments = store.getState().currentCourse.assignments;
    expect(assignments.length).toEqual(allAssignments.length);
    done();
  });

  /*         uncomment when clickable assignments is functional

  it('click on a assignment should change currentAssignment and tabView', (done) => {
    const assignments = TestUtils.scryRenderedDOMComponentsWithClass(
    assignmentsTab,
    'assignment');
    for (let i = 0; i < assignments.length; i++) {
      const assignmentBeforeClick = store.getState().currentStudent;
      TestUtils.Simulate.click(assignments[i]);
      expect(store.getState().currentCourse).not.toEqual(assignmentBeforeClick);
      expect(store.getState().tabView).toEqual('Assignment');
    }
    done();
  });

  */
});

