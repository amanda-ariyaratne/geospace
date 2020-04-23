const layersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.new];
    case "UPDATE":
      const newState = [...state];
      newState.splice(action.index, 1);
      newState.splice(action.index, 0, action.layer);
      return newState;
    default:
      return state;
  }
};

export default layersReducer;
