import { mapStyles } from "../../data/mapstyles";

const stylelist = mapStyles;

const mapstlyeReducer = (state = stylelist[2], action) => {
  switch (action.type) {
    case "CHANGE MAPSTYLE":
      return action.payload;
    default:
      return state;
  }
};

export default mapstlyeReducer;
