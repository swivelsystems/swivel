import React, { Component, PropTypes } from 'react';
import actions from '../../../actions/index.js';
import { connect } from 'react-redux';
import { getPreviousMessages, listenForNewMessages, disconnect, sendMessage }
       from './utils/chatSockets.js';
import ChatEntry from './ChatEntry.jsx';

class ChatContainer extends Component {
  constructor(props) {
    super(props);

    // specify the user the current user is chatting with,
    // get chat history, and listen for incoming messages
    this.otherUser = this.props.otherUser
      || { id: this.props.displayedStudent.id, type: 'student' };
    getPreviousMessages(this.props.currentUser, this.otherUser, this.props.addMessage);
    listenForNewMessages(this.otherUser, this.props.addMessage);

    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  componentWillUnmount() {
    disconnect();
  }

  handleSendMessage(e) {
    e.preventDefault();
    if (this.refs.messageBody.value === '') { return; } // prevent empty messages
    const message = { timestamp: new Date().toUTCString(), body: this.refs.messageBody.value, author: this.props.currentUser.name };
    sendMessage(this.props.currentUser, this.otherUser, message, this.props.addMessage);
    this.refs.messageBody.value = '';
    this.displayMessages();
  }

  displayBackButton() {
    if (this.props.currentUser.type === 'teacher') {
      return (<button type="button"
        className="btn btn-small btn-default back"
        onClick={ this.props.handleBackButton }
      >
        Go Back
      </button>);
    }
    return '';
  }

  displayMessages() {
    if (!this.props.messages[this.otherUser.id]) {
      return <p>There are no messages to display. Send a message!</p>;
    }
    return this.props.messages[this.otherUser.id].map((message) => (
      <ChatEntry message={message} />
    ));
  }

  render() {
    return (
      <div className="chat-container">
        {this.displayBackButton()}

        <h4>Your Conversation with {this.props.displayedStudent.name
            || this.props.otherUser.name }</h4>
          { this.props.displayedStudent && this.props.displayedStudent.name ? <hr /> : '' }
        <div className="chat-container-messages-container">
          {this.displayMessages()}
        </div>

        <form className="chat-container-form form-inline">
          <div className="chat-container-form-inputs form-group">
            <input type="text"
              ref="messageBody"
              className="chat-container-form-inputs-message form-control"
              placeholder="Write a message" id="msg"
              autoComplete="off"
            />
            <input type="submit"
              onClick={ this.handleSendMessage }
              name="send"
              id="send"
              value="Send"
              className="chat-container-form-inputs-send btn btn-success"
            />
          </div>
        </form>
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
    handleBackButton: () => (
      dispatch(actions.switchTabs('Students'))
    ),
    addMessage: (message, id) => (
      dispatch(actions.addMessage(message, id))
    ),
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
