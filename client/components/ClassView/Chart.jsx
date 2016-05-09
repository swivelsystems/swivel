import React from 'react';

const Chart = ({ data }) => (
  <div className="chart">
    I am a Chart.
    {data}
  </div>

);

Chart.propTypes = {
  data: React.PropTypes.any,
};
export default Chart;
