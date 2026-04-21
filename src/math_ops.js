'use strict';

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('cannot divide by zero');
  }
  return a / b;
}

function percentage(part, whole) {
  if (whole === 0) {
    throw new Error('cannot compute percentage of zero');
  }
  return (part / whole) * 100;
}

function average(values) {
  if (values.length === 0) {
    throw new Error('cannot average an empty list');
  }
  return values.reduce((a, b) => a + b, 0) / values.length;
}

module.exports = { add, subtract, multiply, divide, percentage, average };
