import React from "react";

// material-ui
import { Box } from "@material-ui/core";

// components
import ChartWrapper from "./ChartWrapper";
import ControlPanelWrapper from "./ChartControlPanel/ControlPanelWrapper";

export default function ChartMain() {
  return (
    <Box order={2} className="main">
      <Box order={1} className="panel">
        <ControlPanelWrapper />
      </Box>
      <Box order={2} className="viz chartspace">
        <ChartWrapper />
      </Box>
    </Box>
  );
}
