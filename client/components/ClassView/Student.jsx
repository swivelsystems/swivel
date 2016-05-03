import React from 'react';

const StudentTab = ({ student, handleBackButton }) => (
    <div className="row">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={ () => handleBackButton() }
      >
        Back
      </button>
      {student.name}
    </div>
);

StudentTab.propTypes = {
  student: React.PropTypes.object,
  handleBackButton: React.PropTypes.func,
};

export default StudentTab;
