import React, { PropTypes } from 'react';
import Announcement from './Announcement.jsx';
import { connect } from 'react-redux';

const AnnouncementsContainer = (props) => (
    <div className="announcements-container">
      <h4>Announcements</h4>
      { props.courses.map((course) => (
        course.announcements.map((announcement) => (
          <Announcement content={announcement} />
        ))
      ))}
    </div>
);

const mapStateToProps = (state) => ({
  courses: state.courses,
});

AnnouncementsContainer.propTypes = {
  courses: PropTypes.array,
};

export default connect(
  mapStateToProps
)(AnnouncementsContainer);
