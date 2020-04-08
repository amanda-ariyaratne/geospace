import React, { useState } from "react";

// material-ui
import { Box } from "@material-ui/core";

// components
import Map from "./GetStarted/Map";
import MapTheme from "./Input/MapTheme";

// data
import { mapStyles } from "../data/mapstyles";

const DEFAULT_THEME = mapStyles[1].url;

export default function Main() {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  return (
    <Box order={2} className="container">
      <Box order={1} className="panel">
        <MapTheme setTheme={setTheme} />
      </Box>
      <Box order={2} flexGrow={1}>
        <div className="positioned">
          <Map theme={theme} />
        </div>
      </Box>
    </Box>
  );
}
