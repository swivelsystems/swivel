import React, { Component, PropTypes } from 'react';
import ChartJS from 'chart.js';
import ReactDOM from 'react-dom';
import { Doughnut } from 'react-chartjs';


class DoughnutChart extends Component {

  render() {
    const chartOptions = {
      segmentShowStroke: true,
    };

    const gradesData = [
      {
        value: 80,
        color: '#46BFBD',
        highlight: '#5AD3D1',
        label: 'Average Grade',
      },
      {
        value: 20,
        color: '#C1F3F2',
        highlight: '#FF5A5E',
      },
    ];

    const participationData = [
      {
        value: 80,
        color: '#FF5722',
        highlight: '#A8B3C5',
        label: 'Student Participation',
      },
      {
        value: 20,
        color: '#FDB45C',
        highlight: '#FFC870',
        label: 'Students not participating',
      },
    ];

    const extraCredit = [
      {
        value: 60,
        color: '#4D5360',
        highlight: '#616774',
        label: 'Extra Credit Completed',
      },
      {
        value: 40,
        color: 'lightgrey',
        highlight: '#616774',
        label: 'Extra Credit Not Attempted',
      },
    ];

    return (
      <div>
        <div className="DoughnutContainer">
          <div>Average Grades</div>
          <Doughnut data={gradesData} />
        </div>
        <div className="DoughnutContainer">
          <div>Overall Participation</div>
          <Doughnut data={participationData} options={chartOptions} />
        </div>
        <div className="DoughnutContainer">
          <div>Overall Extra Credit Work</div>
          <Doughnut data={extraCredit} options={chartOptions} />
        </div>
      </div>
    );
  }
}

export default DoughnutChart;
