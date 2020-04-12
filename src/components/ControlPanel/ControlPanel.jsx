import React from "react";

// components
import MapTheme from "./MapTheme";
import AddLayer from "./AddLayer";
import Pitch from "./Pitch";

export default function ControlPanel() {
  return (
    <div>
      <MapTheme />
      <AddLayer />
      <Pitch />
    </div>
  );
}
