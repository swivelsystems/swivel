import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../client/store/configureStore';
import { Provider } from 'react-redux';
import Main from '../../client/components/Main.jsx';
const store = configureStore();


describe('Main', () => {
  const main = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <Main />
    </Provider>
  );

  it('renders without problems', (done) => {
    expect(main).toBeDefined();
    done();
  });

  xit('render Home container on when state goHome is true', (done) => {
    if (store.getState().goHome === true) {
      const home = TestUtils.findRenderedDOMComponentWithClass(
      main,
      'home');
      expect(home).toBeDefined();
    }
    done();
  });

  it('render Course container on when state goHome is false', (done) => {
    // should manually set goHome in state to false for this test to be useful
    if (store.getState().goHome === false) {
      const course = TestUtils.findRenderedDOMComponentWithClass(
      main,
      'course');
      expect(course).toBeDefined();
    }
    done();
  });
});
