import React from "react";

// components
import BarChartControlPanel from "./BarChartControlPanel";
import LineChartControlPanel from "./LineChartControlPanel";
import SankeyDiagramControlPanel from "./SankeyDiagramControlPanel";

// redux
import { useSelector } from "react-redux";
import { props } from "bluebird";

export default function ControlPanelWrapper(props) {
  const type = useSelector((state) => state.currentVis);
  switch (type) {
    case "bar":
      return <BarChartControlPanel />;
    case "sankey":
      return <SankeyDiagramControlPanel />;
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
