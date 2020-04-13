import shortid from "shortid";

const layersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      action.newItem.id = shortid.generate();
      return [...state, action.newItem];
    default:
      return state;
  }
};

export default layersReducer;
