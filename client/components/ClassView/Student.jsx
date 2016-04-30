import React from 'react';

const StudentTab = ({ student, handleBackButton }) => {
  return (
    <div className="row">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={ () => handleBackButton() }
      >
        Back
      </button>
      {student}
    </div>
  );
};

export default StudentTab;
