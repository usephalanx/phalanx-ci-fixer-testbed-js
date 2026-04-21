'use strict';

const { add, subtract, multiply, divide } = require('../src/math_ops');

describe('add', () => {
  it('adds positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
  it('handles negatives', () => {
    expect(add(-1, 1)).toBe(0);
  });
  it('handles floats', () => {
    expect(add(0.5, 0.25)).toBe(0.75);
  });
});

describe('subtract', () => {
  it('subtracts positives', () => {
    expect(subtract(5, 3)).toBe(2);
  });
  it('goes negative', () => {
    expect(subtract(0, 10)).toBe(-10);
  });
});

describe('multiply', () => {
  it('multiplies positives', () => {
    expect(multiply(2, 3)).toBe(6);
  });
  it('handles negatives', () => {
    expect(multiply(-1, 5)).toBe(-5);
  });
  it('handles zero', () => {
    expect(multiply(0, 100)).toBe(0);
  });
});

describe('divide', () => {
  it('divides cleanly', () => {
    expect(divide(6, 3)).toBe(2);
  });
  it('handles fractions', () => {
    expect(divide(1, 4)).toBe(0.25);
  });
  it('throws on zero denominator', () => {
    expect(() => divide(1, 0)).toThrow('cannot divide by zero');
  });
});
