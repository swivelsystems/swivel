import React from 'react';
import actions from '../../actions/index.js';
import { connect } from 'react-redux';

class StudentTab extends React.Component {
  // when a single student is clicked
  // get the current student and display their info
  render() {
    return (
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
  }
}


const mapStateToProps = (state) => (
  {
    currentStudent: state.currentStudent,
  }
);

// go back to all students when back is pressed
const mapDispatchToProps = (dispatch) => (
  {
    handleBackButton: () => {
      dispatch(actions.switchTabs('Students'));
    },
  }
);

StudentTab.propTypes = {
  currentStudent: React.PropTypes.object,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentTab);

