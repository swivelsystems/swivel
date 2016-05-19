import React, { PropTypes, Component } from 'react';
import ChartJS from 'chart.js';
import { connect } from 'react-redux';
import { Line as Chart } from 'react-chartjs';

class LineChart extends Component {

  randomizeChartData() {
    const AttendenceData = [];
    const onTimeData = [];
    for (let i = 0; i < 30; i++) {
      AttendenceData.push(Math.floor(Math.random() * (30 - 20 + 1)) + 20);
      onTimeData.push(Math.floor(Math.random() * (30 - 20 + 1)) + 20);
    }
    return [AttendenceData, onTimeData];
  }

  render() {
    const [AttendenceData, onTimeData] = this.randomizeChartData();
    const lineData = {
      labels: [ 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
      datasets: [
        {
          label: 'Student Attendence',
          fillColor: 'rgba(43,134,193,0.25)',
          strokeColor: '#3498db',
          pointColor: '#3498db',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: '#3498db',
          data: AttendenceData,
        },
        {
          label: 'Students on Time',
          fillColor: 'rgba(39,174,96,0.25)',
          strokeColor: '#2ecc71',
          pointColor: '#2ecc71',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: '#2ecc71',
          data: onTimeData,
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
