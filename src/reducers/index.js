import mapstyleReducer from "./mapstyle";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  mapstyle: mapstyleReducer,
});

export default rootReducer;
