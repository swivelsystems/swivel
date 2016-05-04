import React from 'react';
import { connect } from 'react-redux';

class AssignmentsTab extends React.Component {

  displayAssignments() {
    return this.props.assignments.map((assignment) => (
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">{assignment}</h4>
          <p>someInfoabouthisassignemnt</p>
        </div>
     </div>
    ));
  }

  render() {
    return (
      <div className="container">
        {this.displayAssignments()}
      </div>
    );
  }
}

// get assignments everytime course is changed in store
// for most up to date assignments
const mapStateToProps = (state) => (
  { assignments: state.currentCourse.assignments }
);
AssignmentsTab.propTypes = {
  currentCourse: React.PropTypes.object,
  assignments: React.PropTypes.array,
};

export default connect(
  mapStateToProps
)(AssignmentsTab);
