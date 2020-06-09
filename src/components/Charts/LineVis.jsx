import React from "react";

// google charts
import Chart from "react-google-charts";

// redux
import { useSelector } from "react-redux";

function LineChart({ dataset }) {
  console.log(dataset);
  const data = dataset.dataTable.series;
  const title = dataset.title;
  const xTitle = dataset.hAxis.title;
  const yTitle = dataset.vAxis.title;
  const curveType = dataset.curveType;
  const xMin = dataset.hAxis.minValue;

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
            minValue: xMin,
          },
          vAxis: {
            title: yTitle,
          },
        }}
      />
    </div>
  );
}

export default LineChart;
