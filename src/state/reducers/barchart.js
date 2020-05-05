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
    default:
      return state;
  }
};

export default barChartReducer;
