import React from 'react';
import DoughnutChart from './DoughnutChart.jsx';
import CourseInfo from './CourseInfo.jsx';

const CourseContainer = () => (
  <div className="container-fluid">
    <div>
        <h4>Course Health</h4>
        <hr />
        <DoughnutChart />
    </div>
    <CourseInfo />
  </div>
);

export default CourseContainer;
