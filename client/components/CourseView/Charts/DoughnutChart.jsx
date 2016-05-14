import React, { Component, PropTypes } from 'react';
import ChartJS from 'chart.js';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs';
import * as ChartOptions from '../../../constants/ChartOptions.js';

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

  shuffleChartData() {
      console.log('we out heres', this.props.displayedCourse);
    if (this.props.displayedCourse) {
      let randomVal = Math.floor(Math.random() * (30 - 15)) + 15;
      ChartOptions.gradesData[0].value = randomVal;
      ChartOptions.gradesData[1].value = 30-randomVal;

      randomVal = Math.floor(Math.random() * (30 - 15)) + 15;
      ChartOptions.participationData[0].value = randomVal;
      ChartOptions.participationData[1].value = 30 - randomVal;

      randomVal = Math.floor(Math.random() * (30 - 15)) + 15;
      ChartOptions.extraCredit[0].value = randomVal;
      ChartOptions.extraCredit[1].value = 30 - randomVal;
    }
  }

  render() {
    this.customizeStudentChartInfo();
    this.shuffleChartData();
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
  {
    demoType: state.demoType,
    displayedCourse: state.displayedCourse,
  }
);

DoughnutChart.propTypes = {
  demoType: PropTypes.string,
};

export default connect(
  mapStateToProps
)(DoughnutChart);
