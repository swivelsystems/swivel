import React from 'react';
import TimeLine from './homeView/Timeline.jsx';
import ClassContainer from './classView/ClassContainer.jsx';
import HomeContainer from './HomeView/HomeContainer.jsx';

const Main = ({ isHome, currentCourse, courseChanged }) => {
  let view;
  if (isHome) {
    view = (
      <HomeContainer />
    );
  } else {
    view = (
      <ClassContainer isHome={isHome} currentCourse={currentCourse} courseChanged={courseChanged} />
    );
  }
  return view;
};

Main.propTypes = {
  isHome: React.PropTypes.bool,
  currentCourse: React.PropTypes.object,
  courseChanged: React.PropTypes.bool,
};

export default Main;
