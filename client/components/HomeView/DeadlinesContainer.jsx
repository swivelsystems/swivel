import React, { PropTypes } from 'react';
import Deadline from './Deadline.jsx';
import { connect } from 'react-redux';

const DeadlinesContainer = (props) => (
    <div className="deadlines-container">
      <h4>Upcoming Deadlines</h4>
      <hr />
      { props.courses.map((course) => (
        course.assignments.map((assignment) => (
          <Deadline assignment={assignment} course={course} />
        ))
      ))}
    </div>
);

const mapStateToProps = (state) => ({
  courses: state.courses,
});

DeadlinesContainer.propTypes = {
  courses: PropTypes.array,
};

export default connect(
  mapStateToProps
)(DeadlinesContainer);
