// import viewstateReducer from "./viewstate";
import layersReducer from "./layers";
import barReducer from "./bar";
// import chartReducer from "./chart";
// import sankeyDiagramReducer from "./sankeydiagram";
// import lineChartReducer from "./linechart";
import datafileReducer from "./datafile";
import mapstyleReducer from "./mapstyle";
import currentVisualizationReducer from "./currentVisualization";
import scatterplotReducer from "./scatterplot";
import heatReducer from "./heat";
import routeReducer from "./route";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  // viewstate: viewstateReducer,
  layers: layersReducer,
  bar: barReducer,
  // chart: chartReducer,
  // sankeyDiagram: sankeyDiagramReducer,
  // lineChart: lineChartReducer,
  datafile: datafileReducer,
  mapstyle: mapstyleReducer,
  currentVis: currentVisualizationReducer,
  scatterplot: scatterplotReducer,
  heat: heatReducer,
  route: routeReducer,
});

export default rootReducer;
