const currentVisualizationReducer = (state = null, action) => {
  switch (action.type) {
    case "SET SCATTERPLOT":
      return "scatterplot";
    case "SET HEAT":
      return "heat";
    case "SET ROUTE":
      return "route";
    case "SET BAR":
      return "bar";
    case "SET LINE":
      return "line";
    case "SET SANKEY":
      return "sankey";
    default:
      return state;
  }
};

export default currentVisualizationReducer;
