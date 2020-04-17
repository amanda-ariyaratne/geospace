import { isJsonArray } from "./JsonHelper";

test("test isJsonArray method", () => {
  expect(isJsonArray([1, 2, 3])).toBeTruthy();
  expect(isJsonArray([])).toBeTruthy();
  expect(isJsonArray([{ id: 1 }, { id: 2 }, { id: 3 }])).toBeTruthy();
  expect(isJsonArray({})).toBeFalsy();
  expect(isJsonArray({ item: [{ id: 1 }, { id: 2 }, { id: 3 }] })).toBeFalsy();
  expect(isJsonArray({ id: 1, name: "John" })).toBeFalsy();
});
