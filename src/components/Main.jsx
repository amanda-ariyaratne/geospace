import React from "react";

// material-ui
import { Box } from "@material-ui/core";

// components
import Map from "./Map";
import ControlPanel from "./ControlPanel/ControlPanel";

export default function Main() {
  return (
    <Box order={2} className="main">
      <Box order={1} className="panel">
        <ControlPanel />
      </Box>
      <Box order={2} className="map">
        <div className="positioned">
          <Map />
        </div>
      </Box>
    </Box>
  );
}
