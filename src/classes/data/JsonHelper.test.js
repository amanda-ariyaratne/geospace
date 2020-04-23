import {
  isJsonArray,
  getArrayAttributes,
  getJsonObjectFromArray,
} from "./JsonHelper";

test("test isJsonArray method", () => {
  expect(isJsonArray([1, 2, 3])).toBeTruthy();
});

test("test isJsonArray method", () => {
  expect(isJsonArray([])).toBeTruthy();
});

test("test isJsonArray method", () => {
  expect(isJsonArray([{ id: 1 }, { id: 2 }, { id: 3 }])).toBeTruthy();
});

test("test isJsonArray method", () => {
  expect(isJsonArray({})).toBeFalsy();
});

test("test isJsonArray method", () => {
  expect(isJsonArray({ item: [{ id: 1 }, { id: 2 }, { id: 3 }] })).toBeFalsy();
});

test("test isJsonArray method", () => {
  expect(isJsonArray({ id: 1, name: "John" })).toBeFalsy();
});

test("test getArrayAttributes", () => {
  expect(getArrayAttributes(["a", "b", "c"])).toEqual({
    "Column 0": "a",
    "Column 1": "b",
    "Column 2": "c",
  });
});

test("test getArrayAttributes", () => {
  expect(getArrayAttributes([1, 2, 3])).toEqual({
    "Column 0": 1,
    "Column 1": 2,
    "Column 2": 3,
  });
});

test("test getArrayAttributes", () => {
  expect(() => {
    getArrayAttributes({});
  }).toThrow("Not a json array");
});

test("test getArrayAttributes", () => {
  expect(() => {
    getArrayAttributes([]);
  }).toThrow("The file does not contain any objects to display");
});

test("test getJsonObjectFromArray", () => {
  expect(getJsonObjectFromArray([255, 0, 0], ["r", "g", "b"])).toEqual({
    r: 255,
    g: 0,
    b: 0,
  });
});

test("test getJsonObjectFromArray", () => {
  expect(() => {
    getJsonObjectFromArray([255, 0, 0], ["r", "g", "b", "a"]);
  }).toThrow("Arrays are of two different lengths");
});
