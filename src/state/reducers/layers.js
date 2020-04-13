const layersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.newItem];
    default:
      return state;
  }
};

export default layersReducer;
