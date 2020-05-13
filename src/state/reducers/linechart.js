const lineChartReducer = (
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
    case "LINE RAW DATA":
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
    case "ADD LINE SERIES":
      const newSeries = {
        ...state,
        series: action.series,
        legendHeaders: action.legendHeaders,
        xAxis: action.xAxis,
        yAxis: action.yAxis,
      };
      return newSeries;
    case "LINE X TITLE":
      return {
        ...state,
        xAxisTitle: action.payload,
      };
    case "LINE Y TITLE":
      return {
        ...state,
        yAxisTitle: action.payload,
      };
    default:
      return state;
  }
};

export default lineChartReducer;
