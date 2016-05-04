import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../client/store/configureStore';
import { Provider } from 'react-redux';
import App from '../../client/components/App.jsx';
const store = configureStore();

describe('App', () => {
  const app = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <App />
    </Provider>
  );

  it('renders without problems', (done) => {
    expect(app).toBeDefined();
    done();
  });

  it('renders a sidebar component', (done) => {
    const sidebar = TestUtils.findRenderedDOMComponentWithClass(
    app,
    'side-bar');
    expect(sidebar).toBeDefined();
    done();
  });

  it('renders a Nav component', (done) => {
    const nav = TestUtils.findRenderedDOMComponentWithClass(
    app,
    'nav-bar');
    expect(nav).toBeDefined();
    done();
  });

  it('renders a either a Main component as either home or course', (done) => {
    const main = TestUtils.findRenderedDOMComponentWithClass(
    app,
    'home') || TestUtils.findRenderedDOMComponentWithClass(app, 'course');
    expect(main).toBeDefined();
    done();
  });
});

