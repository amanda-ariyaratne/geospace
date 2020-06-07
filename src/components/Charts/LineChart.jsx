import React from "react";

// google charts
import Chart from "react-google-charts";

// redux
import { useSelector } from "react-redux";

function LineChart() {
  const data = useSelector((state) => state.line.dataTable.series);
  const title = useSelector((state) => state.line.title);
  const xTitle = useSelector((state) => state.line.hAxis.title);
  const yTitle = useSelector((state) => state.line.vAxis.title);
  const curveType = useSelector((state) => state.line.curveType);

  return (
    <div className="App">
      <Chart
        width="100%"
        height="85vh"
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          title: title,
          titleTextStyle: {
            bold: true,
            italic: true,
            fontSize: 28,
          },
          curveType: curveType,
          chartArea: { width: "80%" },
          hAxis: {
            title: xTitle,
            minValue: 0,
          },
          vAxis: {
            title: yTitle,
          },
          is3D: true,
        }}
      />
    </div>
  );
}

export default LineChart;
