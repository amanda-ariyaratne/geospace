import { isValidFile, getFileExtension } from "./FileHelper";

test("is Valid File", () => {
  expect(() => {
    isValidFile("dataset.csv", [".csv"]);
  }).toBeTruthy();
});

test("is Valid File", () => {
  expect(() => {
    isValidFile("dataset.csv", [".csv", ".xls"]);
  }).toBeTruthy();
});

test("is Valid File", () => {
  expect(isValidFile("dataset.xls", [".csv"])).not.toBeTruthy();
});

test("is Valid File", () => {
  expect(() => {
    isValidFile("", [".csv"]);
  }).toThrow();
});

test("is Valid File", () => {
  expect(() => {
    isValidFile("dataset.csv", []);
  }).toThrow();
});

test("is Valid File", () => {
  expect(() => {
    isValidFile("dataset", [".csv"]);
  }).toThrow();
});

test("get file extension", () => {
  expect(getFileExtension("dataset.csv")).toBe(".csv");
});

test("get file extension", () => {
  expect(() => {
    getFileExtension("dataset");
  }).toThrow();
});

test("get file extension", () => {
  expect(() => {
    getFileExtension("");
  }).toThrow();
});
