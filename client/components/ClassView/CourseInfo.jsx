import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions/index.js';
import AllStudentsTab from './AllStudentsTab.jsx';
import AssignmentsTab from './AssignmentsTab.jsx';
import Student from './Student.jsx';
import Assignment from './Assignment.jsx';


class CourseInfo extends Component {
  // depending on which tab is clicked, render Assignments, AllStudents, or Student component
  handleTabs() {
    if (this.props.tabView === 'Students') {
      return <AllStudentsTab />;
    } else if (this.props.tabView === 'Student') {
      return <Student />;
    } else if (this.props.tabView === 'Assignment') {
      return <Assignment />;
    }
    return <AssignmentsTab />;
  }

  render() {
    return (
      <div className="course-info">
        <ul className="course-info-nav nav nav-tabs">
          <li
            role="presentation"
            className="course-info-nav-tab assignments-tab"
            onClick={ () => this.props.handleTab('Assignments') }
          >
            <a>View Assignments</a>
          </li>
          <li
            role="presentation"
            className="course-info-nav-tab students-tab"
            onClick={ () => this.props.handleTab('Students') }
          >
            <a>View Students</a>
          </li>
        </ul>
        <div className="course-info-content">
          { this.handleTabs() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  { tabView: state.tabView }
);

const mapDispatchToProps = (dispatch) => (
  {
    handleTab: (tab) => {
      dispatch(actions.switchTabs(tab));
    },
  }
);

CourseInfo.propTypes = {
  tabView: PropTypes.string,
  handleTab: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseInfo);
