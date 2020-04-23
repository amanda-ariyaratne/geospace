const layersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.new];
    default:
      return state;
  }
};

export default layersReducer;
