import React from 'react';
import Chart from './ClassView/Chart.jsx';
class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="col-md-9">
        I am MAIN I SWEAR!!!
        <Chart />
      </div>
    );
  }

}

export default Main;
