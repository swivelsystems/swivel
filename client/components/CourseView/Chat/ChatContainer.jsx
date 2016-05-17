import React, { Component, PropTypes } from 'react';
import actions from '../../../actions/index.js';
import { connect } from 'react-redux';
import { getPreviousMessages, listenForNewMessages, disconnect, sendMessage } from './utils/chatSockets.js';

class ChatContainer extends Component {
  constructor(props) {
    super(props);

    // request chat history and listen for new messages
    if (this.props.currentUser.type === 'teacher') {
      this.props.otherUser = { id: this.props.displayedStudent.id, type: 'student' };
    }
    getPreviousMessages(this.props.currentUser, this.props.otherUser, this.props.addMessage);
    listenForNewMessages(this.props.otherUser, this.props.addMessage);
  }

  componentWillUnmount() {
    // close the socket connection and any listeners
    disconnect((data) => (console.log(data)));
  }

  handleSendMessage(messageBody) {
    const message = { timestamp: Date.now(), body: messageBody, author: 'Teacher Name' };
    sendMessage(this.props.currentUser, this.props.otherUser, message, this.props.addMessage);
  }

  render() {
    const displayMessages = this.props.messages[this.props.otherUser.id].map((message) => (
      <div>
        <h5>{message.body}</h5>
        <p>{message.author} · {message.timestamp}</p>
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

ChatContainer.propTypes = {
  displayedStudent: PropTypes.object,
  messages: PropTypes.object,
  handleBackButton: PropTypes.func,
  addMessage: PropTypes.func,
  currentUser: PropTypes.object,
  otherUser: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatContainer);
