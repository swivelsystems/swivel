import React from 'react';
import TimeLine from './homeView/Timeline.jsx';

const Main = ({ isHome, currentCourse, courseChanged }) => {
  <div className="col-md-9 container">
    I am in Main.
    <Chart />
    <Info currentCourse={ currentCourse } courseChanged={ courseChanged } />
  </div>
};