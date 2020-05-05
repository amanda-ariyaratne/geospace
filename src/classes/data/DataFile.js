import XLSX from "xlsx";
import { getFileExtension } from "./FileHelper";

export default class DataFile {
  constructor(file) {
    this.file = file;
    this.rawData = null;
    this.proccesedData = null;
    this.fileKeys = null;
  }

  readFromFile() {
    return new Promise((resolve, reject) => {
      const fileExtension = getFileExtension(this.file.name);

      if (fileExtension === ".csv") {
        this.readFromCSV().then(() => {
          this.prepareDataFromCSV();
          resolve(this);
        });
      } else {
        this.readFromExcel().then(() => {
          this.prepareDataFromExcel();
          resolve(this);
        });
      }
    });
  }

  prepareDataFromExcel() {
    const first_worksheet = this.rawData.Sheets[this.rawData.SheetNames[0]];
    this.jsonData = XLSX.utils.sheet_to_json(first_worksheet, { header: 1 });
    this.fileKeys = this.jsonData[0];
    this.jsonData.splice(0, 1);
  }

  prepareDataFromCSV() {
    const lines = this.rawData.split("\n");
    const result = [];
    this.fileKeys = lines[0].split(",");
    for (let i = 1; i < lines.length - 1; i++) {
      let obj = [];
      let currentline = lines[i].split(",");
      for (var j = 0; j < this.fileKeys.length; j++) {
        obj.push(
          isNaN(currentline[j]) ? currentline[j] : Number(currentline[j])
        );
      }
      result.push(obj);
    }
    this.jsonData = result;
  }

  readFromExcel() {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        this.rawData = workbook;
        resolve();
      };
      fileReader.readAsArrayBuffer(this.file);
    });
  }

  readFromCSV() {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        this.rawData = e.target.result;
        resolve();
      };
      fileReader.onerror = (e) => {
        fileReader.abort();
        reject(new Error("Your file could not be read"));
      };
      fileReader.readAsText(this.file);
    });
  }

  getKeys() {
    try {
      return this.fileKeys;
    } catch (err) {
      throw new Error("Column headers could not be found.");
    }
  }

  getFile() {
    return this.file;
  }

  setFile(file) {
    this.file = file;
  }

  getJsonData() {
    return this.jsonData;
  }

  setJsonData(jsonData) {
    this.jsonData = jsonData;
  }
}
