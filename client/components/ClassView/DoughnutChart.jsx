import React, { Component, PropTypes } from 'react';
import ChartJS from 'chart.js';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs';
import * as ChartOptions from '../../constants/ChartOptions.js';


class DoughnutChart extends Component {

  customizeStudentChartInfo() {
    if (this.props.demoType === 'student') {
      ChartOptions.infoTitle1 = 'Your Grade';
      ChartOptions.infoDescription1 = 'Shows the grade in this course';
      ChartOptions.infoTitle2 = 'Daily Participation';
      ChartOptions.infoDescription2 = 'Shows your average participation per day';
      ChartOptions.infoTitle3 = 'Extra Credit';
      ChartOptions.infoDescription3 = 'The amount of extra credit you have completed';
    }
  }

  render() {
    this.customizeStudentChartInfo();
    return (
      <div className="row">
        <div className="doughnut-container col-md-4">
          <Doughnut data={ChartOptions.gradesData} options={ChartOptions.doughnutChartOptions} />
          <div className="doughnut-container-info">
            <div className="doughnut-container-info-title">{ChartOptions.infoTitle1}</div>
            <div className="doughnut-container-info-description">{ChartOptions.infoDescription1}</div>
          </div>
        </div>
        <div className="doughnut-container col-md-4">
          <Doughnut data={ChartOptions.participationData} options={ChartOptions.doughnutChartOptions} />
          <div className="doughnut-container-info">
            <div className="doughnut-container-info-title">{ChartOptions.infoTitle2}</div>
            <div className="doughnut-container-info-description">{ChartOptions.infoDescription2}</div>
          </div>
        </div>
        <div className="doughnut-container col-md-4">
          <Doughnut data={ChartOptions.extraCredit} options={ChartOptions.doughnutChartOptions} />
          <div className="doughnut-container-info">
            <div className="doughnut-container-info-title">{ChartOptions.infoTitle3}</div>
            <div className="doughnut-container-info-description">{ChartOptions.infoDescription3}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  { demoType: state.demoType }
);

DoughnutChart.propTypes = {
  demoType: PropTypes.string,
};

export default connect(
  mapStateToProps
)(DoughnutChart);

