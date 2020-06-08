import React from "react";

// google charts
import Chart from "react-google-charts";

// redux
import { useSelector } from "react-redux";

function BarVis({ dataset }) {
  const data = dataset.dataTable.series;
  const title = dataset.title;
  const xTitle = dataset.hAxis.title;
  const yTitle = dataset.vAxis.title;
  const isStacked = dataset.isStacked;

  return (
    <div className="App">
      <Chart
        width="100%"
        height="85vh"
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          isStacked: isStacked,
          title: title,
          titleTextStyle: {
            bold: true,
            italic: true,
            fontSize: 28,
          },
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

export default BarVis;
