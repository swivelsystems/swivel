import React, { PropTypes } from 'react';

const Deadline = (props) => (
  <div className="deadline">
    <p className="deadline-assignment-name">{ props.assignment.name }</p>
    <p className="deadline-date-and-course">
      Due {props.assignment.dueDate.slice(0, 10)} · {props.course.name}
    </p>
  </div>
);

Deadline.propTypes = {
  assignment: PropTypes.object,
  course: PropTypes.object,
};

export default Deadline;
