import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import SideBar from './SideBar.jsx';
import Main from './Main.jsx';
import Nav from './Nav.jsx';

const App = () => (
  <div>
    <Nav />
    <div className="">
      <div className="col-md-3 sidebar-wrapper">
        <SideBar />
      </div>
      <div className="col-md-9 main-wrapper">
        <Main />
      </div>
    </div>
  </div>
);

export default App;
