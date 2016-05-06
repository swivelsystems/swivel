import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index.js';

class SideBar extends React.Component {

  displayCourses() {
    const classes = this.props.courses.map((course) => (
      <li
        key={course.id}
        className="course-button"
        onClick={() => (this.props.handleCourse(course)) }
      >
        {course.name}
      </li>
    ));
    return classes;
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-school">
          <div className="sidebar-school-info">
            <h4>Everest Prep Elementary</h4>
          </div>
        </div>
        <ul className="sidebar-nav">
          <li
            className="home-button"
            onClick={ () => (this.props.handleHome(true)) }
          >
            Home
          </li>
          <li
            className="sidebar-section-header"
          >
            Classes
          </li>
          {this.displayCourses()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  { courses: state.courses }
);

const mapDispatchToProps = (dispatch) => (
  {
    handleHome: (goHome) => {
      dispatch(actions.goHome(goHome));
    },
    /*
      if a course is clicked change the current course
      make sure the assignments tab is the default view
      get out of home view
    */
    handleCourse: (course) => {
      dispatch(actions.updateCourse(course));
      dispatch(actions.switchTabs('Assignments'));
      dispatch(actions.goHome(false));
    },
  }
);

SideBar.propTypes = {
  courses: React.PropTypes.array,
  handleCourse: React.PropTypes.func,
  handleHome: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
