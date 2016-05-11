import React from 'react';
import LineChart from './LineChart.jsx';
import DoughnutChart from './DoughnutChart.jsx';
import Info from './Info.jsx';
import BarChart from './BarChart.jsx';

const ClassContainer = () => (
  <div className="container-fluid">
    <div>
        <h4>Course Health</h4>
        <hr />
        <DoughnutChart />
    </div>
    <Info />
  </div>
);

export default ClassContainer;
