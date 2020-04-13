import mapstyleReducer from "./mapstyle";
import viewstateReducer from "./viewstate";
import layersReducer from "./layers";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  mapstyle: mapstyleReducer,
  viewstate: viewstateReducer,
  layers: layersReducer,
});

export default rootReducer;
