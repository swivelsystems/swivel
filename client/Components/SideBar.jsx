import React from 'react';

class SideBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let courses = this.props.courses.map((course) => (
       <div onClick={() => (this.props.handleClass(course)) }>{course.name}</div>
    ));

    return (
      <div className="col-md-3">
        <div onClick={ () => (this.props.handleHome(true)) }></div>
        {courses}
      </div>
    );
  }

}

export default SideBar;
