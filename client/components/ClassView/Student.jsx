import React from 'react';
import actions from '../../actions/index.js';
import { connect } from 'react-redux';

const StudentTab = ({}) => (
    <div className="row">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={ () => this.props.handleBackButton() }
      >
        Back
      </button>
      {this.props.currentStudent.name}
    </div>
);

StudentTab.propTypes = {
  student: React.PropTypes.object,
  handleBackButton: React.PropTypes.func,
};

const mapStateToProps = (state) => (
  { currentCourse: state.currentCourse }
);

const mapDispatchToProps = (dispatch) => (
  {
    handleBackButton: (student) => {
      dispatch(actions.switchTabs('Students'));
      dispatch(actions.viewStudent(student));
    },
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentTab);

