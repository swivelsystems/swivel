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
    const message = { timestamp: Date.now(), body: this.refs.messageBody.value, author: 'Bonnie Lohman' };
    sendMessage(this.props.currentUser, this.otherUser, message, this.props.addMessage);
    this.displayMessages();
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
        {this.displayBackButton()}

        <h5>Your Conversation with {this.props.displayedStudent.name}</h5>
        {this.displayMessages()}

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
