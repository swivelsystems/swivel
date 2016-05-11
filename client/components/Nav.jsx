import React, { Component, PropTypes } from 'react';
import actions from '../actions/index.js';
import { connect } from 'react-redux';

class Nav extends Component {
  handleClick() {
    let type = '';
    if (this.props.demoType === 'student') {
      type = 'teacher';
    } else {
      type = 'student';
    }
    this.props.handleDemoToggle(type);
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
  }
);

Nav.propTypes = {
  demoType: PropTypes.string,
  handleDemoToggle: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
