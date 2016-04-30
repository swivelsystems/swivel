import React from 'react';

const AssignmentsTab = ({ assignments }) => {
  const coursework = assignments.map((assignment) => (
    <div className="card">
      <div className="card-block">
        <h4 className="card-title">{assignment}</h4>
        <p>someInfoabouthisassignemnt</p>
      </div>
   </div>
  ));

  return (
    <div className="container">
      {coursework}
    </div>
  );
};

AssignmentsTab.propTypes = {
  assignments: React.PropTypes.array,
};

export default AssignmentsTab;
