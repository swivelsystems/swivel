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
