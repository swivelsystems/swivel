import React, { Component, PropTypes } from 'react';
import actions from '../actions/index.js';
import { connect } from 'react-redux';
import requestMethods from '../utils/requestMethods.js';

class Nav extends Component {
  handleClick() {
    let type = '';
    if (this.props.demoType === 'student') {
      type = 'teacher';
    } else {
      type = 'student';
    }
    this.props.handleDemoToggle(type);
    this.props.handleHttpRequests(type);
  }

  displayOtherDemoType() {
    let otherDemo = '';
    if (this.props.demoType === 'student') {
      otherDemo = 'Teacher';
    } else {
      otherDemo = 'Student';
    }
    return otherDemo;
  }

  render() {
    return (
      <nav className="navbar navbar-default">
          <div className="navbar-header">
            <div className="navbar-logo"></div>
            <a className="navbar-brand" href="#">
              Swivel Systems
            </a>
          </div>
            <a
              className="btn nav-btn"
              onClick={ this.handleClick.bind(this) }
            >
            View as { this.displayOtherDemoType() }
            </a>
      </nav>
    );
  }
}

const mapStateToProps = (state) => (
  { demoType: state.demoType }
);

const mapDispatchToProps = (dispatch) => (
  {
    handleDemoToggle: (demoType) => {
      dispatch(actions.toggleDemoType(demoType));
    },

    handleHttpRequests: (demoType) => {
      const callback = (error, data) => {
        if (error) {
          return 'Server Could Not load teacher information ${error}';
        }
        dispatch(actions.receiveCourses(data.courses));
        // we dont need this but I thought going back to home would be best practice
        dispatch(actions.goHome(true));
      };

      if (demoType === 'teacher') {
        requestMethods.loadTeacherData(2, callback);
      } else {
        requestMethods.loadStudentData(1, callback);
      }
    },
  }
);

Nav.propTypes = {
  demoType: PropTypes.string,
  handleDemoToggle: PropTypes.func,
  handleHttpRequests: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
