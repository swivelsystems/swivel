import React from 'react';
import TestUtils from 'react-addons-test-utils'; // Alternately could use the DOM API
import configureStore from '../../client/store/configureStore';
import { Provider } from 'react-redux';
import SideBar from '../../client/components/SideBar.jsx';
const store = configureStore();


describe('Sidebar', () => {
  it('renders without problems', (done) => {
    const sidebar = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <SideBar />
      </Provider>
    );
    expect(sidebar).toBeDefined();
    done();
  });
});

// Test all the state that sidebar manipulates in store
describe('Sidebar State', () => {
  // Test state on initial load
  const sidebar = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <SideBar />
    </Provider>
  );

  it('goHome state should exist', () => (
    expect(store.getState().goHome).toBeDefined()
  ));

  it('goHome instansiate as true', () => {
    expect(typeof store.getState().goHome).toEqual('boolean');
    expect(store.getState().goHome).toEqual(true);
  });

  it('tabView state should exist', () => (
    expect(store.getState().tabView).toBeDefined()
  ));
  it('tabView instansiate as Assignments', () => {
    expect(typeof store.getState().tabView).toEqual('string');
    expect(store.getState().tabView).toEqual('Assignments');
  });

  it('currentCourse state should exist', () => (
    expect(store.getState().currentCourse).toBeDefined()
  ));

  it('currentCourse should instansiate as an object', () => {
    expect(store.getState().currentCourse).toBeDefined();
    expect(Array.isArray(store.getState().currentCourse)).toEqual(false);
    expect(typeof store.getState().currentCourse).toEqual('object');
  });


  // Test state changes on actions
  it('click on Home should change goHome state to true', () => {
    const homeButton = TestUtils.findRenderedDOMComponentWithClass(
    sidebar,
    'home-button');
    TestUtils.Simulate.click(homeButton);
    expect(store.getState().goHome).toEqual(true);
  });

  it('click on Course should change currentCourse, goHome, and tabView', () => {
    const courseButton = TestUtils.scryRenderedDOMComponentsWithClass(
    sidebar,
    'course-button');
    for (let i = 0; i < courseButton.length; i++) {
      const courseBeforeClick = store.getState().currentCourse;
      TestUtils.Simulate.click(courseButton[i]);
      expect(store.getState().goHome).toEqual(false);
      expect(store.getState().currentCourse).not.toEqual(courseBeforeClick);
      expect(store.getState().tabView).toEqual('Assignments');
    }
  });
});

