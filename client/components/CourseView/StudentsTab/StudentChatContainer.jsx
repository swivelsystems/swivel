import React, { Component, PropTypes } from 'react';
import actions from '../../../actions/index.js';
import { connect } from 'react-redux';
import socket from '../../../utils/socket.js';

class StudentChatContainer extends Component {
  constructor(props) {
    super(props);
    // open a socket connection and emit that the conversation was started
    const teacherId = 5;
    socket.emit('openChat', teacherId, this.props.displayedStudent.id, function(data) {
      console.log(data); // render chat bubbles
      // get the messages and update the ui with them
    });
    // add a socket listener for new messages from this student
    socket.on('newMessage', function(data) {
      console.log(data); // update the UI with the new message
    });
  }

  componentWillUnmount() {
    // close the socket connection and any listeners
    const teacherId = 5;
    socket.emit('closeChat', teacherId, this.props.displayedStudent.id, function(data) {
      console.log(data);
    });
  }
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
