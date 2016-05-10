import React, { Component } from 'react';
import ChartJS from 'chart.js';
import ReactDOM from 'react-dom';
import { Bar } from 'react-chartjs';

class BarChart extends Component {

  render() {
    const barData = {
      labels: ['h', 'e', 'l', 'l', 'o', 'o', 'o'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#3498db',
          color: '#3498db',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 99, 80, 81, 86, 80, 79, 65, 99, 80, 81, 86, 80, 79, 65, 99, 80, 81, 86, 80, 79],
        },
      ],
    };

    return (
      <div>
        <div>Assignment Grades</div>
        <Bar data={barData} />
      </div>
    );
  }
}

export default BarChart;
