export const setLatitude = (latitude) => {
  return {
    type: "SET_LATITUDE",
    payload: latitude,
  };
};

export const setLongitude = (longitude) => {
  return {
    type: "SET_LONGITUDE",
    payload: longitude,
  };
};

export const setZoom = (zoom) => {
  return {
    type: "SET_ZOOM",
    payload: zoom,
  };
};

export const setPitch = (pitch) => {
  return {
    type: "SET_PITCH",
    payload: pitch,
  };
};

export const setBearing = (bearing) => {
  return {
    type: "SET_BEARING",
    payload: bearing,
  };
};
