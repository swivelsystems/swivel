import React from 'react';
import TimeLine from './HomeView/Timeline.jsx';
import Chart from './ClassView/Chart.jsx';
import Info from './ClassView/Info.jsx';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleHomeOrClass() {
    let view;
    if (this.props.isHome) {
      view = (
        <div className="col-md-9">
          I am Home.
          <TimeLine />
        </div>
      );
    } else {
      view = (
        <div className="col-md-9">
          I am in Main.
          <Chart />
          <Info currentCourse={this.props.currentCourse} />
        </div>
      );
    }
    return view;
  }

  render() {
    const view = this.handleHomeOrClass();
    return view;
  }

}

export default Main;
