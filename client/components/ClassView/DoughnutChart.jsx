import React, { Component, PropTypes } from 'react';
import ChartJS from 'chart.js';
import ReactDOM from 'react-dom';
import { Doughnut } from 'react-chartjs';


class DoughnutChart extends Component {

  render() {
    const chartOptions = {
      segmentShowStroke: true,
      responsive: true,
      animation: false,
      segmentStrokeColor : "#ffffff",
      segmentStrokeWidth : 1,
    };

    const gradesData = [
      {
        value: 24,
        color: '#2ecc71',
        highlight: '#27ae60',
        label: 'Passing',
      },
      {
        value: 3,
        color: '#e95849',
        highlight: '#c0392b',
        label: 'Failing',
      },
    ];

    const participationData = [
      {
        value: 19,
        color: '#2ecc71',
        highlight: '#27ae60',
        label: '1-5x per day',
      },
      {
        value: 8,
        color: '#e95849',
        highlight: '#c0392b',
        label: '0x per day',
      },
    ];

    const extraCredit = [
      {
        value: 15,
        color: '#2ecc71',
        highlight: '#27ae60',
        label: 'No missing',
      },
      {
        value: 12,
        color: '#e95849',
        highlight: '#c0392b',
        label: 'At least 1 missing',
      },
    ];

    return (
      <div className="row">
        <div className="doughnut-container col-md-4">
          <Doughnut data={gradesData} options={chartOptions} />
          <div className="doughnut-container-info">
            <div className="doughnut-container-info-title">Students Passing</div>
            <div className="doughnut-container-info-description">Shows the number of students passing based on assignments that should have been submitted.</div>
          </div>
        </div>
        <div className="doughnut-container col-md-4">
          <Doughnut data={participationData} options={chartOptions} />
          <div className="doughnut-container-info">
            <div className="doughnut-container-info-title">Daily Participation</div>
            <div className="doughnut-container-info-description">Shows the number of students who participate at least once per day.</div>
          </div>
        </div>
        <div className="doughnut-container col-md-4">
          <Doughnut data={extraCredit} options={chartOptions} />
          <div className="doughnut-container-info">
            <div className="doughnut-container-info-title">Missing Submissions</div>
            <div className="doughnut-container-info-description">Shows the number of students who have not submitted at least one assignment.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default DoughnutChart;
