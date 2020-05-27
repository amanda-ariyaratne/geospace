import React, { useState } from "react";

import "../../../node_modules/react-vis/dist/style.css";

// components
import EmptyChart from "./EmptyChart";

import {
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  XYPlot,
  Highlight,
  FlexibleXYPlot,
} from "react-vis";

// redux
import { useSelector } from "react-redux";

function LineChart(props) {
  const axisStyle = {
    line: { stroke: "black" },
    ticks: { stroke: "black" },
    text: { stroke: "black", fill: "black", fontWeight: 300 },
    title: { stroke: "black", fill: "black", fontWeight: 300, fontSize: 16 },
  };

  const gridStyle = {
    line: { stroke: "black" },
  };

  const lineChart = useSelector((state) => state.lineChart);
  const lastDrawLocation = props.lastDrawLocation;

  const setLastDrawLocation = (value) => {
    props.setLastDrawLocation(value);
  };

  const xAxisTitle = lineChart.xAxisTitle;
  const yAxisTitle = lineChart.yAxisTitle;

  let plotAttributes = {
    xType: "ordinal",
    margin: { left: 100, bottom: 100 },
  };

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
      {lineChart.series.length > 0 ? (
        <FlexibleXYPlot
          {...plotAttributes}
          animation
          xDomain={
            lastDrawLocation && [lastDrawLocation.left, lastDrawLocation.right]
          }
          yDomain={
            lastDrawLocation && [lastDrawLocation.bottom, lastDrawLocation.top]
          }
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis style={axisStyle} tickLabelAngle={-45} title={xAxisTitle} />
          <YAxis style={axisStyle} title={yAxisTitle} />
          {lineChart !== null && lineChart.series !== null
            ? lineChart.series.map((series, index) => {
                return (
                  <LineSeries key={index} data={series} color={colors[index]} />
                );
              })
            : null}
          {/* <Highlight
            onBrushEnd={(area) => setLastDrawLocation(area)}
            onDrag={(area) => {
              setLastDrawLocation({
                bottom: lastDrawLocation.bottom + (area.top - area.bottom),
                left: lastDrawLocation.left - (area.right - area.left),
                right: lastDrawLocation.right - (area.right - area.left),
                top: lastDrawLocation.top + (area.top - area.bottom),
              });
            }}
          /> */}
        </FlexibleXYPlot>
      ) : (
        <EmptyChart />
      )}
    </React.Fragment>
  );
}

export default LineChart;
