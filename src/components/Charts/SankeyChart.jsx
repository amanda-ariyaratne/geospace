import React from "react";

// google charts
import Chart from "react-google-charts";

// redux
import { useSelector } from "react-redux";

function LineChart() {
  const data = useSelector((state) => state.sankey.dataTable.data);

  return (
    <div className="App">
      <Chart
        width="100%"
        height="85vh"
        chartType="Sankey"
        loader={<div>Loading Chart</div>}
        data={data}
      />
    </div>
  );
}

export default LineChart;
