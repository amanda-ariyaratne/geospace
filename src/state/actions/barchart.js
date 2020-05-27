export const addRawData = (state) => {
  return {
    type: "RAW DATA",
    rawData: state.rawData,
    headers: state.headers,
  };
};

export const addSeries = ({ series, legendHeaders, xAxis, yAxis }) => {
  return {
    type: "ADD SERIES",
    series,
    legendHeaders,
    xAxis,
    yAxis,
  };
};

export const toggleStack = (axis) => {
  return {
    type: "TOGGLE STACK",
    payload: axis,
  };
};

export const setXAxisTitle = ({ xAxisTitle }) => {
  return {
    type: "BAR X TITLE",
    payload: xAxisTitle,
  };
};

export const setYAxisTitle = ({ yAxisTitle }) => {
  return {
    type: "BAR Y TITLE",
    payload: yAxisTitle,
  };
};
