import React, { useState } from "react";

// deck.gl
import { StaticMap } from "react-map-gl";
import DeckGL from "deck.gl";

// redux
import { useSelector } from "react-redux";

// material-ui
import Chip from "@material-ui/core/Chip";

export default function Map() {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

  const [hoverObject, setHoverObject] = useState({});

  const _renderTooltip = () => {
    console.log(hoverObject.x, hoverObject.y);
    return (
      hoverObject && (
        <div
          style={{
            position: "absolute",
            zIndex: 5,
            pointerEvents: "none",
            left: hoverObject.x,
            top: hoverObject.y,
          }}
        >
          <Chip label="Basic" />
        </div>
      )
    );
  };

  const _onHover = (info, event) => {
    if (info.object !== undefined) {
      setHoverObject(info);
    }
  };

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
      onHover={_onHover}
    >
      <StaticMap
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle={mapboxstyle.url}
      />
      {_renderTooltip()}
    </DeckGL>
  );
}
