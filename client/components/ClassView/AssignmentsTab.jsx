import React from 'react';
import { connect } from 'react-redux';

class AssignmentsTab extends React.Component {


  displayAssignments() {
    console.log('currentcourse', this.props.currentCourse);
    return this.props.currentCourse.assignments.map((assignment) => (
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">{assignment}</h4>
          <p>someInfoabouthisassignemnt</p>
        </div>
     </div>
    ));
  }

  render() {
    console.log('rendering in AssignmentsTab');
    return (
      <div className="container">
        {this.displayAssignments()}
      </div>
    );
  }
}

AssignmentsTab.propTypes = {
  currentCourse: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return { currentCourse: state.currentCourse };
};

export default connect(
  mapStateToProps
)(AssignmentsTab);
