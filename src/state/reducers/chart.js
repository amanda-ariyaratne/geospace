const chartReducer = (state = 0, action) => {
  switch (action.type) {
    case "SELECT TYPE":
      return action.payload;
    default:
      return state;
  }
};

export default chartReducer;
