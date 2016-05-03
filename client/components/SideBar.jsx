import React from 'react';

const SideBar = ({ courses, handleClass, handleHome }) => {
  let classes = courses.map((course) => (
   <div key={course.id} onClick={() => (handleClass(course)) }>{course.name}</div>
  ));

  return (
    <div className="col-md-3 container">
      <div className="home-button" onClick={ () => (handleHome()) }>Home</div>
      {classes}
    </div>
  );
};

SideBar.propTypes = {
  courses: React.PropTypes.array,
  handleClass: React.PropTypes.func,
  handleHome: React.PropTypes.func,
};

export default SideBar;
