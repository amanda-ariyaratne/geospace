import mapstyleReducer from "./mapstyle";
import viewstateReducer from "./viewstate";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  mapstyle: mapstyleReducer,
  viewstate: viewstateReducer,
});

export default rootReducer;
