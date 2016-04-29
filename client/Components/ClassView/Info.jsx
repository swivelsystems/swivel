import React from 'react';
import StudentsTab from './AllStudentsTab.jsx';
import AssignmentsTab from './AssignmentsTab.jsx';

class Info extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tabView: 'students',
      currentStudent: '',
    };
  }

  handleAllStudentsTab() {
    return this.props.currentCourse.students.map((student) => (
       <div onClick={ () => {this.handleStudent(student);}} >{student}</div>
    ));
  }

  handleStudentTab(student) {
    console.log('handling Student');
    this.setState({ currentStudent: student });
    this.setState({ tabView: 'student' });
  }

  handleAssignmentsTab() {
    const view = <div>{this.state.currentStudent}</div>
    this.setState({tabView: view});
  }


  render() {
    return (
      <div className="row info">
        <ul className="nav nav-tabs">
          <li className="nav-item" onClick={ () => handleAssignmentsTab() }>
            <a className="nav-link" role="tab">Assignments</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" role="tab">Students</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" role="tab">Student</a>
          </li>
        </ul>
        {this.state.tabView}
      </div>
    );
  }
}

export default Info;
