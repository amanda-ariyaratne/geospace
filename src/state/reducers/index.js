// import viewstateReducer from "./viewstate";
import layersReducer from "./layers";
// import barChartReducer from "./barchart";
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
  // barChart: barChartReducer,
  // chart: chartReducer,
  // sankeyDiagram: sankeyDiagramReducer,
  // lineChart: lineChartReducer,
  datafile: datafileReducer,
  mapstyle: mapstyleReducer,
  currentVis: currentVisualizationReducer,
  scatterplot: scatterplotReducer,
  route: routeReducer,
});

export default rootReducer;
