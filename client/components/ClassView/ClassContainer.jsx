import React from 'react';
import Chart from './Chart.jsx';
import Info from './Info.jsx';

const ClassContainer = ({ }) => (
  <div className="col-md-9 container">
    I am in ClassContainer.
    <Chart />
    <Info />
  </div>
);

export default ClassContainer;

