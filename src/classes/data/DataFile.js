import { isJsonArray, getArrayAttributes } from "./JsonHelper";

export default class DataFile {
  constructor(file) {
    this.file = file;
    this.fileText = null;
    this.jsonData = null;
    this.fileKeys = null;
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
        const lines = this.fileText.split("\n");
        const result = [];
        const headers = lines[0].split(",");
        this.fileKeys = headers;

        for (let i = 1; i < lines.length; i++) {
          let obj = [];
          let currentline = lines[i].split(",");

          for (var j = 0; j < headers.length; j++) {
            obj.push(
              isNaN(currentline[j]) ? currentline[j] : Number(currentline[j])
            );
          }

          result.push(obj);
        }
        this.jsonData = result;
        resolve(this);
      } catch (err) {
        reject(new Error("The file could not be parsed to Json"));
      }
    });
  }

  getKeys() {
    return this.fileKeys;
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
