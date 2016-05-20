import React, { Component, PropTypes } from 'react';
import actions from '../actions/index.js';
import { connect } from 'react-redux';
import requestMethods from '../utils/requestMethods.js';
import socket from '../utils/socket.js';

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

  displayDemoButton() {
    if (this.props.page && this.props.page === 'landing') {
      return (<a className="btn btn-nav" href="#/demo">View Demo</a>);
    }
    const buttonText = this.props.demoType === 'teacher' ? 'View Student Demo' : 'View Teacher Demo';
    return (<a className="btn btn-nav" onClick={() => (this.handleClick())}>{buttonText}</a>);
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
              <a className="navbar-link" href="mailto:admin@swivelsystems.org">Contact</a>
              {this.displayDemoButton()}
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
      dispatch(actions.clearMessages());
      dispatch(actions.toggleDemoType(demoType));
    },

    handleHttpRequests: (demoType) => {
      dispatch(actions.goHome(true));
      const callback = (error, data) => {
        if (error) {
          return `Server Could Not load teacher information ${error}`;
        }
        const user = data.teacher || data.student;
        dispatch(actions.updateUser(user));
        dispatch(actions.receiveCourses(data.courses));
        socket.disconnect();
        const establishConnection = () => {
          socket.connect();
          socket.on('authenticate', () => {
            socket.emit('authenticated', user.name, user.id);
          });
        };
        establishConnection();
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
  page: PropTypes.string,
  handleDemoToggle: PropTypes.func,
  handleHttpRequests: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
