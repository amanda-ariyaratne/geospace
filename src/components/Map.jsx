import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import Button from "@material-ui/core/Button";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    width: "100vw",
    height: "100vh",
    zoom: 14,
    bearing: 0,
    pitch: 0
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => setViewport(viewport)}
      ></ReactMapGL>
    </div>
  );
}
