import Scatterplot from "./Scatterplot";

test("validate constructor", () => {
  const layer = new Scatterplot({
    id: "123456",
    data: [[-73.986022, 40.730743, 2]],
    radiusScale: 1,
    pickable: true,
    opacity: 0.5,
    radiusMinPixels: 1,
    getRadius: 1,
    getColor: [255, 0, 0],
  });
  expect(layer.radiusScale).toBe(1);
  expect(layer.pickable).toBeTruthy();
  expect(layer.opacity).toBe(0.5);
  expect(layer.radiusMinPixels).toBe(2);
  expect(layer.getRadius).toBe(1);
  expect(layer.getColor).toEqual([255, 0, 0]);
});

const layer = new Scatterplot({
  id: "123456",
  data: [[-73.986022, 40.730743, 2]],
  radiusScale: 1,
  pickable: true,
  opacity: 0.5,
  radiusMinPixels: 1,
  getRadius: 1,
  getColor: [255, 0, 0],
});

test("validate radiusScale", () => {
  const layer = new Scatterplot({});
  layer.setRadiusScale(1);
  expect(layer.validateRadiusScale()).toBeTruthy();

  layer.setRadiusScale(-1);
  expect(layer.validateRadiusScale()).not.toBeTruthy();

  layer.setRadiusScale("abc");
  expect(layer.validateRadiusScale()).toBeFalsy();

  layer.setRadiusScale("");
  expect(layer.validateRadiusScale()).toBeFalsy();

  layer.setRadiusScale(null);
  expect(layer.validateRadiusScale()).toBeFalsy();

  layer.setRadiusScale([]);
  expect(layer.validateRadiusScale()).toBeFalsy();
});

test("validate pickable", () => {
  const layer = new Scatterplot({});
  layer.setPickable(true);
  expect(layer.validatePickable()).toBeTruthy();

  layer.setPickable(false);
  expect(layer.validatePickable()).toBeTruthy();

  layer.setPickable(0);
  expect(layer.validatePickable()).not.toBeTruthy();

  layer.setPickable(1);
  expect(layer.validatePickable()).not.toBeTruthy();

  layer.setPickable(-1);
  expect(layer.validatePickable()).not.toBeTruthy();

  layer.setPickable("abc");
  expect(layer.validatePickable()).not.toBeTruthy();

  layer.setPickable("");
  expect(layer.validatePickable()).not.toBeTruthy();

  layer.setPickable(null);
  expect(layer.validatePickable()).not.toBeTruthy();

  layer.setPickable([]);
  expect(layer.validatePickable()).not.toBeTruthy();
});

test("validate opacity", () => {
  const layer = new Scatterplot({});
  layer.setOpacity(0);
  expect(layer.validateOpacity()).toBeTruthy();

  layer.setOpacity(0.5);
  expect(layer.validateOpacity()).toBeTruthy();

  layer.setOpacity(1);
  expect(layer.validateOpacity()).toBeTruthy();

  layer.setOpacity(1.5);
  expect(layer.validateOpacity()).toBeFalsy();

  layer.setOpacity(-1);
  expect(layer.validateOpacity()).toBeFalsy();

  layer.setOpacity("abc");
  expect(layer.validateOpacity()).toBeFalsy();

  layer.setOpacity("");
  expect(layer.validateOpacity()).toBeFalsy();

  layer.setOpacity(null);
  expect(layer.validateOpacity()).toBeFalsy();

  layer.setOpacity([]);
  expect(layer.validateOpacity()).toBeFalsy();
});
