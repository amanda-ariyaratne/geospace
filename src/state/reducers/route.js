const routeReducer = (state = null, action) => {
  switch (action.type) {
    case "ADD ROUTE":
      return action.payload;

    case "CHANGE ROUTE OPACITY":
      state.opacity = action.payload;
      return state;

    case "CHANGE ROUTE WIDTH":
      state.widthScale = action.payload;
      return state;

    case "ADD ROUTE METADATA":
      state.showOnHover = [...state.showOnHover, action.payload];
      return state;

    case "REMOVE ROUTE METADATA":
      const newShowOnHover = [...state.showOnHover];
      const removeIndex = newShowOnHover.indexOf(state);
      newShowOnHover.splice(removeIndex, 1);
      state.showOnHover = newShowOnHover;
      return state;

    default:
      return state;
  }
};

export default routeReducer;
