import React, { Component } from 'react';
import ChartJS from 'chart.js';
import ReactDOM from 'react-dom';
import { Bar } from 'react-chartjs';
import * as ChartOptions from '../../constants/ChartOptions.js';

class BarChart extends Component {
  render() {
    return (
      <div className="bar-container">
        <h5>Averall Performance on Assignments</h5>
        <Bar data={ChartOptions.barData} options={ChartOptions.barChartOptions} />
        <Bar data={ChartOptions.barData} options={ChartOptions.barChartOptions} />
      </div>
    );
  }
}

export default BarChart;
