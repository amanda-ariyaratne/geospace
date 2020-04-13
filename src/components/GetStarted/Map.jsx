import React, { Component } from "react";
import { StaticMap } from "react-map-gl";
import DeckGL, { GeoJsonLayer, ArcLayer } from "deck.gl";
import { useSelector } from "react-redux";
import { ScatterplotLayer } from "@deck.gl/layers";
import Scatterplot from "../../classes/Scatterplot";
import { useEffect } from "react";

export default function Map() {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

  // source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz
  const AIR_PORTS =
    "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson";

  const INITIAL_VIEW_STATE = useSelector((state) => state.viewstate);

  const mapboxstyle = useSelector((state) => state.mapstyle);
  const layers = useSelector((state) => state.layers);
  // const renderLayers = () => {
  //   return layersInState.map((layer) => {
  //     switch (layer.type) {
  //       case "scatterplot":
  //         const layerInstance = new Scatterplot(layer);
  //         return layerInstance.render();
  //         break;

  //       default:
  //         break;
  //     }
  //   });
  // };

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    >
      <StaticMap
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle={mapboxstyle.url}
      />
    </DeckGL>
  );
}
