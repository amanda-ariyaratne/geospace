/// app.js
import React from "react";
import DeckGL from "@deck.gl/react";
import { LineLayer } from "@deck.gl/layers";
import { StaticMap } from "react-map-gl";

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoidGhlLWtpbGxqb3kiLCJhIjoiY2s3NGw5NzZuMDF3NzNlcnFuNGtmNzhhcCJ9.qR33oHioeCMuGFxtz1Qt0g";

// Initial viewport settings
const initialViewState = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
const data = [
  {
    sourcePosition: [-122.41669, 37.7853],
    targetPosition: [-122.41669, 37.781]
  }
];

class Map extends React.Component {
  render() {
    const layers = [new LineLayer({ id: "line-layer", data })];

    return (
      <DeckGL
        initialViewState={initialViewState}
        controller={true}
        layers={layers}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
      </DeckGL>
    );
  }
}

export default Map;
