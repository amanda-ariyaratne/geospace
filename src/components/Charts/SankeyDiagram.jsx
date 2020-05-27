import React from "react";

// components
import EmptyChart from "./EmptyChart";

// google charts
import Chart from "react-google-charts";

// redux
import { useSelector } from "react-redux";

export default function SankeyDiagram() {
  const sankeyDiagram = useSelector((state) => state.sankeyDiagram);
  const options = {};
  if (sankeyDiagram.filteredData.length > 1) {
    return (
      <div className="App">
        <Chart
          chartType="Sankey"
          width="100%"
          height="85vh"
          data={sankeyDiagram.filteredData}
          options={options}
        />
      </div>
    );
  } else {
    return <EmptyChart />;
  }
}
