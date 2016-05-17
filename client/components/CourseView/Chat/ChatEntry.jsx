import React, { PropTypes } from 'react';

const ChatEntry = (props) => (
  <div>
    <h5>{props.message.body}</h5>
    <p>{props.message.author} · {props.message.timestamp}</p>
  </div>
);

ChatEntry.propTypes = {
  message: PropTypes.object,
};

export default ChatEntry;
