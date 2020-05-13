import React from "react";

// material-ui
import { Box } from "@material-ui/core";

// react-vis
import { DiscreteColorLegend } from "react-vis";

export default function LCLegend(props) {
  const colors = [
    "#12939A",
    "#79C7FF",
    "#1A3177",
    "#FF9833",
    "#EF5D28",
    "#496A81",
    "#813405",
    "#FFA69E",
    "#5C9EAD",
    "#A7A5C6",
    "#EF476F",
    "#FFD166",
    "#06D6A0",
  ];

  const legendItems = props.legendHeaders.map((header, index) => {
    return {
      title: header,
      color: colors[index],
    };
  });
  return (
    <Box className={props.legendStyle}>
      <DiscreteColorLegend items={legendItems} />
    </Box>
  );
}
