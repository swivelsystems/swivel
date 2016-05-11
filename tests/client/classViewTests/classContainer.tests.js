import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../../client/store/configureStore';
import { Provider } from 'react-redux';
import CourseContainer from '../../../client/components/ClassView/CourseContainer.jsx';
const store = configureStore();

xdescribe('CourseContainer', () => {
  const courseContainer = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <CourseContainer />
    </Provider>
  );

  it('renders without problems', (done) => {
    expect(courseContainer).toBeDefined();
    done();
  });

  xit('renders a Chart component', (done) => {
    const chart = TestUtils.findRenderedDOMComponentWithClass(
    courseContainer,
    'chart');
    expect(chart).toBeDefined();
    done();
  });

  it('renders a Info component', (done) => {
    const info = TestUtils.findRenderedDOMComponentWithClass(
    courseContainer,
    'info');
    expect(info).toBeDefined();
    done();
  });
});
