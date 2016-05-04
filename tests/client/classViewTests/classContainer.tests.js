import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../../client/store/configureStore';
import { Provider } from 'react-redux';
import ClassContainer from '../../../client/components/ClassView/ClassContainer.jsx';
const store = configureStore();

describe('ClassContainer', () => {
  it('renders without problems', (done) => {
    const classContainer = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ClassContainer />
      </Provider>
    );
    expect(classContainer).toBeDefined();
    done();
  });
});
