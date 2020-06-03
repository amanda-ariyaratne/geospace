const scatterplotReducer = (state = null, action) => {
  switch (action.type) {
    case "ADD SCATTERPLOT":
      return action.payload;

    case "CHANGE SCATTERPLOT COLOR":
      state.getColor = action.payload;
      return state;

    case "CHANGE SCATTERPLOT OPACITY":
      state.opacity = action.payload;
      return state;

    case "CHANGE SCATTERPLOT RADIUS":
      state.radiusMinPixels = action.payload;
      return state;

    case "ADD SCATTERPLOT METADATA":
      state.showOnHover = [...state.showOnHover, action.payload];
      return state;

    case "REMOVE SCATTERPLOT METADATA":
      const newShowOnHover = [...state.showOnHover];
      const removeIndex = newShowOnHover.indexOf(state);
      newShowOnHover.splice(removeIndex, 1);
      state.showOnHover = newShowOnHover;
      return state;

    default:
      return state;
  }
};

export default scatterplotReducer;
