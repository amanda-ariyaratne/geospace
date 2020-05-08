import React from "react";

// components
import BarChart from "./BarChart";
import SankeyDiagram from "./SankeyDiagram";

// redux
import { useSelector } from "react-redux";

export default function ChartWrapper() {
  const type = useSelector((state) => state.chart);
  switch (type) {
    case 1:
      return <BarChart />;
    case 2:
      return <SankeyDiagram />;
    default:
      return <div></div>;
  }
}
