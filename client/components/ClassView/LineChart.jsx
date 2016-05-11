import React, { Component } from 'react';
import ChartJS from 'chart.js';
import { Line as Chart } from 'react-chartjs';


class LineChart extends Component {

  render() {
    const lineData = {
      labels: [ 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
      datasets: [
        {
          label: 'Student Attendence',
          fillColor: 'rgba(241,196,15,.25)',
          strokeColor: '#f1c40f',
          pointColor: '#f1c40f',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: '#f1c40f',
          data: [24, 29, 20, 28, 29, 27, 30, 20, 21, 26, 27, 26, 29, 27, 20, 21, 26, 27, 26, 29, 27],
        },
        {
          label: 'Students on Time',
          fillColor: 'rgba(52,73,94,.25)',
          strokeColor: '#34495e',
          pointColor: '#34495e',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          data: [23, 28, 15, 25, 28, 26, 26, 20, 20, 26, 27, 20, 25, 25, 20, 21, 25, 26, 25, 25, 25],
        },
      ],
    };

    const lineOptions = {
      responsive: true,
    };

    return (
      <div>
        <Chart data={lineData} options={lineOptions} />
      </div>
    );
  }
}

export default LineChart;
