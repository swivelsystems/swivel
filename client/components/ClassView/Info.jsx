import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions/index.js';
import AllStudentsTab from './AllStudentsTab.jsx';
import AssignmentsTab from './AssignmentsTab.jsx';
import Student from './Student.jsx';

class Info extends React.Component {

  // depending on which tab is clicked, render Assignments, AllStudents, or Student component
  handleTabs() {
    if (this.props.tabView === 'Students') {
      return <AllStudentsTab />;
    } else if (this.props.tabView === 'Student') {
      return <Student />;
    }
    return <AssignmentsTab />;
  }

  render() {
    return (
      <div className="row info container">
        <ul className="nav nav-tabs">
          <li className="nav-item" onClick={ () => this.props.handleTab('Assignments') }>
            <a className="nav-link" role="tab">Assignments</a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              role="tab"
              onClick={ () => this.props.handleTab('Students') }
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
