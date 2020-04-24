import { isValidFile } from "./FileHelper";

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
