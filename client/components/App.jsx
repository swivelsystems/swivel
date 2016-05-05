import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import SideBar from './SideBar.jsx';
import Main from './Main.jsx';
import Nav from './Nav.jsx';

const App = () => (
  <div>
    <Nav/>
    <div className="row">
      <SideBar />
      <Main />
    </div>
  </div>
);

export default App;
