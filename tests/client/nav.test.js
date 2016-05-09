import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../client/store/configureStore';
import { Provider } from 'react-redux';
import Nav from '../../client/components/Nav.jsx';
const store = configureStore();

describe('Nav', () => {
  it('renders without problems', (done) => {
    const nav = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <Nav />
      </Provider>
    );
    expect(nav).toBeDefined();
    done();
  });
});
