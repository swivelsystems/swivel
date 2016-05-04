import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../../client/store/configureStore';
import { Provider } from 'react-redux';
import Info from '../../../client/components/ClassView/Info.jsx';
const store = configureStore();

describe('Info', () => {
  it('renders without problems', (done) => {
    const info = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <Info />
      </Provider>
    );
    expect(info).toBeDefined();
    done();
  });
});
