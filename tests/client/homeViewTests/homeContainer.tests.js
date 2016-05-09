import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../../client/store/configureStore';
import { Provider } from 'react-redux';
import HomeContainer from '../../../client/components/HomeView/HomeContainer.jsx';
const store = configureStore();

describe('HomeContainer', () => {
  const homeContainer = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <HomeContainer />
    </Provider>
  );

  it('renders without problems', (done) => {
    expect(homeContainer).toBeDefined();
    done();
  });

  it('renders a Timeline component', (done) => {
    const timeline = TestUtils.findRenderedDOMComponentWithClass(
    homeContainer,
    'timeline');
    expect(timeline).toBeDefined();
    done();
  });
});
