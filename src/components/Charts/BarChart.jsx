import React from "react";

import "../../../node_modules/react-vis/dist/style.css";

// components
import EmptyChart from "./EmptyChart";

// react-vis
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
    title: { stroke: "black", fill: "black", fontWeight: 300, fontSize: 16 },
  };

  const barChart = useSelector((state) => state.barChart);

  let plotAttributes = {
    xType: "ordinal",
    margin: { left: 100, bottom: 100 },
  };

  if (barChart.stackBy === "y") {
    plotAttributes.stackBy = "y";
  }

  const colors = [
    "#12939A",
    "#79C7FF",
    "#1A3177",
    "#FF9833",
    "#EF5D28",
    "#496A81",
    "#813405",
    "#FFA69E",
    "#5C9EAD",
    "#A7A5C6",
    "#EF476F",
    "#FFD166",
    "#06D6A0",
  ];

  return (
    <React.Fragment>
      {barChart.series.length > 0 ? (
        <FlexibleXYPlot {...plotAttributes}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis
            style={axisStyle}
            tickLabelAngle={-90}
            title={barChart.xAxisTitle}
          />
          <YAxis style={axisStyle} title={barChart.yAxisTitle} />
          {barChart !== null && barChart.series !== null
            ? barChart.series.map((series, index) => {
                return (
                  <VerticalBarSeries
                    key={index}
                    data={series}
                    color={colors[index]}
                  />
                );
              })
            : null}
        </FlexibleXYPlot>
      ) : (
        <EmptyChart />
      )}
    </React.Fragment>
  );
}

export default BarChart;
