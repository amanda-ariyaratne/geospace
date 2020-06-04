export const addRoute = (state) => {
  return {
    type: "ADD ROUTE",
    payload: state,
  };
};

export const changeRouteMapOpacity = (state) => {
  return {
    type: "CHANGE ROUTE OPACITY",
    payload: state,
  };
};

export const changeRouteMapWidth = (state) => {
  return {
    type: "CHANGE ROUTE WIDTH",
    payload: state,
  };
};

export const addMetadataToShowOnHover = (state) => {
  return {
    type: "ADD ROUTE METADATA",
    payload: state,
  };
};

export const removeMetadataFromShowOnHover = (state) => {
  return {
    type: "REMOVE ROUTE METADATA",
    payload: state,
  };
};
