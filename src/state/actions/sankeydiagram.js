export const addRawData = (state) => {
  return {
    type: "SANKEY RAW DATA",
    rawData: state.rawData,
    headers: state.headers,
  };
};

export const addFilteredData = (state) => {
  return {
    type: "SANKEY FILTERED DATA",
    filtered: state.filtered,
    from: state.from,
    to: state.to,
  };
};
