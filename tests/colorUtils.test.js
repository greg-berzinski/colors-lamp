const { isValidHexColor, formatColorName } = require("../assets/js/colorUtils.js");

test("validates hex color values", () => {
  expect(isValidHexColor("#fff")).toBe(true);
  expect(isValidHexColor("#ffffff")).toBe(true);
  expect(isValidHexColor("blue")).toBe(false);
});

test("formats color names", () => {
  expect(formatColorName("  Red  ")).toBe("red");
});