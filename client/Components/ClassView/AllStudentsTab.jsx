import React from 'react';

const AllStudentsTab = ({ students, handleStudent }) => {
  const allStudents = students.map((student) => (
    <div className="card" onClick={ () => handleStudent(student)}>
      <div className="card-block">
        <h4 className="card-title">{student}</h4>
        <p>someInfoabouthisstudent</p>
      </div>
   </div>
  ));

  return (
    <div className="container">
      {allStudents}
    </div>
  );
};

export default AllStudentsTab;
