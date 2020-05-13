export const addRawData = (state) => {
  return {
    type: "LINE RAW DATA",
    rawData: state.rawData,
    headers: state.headers,
  };
};

export const addSeries = ({ series, legendHeaders, xAxis, yAxis }) => {
  return {
    type: "ADD LINE SERIES",
    series,
    legendHeaders,
    xAxis,
    yAxis,
  };
};

export const setXAxisTitle = ({ xAxisTitle }) => {
  return {
    type: "LINE X TITLE",
    payload: xAxisTitle,
  };
};

export const setYAxisTitle = ({ yAxisTitle }) => {
  return {
    type: "LINE Y TITLE",
    payload: yAxisTitle,
  };
};
