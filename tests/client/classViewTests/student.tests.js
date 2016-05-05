import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../../client/store/configureStore';
import { Provider } from 'react-redux';
import Student from '../../../client/components/ClassView/Student.jsx';
const store = configureStore();

describe('Student', () => {
  const student = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <Student />
    </Provider>
  );

  it('renders without problems', (done) => {
    expect(student).toBeDefined();
    done();
  });

  it('has a back button which changes tabView to Students', (done) => {
    const backButton = TestUtils.findRenderedDOMComponentWithClass(
    student,
    'back');
    TestUtils.Simulate.click(backButton);
    const tabView = store.getState().tabView;
    expect(tabView).toEqual('Students');
    done();
  });
});
