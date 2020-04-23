export const isValidFile = (fileName, valid) => {
  const fileExt = fileName.substr(fileName.lastIndexOf("."));
  console.log(fileExt);
  if (valid.indexOf(fileExt) < 0) {
    return false;
  }
  return true;
};
