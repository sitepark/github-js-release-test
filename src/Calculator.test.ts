import { describe, it, expect } from "vitest";
import { Calculator } from "./Calculator";

describe("Calculator", () => {
  const calculator = new Calculator();

  describe("add", () => {
    it("should add two positive numbers correctly", () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it("should add negative numbers correctly", () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    it("should add zero correctly", () => {
      expect(calculator.add(5, 0)).toBe(5);
    });
  });

  describe("subtract", () => {
    it("should subtract two positive numbers correctly", () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    it("should subtract negative numbers correctly", () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });
  });

  describe("multiply", () => {
    it("should multiply two positive numbers correctly", () => {
      expect(calculator.multiply(4, 3)).toBe(12);
    });

    it("should multiply by zero correctly", () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    it("should multiply negative numbers correctly", () => {
      expect(calculator.multiply(-4, 3)).toBe(-12);
    });
  });

  describe("divide", () => {
    it("should divide two positive numbers correctly", () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    it("should divide negative numbers correctly", () => {
      expect(calculator.divide(-10, 2)).toBe(-5);
    });

    it("should throw error when dividing by zero", () => {
      expect(() => calculator.divide(10, 0)).toThrow(
        "Division by zero is not allowed",
      );
    });
  });

  describe("power", () => {
    it("should calculate power correctly", () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    it("should handle zero exponent correctly", () => {
      expect(calculator.power(5, 0)).toBe(1);
    });

    it("should handle negative exponent correctly", () => {
      expect(calculator.power(2, -1)).toBe(0.5);
    });
  });

  describe("isEven", () => {
    it("should return true for even numbers", () => {
      expect(calculator.isEven(4)).toBe(true);
    });

    it("should return false for odd numbers", () => {
      expect(calculator.isEven(5)).toBe(false);
    });

    it("should return true for zero", () => {
      expect(calculator.isEven(0)).toBe(true);
    });
  });
});
