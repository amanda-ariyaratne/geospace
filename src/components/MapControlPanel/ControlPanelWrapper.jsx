import React from "react";

// components
import ScatterplotMapControlPanel from "./ScatterplotMapControlPanel";
import HeatMapControlPanel from "./HeatMapControlPanel";
import RouteMapControlPanel from "./RouteMapControlPanel";

// redux
import { useSelector } from "react-redux";

export default function ControlPanelWrapper(props) {
  const type = useSelector((state) => state.currentVis);
  switch (type) {
    case "scatterplot":
      return (
        <ScatterplotMapControlPanel
          viewState={props.viewState}
          setViewState={props.setViewState}
        />
      );
    case "heat":
      return (
        <HeatMapControlPanel
          viewState={props.viewState}
          setViewState={props.setViewState}
        />
      );
    case "route":
      return (
        <RouteMapControlPanel
          viewState={props.viewState}
          setViewState={props.setViewState}
        />
      );
    default:
      return <div></div>;
  }
}
