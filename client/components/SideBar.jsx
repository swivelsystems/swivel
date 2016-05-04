import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index.js';

class SideBar extends React.Component {

  displayCourses() {
    const classes = this.props.courses.map((course) => (
      <div
        key={course.id}
        onClick={() => (this.props.handleCourse(course)) }
      >
        {course.name}
      </div>
    ));
    return classes;
  }

  render() {
    return (
      <div className="col-md-3 container">
        <div
          className="home-button"
          onClick={ () => (this.props.handleHome(true)) }
        >
          Home
        </div>
        {this.displayCourses()}
      </div>
    );
  }
}

SideBar.propTypes = {
  courses: React.PropTypes.array,
  handleCourse: React.PropTypes.func,
  handleHome: React.PropTypes.func,
};

const mapStateToProps = (state) => (
  { courses: state.courses }
);

const mapDispatchToProps = (dispatch) => (
  {
    handleHome: (goHome) => {
      dispatch(actions.goHome(goHome));
    },
    handleCourse: (course) => {
      dispatch(actions.updateCourse(course));
      dispatch(actions.switchTabs('Assignments'));
      dispatch(actions.goHome(false));
    },
  }
);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
