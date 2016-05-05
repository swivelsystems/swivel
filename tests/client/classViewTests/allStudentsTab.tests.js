import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../../client/store/configureStore';
import { Provider } from 'react-redux';
import AllStudentsTab from '../../../client/components/ClassView/AllStudentsTab.jsx';
const store = configureStore();

const students = [
      { name: 'Zach', id: 12 },
      { name: 'Kim', id: 123 },
      { name: 'james', id: 3 },
];

describe('AllStudentsTab', () => {
  it('renders without problems', (done) => {
    const allStudentsTab = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <AllStudentsTab students={students} />
      </Provider>
    );
    expect(allStudentsTab).toBeDefined();
    done();
  });
});
