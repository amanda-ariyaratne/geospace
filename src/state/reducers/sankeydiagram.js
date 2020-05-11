const sankeyDiagramReducer = (
  state = {
    rawData: [],
    headers: [],
    filteredData: [],
    from: "",
    to: "",
    weight: "",
    specifyWeight: 0,
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
        weight: "",
        specifyWeight: 0,
      };
    case "SANKEY FILTERED DATA":
      return {
        ...state,
        filteredData: action.filtered,
        from: action.from,
        to: action.to,
        specifyWeight: action.specifyWeight,
        weight: action.weight,
      };
    default:
      return state;
  }
};

export default sankeyDiagramReducer;
