import React, { Component, PropTypes } from 'react';
import actions from '../../../actions/index.js';
import { connect } from 'react-redux';

class StudentChatContainer extends Component {
  // when a single student is clicked
  // get the current student and display their info
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-secondary back"
          onClick={ this.props.handleBackButton }
        >
          Back
        </button>
        {this.props.displayedStudent.name}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    displayedStudent: state.displayedStudent,
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

StudentChatContainer.propTypes = {
  displayedStudent: PropTypes.object,
  handleBackButton: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentChatContainer);
