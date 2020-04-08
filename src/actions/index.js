export const changeMapboxStyle = (style) => {
  return {
    type: "CHANGE",
    payload: style,
  };
};
