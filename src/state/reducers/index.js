import mapstyleReducer from "./mapstyle";
import viewstateReducer from "./viewstate";
import layersReducer from "./layers";
import barChartReducer from "./barchart";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  mapstyle: mapstyleReducer,
  viewstate: viewstateReducer,
  layers: layersReducer,
  barChart: barChartReducer,
});

export default rootReducer;
