import React from "react";

// google charts
import Chart from "react-google-charts";

// redux
import { useSelector } from "react-redux";

function BarChart() {
  const data = useSelector((state) => state.bar.dataTable.series);
  const title = useSelector((state) => state.bar.title);
  const xTitle = useSelector((state) => state.bar.hAxis.title);
  const yTitle = useSelector((state) => state.bar.vAxis.title);
  const isStacked = useSelector((state) => state.bar.isStacked);

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

export default BarChart;
