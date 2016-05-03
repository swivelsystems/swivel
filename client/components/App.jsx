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
          id: 1,
          name: 'HistoryFall2015',
          students: [
            { name: 'Zach', id: 12 },
            { name: 'Kim', id: 123 },
            { name: 'james', id: 3 },
          ],
          assignments: ['Midterm', 'The Past 100 Years in the Middle East', 'The World Rulers'] },
        {
          id: 2,
          name: 'EnglishFall2015',
          students: [
            { name: 'Ho-el', id: 12 },
            { name: 'Kevin', id: 123 },
            { name: 'james', id: 3 },
          ],
          assignments: ['Final', 'Hemingway and other Ex-Pats', 'The World of the Great Gastby'] },
        {
          id: 3,
          name: 'TrigonometryFall2015',
          students: [
            { name: 'jack', id: 12 },
            { name: 'Mylani', id: 123 },
            { name: 'Hao', id: 3 },
          ],
          assignments: ['Quiz1', 'Homework1', 'Homework2'] },
      ],
      currentCourse: {},
      isHome: true,
      courseChanged: false,
    };
  }

  handleClass(course) {
    this.setState({ currentCourse: course });
    this.setState({ isHome: false });
    this.setState({ courseChanged: true });
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
            courseChanged={this.state.courseChanged}
          />
        </div>
      </div>
    );
  }

}


export default App;
