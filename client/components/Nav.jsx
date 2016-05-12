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
            <a href="#">
              <div className="navbar-logo"></div>
              <div className="navbar-brand">
                Swivel
              </div>
            </a>
            <div className="navbar-links">
              <a className="navbar-link" href="#">About</a>
              <a className="navbar-link" href="#">Services</a>
              <a className="navbar-link" href="#">Pricing</a>
              <a className="navbar-link" href="#">Contact</a>
              <a
                className="btn btn-nav"
                onClick={ this.handleClick.bind(this) }
                >
                View { this.displayOtherDemoType() } Demo
              </a>
            </div>
          </div>
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
        requestMethods.loadTeacherData(callback);
      } else {
        requestMethods.loadStudentData(callback);
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
