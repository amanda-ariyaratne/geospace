import React, { useState } from "react";

// deck.gl
import { StaticMap } from "react-map-gl";
import DeckGL from "deck.gl";

// redux
import { useSelector } from "react-redux";

// material-ui
import Paper from "@material-ui/core/Paper";

export default function Map(props) {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

  const mapboxstyle = useSelector((state) => state.mapstyle);

  const currentVis = useSelector((state) => state.currentVis);
  const layer = useSelector((state) => state[currentVis]);
  const renderedLayer = useSelector((state) => state[currentVis].render());

  const [hoverObject, setHoverObject] = useState({});

  const getShowOnHoverIndices = (id) => {
    if (layer.id === id) {
      return layer.showOnHover;
    }
  };
  const getHeaderNames = (id) => {
    if (layer.id === id) {
      return layer.dataTable.headerNames;
    }
  };

  const renderTooltip = () => {
    if (hoverObject.object !== undefined) {
      const layerId = hoverObject.layer.id;
      const showOnHover = getShowOnHoverIndices(layerId);
      const headerNames = getHeaderNames(layerId);
      if (showOnHover.length === 0) {
        return <div></div>;
      }
      const metadataTags = showOnHover.map((index) => {
        return (
          <div key={index}>
            {headerNames[index]} : {hoverObject.object[index]}
          </div>
        );
      });
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
          <Paper style={{ padding: 10 }} elevation={3}>
            {metadataTags}
          </Paper>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  const onHover = (info, event) => {
    setHoverObject(info);
  };

  const handleViewStateChange = ({ viewState }) => {
    props.setViewState(viewState);
  };

  return (
    <DeckGL
      viewState={props.viewState}
      onViewStateChange={handleViewStateChange}
      controller={true}
      layers={[renderedLayer]}
      onHover={onHover}
    >
      <StaticMap
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle={mapboxstyle.url}
      />
      {renderTooltip()}
    </DeckGL>
  );
}
