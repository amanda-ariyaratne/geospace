export const addLayer = (layer) => {
  return {
    type: "ADD",
    new: layer,
  };
};

export const updateLayer = (layer, index) => {
  return {
    type: "UPDATE",
    layer: layer,
    index: index,
  };
};
