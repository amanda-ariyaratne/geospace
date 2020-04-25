import React, { useState } from "react";

// deck.gl
import { FlyToInterpolator } from "deck.gl";

// material-ui
import { Box } from "@material-ui/core";

// components
import Map from "./Map";
import ControlPanel from "./ControlPanel/ControlPanel";

export default function Main() {
  const [viewState, setViewState] = useState({
    latitude: 40.7,
    longitude: -74,
    zoom: 11,
    bearing: 0,
    pitch: 0,
    transitionDuration: "auto",
    transitionInterpolator: new FlyToInterpolator(),
  });

  return (
    <Box order={2} className="main">
      <Box order={1} className="panel">
        <ControlPanel viewState={viewState} setViewState={setViewState} />
      </Box>
      <Box order={2} className="map">
        <div className="positioned">
          <Map viewState={viewState} setViewState={setViewState} />
        </div>
      </Box>
    </Box>
  );
}
