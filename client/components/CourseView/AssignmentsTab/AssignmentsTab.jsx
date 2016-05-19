import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class AssignmentsTab extends Component {

  displayAssignments() {
    return this.props.assignments.map((assignment) => (
      <div
        key={assignment.id}
        className="card assignment"
      >
        <h4 className="assignment-title">Assignment: {assignment.name}</h4>
        <p>{assignment.description}</p>
     </div>
    ));
  }

  render() {
    return (
      <div>
        {this.displayAssignments()}
      </div>
    );
  }
}

// get assignments everytime course is changed in store
// for most up to date assignments
const mapStateToProps = (state) => (
  { assignments: state.displayedCourse.assignments }
);

AssignmentsTab.propTypes = {
  assignments: PropTypes.array,
};

export default connect(
  mapStateToProps
)(AssignmentsTab);
