import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions/index.js';
import AllStudentsTab from './StudentsTab/AllStudentsTab.jsx';
import AssignmentsTab from './AssignmentsTab/AssignmentsTab.jsx';
import ChatContainer from './Chat/ChatContainer.jsx';
import Assignment from './AssignmentsTab/Assignment.jsx';
import DoughnutChart from './Charts/DoughnutChart.jsx';
import BarChart from './Charts/BarChart.jsx';

class CourseInfo extends Component {

  componentDidUpdate() {
    this.handleOtherUserUpdate();
  }
  // depending on which tab is clicked, render Assignments, AllStudents, or Student component
  handleTabs() {
    switch (this.props.tabView) {
      case 'Students':
        return <AllStudentsTab />;
      case 'Student':
        return <ChatContainer />;
      case 'Assignment':
        return <Assignment />;
      default:
        return <AssignmentsTab />;
    }
  }

  handleCharts() {
    if (this.props.demoType === 'student' || this.props.tabView === 'Students') {
      return <DoughnutChart />;
    }
    return <BarChart />;
  }

  displayStudentsTab() {
    let tab = '';
    if (this.props.demoType === 'teacher') {
      tab = (
        <li
          role="presentation"
          className="course-info-nav-tab students-tab"
          onClick={ () => this.props.handleTab('Students') }
        >
          <a>View Students</a>
        </li>
      );
    }
    return tab;
  }

  handleOtherUserUpdate() {
    const otherUser = { id: this.props.displayedCourse.teacherId, name: this.props.displayedCourse.teacherName, type: 'teacher' };
    this.props.updateOtherUser(otherUser);
  }

  loadStudentOrTeacherView() {
    if (this.props.demoType === 'teacher') {
      return (
        <div>
          <ul className="course-info-nav nav nav-tabs">
            <li
              role="presentation"
              className="course-info-nav-tab assignments-tab"
              onClick={ () => this.props.handleTab('Assignments') }
            >
              <a>View Assignments</a>
            </li>
            { this.displayStudentsTab() }
          </ul>
          <div className="course-info-content">
            { this.handleTabs() }
          </div>
        </div>
      );
    }

    return (
      <div className="col-md-12">
        <div className="col-md-8">
          <h4>Your Assignments</h4>
          <hr />
          <div className="course-info-content">
            { this.handleTabs() }
          </div>
        </div>
        <div className="col-md-4">
          <ChatContainer />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <h4>Course Health</h4>
        <hr />
        <div className="course-info">
          <div>
            {this.handleCharts()}
          </div>
          {this.loadStudentOrTeacherView()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    tabView: state.tabView,
    demoType: state.demoType,
    displayedCourse: state.displayedCourse,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    handleTab: (tab) => {
      dispatch(actions.switchTabs(tab));
    },
    updateOtherUser: (user) => {
      dispatch(actions.updateOtherUser(user));
    },
  }
);

CourseInfo.propTypes = {
  tabView: PropTypes.string,
  handleTab: PropTypes.func,
  updateOtherUser: PropTypes.func,
  demoType: PropTypes.string,
  displayedCourse: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseInfo);
