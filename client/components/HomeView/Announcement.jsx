import React, { PropTypes } from 'react';

const Announcement = (props) => (
  <div className="announcement">
    <div className="announcement-label">Announcement</div>
    <h4>{ props.content.title }</h4>
    <p>{ props.content.body }</p>
  </div>
);

Announcement.propTypes = {
  content: PropTypes.object,
};

export default Announcement;
