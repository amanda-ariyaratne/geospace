import Layer from "./Layer";

test("validate constructor", () => {
  const layer = new Layer({
    name: "John",
    age: 17,
  });
  expect(layer.id).not.toBeNull();
});
