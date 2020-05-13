import React, { useState } from "react";

// material-ui
import { Box } from "@material-ui/core";

// components
import ChartWrapper from "./ChartWrapper";
import ControlPanelWrapper from "./ChartControlPanel/ControlPanelWrapper";

export default function ChartMain() {
  const [lastDrawLocation, setLastDrawLocation] = useState(null);

  return (
    <Box order={2} className="main">
      <Box order={1} className="panel">
        <ControlPanelWrapper setLastDrawLocation={setLastDrawLocation} />
      </Box>
      <Box order={2} className="viz chartspace">
        <ChartWrapper
          lastDrawLocation={lastDrawLocation}
          setLastDrawLocation={setLastDrawLocation}
        />
      </Box>
    </Box>
  );
}
