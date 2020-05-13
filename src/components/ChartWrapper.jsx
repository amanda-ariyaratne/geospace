import React from "react";

// components
import BarChart from "./Charts/BarChart";
import SankeyDiagram from "./Charts/SankeyDiagram";
import LineChart from "./Charts/LineChart";

// redux
import { useSelector } from "react-redux";

export default function ChartWrapper(props) {
  const type = useSelector((state) => state.chart);
  switch (type) {
    case 1:
      return <BarChart />;
    case 2:
      return <SankeyDiagram />;
    case 3:
      return (
        <LineChart
          lastDrawLocation={props.lastDrawLocation}
          setLastDrawLocation={props.setLastDrawLocation}
        />
      );
    default:
      return <div></div>;
  }
}
