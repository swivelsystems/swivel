import React from 'react';
import AnnouncementsContainer from './AnnouncementsContainer.jsx';

const HomeContainer = () => (
  <div className="home-container">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 chart-container">
          <h4>Chart</h4>
          <p>This is the chart placeholder it will live right here
              and look awesome. Oh, what a chart. What a great chart.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <AnnouncementsContainer />
        </div>
        <div className="col-md-4">
          <h4>Upcoming Deadlines</h4>
          <div className="card">
            This is an upcoming deadline.
          </div>
          <h4>Events</h4>
          <div className="card">
            This is an upcoming event.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomeContainer;
