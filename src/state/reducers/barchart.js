const barChartReducer = (
  state = {
    rawData: [],
    headers: [],
    filteredData: [],
    series: [],
    stackBy: "x",
    legendHeaders: [],
    xAxis: "",
    yAxis: [],
    xAxisTitle: "",
    yAxisTitle: "",
  },
  action
) => {
  switch (action.type) {
    case "RAW DATA":
      return {
        rawData: action.rawData,
        headers: action.headers,
        filteredData: [],
        series: [],
        stackBy: "x",
        legendHeaders: [],
        xAxis: "",
        yAxis: [],
        xAxisTitle: "",
        yAxisTitle: "",
      };
    case "ADD SERIES":
      const newSeries = {
        ...state,
        series: action.series,
        legendHeaders: action.legendHeaders,
        xAxis: action.xAxis,
        yAxis: action.yAxis,
      };
      return newSeries;
    case "TOGGLE STACK":
      const toggled = {
        ...state,
        stackBy: action.payload,
      };
      return toggled;
    case "BAR X TITLE":
      return {
        ...state,
        xAxisTitle: action.payload,
      };
    case "BAR Y TITLE":
      return {
        ...state,
        yAxisTitle: action.payload,
      };
    default:
      return state;
  }
};

export default barChartReducer;
