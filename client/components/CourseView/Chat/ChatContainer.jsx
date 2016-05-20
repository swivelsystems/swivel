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
    let otherUser = { id: this.props.displayedStudent.id, type: 'student' };
    if (this.props.demoType === 'student') {
      otherUser = { id: this.props.displayedCourse.teacherId, name: this.props.displayedCourse.teacherName, type: 'teacher' };
    }
    this.props.updateOtherUser(otherUser);

    getPreviousMessages(this.props.user, this.props.otherUser, this.props.addMessage);
    listenForNewMessages(this.props.otherUser, this.props.addMessage);

    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  componentWillUnmount() {
    disconnect();
  }

  handleSendMessage(e) {
    e.preventDefault();
    if (this.refs.messageBody.value === '') { return; } // prevent empty messages
    const message = { timestamp: new Date().toUTCString(), body: this.refs.messageBody.value, author: this.props.user.name };
    sendMessage(this.props.user, this.props.otherUser, message, this.props.addMessage);
    this.refs.messageBody.value = '';
  }

  displayBackButton() {
    if (this.props.demoType === 'teacher') {
      return (<button type="button"
        className="btn btn-small btn-link chat-container-back-button"
        onClick={ this.props.handleBackButton }
      >
        Go Back
      </button>);
    }
    return '';
  }

  displayMessages() {
    if (!this.props.messages[this.props.otherUser.id] || !this.props.displayedCourse) {
      return <p>There are no messages to display. Send a message!</p>;
    }
    return this.props.messages[this.props.otherUser.id].map((message) => (
      <ChatEntry key={message.timestamp} message={message} />
    ));
  }

  render() {
    console.log('calling render method');
    return (
      <div className="chat-container">
        {this.displayBackButton()}

        <h4>Chat</h4>
          { this.props.demoType === 'student' ? <hr /> : '' }
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
    displayedCourse: state.displayedCourse,
    updateCourse: state.updateCourse,
    messages: state.messages,
    user: state.user,
    demoType: state.demoType,
    otherUser: state.otherUser,
  }
);

// go back to all students when back is pressed
const mapDispatchToProps = (dispatch) => (
  {
    handleBackButton: () => (
      dispatch(actions.switchTabs('Students'))
    ),
    addMessage: (message, id) => {
      dispatch(actions.addMessage(message, id));
    },
    updateCourse: (displayedCourse) => {
      dispatch(actions.clearCourse());
      dispatch(actions.displayCourse(displayedCourse));
    },
    updateOtherUser: (user) => {
      dispatch(actions.updateOtherUser(user));
    },
  }
);

ChatContainer.propTypes = {
  displayedStudent: PropTypes.object,
  messages: PropTypes.object,
  handleBackButton: PropTypes.func,
  addMessage: PropTypes.func,
  user: PropTypes.object,
  otherUser: PropTypes.object,
  demoType: PropTypes.string,
  displayedCourse: PropTypes.object,
  updateOtherUser: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatContainer);
