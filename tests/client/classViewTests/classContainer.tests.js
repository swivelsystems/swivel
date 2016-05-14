import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../../client/store/configureStore';
import { Provider } from 'react-redux';
import CourseView from '../../../client/components/CourseView/CourseView.jsx';
const store = configureStore();

xdescribe('CourseView', () => {
  const courseContainer = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <CourseView />
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
