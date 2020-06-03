const heatReducer = (state = null, action) => {
  switch (action.type) {
    case "ADD HEAT":
      return action.payload;

    case "CHANGE HEAT RADIUS":
      state.radiusPixels = action.payload;
      return state;

    case "CHANGE HEAT INTENSITY":
      state.intensity = action.payload;
      return state;

    case "CHANGE HEAT THRESHOLD":
      state.threshold = action.payload;
      return state;

    case "CHANGE HEAT OPACITY":
      state.opacity = action.payload;
      return state;

    default:
      return state;
  }
};

export default heatReducer;
