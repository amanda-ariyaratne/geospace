import React from "react";

import "../../node_modules/react-vis/dist/style.css";

import {
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  FlexibleXYPlot,
} from "react-vis";

// redux
import { useSelector } from "react-redux";

function BarChart() {
  const axisStyle = {
    line: { stroke: "black" },
    ticks: { stroke: "black" },
    text: { stroke: "black", fill: "black", fontWeight: 300 },
  };

  const barChart = useSelector((state) => state.barChart);

  let plotAttributes = {
    xType: "ordinal",
    margin: { left: 100, bottom: 100 },
  };

  if (barChart.stackBy === "y") {
    plotAttributes.stackBy = "y";
  }

  return (
    <React.Fragment>
      <FlexibleXYPlot {...plotAttributes}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis style={axisStyle} tickLabelAngle={-90} />
        <YAxis style={axisStyle} />
        {barChart !== null && barChart.series !== null
          ? barChart.series.map((series, index) => {
              return <VerticalBarSeries key={index} data={series} />;
            })
          : null}
      </FlexibleXYPlot>
    </React.Fragment>
  );
}

export default BarChart;
