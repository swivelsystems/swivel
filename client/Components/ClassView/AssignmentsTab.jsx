import React from 'react';

const AssignmentsTab = ({ assignments }) => {
  let coursework = assignments.map((assignment) => (
   <div>{assignment}</div>
  ));

  return (
    <div className="row">
      {coursework}
    </div>
  );
};

export default AssignmentsTab;
