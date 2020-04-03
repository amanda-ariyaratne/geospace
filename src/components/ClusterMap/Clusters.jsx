import React, { Component, useRef, useState } from "react";
import MapGL, { Source, Layer } from "react-map-gl";

import ControlPanel from "./ControlPanel";
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer
} from "./Layers";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

export default function Clusters(props) {
  const [viewport, setViewport] = useState({
    latitude: 40.67,
    logitude: -103.59,
    zoom: 3,
    bearing: 0,
    pitch: 0
  });

  const _sourceRef = useRef();

  const _onViewportChange = viewport => setViewport(viewport);

  const _onClick = event => {
    if (!event.features.length) {
      return;
    }

    const feature = event.features[0];
    const clusterId = feature.properties.cluster_id;

    const mapboxSource = _sourceRef.current.getSource();

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }

      _onViewportChange({
        ...viewport,
        longitude: feature.geometry.coordinates[0],
        latitude: feature.geometry.coordinates[1],
        zoom,
        transitionDuration: 500
      });
    });
  };

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={_onViewportChange}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      interactiveLayerIds={[clusterLayer.id]}
      onClick={_onClick}
    >
      <Source
        type="geojson"
        data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
        cluster={true}
        clusterMaxZoom={14}
        clusterRadius={150}
        ref={_sourceRef}
      >
        <Layer {...clusterLayer} />
        <Layer {...clusterCountLayer} />
        <Layer {...unclusteredPointLayer} />
      </Source>
    </MapGL>
  );
}
