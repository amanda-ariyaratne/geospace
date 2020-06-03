export const addScatterplot = (state) => {
  return {
    type: "ADD SCATTERPLOT",
    payload: state,
  };
};

export const changeScatterplotMapColor = (state) => {
  return {
    type: "CHANGE SCATTERPLOT COLOR",
    payload: state,
  };
};

export const changeScatterplotMapOpacity = (state) => {
  return {
    type: "CHANGE SCATTERPLOT OPACITY",
    payload: state,
  };
};

export const changeScatterplotMapRadius = (state) => {
  return {
    type: "CHANGE SCATTERPLOT RADIUS",
    payload: state,
  };
};

export const addMetadataToShowOnHover = (state) => {
  return {
    type: "ADD SCATTERPLOT METADATA",
    payload: state,
  };
};

export const removeMetadataFromShowOnHover = (state) => {
  return {
    type: "REMOVE SCATTERPLOT METADATA",
    payload: state,
  };
};
