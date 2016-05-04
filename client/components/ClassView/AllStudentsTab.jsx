import React from 'react';
import actions from '../../actions/index.js';
import { connect } from 'react-redux';

class AllStudentsTab extends React.Component {

  displayAllStudents() {
    return this.props.students.map((student) => (
      <div key={student.id} className="card" onClick={ () => this.props.handleStudent(student)}>
        <div key="studentCardBlock" className="card-block">
          <h4 key="studentCardHeader"className="card-title">{student.name}</h4>
          <p key="studentDescription" >someInfoabouthisstudent</p>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="container">
        {this.displayAllStudents()}
      </div>
    );
  }
}


const mapStateToProps = (state) => (
  { students: state.currentCourse.students }
);

// when student is clicked update that student to current student in store
// switch tabview in store to view that student's info
const mapDispatchToProps = (dispatch) => (
  {
    handleStudent: (student) => {
      dispatch(actions.viewStudent(student));
      dispatch(actions.switchTabs('Student'));
    },
  }
);

AllStudentsTab.propTypes = {
  handleStudent: React.PropTypes.func,
  students: React.PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStudentsTab);
