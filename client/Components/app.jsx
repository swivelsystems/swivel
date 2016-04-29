import React from 'react';
import SideBar from './SideBar.jsx';
import Main from './Main.jsx';
import Nav from './Nav.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          name: 'HistoryFall2015',
          students: ['jack', 'bob', 'james'],
          assignments: ['Midterm', 'The Past 100 Years in the Middle East', 'The World Rulers'] },
        {
          name: 'EnglishFall2015',
          students: ['jack', 'amy', 'james'],
          assignments: ['Final', 'Hemingway and other Ex-Pats', 'The World of the Great Gastby'] },
        {
          name: 'TrigonometryFall2015',
          students: ['lizzy', 'laura', 'andrew'],
          assignments: ['Quiz1', 'Homework1', 'Homework2'] },
      ],
      currentCourse: {},
      isHome: true,
    };
  }

  handleClass(course) {
    this.setState({ currentCourse: course });
    this.setState({ isHome: false });
  }

  handleHome() {
    this.setState({ isHome: true });
  }

  render() {
    return (
      <div>
        <div className="row">
          <Nav />
        </div>
        <div className="row">
          <SideBar
            handleClass={this.handleClass.bind(this)}
            handleHome={this.handleHome.bind(this)}
            courses={this.state.courses}
          />
          <Main
            isHome={this.state.isHome}
            currentCourse={this.state.currentCourse}
          />
        </div>
      </div>
    );
  }

}

export default App;
