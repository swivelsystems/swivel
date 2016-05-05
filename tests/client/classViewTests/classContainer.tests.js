import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../../client/store/configureStore';
import { Provider } from 'react-redux';
import ClassContainer from '../../../client/components/ClassView/ClassContainer.jsx';
const store = configureStore();

describe('ClassContainer', () => {
  const classContainer = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <ClassContainer />
    </Provider>
  );

  it('renders without problems', (done) => {
    expect(classContainer).toBeDefined();
    done();
  });

  it('renders a Chart component', (done) => {
    const chart = TestUtils.findRenderedDOMComponentWithClass(
    classContainer,
    'chart');
    expect(chart).toBeDefined();
    done();
  });

  it('renders a Info component', (done) => {
    const info = TestUtils.findRenderedDOMComponentWithClass(
    classContainer,
    'info');
    expect(info).toBeDefined();
    done();
  });
});
