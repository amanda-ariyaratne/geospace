const barReducer = (state = null, action) => {
  switch (action.type) {
    case "ADD BAR":
      return action.payload;

    case "CHANGE BAR STACK DIRECTION":
      state.isStacked = action.payload;
      return state;

    case "CHANGE BAR CHART TITLE":
      state.title = action.payload;
      return state;

    case "CHANGE BAR X TITLE":
      state.hAxis.title = action.payload;
      return state;

    case "CHANGE BAR Y TITLE":
      state.vAxis.title = action.payload;
      return state;

    default:
      return state;
  }
};

export default barReducer;
