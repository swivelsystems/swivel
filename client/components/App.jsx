import React from 'react';
import SideBar from './SideBar.jsx';
import Main from './Main.jsx';
import Nav from './Nav.jsx';

class App extends React.Component {

  render() {
    return (
      <div>
        <div className="row">
          <Nav />
        </div>
        <div className="row">
          <SideBar />
          <Main />
        </div>
      </div>
    );
  }

}


export default App;
