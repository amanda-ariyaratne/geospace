import { isJsonArray, getArrayAttributes } from "./JsonHelper";

test("test isJsonArray method", () => {
  expect(isJsonArray([1, 2, 3])).toBeTruthy();
  expect(isJsonArray([])).toBeTruthy();
  expect(isJsonArray([{ id: 1 }, { id: 2 }, { id: 3 }])).toBeTruthy();
  expect(isJsonArray({})).toBeFalsy();
  expect(isJsonArray({ item: [{ id: 1 }, { id: 2 }, { id: 3 }] })).toBeFalsy();
  expect(isJsonArray({ id: 1, name: "John" })).toBeFalsy();
});

test("test getArrayAttributes", () => {
  expect(getArrayAttributes(["a", "b", "c"])).toEqual({
    "0": "a",
    "1": "b",
    "2": "c",
  });

  expect(getArrayAttributes([1, 2, 3])).toEqual({
    "0": 1,
    "1": 2,
    "2": 3,
  });

  expect(() => {
    getArrayAttributes({});
  }).toThrow("Not a json array");

  expect(() => {
    getArrayAttributes([]);
  }).toThrow("The file does not contain any objects to display");
});
