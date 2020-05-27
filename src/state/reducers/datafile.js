const datafileReducer = (state = null, action) => {
  switch (action.type) {
    case "ADD DATA FILE":
      return action.payload;
    default:
      return state;
  }
};

export default datafileReducer;
