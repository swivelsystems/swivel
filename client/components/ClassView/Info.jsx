import React from 'react';
import AllStudentsTab from './AllStudentsTab.jsx';
import AssignmentsTab from './AssignmentsTab.jsx';
import Student from './Student.jsx';

class Info extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tabView: 'Assignments',
      currentStudent: '',
    };
  }

  // to check if another class was chosen
  // and reset tabview to be assignments
  componentWillReceiveProps(nextProps) {
    if (nextProps.courseChanged) {
      this.setState({
        tabView: 'Assignments',
      });
    }
  }

  handleAllStudentsTab() {
    this.setState({ tabView: 'Students' });
  }

  handleStudent(student) {
    this.setState({ tabView: 'Student' });
    this.setState({ currentStudent: student });
  }

  handleAssignmentsTab() {
    this.setState({ tabView: 'Assignments' });
  }

  handleBackButton() {
    this.setState({ tabView: 'Students' });
  }


  handleTabs() {
    let view;
    if (this.state.tabView === 'Assignments') {
      view = <AssignmentsTab assignments={ this.props.currentCourse.assignments } />;
    } else if (this.state.tabView === 'Students') {
      view =
        (<AllStudentsTab
          students={ this.props.currentCourse.students }
          handleStudent={ this.handleStudent.bind(this) }
        />);
    } else if (this.state.tabView === 'Student') {
      view =
        (<Student
          student={ this.state.currentStudent }
          handleBackButton = { this.handleBackButton.bind(this) }
        />);
    }
    return view;
  }

  render() {
    return (
      <div className="row info container">
        <ul className="nav nav-tabs">
          <li className="nav-item" onClick={ () => this.handleAssignmentsTab() }>
            <a className="nav-link" role="tab">Assignments</a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              role="tab"
              onClick={ () => this.handleAllStudentsTab() }
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

Info.propTypes = {
  currentCourse: React.PropTypes.object,

};

export default Info;
