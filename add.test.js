import { expect, test } from "vitest";
import { add } from "./add.js";

test("empty string should give 0", () => {
  expect(add("")).toBe(0);
});
test("single digit should give correct sum", () => {
  expect(add("1")).toBe(1);
});
test("n digits should give correct sum", () => {
  expect(add("1,5")).toBe(6);
  expect(add("1,5, 8")).toBe(14);
});
test("it should work with new lines also", () => {
  expect(add("1\n5")).toBe(6);
  expect(
    add(`1
    5, 8`)
  ).toBe(14);
});
test("it should work with custom delimeter", () => {
  expect(add("//;\n1;2")).toBe(3);
});
test("it should throw exception if negative number present", () => {
  expect(() => add("-1,2")).toThrow(/negative numbers not allowed -1/);
  expect(() => add("-1,2, -3")).toThrow(/negative numbers not allowed -1,-3/);
});
