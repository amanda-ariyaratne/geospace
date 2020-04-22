import React from "react";
import { StaticMap } from "react-map-gl";
import DeckGL from "deck.gl";
import { useSelector } from "react-redux";

export default function Map() {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

  // source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz

  const INITIAL_VIEW_STATE = useSelector((state) => state.viewstate);

  const mapboxstyle = useSelector((state) => state.mapstyle);

  const layersFromRedux = useSelector((state) => state.layers);
  const layers = layersFromRedux.map((layer) => {
    return layer.render();
  });

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
