import React, { Component, PropTypes } from 'react';
import actions from '../../../actions/index.js';
import { connect } from 'react-redux';

class AllStudentsTab extends Component {

  displayAllStudents() {
    return this.props.students.map((student) => (
      <div
        key={student.id}
        className="card card-clickable"
        onClick={ () => this.props.handleClickedStudent(student)}
      >
        <div key="studentCardBlock" className="card-block">
          <h4 key="studentCardHeader" className="card-title">{student.name}</h4>
          <p key="studentDescription" className="card-text">Pitchfork tousled meditation meggings shoreditch, direct trade taxidermy DIY kinfolk viral squid green juice twee selvage polaroid. Celiac biodiesel etsy leggings normcore kogi.</p>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div>
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
