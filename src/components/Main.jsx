import React, { useState } from "react";

// material-ui
import { Box } from "@material-ui/core";

// components
import Map from "./GetStarted/Map";
import MapTheme from "./Input/MapTheme";

export default function Main() {
  return (
    <Box order={2} className="container">
      <Box order={1} className="panel">
        <MapTheme />
      </Box>
      <Box order={2} flexGrow={1}>
        <div className="positioned">
          <Map />
        </div>
      </Box>
    </Box>
  );
}
