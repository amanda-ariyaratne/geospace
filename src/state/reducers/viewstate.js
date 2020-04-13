const viewstateReducer = (state, action) => {
  if (state === undefined) {
    const viewstate = {
      latitude: 20,
      longitude: 0,
      zoom: 2,
      bearing: 0,
      pitch: 0,
    };
    return viewstate;
  }

  switch (action.type) {
    case "SET_LATITUDE":
      return Object.assign({}, state, {
        latitude: action.payload,
      });
    case "SET_LONGITUDE":
      return Object.assign({}, state, {
        longitude: action.payload,
      });
    case "SET_ZOOM":
      return Object.assign({}, state, {
        zoom: action.payload,
      });
    case "SET_PITCH":
      return Object.assign({}, state, {
        pitch: action.payload,
      });
    case "SET_BEARING":
      return Object.assign({}, state, {
        bearing: action.payload,
      });
    default:
      return state;
  }
};

export default viewstateReducer;
