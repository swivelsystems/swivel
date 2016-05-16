import React, { PropTypes, Component } from 'react';
import ChartJS from 'chart.js';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs';
import * as ChartOptions from '../../../constants/ChartOptions.js';

class BarChart extends Component {
  shuffleChartData() {
    const data1 = [];
    const data2 = [];
    if (this.props.displayedCourse) {
      for (let i = 0; i < 10; i++) {
        data1.push(Math.floor(Math.random() * 10));
      }
      ChartOptions.barData1.datasets[0].data = data1;
      for (let i = 0; i < 10; i++) {
        data2.push(Math.floor(Math.random() * 10));
      }
      ChartOptions.barData.datasets[0].data = data2;
    }
  }


  render() {
    this.shuffleChartData();
    return (
      <div className="bar-container col-md-8">
        <div className="bar-chart col-md-6">
          <h5>Overal Submissions on Assignments</h5>
          <Bar data={ChartOptions.barData1} />
        </div>
        <div className="bar-chart col-md-6">
          <h5>Overall Performance on Assignments</h5>
          <Bar data={ChartOptions.barData} />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => (
  {
    displayedCourse: state.displayedCourse,
  }
);

BarChart.propTypes = {
  displayedCourse: PropTypes.object,
};

export default connect(
  mapStateToProps
)(BarChart);
