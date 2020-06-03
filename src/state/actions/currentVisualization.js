export const changeCurrentVisualization = (vis) => {
  switch (vis) {
    case "scatterplot":
      return {
        type: "SET SCATTERPLOT",
      };
    case "heat":
      return {
        type: "SET HEAT",
      };
    case "route":
      return {
        type: "SET ROUTE",
      };
    case "bar":
      return {
        type: "SET BAR",
      };
    case "line":
      return {
        type: "SET LINE",
      };
    case "sankey":
      return {
        type: "SET SANKEY",
      };
    default:
      return null;
  }
};
