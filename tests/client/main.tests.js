import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../client/store/configureStore';
import { Provider } from 'react-redux';
import Main from '../../client/components/Main.jsx';
const store = configureStore();


describe('Main', () => {
  it('renders without problems', (done) => {
    const main = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    expect(main).toBeDefined();
    done();
  });
});
