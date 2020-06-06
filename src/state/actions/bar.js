export const addBar = (state) => {
  return {
    type: "ADD BAR",
    payload: state,
  };
};

export const changeBarStackDirection = (state) => {
  return {
    type: "CHANGE BAR STACK DIRECTION",
    payload: state,
  };
};

export const changeBarChartTitle = (state) => {
  return {
    type: "CHANGE BAR CHART TITLE",
    payload: state,
  };
};

export const changeBarXTitle = (state) => {
  return {
    type: "CHANGE BAR X TITLE",
    payload: state,
  };
};

export const changeBarYTitle = (state) => {
  return {
    type: "CHANGE BAR Y TITLE",
    payload: state,
  };
};
