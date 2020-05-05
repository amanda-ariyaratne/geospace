import React, { useState } from "react";

// deck.gl
import { FlyToInterpolator } from "deck.gl";

// material-ui
import { Box } from "@material-ui/core";

// components
import Map from "./Map";
import ControlPanel from "./MapControlPanel/ControlPanel";

export default function MapMain() {
  const [viewState, setViewState] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 0.85,
    bearing: 0,
    pitch: 0,
    transitionDuration: 2000,
    transitionInterpolator: new FlyToInterpolator(),
  });

  return (
    <Box order={2} className="main">
      <Box order={1} className="panel">
        <ControlPanel viewState={viewState} setViewState={setViewState} />
      </Box>
      <Box order={2} className="viz">
        <div className="positioned">
          <Map viewState={viewState} setViewState={setViewState} />
        </div>
      </Box>
    </Box>
  );
}
