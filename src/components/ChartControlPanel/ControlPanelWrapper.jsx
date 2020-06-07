import React from "react";

// components
import BarChartControlPanel from "./BarChartControlPanel";
import LineChartControlPanel from "./LineChartControlPanel";
import SankeyChartControlPanel from "./SankeyChartControlPanel";

// redux
import { useSelector } from "react-redux";
import { props } from "bluebird";

export default function ControlPanelWrapper(props) {
  const type = useSelector((state) => state.currentVis);
  switch (type) {
    case "bar":
      return <BarChartControlPanel />;
    case "sankey":
      return <SankeyChartControlPanel />;
    case "line":
      return (
        <LineChartControlPanel
          setLastDrawLocation={props.setLastDrawLocation}
        />
      );
    default:
      return <div></div>;
  }
}
