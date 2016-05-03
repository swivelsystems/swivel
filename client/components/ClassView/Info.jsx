import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions/index.js';
import AllStudentsTab from './AllStudentsTab.jsx';
import AssignmentsTab from './AssignmentsTab.jsx';
import Student from './Student.jsx';
import Assignment from './Assignment.jsx';


class Info extends React.Component {

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
      <div className="info">
        <ul className="nav nav-tabs">
          <li
            className="nav-item assignments-tab"
            onClick={ () => this.props.handleTab('Assignments') }
          >
            <a className="nav-link" role="tab">Assignments</a>
          </li>
          <li
            className="nav-item students-tab"
            onClick={ () => this.props.handleTab('Students') }
          >
            <a
              className="nav-link"
              role="tab"
            >
            Students</a>
          </li>
        </ul>
        <div className="tab-content">
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

Info.propTypes = {
  tabView: React.PropTypes.string,
  handleTab: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
