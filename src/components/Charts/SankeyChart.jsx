import React from "react";

// google charts
import Chart from "react-google-charts";

// redux
import { useSelector } from "react-redux";

<<<<<<< HEAD
export default function SankeyChart() {
=======
function LineChart() {
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176
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
<<<<<<< HEAD
=======

export default LineChart;
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176
