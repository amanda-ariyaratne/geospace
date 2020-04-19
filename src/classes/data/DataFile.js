import { isJsonArray, getArrayAttributes } from "./JsonHelper";

export default class DataFile {
  constructor(file) {
    this.file = file;
    this.fileText = null;
    this.jsonData = null;
  }

  extractTextAsync() {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        this.fileText = e.target.result;
        resolve(this);
      };
      fileReader.onerror = (e) => {
        fileReader.abort();
        reject(new Error("Your file could not be read"));
      };
      fileReader.readAsText(this.file);
    });
  }

  parseToJsonArray() {
    return new Promise((resolve, reject) => {
      try {
        this.fileText = this.fileText.replace(/(\r\n|\n|\r)/gm, "");
        this.jsonData = JSON.parse(this.fileText);
        if (isJsonArray(this.jsonData)) {
          resolve(this);
        } else {
          reject(new Error("The file does not contain a Json array"));
        }
      } catch (err) {
        reject(new Error("The file could not be parsed to Json"));
      }
    });
  }

  getAttributesObject() {
    if (this.jsonData.length === 0) {
      throw new Error("The file does not contain any objects to display");
    }
    try {
      let columnObject = this.jsonData[0];

      if (isJsonArray(columnObject)) {
        columnObject = getArrayAttributes(columnObject);
      }

      return columnObject;
    } catch (error) {
      throw error;
    }
  }

  getFile() {
    return this.file;
  }

  setFile(file) {
    this.file = file;
  }

  getFileText() {
    return this.fileText;
  }

  setFileText(fileText) {
    this.fileText = fileText;
  }

  getJsonData() {
    return this.jsonData;
  }

  setJsonData(jsonData) {
    this.jsonData = jsonData;
  }
}
