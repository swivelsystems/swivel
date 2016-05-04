import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../../client/store/configureStore';
import { Provider } from 'react-redux';
import Chart from '../../../client/components/ClassView/Chart.jsx';
const store = configureStore();

describe('Chart', () => {
  it('renders without problems', (done) => {
    const chart = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <Chart />
      </Provider>
    );
    expect(chart).toBeDefined();
    done();
  });
});
