// import mapstyleReducer from "./mapstyle";
// import viewstateReducer from "./viewstate";
// import layersReducer from "./layers";
// import barChartReducer from "./barchart";
// import chartReducer from "./chart";
// import sankeyDiagramReducer from "./sankeydiagram";
// import lineChartReducer from "./linechart";
import datafileReducer from "./datafile";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  // mapstyle: mapstyleReducer,
  // viewstate: viewstateReducer,
  // layers: layersReducer,
  // barChart: barChartReducer,
  // chart: chartReducer,
  // sankeyDiagram: sankeyDiagramReducer,
  // lineChart: lineChartReducer,
  datafile: datafileReducer,
});

export default rootReducer;
