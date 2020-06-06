import XLSX from "xlsx";
import { getFileExtension } from "./FileHelper";
import Papa from "papaparse";

export default class DataFile {
  constructor(file) {
    this.file = file;
    this.data = null;
    this.headers = null;
  }

  readFromFile() {
    return new Promise((resolve, reject) => {
      const fileExtension = getFileExtension(this.file.name);

      if (fileExtension === ".csv") {
        this.readFromCSV()
          .then((data) => {
            this.headers = data[0];
            this.data = data[1];
            this.getFieldTypes();
            resolve(this);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        this.readFromExcel().then((workbook) => {
          this.prepareDataFromExcel(workbook);
          resolve(this);
        });
      }
    });
  }

  prepareDataFromExcel(workbook) {
    const first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
    this.data = XLSX.utils.sheet_to_json(first_worksheet, { header: 1 });
    this.headers = this.data[0];
    this.data.splice(0, 1);
  }

  readFromExcel() {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        resolve(workbook);
      };
      fileReader.readAsArrayBuffer(this.file);
    });
  }

  readFromCSV() {
    return new Promise((resolve, reject) => {
      Papa.parse(this.file, {
        worker: true,
        skipEmptyLines: true,
        complete: (parseResult) => {
          if (parseResult.errors.length > 0) {
            reject(parseResult.errors[0]);
          }
          const headers = parseResult.data.shift();
          let data = parseResult.data;
          resolve([headers, data]);
        },
      });
    });
  }

  getFieldTypes() {
    let types = {
      string: true,
      number: false,
      longitude: false,
      latitude: false,
    };
    let headers = this.headers.map((header, index) => {
      return {
        index: index,
        name: header,
        ...types,
        selected: "string",
      };
    });
    let dataTranspose = this.data[0].map((col, i) =>
      this.data.map((row) => row[i])
    );

    console.log(dataTranspose);
    for (let i = 0; i < dataTranspose.length; ++i) {
      headers[i].number = this.checkIfNumber(dataTranspose[i]);
      if (headers[i].number) {
        headers[i].longitude = this.checkIfLongitude(dataTranspose[i]);
        headers[i].latitude = this.checkIfLatitude(dataTranspose[i]);
      }
    }
    this.headers = headers;
  }

  checkIfNumber(column) {
    return column.every((value) => !isNaN(value));
  }

  checkIfLongitude(column) {
    return column.every((value) => {
      return isFinite(Number(value)) && Math.abs(Number(value)) <= 180;
    });
  }

  checkIfLatitude(column) {
    return column.every((value) => {
      return isFinite(Number(value)) && Math.abs(Number(value)) <= 90;
    });
  }

  setHeaders(headers) {
    this.headers = headers;
  }
}
