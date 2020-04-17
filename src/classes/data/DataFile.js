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

  parseToJsonAsync() {
    return new Promise((resolve, reject) => {
      try {
        this.jsonData = JSON.parse(this.fileText);
        resolve(this);
      } catch (err) {
        reject(err);
      }
    });
  }

  getJsonAttributes() {}

  getFile() {
    return this.file;
  }

  getFileText() {
    return this.fileText;
  }

  getJsonData() {
    return this.jsonData;
  }
}
