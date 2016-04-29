import React from 'react';
import SideBar from './SideBar.jsx';
import Main from './Main.jsx';
import Nav from './Nav.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: [
        { name: 'HistoryFall2015', students: ['jack', 'bob', 'james'] },
        { name: 'EnglishFall2015', students: ['jack', 'amy', 'james'] },
        { name: 'TrigonometryFall2015', students: ['lizzy', 'laura', 'andrew'] },
      ],
      currentCourse: {},
    };
  }

  handleClass(course) {
    this.setState({ currentCourse: course });
  }

  render() {
    return (
      <div>
        <div className="row">
          <Nav />
        </div>
        <div className="row">
          <SideBar handleClass={this.handleClass.bind(this)} courses={this.state.courses} />
          <Main />
        </div>
      </div>
    );
  }

}

export default App;
