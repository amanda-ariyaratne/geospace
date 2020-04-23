export const isValidFile = (fileName, valid) => {
  console.log(fileName);
  const fileExt = fileName.substr(fileName.lastIndexOf("."));
  if (valid.indexOf(fileExt) < 0) {
    return false;
  }
  return true;
};

export const getFileExtension = (fileName) => {
  const fileExt = fileName.substr(fileName.lastIndexOf("."));
  return fileExt;
};
