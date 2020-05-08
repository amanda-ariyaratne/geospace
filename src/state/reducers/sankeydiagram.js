const sankeyDiagramReducer = (
  state = {
    rawData: [],
    headers: [],
    filteredData: [],
    from: "",
    to: "",
  },
  action
) => {
  switch (action.type) {
    case "SANKEY RAW DATA":
      return {
        rawData: action.rawData,
        headers: action.headers,
        filteredData: [],
        from: "",
        to: "",
      };
    case "SANKEY FILTERED DATA":
      return {
        ...state,
        filteredData: action.filtered,
        from: action.from,
        to: action.to,
      };
    default:
      return state;
  }
};

export default sankeyDiagramReducer;
