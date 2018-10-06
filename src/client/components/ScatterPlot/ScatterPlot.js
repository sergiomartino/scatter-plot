import React from 'react';
import { Chart } from 'react-google-charts';

export default function ScatterPlot({ name, points }) {
  const options = {
    title: name,
    pointSize: 4,
    legend: 'none'
  };

  return (
    points &&
    <Chart
      chartType="ScatterChart"
      options={options}
      data={[['x', 'Point'], ...points]}
      width="100%"
      height="600px"
    />
  );
};