import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../../client/store/configureStore';
import { Provider } from 'react-redux';
import Timeline from '../../../client/components/HomeView/Timeline.jsx';
const store = configureStore();

describe('Timeline', () => {
  it('renders without problems', (done) => {
    const timeline = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <Timeline />
      </Provider>
    );
    expect(timeline).toBeDefined();
    done();
  });
});
