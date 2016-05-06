import React from 'react';
import SideBar from './SideBar.jsx';
import Main from './Main.jsx';
import Nav from './Nav.jsx';


const App = () => (
  <div>
    <Nav />
    <div className="container-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <SideBar />
          </div>
          <div className="col-md-9 main-wrapper">
            <Main />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
