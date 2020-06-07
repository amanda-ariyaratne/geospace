export const addLine = (state) => {
  return {
    type: "ADD LINE",
    payload: state,
  };
};

export const changeLineChartTitle = (state) => {
  return {
    type: "CHANGE LINE CHART TITLE",
    payload: state,
  };
};

export const changeLineXTitle = (state) => {
  return {
    type: "CHANGE LINE X TITLE",
    payload: state,
  };
};

export const changeLineYTitle = (state) => {
  return {
    type: "CHANGE LINE Y TITLE",
    payload: state,
  };
};

export const changeLineCurveType = (state) => {
  return {
    type: "CHANGE LINE CURVE TYPE",
    payload: state,
  };
};
