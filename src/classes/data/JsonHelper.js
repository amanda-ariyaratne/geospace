export const isJsonArray = (jsonObj) => {
  if (Array.isArray(jsonObj)) {
    return true;
  }
  return false;
};

export const getArrayAttributes = (row) => {
  if (!isJsonArray(row)) {
    throw new Error("Not a json array");
  }
  if (row.length === 0) {
    throw new Error("The file does not contain any objects to display");
  }
  let columnObject = {};
  for (let i = 0; i < row.length; i++) {
    columnObject[`Column ${i}`] = row[i];
  }
  return columnObject;
};

export const getJsonObjectFromArray = (values, keys) => {
  if (values.length !== keys.length) {
    throw new Error("Arrays are of two different lengths");
  }
  const obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
  }
  return obj;
};
