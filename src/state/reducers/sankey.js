const sankeyReducer = (state = null, action) => {
  switch (action.type) {
    case "ADD SANKEY":
      return action.payload;

    default:
      return state;
  }
};

export default sankeyReducer;
