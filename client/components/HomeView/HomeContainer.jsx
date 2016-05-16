import React from 'react';
import AnnouncementsContainer from './AnnouncementsContainer.jsx';
import DeadlinesContainer from './DeadlinesContainer.jsx';
import LineChart from './../CourseView/Charts/LineChart.jsx';

const HomeContainer = () => (
  <div className="home-container">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 home-container-chart">
          <h4>Attendance and Tardiness</h4>
          <hr />
          <LineChart />
        </div>
      </div>
      <div className="row home-container-announcements-deadlines">
        <div className="col-md-8">
          <AnnouncementsContainer />
        </div>
        <div className="col-md-4">
          <DeadlinesContainer />
        </div>
      </div>
    </div>
  </div>
);

export default HomeContainer;
