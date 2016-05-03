import React from 'react';

const AllStudentsTab = ({ students, handleStudent }) => {
  const allStudents = students.map((student) => (
    <div key={student.id} className="card" onClick={ () => handleStudent(student)}>
      <div key="studentCardBlock" className="card-block">
        <h4 key="studentCardHeader"className="card-title">{student.name}</h4>
        <p key="studentDescription" >someInfoabouthisstudent</p>
      </div>
   </div>
  ));

  return (
    <div className="container">
      {allStudents}
    </div>
  );
};

AllStudentsTab.propTypes = {
  students: React.PropTypes.array,
  handleStudent: React.PropTypes.func,
};

export default AllStudentsTab;
