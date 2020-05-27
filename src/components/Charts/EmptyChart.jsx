import React from "react";

import "../../../node_modules/react-vis/dist/style.css";

import {
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  FlexibleXYPlot,
} from "react-vis";

function EmptyChart() {
  const axisStyle = {
    line: { stroke: "black" },
    ticks: { stroke: "black" },
    text: { stroke: "black", fill: "black", fontWeight: 300 },
    title: { stroke: "black", fill: "black", fontWeight: 300, fontSize: 24 },
  };

  return (
    <React.Fragment>
      <FlexibleXYPlot dontCheckIfEmpty xDomain={[0, 3]} yDomain={[10, 3]}>
        <VerticalGridLines style={{ stroke: "#898989" }} />
        <HorizontalGridLines style={{ stroke: "#898989" }} />
        <XAxis
          hideTicks
          tickFormat={(v) => `${v}`}
          tickValues={[1, 2, 3, 4, 5]}
          style={axisStyle}
        />
        <YAxis hideTicks style={axisStyle} />
      </FlexibleXYPlot>
    </React.Fragment>
  );
}

export default EmptyChart;
