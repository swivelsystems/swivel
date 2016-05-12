import React, { PropTypes } from 'react';

const Announcement = (props) => (
  <div className="announcement">
    <h5>{ props.content.title }</h5>
    <p>{ props.content.body }</p>
  </div>
);

Announcement.propTypes = {
  content: PropTypes.object,
};

export default Announcement;
