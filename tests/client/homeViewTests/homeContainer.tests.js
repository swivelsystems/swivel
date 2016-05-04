import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../../client/store/configureStore';
import { Provider } from 'react-redux';
import HomeContainer from '../../../client/components/HomeView/HomeContainer.jsx';
const store = configureStore();

describe('HomeContainer', () => {
  it('renders without problems', (done) => {
    const homeContainer = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    );
    expect(homeContainer).toBeDefined();
    done();
  });
});
