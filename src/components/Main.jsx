import React, { useState } from "react";

// material-ui
import { Box } from "@material-ui/core";

// components
import Map from "./GetStarted/Map";
import App from "./Scatterplot/App";
import ControlPanel from "./ControlPanel/ControlPanel";

export default function Main() {
  return (
    <Box order={2} className="container">
      <Box order={1} className="panel">
        <ControlPanel />
      </Box>
      <Box order={2} flexGrow={1}>
        <div className="positioned">
          <Map />
        </div>
      </Box>
    </Box>
  );
}
