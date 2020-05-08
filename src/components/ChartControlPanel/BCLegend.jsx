import React from "react";

// material-ui
import { Box } from "@material-ui/core";

// react-vis
import { DiscreteColorLegend } from "react-vis";

export default function BCLegend(props) {
  return (
    <Box className={props.legendStyle}>
      <DiscreteColorLegend items={props.legendHeaders} />
    </Box>
  );
}
