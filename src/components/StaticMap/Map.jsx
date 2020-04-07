import React, { Component } from "react";
import DeckGL, { ArcLayer } from "deck.gl";
import MapGL from "react-map-gl";
import { LineLayer } from "@deck.gl/layers";
import { StaticMap } from "react-map-gl";

const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        longitude: -122.45,
        latitude: 37.78,
        zoom: 11,
        bearing: 0,
        pitch: 30,
      },
    };
  }

  _onViewportChange = (viewport) => {
    this.setState({ viewport });
  };

  render() {
    const { viewport } = this.state;
    const data = [
      {
        sourcePosition: [-122.41669, 37.7853],
        targetPosition: [-122.41669, 37.781],
      },
    ];
    const layers = [new LineLayer({ id: "line-layer", data })];

    return (
      <MapGL
        {...viewport}
        width="100%"
        height="100vh"
        maxPitch={85}
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
      >
        <DeckGL initialViewState={viewport} controller={true} layers={layers}>
          <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
        </DeckGL>
      </MapGL>
    );
  }
}
