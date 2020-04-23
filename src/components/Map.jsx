import React, { useState } from "react";

// deck.gl
import { StaticMap } from "react-map-gl";
import DeckGL from "deck.gl";

// redux
import { useSelector } from "react-redux";

// material-ui
import Paper from "@material-ui/core/Paper";

export default function Map() {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

  const [hoverObject, setHoverObject] = useState({});

  const _renderTooltip = () => {
    if (hoverObject.object !== undefined) {
      return (
        <div
          style={{
            position: "absolute",
            zIndex: 5,
            pointerEvents: "none",
            left: hoverObject.x,
            top: hoverObject.y,
          }}
        >
          <Paper style={{ padding: 20 }} elevation={3}>
            {hoverObject.object[0]}
          </Paper>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  const _onHover = (info, event) => {
    setHoverObject(info);
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
