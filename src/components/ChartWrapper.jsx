import React from "react";

// components
import BarChart from "./Charts/BarChart";
import SankeyChart from "./Charts/SankeyChart";
import LineChart from "./Charts/LineChart";
import EmptyChart from "./Charts/EmptyChart";

// redux
import { useSelector } from "react-redux";

// react-router
import { Redirect } from "react-router-dom";

export default function ChartWrapper(props) {
  const type = useSelector((state) => state.currentVis);
  switch (type) {
    case "bar":
      return <BarChart />;
    case "sankey":
      return <SankeyChart />;
    case "line":
      return (
        <LineChart
          lastDrawLocation={props.lastDrawLocation}
          setLastDrawLocation={props.setLastDrawLocation}
        />
      );
    default:
      return <Redirect to="/" />;
  }
}
