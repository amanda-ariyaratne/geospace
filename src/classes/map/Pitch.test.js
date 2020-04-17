import Pitch from "./Pitch";

test("validate int 10", () => {
  const pitch = new Pitch(10);
  expect(pitch.isValid()).toBeTruthy();
});

test("validate int 0", () => {
  const pitch = new Pitch(0);
  expect(pitch.isValid()).toBeTruthy();
});

test("validate int 60", () => {
  const pitch = new Pitch(60);
  expect(pitch.isValid()).toBeTruthy();
});

test("validate int -1", () => {
  const pitch = new Pitch(-1);
  expect(pitch.isValid()).toBeFalsy();
});

test("validate int 61", () => {
  const pitch = new Pitch(-1);
  expect(pitch.isValid()).toBeFalsy();
});

test("validate str 10", () => {
  const pitch = new Pitch("10");
  expect(pitch.isValid()).toBeTruthy();
});

test("validate str 0", () => {
  const pitch = new Pitch("0");
  expect(pitch.isValid()).toBeTruthy();
});

test("validate str 60", () => {
  const pitch = new Pitch("60");
  expect(pitch.isValid()).toBeTruthy();
});

test("validate str -1", () => {
  const pitch = new Pitch("-1");
  expect(pitch.isValid()).toBeFalsy();
});

test("validate str 61", () => {
  const pitch = new Pitch("-1");
  expect(pitch.isValid()).toBeFalsy();
});

test("validate str hello!", () => {
  const pitch = new Pitch("hello!");
  expect(pitch.isValid()).toBeFalsy();
});
