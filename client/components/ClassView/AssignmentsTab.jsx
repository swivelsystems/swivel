import React from 'react';
import actions from '../../actions/index.js';
import { connect } from 'react-redux';

class AssignmentsTab extends React.Component {

  displayAssignments() {
    return this.props.assignments.map((assignment) => (
      <div
        key={assignment.id}
        className="card"
        onClick={ () => this.props.handleAssignments(assignment)}
      >
        <div className="card-block">
          <h4 className="card-title">{assignment.name}</h4>
          <p>someInfoabouthisassignemnt</p>
        </div>
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
  { assignments: state.currentCourse.assignments }
);

const mapDispatchToProps = (dispatch) => (
  {
    handleAssignments: (assignment) => {
      dispatch(actions.viewAssignment(assignment));
      dispatch(actions.switchTabs('Assignment'));
    },
  }
);

AssignmentsTab.propTypes = {
  assignments: React.PropTypes.array,
  handleAssignments: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignmentsTab);
