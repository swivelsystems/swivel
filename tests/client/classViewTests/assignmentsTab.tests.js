import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../../client/store/configureStore';
import { Provider } from 'react-redux';
import AssignmentsTab from '../../../client/components/ClassView/AssignmentsTab.jsx';
const store = configureStore();

describe('AssignmentsTab', () => {
  it('renders without problems', (done) => {
    const assignmentsTab = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <AssignmentsTab />
      </Provider>
    );
    expect(assignmentsTab).toBeDefined();
    done();
  });
});
