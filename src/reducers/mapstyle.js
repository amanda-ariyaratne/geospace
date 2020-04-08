import { mapStyles } from "../data/mapstyles";

const stylelist = mapStyles;

const mapstlyeReducer = (state = stylelist[0], action) => {
  switch (action.type) {
    case "CHANGE":
      return action.style;
    default:
      return state;
  }
};

export default mapstlyeReducer;
