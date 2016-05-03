import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import SideBar from './SideBar.jsx';
import Main from './Main.jsx';
import Nav from './Nav.jsx';



class App extends React.Component {

  constructor(props) {
    super(props);
  //   this.state = {
  //     courses: [
  //       {
  //         name: 'HistoryFall2015',
  //         students: ['jack', 'bob', 'james'],
  //         assignments: ['Midterm', 'The Past 100 Years in the Middle East', 'The World Rulers'] },
  //       {
  //         name: 'EnglishFall2015',
  //         students: ['jack', 'amy', 'james'],
  //         assignments: ['Final', 'Hemingway and other Ex-Pats', 'The World of the Great Gastby'] },
  //       {
  //         name: 'TrigonometryFall2015',
  //         students: ['lizzy', 'laura', 'andrew'],
  //         assignments: ['Quiz1', 'Homework1', 'Homework2'] },
  //     ],
  //     currentCourse: {},
  //     isHome: true,
  //     courseChanged: false,
  //   };
  // }
  }

  handleClass(course) {
    // change these to dispatch
    dispatch()
    // this.setState({ currentCourse: course });
    // this.setState({ isHome: false });
    // this.setState({ courseChanged: true });
  }

  handleHome() {
    this.setState({ isHome: true });
  }

  mapStateToProps(state) {
    return {
      courses: state.courses,
      isHome: state.isHome,
      currentCourse: state.currentCourse,
      courseChanged: state.courseChanged,
    };
  }

  mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(Actions, dispatch),
    };
  }

  render() {
    return (
      <div>
        <div className="row">
          <Nav />
        </div>
        <div className="row">
          <SideBar
            // handleClass={this.handleClass.bind(this)}
            handleClass={this.props.handleClass}
            // handleHome={this.handleHome.bind(this)}
            // courses={this.state.courses}
            courses={this.props.courses}
          />
          <Main
            // isHome={this.state.isHome}
            isHome={this.props.isHome}
            // currentCourse={this.state.currentCourse}
            currentCourse={this.props.currentCourse}
            // courseChanged={this.state.courseChanged}
            courseChanged={this.props.courseChanged}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
