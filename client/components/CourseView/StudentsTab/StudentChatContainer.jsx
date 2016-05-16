import React, { Component, PropTypes } from 'react';
import actions from '../../../actions/index.js';
import { connect } from 'react-redux';
import socket from '../../../utils/socket.js';

class StudentChatContainer extends Component {
  constructor(props) {
    super(props);
    // open a socket connection and emit that the conversation was started
    const teacherId = 5;
    socket.emit('loadMessages', teacherId, this.props.displayedStudent.id);

    /* this code throws an error right now because it's trying to map an empty object */

    // socket.on('loadMessages', (messages) => (messages.map(message) => (
    //   this.props.addMessage(message);
    // )));

    // add a socket listener for new messages from this student
    socket.on('newMessage', (message) => {
      this.props.addMessage(message, this.props.displayedStudent.id);
    });
  }

  componentWillUnmount() {
    // close the socket connection and any listeners
    const teacherId = 5;
    socket.emit('disconnect', teacherId, this.props.displayedStudent.id, function(data) {
      console.log(data);
    });
  }

  sendMessage(message) {
    socket.emit('newMessage', message);
    this.props.addMessage(message);
  }

  render() {
    const displayMessages = this.props.messages[this.props.displayedStudent.id].map((message) => (
      <div>
        <h6>{message.author}</h6>
        <p>{message.body}</p>
      </div>
    ));

    return (
      <div>
        <button
          type="button"
          className="btn btn-small btn-danger back"
          onClick={ this.props.handleBackButton }
        >
          Close
        </button>
        <h5>Conversation between you and {this.props.displayedStudent.name}</h5>
        {displayMessages}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    displayedStudent: state.displayedStudent,
    messages: state.messages,
  }
);

// go back to all students when back is pressed
const mapDispatchToProps = (dispatch) => (
  {
    handleBackButton: () => {
      dispatch(actions.switchTabs('Students'));
    },
    addMessage: (message, id) => {
      dispatch(actions.addMessage(message, id));
    },
  }
);

StudentChatContainer.propTypes = {
  displayedStudent: PropTypes.object,
  messages: PropTypes.object,
  handleBackButton: PropTypes.func,
  addMessage: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentChatContainer);
