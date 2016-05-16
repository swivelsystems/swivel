import React, { Component, PropTypes } from 'react';
import actions from '../../../actions/index.js';
import { connect } from 'react-redux';
import socket from '../../../utils/socket.js';

let messages = [{ author: 'Joel', body: 'Hey it is Joel' }, { author: 'Lizard', body: 'Tisk tisk' }];

class StudentChatContainer extends Component {
  constructor(props) {
    super(props);
    // open a socket connection and emit that the conversation was started
    const teacherId = 5;
    socket.emit('loadMessages', teacherId, this.props.displayedStudent.id);
    socket.on('loadMessages', (data) => (data.map(message) => {
      // update messages in state
    }));

    // add a socket listener for new messages from this student
    socket.on('newMessage', function(data) {
      // update messages in state
    });
  }

  componentWillUnmount() {
    // close the socket connection and any listeners
    const teacherId = 5;
    socket.emit('closeChat', teacherId, this.props.displayedStudent.id, function(data) {
      console.log(data);
    });
  }

  sendMessage(message) {
    socket.emit('newMessage', message);
    // update messages in state
  }

  render() {
    const displayMessages = messages.map((message) => (
      <div>
        <h6>{message.author}</h6>
        <p>{message.body}</p>
      </div>
    ));
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
        {displayMessages}
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
