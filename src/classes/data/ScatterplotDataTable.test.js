import ScatterplotDataTable from "./ScatterplotDataTable";

test("test testBeforeProcessing method", () => {
  const dt = new ScatterplotDataTable();
  dt.headers = ["longitude", "latitude", "description"];
  dt.longitudeHeaderIndex = 0;
  dt.latitudeHeaderIndex = 1;
  expect(dt.testBeforeProcessing()).toBeTruthy();
});

test("test testBeforeProcessing method", () => {
  const dt = new ScatterplotDataTable();
  dt.headers = [];
  dt.longitudeHeaderIndex = 0;
  dt.latitudeHeaderIndex = 1;
  expect(dt.testBeforeProcessing()).not.toBeTruthy();
});

test("test testBeforeProcessing method", () => {
  const dt = new ScatterplotDataTable();
  dt.headers = ["longitude", "latitude", "description"];

  dt.latitudeHeaderIndex = 1;
  expect(dt.testBeforeProcessing()).not.toBeTruthy();
});

test("test testBeforeProcessing method", () => {
  const dt = new ScatterplotDataTable();
  dt.headers = ["longitude", "latitude", "description"];
  dt.longitudeHeaderIndex = 0;
  expect(dt.testBeforeProcessing()).not.toBeTruthy();
});

test("test testBeforeProcessing method", () => {
  const dt = new ScatterplotDataTable();
  dt.headers = "longitude, latitude, description";
  dt.longitudeHeaderIndex = 0;
  dt.latitudeHeaderIndex = 1;
  expect(dt.testBeforeProcessing()).not.toBeTruthy();
});

test("test testBeforeProcessing method", () => {
  const dt = new ScatterplotDataTable();
  dt.headers = ["longitude"];
  dt.longitudeHeaderIndex = 0;
  dt.latitudeHeaderIndex = 1;
  expect(dt.testBeforeProcessing()).not.toBeTruthy();
});

test("test testBeforeProcessing method", () => {
  const dt = new ScatterplotDataTable();
  dt.headers = ["longitude", "latitude", "description"];
  dt.longitudeHeaderIndex = "";
  dt.latitudeHeaderIndex = 1;
  expect(dt.testBeforeProcessing()).not.toBeTruthy();
});

test("test testBeforeProcessing method", () => {
  const dt = new ScatterplotDataTable();
  dt.headers = ["longitude", "latitude", "description"];
  dt.longitudeHeaderIndex = 0;
  dt.latitudeHeaderIndex = "";
  expect(dt.testBeforeProcessing()).not.toBeTruthy();
});

test("test testBeforeProcessing method", () => {
  const dt = new ScatterplotDataTable();
  dt.headers = ["longitude", "latitude", "description"];
  dt.longitudeHeaderIndex = 3;
  dt.latitudeHeaderIndex = 1;
  expect(dt.testBeforeProcessing()).not.toBeTruthy();
});

test("test testBeforeProcessing method", () => {
  const dt = new ScatterplotDataTable();
  dt.headers = ["longitude", "latitude", "description"];
  dt.longitudeHeaderIndex = 0;
  dt.latitudeHeaderIndex = 3;
  expect(dt.testBeforeProcessing()).not.toBeTruthy();
});

test("test setDataset method", () => {
  const jsonData = [
    [-73.986022, 40.730743, 2],
    [-73.984293, 40.729468, 1],
    [-73.986022, 40.730743, 2],
  ];
  const dt = new ScatterplotDataTable();
  dt.headers = ["longitude", "latitude", "description"];
  dt.longitudeHeaderIndex = 0;
  dt.latitudeHeaderIndex = 1;
  dt.setDataset(jsonData);
  expect(dt.dataset).toEqual([
    [-73.986022, 40.730743, 2],
    [-73.984293, 40.729468, 1],
    [-73.986022, 40.730743, 2],
  ]);
});

test("test setDataset method", () => {
  const jsonData = [
    [-73.986022, 40.730743, 2],
    [-73.984293, 40.729468, 1],
    ["a", 40.729468, 2],
  ];
  const dt = new ScatterplotDataTable();
  dt.headers = ["longitude", "latitude", "description"];
  dt.longitudeHeaderIndex = 0;
  dt.latitudeHeaderIndex = 1;
  dt.setDataset(jsonData);
  expect(dt.dataset).toEqual([
    [-73.986022, 40.730743, 2],
    [-73.984293, 40.729468, 1],
  ]);
});

test("test setDataset method", () => {
  const jsonData = [
    [-73.986022, 40.730743, 2],
    [-73.984293, 40.729468, 1],
    [-73.984293, "b", 2],
  ];
  const dt = new ScatterplotDataTable();
  dt.headers = ["longitude", "latitude", "description"];
  dt.longitudeHeaderIndex = 0;
  dt.latitudeHeaderIndex = 1;
  dt.setDataset(jsonData);
  expect(dt.dataset).toEqual([
    [-73.986022, 40.730743, 2],
    [-73.984293, 40.729468, 1],
  ]);
});

test("test setDataset method", () => {
  const jsonData = [
    [2, 40.730743, -73.986022],
    [1, 40.729468, -73.984293],
    [2, 40.729468, -73.984293],
  ];
  const dt = new ScatterplotDataTable();
  dt.headers = ["des", "latitude", "longitude"];
  dt.longitudeHeaderIndex = 2;
  dt.latitudeHeaderIndex = 1;
  dt.setDataset(jsonData);
  expect(dt.dataset).toEqual([
    [-73.986022, 40.730743, 2],
    [-73.984293, 40.729468, 1],
    [-73.984293, 40.729468, 2],
  ]);
  expect(dt.headers).toEqual(["longitude", "latitude", "des"]);
});

test("test setDataset method", () => {
  const jsonData = [
    [40.730743, -73.986022, 2],
    [40.729468, -73.984293, 1],
    [40.730743, -73.986022, 2],
  ];
  const dt = new ScatterplotDataTable();
  dt.headers = ["latitude", "longitude", "description"];
  dt.longitudeHeaderIndex = 1;
  dt.latitudeHeaderIndex = 0;
  dt.setDataset(jsonData);
  expect(dt.dataset).toEqual([
    [-73.986022, 40.730743, 2],
    [-73.984293, 40.729468, 1],
    [-73.986022, 40.730743, 2],
  ]);
  expect(dt.headers).toEqual(["longitude", "latitude", "description"]);
});

test("test isValidLongitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLongitude(-74.57689)).toBeTruthy();
});

test("test isValidLongitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLongitude("-74.57689")).toBeTruthy();
});

test("test isValidLongitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLongitude(" -74.57689")).toBeTruthy();
});

test("test isValidLongitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLongitude(74.57689)).toBeTruthy();
});

test("test isValidLongitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLongitude("74.57689")).toBeTruthy();
});

test("test isValidLongitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLongitude(" 74.57689")).toBeTruthy();
});

test("test isValidLongitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLongitude(180)).toBeTruthy();
});

test("test isValidLongitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLongitude(180.1)).not.toBeTruthy();
});

test("test isValidLongitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLongitude(-180)).toBeTruthy();
});

test("test isValidLongitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLongitude(-180.1)).not.toBeTruthy();
});

test("test isValidLongitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLongitude(179.9)).toBeTruthy();
});

test("test isValidLongitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLongitude(-179.9)).toBeTruthy();
});

test("test isValidLongitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLongitude(null)).not.toBeTruthy();
});

test("test isValidLongitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLongitude("")).not.toBeTruthy();
});

test("test isValidLongitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLongitude("abc")).not.toBeTruthy();
});

test("test isValidLatitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLatitude(-74.57689)).toBeTruthy();
});

test("test isValidLatitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLatitude("-74.57689")).toBeTruthy();
});

test("test isValidLatitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLatitude(" -74.57689")).toBeTruthy();
});

test("test isValidLatitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLatitude(74.57689)).toBeTruthy();
});

test("test isValidLatitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLatitude("74.57689")).toBeTruthy();
});

test("test isValidLatitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLatitude(" 74.57689")).toBeTruthy();
});

test("test isValidLatitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLatitude(90)).toBeTruthy();
});

test("test isValidLatitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLatitude(90.1)).not.toBeTruthy();
});

test("test isValidLatitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLatitude(-90)).toBeTruthy();
});

test("test isValidLatitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLatitude(-90.1)).not.toBeTruthy();
});

test("test isValidLatitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLatitude(89.9)).toBeTruthy();
});

test("test isValidLatitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLatitude(-89.9)).toBeTruthy();
});

test("test isValidLatitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLatitude(null)).not.toBeTruthy();
});

test("test isValidLatitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLatitude("")).not.toBeTruthy();
});

test("test isValidLatitude method", () => {
  const dt = new ScatterplotDataTable();
  expect(dt.isValidLatitude("abc")).not.toBeTruthy();
});
