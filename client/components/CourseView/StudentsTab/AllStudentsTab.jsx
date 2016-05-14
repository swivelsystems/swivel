import React, { Component, PropTypes } from 'react';
import actions from '../../../actions/index.js';
import { connect } from 'react-redux';

class AllStudentsTab extends Component {

  displayAllStudents() {
    return this.props.students.map((student, index) => {
      const avatarGender = index % 2 === 0 ? 'men' : 'women';
      return (
        <div
          key={student.id}
          className="col-md-4"
        >
          <div key="studentCardBlock" className="student-card row card-block">
            <div className="student-card-avatar-container col-md-12">
              <img className="student-card-avatar-container-img" role="presentation" src={`https://randomuser.me/api/portraits/${avatarGender}/${index}.jpg`} />
            </div>
            <div className="col-md-12 student-card-info-container">
              <h5 key="studentCardHeader" className="card-title">{student.name}</h5>
              <p>Year {student.year} · GPA {student.GPA}</p>
            </div>
            <a onClick={ () => this.props.handleClickedStudent(student)} className="btn btn-outline" >Chat</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="tab-content-container">
        {this.displayAllStudents()}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  { students: state.displayedCourse.students }
);

// when student is clicked update that student to current student in store
// switch tabview in store to view that student's info
const mapDispatchToProps = (dispatch) => (
  {
    handleClickedStudent: (student) => {
      dispatch(actions.displayStudent(student));
      dispatch(actions.switchTabs('Student'));
    },
  }
);

AllStudentsTab.propTypes = {
  handleClickedStudent: PropTypes.func,
  students: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStudentsTab);
