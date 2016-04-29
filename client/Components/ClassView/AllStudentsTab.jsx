import React from 'react';

const StudentsTab = ({ students }) => {
  let allStudents = students.map((student) => (
   <div>{student.name}</div>
  ));

  return (
    <div className="row">
      {allStudents}
    </div>
  );
};

export default StudentsTab;
