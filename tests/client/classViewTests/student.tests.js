import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../../client/store/configureStore';
import { Provider } from 'react-redux';
import Student from '../../../client/components/ClassView/Student.jsx';
const store = configureStore();

describe('Student', () => {
  it('renders without problems', (done) => {
    const student = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <Student />
      </Provider>
    );
    expect(student).toBeDefined();
    done();
  });
});
