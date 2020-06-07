// import viewstateReducer from "./viewstate";
import layersReducer from "./layers";
import barReducer from "./bar";
// import chartReducer from "./chart";
import sankeyReducer from "./sankey";
import lineReducer from "./line";
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
  sankey: sankeyReducer,
  // lineChart: lineChartReducer,
  datafile: datafileReducer,
  mapstyle: mapstyleReducer,
  currentVis: currentVisualizationReducer,
  scatterplot: scatterplotReducer,
  heat: heatReducer,
  route: routeReducer,
  line: lineReducer,
});

export default rootReducer;
