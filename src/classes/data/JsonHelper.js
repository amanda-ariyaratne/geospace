export const isJsonArray = (jsonObj) => {
  if (Array.isArray(jsonObj)) {
    return true;
  }
  return false;
};
