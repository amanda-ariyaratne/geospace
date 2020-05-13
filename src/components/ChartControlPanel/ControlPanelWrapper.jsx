import React from "react";

// components
import BarChartControlPanel from "./BarChartControlPanel";
import LineChartControlPanel from "./LineChartControlPanel";
import SankeyDiagramControlPanel from "./SankeyDiagramControlPanel";

// redux
import { useSelector } from "react-redux";
import { props } from "bluebird";

export default function ControlPanelWrapper(props) {
  const type = useSelector((state) => state.chart);
  switch (type) {
    case 1:
      return <BarChartControlPanel />;
    case 2:
      return <SankeyDiagramControlPanel />;
    case 3:
      return (
        <LineChartControlPanel
          setLastDrawLocation={props.setLastDrawLocation}
        />
      );
    default:
      return <div></div>;
  }
}
