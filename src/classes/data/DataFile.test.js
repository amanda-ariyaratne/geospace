import DataFile from "./DataFile";

test("validate constructor", () => {
  let blob = new Blob([JSON.stringify([1, 2, 3])], {
    type: "application/json",
  });
  let file = new DataFile(blob);
  expect(file.getFile()).toEqual(blob);
});

test("validate constructor", () => {
  let blob = new Blob([JSON.stringify([1, 2, 3])], {
    type: "application/json",
  });
  let file = new DataFile(blob);
  expect(file.getFile()).toEqual(blob);
});
