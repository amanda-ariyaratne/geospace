export const isValidFile = (fileName, valid) => {
  if (valid.length === 0) {
    throw new Error("No valid types passed");
  }
  const dotIndex = fileName.lastIndexOf(".");
  if (dotIndex < 0) {
    throw new Error("Filename does not contain an extension");
  }
  const fileExt = fileName.substr(dotIndex);
  if (valid.indexOf(fileExt) < 0) {
    return false;
  }
  return true;
};

export const getFileExtension = (fileName) => {
  const fileExt = fileName.substr(fileName.lastIndexOf("."));
  return fileExt;
};
