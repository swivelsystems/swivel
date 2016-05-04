import React from 'react';
import actions from '../../actions/index.js';
import { connect } from 'react-redux';

class AllStudentsTab extends React.Component {

  handleAllStudents() {
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
        {this.handleAllStudents()}
      </div>
    );
  }
}


const mapStateToProps = (state) => (
  { students: state.currentCourse.students }
);

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
