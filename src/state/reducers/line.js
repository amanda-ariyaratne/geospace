const lineReducer = (state = null, action) => {
  switch (action.type) {
    case "ADD LINE":
      return action.payload;

    case "CHANGE LINE CHART TITLE":
      state.title = action.payload;
      return state;

    case "CHANGE LINE X TITLE":
      state.hAxis.title = action.payload;
      return state;

    case "CHANGE LINE Y TITLE":
      state.vAxis.title = action.payload;
      return state;

    case "CHANGE LINE CURVE TYPE":
      state.curveType = action.payload;
      return state;

    case "CHANGE LINE X TYPE":
      state.xAxisType = action.payload;
      return state;

    default:
      return state;
  }
};

export default lineReducer;
