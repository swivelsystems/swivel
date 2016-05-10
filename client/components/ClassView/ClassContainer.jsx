import React from 'react';
import LineChart from './LineChart.jsx';
import DoughnutChart from './DoughnutChart.jsx';
import Info from './Info.jsx';
import BarChart from './BarChart.jsx';

const ClassContainer = () => (
  <div className="course card">
    <DoughnutChart />
    <Info />
  </div>
);

export default ClassContainer;

