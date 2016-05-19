import React, { PropTypes } from 'react';

const ChatEntry = (props) => (
  <div className="chat-entry">
    <p className="chat-entry-message-body">{props.message.body}</p>
    <p className="chat-entry-message-metadata">{props.message.author} · { props.message.timestamp }</p>
  </div>
);

ChatEntry.propTypes = {
  message: PropTypes.object,
};

export default ChatEntry;
