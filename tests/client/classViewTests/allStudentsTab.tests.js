import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../../client/store/configureStore';
import { Provider } from 'react-redux';
import AllStudentsTab from '../../../client/components/ClassView/allStudentsTab.jsx';
const store = configureStore();

describe('AllStudentsTab', () => {
  it('renders without problems', (done) => {
    const allStudentsTab = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <AllStudentsTab />
      </Provider>
    );
    expect(allStudentsTab).toBeDefined();
    done();
  });
});
