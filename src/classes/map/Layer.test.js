import Layer from "./Layer";

test("validate constructor", () => {
  const layer = new Layer({
    id: "123456",
    data: { name: "John", age: 17 },
  });
  expect(layer.id).toBe("123456");
  expect(layer.data).toEqual({ name: "John", age: 17 });
  expect(layer.id).not.toBe("1234567");
  expect(layer.data).not.toEqual({ name: "John", age: 18 });
});
