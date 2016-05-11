import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../../client/store/configureStore';
import { Provider } from 'react-redux';
import Info from '../../../client/components/ClassView/Info.jsx';
const store = configureStore();

xdescribe('Info', () => {
  const info = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <Info />
    </Provider>
  );
  const assignmentsTab = TestUtils.findRenderedDOMComponentWithClass(
  info,
  'assignments-tab');
  const studentsTab = TestUtils.findRenderedDOMComponentWithClass(
  info,
  'students-tab');

  it('renders without problems', (done) => {
    expect(info).toBeDefined();
    done();
  });

  it('changes tabView state when assignments tab is clicked', (done) => {
    TestUtils.Simulate.click(assignmentsTab);
    expect(store.getState().tabView).toEqual('Assignments');
    done();
  });

  it('changes tabView state when students tab is clicked', (done) => {
    TestUtils.Simulate.click(studentsTab);
    expect(store.getState().tabView).toEqual('Students');
    done();
  });

  it('renders AssignmentsTab, AllStudentsTab component depending on tabView',
  (done) => {
    TestUtils.Simulate.click(studentsTab);
    let infoContent = TestUtils.findRenderedDOMComponentWithClass(
  info,
  'students-tab');
    expect(infoContent).toBeDefined();

    TestUtils.Simulate.click(assignmentsTab);
    infoContent = TestUtils.findRenderedDOMComponentWithClass(
  info,
  'assignments-tab');
    expect(infoContent).toBeDefined();

    done();
  });
});
