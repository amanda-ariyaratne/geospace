export const addHeat = (state) => {
  return {
    type: "ADD HEAT",
    payload: state,
  };
};

export const changeHeatMapRadius = (state) => {
  return {
    type: "CHANGE HEAT RADIUS",
    payload: state,
  };
};

export const changeHeatMapIntensity = (state) => {
  return {
    type: "CHANGE HEAT INTENSITY",
    payload: state,
  };
};

export const changeHeatMapThreshold = (state) => {
  return {
    type: "CHANGE HEAT THRESHOLD",
    payload: state,
  };
};

export const changeHeatMapOpacity = (state) => {
  return {
    type: "CHANGE HEAT OPACITY",
    payload: state,
  };
};
