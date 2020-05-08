import React from "react";

// components
import BarChartControlPanel from "./BarChartControlPanel";
import SankeyDiagramControlPanel from "./SankeyDiagramControlPanel";

// redux
import { useSelector } from "react-redux";

export default function ControlPanelWrapper() {
  const type = useSelector((state) => state.chart);
  switch (type) {
    case 1:
      return <BarChartControlPanel />;
    case 2:
      return <SankeyDiagramControlPanel />;
    default:
      return <div></div>;
  }
}
