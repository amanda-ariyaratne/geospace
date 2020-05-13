// import React from "react";
// import Chart from "react-google-charts";

// export default function SankeyDiagram() {
//   const sankeyDiagram = useSelector((state) => state.sankeyDiagram);

//   const options = {};

//   return (
//     <div className="App">
//       {sankeyDiagram.filteredData.length > 1 ? (
//         <Chart
//           chartType="Sankey"
//           data={sankeyDiagram.filteredData}
//           options={options}
//           width="600px"
//           height="200px"
//         />
//       ) : null}
//     </div>
//   );
// }
import React from "react";

import Chart from "react-google-charts";
// Ref : https://developers.google.com/chart/interactive/docs/gallery/histogram

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
    return <div className="App"></div>;
  }
}
