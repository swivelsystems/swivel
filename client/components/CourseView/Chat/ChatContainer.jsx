import React, { Component, PropTypes } from 'react';
import actions from '../../../actions/index.js';
import { connect } from 'react-redux';
import { getPreviousMessages, listenForNewMessages, disconnect, sendMessage } from './utils/chatSockets.js';
import ChatEntry from './ChatEntry.jsx';

class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.otherUser = this.props.otherUser || {};
    // request chat history and listen for new messages
    if (this.props.currentUser.type === 'teacher') {
      this.otherUser = { id: this.props.displayedStudent.id, type: 'student' };
    }
    getPreviousMessages(this.props.currentUser, this.otherUser, this.props.addMessage);
    listenForNewMessages(this.otherUser, this.props.addMessage);

    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  componentWillUnmount() {
    // close the socket connection and any listeners
    disconnect((data) => (console.log(data)));
  }

  handleSendMessage() {
    const message = { timestamp: Date.now(), body: this.refs.messageBody.value, author: 'Lizzy Smells' };
    sendMessage(this.props.currentUser, this.otherUser, message, this.props.addMessage);
  }

  displayBackButton() {
    if (this.props.currentUser.type === 'teacher') {
      return (<button type="button"
        className="btn btn-small btn-danger back"
        onClick={ this.props.handleBackButton }
      >
        Close
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
      <div>
        { this.displayBackButton() }
        <h5>Conversation between you and {this.props.displayedStudent.name}</h5>
        { this.displayMessages() }
        <form id="chatForm" className="form-inline">
          <div className="form-group">
            <input type="text"
              ref="messageBody"
              className="form-control input-lg"
              placeholder="Your message" id="msg"
            />
          </div>
          <input type="submit"
            onClick={ this.handleSendMessage }
            name="send"
            id="send"
            value="Send"
            className="btn btn-success btn-lg"
          />
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
