import React, { Component } from "react";
import { StaticMap } from "react-map-gl";
import DeckGL, { GeoJsonLayer, ArcLayer } from "deck.gl";
import { useSelector } from "react-redux";

export default function Map() {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

  // source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz
  const AIR_PORTS =
    "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson";

  const INITIAL_VIEW_STATE = useSelector((state) => state.viewstate);

  const mapboxstyle = useSelector((state) => state.mapstyle);

  return (
    <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true}>
      <StaticMap
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle={mapboxstyle.url}
      />
    </DeckGL>
  );
}
