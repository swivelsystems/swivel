import React, { PropTypes } from 'react';

const Chart = ({ data }) => (
  <div className="chart">
    I am a Chart.
    {data}
  </div>

);

Chart.propTypes = {
  data: PropTypes.any,
};
export default Chart;
